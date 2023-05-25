"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleLabel = exports.GoogleLabelInput = exports.GoogleLabels = exports.GoogleDraft = exports.GoogleDraftInput = exports.GoogleDrafts = exports.GoogleDraftsInput = exports.GoogleProfile = void 0;
exports.GoogleProfile = {
    title: "GoogleProfile",
    description: "A google profile",
    type: "object",
    properties: {
        emailAddress: { type: "string", description: "The email of the user" },
        messagesTotal: {
            type: "number",
            description: "The total messages of the user",
        },
        threadsTotal: {
            type: "number",
            description: "The total email threads of the user",
        },
        historyId: { type: "string", description: "The historyId of the user" },
    },
};
exports.GoogleDraftsInput = {
    title: "GoogleDraftsInput",
    description: "The input for your google drafts",
    type: "object",
    properties: {
        pageToken: {
            type: "string",
            description: "The page token for your drafts",
        },
        q: {
            type: "string",
            description: "The query for your drafts",
        },
    },
};
exports.GoogleDrafts = {
    title: "GoogleDrafts",
    description: "Your google drafts",
    type: "object",
    properties: {
        drafts: {
            type: "array",
            description: "A list of your google drafts",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the draft" },
                    message: {
                        type: "object",
                        description: "The message of the draft",
                        properties: {
                            id: {
                                type: "string",
                                description: "The id of the message",
                            },
                            threadId: {
                                type: "string",
                                description: "The threadId of the message",
                            },
                        },
                    },
                },
            },
        },
        nextPageToken: {
            type: "string",
            description: "The next page token for your drafts",
        },
        resultSizeEstimate: {
            type: "number",
            description: "The result size estimate for your drafts",
        },
    },
};
exports.GoogleDraftInput = {
    title: "GoogleDraftInput",
    description: "The input for your google draft",
    type: "object",
    properties: {
        draftId: {
            type: "string",
            description: "The id of the draft",
        },
    },
    required: ["draftId"],
};
exports.GoogleDraft = {
    title: "GoogleDraft",
    description: "Your google draft",
    type: "object",
    properties: {
        id: { type: "string", description: "The id of the draft" },
        message: {
            type: "object",
            description: "The message of the draft",
            properties: {
                id: {
                    type: "string",
                    description: "The id of the message",
                },
                threadId: {
                    type: "string",
                    description: "The threadId of the message",
                },
                labelIds: {
                    type: "array",
                    description: "The labelIds of the message",
                    items: { type: "string" },
                },
                snippet: {
                    type: "string",
                    description: "The snippet of the message",
                },
                historyId: {
                    type: "string",
                    description: "The historyId of the message",
                },
                internalDate: {
                    type: "string",
                    description: "The internalDate of the message",
                },
                payload: {
                    type: "object",
                    description: "The payload of the message",
                    properties: {
                        partId: {
                            type: "string",
                            description: "The partId of the payload",
                        },
                        mimeType: {
                            type: "string",
                            description: "The mimeType of the payload",
                        },
                        filename: {
                            type: "string",
                            description: "The filename of the payload",
                        },
                        headers: {
                            type: "array",
                            description: "The headers of the payload",
                            items: {
                                type: "object",
                                properties: {
                                    name: { type: "string" },
                                    value: { type: "string" },
                                },
                            },
                        },
                        body: {
                            type: "object",
                            description: "The body of the payload",
                            properties: {
                                size: { type: "number" },
                                data: { type: "string" },
                                attachmentId: { type: "string" },
                            },
                        },
                        parts: {
                            type: "array",
                            description: "The parts of the payload",
                            items: {
                                type: "object",
                                properties: {
                                    partId: {
                                        type: "string",
                                        description: "The partId of the part",
                                    },
                                    mimeType: {
                                        type: "string",
                                        description: "The mimeType of the part",
                                    },
                                    filename: {
                                        type: "string",
                                        description: "The filename of the part",
                                    },
                                    headers: {
                                        type: "array",
                                        description: "The headers of the part",
                                        items: {
                                            type: "object",
                                            properties: {
                                                name: { type: "string" },
                                                value: { type: "string" },
                                            },
                                        },
                                    },
                                    body: {
                                        type: "object",
                                        description: "The body of the part",
                                        properties: {
                                            size: { type: "number" },
                                            data: { type: "string" },
                                            attachmentId: { type: "string" },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                sizeEstimate: {
                    type: "number",
                    description: "The sizeEstimate of the message",
                },
                raw: {
                    type: "string",
                    description: "The raw message",
                },
            },
        },
    },
};
exports.GoogleLabels = {
    title: "GoogleLabels",
    description: "Your google labels",
    type: "object",
    properties: {
        resultSizeEstimate: {
            type: "number",
            description: "The result size estimate for your labels",
        },
        labels: {
            type: "array",
            description: "A list of your google labels",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the label" },
                    name: { type: "string", description: "The name of the label" },
                    messageListVisibility: {
                        type: "string",
                        description: "The messageListVisibility of the label",
                    },
                    labelListVisibility: {
                        type: "string",
                        description: "The labelListVisibility of the label",
                    },
                    type: { type: "string", description: "The type of the label" },
                },
            },
        },
    },
};
exports.GoogleLabelInput = {
    title: "GoogleLabelInput",
    description: "The input for your google label",
    type: "object",
    properties: {
        labelId: {
            type: "string",
            description: "The id of the label",
        },
    },
    required: ["labelId"],
};
exports.GoogleLabel = {
    title: "GoogleLabel",
    description: "Your google label",
    type: "object",
    properties: {
        id: { type: "string", description: "The id of the label" },
        name: { type: "string", description: "The name of the label" },
        messageListVisibility: {
            type: "string",
            description: "The messageListVisibility of the label",
        },
        labelListVisibility: {
            type: "string",
            description: "The labelListVisibility of the label",
        },
        type: { type: "string", description: "The type of the label" },
        messagesTotal: {
            type: "number",
            description: "The total messages for the label",
        },
        messagesUnread: {
            type: "number",
            description: "The total unread messages for the label",
        },
        threadsTotal: {
            type: "number",
            description: "The total threads for the label",
        },
        threadsUnread: {
            type: "number",
            description: "The total unread threads for the label",
        },
        color: {
            type: "object",
            description: "The color of the label",
            properties: {
                textColor: { type: "string" },
                backgroundColor: { type: "string" },
            },
        },
    },
};
