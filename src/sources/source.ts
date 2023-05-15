import { Axios } from "axios";
import { Resource } from "./resource";
import { ResourceMetadata } from "./resource";

export class BaseSource {
  public name: string;
  public type: SourceType;
  public accessType: AccessType;
  public resources: {
    [x: string]: Resource<any, any>;
  };
  public metadata: Metadata;

  public constructor(name: string, type: SourceType, accessType: AccessType) {
    this.name = name;
    this.type = type;
    this.accessType = accessType;
    this.resources = {};
    this.metadata = {};
  }

  public getName() {
    return this.name;
  }

  public getType() {
    return this.type;
  }

  public getAccessType() {
    return this.accessType;
  }

  public getResources() {
    return this.resources;
  }

  public getMetadata() {
    return this.metadata;
  }
}

export class OAuth2Source extends BaseSource {
  public constructor(name: string) {
    super(name, "OAuth2", "APIKey");
  }

  public isTokenExpired() {
    return false;
  }
}

export interface Source {
  name: string;
  type: SourceType;
  accessType: AccessType;
  description: string;
  resources: {
    [x: string]: Resource<any, any>;
  };
  metadata: Metadata;
  getAuthUrl: (
    state: string,
    credentials: string,
    redirectUrl: string
  ) => string;
  getToken: (credential: string) => { accessToken: string };
  getBaseUrl: () => string;
  getAuthHeaders: (credential: { accessToken: string }) => {
    Authorization: string;
  };

  handleAuthCallback(
    code: string,
    credentials: any,
    redirectUrl: string
  ): Promise<any>;

  getExternalAccountId: (authClient: Axios) => Promise<string>;

  getSourceJSONSchema: () => any;
}

// export interface Resource<Params, ReturnType> {
//   name: string;
//   type: ResourceType;
//   description: string;
//   action: (authenticatedClient: Axios, params: Params) => Promise<ReturnType>;
// }

// type ResourceType = 'get' | 'mutate';
type SourceType = "OAuth2" | "basic" | "APIKey";
type AccessType = "APIKey" | "PuppeteerCookies";
type Metadata =
  | {
      name: string;
      friendlyName: string;
      description: string;
      icon: string;
      color: string[];
      auth: { authType: string; authStart: string };
      policyConfig: {
        type: SourceType;
        credentials: {
          allowed: boolean;
          fields: CredentialField[];
        };
      };
      resources: ResourceMetadata[];
    }
  | {};
type CredentialField = {
  name: string;
  friendlyName: string;
  type: CredentialUse;
};
type CredentialUse = "auth" | "access";
