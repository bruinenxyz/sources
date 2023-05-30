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
function getDrafts(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                paramsString += `&${key}=${params[key]}`;
            });
        }
        const { data } = yield authClient.get(`/drafts?maxResults=500${paramsString}`);
        return Object.assign({}, _.pick(data, ["resultSizeEstimate", "drafts", "nextPageToken"]));
    });
}
function getDraft(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/drafts/${params.draftId}?format=full`);
        return data;
    });
}
function getParsedDraft(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/drafts/${params.draftId}?format=raw`);
        return data;
        // try {
        //   const rawDraft: GoogleDraftType = await getDraft(authClient, params);
        //   if (!rawDraft.message) {
        //     throw new Error("No message found in draft");
        //   }
        //   if (!rawDraft.message.payload) {
        //     throw new Error("No payload found in draft");
        //   }
        //   if (!rawDraft.message.payload.headers) {
        //     throw new Error("No headers found in draft");
        //   }
        //   if (!rawDraft.message.payload.parts) {
        //     throw new Error("No parts found in draft");
        //   }
        //   const headers = rawDraft.message.payload.headers
        //   const date = headers.find((header) => header.name === "Date");
        //   const subject = headers.find((header) => header.name === "Subject");
        //   const from = headers.find((header) => header.name === "From");
        //   const to = headers.find((header) => header.name === "To");
        //   const cc = headers.find((header) => header.name === "Cc");
        //   const bcc = headers.find((header) => header.name === "Bcc");
        //   const parts = rawDraft.message.payload.parts
        //   const bodyRaw = parts.find((part: any) => part.partId === "0")?.parts;
        //   if (!bodyRaw) {
        //     throw new Error("No body found in draft");
        //   }
        //   const body = bodyRaw.find((part: any) => part.partId === "0.0").body.data;
        //   return {
        //     id: rawDraft.id,
        //     messageId: rawDraft.message.id,
        //     threadId: rawDraft.message.threadId,
        //     labelIds: rawDraft.message.labelIds,
        //     headers: {
        //       date: date ? date.value : "",
        //       subject: subject ? subject.value : "",
        //       from: from ? from.value : "",
        //       to: to ? to.value?.split(",") : [],
        //       cc: cc ? cc.value?.split(",") : [],
        //       bcc: bcc ? bcc.value?.split(",") : [],
        //     },
        //     body:
        //     attachments:
        //   };
        // } catch (error) {
        //   throw new Error(error);
        // }
    });
}
function getLabels(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/labels`);
        return { resultSizeEstimate: data.labels.length, labels: data.labels };
    });
}
function getLabel(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/labels/${params.labelId}`);
        return data;
    });
}
function getMessages(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                paramsString += `&${key}=${params[key]}`;
            });
        }
        const { data } = yield authClient.get(`/messages?maxResults=500${paramsString}`);
        return Object.assign({}, _.pick(data, ["resultSizeEstimate", "messages", "nextPageToken"]));
    });
}
function getMessage(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/messages/${params.messageId}?format=full`);
        return data;
    });
}
function getThreads(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                paramsString += `&${key}=${params[key]}`;
            });
        }
        const { data } = yield authClient.get(`/threads?maxResults=500${paramsString}`);
        return Object.assign({}, _.pick(data, ["resultSizeEstimate", "threads", "nextPageToken"]));
    });
}
function getThread(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/threads/${params.threadId}?format=full`);
        return data;
    });
}
function getCalendars(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                paramsString += `&${key}=${params[key]}`;
            });
        }
        const { data } = yield authClient.get(`/users/me/calendarList?maxResults=250${paramsString}`);
        return Object.assign(Object.assign({}, _.pick(data, ["kind", "etag", "nextPageToken", "nextSyncToken"])), { resultSizeEstimate: data.items.length, calendars: data.items });
    });
}
function getCalendar(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/calendars/${params.calendarId}`);
        return data;
    });
}
function getEvents(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                if (key !== "calendarId") {
                    paramsString += `&${key}=${params[key]}`;
                }
            });
        }
        const { data } = yield authClient.get(`/calendars/${params.calendarId ? params.calendarId : "primary"}/events?maxResults=2000${paramsString}`);
        return Object.assign(Object.assign({}, _.pick(data, [
            "kind",
            "etag",
            "summary",
            "description",
            "updated",
            "timeZone",
            "accessRole",
            "defaultReminders",
            "nextPageToken",
            "nextSyncToken",
        ])), { resultSizeEstimate: data.items.length, events: data.items });
    });
}
function getEvent(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/calendars/${params.calendarId}/events/${params.eventId}${params.timeZone ? `?timeZone=${params.timeZone}` : ""}`);
        return data;
    });
}
class Google extends source_1.OAuth2Source {
    constructor() {
        super("google");
        this.getBaseUrl = (resourceName) => {
            const calendarArray = ["calendars", "calendar", "events", "event"];
            if (resourceName && calendarArray.includes(resourceName)) {
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
                `&prompt=select_account` +
                `&state=${state}` +
                `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
                `&client_id=${credentials.id}`;
            return url;
        };
        this.getSourceJSONSchema = () => null;
        this.description = "A source for Google";
        this.resources = {
            profile: new resource_1.Resource("profile", "Google Profile", "get", "Your basic google profile", getProfile, null, google_types_1.GoogleProfile),
            drafts: new resource_1.Resource("drafts", "Google Drafts", "get", "Your gmail drafts", getDrafts, google_types_1.GoogleDraftsInput, google_types_1.GoogleDrafts),
            draft: new resource_1.Resource("draft", "Google Draft", "get", "Your gmail draft", getDraft, google_types_1.GoogleDraftInput, google_types_1.GoogleDraft),
            parsedDraft: new resource_1.Resource("parsedDraft", "Google Parsed Draft", "get", "Your gmail parsed draft", getParsedDraft, google_types_1.GoogleDraftInput, google_types_1.GoogleParsedDraft),
            labels: new resource_1.Resource("labels", "Google Labels", "get", "Your gmail labels", getLabels, null, google_types_1.GoogleLabels),
            label: new resource_1.Resource("label", "Google Label", "get", "Your gmail label", getLabel, google_types_1.GoogleLabelInput, google_types_1.GoogleLabel),
            messages: new resource_1.Resource("messages", "Google Messages", "get", "Your gmail messages", getMessages, google_types_1.GoogleMessagesInput, google_types_1.GoogleMessages),
            message: new resource_1.Resource("message", "Google Message", "get", "Your gmail message", getMessage, google_types_1.GoogleMessageInput, google_types_1.GoogleMessage),
            threads: new resource_1.Resource("threads", "Google Threads", "get", "Your gmail threads", getThreads, google_types_1.GoogleThreadsInput, google_types_1.GoogleThreads),
            thread: new resource_1.Resource("thread", "Google Thread", "get", "Your gmail thread", getThread, google_types_1.GoogleThreadInput, google_types_1.GoogleThread),
            calendars: new resource_1.Resource("calendars", "Google Calendars", "get", "Your google calendars", getCalendars, google_types_1.GoogleCalendarsInput, google_types_1.GoogleCalendars),
            calendar: new resource_1.Resource("calendar", "Google Calendar", "get", "Your google calendar", getCalendar, google_types_1.GoogleCalendarInput, google_types_1.GoogleCalendar),
            events: new resource_1.Resource("events", "Google Events", "get", "Your google events", getEvents, google_types_1.GoogleEventsInput, google_types_1.GoogleEvents),
            event: new resource_1.Resource("event", "Google Event", "get", "Your google event", getEvent, google_types_1.GoogleEventInput, google_types_1.GoogleEvent),
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
            try {
                const { data } = yield axios_1.default.post(`${google_token_url}/revoke?token=${accessCredentials.accessToken}`);
                return "success";
            }
            catch (error) {
                return `Google deactivation error: ${error}`;
            }
        });
    }
    isTokenExpired(accessCredentials) {
        if (new Date() > new Date(accessCredentials.expires)) {
            return true;
        }
        return false;
    }
    refreshToken(authCredential, accessCredential) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${google_token_url}/token?` +
                `client_id=${authCredential.id}` +
                `&client_secret=${authCredential.secret}` +
                `&grant_type=refresh_token` +
                `&refresh_token=${accessCredential.refreshToken}`;
            try {
                const { data } = yield axios_1.default.post(url, {}, {
                    headers: {
                        Accept: "application/json",
                    },
                });
                let expires = new Date();
                expires.setSeconds(expires.getSeconds() + data.expires_in);
                return {
                    accessToken: data.access_token,
                    refreshToken: accessCredential.refreshToken,
                    expires,
                };
            }
            catch (error) {
                return { error: error };
            }
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
