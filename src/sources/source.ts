import { Axios } from "axios";
import { Resource } from "./resource";

export class BaseSource {
  public name: string;
  public type: SourceType;
  public resources: {
    [x: string]: Resource<any, any>;
  };

  public constructor(name: string, type: SourceType) {
    this.name = name;
    this.type = type;
    this.resources = {};
  }

  public getName() {
    return this.name;
  }

  public getType() {
    return this.type;
  }

  public getResources() {
    return this.resources;
  }
}

export class OAuth2Source extends BaseSource {
  public constructor(name: string) {
    super(name, "oauth2");
  }

  public isTokenExpired() {
    return false;
  }
}

export interface Source {
  name: string;
  type: SourceType;
  description: string;
  resources: {
    [x: string]: Resource<any, any>;
  };
  getAuthUrl: (state: string, clientId: string, redirectUrl: string) => string;
  getToken: (credential: string) => { accessToken: string };
  getBaseUrl: () => string;
  getAuthHeaders: (credential: { accessToken: string }) => {
    headers: { Authorization: string };
  };

  handleAuthCallback(
    httpClient: Axios,
    req: any,
    clientId: string,
    clientSecret: string,
    redirectUrl: string
  ): Promise<any>;

  getSourceJSONSchema: () => any;
}

// export interface Resource<Params, ReturnType> {
//   name: string;
//   type: ResourceType;
//   description: string;
//   action: (authenticatedClient: Axios, params: Params) => Promise<ReturnType>;
// }

// type ResourceType = 'get' | 'mutate';
type SourceType = "oauth2" | "basic" | "apikey";
