import { Axios } from "axios";
import { Resource } from "./resource";
export declare class BaseSource {
    name: string;
    type: SourceType;
    resources: {
        [x: string]: Resource<any, any>;
    };
    constructor(name: string, type: SourceType);
    getName(): string;
    getType(): SourceType;
    getResources(): {
        [x: string]: Resource<any, any>;
    };
}
export declare class OAuth2Source extends BaseSource {
    constructor(name: string);
    isTokenExpired(): boolean;
}
export interface Source {
    name: string;
    type: SourceType;
    description: string;
    resources: {
        [x: string]: Resource<any, any>;
    };
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
type SourceType = "oauth2" | "basic" | "apikey";
export {};
