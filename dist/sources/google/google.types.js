"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleDriveFile = exports.GoogleDriveFileInput = exports.GoogleDriveFileMetadata = exports.GoogleDriveFileMetadataInput = exports.GoogleDriveFiles = exports.GoogleDriveFilesInput = exports.GoogleSharedDrive = exports.GoogleSharedDriveInput = exports.GoogleSharedDrives = exports.GoogleSharedDrivesInput = exports.GoogleDriveAbout = exports.GoogleEvent = exports.GoogleEventInput = exports.GoogleEvents = exports.GoogleEventsInput = exports.GoogleCalendar = exports.GoogleCalendarInput = exports.GoogleCalendars = exports.GoogleCalendarsInput = exports.GoogleParsedThread = exports.GoogleThread = exports.GoogleThreadInput = exports.GoogleParsedThreads = exports.GoogleThreads = exports.GoogleThreadsInput = exports.GoogleParsedMessage = exports.GoogleMessage = exports.GoogleMessageInput = exports.GoogleParsedMessages = exports.GoogleMessages = exports.GoogleMessagesInput = exports.GoogleLabel = exports.GoogleLabelInput = exports.GoogleLabels = exports.GoogleParsedDraft = exports.GoogleDraft = exports.GoogleDraftInput = exports.GoogleParsedDrafts = exports.GoogleDrafts = exports.GoogleDraftsInput = exports.GoogleProfile = void 0;
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
exports.GoogleParsedDrafts = {
    title: "GoogleParsedDrafts",
    description: "Your google parsed drafts",
    type: "object",
    properties: {
        drafts: {
            type: "array",
            description: "A list of your google drafts",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the draft" },
                    messageId: { type: "string", description: "The id of the draft" },
                    threadId: {
                        type: "string",
                        description: "The threadId of the draft",
                    },
                    labelIds: {
                        type: "array",
                        description: "The labelIds of the draft",
                        items: { type: "string" },
                    },
                    headers: {
                        type: "object",
                        description: "The headers of the draft",
                        properties: {
                            date: { type: "string", description: "The date of the draft" },
                            subject: {
                                type: "string",
                                description: "The subject of the draft",
                            },
                            from: {
                                type: "object",
                                description: "The writer of the draft",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the writer",
                                    },
                                    email: {
                                        type: "string",
                                        description: "The email of the writer",
                                    },
                                },
                            },
                            to: {
                                type: "array",
                                description: "The receivers of the draft",
                                items: {
                                    type: "object",
                                    description: "A recipients of the draft",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the recipient",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the recipient",
                                        },
                                    },
                                },
                            },
                            cc: {
                                type: "array",
                                description: "The ccs of the draft",
                                items: {
                                    type: "object",
                                    description: "A cc of the draft",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the cc",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the cc",
                                        },
                                    },
                                },
                            },
                            bcc: {
                                type: "array",
                                description: "The bccs of the draft",
                                items: {
                                    type: "object",
                                    description: "A bcc of the draft",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the bcc",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the bcc",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    body: { type: "string", description: "The body of the draft" },
                    attachments: {
                        type: "array",
                        description: "The attachments of the draft",
                        items: {
                            type: "object",
                            description: "An attachment of the draft",
                            properties: {
                                attachmentId: {
                                    type: "string",
                                    description: "The attachmentId of the attachment",
                                },
                                mimeType: {
                                    type: "string",
                                    description: "The mimeType of the attachment",
                                },
                                filename: {
                                    type: "string",
                                    description: "The filename of the attachment",
                                },
                                contentType: {
                                    type: "string",
                                    description: "The contentType of the attachment",
                                },
                                contentDisposition: {
                                    type: "string",
                                    description: "The contentDisposition of the attachment",
                                },
                                contentTransferEncoding: {
                                    type: "string",
                                    description: "The contentTransferEncoding of the attachment",
                                },
                                size: {
                                    type: "number",
                                    description: "The size of the attachment",
                                },
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
                                    parts: {
                                        type: "array",
                                        description: "The parts of the part",
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
                                                    },
                                                },
                                            },
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
exports.GoogleParsedDraft = {
    title: "GoogleParsedDraft",
    description: "Your google parsed draft",
    type: "object",
    properties: {
        id: { type: "string", description: "The id of the draft" },
        messageId: { type: "string", description: "The id of the draft" },
        threadId: { type: "string", description: "The threadId of the draft" },
        labelIds: {
            type: "array",
            description: "The labelIds of the draft",
            items: { type: "string" },
        },
        headers: {
            type: "object",
            description: "The headers of the draft",
            properties: {
                date: { type: "string", description: "The date of the draft" },
                subject: { type: "string", description: "The subject of the draft" },
                from: {
                    type: "object",
                    description: "The writer of the draft",
                    properties: {
                        name: { type: "string", description: "The name of the writer" },
                        email: { type: "string", description: "The email of the writer" },
                    },
                },
                to: {
                    type: "array",
                    description: "The receivers of the draft",
                    items: {
                        type: "object",
                        description: "A recipients of the draft",
                        properties: {
                            name: {
                                type: "string",
                                description: "The name of the recipient",
                            },
                            email: {
                                type: "string",
                                description: "The email of the recipient",
                            },
                        },
                    },
                },
                cc: {
                    type: "array",
                    description: "The ccs of the draft",
                    items: {
                        type: "object",
                        description: "A cc of the draft",
                        properties: {
                            name: {
                                type: "string",
                                description: "The name of the cc",
                            },
                            email: {
                                type: "string",
                                description: "The email of the cc",
                            },
                        },
                    },
                },
                bcc: {
                    type: "array",
                    description: "The bccs of the draft",
                    items: {
                        type: "object",
                        description: "A bcc of the draft",
                        properties: {
                            name: {
                                type: "string",
                                description: "The name of the bcc",
                            },
                            email: {
                                type: "string",
                                description: "The email of the bcc",
                            },
                        },
                    },
                },
            },
        },
        body: { type: "string", description: "The body of the draft" },
        attachments: {
            type: "array",
            description: "The attachments of the draft",
            items: {
                type: "object",
                description: "An attachment of the draft",
                properties: {
                    attachmentId: {
                        type: "string",
                        description: "The attachmentId of the attachment",
                    },
                    mimeType: {
                        type: "string",
                        description: "The mimeType of the attachment",
                    },
                    filename: {
                        type: "string",
                        description: "The filename of the attachment",
                    },
                    contentType: {
                        type: "string",
                        description: "The contentType of the attachment",
                    },
                    contentDisposition: {
                        type: "string",
                        description: "The contentDisposition of the attachment",
                    },
                    contentTransferEncoding: {
                        type: "string",
                        description: "The contentTransferEncoding of the attachment",
                    },
                    size: { type: "number", description: "The size of the attachment" },
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
exports.GoogleMessagesInput = {
    title: "GoogleMessagesInput",
    description: "The input for your google messages",
    type: "object",
    properties: {
        labelIds: {
            type: "string",
            description: "The labelIds of the messages",
        },
        pageToken: {
            type: "string",
            description: "The pageToken of the messages",
        },
        q: { type: "string", description: "The query of the messages" },
    },
};
exports.GoogleMessages = {
    title: "GoogleMessages",
    description: "Your google messages",
    type: "object",
    properties: {
        resultSizeEstimate: {
            type: "number",
            description: "The result size estimate for your messages",
        },
        nextPageToken: { type: "string", description: "The next page token" },
        messages: {
            type: "array",
            description: "A list of your google messages",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the message" },
                    threadId: {
                        type: "string",
                        description: "The threadId of the message",
                    },
                },
            },
        },
    },
};
exports.GoogleParsedMessages = {
    title: "GoogleParsedMessages",
    description: "Your google parsed messages",
    type: "object",
    properties: {
        resultSizeEstimate: {
            type: "number",
            description: "The result size estimate for your messages",
        },
        nextPageToken: { type: "string", description: "The next page token" },
        messages: {
            type: "array",
            description: "A list of your google messages",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the message" },
                    threadId: {
                        type: "string",
                        description: "The threadId of the message",
                    },
                    labelIds: {
                        type: "array",
                        description: "The labelIds of the message",
                        items: { type: "string" },
                    },
                    headers: {
                        type: "object",
                        description: "The headers of the message",
                        properties: {
                            date: { type: "string", description: "The date of the message" },
                            subject: {
                                type: "string",
                                description: "The subject of the message",
                            },
                            from: {
                                type: "object",
                                description: "The writer of the message",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the writer",
                                    },
                                    email: {
                                        type: "string",
                                        description: "The email of the writer",
                                    },
                                },
                            },
                            to: {
                                type: "array",
                                description: "The receivers of the message",
                                items: {
                                    type: "object",
                                    description: "A recipients of the message",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the recipient",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the recipient",
                                        },
                                    },
                                },
                            },
                            cc: {
                                type: "array",
                                description: "The ccs of the message",
                                items: {
                                    type: "object",
                                    description: "A cc of the message",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the cc",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the cc",
                                        },
                                    },
                                },
                            },
                            bcc: {
                                type: "array",
                                description: "The bccs of the message",
                                items: {
                                    type: "object",
                                    description: "A bcc of the message",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the bcc",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the bcc",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    body: { type: "string", description: "The body of the message" },
                    attachments: {
                        type: "array",
                        description: "The attachments of the message",
                        items: {
                            type: "object",
                            description: "An attachment of the message",
                            properties: {
                                attachmentId: {
                                    type: "string",
                                    description: "The attachmentId of the attachment",
                                },
                                mimeType: {
                                    type: "string",
                                    description: "The mimeType of the attachment",
                                },
                                filename: {
                                    type: "string",
                                    description: "The filename of the attachment",
                                },
                                contentType: {
                                    type: "string",
                                    description: "The contentType of the attachment",
                                },
                                contentDisposition: {
                                    type: "string",
                                    description: "The contentDisposition of the attachment",
                                },
                                contentTransferEncoding: {
                                    type: "string",
                                    description: "The contentTransferEncoding of the attachment",
                                },
                                size: {
                                    type: "number",
                                    description: "The size of the attachment",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.GoogleMessageInput = {
    title: "GoogleMessageInput",
    description: "The input for your google message",
    type: "object",
    properties: {
        messageId: {
            type: "string",
            description: "The id of the message",
        },
    },
    required: ["messageId"],
};
exports.GoogleMessage = {
    title: "GoogleMessage",
    description: "Your google message",
    type: "object",
    properties: {
        id: { type: "string", description: "The id of the message" },
        threadId: { type: "string", description: "The threadId of the message" },
        labelIds: {
            type: "array",
            description: "The labelIds of the message",
            items: { type: "string" },
        },
        snippet: { type: "string", description: "The snippet of the message" },
        historyId: { type: "string", description: "The historyId of the message" },
        internalDate: {
            type: "string",
            description: "The internalDate of the message",
        },
        payload: {
            type: "object",
            description: "The payload of the message",
            properties: {
                partId: { type: "string", description: "The partId of the payload" },
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
                        properties: { name: { type: "string" }, value: { type: "string" } },
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
                            partId: { type: "string", description: "The partId of the part" },
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
    },
};
exports.GoogleParsedMessage = {
    title: "GoogleParsedMessage",
    description: "Your google parsed message",
    type: "object",
    properties: {
        id: { type: "string", description: "The id of the message" },
        threadId: { type: "string", description: "The threadId of the message" },
        labelIds: {
            type: "array",
            description: "The labelIds of the message",
            items: { type: "string" },
        },
        headers: {
            type: "object",
            description: "The headers of the message",
            properties: {
                date: { type: "string", description: "The date of the message" },
                subject: { type: "string", description: "The subject of the message" },
                from: {
                    type: "object",
                    description: "The writer of the message",
                    properties: {
                        name: {
                            type: "string",
                            description: "The name of the writer",
                        },
                        email: { type: "string", description: "The email of the writer" },
                    },
                },
                to: {
                    type: "array",
                    description: "The receivers of the message",
                    items: {
                        type: "object",
                        description: "A recipients of the message",
                        properties: {
                            name: {
                                type: "string",
                                description: "The name of the recipient",
                            },
                            email: {
                                type: "string",
                                description: "The email of the recipient",
                            },
                        },
                    },
                },
                cc: {
                    type: "array",
                    description: "The ccs of the message",
                    items: {
                        type: "object",
                        description: "A cc of the message",
                        properties: {
                            name: {
                                type: "string",
                                description: "The name of the cc",
                            },
                            email: {
                                type: "string",
                                description: "The email of the cc",
                            },
                        },
                    },
                },
                bcc: {
                    type: "array",
                    description: "The bccs of the message",
                    items: {
                        type: "object",
                        description: "A bcc of the message",
                        properties: {
                            name: {
                                type: "string",
                                description: "The name of the bcc",
                            },
                            email: {
                                type: "string",
                                description: "The email of the bcc",
                            },
                        },
                    },
                },
            },
        },
        body: { type: "string", description: "The body of the message" },
        attachments: {
            type: "array",
            description: "The attachments of the message",
            items: {
                type: "object",
                description: "An attachment of the message",
                properties: {
                    attachmentId: {
                        type: "string",
                        description: "The attachmentId of the attachment",
                    },
                    mimeType: {
                        type: "string",
                        description: "The mimeType of the attachment",
                    },
                    filename: {
                        type: "string",
                        description: "The filename of the attachment",
                    },
                    contentType: {
                        type: "string",
                        description: "The contentType of the attachment",
                    },
                    contentDisposition: {
                        type: "string",
                        description: "The contentDisposition of the attachment",
                    },
                    contentTransferEncoding: {
                        type: "string",
                        description: "The contentTransferEncoding of the attachment",
                    },
                    size: { type: "number", description: "The size of the attachment" },
                },
            },
        },
    },
};
exports.GoogleThreadsInput = {
    title: "GoogleThreadsInput",
    description: "The input for your google threads",
    type: "object",
    properties: {
        labelIds: {
            type: "string",
            description: "The labelIds of the threads",
        },
        pageToken: {
            type: "string",
            description: "The pageToken of the threads",
        },
        q: { type: "string", description: "The query of the threads" },
    },
};
exports.GoogleThreads = {
    title: "GoogleThreads",
    description: "Your google threads",
    type: "object",
    properties: {
        resultSizeEstimate: {
            type: "number",
            description: "The result size estimate for your threads",
        },
        nextPageToken: { type: "string", description: "The next page token" },
        threads: {
            type: "array",
            description: "A list of your google threads",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the thread" },
                    snippet: { type: "string", description: "The snippet of the thread" },
                    historyId: {
                        type: "string",
                        description: "The historyId of the thread",
                    },
                },
            },
        },
    },
};
exports.GoogleParsedThreads = {
    title: "GoogleParsedThreads",
    description: "Your google parsed threads",
    type: "object",
    properties: {
        resultSizeEstimate: {
            type: "number",
            description: "The result size estimate for your threads",
        },
        nextPageToken: { type: "string", description: "The next page token" },
        threads: {
            type: "array",
            description: "A list of your google threads",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the thread" },
                    messages: {
                        type: "array",
                        description: "A list of the messages in the thread",
                        items: {
                            type: "object",
                            description: "A message in the thread",
                            properties: {
                                id: { type: "string", description: "The id of the message" },
                                threadId: {
                                    type: "string",
                                    description: "The threadId of the message",
                                },
                                labelIds: {
                                    type: "array",
                                    description: "The labelIds of the message",
                                    items: { type: "string" },
                                },
                                headers: {
                                    type: "object",
                                    description: "The headers of the message",
                                    properties: {
                                        date: {
                                            type: "string",
                                            description: "The date of the message",
                                        },
                                        subject: {
                                            type: "string",
                                            description: "The subject of the message",
                                        },
                                        from: {
                                            type: "object",
                                            description: "The writer of the message",
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The name of the writer",
                                                },
                                                email: {
                                                    type: "string",
                                                    description: "The email of the writer",
                                                },
                                            },
                                        },
                                        to: {
                                            type: "array",
                                            description: "The receivers of the message",
                                            items: {
                                                type: "object",
                                                description: "A recipients of the message",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        description: "The name of the recipient",
                                                    },
                                                    email: {
                                                        type: "string",
                                                        description: "The email of the recipient",
                                                    },
                                                },
                                            },
                                        },
                                        cc: {
                                            type: "array",
                                            description: "The ccs of the message",
                                            items: {
                                                type: "object",
                                                description: "A cc of the message",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        description: "The name of the cc",
                                                    },
                                                    email: {
                                                        type: "string",
                                                        description: "The email of the cc",
                                                    },
                                                },
                                            },
                                        },
                                        bcc: {
                                            type: "array",
                                            description: "The bccs of the message",
                                            items: {
                                                type: "object",
                                                description: "A bcc of the message",
                                                properties: {
                                                    name: {
                                                        type: "string",
                                                        description: "The name of the bcc",
                                                    },
                                                    email: {
                                                        type: "string",
                                                        description: "The email of the bcc",
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                                body: {
                                    type: "string",
                                    description: "The body of the message",
                                },
                                attachments: {
                                    type: "array",
                                    description: "The attachments of the message",
                                    items: {
                                        type: "object",
                                        description: "An attachment of the message",
                                        properties: {
                                            attachmentId: {
                                                type: "string",
                                                description: "The attachmentId of the attachment",
                                            },
                                            mimeType: {
                                                type: "string",
                                                description: "The mimeType of the attachment",
                                            },
                                            filename: {
                                                type: "string",
                                                description: "The filename of the attachment",
                                            },
                                            contentType: {
                                                type: "string",
                                                description: "The contentType of the attachment",
                                            },
                                            contentDisposition: {
                                                type: "string",
                                                description: "The contentDisposition of the attachment",
                                            },
                                            contentTransferEncoding: {
                                                type: "string",
                                                description: "The contentTransferEncoding of the attachment",
                                            },
                                            size: {
                                                type: "number",
                                                description: "The size of the attachment",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.GoogleThreadInput = {
    title: "GoogleThreadInput",
    description: "The input for your google thread",
    type: "object",
    properties: {
        threadId: {
            type: "string",
            description: "The id of the thread",
        },
    },
    required: ["threadId"],
};
exports.GoogleThread = {
    title: "GoogleThread",
    description: "Your google thread",
    type: "object",
    properties: {
        id: { type: "string", description: "The id of the thread" },
        snippet: { type: "string", description: "The snippet of the thread" },
        historyId: { type: "string", description: "The historyId of the thread" },
        messages: {
            type: "array",
            description: "A list of the messages in the thread",
            items: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the message" },
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
                },
            },
        },
    },
};
exports.GoogleParsedThread = {
    title: "GoogleParsedThread",
    description: "Your google thread",
    type: "object",
    properties: {
        id: { type: "string", description: "The id of the thread" },
        messages: {
            type: "array",
            description: "A list of the messages in the thread",
            items: {
                type: "object",
                description: "A message in the thread",
                properties: {
                    id: { type: "string", description: "The id of the message" },
                    threadId: {
                        type: "string",
                        description: "The threadId of the message",
                    },
                    labelIds: {
                        type: "array",
                        description: "The labelIds of the message",
                        items: { type: "string" },
                    },
                    headers: {
                        type: "object",
                        description: "The headers of the message",
                        properties: {
                            date: { type: "string", description: "The date of the message" },
                            subject: {
                                type: "string",
                                description: "The subject of the message",
                            },
                            from: {
                                type: "object",
                                description: "The writer of the message",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the writer",
                                    },
                                    email: {
                                        type: "string",
                                        description: "The email of the writer",
                                    },
                                },
                            },
                            to: {
                                type: "array",
                                description: "The receivers of the message",
                                items: {
                                    type: "object",
                                    description: "A recipients of the message",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the recipient",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the recipient",
                                        },
                                    },
                                },
                            },
                            cc: {
                                type: "array",
                                description: "The ccs of the message",
                                items: {
                                    type: "object",
                                    description: "A cc of the message",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the cc",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the cc",
                                        },
                                    },
                                },
                            },
                            bcc: {
                                type: "array",
                                description: "The bccs of the message",
                                items: {
                                    type: "object",
                                    description: "A bcc of the message",
                                    properties: {
                                        name: {
                                            type: "string",
                                            description: "The name of the bcc",
                                        },
                                        email: {
                                            type: "string",
                                            description: "The email of the bcc",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    body: { type: "string", description: "The body of the message" },
                    attachments: {
                        type: "array",
                        description: "The attachments of the message",
                        items: {
                            type: "object",
                            description: "An attachment of the message",
                            properties: {
                                attachmentId: {
                                    type: "string",
                                    description: "The attachmentId of the attachment",
                                },
                                mimeType: {
                                    type: "string",
                                    description: "The mimeType of the attachment",
                                },
                                filename: {
                                    type: "string",
                                    description: "The filename of the attachment",
                                },
                                contentType: {
                                    type: "string",
                                    description: "The contentType of the attachment",
                                },
                                contentDisposition: {
                                    type: "string",
                                    description: "The contentDisposition of the attachment",
                                },
                                contentTransferEncoding: {
                                    type: "string",
                                    description: "The contentTransferEncoding of the attachment",
                                },
                                size: {
                                    type: "number",
                                    description: "The size of the attachment",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.GoogleCalendarsInput = {
    title: "GoogleCalendarsInput",
    description: "The input for your google calendars",
    type: "object",
    properties: {
        pageToken: {
            type: "string",
            description: "The pageToken of the calendars",
        },
        showDeleted: {
            type: "boolean",
            description: "Whether to show deleted calendars",
        },
        showHidden: {
            type: "boolean",
            description: "Whether to show hidden calendars",
        },
        syncToken: {
            type: "string",
            description: "The syncToken of the calendars",
        },
    },
};
exports.GoogleCalendars = {
    title: "GoogleCalendars",
    description: "Your google calendars",
    type: "object",
    properties: {
        kind: { type: "string", description: "The kind of the calendars" },
        etag: { type: "string", description: "The etag of the calendars" },
        nextPageToken: { type: "string", description: "The next page token" },
        nextSyncToken: { type: "string", description: "The next sync token" },
        calendars: {
            type: "array",
            description: "A list of your google calendars",
            items: {
                type: "object",
                description: "A google calendar",
                properties: {
                    kind: { type: "string", description: "The kind of the calendar" },
                    etag: { type: "string", description: "The etag of the calendar" },
                    id: { type: "string", description: "The id of the calendar" },
                    summary: {
                        type: "string",
                        description: "The summary of the calendar",
                    },
                    description: {
                        type: "string",
                        description: "The description of the calendar",
                    },
                    location: {
                        type: "string",
                        description: "The location of the calendar",
                    },
                    timeZone: {
                        type: "string",
                        description: "The timeZone of the calendar",
                    },
                    summaryOverride: {
                        type: "string",
                        description: "The summaryOverride of the calendar",
                    },
                    colorId: {
                        type: "string",
                        description: "The colorId of the calendar",
                    },
                    backgroundColor: {
                        type: "string",
                        description: "The backgroundColor of the calendar",
                    },
                    foregroundColor: {
                        type: "string",
                        description: "The foregroundColor of the calendar",
                    },
                    hidden: {
                        type: "boolean",
                        description: "Whether the calendar is hidden",
                    },
                    selected: {
                        type: "boolean",
                        description: "Whether the calendar is selected",
                    },
                    accessRole: {
                        type: "string",
                        description: "The accessRole of the calendar",
                    },
                    defaultReminders: {
                        type: "object",
                        description: "The defaultReminders of the calendar",
                        properties: {
                            method: {
                                type: "string",
                                description: "The method of the defaultReminder",
                            },
                            minutes: {
                                type: "number",
                                description: "The minutes of the defaultReminder",
                            },
                        },
                    },
                    notificationSettings: {
                        type: "object",
                        description: "The notificationSettings of the calendar",
                        properties: {
                            notifications: {
                                type: "array",
                                description: "The notifications of the notificationSettings",
                                items: {
                                    type: "object",
                                    properties: {
                                        type: {
                                            type: "string",
                                            description: "The type of the notification",
                                        },
                                        method: {
                                            type: "string",
                                            description: "The method of the notification",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    primary: {
                        type: "boolean",
                        description: "Whether the calendar is primary",
                    },
                    deleted: {
                        type: "boolean",
                        description: "Whether the calendar is deleted",
                    },
                    conferenceProperties: {
                        type: "object",
                        description: "The conferenceProperties of the calendar",
                        properties: {
                            allowedConferenceSolutionTypes: {
                                type: "array",
                                description: "The allowedConferenceSolutionTypes of the conferenceProperties",
                                items: {
                                    type: "string",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.GoogleCalendarInput = {
    title: "GoogleCalendarInput",
    description: "The input for your google calendar",
    type: "object",
    properties: {
        calendarId: { type: "string", description: "The id of the calendar" },
    },
    required: ["calendarId"],
};
exports.GoogleCalendar = {
    title: "GoogleCalendar",
    description: "Your google calendar",
    type: "object",
    properties: {
        kind: { type: "string", description: "The kind of the calendar" },
        etag: { type: "string", description: "The etag of the calendar" },
        id: { type: "string", description: "The id of the calendar" },
        summary: { type: "string", description: "The summary of the calendar" },
        description: {
            type: "string",
            description: "The description of the calendar",
        },
        location: { type: "string", description: "The location of the calendar" },
        timeZone: { type: "string", description: "The timeZone of the calendar" },
        conferenceProperties: {
            type: "object",
            description: "The conferenceProperties of the calendar",
            properties: {
                allowedConferenceSolutionTypes: {
                    type: "array",
                    description: "The allowedConferenceSolutionTypes of the conferenceProperties",
                    items: { type: "string" },
                },
            },
        },
    },
};
exports.GoogleEventsInput = {
    title: "GoogleEventsInput",
    description: "The input for your google calendar's events",
    type: "object",
    properties: {
        calendarId: { type: "string", description: "The id of the calendar" },
        maxAttendees: { type: "number", description: "The max attendees" },
        orderBy: { type: "string", description: "The order by" },
        pageToken: { type: "string", description: "The page token" },
        q: { type: "string", description: "The query" },
        showDeleted: { type: "boolean", description: "Whether to show deleted" },
        singleEvents: {
            type: "boolean",
            description: "Whether to show single events",
        },
        timeMax: { type: "string", description: "The time max" },
        timeMin: { type: "string", description: "The time min" },
        timeZone: { type: "string", description: "The time zone" },
        updatedMin: { type: "string", description: "The updated min" },
        syncToken: { type: "string", description: "The sync token" },
        iCalUID: { type: "string", description: "The iCal UID" },
    },
};
exports.GoogleEvents = {
    title: "GoogleEvents",
    description: "Your google calendar's events",
    type: "object",
    properties: {
        kind: { type: "string", description: "The kind of the events" },
        etag: { type: "string", description: "The etag of the events" },
        summary: { type: "string", description: "The summary of the events" },
        description: {
            type: "string",
            description: "The description of the events",
        },
        updated: { type: "string", description: "The updated date of the events" },
        timeZone: { type: "string", description: "The timeZone of the events" },
        accessRole: { type: "string", description: "The accessRole of the events" },
        defaultReminders: {
            type: "array",
            description: "The defaultReminders of the events",
            items: {
                type: "object",
                properties: {
                    method: {
                        type: "string",
                        description: "The method of the defaultReminder",
                    },
                    minutes: {
                        type: "number",
                        description: "The minutes of the defaultReminder",
                    },
                },
            },
        },
        nextPageToken: {
            type: "string",
            description: "The nextPageToken of the events",
        },
        nextSyncToken: {
            type: "string",
            description: "The nextSyncToken of the events",
        },
        resultSizeEstimate: {
            type: "number",
            description: "The resultSizeEstimate of the events",
        },
        events: {
            type: "array",
            description: "The list of events",
            items: {
                type: "object",
                description: "An event",
                properties: {
                    kind: { type: "string", description: "The kind of the event" },
                    etag: { type: "string", description: "The etag of the event" },
                    id: { type: "string", description: "The id of the event" },
                    status: { type: "string", description: "The status of the event" },
                    htmlLink: {
                        type: "string",
                        description: "The htmlLink of the event",
                    },
                    created: {
                        type: "string",
                        description: "The created date of the event",
                    },
                    updated: {
                        type: "string",
                        description: "The updated date of the event",
                    },
                    summary: { type: "string", description: "The summary of the event" },
                    description: {
                        type: "string",
                        description: "The description of the event",
                    },
                    location: {
                        type: "string",
                        description: "The location of the event",
                    },
                    colorId: { type: "string", description: "The colorId of the event" },
                    creator: {
                        type: "object",
                        description: "The creator of the event",
                        properties: {
                            id: { type: "string", description: "The id of the creator" },
                            email: {
                                type: "string",
                                description: "The email of the creator",
                            },
                            displayName: {
                                type: "string",
                                description: "The displayName of the creator",
                            },
                            self: {
                                type: "boolean",
                                description: "Whether the creator is self",
                            },
                        },
                    },
                    organizer: {
                        type: "object",
                        description: "The organizer of the event",
                        properties: {
                            id: { type: "string", description: "The id of the organizer" },
                            email: {
                                type: "string",
                                description: "The email of the organizer",
                            },
                            displayName: {
                                type: "string",
                                description: "The displayName of the organizer",
                            },
                            self: {
                                type: "boolean",
                                description: "Whether the organizer is self",
                            },
                        },
                    },
                    start: {
                        type: "object",
                        description: "The start of the event",
                        properties: {
                            date: { type: "string", description: "The date of the start" },
                            dateTime: {
                                type: "string",
                                description: "The dateTime of the start",
                            },
                            timeZone: {
                                type: "string",
                                description: "The timeZone of the start",
                            },
                        },
                    },
                    end: {
                        type: "object",
                        description: "The end of the event",
                        properties: {
                            date: { type: "string", description: "The date of the end" },
                            dateTime: {
                                type: "string",
                                description: "The dateTime of the end",
                            },
                            timeZone: {
                                type: "string",
                                description: "The timeZone of the end",
                            },
                        },
                    },
                    endTimeUnspecified: {
                        type: "boolean",
                        description: "Whether the endTime is unspecified",
                    },
                    recurrence: {
                        type: "array",
                        description: "The recurrence of the event",
                        items: { type: "string" },
                    },
                    recurringEventId: {
                        type: "string",
                        description: "The recurringEventId of the event",
                    },
                    originalStartTime: {
                        type: "object",
                        description: "The originalStartTime of the event",
                        properties: {
                            date: {
                                type: "string",
                                description: "The date of the originalStartTime",
                            },
                            dateTime: {
                                type: "string",
                                description: "The dateTime of the originalStartTime",
                            },
                            timeZone: {
                                type: "string",
                                description: "The timeZone of the originalStartTime",
                            },
                        },
                    },
                    transparency: {
                        type: "string",
                        description: "The transparency of the event",
                    },
                    visibility: {
                        type: "string",
                        description: "The visibility of the event",
                    },
                    iCalUID: { type: "string", description: "The iCalUID of the event" },
                    sequence: {
                        type: "number",
                        description: "The sequence of the event",
                    },
                    attendees: {
                        type: "array",
                        description: "The attendees of the event",
                        items: {
                            type: "object",
                            description: "An attendee",
                            properties: {
                                id: { type: "string", description: "The id of the attendee" },
                                email: {
                                    type: "string",
                                    description: "The email of the attendee",
                                },
                                displayName: {
                                    type: "string",
                                    description: "The displayName of the attendee",
                                },
                                organizer: {
                                    type: "boolean",
                                    description: "Whether the attendee is the organizer",
                                },
                                self: {
                                    type: "boolean",
                                    description: "Whether the attendee is self",
                                },
                                resource: {
                                    type: "boolean",
                                    description: "Whether the attendee is a resource",
                                },
                                optional: {
                                    type: "boolean",
                                    description: "Whether the attendee is optional",
                                },
                                responseStatus: {
                                    type: "string",
                                    description: "The responseStatus of the attendee",
                                },
                                comment: {
                                    type: "string",
                                    description: "The comment of the attendee",
                                },
                                additionalGuests: {
                                    type: "number",
                                    description: "The additionalGuests of the attendee",
                                },
                            },
                        },
                    },
                    attendeesOmitted: {
                        type: "boolean",
                        description: "Whether attendees are omitted",
                    },
                    extendedProperties: {
                        type: "object",
                        description: "The extendedProperties of the event",
                        properties: {
                            private: {
                                type: "object",
                                description: "The private extendedProperties of the event",
                            },
                            shared: {
                                type: "object",
                                description: "The shared extendedProperties of the event",
                            },
                        },
                    },
                    hangoutLink: {
                        type: "string",
                        description: "The hangoutLink of the event",
                    },
                    conferenceData: {
                        type: "object",
                        description: "The conferenceData of the event",
                        properties: {
                            createRequest: {
                                type: "object",
                                description: "The createRequest of the conferenceData",
                                properties: {
                                    requestId: {
                                        type: "string",
                                        description: "The requestId of the createRequest",
                                    },
                                    conferenceSolutionKey: {
                                        type: "object",
                                        description: "The conferenceSolutionKey of the createRequest",
                                        properties: {
                                            type: {
                                                type: "string",
                                                description: "The type of the conferenceSolutionKey",
                                            },
                                        },
                                    },
                                    status: {
                                        type: "object",
                                        description: "The status of the createRequest",
                                        properties: {
                                            statusCode: {
                                                type: "string",
                                                description: "The statusCode of the status",
                                            },
                                        },
                                    },
                                },
                            },
                            entryPoints: {
                                type: "array",
                                description: "The entryPoints of the conferenceData",
                                items: {
                                    type: "object",
                                    description: "An entryPoint",
                                    properties: {
                                        entryPointType: {
                                            type: "string",
                                            description: "The entryPointType of the entryPoint",
                                        },
                                        uri: {
                                            type: "string",
                                            description: "The uri of the entryPoint",
                                        },
                                        label: {
                                            type: "string",
                                            description: "The label of the entryPoint",
                                        },
                                        pin: {
                                            type: "string",
                                            description: "The pin of the entryPoint",
                                        },
                                        accessCode: {
                                            type: "string",
                                            description: "The accessCode of the entryPoint",
                                        },
                                        meetingCode: {
                                            type: "string",
                                            description: "The meetingCode of the entryPoint",
                                        },
                                        passcode: {
                                            type: "string",
                                            description: "The passcode of the entryPoint",
                                        },
                                        password: {
                                            type: "string",
                                            description: "The password of the entryPoint",
                                        },
                                    },
                                },
                            },
                            conferenceSolution: {
                                type: "object",
                                description: "The conferenceSolution of the conferenceData",
                                properties: {
                                    key: {
                                        type: "object",
                                        description: "The key of the conferenceSolution",
                                        properties: {
                                            type: {
                                                type: "string",
                                                description: "The type of the key",
                                            },
                                        },
                                    },
                                    name: {
                                        type: "string",
                                        description: "The name of the conferenceSolution",
                                    },
                                    iconUri: {
                                        type: "string",
                                        description: "The iconUri of the conferenceSolution",
                                    },
                                },
                            },
                            conferenceId: {
                                type: "string",
                                description: "The conferenceId of the conferenceData",
                            },
                            signature: {
                                type: "string",
                                description: "The signature of the conferenceData",
                            },
                            notes: {
                                type: "string",
                                description: "The notes of the conferenceData",
                            },
                        },
                    },
                    gadget: {
                        type: "object",
                        description: "The gadget of the event",
                        properties: {
                            type: { type: "string", description: "The type of the gadget" },
                            title: { type: "string", description: "The title of the gadget" },
                            link: { type: "string", description: "The link of the gadget" },
                            iconLink: {
                                type: "string",
                                description: "The iconLink of the gadget",
                            },
                            width: { type: "number", description: "The width of the gadget" },
                            height: {
                                type: "number",
                                description: "The height of the gadget",
                            },
                            display: {
                                type: "string",
                                description: "The display of the gadget",
                            },
                            preferences: {
                                type: "object",
                                description: "The preferences of the gadget",
                            },
                        },
                    },
                    anyoneCanAddSelf: {
                        type: "boolean",
                        description: "Whether anyone can add self",
                    },
                    guestsCanInviteOthers: {
                        type: "boolean",
                        description: "Whether guests can invite others",
                    },
                    guestsCanModify: {
                        type: "boolean",
                        description: "Whether guests can modify",
                    },
                    guestsCanSeeOtherGuests: {
                        type: "boolean",
                        description: "Whether guests can see other guests",
                    },
                    privateCopy: {
                        type: "boolean",
                        description: "Whether the event is a private copy",
                    },
                    locked: {
                        type: "boolean",
                        description: "Whether the event is locked",
                    },
                    reminders: {
                        type: "object",
                        description: "The reminders of the event",
                        properties: {
                            useDefault: {
                                type: "boolean",
                                description: "Whether the reminders use default",
                            },
                            overrides: {
                                type: "array",
                                description: "The overrides of the reminders",
                                items: {
                                    type: "object",
                                    description: "A reminder override",
                                    properties: {
                                        method: {
                                            type: "string",
                                            description: "The method of the reminder override",
                                        },
                                        minutes: {
                                            type: "number",
                                            description: "The minutes of the reminder override",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    source: {
                        type: "object",
                        description: "The source of the event",
                        properties: {
                            url: { type: "string", description: "The url of the source" },
                            title: { type: "string", description: "The title of the source" },
                        },
                    },
                    attachments: {
                        type: "array",
                        description: "The attachments of the event",
                        items: {
                            type: "object",
                            description: "An attachment",
                            properties: {
                                fileUrl: {
                                    type: "string",
                                    description: "The fileUrl of the attachment",
                                },
                                title: {
                                    type: "string",
                                    description: "The title of the attachment",
                                },
                                mimeType: {
                                    type: "string",
                                    description: "The mimeType of the attachment",
                                },
                                iconLink: {
                                    type: "string",
                                    description: "The iconLink of the attachment",
                                },
                                fileId: {
                                    type: "string",
                                    description: "The fileId of the attachment",
                                },
                            },
                        },
                    },
                    eventType: {
                        type: "string",
                        description: "The eventType of the event",
                    },
                },
            },
        },
    },
};
exports.GoogleEventInput = {
    title: "GoogleEventInput",
    description: "The input for your google calendar's event",
    type: "object",
    properties: {
        calendarId: {
            type: "string",
            description: "The calendarId of the calendar which contains the event",
        },
        eventId: { type: "string", description: "The id of the event" },
        timeZone: { type: "string", description: "The timeZone of the event" },
    },
    required: ["calendarId", "eventId"],
};
exports.GoogleEvent = {
    title: "GoogleEvent",
    description: "Your google calendar's event",
    type: "object",
    properties: {
        kind: { type: "string", description: "The kind of the event" },
        etag: { type: "string", description: "The etag of the event" },
        id: { type: "string", description: "The id of the event" },
        status: { type: "string", description: "The status of the event" },
        htmlLink: {
            type: "string",
            description: "The htmlLink of the event",
        },
        created: {
            type: "string",
            description: "The created date of the event",
        },
        updated: {
            type: "string",
            description: "The updated date of the event",
        },
        summary: { type: "string", description: "The summary of the event" },
        description: {
            type: "string",
            description: "The description of the event",
        },
        location: {
            type: "string",
            description: "The location of the event",
        },
        colorId: { type: "string", description: "The colorId of the event" },
        creator: {
            type: "object",
            description: "The creator of the event",
            properties: {
                id: { type: "string", description: "The id of the creator" },
                email: {
                    type: "string",
                    description: "The email of the creator",
                },
                displayName: {
                    type: "string",
                    description: "The displayName of the creator",
                },
                self: {
                    type: "boolean",
                    description: "Whether the creator is self",
                },
            },
        },
        organizer: {
            type: "object",
            description: "The organizer of the event",
            properties: {
                id: { type: "string", description: "The id of the organizer" },
                email: {
                    type: "string",
                    description: "The email of the organizer",
                },
                displayName: {
                    type: "string",
                    description: "The displayName of the organizer",
                },
                self: {
                    type: "boolean",
                    description: "Whether the organizer is self",
                },
            },
        },
        start: {
            type: "object",
            description: "The start of the event",
            properties: {
                date: { type: "string", description: "The date of the start" },
                dateTime: {
                    type: "string",
                    description: "The dateTime of the start",
                },
                timeZone: {
                    type: "string",
                    description: "The timeZone of the start",
                },
            },
        },
        end: {
            type: "object",
            description: "The end of the event",
            properties: {
                date: { type: "string", description: "The date of the end" },
                dateTime: {
                    type: "string",
                    description: "The dateTime of the end",
                },
                timeZone: {
                    type: "string",
                    description: "The timeZone of the end",
                },
            },
        },
        endTimeUnspecified: {
            type: "boolean",
            description: "Whether the endTime is unspecified",
        },
        recurrence: {
            type: "array",
            description: "The recurrence of the event",
            items: { type: "string" },
        },
        recurringEventId: {
            type: "string",
            description: "The recurringEventId of the event",
        },
        originalStartTime: {
            type: "object",
            description: "The originalStartTime of the event",
            properties: {
                date: {
                    type: "string",
                    description: "The date of the originalStartTime",
                },
                dateTime: {
                    type: "string",
                    description: "The dateTime of the originalStartTime",
                },
                timeZone: {
                    type: "string",
                    description: "The timeZone of the originalStartTime",
                },
            },
        },
        transparency: {
            type: "string",
            description: "The transparency of the event",
        },
        visibility: {
            type: "string",
            description: "The visibility of the event",
        },
        iCalUID: { type: "string", description: "The iCalUID of the event" },
        sequence: {
            type: "number",
            description: "The sequence of the event",
        },
        attendees: {
            type: "array",
            description: "The attendees of the event",
            items: {
                type: "object",
                description: "An attendee",
                properties: {
                    id: { type: "string", description: "The id of the attendee" },
                    email: {
                        type: "string",
                        description: "The email of the attendee",
                    },
                    displayName: {
                        type: "string",
                        description: "The displayName of the attendee",
                    },
                    organizer: {
                        type: "boolean",
                        description: "Whether the attendee is the organizer",
                    },
                    self: {
                        type: "boolean",
                        description: "Whether the attendee is self",
                    },
                    resource: {
                        type: "boolean",
                        description: "Whether the attendee is a resource",
                    },
                    optional: {
                        type: "boolean",
                        description: "Whether the attendee is optional",
                    },
                    responseStatus: {
                        type: "string",
                        description: "The responseStatus of the attendee",
                    },
                    comment: {
                        type: "string",
                        description: "The comment of the attendee",
                    },
                    additionalGuests: {
                        type: "number",
                        description: "The additionalGuests of the attendee",
                    },
                },
            },
        },
        attendeesOmitted: {
            type: "boolean",
            description: "Whether attendees are omitted",
        },
        extendedProperties: {
            type: "object",
            description: "The extendedProperties of the event",
            properties: {
                private: {
                    type: "object",
                    description: "The private extendedProperties of the event",
                },
                shared: {
                    type: "object",
                    description: "The shared extendedProperties of the event",
                },
            },
        },
        hangoutLink: {
            type: "string",
            description: "The hangoutLink of the event",
        },
        conferenceData: {
            type: "object",
            description: "The conferenceData of the event",
            properties: {
                createRequest: {
                    type: "object",
                    description: "The createRequest of the conferenceData",
                    properties: {
                        requestId: {
                            type: "string",
                            description: "The requestId of the createRequest",
                        },
                        conferenceSolutionKey: {
                            type: "object",
                            description: "The conferenceSolutionKey of the createRequest",
                            properties: {
                                type: {
                                    type: "string",
                                    description: "The type of the conferenceSolutionKey",
                                },
                            },
                        },
                        status: {
                            type: "object",
                            description: "The status of the createRequest",
                            properties: {
                                statusCode: {
                                    type: "string",
                                    description: "The statusCode of the status",
                                },
                            },
                        },
                    },
                },
                entryPoints: {
                    type: "array",
                    description: "The entryPoints of the conferenceData",
                    items: {
                        type: "object",
                        description: "An entryPoint",
                        properties: {
                            entryPointType: {
                                type: "string",
                                description: "The entryPointType of the entryPoint",
                            },
                            uri: {
                                type: "string",
                                description: "The uri of the entryPoint",
                            },
                            label: {
                                type: "string",
                                description: "The label of the entryPoint",
                            },
                            pin: {
                                type: "string",
                                description: "The pin of the entryPoint",
                            },
                            accessCode: {
                                type: "string",
                                description: "The accessCode of the entryPoint",
                            },
                            meetingCode: {
                                type: "string",
                                description: "The meetingCode of the entryPoint",
                            },
                            passcode: {
                                type: "string",
                                description: "The passcode of the entryPoint",
                            },
                            password: {
                                type: "string",
                                description: "The password of the entryPoint",
                            },
                        },
                    },
                },
                conferenceSolution: {
                    type: "object",
                    description: "The conferenceSolution of the conferenceData",
                    properties: {
                        key: {
                            type: "object",
                            description: "The key of the conferenceSolution",
                            properties: {
                                type: {
                                    type: "string",
                                    description: "The type of the key",
                                },
                            },
                        },
                        name: {
                            type: "string",
                            description: "The name of the conferenceSolution",
                        },
                        iconUri: {
                            type: "string",
                            description: "The iconUri of the conferenceSolution",
                        },
                    },
                },
                conferenceId: {
                    type: "string",
                    description: "The conferenceId of the conferenceData",
                },
                signature: {
                    type: "string",
                    description: "The signature of the conferenceData",
                },
                notes: {
                    type: "string",
                    description: "The notes of the conferenceData",
                },
            },
        },
        gadget: {
            type: "object",
            description: "The gadget of the event",
            properties: {
                type: { type: "string", description: "The type of the gadget" },
                title: { type: "string", description: "The title of the gadget" },
                link: { type: "string", description: "The link of the gadget" },
                iconLink: {
                    type: "string",
                    description: "The iconLink of the gadget",
                },
                width: { type: "number", description: "The width of the gadget" },
                height: {
                    type: "number",
                    description: "The height of the gadget",
                },
                display: {
                    type: "string",
                    description: "The display of the gadget",
                },
                preferences: {
                    type: "object",
                    description: "The preferences of the gadget",
                },
            },
        },
        anyoneCanAddSelf: {
            type: "boolean",
            description: "Whether anyone can add self",
        },
        guestsCanInviteOthers: {
            type: "boolean",
            description: "Whether guests can invite others",
        },
        guestsCanModify: {
            type: "boolean",
            description: "Whether guests can modify",
        },
        guestsCanSeeOtherGuests: {
            type: "boolean",
            description: "Whether guests can see other guests",
        },
        privateCopy: {
            type: "boolean",
            description: "Whether the event is a private copy",
        },
        locked: {
            type: "boolean",
            description: "Whether the event is locked",
        },
        reminders: {
            type: "object",
            description: "The reminders of the event",
            properties: {
                useDefault: {
                    type: "boolean",
                    description: "Whether the reminders use default",
                },
                overrides: {
                    type: "array",
                    description: "The overrides of the reminders",
                    items: {
                        type: "object",
                        description: "A reminder override",
                        properties: {
                            method: {
                                type: "string",
                                description: "The method of the reminder override",
                            },
                            minutes: {
                                type: "number",
                                description: "The minutes of the reminder override",
                            },
                        },
                    },
                },
            },
        },
        source: {
            type: "object",
            description: "The source of the event",
            properties: {
                url: { type: "string", description: "The url of the source" },
                title: { type: "string", description: "The title of the source" },
            },
        },
        attachments: {
            type: "array",
            description: "The attachments of the event",
            items: {
                type: "object",
                description: "An attachment",
                properties: {
                    fileUrl: {
                        type: "string",
                        description: "The fileUrl of the attachment",
                    },
                    title: {
                        type: "string",
                        description: "The title of the attachment",
                    },
                    mimeType: {
                        type: "string",
                        description: "The mimeType of the attachment",
                    },
                    iconLink: {
                        type: "string",
                        description: "The iconLink of the attachment",
                    },
                    fileId: {
                        type: "string",
                        description: "The fileId of the attachment",
                    },
                },
            },
        },
        eventType: {
            type: "string",
            description: "The eventType of the event",
        },
    },
};
exports.GoogleDriveAbout = {
    type: "object",
    description: "Information about the user, the user's Drive, and system capabilities.",
    properties: {
        storageQuota: {
            type: "object",
            description: "The user's storage quota limits and usage. All fields are measured in bytes.",
            properties: {
                limit: {
                    type: "string",
                    description: "The usage limit, if applicable. This will not be present if the user has unlimited storage.",
                },
                usageInDrive: {
                    type: "string",
                    description: "The usage by all files in Google Drive.",
                },
                usageInDriveTrash: {
                    type: "string",
                    description: "The usage by trashed files in Google Drive.",
                },
                usage: {
                    type: "string",
                    description: "The total usage across all services.",
                },
            },
        },
        user: {
            type: "object",
            description: "The authenticated user.",
            properties: {
                displayName: {
                    type: "string",
                    description: "A plain text displayable name for this user.",
                },
                kind: {
                    type: "string",
                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                },
                me: {
                    type: "boolean",
                    description: "Whether this user is the requesting user.",
                },
                permissionId: {
                    type: "string",
                    description: "The user's ID as visible in Permission resources.",
                },
                emailAddress: {
                    type: "string",
                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                },
                photoLink: {
                    type: "string",
                    description: "A link to the user's profile photo, if available.",
                },
            },
        },
    },
};
exports.GoogleSharedDrivesInput = {
    type: "object",
    description: "The input for your google shared drives",
    properties: {
        pageSize: {
            type: "number",
            description: "The pageSize of the google drives response",
        },
        pageToken: {
            type: "string",
            description: "The pageToken of the google drives",
        },
        q: {
            type: "string",
            description: "The query for the google drives",
        },
    },
};
exports.GoogleSharedDrives = {
    type: "object",
    description: "The google shared drives response",
    properties: {
        kind: {
            type: "string",
            description: "The kind of the google shared drives response",
        },
        nextPageToken: {
            type: "string",
            description: "The nextPageToken of the google shared drives",
        },
        drives: {
            type: "array",
            description: "The list of shared drives",
            items: {
                type: "object",
                description: "A drive",
                properties: {
                    id: {
                        type: "string",
                        description: "The id of the drive",
                    },
                    name: {
                        type: "string",
                        description: "The name of the drive",
                    },
                    colorRgb: {
                        type: "string",
                        description: "The colorRgb of the drive",
                    },
                    kind: {
                        type: "string",
                        description: "The kind of the drive",
                    },
                    backgroundImageLink: {
                        type: "string",
                        description: "A short-lived link to this shared drive's background image",
                    },
                    capabilities: {
                        type: "object",
                        description: "Capabilities the current user has on this shared drive.",
                        properties: {
                            canAddChildren: {
                                type: "boolean",
                                description: "Whether the current user can add children to folders in this shared drive",
                            },
                            canComment: {
                                type: "boolean",
                                description: "Whether the current user can comment on files in this shared drive",
                            },
                            canCopy: {
                                type: "boolean",
                                description: "Whether the current user can copy files in this shared drive",
                            },
                            canDeleteDrive: {
                                type: "boolean",
                                description: "Whether the current user can delete this shared drive",
                            },
                            canDownload: {
                                type: "boolean",
                                description: "Whether the current user can download files in this shared drive",
                            },
                            canEdit: {
                                type: "boolean",
                                description: "Whether the current user can edit files in this shared drive",
                            },
                            canListChildren: {
                                type: "boolean",
                                description: "Whether the current user can list the children of folders in this shared drive",
                            },
                            canManageMembers: {
                                type: "boolean",
                                description: "Whether the current user can add members to this shared drive or remove them or change their role",
                            },
                            canReadRevisions: {
                                type: "boolean",
                                description: "Whether the current user can read the revisions resource of files in this shared drive",
                            },
                            canRename: {
                                type: "boolean",
                                description: "Whether the current user can rename files or folders in this shared drive",
                            },
                            canRenameDrive: {
                                type: "boolean",
                                description: "Whether the current user can rename this shared drive",
                            },
                            canShare: {
                                type: "boolean",
                                description: "Whether the current user can share files or folders in this shared drive",
                            },
                            canChangeCopyRequiresWriterPermissionRestriction: {
                                type: "boolean",
                                description: "Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive",
                            },
                            canChangeDomainUsersOnlyRestriction: {
                                type: "boolean",
                                description: "Whether the current user can change the domainUsersOnly restriction of this shared drive",
                            },
                            canChangeDriveMembersOnlyRestriction: {
                                type: "boolean",
                                description: "Whether the current user can change the driveMembersOnly restriction of this shared drive",
                            },
                            canChangeSharingFoldersRequiresOrganizerPermissionRestriction: {
                                type: "boolean",
                                description: "Whether the current user can change the sharingFoldersRestriction of this shared drive",
                            },
                            canResetDriveRestrictions: {
                                type: "boolean",
                                description: "Whether the current user can reset the shared drive restrictions to defaults.",
                            },
                            canDeleteChildren: {
                                type: "boolean",
                                description: "Whether the current user can delete children from folders in this shared drive",
                            },
                            canTrashChildren: {
                                type: "boolean",
                                description: "Whether the current user can trash children from folders in this shared drive",
                            },
                        },
                    },
                    themeId: {
                        type: "string",
                        description: "The ID of the theme from which the background image and color will be set.",
                    },
                    backgroundImageFile: {
                        type: "object",
                        description: "An image file and cropping parameters from which a background image for this shared drive is set.",
                        properties: {
                            id: {
                                type: "string",
                                description: "The ID of an image file in Drive to use for the background image.",
                            },
                            xCoordinate: {
                                type: "number",
                                description: "The X coordinate of the upper left corner of the cropping area in the background image.",
                            },
                            yCoordinate: {
                                type: "number",
                                description: "The Y coordinate of the upper left corner of the cropping area in the background image.",
                            },
                            width: {
                                type: "number",
                                description: "The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.",
                            },
                        },
                    },
                    createdTime: {
                        type: "string",
                        description: "The time at which the shared drive was created (RFC 3339 date-time).",
                    },
                    hidden: {
                        type: "boolean",
                        description: "Whether the shared drive is hidden from default view.",
                    },
                    restrictions: {
                        type: "object",
                        description: "A set of restrictions that apply to this shared drive or items inside this shared drive.",
                        properties: {
                            copyRequiresWriterPermission: {
                                type: "boolean",
                                description: "Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive.",
                            },
                            domainUsersOnly: {
                                type: "boolean",
                                description: "Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.",
                            },
                            driveMembersOnly: {
                                type: "boolean",
                                description: "Whether access to items inside this shared drive is restricted to its members.",
                            },
                            adminManagedRestrictions: {
                                type: "boolean",
                                description: "Whether administrative privileges on this shared drive are required to modify restrictions.",
                            },
                            sharingFoldersRequiresOrganizerPermission: {
                                type: "boolean",
                                description: "If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.",
                            },
                        },
                    },
                    orgUnitId: {
                        type: "string",
                        description: "The organizational unit of this shared drive. This field is only populated when the useDomainAdminAccess parameter is set to true",
                    },
                },
            },
        },
    },
};
exports.GoogleSharedDriveInput = {
    type: "object",
    description: "the google shared drive input",
    properties: {
        driveId: {
            type: "string",
            description: "The ID of the shared drive.",
        },
        useDoimainAdminAccess: {
            type: "boolean",
            description: "Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs",
        },
    },
    required: ["driveId"],
};
exports.GoogleSharedDrive = {
    type: "object",
    description: "the google shared drive response",
    properties: {
        id: {
            type: "string",
            description: "The id of the drive",
        },
        name: {
            type: "string",
            description: "The name of the drive",
        },
        colorRgb: {
            type: "string",
            description: "The colorRgb of the drive",
        },
        kind: {
            type: "string",
            description: "The kind of the drive",
        },
        backgroundImageLink: {
            type: "string",
            description: "A short-lived link to this shared drive's background image",
        },
        capabilities: {
            type: "object",
            description: "Capabilities the current user has on this shared drive.",
            properties: {
                canAddChildren: {
                    type: "boolean",
                    description: "Whether the current user can add children to folders in this shared drive",
                },
                canComment: {
                    type: "boolean",
                    description: "Whether the current user can comment on files in this shared drive",
                },
                canCopy: {
                    type: "boolean",
                    description: "Whether the current user can copy files in this shared drive",
                },
                canDeleteDrive: {
                    type: "boolean",
                    description: "Whether the current user can delete this shared drive",
                },
                canDownload: {
                    type: "boolean",
                    description: "Whether the current user can download files in this shared drive",
                },
                canEdit: {
                    type: "boolean",
                    description: "Whether the current user can edit files in this shared drive",
                },
                canListChildren: {
                    type: "boolean",
                    description: "Whether the current user can list the children of folders in this shared drive",
                },
                canManageMembers: {
                    type: "boolean",
                    description: "Whether the current user can add members to this shared drive or remove them or change their role",
                },
                canReadRevisions: {
                    type: "boolean",
                    description: "Whether the current user can read the revisions resource of files in this shared drive",
                },
                canRename: {
                    type: "boolean",
                    description: "Whether the current user can rename files or folders in this shared drive",
                },
                canRenameDrive: {
                    type: "boolean",
                    description: "Whether the current user can rename this shared drive",
                },
                canShare: {
                    type: "boolean",
                    description: "Whether the current user can share files or folders in this shared drive",
                },
                canChangeCopyRequiresWriterPermissionRestriction: {
                    type: "boolean",
                    description: "Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive",
                },
                canChangeDomainUsersOnlyRestriction: {
                    type: "boolean",
                    description: "Whether the current user can change the domainUsersOnly restriction of this shared drive",
                },
                canChangeDriveMembersOnlyRestriction: {
                    type: "boolean",
                    description: "Whether the current user can change the driveMembersOnly restriction of this shared drive",
                },
                canChangeSharingFoldersRequiresOrganizerPermissionRestriction: {
                    type: "boolean",
                    description: "Whether the current user can change the sharingFoldersRestriction of this shared drive",
                },
                canResetDriveRestrictions: {
                    type: "boolean",
                    description: "Whether the current user can reset the shared drive restrictions to defaults.",
                },
                canDeleteChildren: {
                    type: "boolean",
                    description: "Whether the current user can delete children from folders in this shared drive",
                },
                canTrashChildren: {
                    type: "boolean",
                    description: "Whether the current user can trash children from folders in this shared drive",
                },
            },
        },
        themeId: {
            type: "string",
            description: "The ID of the theme from which the background image and color will be set.",
        },
        backgroundImageFile: {
            type: "object",
            description: "An image file and cropping parameters from which a background image for this shared drive is set.",
            properties: {
                id: {
                    type: "string",
                    description: "The ID of an image file in Drive to use for the background image.",
                },
                xCoordinate: {
                    type: "number",
                    description: "The X coordinate of the upper left corner of the cropping area in the background image.",
                },
                yCoordinate: {
                    type: "number",
                    description: "The Y coordinate of the upper left corner of the cropping area in the background image.",
                },
                width: {
                    type: "number",
                    description: "The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.",
                },
            },
        },
        createdTime: {
            type: "string",
            description: "The time at which the shared drive was created (RFC 3339 date-time).",
        },
        hidden: {
            type: "boolean",
            description: "Whether the shared drive is hidden from default view.",
        },
        restrictions: {
            type: "object",
            description: "A set of restrictions that apply to this shared drive or items inside this shared drive.",
            properties: {
                copyRequiresWriterPermission: {
                    type: "boolean",
                    description: "Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive.",
                },
                domainUsersOnly: {
                    type: "boolean",
                    description: "Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.",
                },
                driveMembersOnly: {
                    type: "boolean",
                    description: "Whether access to items inside this shared drive is restricted to its members.",
                },
                adminManagedRestrictions: {
                    type: "boolean",
                    description: "Whether administrative privileges on this shared drive are required to modify restrictions.",
                },
                sharingFoldersRequiresOrganizerPermission: {
                    type: "boolean",
                    description: "If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.",
                },
            },
        },
        orgUnitId: {
            type: "string",
            description: "The organizational unit of this shared drive. This field is only populated when the useDomainAdminAccess parameter is set to true",
        },
    },
};
exports.GoogleDriveFilesInput = {
    type: "object",
    description: "The input for files from a google drive",
    properties: {
        driveId: {
            type: "string",
            description: "The ID of the shared drive. If the drifeId is not provided, defaults to the user's myDrive.",
        },
        corpora: {
            type: "string",
            description: "Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter.",
        },
        includeItemsFromAllDrives: {
            type: "boolean",
            description: "Whether both My Drive and shared drive items should be included in results. Requires `supportsAllDrives` param to be true.",
        },
        trashed: {
            type: "boolean",
            description: "Whether to include trashed items. Defaults to true.",
        },
        orderBy: {
            type: "string",
            description: "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name.",
        },
        pageSize: {
            type: "number",
            description: "The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.",
        },
        pageToken: {
            type: "string",
            description: "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
        },
        q: {
            type: "string",
            description: "A query for filtering the file results. See https://developers.google.com/drive/api/guides/search-files for supported syntax.",
        },
        spaces: {
            type: "string",
            description: "A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.",
        },
        supportsAllDrives: {
            type: "boolean",
            description: "Whether the requesting application supports both My Drives and shared drives. (Default: false)",
        },
        includePermissionsForView: {
            type: "string",
            description: "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
        },
        includeLabels: {
            type: "string",
            description: "A comma-separated list of labels to return for each file. If specified, supported labels are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'.",
        },
    },
};
exports.GoogleDriveFiles = {
    type: "object",
    description: "The output for files from a google drive",
    properties: {
        nextPageToken: {
            type: "string",
            description: "The token for the next page of files. This will be absent if the end of the files list has been reached.",
        },
        kind: {
            type: "string",
            description: "Identifies what kind of resource this is. Value: the fixed string 'drive#fileList'.",
        },
        incompleteSearch: {
            type: "boolean",
            description: "Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the 'allDrives' corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as 'user' or 'drive'.",
        },
        files: {
            type: "array",
            description: "The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            items: {
                type: "object",
                description: "A single Drive file",
                properties: {
                    kind: {
                        type: "string",
                        description: "Identifies what kind of resource this is. Value: the fixed string 'drive#file'.",
                    },
                    driveId: {
                        type: "string",
                        description: "The ID of the shared drive the file resides in. Only populated for items in shared drives.",
                    },
                    fileExtension: {
                        type: "string",
                        description: "The extension of the file. The final component of fullFileExtension. This is only available for files with binary content in Google Drive.",
                    },
                    copyRequiresWriterPermission: {
                        type: "boolean",
                        description: "Whether the options to copy, print, or download this file, should be disabled for readers and commenters.",
                    },
                    md5Checksum: {
                        type: "string",
                        description: "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.",
                    },
                    contentHints: {
                        type: "object",
                        description: "Additional information about the content of the file. These fields are never populated in responses.",
                        properties: {
                            indexableText: {
                                type: "string",
                                description: "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.",
                            },
                            thumbnail: {
                                type: "object",
                                description: "A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.",
                                properties: {
                                    image: {
                                        type: "string",
                                        description: "The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.",
                                    },
                                    mimeType: {
                                        type: "string",
                                        description: "The MIME type of the thumbnail.",
                                    },
                                },
                            },
                        },
                    },
                    writersCanShare: {
                        type: "boolean",
                        description: "Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.",
                    },
                    viewedByMe: {
                        type: "boolean",
                        description: "Whether the file has been viewed by this user.",
                    },
                    mimeType: {
                        type: "string",
                        description: "The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.",
                    },
                    parents: {
                        type: "array",
                        description: "The IDs of the parent folders which contain the file. If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.",
                        items: {
                            type: "string",
                        },
                    },
                    thumbnailLink: {
                        type: "string",
                        description: "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.",
                    },
                    iconLink: {
                        type: "string",
                        description: "A static, unauthenticated link to the file's icon.",
                    },
                    shared: {
                        type: "boolean",
                        description: "Whether the file has been shared. Not populated for items in shared drives.",
                    },
                    lastModifyingUser: {
                        type: "object",
                        description: "The last user to modify the file.",
                        properties: {
                            displayName: {
                                type: "string",
                                description: "A plain text displayable name for this user.",
                            },
                            kind: {
                                type: "string",
                                description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                            },
                            me: {
                                type: "boolean",
                                description: "Whether this user is the requesting user.",
                            },
                            permissionId: {
                                type: "string",
                                description: "The user's ID as visible in Permission resources.",
                            },
                            emailAddress: {
                                type: "string",
                                description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                            },
                            photoLink: {
                                type: "string",
                                description: "A link to the user's profile photo, if available.",
                            },
                        },
                    },
                    owners: {
                        type: "array",
                        description: "The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.",
                        items: {
                            type: "object",
                            description: "A user that ownes the file.",
                            properties: {
                                displayName: {
                                    type: "string",
                                    description: "A plain text displayable name for this user.",
                                },
                                kind: {
                                    type: "string",
                                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                                },
                                me: {
                                    type: "boolean",
                                    description: "Whether this user is the requesting user.",
                                },
                                permissionId: {
                                    type: "string",
                                    description: "The user's ID as visible in Permission resources.",
                                },
                                emailAddress: {
                                    type: "string",
                                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                                },
                                photoLink: {
                                    type: "string",
                                    description: "A link to the user's profile photo, if available.",
                                },
                            },
                        },
                    },
                    headRevisionId: {
                        type: "string",
                        description: "The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.",
                    },
                    sharingUser: {
                        type: "object",
                        description: "The user who shared the file with the requesting user, if applicable.",
                        properties: {
                            displayName: {
                                type: "string",
                                description: "A plain text displayable name for this user.",
                            },
                            kind: {
                                type: "string",
                                description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                            },
                            me: {
                                type: "boolean",
                                description: "Whether this user is the requesting user.",
                            },
                            permissionId: {
                                type: "string",
                                description: "The user's ID as visible in Permission resources.",
                            },
                            emailAddress: {
                                type: "string",
                                description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                            },
                            photoLink: {
                                type: "string",
                                description: "A link to the user's profile photo, if available.",
                            },
                        },
                    },
                    webViewLink: {
                        type: "string",
                        description: "A link for opening the file in a relevant Google editor or viewer in a browser.",
                    },
                    webContentLink: {
                        type: "string",
                        description: "A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.",
                    },
                    size: {
                        type: "string",
                        description: "Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.",
                    },
                    permissions: {
                        type: "array",
                        description: "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.",
                        items: {
                            type: "object",
                            description: "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.",
                            properties: {
                                id: {
                                    type: "string",
                                    description: "The ID of the permission.",
                                },
                                type: {
                                    type: "string",
                                    description: "The type of the grantee. Valid values are: - user - group - domain - anyone",
                                },
                                displayName: {
                                    type: "string",
                                    description: "The `pretty` name of the value of the permission.",
                                },
                                kind: {
                                    type: "string",
                                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.",
                                },
                                permissionDetails: {
                                    type: "array",
                                    description: " Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.",
                                    items: {
                                        type: "object",
                                        description: "A set of permissions that a user with the effective role can use to access a file or folder.",
                                        properties: {
                                            permissionType: {
                                                type: "string",
                                                description: "The type of the permission",
                                            },
                                            inheritedFrom: {
                                                type: "string",
                                                description: "The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the shared drive.",
                                            },
                                            role: {
                                                type: "string",
                                                description: "The role of the permission",
                                            },
                                            inherited: {
                                                type: "boolean",
                                                description: "Whether this permission is inherited.",
                                            },
                                        },
                                    },
                                },
                                photoLink: {
                                    type: "string",
                                    description: "A link to the user's profile photo, if available.",
                                },
                                emailAddress: {
                                    type: "string",
                                    description: "The email address of the user or group to which this permission refers.",
                                },
                                role: {
                                    type: "string",
                                    description: "The role granted by this permission. Valid values are: - owner - organizer - fileOrganizer - writer - commenter - reader",
                                },
                                allowFileDiscovery: {
                                    type: "boolean",
                                    description: "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.",
                                },
                                domain: {
                                    type: "string",
                                    description: "The domain to which this permission refers.",
                                },
                                expirationTime: {
                                    type: "string",
                                    description: "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future",
                                },
                                deleted: {
                                    type: "boolean",
                                    description: "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.",
                                },
                                view: {
                                    type: "string",
                                    description: "Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.",
                                },
                                pendingOwner: {
                                    type: "boolean",
                                    description: "Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.",
                                },
                            },
                        },
                    },
                    hasThumbnail: {
                        type: "boolean",
                        description: "Whether the file has a thumbnail.",
                    },
                    spaces: {
                        type: "array",
                        description: "The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.",
                        items: {
                            type: "string",
                        },
                    },
                    folderColorRgb: {
                        type: "string",
                        description: "The color for a folder as an RGB hex string.",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the file.",
                    },
                    name: {
                        type: "string",
                        description: "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.",
                    },
                    description: {
                        type: "string",
                        description: "A short description of the file.",
                    },
                    starred: {
                        type: "boolean",
                        description: "Whether the user has starred the file.",
                    },
                    trashed: {
                        type: "boolean",
                        description: "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.",
                    },
                    explicitlyTrashed: {
                        type: "boolean",
                        description: "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.",
                    },
                    createdTime: {
                        type: "string",
                        description: "The time at which the file was created (RFC 3339 date-time).",
                    },
                    modifiedTime: {
                        type: "string",
                        description: "The last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.",
                    },
                    modifiedByMeTime: {
                        type: "string",
                        description: "The last time the file was modified by the user (RFC 3339 date-time).",
                    },
                    viewedByMeTime: {
                        type: "string",
                        description: "The last time the file was viewed by the user (RFC 3339 date-time).",
                    },
                    sharedWithMeTime: {
                        type: "string",
                        description: "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).",
                    },
                    quotaBytesUsed: {
                        type: "string",
                        description: "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.",
                    },
                    version: {
                        type: "string",
                        description: "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.",
                    },
                    originalFilename: {
                        type: "string",
                        description: "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.",
                    },
                    ownedByMe: {
                        type: "boolean",
                        description: "Whether the user owns the file. Not populated for items in shared drives.",
                    },
                    fullFileExtension: {
                        type: "string",
                        description: 'The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.',
                    },
                    properties: {
                        type: "object",
                        description: "Additional metadata about the file.",
                    },
                    appProperties: {
                        type: "object",
                        description: "Additional metadata about the file.",
                    },
                    isAppAuthorized: {
                        type: "boolean",
                        description: "Whether the file was created or opened by the requesting app.",
                    },
                    capabilities: {
                        type: "object",
                        description: "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.",
                        properties: {
                            canMoveChildrenOutOfDrive: {
                                type: "boolean",
                                description: "Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.",
                            },
                            canReadDrive: {
                                type: "boolean",
                                description: "Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.",
                            },
                            canEdit: {
                                type: "boolean",
                                description: "Whether the current user can edit this file.",
                            },
                            canCopy: {
                                type: "boolean",
                                description: "Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.",
                            },
                            canComment: {
                                type: "boolean",
                                description: "Whether the current user can comment on this file.",
                            },
                            canAddChildren: {
                                type: "boolean",
                                description: "Whether the current user can add children to this folder. This is always false when the item is not a folder.",
                            },
                            canDelete: {
                                type: "boolean",
                                description: "Whether the current user can delete this file.",
                            },
                            canDownload: {
                                type: "boolean",
                                description: "Whether the current user can download this file.",
                            },
                            canListChildren: {
                                type: "boolean",
                                description: "Whether the current user can list the children of this folder. This is always false when the item is not a folder.",
                            },
                            canRemoveChildren: {
                                type: "boolean",
                                description: "Whether the current user can remove children from this folder. This is always false when the item is not a folder.",
                            },
                            canRename: {
                                type: "boolean",
                                description: "Whether the current user can rename this file.",
                            },
                            canTrash: {
                                type: "boolean",
                                description: "Whether the current user can move this file to trash.",
                            },
                            canReadRevisions: {
                                type: "boolean",
                                description: "Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.",
                            },
                            canChangeCopyRequiresWriterPermission: {
                                type: "boolean",
                                description: "Whether the current user can change the copyRequiresWriterPermission restriction of this file.",
                            },
                            canUnrtash: {
                                type: "boolean",
                                description: "Whether the current user can restore this file from trash.",
                            },
                            canModifyContent: {
                                type: "boolean",
                                description: "Whether the current user can modify the content of this file.",
                            },
                            canDeleteChildren: {
                                type: "boolean",
                                description: "Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                            },
                            canTrashChildren: {
                                type: "boolean",
                                description: "Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                            },
                            canMoveItemOutOfDrive: {
                                type: "boolean",
                                description: "Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.",
                            },
                            canAddMyDriveParent: {
                                type: "boolean",
                                description: "Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.",
                            },
                            canRemoveMyDriveParent: {
                                type: "boolean",
                                description: "Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.",
                            },
                            canMoveItemWithinDrive: {
                                type: "boolean",
                                description: "Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.",
                            },
                            canShare: {
                                type: "boolean",
                                description: "Whether the current user can modify the sharing settings for this file.",
                            },
                            canMoveChildrenWithinDrive: {
                                type: "boolean",
                                description: "Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.",
                            },
                            canModifyContentRestriction: {
                                type: "boolean",
                                description: "Whether the current user can modify the contentRestrictions on this file.",
                            },
                            canAddFolderFromAnotherDrive: {
                                type: "boolean",
                                description: "Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                            },
                            canChangeSecurityUpdateEnabled: {
                                type: "boolean",
                                description: "Whether the current user can change the securityUpdateEnabled field on link share metadata",
                            },
                            canAcceptOwnership: {
                                type: "boolean",
                                description: "Whether the current user can accept the ownership transfer for this file. Not populated for items in shared drives.",
                            },
                            canReadLabels: {
                                type: "boolean",
                                description: "Whether the current user can read the labels on the file.",
                            },
                            canModifyLabels: {
                                type: "boolean",
                                description: "Whether the current user can modify the file's labels.",
                            },
                        },
                    },
                    hasAugmentedPermissions: {
                        type: "boolean",
                        description: "Whether there are permissions directly on this file. This field is only populated for items in shared drives.",
                    },
                    trashingUser: {
                        type: "object",
                        description: "The user who trashed the file. Only populated for items in shared drives.",
                        properties: {
                            displayName: {
                                type: "string",
                                description: "A plain text displayable name for this user.",
                            },
                            kind: {
                                type: "string",
                                description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                            },
                            me: {
                                type: "boolean",
                                description: "Whether this user is the requesting user.",
                            },
                            permissionId: {
                                type: "string",
                                description: "The user's ID as visible in Permission resources.",
                            },
                            emailAddress: {
                                type: "string",
                                description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                            },
                            photoLink: {
                                type: "string",
                                description: "A link to the user's profile photo, if available.",
                            },
                        },
                    },
                    thumbnailVersion: {
                        type: "string",
                        description: "The thumbnail version for use in thumbnail cache invalidation.",
                    },
                    trashedTime: {
                        type: "string",
                        description: "The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.",
                    },
                    modifiedByMe: {
                        type: "boolean",
                        description: "Whether the file has been modified by this user.",
                    },
                    permissionIds: {
                        type: "array",
                        description: "A collection of permission IDs for users with access to this file",
                        items: {
                            type: "string",
                            description: "A permission ID from a permission for this file.",
                        },
                    },
                    imageMediaMetadata: {
                        type: "object",
                        description: "Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.",
                        properties: {
                            flashUsed: {
                                type: "boolean",
                                description: "Whether a flash was used in taking this image.",
                            },
                            meteringMode: {
                                type: "string",
                                description: "The metering mode used to create the photo.",
                            },
                            sensor: {
                                type: "string",
                                description: "The type of sensor used to create the photo.",
                            },
                            exposureMode: {
                                type: "string",
                                description: "The exposure mode used to create the photo.",
                            },
                            colorSpace: {
                                type: "string",
                                description: "The color space of the photo.",
                            },
                            whiteBalance: {
                                type: "string",
                                description: "The white balance mode used to create the photo.",
                            },
                            width: {
                                type: "number",
                                description: "The width of the image in pixels.",
                            },
                            height: {
                                type: "number",
                                description: "The height of the image in pixels.",
                            },
                            location: {
                                type: "object",
                                description: "The location stored in the image.",
                                properties: {
                                    latitude: {
                                        type: "number",
                                        description: "The latitude stored in the image.",
                                    },
                                    longitude: {
                                        type: "number",
                                        description: "The longitude stored in the image.",
                                    },
                                    altitude: {
                                        type: "number",
                                        description: "The altitude stored in the image.",
                                    },
                                },
                            },
                            rotation: {
                                type: "number",
                                description: "The rotation in clockwise degrees from the image's original orientation.",
                            },
                            time: {
                                type: "string",
                                description: "The date and time the photo was taken (EXIF DateTime).",
                            },
                            cameraMake: {
                                type: "string",
                                description: "The make of the camera used to create the photo.",
                            },
                            cameraModel: {
                                type: "string",
                                description: "The model of the camera used to create the photo.",
                            },
                            exposureTime: {
                                type: "number",
                                description: "The length of the exposure, in seconds.",
                            },
                            aperture: {
                                type: "number",
                                description: "The aperture used to create the photo (f-number).",
                            },
                            focalLength: {
                                type: "number",
                                description: "The focal length used to create the photo, in millimeters.",
                            },
                            isoSpeed: {
                                type: "number",
                                description: "The ISO speed used to create the photo.",
                            },
                            exposureBias: {
                                type: "number",
                                description: "The exposure bias of the photo (APEX value).",
                            },
                            maxApertureValue: {
                                type: "number",
                                description: "The smallest f-number of the lens at the focal length used to create the photo (APEX value).",
                            },
                            subjectDistance: {
                                type: "number",
                                description: "The distance to the subject of the photo, in meters.",
                            },
                            lens: {
                                type: "string",
                                description: "The lens used to create the photo.",
                            },
                        },
                    },
                    videoMediaMetadata: {
                        type: "object",
                        description: "Metadata about video media. This will only be present for video types.",
                        properties: {
                            width: {
                                type: "number",
                                description: "The width of the video in pixels.",
                            },
                            height: {
                                type: "number",
                                description: "The height of the video in pixels.",
                            },
                            durationMillis: {
                                type: "number",
                                description: "The duration of the video in milliseconds.",
                            },
                        },
                    },
                    shortcutDetails: {
                        type: "object",
                        description: "Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.",
                        properties: {
                            targetId: {
                                type: "string",
                                description: "The ID of the file that this shortcut points to.",
                            },
                            targetMimeType: {
                                type: "string",
                                description: "The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.",
                            },
                            targetResourceKey: {
                                type: "string",
                                description: "The resource key of the target file.",
                            },
                        },
                    },
                    contentRestrictions: {
                        type: "array",
                        description: "Content restrictions for this file. Only populated if there are content restrictions for this file.",
                        items: {
                            type: "object",
                            description: "A set of restrictions for a content file.",
                            properties: {
                                readOnly: {
                                    type: "boolean",
                                    description: "Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.",
                                },
                                reason: {
                                    type: "string",
                                    description: "Reason for why the content of the file is restricted.",
                                },
                                type: {
                                    type: "string",
                                    description: "The type of the content restriction. Currently the only possible value is globalContentRestriction.",
                                },
                                restrictingUser: {
                                    type: "object",
                                    description: "The user who set the content restriction.",
                                    properties: {
                                        displayName: {
                                            type: "string",
                                            description: "A plain text displayable name for this user.",
                                        },
                                        kind: {
                                            type: "string",
                                            description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                                        },
                                        me: {
                                            type: "boolean",
                                            description: "Whether this user is the requesting user.",
                                        },
                                        permissionId: {
                                            type: "string",
                                            description: "The user's ID as visible in Permission resources.",
                                        },
                                        emailAddress: {
                                            type: "string",
                                            description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                                        },
                                        photoLink: {
                                            type: "string",
                                            description: "A link to the user's profile photo, if available.",
                                        },
                                    },
                                },
                                restrictionTime: {
                                    type: "string",
                                    description: "The time at which the content restriction was set (formatted RFC 3339 timestamp).",
                                },
                            },
                        },
                    },
                    resourceKey: {
                        type: "string",
                        description: "A key needed to access the item via a shared link.",
                    },
                    linkShareMetadata: {
                        type: "object",
                        description: "Metadata about the shared link.",
                        properties: {
                            securityUpdateEligible: {
                                type: "boolean",
                                description: "Indicates whether the link is eligible for security update.",
                            },
                            securityUpdateEnabled: {
                                type: "boolean",
                                description: "Specifies whether the link requires a password to access.",
                            },
                        },
                    },
                    labelInfo: {
                        type: "object",
                        description: "An overview of the labels on the file.",
                        properties: {
                            labels: {
                                type: "array",
                                description: "The list of labels contained on the file.",
                                items: {
                                    type: "object",
                                    description: "A label contained on the file",
                                    properties: {
                                        id: {
                                            type: "string",
                                            description: "The ID of the label.",
                                        },
                                        revisionId: {
                                            type: "string",
                                            description: "The revision ID of the label.",
                                        },
                                        kind: {
                                            type: "string",
                                            description: "Identifies what kind of resource this is. Value: the fixed string 'drive#label'.",
                                        },
                                        fields: {
                                            type: "object",
                                            description: "Additional metadata about this label.",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    sha1Checksum: {
                        type: "string",
                        description: "The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
                    },
                    sha256Checksum: {
                        type: "string",
                        description: "The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
                    },
                },
            },
        },
    },
};
exports.GoogleDriveFileMetadataInput = {
    type: "object",
    description: "The input for a file from a google drive",
    properties: {
        fileId: {
            type: "string",
            description: "The id of the file",
        },
        supportsAllDrives: {
            type: "boolean",
            description: "Whether the requesting application supports both My Drives and shared drives.",
        },
        includePermissionsForView: {
            type: "string",
            description: "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
        },
        includeLabels: {
            type: "string",
            description: "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
        },
    },
    required: ["fileId"],
};
exports.GoogleDriveFileMetadata = {
    type: "object",
    description: "A single Drive file",
    properties: {
        kind: {
            type: "string",
            description: "Identifies what kind of resource this is. Value: the fixed string 'drive#file'.",
        },
        driveId: {
            type: "string",
            description: "The ID of the shared drive the file resides in. Only populated for items in shared drives.",
        },
        fileExtension: {
            type: "string",
            description: "The extension of the file. The final component of fullFileExtension. This is only available for files with binary content in Google Drive.",
        },
        copyRequiresWriterPermission: {
            type: "boolean",
            description: "Whether the options to copy, print, or download this file, should be disabled for readers and commenters.",
        },
        md5Checksum: {
            type: "string",
            description: "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.",
        },
        contentHints: {
            type: "object",
            description: "Additional information about the content of the file. These fields are never populated in responses.",
            properties: {
                indexableText: {
                    type: "string",
                    description: "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.",
                },
                thumbnail: {
                    type: "object",
                    description: "A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.",
                    properties: {
                        image: {
                            type: "string",
                            description: "The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.",
                        },
                        mimeType: {
                            type: "string",
                            description: "The MIME type of the thumbnail.",
                        },
                    },
                },
            },
        },
        writersCanShare: {
            type: "boolean",
            description: "Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.",
        },
        viewedByMe: {
            type: "boolean",
            description: "Whether the file has been viewed by this user.",
        },
        mimeType: {
            type: "string",
            description: "The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.",
        },
        parents: {
            type: "array",
            description: "The IDs of the parent folders which contain the file. If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.",
            items: {
                type: "string",
            },
        },
        thumbnailLink: {
            type: "string",
            description: "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.",
        },
        iconLink: {
            type: "string",
            description: "A static, unauthenticated link to the file's icon.",
        },
        shared: {
            type: "boolean",
            description: "Whether the file has been shared. Not populated for items in shared drives.",
        },
        lastModifyingUser: {
            type: "object",
            description: "The last user to modify the file.",
            properties: {
                displayName: {
                    type: "string",
                    description: "A plain text displayable name for this user.",
                },
                kind: {
                    type: "string",
                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                },
                me: {
                    type: "boolean",
                    description: "Whether this user is the requesting user.",
                },
                permissionId: {
                    type: "string",
                    description: "The user's ID as visible in Permission resources.",
                },
                emailAddress: {
                    type: "string",
                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                },
                photoLink: {
                    type: "string",
                    description: "A link to the user's profile photo, if available.",
                },
            },
        },
        owners: {
            type: "array",
            description: "The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.",
            items: {
                type: "object",
                description: "A user that ownes the file.",
                properties: {
                    displayName: {
                        type: "string",
                        description: "A plain text displayable name for this user.",
                    },
                    kind: {
                        type: "string",
                        description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                    },
                    me: {
                        type: "boolean",
                        description: "Whether this user is the requesting user.",
                    },
                    permissionId: {
                        type: "string",
                        description: "The user's ID as visible in Permission resources.",
                    },
                    emailAddress: {
                        type: "string",
                        description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                    },
                    photoLink: {
                        type: "string",
                        description: "A link to the user's profile photo, if available.",
                    },
                },
            },
        },
        headRevisionId: {
            type: "string",
            description: "The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.",
        },
        sharingUser: {
            type: "object",
            description: "The user who shared the file with the requesting user, if applicable.",
            properties: {
                displayName: {
                    type: "string",
                    description: "A plain text displayable name for this user.",
                },
                kind: {
                    type: "string",
                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                },
                me: {
                    type: "boolean",
                    description: "Whether this user is the requesting user.",
                },
                permissionId: {
                    type: "string",
                    description: "The user's ID as visible in Permission resources.",
                },
                emailAddress: {
                    type: "string",
                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                },
                photoLink: {
                    type: "string",
                    description: "A link to the user's profile photo, if available.",
                },
            },
        },
        webViewLink: {
            type: "string",
            description: "A link for opening the file in a relevant Google editor or viewer in a browser.",
        },
        webContentLink: {
            type: "string",
            description: "A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.",
        },
        size: {
            type: "string",
            description: "Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.",
        },
        permissions: {
            type: "array",
            description: "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.",
            items: {
                type: "object",
                description: "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.",
                properties: {
                    id: {
                        type: "string",
                        description: "The ID of the permission.",
                    },
                    type: {
                        type: "string",
                        description: "The type of the grantee. Valid values are: - user - group - domain - anyone",
                    },
                    displayName: {
                        type: "string",
                        description: "The `pretty` name of the value of the permission.",
                    },
                    kind: {
                        type: "string",
                        description: "Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.",
                    },
                    permissionDetails: {
                        type: "array",
                        description: " Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.",
                        items: {
                            type: "object",
                            description: "A set of permissions that a user with the effective role can use to access a file or folder.",
                            properties: {
                                permissionType: {
                                    type: "string",
                                    description: "The type of the permission",
                                },
                                inheritedFrom: {
                                    type: "string",
                                    description: "The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the shared drive.",
                                },
                                role: {
                                    type: "string",
                                    description: "The role of the permission",
                                },
                                inherited: {
                                    type: "boolean",
                                    description: "Whether this permission is inherited.",
                                },
                            },
                        },
                    },
                    photoLink: {
                        type: "string",
                        description: "A link to the user's profile photo, if available.",
                    },
                    emailAddress: {
                        type: "string",
                        description: "The email address of the user or group to which this permission refers.",
                    },
                    role: {
                        type: "string",
                        description: "The role granted by this permission. Valid values are: - owner - organizer - fileOrganizer - writer - commenter - reader",
                    },
                    allowFileDiscovery: {
                        type: "boolean",
                        description: "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.",
                    },
                    domain: {
                        type: "string",
                        description: "The domain to which this permission refers.",
                    },
                    expirationTime: {
                        type: "string",
                        description: "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future",
                    },
                    deleted: {
                        type: "boolean",
                        description: "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.",
                    },
                    view: {
                        type: "string",
                        description: "Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.",
                    },
                    pendingOwner: {
                        type: "boolean",
                        description: "Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.",
                    },
                },
            },
        },
        hasThumbnail: {
            type: "boolean",
            description: "Whether the file has a thumbnail.",
        },
        spaces: {
            type: "array",
            description: "The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.",
            items: {
                type: "string",
            },
        },
        folderColorRgb: {
            type: "string",
            description: "The color for a folder as an RGB hex string.",
        },
        id: {
            type: "string",
            description: "The ID of the file.",
        },
        name: {
            type: "string",
            description: "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.",
        },
        description: {
            type: "string",
            description: "A short description of the file.",
        },
        starred: {
            type: "boolean",
            description: "Whether the user has starred the file.",
        },
        trashed: {
            type: "boolean",
            description: "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.",
        },
        explicitlyTrashed: {
            type: "boolean",
            description: "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.",
        },
        createdTime: {
            type: "string",
            description: "The time at which the file was created (RFC 3339 date-time).",
        },
        modifiedTime: {
            type: "string",
            description: "The last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.",
        },
        modifiedByMeTime: {
            type: "string",
            description: "The last time the file was modified by the user (RFC 3339 date-time).",
        },
        viewedByMeTime: {
            type: "string",
            description: "The last time the file was viewed by the user (RFC 3339 date-time).",
        },
        sharedWithMeTime: {
            type: "string",
            description: "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).",
        },
        quotaBytesUsed: {
            type: "string",
            description: "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.",
        },
        version: {
            type: "string",
            description: "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.",
        },
        originalFilename: {
            type: "string",
            description: "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.",
        },
        ownedByMe: {
            type: "boolean",
            description: "Whether the user owns the file. Not populated for items in shared drives.",
        },
        fullFileExtension: {
            type: "string",
            description: 'The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.',
        },
        properties: {
            type: "object",
            description: "Additional metadata about the file.",
        },
        appProperties: {
            type: "object",
            description: "Additional metadata about the file.",
        },
        isAppAuthorized: {
            type: "boolean",
            description: "Whether the file was created or opened by the requesting app.",
        },
        capabilities: {
            type: "object",
            description: "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.",
            properties: {
                canMoveChildrenOutOfDrive: {
                    type: "boolean",
                    description: "Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canReadDrive: {
                    type: "boolean",
                    description: "Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.",
                },
                canEdit: {
                    type: "boolean",
                    description: "Whether the current user can edit this file.",
                },
                canCopy: {
                    type: "boolean",
                    description: "Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.",
                },
                canComment: {
                    type: "boolean",
                    description: "Whether the current user can comment on this file.",
                },
                canAddChildren: {
                    type: "boolean",
                    description: "Whether the current user can add children to this folder. This is always false when the item is not a folder.",
                },
                canDelete: {
                    type: "boolean",
                    description: "Whether the current user can delete this file.",
                },
                canDownload: {
                    type: "boolean",
                    description: "Whether the current user can download this file.",
                },
                canListChildren: {
                    type: "boolean",
                    description: "Whether the current user can list the children of this folder. This is always false when the item is not a folder.",
                },
                canRemoveChildren: {
                    type: "boolean",
                    description: "Whether the current user can remove children from this folder. This is always false when the item is not a folder.",
                },
                canRename: {
                    type: "boolean",
                    description: "Whether the current user can rename this file.",
                },
                canTrash: {
                    type: "boolean",
                    description: "Whether the current user can move this file to trash.",
                },
                canReadRevisions: {
                    type: "boolean",
                    description: "Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.",
                },
                canChangeCopyRequiresWriterPermission: {
                    type: "boolean",
                    description: "Whether the current user can change the copyRequiresWriterPermission restriction of this file.",
                },
                canUnrtash: {
                    type: "boolean",
                    description: "Whether the current user can restore this file from trash.",
                },
                canModifyContent: {
                    type: "boolean",
                    description: "Whether the current user can modify the content of this file.",
                },
                canDeleteChildren: {
                    type: "boolean",
                    description: "Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canTrashChildren: {
                    type: "boolean",
                    description: "Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canMoveItemOutOfDrive: {
                    type: "boolean",
                    description: "Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.",
                },
                canAddMyDriveParent: {
                    type: "boolean",
                    description: "Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.",
                },
                canRemoveMyDriveParent: {
                    type: "boolean",
                    description: "Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.",
                },
                canMoveItemWithinDrive: {
                    type: "boolean",
                    description: "Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.",
                },
                canShare: {
                    type: "boolean",
                    description: "Whether the current user can modify the sharing settings for this file.",
                },
                canMoveChildrenWithinDrive: {
                    type: "boolean",
                    description: "Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.",
                },
                canModifyContentRestriction: {
                    type: "boolean",
                    description: "Whether the current user can modify the contentRestrictions on this file.",
                },
                canAddFolderFromAnotherDrive: {
                    type: "boolean",
                    description: "Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canChangeSecurityUpdateEnabled: {
                    type: "boolean",
                    description: "Whether the current user can change the securityUpdateEnabled field on link share metadata",
                },
                canAcceptOwnership: {
                    type: "boolean",
                    description: "Whether the current user can accept the ownership transfer for this file. Not populated for items in shared drives.",
                },
                canReadLabels: {
                    type: "boolean",
                    description: "Whether the current user can read the labels on the file.",
                },
                canModifyLabels: {
                    type: "boolean",
                    description: "Whether the current user can modify the file's labels.",
                },
            },
        },
        hasAugmentedPermissions: {
            type: "boolean",
            description: "Whether there are permissions directly on this file. This field is only populated for items in shared drives.",
        },
        trashingUser: {
            type: "object",
            description: "The user who trashed the file. Only populated for items in shared drives.",
            properties: {
                displayName: {
                    type: "string",
                    description: "A plain text displayable name for this user.",
                },
                kind: {
                    type: "string",
                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                },
                me: {
                    type: "boolean",
                    description: "Whether this user is the requesting user.",
                },
                permissionId: {
                    type: "string",
                    description: "The user's ID as visible in Permission resources.",
                },
                emailAddress: {
                    type: "string",
                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                },
                photoLink: {
                    type: "string",
                    description: "A link to the user's profile photo, if available.",
                },
            },
        },
        thumbnailVersion: {
            type: "string",
            description: "The thumbnail version for use in thumbnail cache invalidation.",
        },
        trashedTime: {
            type: "string",
            description: "The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.",
        },
        modifiedByMe: {
            type: "boolean",
            description: "Whether the file has been modified by this user.",
        },
        permissionIds: {
            type: "array",
            description: "A collection of permission IDs for users with access to this file",
            items: {
                type: "string",
                description: "A permission ID from a permission for this file.",
            },
        },
        imageMediaMetadata: {
            type: "object",
            description: "Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.",
            properties: {
                flashUsed: {
                    type: "boolean",
                    description: "Whether a flash was used in taking this image.",
                },
                meteringMode: {
                    type: "string",
                    description: "The metering mode used to create the photo.",
                },
                sensor: {
                    type: "string",
                    description: "The type of sensor used to create the photo.",
                },
                exposureMode: {
                    type: "string",
                    description: "The exposure mode used to create the photo.",
                },
                colorSpace: {
                    type: "string",
                    description: "The color space of the photo.",
                },
                whiteBalance: {
                    type: "string",
                    description: "The white balance mode used to create the photo.",
                },
                width: {
                    type: "number",
                    description: "The width of the image in pixels.",
                },
                height: {
                    type: "number",
                    description: "The height of the image in pixels.",
                },
                location: {
                    type: "object",
                    description: "The location stored in the image.",
                    properties: {
                        latitude: {
                            type: "number",
                            description: "The latitude stored in the image.",
                        },
                        longitude: {
                            type: "number",
                            description: "The longitude stored in the image.",
                        },
                        altitude: {
                            type: "number",
                            description: "The altitude stored in the image.",
                        },
                    },
                },
                rotation: {
                    type: "number",
                    description: "The rotation in clockwise degrees from the image's original orientation.",
                },
                time: {
                    type: "string",
                    description: "The date and time the photo was taken (EXIF DateTime).",
                },
                cameraMake: {
                    type: "string",
                    description: "The make of the camera used to create the photo.",
                },
                cameraModel: {
                    type: "string",
                    description: "The model of the camera used to create the photo.",
                },
                exposureTime: {
                    type: "number",
                    description: "The length of the exposure, in seconds.",
                },
                aperture: {
                    type: "number",
                    description: "The aperture used to create the photo (f-number).",
                },
                focalLength: {
                    type: "number",
                    description: "The focal length used to create the photo, in millimeters.",
                },
                isoSpeed: {
                    type: "number",
                    description: "The ISO speed used to create the photo.",
                },
                exposureBias: {
                    type: "number",
                    description: "The exposure bias of the photo (APEX value).",
                },
                maxApertureValue: {
                    type: "number",
                    description: "The smallest f-number of the lens at the focal length used to create the photo (APEX value).",
                },
                subjectDistance: {
                    type: "number",
                    description: "The distance to the subject of the photo, in meters.",
                },
                lens: {
                    type: "string",
                    description: "The lens used to create the photo.",
                },
            },
        },
        videoMediaMetadata: {
            type: "object",
            description: "Metadata about video media. This will only be present for video types.",
            properties: {
                width: {
                    type: "number",
                    description: "The width of the video in pixels.",
                },
                height: {
                    type: "number",
                    description: "The height of the video in pixels.",
                },
                durationMillis: {
                    type: "number",
                    description: "The duration of the video in milliseconds.",
                },
            },
        },
        shortcutDetails: {
            type: "object",
            description: "Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.",
            properties: {
                targetId: {
                    type: "string",
                    description: "The ID of the file that this shortcut points to.",
                },
                targetMimeType: {
                    type: "string",
                    description: "The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.",
                },
                targetResourceKey: {
                    type: "string",
                    description: "The resource key of the target file.",
                },
            },
        },
        contentRestrictions: {
            type: "array",
            description: "Content restrictions for this file. Only populated if there are content restrictions for this file.",
            items: {
                type: "object",
                description: "A set of restrictions for a content file.",
                properties: {
                    readOnly: {
                        type: "boolean",
                        description: "Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.",
                    },
                    reason: {
                        type: "string",
                        description: "Reason for why the content of the file is restricted.",
                    },
                    type: {
                        type: "string",
                        description: "The type of the content restriction. Currently the only possible value is globalContentRestriction.",
                    },
                    restrictingUser: {
                        type: "object",
                        description: "The user who set the content restriction.",
                        properties: {
                            displayName: {
                                type: "string",
                                description: "A plain text displayable name for this user.",
                            },
                            kind: {
                                type: "string",
                                description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                            },
                            me: {
                                type: "boolean",
                                description: "Whether this user is the requesting user.",
                            },
                            permissionId: {
                                type: "string",
                                description: "The user's ID as visible in Permission resources.",
                            },
                            emailAddress: {
                                type: "string",
                                description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                            },
                            photoLink: {
                                type: "string",
                                description: "A link to the user's profile photo, if available.",
                            },
                        },
                    },
                    restrictionTime: {
                        type: "string",
                        description: "The time at which the content restriction was set (formatted RFC 3339 timestamp).",
                    },
                },
            },
        },
        resourceKey: {
            type: "string",
            description: "A key needed to access the item via a shared link.",
        },
        linkShareMetadata: {
            type: "object",
            description: "Metadata about the shared link.",
            properties: {
                securityUpdateEligible: {
                    type: "boolean",
                    description: "Indicates whether the link is eligible for security update.",
                },
                securityUpdateEnabled: {
                    type: "boolean",
                    description: "Specifies whether the link requires a password to access.",
                },
            },
        },
        labelInfo: {
            type: "object",
            description: "An overview of the labels on the file.",
            properties: {
                labels: {
                    type: "array",
                    description: "The list of labels contained on the file.",
                    items: {
                        type: "object",
                        description: "A label contained on the file",
                        properties: {
                            id: {
                                type: "string",
                                description: "The ID of the label.",
                            },
                            revisionId: {
                                type: "string",
                                description: "The revision ID of the label.",
                            },
                            kind: {
                                type: "string",
                                description: "Identifies what kind of resource this is. Value: the fixed string 'drive#label'.",
                            },
                            fields: {
                                type: "object",
                                description: "Additional metadata about this label.",
                            },
                        },
                    },
                },
            },
        },
        sha1Checksum: {
            type: "string",
            description: "The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
        },
        sha256Checksum: {
            type: "string",
            description: "The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
        },
    },
};
exports.GoogleDriveFileInput = {
    type: "object",
    description: "The input for a file from a google drive",
    properties: {
        fileId: {
            type: "string",
            description: "The id of the file. Only google docs & google sheets files are currently supported via this resource.",
        },
        acknowledgeAbuse: {
            type: "boolean",
            description: "Whether the user is acknowledging the risk of downloading known malware or other abusive files.",
        },
        supportsAllDrives: {
            type: "boolean",
            description: "Whether the requesting application supports both My Drives and shared drives.",
        },
        includePermissionsForView: {
            type: "string",
            description: "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
        },
        includeLabels: {
            type: "string",
            description: "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
        },
    },
    required: ["fileId", "acknowledgeAbuse"],
};
exports.GoogleDriveFile = {
    type: "object",
    description: "A single Drive file",
    properties: {
        kind: {
            type: "string",
            description: "Identifies what kind of resource this is. Value: the fixed string 'drive#file'.",
        },
        driveId: {
            type: "string",
            description: "The ID of the shared drive the file resides in. Only populated for items in shared drives.",
        },
        fileExtension: {
            type: "string",
            description: "The extension of the file. The final component of fullFileExtension. This is only available for files with binary content in Google Drive.",
        },
        copyRequiresWriterPermission: {
            type: "boolean",
            description: "Whether the options to copy, print, or download this file, should be disabled for readers and commenters.",
        },
        md5Checksum: {
            type: "string",
            description: "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.",
        },
        contentHints: {
            type: "object",
            description: "Additional information about the content of the file. These fields are never populated in responses.",
            properties: {
                indexableText: {
                    type: "string",
                    description: "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.",
                },
                thumbnail: {
                    type: "object",
                    description: "A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.",
                    properties: {
                        image: {
                            type: "string",
                            description: "The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.",
                        },
                        mimeType: {
                            type: "string",
                            description: "The MIME type of the thumbnail.",
                        },
                    },
                },
            },
        },
        writersCanShare: {
            type: "boolean",
            description: "Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.",
        },
        viewedByMe: {
            type: "boolean",
            description: "Whether the file has been viewed by this user.",
        },
        mimeType: {
            type: "string",
            description: "The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.",
        },
        parents: {
            type: "array",
            description: "The IDs of the parent folders which contain the file. If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.",
            items: {
                type: "string",
            },
        },
        thumbnailLink: {
            type: "string",
            description: "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.",
        },
        iconLink: {
            type: "string",
            description: "A static, unauthenticated link to the file's icon.",
        },
        shared: {
            type: "boolean",
            description: "Whether the file has been shared. Not populated for items in shared drives.",
        },
        lastModifyingUser: {
            type: "object",
            description: "The last user to modify the file.",
            properties: {
                displayName: {
                    type: "string",
                    description: "A plain text displayable name for this user.",
                },
                kind: {
                    type: "string",
                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                },
                me: {
                    type: "boolean",
                    description: "Whether this user is the requesting user.",
                },
                permissionId: {
                    type: "string",
                    description: "The user's ID as visible in Permission resources.",
                },
                emailAddress: {
                    type: "string",
                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                },
                photoLink: {
                    type: "string",
                    description: "A link to the user's profile photo, if available.",
                },
            },
        },
        owners: {
            type: "array",
            description: "The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.",
            items: {
                type: "object",
                description: "A user that ownes the file.",
                properties: {
                    displayName: {
                        type: "string",
                        description: "A plain text displayable name for this user.",
                    },
                    kind: {
                        type: "string",
                        description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                    },
                    me: {
                        type: "boolean",
                        description: "Whether this user is the requesting user.",
                    },
                    permissionId: {
                        type: "string",
                        description: "The user's ID as visible in Permission resources.",
                    },
                    emailAddress: {
                        type: "string",
                        description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                    },
                    photoLink: {
                        type: "string",
                        description: "A link to the user's profile photo, if available.",
                    },
                },
            },
        },
        headRevisionId: {
            type: "string",
            description: "The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.",
        },
        sharingUser: {
            type: "object",
            description: "The user who shared the file with the requesting user, if applicable.",
            properties: {
                displayName: {
                    type: "string",
                    description: "A plain text displayable name for this user.",
                },
                kind: {
                    type: "string",
                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                },
                me: {
                    type: "boolean",
                    description: "Whether this user is the requesting user.",
                },
                permissionId: {
                    type: "string",
                    description: "The user's ID as visible in Permission resources.",
                },
                emailAddress: {
                    type: "string",
                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                },
                photoLink: {
                    type: "string",
                    description: "A link to the user's profile photo, if available.",
                },
            },
        },
        webViewLink: {
            type: "string",
            description: "A link for opening the file in a relevant Google editor or viewer in a browser.",
        },
        webContentLink: {
            type: "string",
            description: "A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.",
        },
        size: {
            type: "string",
            description: "Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.",
        },
        permissions: {
            type: "array",
            description: "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.",
            items: {
                type: "object",
                description: "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.",
                properties: {
                    id: {
                        type: "string",
                        description: "The ID of the permission.",
                    },
                    type: {
                        type: "string",
                        description: "The type of the grantee. Valid values are: - user - group - domain - anyone",
                    },
                    displayName: {
                        type: "string",
                        description: "The `pretty` name of the value of the permission.",
                    },
                    kind: {
                        type: "string",
                        description: "Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.",
                    },
                    permissionDetails: {
                        type: "array",
                        description: " Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.",
                        items: {
                            type: "object",
                            description: "A set of permissions that a user with the effective role can use to access a file or folder.",
                            properties: {
                                permissionType: {
                                    type: "string",
                                    description: "The type of the permission",
                                },
                                inheritedFrom: {
                                    type: "string",
                                    description: "The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the shared drive.",
                                },
                                role: {
                                    type: "string",
                                    description: "The role of the permission",
                                },
                                inherited: {
                                    type: "boolean",
                                    description: "Whether this permission is inherited.",
                                },
                            },
                        },
                    },
                    photoLink: {
                        type: "string",
                        description: "A link to the user's profile photo, if available.",
                    },
                    emailAddress: {
                        type: "string",
                        description: "The email address of the user or group to which this permission refers.",
                    },
                    role: {
                        type: "string",
                        description: "The role granted by this permission. Valid values are: - owner - organizer - fileOrganizer - writer - commenter - reader",
                    },
                    allowFileDiscovery: {
                        type: "boolean",
                        description: "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.",
                    },
                    domain: {
                        type: "string",
                        description: "The domain to which this permission refers.",
                    },
                    expirationTime: {
                        type: "string",
                        description: "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future",
                    },
                    deleted: {
                        type: "boolean",
                        description: "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.",
                    },
                    view: {
                        type: "string",
                        description: "Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.",
                    },
                    pendingOwner: {
                        type: "boolean",
                        description: "Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.",
                    },
                },
            },
        },
        hasThumbnail: {
            type: "boolean",
            description: "Whether the file has a thumbnail.",
        },
        spaces: {
            type: "array",
            description: "The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.",
            items: {
                type: "string",
            },
        },
        folderColorRgb: {
            type: "string",
            description: "The color for a folder as an RGB hex string.",
        },
        id: {
            type: "string",
            description: "The ID of the file.",
        },
        name: {
            type: "string",
            description: "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.",
        },
        description: {
            type: "string",
            description: "A short description of the file.",
        },
        starred: {
            type: "boolean",
            description: "Whether the user has starred the file.",
        },
        trashed: {
            type: "boolean",
            description: "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.",
        },
        explicitlyTrashed: {
            type: "boolean",
            description: "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.",
        },
        createdTime: {
            type: "string",
            description: "The time at which the file was created (RFC 3339 date-time).",
        },
        modifiedTime: {
            type: "string",
            description: "The last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.",
        },
        modifiedByMeTime: {
            type: "string",
            description: "The last time the file was modified by the user (RFC 3339 date-time).",
        },
        viewedByMeTime: {
            type: "string",
            description: "The last time the file was viewed by the user (RFC 3339 date-time).",
        },
        sharedWithMeTime: {
            type: "string",
            description: "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).",
        },
        quotaBytesUsed: {
            type: "string",
            description: "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.",
        },
        version: {
            type: "string",
            description: "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.",
        },
        originalFilename: {
            type: "string",
            description: "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.",
        },
        ownedByMe: {
            type: "boolean",
            description: "Whether the user owns the file. Not populated for items in shared drives.",
        },
        fullFileExtension: {
            type: "string",
            description: 'The full file extension extracted from the name field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.',
        },
        properties: {
            type: "object",
            description: "Additional metadata about the file.",
        },
        appProperties: {
            type: "object",
            description: "Additional metadata about the file.",
        },
        isAppAuthorized: {
            type: "boolean",
            description: "Whether the file was created or opened by the requesting app.",
        },
        capabilities: {
            type: "object",
            description: "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.",
            properties: {
                canMoveChildrenOutOfDrive: {
                    type: "boolean",
                    description: "Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canReadDrive: {
                    type: "boolean",
                    description: "Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.",
                },
                canEdit: {
                    type: "boolean",
                    description: "Whether the current user can edit this file.",
                },
                canCopy: {
                    type: "boolean",
                    description: "Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.",
                },
                canComment: {
                    type: "boolean",
                    description: "Whether the current user can comment on this file.",
                },
                canAddChildren: {
                    type: "boolean",
                    description: "Whether the current user can add children to this folder. This is always false when the item is not a folder.",
                },
                canDelete: {
                    type: "boolean",
                    description: "Whether the current user can delete this file.",
                },
                canDownload: {
                    type: "boolean",
                    description: "Whether the current user can download this file.",
                },
                canListChildren: {
                    type: "boolean",
                    description: "Whether the current user can list the children of this folder. This is always false when the item is not a folder.",
                },
                canRemoveChildren: {
                    type: "boolean",
                    description: "Whether the current user can remove children from this folder. This is always false when the item is not a folder.",
                },
                canRename: {
                    type: "boolean",
                    description: "Whether the current user can rename this file.",
                },
                canTrash: {
                    type: "boolean",
                    description: "Whether the current user can move this file to trash.",
                },
                canReadRevisions: {
                    type: "boolean",
                    description: "Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.",
                },
                canChangeCopyRequiresWriterPermission: {
                    type: "boolean",
                    description: "Whether the current user can change the copyRequiresWriterPermission restriction of this file.",
                },
                canUnrtash: {
                    type: "boolean",
                    description: "Whether the current user can restore this file from trash.",
                },
                canModifyContent: {
                    type: "boolean",
                    description: "Whether the current user can modify the content of this file.",
                },
                canDeleteChildren: {
                    type: "boolean",
                    description: "Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canTrashChildren: {
                    type: "boolean",
                    description: "Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canMoveItemOutOfDrive: {
                    type: "boolean",
                    description: "Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.",
                },
                canAddMyDriveParent: {
                    type: "boolean",
                    description: "Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.",
                },
                canRemoveMyDriveParent: {
                    type: "boolean",
                    description: "Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.",
                },
                canMoveItemWithinDrive: {
                    type: "boolean",
                    description: "Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.",
                },
                canShare: {
                    type: "boolean",
                    description: "Whether the current user can modify the sharing settings for this file.",
                },
                canMoveChildrenWithinDrive: {
                    type: "boolean",
                    description: "Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.",
                },
                canModifyContentRestriction: {
                    type: "boolean",
                    description: "Whether the current user can modify the contentRestrictions on this file.",
                },
                canAddFolderFromAnotherDrive: {
                    type: "boolean",
                    description: "Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                },
                canChangeSecurityUpdateEnabled: {
                    type: "boolean",
                    description: "Whether the current user can change the securityUpdateEnabled field on link share metadata",
                },
                canAcceptOwnership: {
                    type: "boolean",
                    description: "Whether the current user can accept the ownership transfer for this file. Not populated for items in shared drives.",
                },
                canReadLabels: {
                    type: "boolean",
                    description: "Whether the current user can read the labels on the file.",
                },
                canModifyLabels: {
                    type: "boolean",
                    description: "Whether the current user can modify the file's labels.",
                },
            },
        },
        hasAugmentedPermissions: {
            type: "boolean",
            description: "Whether there are permissions directly on this file. This field is only populated for items in shared drives.",
        },
        trashingUser: {
            type: "object",
            description: "The user who trashed the file. Only populated for items in shared drives.",
            properties: {
                displayName: {
                    type: "string",
                    description: "A plain text displayable name for this user.",
                },
                kind: {
                    type: "string",
                    description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                },
                me: {
                    type: "boolean",
                    description: "Whether this user is the requesting user.",
                },
                permissionId: {
                    type: "string",
                    description: "The user's ID as visible in Permission resources.",
                },
                emailAddress: {
                    type: "string",
                    description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                },
                photoLink: {
                    type: "string",
                    description: "A link to the user's profile photo, if available.",
                },
            },
        },
        thumbnailVersion: {
            type: "string",
            description: "The thumbnail version for use in thumbnail cache invalidation.",
        },
        trashedTime: {
            type: "string",
            description: "The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.",
        },
        modifiedByMe: {
            type: "boolean",
            description: "Whether the file has been modified by this user.",
        },
        permissionIds: {
            type: "array",
            description: "A collection of permission IDs for users with access to this file",
            items: {
                type: "string",
                description: "A permission ID from a permission for this file.",
            },
        },
        imageMediaMetadata: {
            type: "object",
            description: "Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.",
            properties: {
                flashUsed: {
                    type: "boolean",
                    description: "Whether a flash was used in taking this image.",
                },
                meteringMode: {
                    type: "string",
                    description: "The metering mode used to create the photo.",
                },
                sensor: {
                    type: "string",
                    description: "The type of sensor used to create the photo.",
                },
                exposureMode: {
                    type: "string",
                    description: "The exposure mode used to create the photo.",
                },
                colorSpace: {
                    type: "string",
                    description: "The color space of the photo.",
                },
                whiteBalance: {
                    type: "string",
                    description: "The white balance mode used to create the photo.",
                },
                width: {
                    type: "number",
                    description: "The width of the image in pixels.",
                },
                height: {
                    type: "number",
                    description: "The height of the image in pixels.",
                },
                location: {
                    type: "object",
                    description: "The location stored in the image.",
                    properties: {
                        latitude: {
                            type: "number",
                            description: "The latitude stored in the image.",
                        },
                        longitude: {
                            type: "number",
                            description: "The longitude stored in the image.",
                        },
                        altitude: {
                            type: "number",
                            description: "The altitude stored in the image.",
                        },
                    },
                },
                rotation: {
                    type: "number",
                    description: "The rotation in clockwise degrees from the image's original orientation.",
                },
                time: {
                    type: "string",
                    description: "The date and time the photo was taken (EXIF DateTime).",
                },
                cameraMake: {
                    type: "string",
                    description: "The make of the camera used to create the photo.",
                },
                cameraModel: {
                    type: "string",
                    description: "The model of the camera used to create the photo.",
                },
                exposureTime: {
                    type: "number",
                    description: "The length of the exposure, in seconds.",
                },
                aperture: {
                    type: "number",
                    description: "The aperture used to create the photo (f-number).",
                },
                focalLength: {
                    type: "number",
                    description: "The focal length used to create the photo, in millimeters.",
                },
                isoSpeed: {
                    type: "number",
                    description: "The ISO speed used to create the photo.",
                },
                exposureBias: {
                    type: "number",
                    description: "The exposure bias of the photo (APEX value).",
                },
                maxApertureValue: {
                    type: "number",
                    description: "The smallest f-number of the lens at the focal length used to create the photo (APEX value).",
                },
                subjectDistance: {
                    type: "number",
                    description: "The distance to the subject of the photo, in meters.",
                },
                lens: {
                    type: "string",
                    description: "The lens used to create the photo.",
                },
            },
        },
        videoMediaMetadata: {
            type: "object",
            description: "Metadata about video media. This will only be present for video types.",
            properties: {
                width: {
                    type: "number",
                    description: "The width of the video in pixels.",
                },
                height: {
                    type: "number",
                    description: "The height of the video in pixels.",
                },
                durationMillis: {
                    type: "number",
                    description: "The duration of the video in milliseconds.",
                },
            },
        },
        shortcutDetails: {
            type: "object",
            description: "Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.",
            properties: {
                targetId: {
                    type: "string",
                    description: "The ID of the file that this shortcut points to.",
                },
                targetMimeType: {
                    type: "string",
                    description: "The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.",
                },
                targetResourceKey: {
                    type: "string",
                    description: "The resource key of the target file.",
                },
            },
        },
        contentRestrictions: {
            type: "array",
            description: "Content restrictions for this file. Only populated if there are content restrictions for this file.",
            items: {
                type: "object",
                description: "A set of restrictions for a content file.",
                properties: {
                    readOnly: {
                        type: "boolean",
                        description: "Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.",
                    },
                    reason: {
                        type: "string",
                        description: "Reason for why the content of the file is restricted.",
                    },
                    type: {
                        type: "string",
                        description: "The type of the content restriction. Currently the only possible value is globalContentRestriction.",
                    },
                    restrictingUser: {
                        type: "object",
                        description: "The user who set the content restriction.",
                        properties: {
                            displayName: {
                                type: "string",
                                description: "A plain text displayable name for this user.",
                            },
                            kind: {
                                type: "string",
                                description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.",
                            },
                            me: {
                                type: "boolean",
                                description: "Whether this user is the requesting user.",
                            },
                            permissionId: {
                                type: "string",
                                description: "The user's ID as visible in Permission resources.",
                            },
                            emailAddress: {
                                type: "string",
                                description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
                            },
                            photoLink: {
                                type: "string",
                                description: "A link to the user's profile photo, if available.",
                            },
                        },
                    },
                    restrictionTime: {
                        type: "string",
                        description: "The time at which the content restriction was set (formatted RFC 3339 timestamp).",
                    },
                },
            },
        },
        resourceKey: {
            type: "string",
            description: "A key needed to access the item via a shared link.",
        },
        linkShareMetadata: {
            type: "object",
            description: "Metadata about the shared link.",
            properties: {
                securityUpdateEligible: {
                    type: "boolean",
                    description: "Indicates whether the link is eligible for security update.",
                },
                securityUpdateEnabled: {
                    type: "boolean",
                    description: "Specifies whether the link requires a password to access.",
                },
            },
        },
        labelInfo: {
            type: "object",
            description: "An overview of the labels on the file.",
            properties: {
                labels: {
                    type: "array",
                    description: "The list of labels contained on the file.",
                    items: {
                        type: "object",
                        description: "A label contained on the file",
                        properties: {
                            id: {
                                type: "string",
                                description: "The ID of the label.",
                            },
                            revisionId: {
                                type: "string",
                                description: "The revision ID of the label.",
                            },
                            kind: {
                                type: "string",
                                description: "Identifies what kind of resource this is. Value: the fixed string 'drive#label'.",
                            },
                            fields: {
                                type: "object",
                                description: "Additional metadata about this label.",
                            },
                        },
                    },
                },
            },
        },
        sha1Checksum: {
            type: "string",
            description: "The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
        },
        sha256Checksum: {
            type: "string",
            description: "The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
        },
        fileContent: {
            type: "string",
            description: "The actual content of the file. Only google docs & google sheets files are supported. In case of google docs a plaintext representation of the content is returned. In the case of google sheets, a csv representation of the content is returned in string form. All other file types will return an error message in this field.",
        },
    },
};
