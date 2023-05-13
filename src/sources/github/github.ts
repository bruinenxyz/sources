import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import { GithubProfile, GithubRepo } from "./github.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import _ from "lodash";

type GithubProfileType = FromSchema<typeof GithubProfile>;
type GithubRepoType = FromSchema<typeof GithubRepo>;

const github_api_url = "https://api.github.com";
const github_login_url = "https://github.com/login/oauth/";

const githubScopes = ["user", "repo", "gist"];

async function getRepos(
  authClient: Axios,
  params: {}
): Promise<GithubRepoType> {
  return authClient.get("/user/repos");
async function getRepos(
  authClient: Axios,
  params: {}
): Promise<GithubRepoType> {
  return authClient.get("/user/repos");
}

async function getProfile(authClient: Axios): Promise<GithubProfileType> {
  return authClient.get("/user/profile");


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
        "get",
        getRepos,
        {},
        GithubRepo
      ),
      profile: new Resource<{}, GithubProfileType>(
        "profile",
        "get",
        getProfile,
        {},
        GithubProfile
      ),
    };
    this.metadata = {
      friendlyName: "Github",
      description: "Developer focused social network, show us your best repos",
      name: this.getName(),
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
    };
  }

  public getToken = (credential: string): { accessToken: string } => {
    return JSON.parse(credential) as { accessToken: string };
  };

  public getBaseUrl = () => {
    return "https://api.github.com";
  public getToken = (credential: string): { accessToken: string } => {
    return JSON.parse(credential) as { accessToken: string };
  };

  public getBaseUrl = () => {
    return "https://api.github.com";
  };

  public getAuthHeaders = (credential: { accessToken: string }) => {
    return {
      headers: {
        Authorization: `Bearer ${credential.accessToken}`,
      },
    };
  };

  public async handleAuthCallback(
    req: any,
    credentials: any,
    redirectUrl: string
  ) {
    // eslint-disable-next-line
    const code = req.body.code as string;
    // eslint-disable-next-line
    const state = req.body.state as string;
    const url =
      `${github_login_url}access_token?` +
      `client_id=${credentials.id}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&client_secret=${credentials.secret}` +
      `&code=${code}` +
      "&grant_type=authorization_code";
      "&grant_type=authorization_code";

    // eslint-disable-next-line
    const { data }: any = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });

    return {
      accessCredentials: JSON.stringify({
        // eslint-disable-next-line
        accessToken: data.access_token,
      }),
      state,
    };
  }

  public getAuthUrl = (
    state: string,
    credentials: any,
    redirectUrl: string
  ) => {
    const scopes = _.join(githubScopes, " ");
    const url =
      `${github_login_url}authorize?` +
      `client_id=${clientId
      }` +
      `&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}` +
      `&state=${state}` +
      `&scope=${encodeURIComponent(scopes)}` +
      "&response_type=code";
    return url;
  };

  public async getExternalAccountId(authClient: Axios) {
    const profile = await getProfile(authClient);
    return profile.id as string;
  }

  public getSourceJSONSchema = () => null;
}
