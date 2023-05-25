"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Google = void 0;
const resource_1 = require("../resource");
const source_1 = require("../source");
const google_types_1 = require("./google.types");
const axios_1 = __importDefault(require("axios"));
const _ = __importStar(require("lodash"));
const google_auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
const google_token_url = "https://oauth2.googleapis.com";
const google_gmail_url = "https://gmail.googleapis.com/gmail/v1/users/me";
const google_calendar_url = "https://www.googleapis.com/calendar/v3";
// To view Google API Scopes go to https://developers.google.com/identity/protocols/oauth2/scopes
const googleScopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/calendar.settings.readonly",
    "https://www.googleapis.com/auth/calendar.readonly",
    "https://www.googleapis.com/auth/calendar.events.readonly",
];
function getProfile(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get("/profile");
        return data;
    });
}
class Google extends source_1.OAuth2Source {
    constructor() {
        super("google");
        this.getBaseUrl = (resourceName) => {
            const calendarArray = [""]; //TODO: complete array
            if (calendarArray.includes(resourceName)) {
                return google_calendar_url;
            }
            else {
                return google_gmail_url;
            }
        };
        this.getAuthHeaders = (credential) => {
            return {
                Authorization: `Bearer ${credential.accessToken}`,
            };
        };
        this.getAuthUrl = (state, credentials, redirectUrl) => {
            const scopes = _.join(googleScopes, " ");
            const url = `${google_auth_url}?` +
                `scope=${encodeURIComponent(scopes)}` +
                `&access_type=offline` +
                `&response_type=code` +
                `&state=${state}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&client_id=${credentials.id}`;
            return url;
        };
        this.getSourceJSONSchema = () => null;
        this.description = "A source for Google";
        this.resources = {
            profile: new resource_1.Resource("profile", "Google Profile", "get", "Your basic google profile", getProfile, null, google_types_1.GoogleProfile),
        };
        this.metadata = {
            name: this.getName(),
            friendlyName: "Google",
            description: "Provider of online services including search, email, storage, productivity tools, advertising, and mobile OS.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
            color: ["#eb4132", "#fbbd01", "#31a952", "#4086f4"],
            auth: { authType: "oAuth2", authStart: "" },
            policyConfig: {
                type: this.getType(),
                credentials: {
                    allowed: true,
                    fields: [
                        { name: "id", friendlyName: "ID", type: "auth" },
                        {
                            name: "secret",
                            friendlyName: "Secret",
                            type: "auth",
                        },
                    ],
                },
            },
            resources: Object.values(this.resources).map((resource) => resource.getJSON()),
        };
    }
    getToken(credential) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedCreds = yield JSON.parse(credential);
            return { accessToken: parsedCreds.accessToken };
        });
    }
    handleAuthCallback(code, credentials, redirectUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${google_token_url}/token?` +
                `client_id=${credentials.id}` +
                `&client_secret=${credentials.secret}` +
                `&code=${code}` +
                "&grant_type=authorization_code" +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
            try {
                // eslint-disable-next-line
                const { data } = yield axios_1.default.post(url, {}, {
                    headers: {
                        Accept: "application/json",
                    },
                });
                let expires = new Date();
                expires.setSeconds(expires.getSeconds() + data.expires_in);
                return {
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token,
                    expires,
                };
            }
            catch (error) {
                return "";
            }
        });
    }
    deactivate(accessCredentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const access = yield JSON.parse(accessCredentials);
            try {
                const { data } = yield axios_1.default.post(`${google_token_url}/revoke?token=${access.accessToken}`);
                return;
            }
            catch (error) {
                console.log(`Google deactivation error: ${error}`);
                return;
            }
        });
    }
    isTokenExpired(accessCredentials) {
        if (new Date() > new Date(accessCredentials.expires)) {
            return true;
        }
        return false;
    }
    refreshToken(authCredential, refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${google_token_url}/token?` +
                `client_id=${authCredential.id}` +
                `&client_secret=${authCredential.secret}` +
                `&grant_type=refresh_token` +
                `&refresh_token=${refreshToken}`;
            const { data } = yield axios_1.default.post(url, {}, {
                headers: {
                    Accept: "application/json",
                },
            });
            let expires = new Date();
            expires.setSeconds(expires.getSeconds() + data.expires_in);
            return {
                accessToken: data.access_token,
                refreshToken: refreshToken,
                expires,
            };
        });
    }
    getExternalAccountId(authClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const { emailAddress } = yield getProfile(authClient);
            if (emailAddress) {
                return emailAddress.toString();
            }
            return "";
        });
    }
}
exports.Google = Google;
