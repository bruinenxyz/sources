import { Axios } from "axios";
import { PostResource, Resource, PatchResource, DeleteResource } from "./resource";
import { ResourceMetadata, PostResourceMetadata, PatchResourceMetadata, DeleteResourceMetadata } from "./resource";
export declare class BaseSource {
    name: string;
    type: SourceType;
    accessType: AccessType;
    resources: {
        [x: string]: Resource<any, any> | PostResource<any, any, any>;
    };
    metadata: Metadata;
    constructor(name: string, type: SourceType, accessType: AccessType);
    getName(): string;
    getType(): SourceType;
    getAccessType(): AccessType;
    getResources(): {
        [x: string]: Resource<any, any> | PostResource<any, any, any>;
    };
    getMetadata(): Metadata;
}
export declare class OAuth2Source extends BaseSource {
    constructor(name: string);
    isTokenExpired(accessCredentials: any): boolean;
    refreshToken(authCredential: any, accessCredential: any): Promise<any>;
}
export interface Source {
    name: string;
    type: SourceType;
    accessType: AccessType;
    description: string;
    resources: {
        [x: string]: Resource<any, any> | PostResource<any, any, any> | PatchResource<any, any, any> | DeleteResource<any, any>;
    };
    metadata: Metadata;
    getAuthUrl: (state: string, credentials: string, redirectUrl: string) => string;
    getToken(credential: string): Promise<{
        accessToken: string;
    }>;
    getBaseUrl: (resourceName: string) => string;
    getAuthHeaders: (credential: any) => {
        Authorization: string;
    } | {};
    handleAuthCallback(code: string, credentials: any, redirectUrl: string): Promise<any>;
    deactivate(accessCredentials?: any): Promise<string> | string;
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
    resources: (ResourceMetadata | PostResourceMetadata | PatchResourceMetadata | DeleteResourceMetadata)[];
} | {};
type CredentialField = {
    name: string;
    friendlyName: string;
    type: CredentialUse;
};
type CredentialUse = "auth" | "access";
export {};
