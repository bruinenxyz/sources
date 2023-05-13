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
        headers: {
            Authorization: string;
        };
    };
    handleAuthCallback(httpoClient: Axios, req: any, clientId: string, clientSecret: string, redirectUrl: string): Promise<{
        credentials: {
            accessToken: any;
        };
        state: string;
    }>;
    getAuthUrl: (state: string, clientId: string, redirectUrl: string) => string;
    getExternalAccountId(authClient: Axios): Promise<string>;
    getSourceJSONSchema: () => null;
}
