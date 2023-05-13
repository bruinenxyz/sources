"use strict";
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
const lodash_1 = __importDefault(require("lodash"));
const github_api_url = "https://api.github.com";
const github_login_url = "https://github.com/login/oauth/";
const githubScopes = ["user", "repo", "gist"];
function getRepos(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        return authClient.get("/user/repos");
    });
}
function getProfile(authClient) {
    return __awaiter(this, void 0, void 0, function* () {
        return authClient.get("/user/profile");
    });
}
class Github extends source_1.OAuth2Source {
    constructor() {
        super("github");
        this.getToken = (credential) => {
            return JSON.parse(credential);
        };
        this.getBaseUrl = () => {
            return "https://api.github.com";
        };
        this.getAuthHeaders = (credential) => {
            return {
                headers: {
                    Authorization: `Bearer ${credential.accessToken}`,
                },
            };
        };
        this.getAuthUrl = (state, credentials, redirectUrl) => {
            const scopes = lodash_1.default.join(githubScopes, " ");
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
            repos: new resource_1.Resource("repos", "get", getRepos, {}, github_types_1.GithubRepo),
            profile: new resource_1.Resource("profile", "get", getProfile, {}, github_types_1.GithubProfile),
        };
        this.metadata = {
            friendlyName: "Github",
            description: "Developer focused social network, show us your best repos",
            name: this.getName(),
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
        };
    }
    handleAuthCallback(req, credentials, redirectUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            // eslint-disable-next-line
            const code = req.body.code;
            // eslint-disable-next-line
            const state = req.body.state;
            const url = `${github_login_url}access_token?` +
                `client_id=${credentials.id}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&client_secret=${credentials.secret}` +
                `&code=${code}` +
                "&grant_type=authorization_code";
            // eslint-disable-next-line
            const { data } = yield axios_1.default.get(url, {
                headers: {
                    Accept: "application/json",
                },
            });
            return {
                accessCredentials: JSON.stringify({
                    // eslint-disable-next-line
                    accessToken: data.access_token,
                }),
                state,
            };
        });
    }
    getExternalAccountId(authClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield getProfile(authClient);
            return profile.id;
        });
    }
}
exports.Github = Github;
