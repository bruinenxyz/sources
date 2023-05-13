import { Axios } from "axios";
import { Resource } from "./resource";
export declare class BaseSource {
    name: string;
    type: SourceType;
    accessType: AccessType;
    resources: {
        [x: string]: Resource<any, any>;
    };
    metadata: Metadata;
    constructor(name: string, type: SourceType, accessType: AccessType);
    getName(): string;
    getType(): SourceType;
    getAccessType(): AccessType;
    getResources(): {
        [x: string]: Resource<any, any>;
    };
    getMetadata(): Metadata;
}
export declare class OAuth2Source extends BaseSource {
    constructor(name: string);
    isTokenExpired(): boolean;
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
    getAuthUrl: (state: string, clientId: string, redirectUrl: string) => string;
    getToken: (credential: string) => {
        accessToken: string;
    };
    getBaseUrl: () => string;
    getAuthHeaders: (credential: {
        accessToken: string;
    }) => {
        headers: {
            Authorization: string;
        };
    };
    handleAuthCallback(httpClient: Axios, req: any, clientId: string, clientSecret: string, redirectUrl: string): Promise<any>;
    getExternalAccountId: (authClient: Axios) => Promise<string>;
    getSourceJSONSchema: () => any;
}
type SourceType = "OAuth2" | "basic" | "APIKey";
type AccessType = "APIKey" | "PuppeteerCookies";
type Metadata = {
    friendlyName: string;
    description: string;
    name: string;
    icon: string;
    color: string[];
    auth: {
        authType: string;
        authStart: string;
    };
    policyConfig: {
        type: SourceType;
        credentials: {
            allowed: boolean;
            fields: CredentialField[];
        };
    };
} | {};
type CredentialField = {
    name: string;
    friendlyName: string;
    type: CredentialUse;
};
type CredentialUse = "auth" | "access";
export {};
