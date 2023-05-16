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
exports.Github = void 0;
const resource_1 = require("../resource");
const source_1 = require("../source");
const github_types_1 = require("./github.types");
const axios_1 = __importDefault(require("axios"));
const _ = __importStar(require("lodash"));
const github_api_url = "https://api.github.com";
const github_login_url = "https://github.com/login/oauth/";
const githubScopes = ["user", "repo", "gist"];
function getRepos(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get("/user/repos");
        return data;
    });
}
function getProfile(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get("/user");
        return data;
    });
}
class Github extends source_1.OAuth2Source {
    constructor() {
        super("github");
        this.getToken = (credential) => {
            return JSON.parse(credential);
        };
        this.getBaseUrl = () => {
            return github_api_url;
        };
        this.getAuthHeaders = (credential) => {
            return {
                Authorization: `Bearer ${credential.accessToken}`,
            };
        };
        this.getAuthUrl = (state, credentials, redirectUrl) => {
            const scopes = _.join(githubScopes, " ");
            const url = `${github_login_url}authorize?` +
                `client_id=${credentials.id}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&state=${state}` +
                `&scope=${encodeURIComponent(scopes)}` +
                "&response_type=code";
            return url;
        };
        this.getSourceJSONSchema = () => null;
        this.description = "A source for github";
        this.resources = {
            repos: new resource_1.Resource("repos", "GitHub Repos", "get", "Your github repos", getRepos, null, github_types_1.GithubRepo),
            profile: new resource_1.Resource("profile", "GitHub Profile", "get", "Your basic github profile", getProfile, null, github_types_1.GithubProfile),
        };
        this.metadata = {
            name: this.getName(),
            friendlyName: "GitHub",
            description: "Developer focused social network, show us your best repos",
            icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg",
            color: ["#333"],
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
    handleAuthCallback(code, credentials, redirectUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${github_login_url}access_token?` +
                `client_id=${credentials.id}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&client_secret=${credentials.secret}` +
                `&code=${code}` +
                "&grant_type=authorization_code";
            try {
                // eslint-disable-next-line
                const { data } = yield axios_1.default.post(url, {}, {
                    headers: {
                        Accept: "application/json",
                    },
                });
                return {
                    // eslint-disable-next-line
                    accessToken: data.access_token,
                };
            }
            catch (error) {
                return "";
            }
        });
    }
    getExternalAccountId(authClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield getProfile(authClient);
            if (id) {
                return id.toString();
            }
            return "";
        });
    }
}
exports.Github = Github;
