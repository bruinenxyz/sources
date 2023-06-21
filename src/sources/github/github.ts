import { Resource, GetResource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import { GithubProfile, GithubRepos } from "./github.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";

type GithubProfileType = FromSchema<typeof GithubProfile>;
type GithubReposType = FromSchema<typeof GithubRepos>;

const github_api_url = "https://api.github.com";
const github_login_url = "https://github.com/login/oauth/";

const githubScopes = ["user", "repo", "gist"];

async function getRepos(
  authClient: Axios,
  params?: null
): Promise<GithubReposType> {
  const { data }: { data: GithubReposType } = await authClient.get(
    "/user/repos"
  );
  return data;
}

async function getProfile(
  authClient: Axios,
  params?: null
): Promise<GithubProfileType> {
  const { data }: { data: GithubProfileType } = await authClient.get("/user");
  return data;
}

export class Github extends OAuth2Source implements Source {
  resources: {
    [x: string]: Resource<any, any, any>;
  };
  description: string;

  public constructor() {
    super("github");
    this.description = "A source for github";
    this.resources = {
      repos: new GetResource<null, GithubReposType>(
        "repos",
        "GitHub Repos",
        "get",
        "Your github repos",
        getRepos,
        null,
        GithubRepos
      ),
      profile: new GetResource<null, GithubProfileType>(
        "profile",
        "GitHub Profile",
        "get",
        "Your basic github profile",
        getProfile,
        null,
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

  public async getToken(credential: string) {
    return (await JSON.parse(credential)) as { accessToken: string };
  }

  public getBaseUrl = (resourceName: string) => {
    return github_api_url;
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

  public deactivate(accessCredentials?: any) {
    return "success";
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
