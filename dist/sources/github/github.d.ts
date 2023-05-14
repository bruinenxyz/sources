import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { Axios } from "axios";
export declare class Github extends OAuth2Source implements Source {
    resources: {
        [x: string]: Resource<any, any>;
    };
    description: string;
    constructor();
    getToken: (credential: string) => {
        accessToken: string;
    };
    getBaseUrl: () => string;
    getAuthHeaders: (credential: {
        accessToken: string;
    }) => {
        Authorization: string;
    };
    handleAuthCallback(code: string, state: string, credentials: any, redirectUrl: string): Promise<"" | {
        accessToken: any;
    }>;
    getAuthUrl: (state: string, credentials: any, redirectUrl: string) => string;
    getExternalAccountId(authClient: Axios): Promise<string>;
    getSourceJSONSchema: () => null;
}
