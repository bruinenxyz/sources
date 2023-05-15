import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import { GithubProfile, GithubRepo } from "./github.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";

type GithubProfileType = FromSchema<typeof GithubProfile>;
type GithubRepoType = FromSchema<typeof GithubRepo>;

const github_api_url = "https://api.github.com";
const github_login_url = "https://github.com/login/oauth/";

const githubScopes = ["user", "repo", "gist"];

async function getRepos(
  authClient: Axios,
  params?: {}
): Promise<GithubRepoType> {
  const { data } = await authClient.get("/user/repos");
  return data;
}

async function getProfile(
  authClient: Axios,
  params?: {}
): Promise<GithubProfileType> {
  const { data } = await authClient.get("/user");
  return data;
}

export class Github extends OAuth2Source implements Source {
  resources: {
    [x: string]: Resource<any, any>;
  };
  description: string;

  public constructor() {
    super("github");
    this.description = "A source for github";
    this.resources = {
      repos: new Resource<{}, GithubRepoType>(
        "repos",
        "GitHub Repos",
        "get",
        "Your github repos",
        getRepos,
        {},
        GithubRepo
      ),
      profile: new Resource<{}, GithubProfileType>(
        "profile",
        "GitHub Profile",
        "get",
        "Your basic github profile",
        getProfile,
        {},
        GithubProfile
      ),
    };
    this.metadata = {
      name: this.getName(),
      friendlyName: "GitHub",
      description: "Developer focused social network, show us your best repos",
      icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
      color: ["#333"],
      auth: { authType: "oAuth2", authStart: "" },
      policyConfig: {
        type: this.getType(),
        credentials: {
          allowed: true,
          fields: [
            { name: "id", friendlyName: "ID", type: "auth" },
            {
              name: "secret",
              friendlyName: "Secret",
              type: "auth",
            },
          ],
        },
      },
      resources: Object.values(this.resources).map((resource) =>
        resource.getJSON()
      ),
    };
  }

  public getToken = (credential: string): { accessToken: string } => {
    return JSON.parse(credential) as { accessToken: string };
  };

  public getBaseUrl = () => {
    return "https://api.github.com";
  };

  public getAuthHeaders = (credential: { accessToken: string }) => {
    return {
      Authorization: `Bearer ${credential.accessToken}`,
    };
  };

  public async handleAuthCallback(
    code: string,
    credentials: any,
    redirectUrl: string
  ) {
    const url =
      `${github_login_url}access_token?` +
      `client_id=${credentials.id}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&client_secret=${credentials.secret}` +
      `&code=${code}` +
      "&grant_type=authorization_code";

    try {
      // eslint-disable-next-line
      const { data }: any = await axios.post(
        url,
        {},
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      return {
        // eslint-disable-next-line
        accessToken: data.access_token,
      };
    } catch (error) {
      return "";
    }
  }

  public getAuthUrl = (
    state: string,
    credentials: any,
    redirectUrl: string
  ) => {
    const scopes = _.join(githubScopes, " ");
    const url =
      `${github_login_url}authorize?` +
      `client_id=${credentials.id}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&state=${state}` +
      `&scope=${encodeURIComponent(scopes)}` +
      "&response_type=code";
    return url;
  };

  public async getExternalAccountId(authClient: Axios) {
    const { id } = await getProfile(authClient);
    if (id) {
      return id.toString();
    }
    return "";
  }

  public getSourceJSONSchema = () => null;
}
