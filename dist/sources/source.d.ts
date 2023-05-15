import { Axios } from "axios";
import { Resource } from "./resource";
import { ResourceMetadata } from "./resource";
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
    getAuthUrl: (state: string, credentials: string, redirectUrl: string) => string;
    getToken: (credential: string) => {
        accessToken: string;
    };
    getBaseUrl: () => string;
    getAuthHeaders: (credential: {
        accessToken: string;
    }) => {
        Authorization: string;
    };
    handleAuthCallback(code: string, credentials: any, redirectUrl: string): Promise<any>;
    getExternalAccountId: (authClient: Axios) => Promise<string>;
    getSourceJSONSchema: () => any;
}
type SourceType = "OAuth2" | "basic" | "APIKey";
type AccessType = "APIKey" | "PuppeteerCookies";
type Metadata = {
    name: string;
    friendlyName: string;
    description: string;
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
    resources: ResourceMetadata[];
} | {};
type CredentialField = {
    name: string;
    friendlyName: string;
    type: CredentialUse;
};
type CredentialUse = "auth" | "access";
export {};