import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { Axios } from "axios";
export declare class Google extends OAuth2Source implements Source {
    resources: {
        [x: string]: Resource<any, any>;
    };
    description: string;
    constructor();
    getToken(credential: string): Promise<{
        accessToken: any;
    }>;
    getBaseUrl: (resourceName: string) => "https://gmail.googleapis.com/gmail/v1/users/me" | "https://www.googleapis.com/calendar/v3";
    getAuthHeaders: (credential: {
        accessToken: string;
        refreshToken: string;
        expires: Date;
    }) => {
        Authorization: string;
    };
    handleAuthCallback(code: string, credentials: any, redirectUrl: string): Promise<"" | {
        accessToken: any;
        refreshToken: any;
        expires: Date;
        data: any;
    }>;
    deactivate: (accessCredentials?: any) => Promise<string>;
    getAuthUrl: (state: string, credentials: any, redirectUrl: string) => string;
    isTokenExpired(accessCredentials: any): boolean;
    refreshToken(authCredential: any, accessCredential: any): Promise<{
        data: any;
        expires: Date;
        error?: undefined;
    } | {
        error: any;
        data?: undefined;
        expires?: undefined;
    }>;
    getExternalAccountId(authClient: Axios): Promise<string>;
    getSourceJSONSchema: () => null;
}
