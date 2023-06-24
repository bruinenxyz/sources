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
const qs_1 = __importDefault(require("qs"));
const google_auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
const google_token_url = "https://oauth2.googleapis.com";
const google_gmail_url = "https://gmail.googleapis.com/gmail/v1/users/me";
const google_calendar_url = "https://www.googleapis.com/calendar/v3";
const google_drive_url = "https://www.googleapis.com/drive/v3";
// To view Google API Scopes go to https://developers.google.com/identity/protocols/oauth2/scopes
const googleScopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/gmail.readonly",
    "https://www.googleapis.com/auth/calendar.settings.readonly",
    "https://www.googleapis.com/auth/calendar.readonly",
    "https://www.googleapis.com/auth/calendar.events.readonly",
    "https://www.googleapis.com/auth/drive",
];
function generateParamsString(params) {
    if (params) {
        const cleanParams = Object.assign({}, params);
        delete cleanParams["accountId"];
        if (Object.keys(cleanParams).length) {
            return qs_1.default.stringify(cleanParams, {
                addQueryPrefix: true,
                encode: false,
            });
        }
    }
    return "";
}
function findBody(partsArray) {
    for (let i = 0; i < partsArray.length; i++) {
        const mimeType = partsArray[i].mimeType;
        if (mimeType === "text/plain") {
            const body = partsArray[i].body.data;
            return Buffer.from(body, "base64").toString("utf-8");
        }
        else if (partsArray[i].parts) {
            const body = findBody(partsArray[i].parts);
            if (!!body) {
                return body;
            }
        }
    }
    return "";
}
function extractRecipients(value) {
    const regex = /(([\w,\"\s]+)\s)?<?([^@<\s]+@[^@\s>]+)>?,/g;
    let m;
    let recipientsArray = [];
    while ((m = regex.exec(value)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        let name = "";
        let email = "";
        if (m[2]) {
            name = m[2].replace(/,$/, "").replace(/"/g, "").trim(); // strip whitespaces and commas, and remove quotation marks
        }
        if (m[3]) {
            email = m[3].replace(/,$/, "").trim(); // strip whitespaces and commas from end of string
        }
        let item = {
            name: name,
            email: email,
        };
        recipientsArray.push(item);
    }
    return recipientsArray;
}
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
function getParsedDrafts(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                paramsString += `&${key}=${params[key]}`;
            });
        }
        const { data } = yield authClient.get(`/drafts?maxResults=50${paramsString}`);
        const rawDrafts = Object.assign({}, _.pick(data, ["resultSizeEstimate", "drafts", "nextPageToken"]));
        const parsedDrafts = yield Promise.all(rawDrafts.drafts.map((rawDraft) => {
            return getParsedDraft(authClient, { draftId: rawDraft.id });
        }));
        return Object.assign(Object.assign({}, rawDrafts), { drafts: parsedDrafts });
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
        try {
            const rawDraft = yield getDraft(authClient, params);
            if (!rawDraft.message) {
                throw new Error("No message found in draft");
            }
            if (!rawDraft.message.payload) {
                throw new Error("No payload found in draft");
            }
            if (!rawDraft.message.payload.headers) {
                throw new Error("No headers found in draft");
            }
            if (!rawDraft.message.payload.parts) {
                throw new Error("No parts found in draft");
            }
            //Headers
            const headers = rawDraft.message.payload.headers;
            const date = headers.find((header) => header.name === "Date");
            const subject = headers.find((header) => header.name === "Subject");
            const from = headers.find((header) => header.name === "From");
            const to = headers.find((header) => header.name === "To");
            const cc = headers.find((header) => header.name === "Cc");
            const bcc = headers.find((header) => header.name === "Bcc");
            //Parts
            const parts = rawDraft.message.payload.parts;
            //Attachments
            const attachments = parts
                .filter((part) => { var _a; return (_a = part.body) === null || _a === void 0 ? void 0 : _a.attachmentId; })
                .map((part) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return {
                    attachmentId: (_a = part.body) === null || _a === void 0 ? void 0 : _a.attachmentId,
                    mimeType: part.mimeType,
                    filename: part.filename,
                    contentType: (_c = (_b = part.headers) === null || _b === void 0 ? void 0 : _b.find((header) => header.name === "Content-Type")) === null || _c === void 0 ? void 0 : _c.value,
                    contentDisposition: (_e = (_d = part.headers) === null || _d === void 0 ? void 0 : _d.find((header) => header.name === "Content-Disposition")) === null || _e === void 0 ? void 0 : _e.value,
                    contentTransferEncoding: (_g = (_f = part.headers) === null || _f === void 0 ? void 0 : _f.find((header) => header.name === "Content-Transfer-Encoding")) === null || _g === void 0 ? void 0 : _g.value,
                    size: (_h = part.body) === null || _h === void 0 ? void 0 : _h.size,
                };
            });
            return {
                id: rawDraft.id,
                messageId: rawDraft.message.id,
                threadId: rawDraft.message.threadId,
                labelIds: rawDraft.message.labelIds,
                headers: {
                    date: date ? date.value : "",
                    subject: subject ? subject.value : "",
                    from: (from === null || from === void 0 ? void 0 : from.value)
                        ? extractRecipients(from.value + ",")[0]
                        : { name: "", email: "" },
                    to: (to === null || to === void 0 ? void 0 : to.value) ? extractRecipients(to.value + ",") : [],
                    cc: (cc === null || cc === void 0 ? void 0 : cc.value) ? extractRecipients(cc.value + ",") : [],
                    bcc: (bcc === null || bcc === void 0 ? void 0 : bcc.value) ? extractRecipients(bcc.value + ",") : [],
                },
                body: findBody(parts),
                attachments: attachments,
            };
        }
        catch (error) {
            throw new Error(error);
        }
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
function getParsedMessages(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                paramsString += `&${key}=${params[key]}`;
            });
        }
        const { data } = yield authClient.get(`/messages?maxResults=50${paramsString}`);
        const rawMessages = Object.assign({}, _.pick(data, ["resultSizeEstimate", "messages", "nextPageToken"]));
        const parsedMessages = yield Promise.all(rawMessages.messages.map((rawMessage) => {
            return getParsedMessage(authClient, { messageId: rawMessage.id });
        }));
        return Object.assign(Object.assign({}, rawMessages), { messages: parsedMessages });
    });
}
function getMessage(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/messages/${params.messageId}?format=full`);
        return data;
    });
}
function getParsedMessage(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rawMessage = yield getMessage(authClient, params);
            if (!rawMessage) {
                throw new Error("No message found");
            }
            if (!rawMessage.payload) {
                throw new Error("No payload found in message");
            }
            if (!rawMessage.payload.headers) {
                throw new Error("No headers found in message");
            }
            let parts = [];
            if (rawMessage.payload.parts) {
                parts = rawMessage.payload.parts;
            }
            //Headers
            const headers = rawMessage.payload.headers;
            const date = headers.find((header) => header.name === "Date");
            const subject = headers.find((header) => header.name === "Subject");
            const from = headers.find((header) => header.name === "From");
            const to = headers.find((header) => header.name === "To");
            const cc = headers.find((header) => header.name === "Cc");
            const bcc = headers.find((header) => header.name === "Bcc");
            //Attachments
            const attachments = parts
                .filter((part) => { var _a; return (_a = part.body) === null || _a === void 0 ? void 0 : _a.attachmentId; })
                .map((part) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return {
                    attachmentId: (_a = part.body) === null || _a === void 0 ? void 0 : _a.attachmentId,
                    mimeType: part.mimeType,
                    filename: part.filename,
                    contentType: (_c = (_b = part.headers) === null || _b === void 0 ? void 0 : _b.find((header) => header.name === "Content-Type")) === null || _c === void 0 ? void 0 : _c.value,
                    contentDisposition: (_e = (_d = part.headers) === null || _d === void 0 ? void 0 : _d.find((header) => header.name === "Content-Disposition")) === null || _e === void 0 ? void 0 : _e.value,
                    contentTransferEncoding: (_g = (_f = part.headers) === null || _f === void 0 ? void 0 : _f.find((header) => header.name === "Content-Transfer-Encoding")) === null || _g === void 0 ? void 0 : _g.value,
                    size: (_h = part.body) === null || _h === void 0 ? void 0 : _h.size,
                };
            });
            return {
                id: rawMessage.id,
                threadId: rawMessage.threadId,
                labelIds: rawMessage.labelIds,
                headers: {
                    date: date ? date.value : "",
                    subject: subject ? subject.value : "",
                    from: (from === null || from === void 0 ? void 0 : from.value)
                        ? extractRecipients(from.value + ",")[0]
                        : { name: "", email: "" },
                    to: (to === null || to === void 0 ? void 0 : to.value) ? extractRecipients(to.value + ",") : [],
                    cc: (cc === null || cc === void 0 ? void 0 : cc.value) ? extractRecipients(cc.value + ",") : [],
                    bcc: (bcc === null || bcc === void 0 ? void 0 : bcc.value) ? extractRecipients(bcc.value + ",") : [],
                },
                body: findBody(parts),
                attachments: attachments,
            };
        }
        catch (error) {
            throw new Error(error);
        }
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
function getParsedThreads(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        let paramsString = "";
        if (params) {
            Object.keys(params).forEach((key) => {
                paramsString += `&${key}=${params[key]}`;
            });
        }
        const { data } = yield authClient.get(`/threads?maxResults=50${paramsString}`);
        const rawThreads = Object.assign({}, _.pick(data, ["resultSizeEstimate", "threads", "nextPageToken"]));
        const parsedThreads = yield Promise.all(rawThreads.threads.map((rawThread) => {
            return getParsedThread(authClient, { threadId: rawThread.id });
        }));
        return Object.assign(Object.assign({}, rawThreads), { threads: parsedThreads });
    });
}
function getThread(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient.get(`/threads/${params.threadId}?format=full`);
        return data;
    });
}
function getParsedThread(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rawThread = yield getThread(authClient, params);
            const rawMessages = rawThread.messages;
            if (!rawMessages) {
                throw new Error("No messages found");
            }
            const messages = rawMessages.map((rawMessage) => {
                if (!rawMessage) {
                    throw new Error("No message found");
                }
                if (!rawMessage.payload) {
                    throw new Error("No payload found in message");
                }
                if (!rawMessage.payload.headers) {
                    throw new Error("No headers found in message");
                }
                let parts = [];
                if (rawMessage.payload.parts) {
                    parts = rawMessage.payload.parts;
                }
                //Headers
                const headers = rawMessage.payload.headers;
                const date = headers.find((header) => header.name === "Date");
                const subject = headers.find((header) => header.name === "Subject");
                const from = headers.find((header) => header.name === "From");
                const to = headers.find((header) => header.name === "To");
                const cc = headers.find((header) => header.name === "Cc");
                const bcc = headers.find((header) => header.name === "Bcc");
                //Attachments
                const attachments = parts
                    .filter((part) => { var _a; return (_a = part.body) === null || _a === void 0 ? void 0 : _a.attachmentId; })
                    .map((part) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    return {
                        attachmentId: (_a = part.body) === null || _a === void 0 ? void 0 : _a.attachmentId,
                        mimeType: part.mimeType,
                        filename: part.filename,
                        contentType: (_c = (_b = part.headers) === null || _b === void 0 ? void 0 : _b.find((header) => header.name === "Content-Type")) === null || _c === void 0 ? void 0 : _c.value,
                        contentDisposition: (_e = (_d = part.headers) === null || _d === void 0 ? void 0 : _d.find((header) => header.name === "Content-Disposition")) === null || _e === void 0 ? void 0 : _e.value,
                        contentTransferEncoding: (_g = (_f = part.headers) === null || _f === void 0 ? void 0 : _f.find((header) => header.name === "Content-Transfer-Encoding")) === null || _g === void 0 ? void 0 : _g.value,
                        size: (_h = part.body) === null || _h === void 0 ? void 0 : _h.size,
                    };
                });
                return {
                    id: rawMessage.id,
                    threadId: rawMessage.threadId,
                    labelIds: rawMessage.labelIds,
                    headers: {
                        date: date ? date.value : "",
                        subject: subject ? subject.value : "",
                        from: (from === null || from === void 0 ? void 0 : from.value)
                            ? extractRecipients(from.value + ",")[0]
                            : { name: "", email: "" },
                        to: (to === null || to === void 0 ? void 0 : to.value) ? extractRecipients(to.value + ",") : [],
                        cc: (cc === null || cc === void 0 ? void 0 : cc.value) ? extractRecipients(cc.value + ",") : [],
                        bcc: (bcc === null || bcc === void 0 ? void 0 : bcc.value) ? extractRecipients(bcc.value + ",") : [],
                    },
                    body: findBody(parts),
                    attachments: attachments,
                };
            });
            return {
                id: rawThread.id,
                messages: messages,
            };
        }
        catch (error) {
            throw new Error(error);
        }
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
function getDriveAbout(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield authClient
            .get("/about?fields=user,storageQuota")
            .catch((error) => {
            return error.response;
        });
        return data;
    });
}
function getSharedDrives(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(params);
        const { data } = yield authClient.get(`/drives${paramString}`);
        return data;
    });
}
function getSharedDrive(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(_.omit(params, ["driveId"]));
        const { data } = yield authClient.get(`/drives/${params.driveId}${paramString}}`);
        return data;
    });
}
function getDriveFiles(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(params);
        const { data } = yield authClient.get(`/files${paramString}`);
        return data;
    });
}
function getDriveFileMetadata(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const paramString = generateParamsString(_.omit(params, ["fileId"]));
        const { data } = yield authClient.get(`/files/${params.fileId}${paramString}`);
        return data;
    });
}
function getDriveFile(authClient, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const metadata = yield getDriveFileMetadata(authClient, _.omit(params, ["acknowledgeAbuse"]));
        switch (metadata.mimeType) {
            case "application/vnd.google-apps.document":
            case "application/vnd.google-apps.spreadsheet":
            case "application/vnd.google-apps.presentation":
            default:
                params["alt"] = "media";
                const paramString = generateParamsString(_.omit(params, ["fileId"]));
                const { data } = yield authClient.get(`/files/${params.fileId}${paramString}`);
                return Object.assign(Object.assign({}, metadata), { fileContent: String(data) });
        }
    });
}
class Google extends source_1.OAuth2Source {
    constructor() {
        super("google");
        this.getBaseUrl = (resourceName) => {
            const calendarArray = ["calendars", "calendar", "events", "event"];
            const driveArray = [
                "driveAbout",
                "sharedDrives",
                "sharedDrive",
                "driveFiles",
                "driveFileMetadata",
                "driveFile",
            ];
            if (resourceName && calendarArray.includes(resourceName)) {
                return google_calendar_url;
            }
            else if (resourceName && driveArray.includes(resourceName)) {
                return google_drive_url;
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
            parsedDrafts: new resource_1.Resource("parsedDrafts", "Google Parsed Drafts", "get", "Your gmail parsed drafts", getParsedDrafts, google_types_1.GoogleDraftsInput, google_types_1.GoogleParsedDrafts),
            draft: new resource_1.Resource("draft", "Google Draft", "get", "Your gmail draft", getDraft, google_types_1.GoogleDraftInput, google_types_1.GoogleDraft),
            parsedDraft: new resource_1.Resource("parsedDraft", "Google Parsed Draft", "get", "Your gmail parsed draft", getParsedDraft, google_types_1.GoogleDraftInput, google_types_1.GoogleParsedDraft),
            labels: new resource_1.Resource("labels", "Google Labels", "get", "Your gmail labels", getLabels, null, google_types_1.GoogleLabels),
            label: new resource_1.Resource("label", "Google Label", "get", "Your gmail label", getLabel, google_types_1.GoogleLabelInput, google_types_1.GoogleLabel),
            messages: new resource_1.Resource("messages", "Google Messages", "get", "Your gmail messages", getMessages, google_types_1.GoogleMessagesInput, google_types_1.GoogleMessages),
            parsedMessages: new resource_1.Resource("parsedMessages", "Google Parsed Messages", "get", "Your gmail parsed messages", getParsedMessages, google_types_1.GoogleMessagesInput, google_types_1.GoogleParsedMessages),
            message: new resource_1.Resource("message", "Google Message", "get", "Your gmail message", getMessage, google_types_1.GoogleMessageInput, google_types_1.GoogleMessage),
            parsedMessage: new resource_1.Resource("parsedMessage", "Google Parsed Message", "get", "Your gmail parsed message", getParsedMessage, google_types_1.GoogleMessageInput, google_types_1.GoogleParsedMessage),
            threads: new resource_1.Resource("threads", "Google Threads", "get", "Your gmail threads", getThreads, google_types_1.GoogleThreadsInput, google_types_1.GoogleThreads),
            parsedThreads: new resource_1.Resource("parsedThreads", "Google Parsed Threads", "get", "Your gmail parsed threads", getParsedThreads, google_types_1.GoogleThreadsInput, google_types_1.GoogleParsedThreads),
            thread: new resource_1.Resource("thread", "Google Thread", "get", "Your gmail thread", getThread, google_types_1.GoogleThreadInput, google_types_1.GoogleThread),
            parsedThread: new resource_1.Resource("parsedThread", "Google Parsed Thread", "get", "Your gmail parsed thread", getParsedThread, google_types_1.GoogleThreadInput, google_types_1.GoogleParsedThread),
            calendars: new resource_1.Resource("calendars", "Google Calendars", "get", "Your google calendars", getCalendars, google_types_1.GoogleCalendarsInput, google_types_1.GoogleCalendars),
            calendar: new resource_1.Resource("calendar", "Google Calendar", "get", "Your google calendar", getCalendar, google_types_1.GoogleCalendarInput, google_types_1.GoogleCalendar),
            events: new resource_1.Resource("events", "Google Events", "get", "Your google events", getEvents, google_types_1.GoogleEventsInput, google_types_1.GoogleEvents),
            event: new resource_1.Resource("event", "Google Event", "get", "Your google event", getEvent, google_types_1.GoogleEventInput, google_types_1.GoogleEvent),
            driveAbout: new resource_1.Resource("driveAbout", "Google Drive About", "get", "Information about the user, the user's Drive, and system capabilities.", getDriveAbout, null, google_types_1.GoogleDriveAbout),
            sharedDrives: new resource_1.Resource("sharedDrives", "Google Shared Drives", "get", "Your google shared drives, excluding the user's `My Drive`", getSharedDrives, google_types_1.GoogleSharedDrivesInput, google_types_1.GoogleSharedDrives),
            sharedDrive: new resource_1.Resource("sharedDrive", "Google Shared Drive", "get", "A google shared drive", getSharedDrive, google_types_1.GoogleSharedDriveInput, google_types_1.GoogleSharedDrive),
            driveFiles: new resource_1.Resource("driveFiles", "Google Drive Files", "get", "Your google drive files", getDriveFiles, google_types_1.GoogleDriveFilesInput, google_types_1.GoogleDriveFiles),
            driveFileMetadata: new resource_1.Resource("driveFileMetadata", "Google Drive File Metadata", "get", "Your google drive file metadata", getDriveFileMetadata, google_types_1.GoogleDriveFileInput, google_types_1.GoogleDriveFileMetadata),
            driveFile: new resource_1.Resource("driveFile", "Google Drive File", "get", "Your google drive file", getDriveFile, google_types_1.GoogleDriveFileInput, google_types_1.GoogleDriveFile),
        };
        this.metadata = {
            name: this.getName(),
            friendlyName: "Google",
            description: "Provider of online services including search, email, storage, productivity tools, advertising, and mobile OS",
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
