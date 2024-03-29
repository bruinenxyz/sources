import { Resource, PostResource, PatchResource, DeleteResource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { Axios } from "axios";
export declare class Notion extends OAuth2Source implements Source {
    resources: {
        [x: string]: Resource<any, any> | PostResource<any, any, any> | PatchResource<any, any, any> | DeleteResource<any, any>;
    };
    description: string;
    constructor();
    getToken(credential: string): Promise<{
        accessToken: any;
    }>;
    getBaseUrl: (resourceName: string) => string;
    getAuthHeaders: (credential: {
        accessToken: string;
    }) => {
        Authorization: string;
        "Notion-Version": string;
    };
    handleAuthCallback(code: string, credentials: any, redirectUrl: string): Promise<"" | {
        accessToken: any;
    }>;
    deactivate(accessCredentials?: any): string;
    getAuthUrl: (state: string, credentials: any, redirectUrl: string) => string;
    getExternalAccountId(authClient: Axios): Promise<string>;
    getSourceJSONSchema: () => null;
}
