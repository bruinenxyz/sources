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
exports.Notion = void 0;
const resource_1 = require("../resource");
const source_1 = require("../source");
const notion_types_1 = require("./notion.types");
const axios_1 = __importDefault(require("axios"));
const _ = __importStar(require("lodash"));
const qs_1 = __importDefault(require("qs"));
const notion_api_url = "https://api.notion.com/v1";
// Generates a query string from an object of params
function generateParamsString(params) {
    if (params) {
        const cleanParams = Object.assign({}, params);
        delete cleanParams["accountId"];
        return qs_1.default.stringify(cleanParams, {
            addQueryPrefix: true,
            encode: false,
        });
    }
    return "";
}
function getProfile(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get("/users/me");
        return Object.assign(Object.assign({}, _.pick(data.bot.owner.user, ["id", "name", "avatar_url", "type"])), { email: _.get(data.bot.owner.user, "person.email") });
    });
}
function getUsers(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(params);
        const { data } = yield authClient.get(`/users${paramString}`);
        return data;
    });
}
function getUser(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/users/${params.userId}`);
        return data;
    });
}
function search(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const requestBody = {};
        if (params.query) {
            requestBody["query"] = params.query;
        }
        if (params.filter) {
            requestBody["filter"] = {
                value: params.filter,
                property: "object",
            };
        }
        if (params.start_cursor) {
            requestBody["start_cursor"] = params.start_cursor;
        }
        if (params.page_size) {
            requestBody["page_size"] = params.page_size;
        }
        if (params.sortDirection || params.sortTimestamp) {
            requestBody["sort"] = {};
            if (params.sortDirection) {
                requestBody["sort"]["direction"] = params.sortDirection;
            }
            if (params.sortTimestamp) {
                requestBody["sort"]["timestamp"] = params.sortTimestamp;
            }
        }
        const { data } = yield authClient.post("/search", requestBody);
        return data;
    });
}
function getPage(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramString = "";
        if (params.filterProperties) {
            const propertyIds = params.filterProperties.split(",");
            propertyIds.forEach((propertyId) => {
                paramString += `&filter_properties=${propertyId}`;
            });
            paramString = "?" + paramString.slice(1);
        }
        const { data } = yield authClient.get(`/pages/${params.pageId}${paramString}`);
        return data;
    });
}
function getPageProperty(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(_.omit(params, ["pageId", "propertyId"]));
        const { data } = yield authClient.get(`/pages/${params.pageId}/properties/${params.propertyId}${paramString}`);
        return data;
    });
}
function createPageInPage(authClient, body, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.post(`/pages`, body);
        return data;
    });
}
function createPageInDatabase(authClient, body, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.post(`/pages`, body);
        return data;
    });
}
function getDatabase(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/databases/${params.databaseId}`);
        return data;
    });
}
function queryDatabase(authClient, body, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramString = "";
        if (params.filterProperties) {
            const propertyIds = params.filterProperties.split(",");
            propertyIds.forEach((propertyId) => {
                paramString += `&filter_properties=${propertyId}`;
            });
            paramString = "?" + paramString.slice(1);
        }
        const { data } = yield authClient.post(`/databases/${params.databaseId}/query${paramString}`, body);
        return data;
    });
}
function getBlock(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/blocks/${params.blockId}`);
        return data;
    });
}
function getBlockChildren(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(_.omit(params, ["blockId"]));
        const { data } = yield authClient.get(`/blocks/${params.blockId}/children${paramString}`);
        return data;
    });
}
function appendBlockChildren(authClient, body, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.patch(`/blocks/${params.blockId}/children`, body);
        return data;
    });
}
function deleteBlock(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.delete(`/blocks/${params.blockId}`);
        return data;
    });
}
class Notion extends source_1.OAuth2Source {
    constructor() {
        super("notion");
        this.getBaseUrl = (resourceName) => {
            return notion_api_url;
        };
        this.getAuthHeaders = (credential) => {
            return {
                Authorization: `Bearer ${credential.accessToken}`,
                "Notion-Version": "2022-06-28",
            };
        };
        this.getAuthUrl = (state, credentials, redirectUrl) => {
            const url = `https://api.notion.com/v1/oauth/authorize?` +
                `&response_type=code` +
                "&owner=user" +
                `&state=${state}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&client_id=${credentials.id}`;
            return url;
        };
        this.getSourceJSONSchema = () => null;
        this.description = "A source for Notion";
        this.resources = {
            profile: new resource_1.Resource("profile", "Notion Profile", "get", "Your basic Notion profile", getProfile, null, notion_types_1.NotionProfile),
            users: new resource_1.Resource("users", "Notion Users", "get", "Get a list of users for the workspace", getUsers, notion_types_1.NotionUsersInput, notion_types_1.NotionUsers),
            user: new resource_1.Resource("user", "Notion User", "get", "Get a user by ID", getUser, notion_types_1.NotionUserInput, notion_types_1.NotionUser),
            search: new resource_1.Resource("search", "Notion Search", "get", "Search for content in the workspace", search, notion_types_1.NotionSearchInput, notion_types_1.NotionSearch),
            page: new resource_1.Resource("page", "Notion Page", "get", "Get a page by ID", getPage, notion_types_1.NotionPageInput, notion_types_1.NotionPage),
            pageProperty: new resource_1.Resource("pageProperty", "Notion Page Property", "get", "Get a page property by ID", getPageProperty, notion_types_1.NotionPagePropertyInput, notion_types_1.NotionPageProperty),
            database: new resource_1.Resource("database", "Notion Database", "get", "Get a database by ID", getDatabase, notion_types_1.NotionDatabaseInput, notion_types_1.NotionDatabase),
            queryDatabase: new resource_1.PostResource("queryDatabase", "Notion Query Database", "post", "Query a database by ID", queryDatabase, notion_types_1.NotionQueryDatabaseBody, notion_types_1.NotionQueryDatabaseInput, notion_types_1.NotionQueryDatabase),
            block: new resource_1.Resource("block", "Notion Block", "get", "Get a block by ID", getBlock, notion_types_1.NotionBlockInput, notion_types_1.NotionBlock),
            deleteBlock: new resource_1.DeleteResource("deleteBlock", "Notion Delete Block", "delete", "Delete a block by ID", deleteBlock, notion_types_1.NotionDeleteBlockInput, notion_types_1.NotionBlock),
            blockChildren: new resource_1.Resource("blockChildren", "Notion Block Children", "get", "Get a block's children by ID", getBlockChildren, notion_types_1.NotionBlockChildrenInput, notion_types_1.NotionBlockChildren),
            appendBlockChildren: new resource_1.PatchResource("appendBlockChildren", "Notion Append Block Children", "patch", "Append block children", appendBlockChildren, notion_types_1.NotionAppendBlockChildrenBody, notion_types_1.NotionAppendBlockChildrenInput, notion_types_1.NotionAppendBlockChildren),
            createPageInPage: new resource_1.PostResource("createPageInPage", "Notion Create Page In Page", "post", "Create a page where the parent is a page", createPageInPage, notion_types_1.NotionCreatePageInPageBody, null, notion_types_1.NotionPage),
            createPageInDatabase: new resource_1.PostResource("createPageInDatabase", "Notion Create Page In Database", "post", "Create a page where the parent is a database", createPageInDatabase, notion_types_1.NotionCreatePageInDatabaseBody, null, notion_types_1.NotionPage),
        };
        this.metadata = {
            name: this.getName(),
            friendlyName: "Notion",
            description: "The connected workspace where better, faster work happens.",
            icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
            color: ["#000000", "#ffffff"],
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
            const url = "https://api.notion.com/v1/oauth/token";
            try {
                // eslint-disable-next-line
                const { data } = yield axios_1.default.post(url, {
                    grant_type: "authorization_code",
                    code: code,
                    redirect_uri: redirectUrl,
                }, {
                    headers: {
                        Authorization: `Basic ${Buffer.from(`${credentials.id}:${credentials.secret}`).toString("base64")}`,
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });
                return {
                    accessToken: data.access_token,
                };
            }
            catch (error) {
                return "";
            }
        });
    }
    deactivate(accessCredentials) {
        return "success";
    }
    getExternalAccountId(authClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield getProfile(authClient);
            if (id) {
                return id;
            }
            return "";
        });
    }
}
exports.Notion = Notion;
