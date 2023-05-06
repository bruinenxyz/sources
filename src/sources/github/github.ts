import { Resource } from '../resource';
import { OAuth2Source, Source } from '../source';
import { FromSchema } from "json-schema-to-ts";
import { GithubProfile, GithubRepo } from './github.types';
import { Axios, AxiosResponse } from 'axios';
import _ from 'lodash';

type GithubProfileType = FromSchema<typeof GithubProfile>;
type GithubRepoType = FromSchema<typeof GithubRepo>;

const github_api_url = "https://api.github.com";
const github_login_url = "https://github.com/login/oauth/";

const githubScopes = ["user", "repo", "gist"];

function getRepos(authClient: Axios, params: {}): Promise<GithubRepoType> {
  return authClient.get('https://api.github.com/user/repos');
}

function getProfile(authClient: Axios): Promise<GithubProfileType> {
  return authClient.get('https://api.github.com/user/profile');
}

export class Github extends OAuth2Source implements Source {
  resources: {
    [x: string]: Resource<any, any>;
  }
  description: string; 

  public constructor() {
    super('github');
    this.description = "A source for github"
    this.resources = {
      'repos': new Resource<{}, GithubRepoType>('repos', 'get', getRepos, {}, GithubRepo),
      'profile': new Resource<{}, GithubProfileType>('profile', 'get', getProfile, {}, GithubProfile)
    }
  }

  public getToken = (credential: string): {accessToken: string} => {
    return JSON.parse(credential) as {accessToken: string};
  };

  public getAuthHeaders = (credential: { accessToken: string }) => {
    return {
      headers: {
        Authorization: `Bearer ${credential.accessToken}`,
      },
    };
  };

  public async handleAuthCallback(httpoClient: Axios, req: any, clientId: string, clientSecret: string, redirectUrl: string, ){
    // eslint-disable-next-line
    const code = req.body.code as string;
    const url =
      `${github_login_url}access_token?` +
      `client_id=${
        clientId
      }` +
      `&redirect_uri=${encodeURIComponent(
        redirectUrl
      )}` +
      `&client_secret=${
        clientSecret
      }` +
      `&code=${code}` +
      `&grant_type=authorization_code`;

    // eslint-disable-next-line
    const { data }: any = await httpoClient.get(url, {
      headers: {
        Accept: "application/json",
      },
    });

    return {
      // eslint-disable-next-line
      accessToken: data.access_token,
    };
  }

  public getAuthUrl = (state: string, clientId: string, redirectUrl: string) => {
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
      `&response_type=code`;
    return url;
  };

  public getSourceJSONSchema = () => null;
}
