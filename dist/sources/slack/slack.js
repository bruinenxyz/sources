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
exports.Slack = void 0;
const resource_1 = require("../resource");
const source_1 = require("../source");
const slack_types_1 = require("./slack.types");
const axios_1 = __importDefault(require("axios"));
const _ = __importStar(require("lodash"));
const qs_1 = __importDefault(require("qs"));
const slack_api_url = "https://slack.com/api";
const slackScopes = [
    "chat:write",
    "channels:read",
    "channels:history",
    "im:read",
    "im:history",
    "mpim:read",
    "mpim:history",
    "users.profile:read",
    "users:read",
    "users:read.email",
];
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
// Generates an array of BasicUser objects from an array of userIds
function getBasicUserArray(authClient, userIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(userIds.map((userId) => __awaiter(this, void 0, void 0, function* () {
            const user = yield getUser(authClient, { userId: userId });
            return _.pick(user, ["id", "name", "real_name"]);
        })));
    });
}
function getProfile(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get("/users.profile.get");
        // Get user data using email
        const userData = yield authClient.get(`${slack_api_url}/users.lookupByEmail?email=${data.profile.email}`);
        return Object.assign(Object.assign({}, data.profile), { userId: userData.data.user.id });
    });
}
// Get user data using userId
function getUser(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/users.info?user=${params.userId}`);
        return data.user;
    });
}
function getConversations(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(params);
        const { data } = yield authClient.get(`/conversations.list${paramString}`);
        return data;
    });
}
function getEnhancedConversations(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(params);
        const { data } = yield authClient.get(`/conversations.list${paramString}`);
        const channels = [...(data.channels || [])];
        // Add array of members as BasicUser objects for each channel
        const enhancedChannels = yield Promise.all(channels.map((channel) => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield authClient.get(`/conversations.members?channel=${channel.id}&limit=50`);
            const userIds = [...(data.members || [])];
            const members = yield getBasicUserArray(authClient, userIds);
            return Object.assign(Object.assign({}, channel), { members: members });
        })));
        return Object.assign(Object.assign({}, data), { channels: enhancedChannels });
    });
}
function getConversationHistory(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = Object.assign({}, params);
        delete body["accountId"];
        const { data } = yield authClient.post("/conversations.history", params);
        return data;
    });
}
function getEnhancedConversationHistory(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = Object.assign({}, params);
        delete body["accountId"];
        // Limits to 100 messages - Slack default is 100
        if (parseInt(body.limit) > 100) {
            delete body["limit"];
        }
        const { data } = yield authClient.post("/conversations.history", body);
        const messages = [...(data.messages || [])];
        // Add BasicUser object as user and array of BasicUser objects as reply_users for each message
        const enhancedMessages = yield Promise.all(messages.map((message) => __awaiter(this, void 0, void 0, function* () {
            const user = yield getUser(authClient, { userId: message.user });
            if (message.reply_users) {
                const replyUsers = yield getBasicUserArray(authClient, message.reply_users);
                return Object.assign(Object.assign({}, message), { user: _.pick(user, ["id", "name", "real_name"]), reply_users: replyUsers });
            }
            return Object.assign(Object.assign({}, message), { user: _.pick(user, ["id", "name", "real_name"]) });
        })));
        return Object.assign(Object.assign({}, data), { messages: enhancedMessages });
    });
}
function getConversationReplies(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(params);
        const { data } = yield authClient.get(`/conversations.replies${paramString}`);
        return data;
    });
}
function getEnhancedConversationReplies(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(params);
        const { data } = yield authClient.get(`/conversations.replies${paramString}`);
        const messages = [...(data.messages || [])];
        // Add BasicUser object as user and array of BasicUser objects as reply_users for each message
        const enhancedMessages = yield Promise.all(messages.map((message) => __awaiter(this, void 0, void 0, function* () {
            const user = yield getUser(authClient, { userId: message.user });
            if (message.reply_users) {
                const replyUsers = yield getBasicUserArray(authClient, message.reply_users);
                return Object.assign(Object.assign({}, message), { user: _.pick(user, ["id", "name", "real_name"]), reply_users: replyUsers });
            }
            return Object.assign(Object.assign({}, message), { user: _.pick(user, ["id", "name", "real_name"]) });
        })));
        return Object.assign(Object.assign({}, data), { messages: enhancedMessages });
    });
}
function postMessage(authClient, body, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.post("/chat.postMessage", body);
        return data;
    });
}
class Slack extends source_1.OAuth2Source {
    constructor() {
        super("slack");
        this.getBaseUrl = (resourceName) => {
            return slack_api_url;
        };
        this.getAuthHeaders = (credential) => {
            return {
                Authorization: `Bearer ${credential.accessToken}`,
            };
        };
        this.getAuthUrl = (state, credentials, redirectUrl) => {
            const scopes = _.join(slackScopes, ",");
            const url = `https://slack.com/oauth/v2/authorize?` +
                `user_scope=${scopes}` +
                `&state=${state}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&client_id=${credentials.id}`;
            return url;
        };
        this.getSourceJSONSchema = () => null;
        this.description = "A source for Slack";
        this.resources = {
            profile: new resource_1.Resource("profile", "Slack Profile", "get", "Your basic Slack profile", getProfile, null, slack_types_1.SlackProfile),
            user: new resource_1.Resource("user", "Slack User", "get", "Get a Slack user by user ID", getUser, slack_types_1.SlackUserInput, slack_types_1.SlackUser),
            conversations: new resource_1.Resource("conversations", "Slack Conversations", "get", "Get a list of Slack conversations", getConversations, slack_types_1.SlackConversationsInput, slack_types_1.SlackConversations),
            enhancedConversations: new resource_1.Resource("enhancedConversations", "Slack Enhanced Conversations", "get", "Get a list of Slack conversations with members", getEnhancedConversations, slack_types_1.SlackConversationsInput, slack_types_1.SlackEnhancedConversations),
            conversationHistory: new resource_1.Resource("conversationHistory", "Slack Conversation History", "get", "Get the history of a Slack conversation", getConversationHistory, slack_types_1.SlackConversationHistoryInput, slack_types_1.SlackConversationHistory),
            enhancedConversationHistory: new resource_1.Resource("enhancedConversationHistory", "Slack Enhanced Conversation History", "get", "Get the history of a Slack conversation with user information", getEnhancedConversationHistory, slack_types_1.SlackConversationHistoryInput, slack_types_1.SlackEnhancedConversationHistory),
            conversationReplies: new resource_1.Resource("conversationReplies", "Slack Conversation Replies", "get", "Get the replies of a Slack conversation message", getConversationReplies, slack_types_1.SlackConversationRepliesInput, slack_types_1.SlackConversationReplies),
            enhancedConversationReplies: new resource_1.Resource("enhancedConversationReplies", "Slack Enhanced Conversation Replies", "get", "Get the replies of a Slack conversation message with user information", getEnhancedConversationReplies, slack_types_1.SlackConversationRepliesInput, slack_types_1.SlackEnhancedConversationReplies),
            postMessage: new resource_1.PostResource("postMessage", "Slack Post Message", "post", "Post a message to a Slack channel", postMessage, slack_types_1.SlackPostMessageBody, null, slack_types_1.SlackPostMessage),
        };
        this.metadata = {
            name: this.getName(),
            friendlyName: "Slack",
            description: "A messaging app for business that connects people to the information they need",
            icon: "https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg",
            color: ["#36c5f1", "#2fb67c", "#e01e5a", "#ecb22d"],
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
            const url = `${slack_api_url}/oauth.v2.access?` +
                `client_id=${credentials.id}` +
                `&client_secret=${credentials.secret}` +
                `&code=${code}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
            try {
                // eslint-disable-next-line
                const { data } = yield axios_1.default.post(url, {}, {
                    headers: {
                        Accept: "application/json",
                    },
                });
                return {
                    accessToken: data.authed_user.access_token,
                };
            }
            catch (error) {
                return "";
            }
        });
    }
    deactivate(accessCredentials) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield axios_1.default.get(`${slack_api_url}/auth.revoke`, {
                    headers: this.getAuthHeaders(accessCredentials),
                });
                return "success";
            }
            catch (error) {
                return `Slack deactivation error: ${error}`;
            }
        });
    }
    getExternalAccountId(authClient) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = yield getProfile(authClient);
            if (userId) {
                return userId;
            }
            return "";
        });
    }
}
exports.Slack = Slack;
