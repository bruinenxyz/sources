import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { Axios } from "axios";
export declare class Slack extends OAuth2Source implements Source {
    resources: {
        [x: string]: Resource<any, any, any>;
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
    };
    handleAuthCallback(code: string, credentials: any, redirectUrl: string): Promise<"" | {
        accessToken: any;
    }>;
    deactivate(accessCredentials: any): Promise<string>;
    getAuthUrl: (state: string, credentials: any, redirectUrl: string) => string;
    getExternalAccountId(authClient: Axios): Promise<any>;
    getSourceJSONSchema: () => null;
}
