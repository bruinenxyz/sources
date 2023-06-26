export declare const GoogleProfile: {
    readonly title: "GoogleProfile";
    readonly description: "A google profile";
    readonly type: "object";
    readonly properties: {
        readonly emailAddress: {
            readonly type: "string";
            readonly description: "The email of the user";
        };
        readonly messagesTotal: {
            readonly type: "number";
            readonly description: "The total messages of the user";
        };
        readonly threadsTotal: {
            readonly type: "number";
            readonly description: "The total email threads of the user";
        };
        readonly historyId: {
            readonly type: "string";
            readonly description: "The historyId of the user";
        };
    };
};
export declare const GoogleDraftsInput: {
    readonly title: "GoogleDraftsInput";
    readonly description: "The input for your google drafts";
    readonly type: "object";
    readonly properties: {
        readonly pageToken: {
            readonly type: "string";
            readonly description: "The page token for your drafts";
        };
        readonly q: {
            readonly type: "string";
            readonly description: "The query for your drafts";
        };
    };
};
export declare const GoogleDrafts: {
    readonly title: "GoogleDrafts";
    readonly description: "Your google drafts";
    readonly type: "object";
    readonly properties: {
        readonly drafts: {
            readonly type: "array";
            readonly description: "A list of your google drafts";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the draft";
                    };
                    readonly message: {
                        readonly type: "object";
                        readonly description: "The message of the draft";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The id of the message";
                            };
                            readonly threadId: {
                                readonly type: "string";
                                readonly description: "The threadId of the message";
                            };
                        };
                    };
                };
            };
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The next page token for your drafts";
        };
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The result size estimate for your drafts";
        };
    };
};
export declare const GoogleParsedDrafts: {
    readonly title: "GoogleParsedDrafts";
    readonly description: "Your google parsed drafts";
    readonly type: "object";
    readonly properties: {
        readonly drafts: {
            readonly type: "array";
            readonly description: "A list of your google drafts";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the draft";
                    };
                    readonly messageId: {
                        readonly type: "string";
                        readonly description: "The id of the draft";
                    };
                    readonly threadId: {
                        readonly type: "string";
                        readonly description: "The threadId of the draft";
                    };
                    readonly labelIds: {
                        readonly type: "array";
                        readonly description: "The labelIds of the draft";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly headers: {
                        readonly type: "object";
                        readonly description: "The headers of the draft";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "The date of the draft";
                            };
                            readonly subject: {
                                readonly type: "string";
                                readonly description: "The subject of the draft";
                            };
                            readonly from: {
                                readonly type: "object";
                                readonly description: "The writer of the draft";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "The name of the writer";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "The email of the writer";
                                    };
                                };
                            };
                            readonly to: {
                                readonly type: "array";
                                readonly description: "The receivers of the draft";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A recipients of the draft";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the recipient";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the recipient";
                                        };
                                    };
                                };
                            };
                            readonly cc: {
                                readonly type: "array";
                                readonly description: "The ccs of the draft";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A cc of the draft";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the cc";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the cc";
                                        };
                                    };
                                };
                            };
                            readonly bcc: {
                                readonly type: "array";
                                readonly description: "The bccs of the draft";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A bcc of the draft";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the bcc";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the bcc";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly body: {
                        readonly type: "string";
                        readonly description: "The body of the draft";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the draft";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment of the draft";
                            readonly properties: {
                                readonly attachmentId: {
                                    readonly type: "string";
                                    readonly description: "The attachmentId of the attachment";
                                };
                                readonly mimeType: {
                                    readonly type: "string";
                                    readonly description: "The mimeType of the attachment";
                                };
                                readonly filename: {
                                    readonly type: "string";
                                    readonly description: "The filename of the attachment";
                                };
                                readonly contentType: {
                                    readonly type: "string";
                                    readonly description: "The contentType of the attachment";
                                };
                                readonly contentDisposition: {
                                    readonly type: "string";
                                    readonly description: "The contentDisposition of the attachment";
                                };
                                readonly contentTransferEncoding: {
                                    readonly type: "string";
                                    readonly description: "The contentTransferEncoding of the attachment";
                                };
                                readonly size: {
                                    readonly type: "number";
                                    readonly description: "The size of the attachment";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The next page token for your drafts";
        };
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The result size estimate for your drafts";
        };
    };
};
export declare const GoogleDraftInput: {
    readonly title: "GoogleDraftInput";
    readonly description: "The input for your google draft";
    readonly type: "object";
    readonly properties: {
        readonly draftId: {
            readonly type: "string";
            readonly description: "The id of the draft";
        };
    };
    readonly required: readonly ["draftId"];
};
export declare const GoogleDraft: {
    readonly title: "GoogleDraft";
    readonly description: "Your google draft";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the draft";
        };
        readonly message: {
            readonly type: "object";
            readonly description: "The message of the draft";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The id of the message";
                };
                readonly threadId: {
                    readonly type: "string";
                    readonly description: "The threadId of the message";
                };
                readonly labelIds: {
                    readonly type: "array";
                    readonly description: "The labelIds of the message";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly snippet: {
                    readonly type: "string";
                    readonly description: "The snippet of the message";
                };
                readonly historyId: {
                    readonly type: "string";
                    readonly description: "The historyId of the message";
                };
                readonly internalDate: {
                    readonly type: "string";
                    readonly description: "The internalDate of the message";
                };
                readonly payload: {
                    readonly type: "object";
                    readonly description: "The payload of the message";
                    readonly properties: {
                        readonly partId: {
                            readonly type: "string";
                            readonly description: "The partId of the payload";
                        };
                        readonly mimeType: {
                            readonly type: "string";
                            readonly description: "The mimeType of the payload";
                        };
                        readonly filename: {
                            readonly type: "string";
                            readonly description: "The filename of the payload";
                        };
                        readonly headers: {
                            readonly type: "array";
                            readonly description: "The headers of the payload";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly value: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly body: {
                            readonly type: "object";
                            readonly description: "The body of the payload";
                            readonly properties: {
                                readonly size: {
                                    readonly type: "number";
                                };
                                readonly data: {
                                    readonly type: "string";
                                };
                                readonly attachmentId: {
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly parts: {
                            readonly type: "array";
                            readonly description: "The parts of the payload";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly partId: {
                                        readonly type: "string";
                                        readonly description: "The partId of the part";
                                    };
                                    readonly mimeType: {
                                        readonly type: "string";
                                        readonly description: "The mimeType of the part";
                                    };
                                    readonly filename: {
                                        readonly type: "string";
                                        readonly description: "The filename of the part";
                                    };
                                    readonly headers: {
                                        readonly type: "array";
                                        readonly description: "The headers of the part";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                };
                                                readonly value: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly body: {
                                        readonly type: "object";
                                        readonly description: "The body of the part";
                                        readonly properties: {
                                            readonly size: {
                                                readonly type: "number";
                                            };
                                            readonly data: {
                                                readonly type: "string";
                                            };
                                            readonly attachmentId: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly parts: {
                                        readonly type: "array";
                                        readonly description: "The parts of the part";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly partId: {
                                                    readonly type: "string";
                                                    readonly description: "The partId of the part";
                                                };
                                                readonly mimeType: {
                                                    readonly type: "string";
                                                    readonly description: "The mimeType of the part";
                                                };
                                                readonly filename: {
                                                    readonly type: "string";
                                                    readonly description: "The filename of the part";
                                                };
                                                readonly headers: {
                                                    readonly type: "array";
                                                    readonly description: "The headers of the part";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly name: {
                                                                readonly type: "string";
                                                            };
                                                            readonly value: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                };
                                                readonly body: {
                                                    readonly type: "object";
                                                    readonly description: "The body of the part";
                                                    readonly properties: {
                                                        readonly size: {
                                                            readonly type: "number";
                                                        };
                                                        readonly data: {
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly sizeEstimate: {
                    readonly type: "number";
                    readonly description: "The sizeEstimate of the message";
                };
                readonly raw: {
                    readonly type: "string";
                    readonly description: "The raw message";
                };
            };
        };
    };
};
export declare const GoogleParsedDraft: {
    readonly title: "GoogleParsedDraft";
    readonly description: "Your google parsed draft";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the draft";
        };
        readonly messageId: {
            readonly type: "string";
            readonly description: "The id of the draft";
        };
        readonly threadId: {
            readonly type: "string";
            readonly description: "The threadId of the draft";
        };
        readonly labelIds: {
            readonly type: "array";
            readonly description: "The labelIds of the draft";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly headers: {
            readonly type: "object";
            readonly description: "The headers of the draft";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly description: "The date of the draft";
                };
                readonly subject: {
                    readonly type: "string";
                    readonly description: "The subject of the draft";
                };
                readonly from: {
                    readonly type: "object";
                    readonly description: "The writer of the draft";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the writer";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "The email of the writer";
                        };
                    };
                };
                readonly to: {
                    readonly type: "array";
                    readonly description: "The receivers of the draft";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A recipients of the draft";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the recipient";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the recipient";
                            };
                        };
                    };
                };
                readonly cc: {
                    readonly type: "array";
                    readonly description: "The ccs of the draft";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A cc of the draft";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the cc";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the cc";
                            };
                        };
                    };
                };
                readonly bcc: {
                    readonly type: "array";
                    readonly description: "The bccs of the draft";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A bcc of the draft";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the bcc";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the bcc";
                            };
                        };
                    };
                };
            };
        };
        readonly body: {
            readonly type: "string";
            readonly description: "The body of the draft";
        };
        readonly attachments: {
            readonly type: "array";
            readonly description: "The attachments of the draft";
            readonly items: {
                readonly type: "object";
                readonly description: "An attachment of the draft";
                readonly properties: {
                    readonly attachmentId: {
                        readonly type: "string";
                        readonly description: "The attachmentId of the attachment";
                    };
                    readonly mimeType: {
                        readonly type: "string";
                        readonly description: "The mimeType of the attachment";
                    };
                    readonly filename: {
                        readonly type: "string";
                        readonly description: "The filename of the attachment";
                    };
                    readonly contentType: {
                        readonly type: "string";
                        readonly description: "The contentType of the attachment";
                    };
                    readonly contentDisposition: {
                        readonly type: "string";
                        readonly description: "The contentDisposition of the attachment";
                    };
                    readonly contentTransferEncoding: {
                        readonly type: "string";
                        readonly description: "The contentTransferEncoding of the attachment";
                    };
                    readonly size: {
                        readonly type: "number";
                        readonly description: "The size of the attachment";
                    };
                };
            };
        };
    };
};
export declare const GoogleLabels: {
    readonly title: "GoogleLabels";
    readonly description: "Your google labels";
    readonly type: "object";
    readonly properties: {
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The result size estimate for your labels";
        };
        readonly labels: {
            readonly type: "array";
            readonly description: "A list of your google labels";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the label";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the label";
                    };
                    readonly messageListVisibility: {
                        readonly type: "string";
                        readonly description: "The messageListVisibility of the label";
                    };
                    readonly labelListVisibility: {
                        readonly type: "string";
                        readonly description: "The labelListVisibility of the label";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the label";
                    };
                };
            };
        };
    };
};
export declare const GoogleLabelInput: {
    readonly title: "GoogleLabelInput";
    readonly description: "The input for your google label";
    readonly type: "object";
    readonly properties: {
        readonly labelId: {
            readonly type: "string";
            readonly description: "The id of the label";
        };
    };
    readonly required: readonly ["labelId"];
};
export declare const GoogleLabel: {
    readonly title: "GoogleLabel";
    readonly description: "Your google label";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the label";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the label";
        };
        readonly messageListVisibility: {
            readonly type: "string";
            readonly description: "The messageListVisibility of the label";
        };
        readonly labelListVisibility: {
            readonly type: "string";
            readonly description: "The labelListVisibility of the label";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of the label";
        };
        readonly messagesTotal: {
            readonly type: "number";
            readonly description: "The total messages for the label";
        };
        readonly messagesUnread: {
            readonly type: "number";
            readonly description: "The total unread messages for the label";
        };
        readonly threadsTotal: {
            readonly type: "number";
            readonly description: "The total threads for the label";
        };
        readonly threadsUnread: {
            readonly type: "number";
            readonly description: "The total unread threads for the label";
        };
        readonly color: {
            readonly type: "object";
            readonly description: "The color of the label";
            readonly properties: {
                readonly textColor: {
                    readonly type: "string";
                };
                readonly backgroundColor: {
                    readonly type: "string";
                };
            };
        };
    };
};
export declare const GoogleMessagesInput: {
    readonly title: "GoogleMessagesInput";
    readonly description: "The input for your google messages";
    readonly type: "object";
    readonly properties: {
        readonly labelIds: {
            readonly type: "string";
            readonly description: "The labelIds of the messages";
        };
        readonly pageToken: {
            readonly type: "string";
            readonly description: "The pageToken of the messages";
        };
        readonly q: {
            readonly type: "string";
            readonly description: "The query of the messages";
        };
    };
};
export declare const GoogleMessages: {
    readonly title: "GoogleMessages";
    readonly description: "Your google messages";
    readonly type: "object";
    readonly properties: {
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The result size estimate for your messages";
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The next page token";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "A list of your google messages";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the message";
                    };
                    readonly threadId: {
                        readonly type: "string";
                        readonly description: "The threadId of the message";
                    };
                };
            };
        };
    };
};
export declare const GoogleParsedMessages: {
    readonly title: "GoogleParsedMessages";
    readonly description: "Your google parsed messages";
    readonly type: "object";
    readonly properties: {
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The result size estimate for your messages";
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The next page token";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "A list of your google messages";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the message";
                    };
                    readonly threadId: {
                        readonly type: "string";
                        readonly description: "The threadId of the message";
                    };
                    readonly labelIds: {
                        readonly type: "array";
                        readonly description: "The labelIds of the message";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly headers: {
                        readonly type: "object";
                        readonly description: "The headers of the message";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "The date of the message";
                            };
                            readonly subject: {
                                readonly type: "string";
                                readonly description: "The subject of the message";
                            };
                            readonly from: {
                                readonly type: "object";
                                readonly description: "The writer of the message";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "The name of the writer";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "The email of the writer";
                                    };
                                };
                            };
                            readonly to: {
                                readonly type: "array";
                                readonly description: "The receivers of the message";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A recipients of the message";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the recipient";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the recipient";
                                        };
                                    };
                                };
                            };
                            readonly cc: {
                                readonly type: "array";
                                readonly description: "The ccs of the message";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A cc of the message";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the cc";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the cc";
                                        };
                                    };
                                };
                            };
                            readonly bcc: {
                                readonly type: "array";
                                readonly description: "The bccs of the message";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A bcc of the message";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the bcc";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the bcc";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly body: {
                        readonly type: "string";
                        readonly description: "The body of the message";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment of the message";
                            readonly properties: {
                                readonly attachmentId: {
                                    readonly type: "string";
                                    readonly description: "The attachmentId of the attachment";
                                };
                                readonly mimeType: {
                                    readonly type: "string";
                                    readonly description: "The mimeType of the attachment";
                                };
                                readonly filename: {
                                    readonly type: "string";
                                    readonly description: "The filename of the attachment";
                                };
                                readonly contentType: {
                                    readonly type: "string";
                                    readonly description: "The contentType of the attachment";
                                };
                                readonly contentDisposition: {
                                    readonly type: "string";
                                    readonly description: "The contentDisposition of the attachment";
                                };
                                readonly contentTransferEncoding: {
                                    readonly type: "string";
                                    readonly description: "The contentTransferEncoding of the attachment";
                                };
                                readonly size: {
                                    readonly type: "number";
                                    readonly description: "The size of the attachment";
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const GoogleMessageInput: {
    readonly title: "GoogleMessageInput";
    readonly description: "The input for your google message";
    readonly type: "object";
    readonly properties: {
        readonly messageId: {
            readonly type: "string";
            readonly description: "The id of the message";
        };
    };
    readonly required: readonly ["messageId"];
};
export declare const GoogleMessage: {
    readonly title: "GoogleMessage";
    readonly description: "Your google message";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the message";
        };
        readonly threadId: {
            readonly type: "string";
            readonly description: "The threadId of the message";
        };
        readonly labelIds: {
            readonly type: "array";
            readonly description: "The labelIds of the message";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly snippet: {
            readonly type: "string";
            readonly description: "The snippet of the message";
        };
        readonly historyId: {
            readonly type: "string";
            readonly description: "The historyId of the message";
        };
        readonly internalDate: {
            readonly type: "string";
            readonly description: "The internalDate of the message";
        };
        readonly payload: {
            readonly type: "object";
            readonly description: "The payload of the message";
            readonly properties: {
                readonly partId: {
                    readonly type: "string";
                    readonly description: "The partId of the payload";
                };
                readonly mimeType: {
                    readonly type: "string";
                    readonly description: "The mimeType of the payload";
                };
                readonly filename: {
                    readonly type: "string";
                    readonly description: "The filename of the payload";
                };
                readonly headers: {
                    readonly type: "array";
                    readonly description: "The headers of the payload";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly body: {
                    readonly type: "object";
                    readonly description: "The body of the payload";
                    readonly properties: {
                        readonly size: {
                            readonly type: "number";
                        };
                        readonly data: {
                            readonly type: "string";
                        };
                        readonly attachmentId: {
                            readonly type: "string";
                        };
                    };
                };
                readonly parts: {
                    readonly type: "array";
                    readonly description: "The parts of the payload";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly partId: {
                                readonly type: "string";
                                readonly description: "The partId of the part";
                            };
                            readonly mimeType: {
                                readonly type: "string";
                                readonly description: "The mimeType of the part";
                            };
                            readonly filename: {
                                readonly type: "string";
                                readonly description: "The filename of the part";
                            };
                            readonly headers: {
                                readonly type: "array";
                                readonly description: "The headers of the part";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly body: {
                                readonly type: "object";
                                readonly description: "The body of the part";
                                readonly properties: {
                                    readonly size: {
                                        readonly type: "number";
                                    };
                                    readonly data: {
                                        readonly type: "string";
                                    };
                                    readonly attachmentId: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly sizeEstimate: {
            readonly type: "number";
            readonly description: "The sizeEstimate of the message";
        };
    };
};
export declare const GoogleParsedMessage: {
    readonly title: "GoogleParsedMessage";
    readonly description: "Your google parsed message";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the message";
        };
        readonly threadId: {
            readonly type: "string";
            readonly description: "The threadId of the message";
        };
        readonly labelIds: {
            readonly type: "array";
            readonly description: "The labelIds of the message";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly headers: {
            readonly type: "object";
            readonly description: "The headers of the message";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly description: "The date of the message";
                };
                readonly subject: {
                    readonly type: "string";
                    readonly description: "The subject of the message";
                };
                readonly from: {
                    readonly type: "object";
                    readonly description: "The writer of the message";
                    readonly properties: {
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the writer";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "The email of the writer";
                        };
                    };
                };
                readonly to: {
                    readonly type: "array";
                    readonly description: "The receivers of the message";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A recipients of the message";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the recipient";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the recipient";
                            };
                        };
                    };
                };
                readonly cc: {
                    readonly type: "array";
                    readonly description: "The ccs of the message";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A cc of the message";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the cc";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the cc";
                            };
                        };
                    };
                };
                readonly bcc: {
                    readonly type: "array";
                    readonly description: "The bccs of the message";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A bcc of the message";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the bcc";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the bcc";
                            };
                        };
                    };
                };
            };
        };
        readonly body: {
            readonly type: "string";
            readonly description: "The body of the message";
        };
        readonly attachments: {
            readonly type: "array";
            readonly description: "The attachments of the message";
            readonly items: {
                readonly type: "object";
                readonly description: "An attachment of the message";
                readonly properties: {
                    readonly attachmentId: {
                        readonly type: "string";
                        readonly description: "The attachmentId of the attachment";
                    };
                    readonly mimeType: {
                        readonly type: "string";
                        readonly description: "The mimeType of the attachment";
                    };
                    readonly filename: {
                        readonly type: "string";
                        readonly description: "The filename of the attachment";
                    };
                    readonly contentType: {
                        readonly type: "string";
                        readonly description: "The contentType of the attachment";
                    };
                    readonly contentDisposition: {
                        readonly type: "string";
                        readonly description: "The contentDisposition of the attachment";
                    };
                    readonly contentTransferEncoding: {
                        readonly type: "string";
                        readonly description: "The contentTransferEncoding of the attachment";
                    };
                    readonly size: {
                        readonly type: "number";
                        readonly description: "The size of the attachment";
                    };
                };
            };
        };
    };
};
export declare const GoogleThreadsInput: {
    readonly title: "GoogleThreadsInput";
    readonly description: "The input for your google threads";
    readonly type: "object";
    readonly properties: {
        readonly labelIds: {
            readonly type: "string";
            readonly description: "The labelIds of the threads";
        };
        readonly pageToken: {
            readonly type: "string";
            readonly description: "The pageToken of the threads";
        };
        readonly q: {
            readonly type: "string";
            readonly description: "The query of the threads";
        };
    };
};
export declare const GoogleThreads: {
    readonly title: "GoogleThreads";
    readonly description: "Your google threads";
    readonly type: "object";
    readonly properties: {
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The result size estimate for your threads";
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The next page token";
        };
        readonly threads: {
            readonly type: "array";
            readonly description: "A list of your google threads";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the thread";
                    };
                    readonly snippet: {
                        readonly type: "string";
                        readonly description: "The snippet of the thread";
                    };
                    readonly historyId: {
                        readonly type: "string";
                        readonly description: "The historyId of the thread";
                    };
                };
            };
        };
    };
};
export declare const GoogleParsedThreads: {
    readonly title: "GoogleParsedThreads";
    readonly description: "Your google parsed threads";
    readonly type: "object";
    readonly properties: {
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The result size estimate for your threads";
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The next page token";
        };
        readonly threads: {
            readonly type: "array";
            readonly description: "A list of your google threads";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the thread";
                    };
                    readonly messages: {
                        readonly type: "array";
                        readonly description: "A list of the messages in the thread";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A message in the thread";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "The id of the message";
                                };
                                readonly threadId: {
                                    readonly type: "string";
                                    readonly description: "The threadId of the message";
                                };
                                readonly labelIds: {
                                    readonly type: "array";
                                    readonly description: "The labelIds of the message";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                                readonly headers: {
                                    readonly type: "object";
                                    readonly description: "The headers of the message";
                                    readonly properties: {
                                        readonly date: {
                                            readonly type: "string";
                                            readonly description: "The date of the message";
                                        };
                                        readonly subject: {
                                            readonly type: "string";
                                            readonly description: "The subject of the message";
                                        };
                                        readonly from: {
                                            readonly type: "object";
                                            readonly description: "The writer of the message";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "The name of the writer";
                                                };
                                                readonly email: {
                                                    readonly type: "string";
                                                    readonly description: "The email of the writer";
                                                };
                                            };
                                        };
                                        readonly to: {
                                            readonly type: "array";
                                            readonly description: "The receivers of the message";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly description: "A recipients of the message";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly description: "The name of the recipient";
                                                    };
                                                    readonly email: {
                                                        readonly type: "string";
                                                        readonly description: "The email of the recipient";
                                                    };
                                                };
                                            };
                                        };
                                        readonly cc: {
                                            readonly type: "array";
                                            readonly description: "The ccs of the message";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly description: "A cc of the message";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly description: "The name of the cc";
                                                    };
                                                    readonly email: {
                                                        readonly type: "string";
                                                        readonly description: "The email of the cc";
                                                    };
                                                };
                                            };
                                        };
                                        readonly bcc: {
                                            readonly type: "array";
                                            readonly description: "The bccs of the message";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly description: "A bcc of the message";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly description: "The name of the bcc";
                                                    };
                                                    readonly email: {
                                                        readonly type: "string";
                                                        readonly description: "The email of the bcc";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly body: {
                                    readonly type: "string";
                                    readonly description: "The body of the message";
                                };
                                readonly attachments: {
                                    readonly type: "array";
                                    readonly description: "The attachments of the message";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly description: "An attachment of the message";
                                        readonly properties: {
                                            readonly attachmentId: {
                                                readonly type: "string";
                                                readonly description: "The attachmentId of the attachment";
                                            };
                                            readonly mimeType: {
                                                readonly type: "string";
                                                readonly description: "The mimeType of the attachment";
                                            };
                                            readonly filename: {
                                                readonly type: "string";
                                                readonly description: "The filename of the attachment";
                                            };
                                            readonly contentType: {
                                                readonly type: "string";
                                                readonly description: "The contentType of the attachment";
                                            };
                                            readonly contentDisposition: {
                                                readonly type: "string";
                                                readonly description: "The contentDisposition of the attachment";
                                            };
                                            readonly contentTransferEncoding: {
                                                readonly type: "string";
                                                readonly description: "The contentTransferEncoding of the attachment";
                                            };
                                            readonly size: {
                                                readonly type: "number";
                                                readonly description: "The size of the attachment";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const GoogleThreadInput: {
    readonly title: "GoogleThreadInput";
    readonly description: "The input for your google thread";
    readonly type: "object";
    readonly properties: {
        readonly threadId: {
            readonly type: "string";
            readonly description: "The id of the thread";
        };
    };
    readonly required: readonly ["threadId"];
};
export declare const GoogleThread: {
    readonly title: "GoogleThread";
    readonly description: "Your google thread";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the thread";
        };
        readonly snippet: {
            readonly type: "string";
            readonly description: "The snippet of the thread";
        };
        readonly historyId: {
            readonly type: "string";
            readonly description: "The historyId of the thread";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "A list of the messages in the thread";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the message";
                    };
                    readonly threadId: {
                        readonly type: "string";
                        readonly description: "The threadId of the message";
                    };
                    readonly labelIds: {
                        readonly type: "array";
                        readonly description: "The labelIds of the message";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly snippet: {
                        readonly type: "string";
                        readonly description: "The snippet of the message";
                    };
                    readonly historyId: {
                        readonly type: "string";
                        readonly description: "The historyId of the message";
                    };
                    readonly internalDate: {
                        readonly type: "string";
                        readonly description: "The internalDate of the message";
                    };
                    readonly payload: {
                        readonly type: "object";
                        readonly description: "The payload of the message";
                        readonly properties: {
                            readonly partId: {
                                readonly type: "string";
                                readonly description: "The partId of the payload";
                            };
                            readonly mimeType: {
                                readonly type: "string";
                                readonly description: "The mimeType of the payload";
                            };
                            readonly filename: {
                                readonly type: "string";
                                readonly description: "The filename of the payload";
                            };
                            readonly headers: {
                                readonly type: "array";
                                readonly description: "The headers of the payload";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                        };
                                        readonly value: {
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly body: {
                                readonly type: "object";
                                readonly description: "The body of the payload";
                                readonly properties: {
                                    readonly size: {
                                        readonly type: "number";
                                    };
                                    readonly data: {
                                        readonly type: "string";
                                    };
                                    readonly attachmentId: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly parts: {
                                readonly type: "array";
                                readonly description: "The parts of the payload";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly partId: {
                                            readonly type: "string";
                                            readonly description: "The partId of the part";
                                        };
                                        readonly mimeType: {
                                            readonly type: "string";
                                            readonly description: "The mimeType of the part";
                                        };
                                        readonly filename: {
                                            readonly type: "string";
                                            readonly description: "The filename of the part";
                                        };
                                        readonly headers: {
                                            readonly type: "array";
                                            readonly description: "The headers of the part";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                    };
                                                    readonly value: {
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly body: {
                                            readonly type: "object";
                                            readonly description: "The body of the part";
                                            readonly properties: {
                                                readonly size: {
                                                    readonly type: "number";
                                                };
                                                readonly data: {
                                                    readonly type: "string";
                                                };
                                                readonly attachmentId: {
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly sizeEstimate: {
                        readonly type: "number";
                        readonly description: "The sizeEstimate of the message";
                    };
                };
            };
        };
    };
};
export declare const GoogleParsedThread: {
    readonly title: "GoogleParsedThread";
    readonly description: "Your google thread";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the thread";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "A list of the messages in the thread";
            readonly items: {
                readonly type: "object";
                readonly description: "A message in the thread";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the message";
                    };
                    readonly threadId: {
                        readonly type: "string";
                        readonly description: "The threadId of the message";
                    };
                    readonly labelIds: {
                        readonly type: "array";
                        readonly description: "The labelIds of the message";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly headers: {
                        readonly type: "object";
                        readonly description: "The headers of the message";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "The date of the message";
                            };
                            readonly subject: {
                                readonly type: "string";
                                readonly description: "The subject of the message";
                            };
                            readonly from: {
                                readonly type: "object";
                                readonly description: "The writer of the message";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "The name of the writer";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly description: "The email of the writer";
                                    };
                                };
                            };
                            readonly to: {
                                readonly type: "array";
                                readonly description: "The receivers of the message";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A recipients of the message";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the recipient";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the recipient";
                                        };
                                    };
                                };
                            };
                            readonly cc: {
                                readonly type: "array";
                                readonly description: "The ccs of the message";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A cc of the message";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the cc";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the cc";
                                        };
                                    };
                                };
                            };
                            readonly bcc: {
                                readonly type: "array";
                                readonly description: "The bccs of the message";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A bcc of the message";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the bcc";
                                        };
                                        readonly email: {
                                            readonly type: "string";
                                            readonly description: "The email of the bcc";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly body: {
                        readonly type: "string";
                        readonly description: "The body of the message";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment of the message";
                            readonly properties: {
                                readonly attachmentId: {
                                    readonly type: "string";
                                    readonly description: "The attachmentId of the attachment";
                                };
                                readonly mimeType: {
                                    readonly type: "string";
                                    readonly description: "The mimeType of the attachment";
                                };
                                readonly filename: {
                                    readonly type: "string";
                                    readonly description: "The filename of the attachment";
                                };
                                readonly contentType: {
                                    readonly type: "string";
                                    readonly description: "The contentType of the attachment";
                                };
                                readonly contentDisposition: {
                                    readonly type: "string";
                                    readonly description: "The contentDisposition of the attachment";
                                };
                                readonly contentTransferEncoding: {
                                    readonly type: "string";
                                    readonly description: "The contentTransferEncoding of the attachment";
                                };
                                readonly size: {
                                    readonly type: "number";
                                    readonly description: "The size of the attachment";
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const GoogleCalendarsInput: {
    readonly title: "GoogleCalendarsInput";
    readonly description: "The input for your google calendars";
    readonly type: "object";
    readonly properties: {
        readonly pageToken: {
            readonly type: "string";
            readonly description: "The pageToken of the calendars";
        };
        readonly showDeleted: {
            readonly type: "boolean";
            readonly description: "Whether to show deleted calendars";
        };
        readonly showHidden: {
            readonly type: "boolean";
            readonly description: "Whether to show hidden calendars";
        };
        readonly syncToken: {
            readonly type: "string";
            readonly description: "The syncToken of the calendars";
        };
    };
};
export declare const GoogleCalendars: {
    readonly title: "GoogleCalendars";
    readonly description: "Your google calendars";
    readonly type: "object";
    readonly properties: {
        readonly kind: {
            readonly type: "string";
            readonly description: "The kind of the calendars";
        };
        readonly etag: {
            readonly type: "string";
            readonly description: "The etag of the calendars";
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The next page token";
        };
        readonly nextSyncToken: {
            readonly type: "string";
            readonly description: "The next sync token";
        };
        readonly calendars: {
            readonly type: "array";
            readonly description: "A list of your google calendars";
            readonly items: {
                readonly type: "object";
                readonly description: "A google calendar";
                readonly properties: {
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "The kind of the calendar";
                    };
                    readonly etag: {
                        readonly type: "string";
                        readonly description: "The etag of the calendar";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the calendar";
                    };
                    readonly summary: {
                        readonly type: "string";
                        readonly description: "The summary of the calendar";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "The description of the calendar";
                    };
                    readonly location: {
                        readonly type: "string";
                        readonly description: "The location of the calendar";
                    };
                    readonly timeZone: {
                        readonly type: "string";
                        readonly description: "The timeZone of the calendar";
                    };
                    readonly summaryOverride: {
                        readonly type: "string";
                        readonly description: "The summaryOverride of the calendar";
                    };
                    readonly colorId: {
                        readonly type: "string";
                        readonly description: "The colorId of the calendar";
                    };
                    readonly backgroundColor: {
                        readonly type: "string";
                        readonly description: "The backgroundColor of the calendar";
                    };
                    readonly foregroundColor: {
                        readonly type: "string";
                        readonly description: "The foregroundColor of the calendar";
                    };
                    readonly hidden: {
                        readonly type: "boolean";
                        readonly description: "Whether the calendar is hidden";
                    };
                    readonly selected: {
                        readonly type: "boolean";
                        readonly description: "Whether the calendar is selected";
                    };
                    readonly accessRole: {
                        readonly type: "string";
                        readonly description: "The accessRole of the calendar";
                    };
                    readonly defaultReminders: {
                        readonly type: "object";
                        readonly description: "The defaultReminders of the calendar";
                        readonly properties: {
                            readonly method: {
                                readonly type: "string";
                                readonly description: "The method of the defaultReminder";
                            };
                            readonly minutes: {
                                readonly type: "number";
                                readonly description: "The minutes of the defaultReminder";
                            };
                        };
                    };
                    readonly notificationSettings: {
                        readonly type: "object";
                        readonly description: "The notificationSettings of the calendar";
                        readonly properties: {
                            readonly notifications: {
                                readonly type: "array";
                                readonly description: "The notifications of the notificationSettings";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "The type of the notification";
                                        };
                                        readonly method: {
                                            readonly type: "string";
                                            readonly description: "The method of the notification";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly primary: {
                        readonly type: "boolean";
                        readonly description: "Whether the calendar is primary";
                    };
                    readonly deleted: {
                        readonly type: "boolean";
                        readonly description: "Whether the calendar is deleted";
                    };
                    readonly conferenceProperties: {
                        readonly type: "object";
                        readonly description: "The conferenceProperties of the calendar";
                        readonly properties: {
                            readonly allowedConferenceSolutionTypes: {
                                readonly type: "array";
                                readonly description: "The allowedConferenceSolutionTypes of the conferenceProperties";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const GoogleCalendarInput: {
    readonly title: "GoogleCalendarInput";
    readonly description: "The input for your google calendar";
    readonly type: "object";
    readonly properties: {
        readonly calendarId: {
            readonly type: "string";
            readonly description: "The id of the calendar";
        };
    };
    readonly required: readonly ["calendarId"];
};
export declare const GoogleCalendar: {
    readonly title: "GoogleCalendar";
    readonly description: "Your google calendar";
    readonly type: "object";
    readonly properties: {
        readonly kind: {
            readonly type: "string";
            readonly description: "The kind of the calendar";
        };
        readonly etag: {
            readonly type: "string";
            readonly description: "The etag of the calendar";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the calendar";
        };
        readonly summary: {
            readonly type: "string";
            readonly description: "The summary of the calendar";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "The description of the calendar";
        };
        readonly location: {
            readonly type: "string";
            readonly description: "The location of the calendar";
        };
        readonly timeZone: {
            readonly type: "string";
            readonly description: "The timeZone of the calendar";
        };
        readonly conferenceProperties: {
            readonly type: "object";
            readonly description: "The conferenceProperties of the calendar";
            readonly properties: {
                readonly allowedConferenceSolutionTypes: {
                    readonly type: "array";
                    readonly description: "The allowedConferenceSolutionTypes of the conferenceProperties";
                    readonly items: {
                        readonly type: "string";
                    };
                };
            };
        };
    };
};
export declare const GoogleEventsInput: {
    readonly title: "GoogleEventsInput";
    readonly description: "The input for your google calendar's events";
    readonly type: "object";
    readonly properties: {
        readonly calendarId: {
            readonly type: "string";
            readonly description: "The id of the calendar";
        };
        readonly maxAttendees: {
            readonly type: "number";
            readonly description: "The max attendees";
        };
        readonly orderBy: {
            readonly type: "string";
            readonly description: "The order by";
        };
        readonly pageToken: {
            readonly type: "string";
            readonly description: "The page token";
        };
        readonly q: {
            readonly type: "string";
            readonly description: "The query";
        };
        readonly showDeleted: {
            readonly type: "boolean";
            readonly description: "Whether to show deleted";
        };
        readonly singleEvents: {
            readonly type: "boolean";
            readonly description: "Whether to show single events";
        };
        readonly timeMax: {
            readonly type: "string";
            readonly description: "The time max";
        };
        readonly timeMin: {
            readonly type: "string";
            readonly description: "The time min";
        };
        readonly timeZone: {
            readonly type: "string";
            readonly description: "The time zone";
        };
        readonly updatedMin: {
            readonly type: "string";
            readonly description: "The updated min";
        };
        readonly syncToken: {
            readonly type: "string";
            readonly description: "The sync token";
        };
        readonly iCalUID: {
            readonly type: "string";
            readonly description: "The iCal UID";
        };
    };
};
export declare const GoogleEvents: {
    readonly title: "GoogleEvents";
    readonly description: "Your google calendar's events";
    readonly type: "object";
    readonly properties: {
        readonly kind: {
            readonly type: "string";
            readonly description: "The kind of the events";
        };
        readonly etag: {
            readonly type: "string";
            readonly description: "The etag of the events";
        };
        readonly summary: {
            readonly type: "string";
            readonly description: "The summary of the events";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "The description of the events";
        };
        readonly updated: {
            readonly type: "string";
            readonly description: "The updated date of the events";
        };
        readonly timeZone: {
            readonly type: "string";
            readonly description: "The timeZone of the events";
        };
        readonly accessRole: {
            readonly type: "string";
            readonly description: "The accessRole of the events";
        };
        readonly defaultReminders: {
            readonly type: "array";
            readonly description: "The defaultReminders of the events";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly method: {
                        readonly type: "string";
                        readonly description: "The method of the defaultReminder";
                    };
                    readonly minutes: {
                        readonly type: "number";
                        readonly description: "The minutes of the defaultReminder";
                    };
                };
            };
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The nextPageToken of the events";
        };
        readonly nextSyncToken: {
            readonly type: "string";
            readonly description: "The nextSyncToken of the events";
        };
        readonly resultSizeEstimate: {
            readonly type: "number";
            readonly description: "The resultSizeEstimate of the events";
        };
        readonly events: {
            readonly type: "array";
            readonly description: "The list of events";
            readonly items: {
                readonly type: "object";
                readonly description: "An event";
                readonly properties: {
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "The kind of the event";
                    };
                    readonly etag: {
                        readonly type: "string";
                        readonly description: "The etag of the event";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the event";
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly description: "The status of the event";
                    };
                    readonly htmlLink: {
                        readonly type: "string";
                        readonly description: "The htmlLink of the event";
                    };
                    readonly created: {
                        readonly type: "string";
                        readonly description: "The created date of the event";
                    };
                    readonly updated: {
                        readonly type: "string";
                        readonly description: "The updated date of the event";
                    };
                    readonly summary: {
                        readonly type: "string";
                        readonly description: "The summary of the event";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "The description of the event";
                    };
                    readonly location: {
                        readonly type: "string";
                        readonly description: "The location of the event";
                    };
                    readonly colorId: {
                        readonly type: "string";
                        readonly description: "The colorId of the event";
                    };
                    readonly creator: {
                        readonly type: "object";
                        readonly description: "The creator of the event";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The id of the creator";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the creator";
                            };
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "The displayName of the creator";
                            };
                            readonly self: {
                                readonly type: "boolean";
                                readonly description: "Whether the creator is self";
                            };
                        };
                    };
                    readonly organizer: {
                        readonly type: "object";
                        readonly description: "The organizer of the event";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The id of the organizer";
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email of the organizer";
                            };
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "The displayName of the organizer";
                            };
                            readonly self: {
                                readonly type: "boolean";
                                readonly description: "Whether the organizer is self";
                            };
                        };
                    };
                    readonly start: {
                        readonly type: "object";
                        readonly description: "The start of the event";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "The date of the start";
                            };
                            readonly dateTime: {
                                readonly type: "string";
                                readonly description: "The dateTime of the start";
                            };
                            readonly timeZone: {
                                readonly type: "string";
                                readonly description: "The timeZone of the start";
                            };
                        };
                    };
                    readonly end: {
                        readonly type: "object";
                        readonly description: "The end of the event";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "The date of the end";
                            };
                            readonly dateTime: {
                                readonly type: "string";
                                readonly description: "The dateTime of the end";
                            };
                            readonly timeZone: {
                                readonly type: "string";
                                readonly description: "The timeZone of the end";
                            };
                        };
                    };
                    readonly endTimeUnspecified: {
                        readonly type: "boolean";
                        readonly description: "Whether the endTime is unspecified";
                    };
                    readonly recurrence: {
                        readonly type: "array";
                        readonly description: "The recurrence of the event";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly recurringEventId: {
                        readonly type: "string";
                        readonly description: "The recurringEventId of the event";
                    };
                    readonly originalStartTime: {
                        readonly type: "object";
                        readonly description: "The originalStartTime of the event";
                        readonly properties: {
                            readonly date: {
                                readonly type: "string";
                                readonly description: "The date of the originalStartTime";
                            };
                            readonly dateTime: {
                                readonly type: "string";
                                readonly description: "The dateTime of the originalStartTime";
                            };
                            readonly timeZone: {
                                readonly type: "string";
                                readonly description: "The timeZone of the originalStartTime";
                            };
                        };
                    };
                    readonly transparency: {
                        readonly type: "string";
                        readonly description: "The transparency of the event";
                    };
                    readonly visibility: {
                        readonly type: "string";
                        readonly description: "The visibility of the event";
                    };
                    readonly iCalUID: {
                        readonly type: "string";
                        readonly description: "The iCalUID of the event";
                    };
                    readonly sequence: {
                        readonly type: "number";
                        readonly description: "The sequence of the event";
                    };
                    readonly attendees: {
                        readonly type: "array";
                        readonly description: "The attendees of the event";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attendee";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "The id of the attendee";
                                };
                                readonly email: {
                                    readonly type: "string";
                                    readonly description: "The email of the attendee";
                                };
                                readonly displayName: {
                                    readonly type: "string";
                                    readonly description: "The displayName of the attendee";
                                };
                                readonly organizer: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the attendee is the organizer";
                                };
                                readonly self: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the attendee is self";
                                };
                                readonly resource: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the attendee is a resource";
                                };
                                readonly optional: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the attendee is optional";
                                };
                                readonly responseStatus: {
                                    readonly type: "string";
                                    readonly description: "The responseStatus of the attendee";
                                };
                                readonly comment: {
                                    readonly type: "string";
                                    readonly description: "The comment of the attendee";
                                };
                                readonly additionalGuests: {
                                    readonly type: "number";
                                    readonly description: "The additionalGuests of the attendee";
                                };
                            };
                        };
                    };
                    readonly attendeesOmitted: {
                        readonly type: "boolean";
                        readonly description: "Whether attendees are omitted";
                    };
                    readonly extendedProperties: {
                        readonly type: "object";
                        readonly description: "The extendedProperties of the event";
                        readonly properties: {
                            readonly private: {
                                readonly type: "object";
                                readonly description: "The private extendedProperties of the event";
                            };
                            readonly shared: {
                                readonly type: "object";
                                readonly description: "The shared extendedProperties of the event";
                            };
                        };
                    };
                    readonly hangoutLink: {
                        readonly type: "string";
                        readonly description: "The hangoutLink of the event";
                    };
                    readonly conferenceData: {
                        readonly type: "object";
                        readonly description: "The conferenceData of the event";
                        readonly properties: {
                            readonly createRequest: {
                                readonly type: "object";
                                readonly description: "The createRequest of the conferenceData";
                                readonly properties: {
                                    readonly requestId: {
                                        readonly type: "string";
                                        readonly description: "The requestId of the createRequest";
                                    };
                                    readonly conferenceSolutionKey: {
                                        readonly type: "object";
                                        readonly description: "The conferenceSolutionKey of the createRequest";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly description: "The type of the conferenceSolutionKey";
                                            };
                                        };
                                    };
                                    readonly status: {
                                        readonly type: "object";
                                        readonly description: "The status of the createRequest";
                                        readonly properties: {
                                            readonly statusCode: {
                                                readonly type: "string";
                                                readonly description: "The statusCode of the status";
                                            };
                                        };
                                    };
                                };
                            };
                            readonly entryPoints: {
                                readonly type: "array";
                                readonly description: "The entryPoints of the conferenceData";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "An entryPoint";
                                    readonly properties: {
                                        readonly entryPointType: {
                                            readonly type: "string";
                                            readonly description: "The entryPointType of the entryPoint";
                                        };
                                        readonly uri: {
                                            readonly type: "string";
                                            readonly description: "The uri of the entryPoint";
                                        };
                                        readonly label: {
                                            readonly type: "string";
                                            readonly description: "The label of the entryPoint";
                                        };
                                        readonly pin: {
                                            readonly type: "string";
                                            readonly description: "The pin of the entryPoint";
                                        };
                                        readonly accessCode: {
                                            readonly type: "string";
                                            readonly description: "The accessCode of the entryPoint";
                                        };
                                        readonly meetingCode: {
                                            readonly type: "string";
                                            readonly description: "The meetingCode of the entryPoint";
                                        };
                                        readonly passcode: {
                                            readonly type: "string";
                                            readonly description: "The passcode of the entryPoint";
                                        };
                                        readonly password: {
                                            readonly type: "string";
                                            readonly description: "The password of the entryPoint";
                                        };
                                    };
                                };
                            };
                            readonly conferenceSolution: {
                                readonly type: "object";
                                readonly description: "The conferenceSolution of the conferenceData";
                                readonly properties: {
                                    readonly key: {
                                        readonly type: "object";
                                        readonly description: "The key of the conferenceSolution";
                                        readonly properties: {
                                            readonly type: {
                                                readonly type: "string";
                                                readonly description: "The type of the key";
                                            };
                                        };
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "The name of the conferenceSolution";
                                    };
                                    readonly iconUri: {
                                        readonly type: "string";
                                        readonly description: "The iconUri of the conferenceSolution";
                                    };
                                };
                            };
                            readonly conferenceId: {
                                readonly type: "string";
                                readonly description: "The conferenceId of the conferenceData";
                            };
                            readonly signature: {
                                readonly type: "string";
                                readonly description: "The signature of the conferenceData";
                            };
                            readonly notes: {
                                readonly type: "string";
                                readonly description: "The notes of the conferenceData";
                            };
                        };
                    };
                    readonly gadget: {
                        readonly type: "object";
                        readonly description: "The gadget of the event";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the gadget";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "The title of the gadget";
                            };
                            readonly link: {
                                readonly type: "string";
                                readonly description: "The link of the gadget";
                            };
                            readonly iconLink: {
                                readonly type: "string";
                                readonly description: "The iconLink of the gadget";
                            };
                            readonly width: {
                                readonly type: "number";
                                readonly description: "The width of the gadget";
                            };
                            readonly height: {
                                readonly type: "number";
                                readonly description: "The height of the gadget";
                            };
                            readonly display: {
                                readonly type: "string";
                                readonly description: "The display of the gadget";
                            };
                            readonly preferences: {
                                readonly type: "object";
                                readonly description: "The preferences of the gadget";
                            };
                        };
                    };
                    readonly anyoneCanAddSelf: {
                        readonly type: "boolean";
                        readonly description: "Whether anyone can add self";
                    };
                    readonly guestsCanInviteOthers: {
                        readonly type: "boolean";
                        readonly description: "Whether guests can invite others";
                    };
                    readonly guestsCanModify: {
                        readonly type: "boolean";
                        readonly description: "Whether guests can modify";
                    };
                    readonly guestsCanSeeOtherGuests: {
                        readonly type: "boolean";
                        readonly description: "Whether guests can see other guests";
                    };
                    readonly privateCopy: {
                        readonly type: "boolean";
                        readonly description: "Whether the event is a private copy";
                    };
                    readonly locked: {
                        readonly type: "boolean";
                        readonly description: "Whether the event is locked";
                    };
                    readonly reminders: {
                        readonly type: "object";
                        readonly description: "The reminders of the event";
                        readonly properties: {
                            readonly useDefault: {
                                readonly type: "boolean";
                                readonly description: "Whether the reminders use default";
                            };
                            readonly overrides: {
                                readonly type: "array";
                                readonly description: "The overrides of the reminders";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A reminder override";
                                    readonly properties: {
                                        readonly method: {
                                            readonly type: "string";
                                            readonly description: "The method of the reminder override";
                                        };
                                        readonly minutes: {
                                            readonly type: "number";
                                            readonly description: "The minutes of the reminder override";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly source: {
                        readonly type: "object";
                        readonly description: "The source of the event";
                        readonly properties: {
                            readonly url: {
                                readonly type: "string";
                                readonly description: "The url of the source";
                            };
                            readonly title: {
                                readonly type: "string";
                                readonly description: "The title of the source";
                            };
                        };
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the event";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment";
                            readonly properties: {
                                readonly fileUrl: {
                                    readonly type: "string";
                                    readonly description: "The fileUrl of the attachment";
                                };
                                readonly title: {
                                    readonly type: "string";
                                    readonly description: "The title of the attachment";
                                };
                                readonly mimeType: {
                                    readonly type: "string";
                                    readonly description: "The mimeType of the attachment";
                                };
                                readonly iconLink: {
                                    readonly type: "string";
                                    readonly description: "The iconLink of the attachment";
                                };
                                readonly fileId: {
                                    readonly type: "string";
                                    readonly description: "The fileId of the attachment";
                                };
                            };
                        };
                    };
                    readonly eventType: {
                        readonly type: "string";
                        readonly description: "The eventType of the event";
                    };
                };
            };
        };
    };
};
export declare const GoogleEventInput: {
    readonly title: "GoogleEventInput";
    readonly description: "The input for your google calendar's event";
    readonly type: "object";
    readonly properties: {
        readonly calendarId: {
            readonly type: "string";
            readonly description: "The calendarId of the calendar which contains the event";
        };
        readonly eventId: {
            readonly type: "string";
            readonly description: "The id of the event";
        };
        readonly timeZone: {
            readonly type: "string";
            readonly description: "The timeZone of the event";
        };
    };
    readonly required: readonly ["calendarId", "eventId"];
};
export declare const GoogleEvent: {
    readonly title: "GoogleEvent";
    readonly description: "Your google calendar's event";
    readonly type: "object";
    readonly properties: {
        readonly kind: {
            readonly type: "string";
            readonly description: "The kind of the event";
        };
        readonly etag: {
            readonly type: "string";
            readonly description: "The etag of the event";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the event";
        };
        readonly status: {
            readonly type: "string";
            readonly description: "The status of the event";
        };
        readonly htmlLink: {
            readonly type: "string";
            readonly description: "The htmlLink of the event";
        };
        readonly created: {
            readonly type: "string";
            readonly description: "The created date of the event";
        };
        readonly updated: {
            readonly type: "string";
            readonly description: "The updated date of the event";
        };
        readonly summary: {
            readonly type: "string";
            readonly description: "The summary of the event";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "The description of the event";
        };
        readonly location: {
            readonly type: "string";
            readonly description: "The location of the event";
        };
        readonly colorId: {
            readonly type: "string";
            readonly description: "The colorId of the event";
        };
        readonly creator: {
            readonly type: "object";
            readonly description: "The creator of the event";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The id of the creator";
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email of the creator";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "The displayName of the creator";
                };
                readonly self: {
                    readonly type: "boolean";
                    readonly description: "Whether the creator is self";
                };
            };
        };
        readonly organizer: {
            readonly type: "object";
            readonly description: "The organizer of the event";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The id of the organizer";
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email of the organizer";
                };
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "The displayName of the organizer";
                };
                readonly self: {
                    readonly type: "boolean";
                    readonly description: "Whether the organizer is self";
                };
            };
        };
        readonly start: {
            readonly type: "object";
            readonly description: "The start of the event";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly description: "The date of the start";
                };
                readonly dateTime: {
                    readonly type: "string";
                    readonly description: "The dateTime of the start";
                };
                readonly timeZone: {
                    readonly type: "string";
                    readonly description: "The timeZone of the start";
                };
            };
        };
        readonly end: {
            readonly type: "object";
            readonly description: "The end of the event";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly description: "The date of the end";
                };
                readonly dateTime: {
                    readonly type: "string";
                    readonly description: "The dateTime of the end";
                };
                readonly timeZone: {
                    readonly type: "string";
                    readonly description: "The timeZone of the end";
                };
            };
        };
        readonly endTimeUnspecified: {
            readonly type: "boolean";
            readonly description: "Whether the endTime is unspecified";
        };
        readonly recurrence: {
            readonly type: "array";
            readonly description: "The recurrence of the event";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly recurringEventId: {
            readonly type: "string";
            readonly description: "The recurringEventId of the event";
        };
        readonly originalStartTime: {
            readonly type: "object";
            readonly description: "The originalStartTime of the event";
            readonly properties: {
                readonly date: {
                    readonly type: "string";
                    readonly description: "The date of the originalStartTime";
                };
                readonly dateTime: {
                    readonly type: "string";
                    readonly description: "The dateTime of the originalStartTime";
                };
                readonly timeZone: {
                    readonly type: "string";
                    readonly description: "The timeZone of the originalStartTime";
                };
            };
        };
        readonly transparency: {
            readonly type: "string";
            readonly description: "The transparency of the event";
        };
        readonly visibility: {
            readonly type: "string";
            readonly description: "The visibility of the event";
        };
        readonly iCalUID: {
            readonly type: "string";
            readonly description: "The iCalUID of the event";
        };
        readonly sequence: {
            readonly type: "number";
            readonly description: "The sequence of the event";
        };
        readonly attendees: {
            readonly type: "array";
            readonly description: "The attendees of the event";
            readonly items: {
                readonly type: "object";
                readonly description: "An attendee";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the attendee";
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly description: "The email of the attendee";
                    };
                    readonly displayName: {
                        readonly type: "string";
                        readonly description: "The displayName of the attendee";
                    };
                    readonly organizer: {
                        readonly type: "boolean";
                        readonly description: "Whether the attendee is the organizer";
                    };
                    readonly self: {
                        readonly type: "boolean";
                        readonly description: "Whether the attendee is self";
                    };
                    readonly resource: {
                        readonly type: "boolean";
                        readonly description: "Whether the attendee is a resource";
                    };
                    readonly optional: {
                        readonly type: "boolean";
                        readonly description: "Whether the attendee is optional";
                    };
                    readonly responseStatus: {
                        readonly type: "string";
                        readonly description: "The responseStatus of the attendee";
                    };
                    readonly comment: {
                        readonly type: "string";
                        readonly description: "The comment of the attendee";
                    };
                    readonly additionalGuests: {
                        readonly type: "number";
                        readonly description: "The additionalGuests of the attendee";
                    };
                };
            };
        };
        readonly attendeesOmitted: {
            readonly type: "boolean";
            readonly description: "Whether attendees are omitted";
        };
        readonly extendedProperties: {
            readonly type: "object";
            readonly description: "The extendedProperties of the event";
            readonly properties: {
                readonly private: {
                    readonly type: "object";
                    readonly description: "The private extendedProperties of the event";
                };
                readonly shared: {
                    readonly type: "object";
                    readonly description: "The shared extendedProperties of the event";
                };
            };
        };
        readonly hangoutLink: {
            readonly type: "string";
            readonly description: "The hangoutLink of the event";
        };
        readonly conferenceData: {
            readonly type: "object";
            readonly description: "The conferenceData of the event";
            readonly properties: {
                readonly createRequest: {
                    readonly type: "object";
                    readonly description: "The createRequest of the conferenceData";
                    readonly properties: {
                        readonly requestId: {
                            readonly type: "string";
                            readonly description: "The requestId of the createRequest";
                        };
                        readonly conferenceSolutionKey: {
                            readonly type: "object";
                            readonly description: "The conferenceSolutionKey of the createRequest";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the conferenceSolutionKey";
                                };
                            };
                        };
                        readonly status: {
                            readonly type: "object";
                            readonly description: "The status of the createRequest";
                            readonly properties: {
                                readonly statusCode: {
                                    readonly type: "string";
                                    readonly description: "The statusCode of the status";
                                };
                            };
                        };
                    };
                };
                readonly entryPoints: {
                    readonly type: "array";
                    readonly description: "The entryPoints of the conferenceData";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "An entryPoint";
                        readonly properties: {
                            readonly entryPointType: {
                                readonly type: "string";
                                readonly description: "The entryPointType of the entryPoint";
                            };
                            readonly uri: {
                                readonly type: "string";
                                readonly description: "The uri of the entryPoint";
                            };
                            readonly label: {
                                readonly type: "string";
                                readonly description: "The label of the entryPoint";
                            };
                            readonly pin: {
                                readonly type: "string";
                                readonly description: "The pin of the entryPoint";
                            };
                            readonly accessCode: {
                                readonly type: "string";
                                readonly description: "The accessCode of the entryPoint";
                            };
                            readonly meetingCode: {
                                readonly type: "string";
                                readonly description: "The meetingCode of the entryPoint";
                            };
                            readonly passcode: {
                                readonly type: "string";
                                readonly description: "The passcode of the entryPoint";
                            };
                            readonly password: {
                                readonly type: "string";
                                readonly description: "The password of the entryPoint";
                            };
                        };
                    };
                };
                readonly conferenceSolution: {
                    readonly type: "object";
                    readonly description: "The conferenceSolution of the conferenceData";
                    readonly properties: {
                        readonly key: {
                            readonly type: "object";
                            readonly description: "The key of the conferenceSolution";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the key";
                                };
                            };
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of the conferenceSolution";
                        };
                        readonly iconUri: {
                            readonly type: "string";
                            readonly description: "The iconUri of the conferenceSolution";
                        };
                    };
                };
                readonly conferenceId: {
                    readonly type: "string";
                    readonly description: "The conferenceId of the conferenceData";
                };
                readonly signature: {
                    readonly type: "string";
                    readonly description: "The signature of the conferenceData";
                };
                readonly notes: {
                    readonly type: "string";
                    readonly description: "The notes of the conferenceData";
                };
            };
        };
        readonly gadget: {
            readonly type: "object";
            readonly description: "The gadget of the event";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the gadget";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "The title of the gadget";
                };
                readonly link: {
                    readonly type: "string";
                    readonly description: "The link of the gadget";
                };
                readonly iconLink: {
                    readonly type: "string";
                    readonly description: "The iconLink of the gadget";
                };
                readonly width: {
                    readonly type: "number";
                    readonly description: "The width of the gadget";
                };
                readonly height: {
                    readonly type: "number";
                    readonly description: "The height of the gadget";
                };
                readonly display: {
                    readonly type: "string";
                    readonly description: "The display of the gadget";
                };
                readonly preferences: {
                    readonly type: "object";
                    readonly description: "The preferences of the gadget";
                };
            };
        };
        readonly anyoneCanAddSelf: {
            readonly type: "boolean";
            readonly description: "Whether anyone can add self";
        };
        readonly guestsCanInviteOthers: {
            readonly type: "boolean";
            readonly description: "Whether guests can invite others";
        };
        readonly guestsCanModify: {
            readonly type: "boolean";
            readonly description: "Whether guests can modify";
        };
        readonly guestsCanSeeOtherGuests: {
            readonly type: "boolean";
            readonly description: "Whether guests can see other guests";
        };
        readonly privateCopy: {
            readonly type: "boolean";
            readonly description: "Whether the event is a private copy";
        };
        readonly locked: {
            readonly type: "boolean";
            readonly description: "Whether the event is locked";
        };
        readonly reminders: {
            readonly type: "object";
            readonly description: "The reminders of the event";
            readonly properties: {
                readonly useDefault: {
                    readonly type: "boolean";
                    readonly description: "Whether the reminders use default";
                };
                readonly overrides: {
                    readonly type: "array";
                    readonly description: "The overrides of the reminders";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A reminder override";
                        readonly properties: {
                            readonly method: {
                                readonly type: "string";
                                readonly description: "The method of the reminder override";
                            };
                            readonly minutes: {
                                readonly type: "number";
                                readonly description: "The minutes of the reminder override";
                            };
                        };
                    };
                };
            };
        };
        readonly source: {
            readonly type: "object";
            readonly description: "The source of the event";
            readonly properties: {
                readonly url: {
                    readonly type: "string";
                    readonly description: "The url of the source";
                };
                readonly title: {
                    readonly type: "string";
                    readonly description: "The title of the source";
                };
            };
        };
        readonly attachments: {
            readonly type: "array";
            readonly description: "The attachments of the event";
            readonly items: {
                readonly type: "object";
                readonly description: "An attachment";
                readonly properties: {
                    readonly fileUrl: {
                        readonly type: "string";
                        readonly description: "The fileUrl of the attachment";
                    };
                    readonly title: {
                        readonly type: "string";
                        readonly description: "The title of the attachment";
                    };
                    readonly mimeType: {
                        readonly type: "string";
                        readonly description: "The mimeType of the attachment";
                    };
                    readonly iconLink: {
                        readonly type: "string";
                        readonly description: "The iconLink of the attachment";
                    };
                    readonly fileId: {
                        readonly type: "string";
                        readonly description: "The fileId of the attachment";
                    };
                };
            };
        };
        readonly eventType: {
            readonly type: "string";
            readonly description: "The eventType of the event";
        };
    };
};
export declare const GoogleDriveAbout: {
    readonly type: "object";
    readonly description: "Information about the user, the user's Drive, and system capabilities.";
    readonly properties: {
        readonly storageQuota: {
            readonly type: "object";
            readonly description: "The user's storage quota limits and usage. All fields are measured in bytes.";
            readonly properties: {
                readonly limit: {
                    readonly type: "string";
                    readonly description: "The usage limit, if applicable. This will not be present if the user has unlimited storage.";
                };
                readonly usageInDrive: {
                    readonly type: "string";
                    readonly description: "The usage by all files in Google Drive.";
                };
                readonly usageInDriveTrash: {
                    readonly type: "string";
                    readonly description: "The usage by trashed files in Google Drive.";
                };
                readonly usage: {
                    readonly type: "string";
                    readonly description: "The total usage across all services.";
                };
            };
        };
        readonly user: {
            readonly type: "object";
            readonly description: "The authenticated user.";
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "A plain text displayable name for this user.";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                };
                readonly me: {
                    readonly type: "boolean";
                    readonly description: "Whether this user is the requesting user.";
                };
                readonly permissionId: {
                    readonly type: "string";
                    readonly description: "The user's ID as visible in Permission resources.";
                };
                readonly emailAddress: {
                    readonly type: "string";
                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                };
                readonly photoLink: {
                    readonly type: "string";
                    readonly description: "A link to the user's profile photo, if available.";
                };
            };
        };
    };
};
export declare const GoogleSharedDrivesInput: {
    readonly type: "object";
    readonly description: "The input for your google shared drives";
    readonly properties: {
        readonly pageSize: {
            readonly type: "number";
            readonly description: "The pageSize of the google drives response";
        };
        readonly pageToken: {
            readonly type: "string";
            readonly description: "The pageToken of the google drives";
        };
        readonly q: {
            readonly type: "string";
            readonly description: "The query for the google drives";
        };
    };
};
export declare const GoogleSharedDrives: {
    readonly type: "object";
    readonly description: "The google shared drives response";
    readonly properties: {
        readonly kind: {
            readonly type: "string";
            readonly description: "The kind of the google shared drives response";
        };
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The nextPageToken of the google shared drives";
        };
        readonly drives: {
            readonly type: "array";
            readonly description: "The list of shared drives";
            readonly items: {
                readonly type: "object";
                readonly description: "A drive";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the drive";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the drive";
                    };
                    readonly colorRgb: {
                        readonly type: "string";
                        readonly description: "The colorRgb of the drive";
                    };
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "The kind of the drive";
                    };
                    readonly backgroundImageLink: {
                        readonly type: "string";
                        readonly description: "A short-lived link to this shared drive's background image";
                    };
                    readonly capabilities: {
                        readonly type: "object";
                        readonly description: "Capabilities the current user has on this shared drive.";
                        readonly properties: {
                            readonly canAddChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can add children to folders in this shared drive";
                            };
                            readonly canComment: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can comment on files in this shared drive";
                            };
                            readonly canCopy: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can copy files in this shared drive";
                            };
                            readonly canDeleteDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can delete this shared drive";
                            };
                            readonly canDownload: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can download files in this shared drive";
                            };
                            readonly canEdit: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can edit files in this shared drive";
                            };
                            readonly canListChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can list the children of folders in this shared drive";
                            };
                            readonly canManageMembers: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can add members to this shared drive or remove them or change their role";
                            };
                            readonly canReadRevisions: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can read the revisions resource of files in this shared drive";
                            };
                            readonly canRename: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can rename files or folders in this shared drive";
                            };
                            readonly canRenameDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can rename this shared drive";
                            };
                            readonly canShare: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can share files or folders in this shared drive";
                            };
                            readonly canChangeCopyRequiresWriterPermissionRestriction: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive";
                            };
                            readonly canChangeDomainUsersOnlyRestriction: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can change the domainUsersOnly restriction of this shared drive";
                            };
                            readonly canChangeDriveMembersOnlyRestriction: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can change the driveMembersOnly restriction of this shared drive";
                            };
                            readonly canChangeSharingFoldersRequiresOrganizerPermissionRestriction: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can change the sharingFoldersRestriction of this shared drive";
                            };
                            readonly canResetDriveRestrictions: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can reset the shared drive restrictions to defaults.";
                            };
                            readonly canDeleteChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can delete children from folders in this shared drive";
                            };
                            readonly canTrashChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can trash children from folders in this shared drive";
                            };
                        };
                    };
                    readonly themeId: {
                        readonly type: "string";
                        readonly description: "The ID of the theme from which the background image and color will be set.";
                    };
                    readonly backgroundImageFile: {
                        readonly type: "object";
                        readonly description: "An image file and cropping parameters from which a background image for this shared drive is set.";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of an image file in Drive to use for the background image.";
                            };
                            readonly xCoordinate: {
                                readonly type: "number";
                                readonly description: "The X coordinate of the upper left corner of the cropping area in the background image.";
                            };
                            readonly yCoordinate: {
                                readonly type: "number";
                                readonly description: "The Y coordinate of the upper left corner of the cropping area in the background image.";
                            };
                            readonly width: {
                                readonly type: "number";
                                readonly description: "The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.";
                            };
                        };
                    };
                    readonly createdTime: {
                        readonly type: "string";
                        readonly description: "The time at which the shared drive was created (RFC 3339 date-time).";
                    };
                    readonly hidden: {
                        readonly type: "boolean";
                        readonly description: "Whether the shared drive is hidden from default view.";
                    };
                    readonly restrictions: {
                        readonly type: "object";
                        readonly description: "A set of restrictions that apply to this shared drive or items inside this shared drive.";
                        readonly properties: {
                            readonly copyRequiresWriterPermission: {
                                readonly type: "boolean";
                                readonly description: "Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive.";
                            };
                            readonly domainUsersOnly: {
                                readonly type: "boolean";
                                readonly description: "Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.";
                            };
                            readonly driveMembersOnly: {
                                readonly type: "boolean";
                                readonly description: "Whether access to items inside this shared drive is restricted to its members.";
                            };
                            readonly adminManagedRestrictions: {
                                readonly type: "boolean";
                                readonly description: "Whether administrative privileges on this shared drive are required to modify restrictions.";
                            };
                            readonly sharingFoldersRequiresOrganizerPermission: {
                                readonly type: "boolean";
                                readonly description: "If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.";
                            };
                        };
                    };
                    readonly orgUnitId: {
                        readonly type: "string";
                        readonly description: "The organizational unit of this shared drive. This field is only populated when the useDomainAdminAccess parameter is set to true";
                    };
                };
            };
        };
    };
};
export declare const GoogleSharedDriveInput: {
    readonly type: "object";
    readonly description: "the google shared drive input";
    readonly properties: {
        readonly driveId: {
            readonly type: "string";
            readonly description: "The ID of the shared drive.";
        };
        readonly useDoimainAdminAccess: {
            readonly type: "boolean";
            readonly description: "Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs";
        };
    };
    readonly required: readonly ["driveId"];
};
export declare const GoogleSharedDrive: {
    readonly type: "object";
    readonly description: "the google shared drive response";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the drive";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the drive";
        };
        readonly colorRgb: {
            readonly type: "string";
            readonly description: "The colorRgb of the drive";
        };
        readonly kind: {
            readonly type: "string";
            readonly description: "The kind of the drive";
        };
        readonly backgroundImageLink: {
            readonly type: "string";
            readonly description: "A short-lived link to this shared drive's background image";
        };
        readonly capabilities: {
            readonly type: "object";
            readonly description: "Capabilities the current user has on this shared drive.";
            readonly properties: {
                readonly canAddChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add children to folders in this shared drive";
                };
                readonly canComment: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can comment on files in this shared drive";
                };
                readonly canCopy: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can copy files in this shared drive";
                };
                readonly canDeleteDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can delete this shared drive";
                };
                readonly canDownload: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can download files in this shared drive";
                };
                readonly canEdit: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can edit files in this shared drive";
                };
                readonly canListChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can list the children of folders in this shared drive";
                };
                readonly canManageMembers: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add members to this shared drive or remove them or change their role";
                };
                readonly canReadRevisions: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can read the revisions resource of files in this shared drive";
                };
                readonly canRename: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can rename files or folders in this shared drive";
                };
                readonly canRenameDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can rename this shared drive";
                };
                readonly canShare: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can share files or folders in this shared drive";
                };
                readonly canChangeCopyRequiresWriterPermissionRestriction: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive";
                };
                readonly canChangeDomainUsersOnlyRestriction: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the domainUsersOnly restriction of this shared drive";
                };
                readonly canChangeDriveMembersOnlyRestriction: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the driveMembersOnly restriction of this shared drive";
                };
                readonly canChangeSharingFoldersRequiresOrganizerPermissionRestriction: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the sharingFoldersRestriction of this shared drive";
                };
                readonly canResetDriveRestrictions: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can reset the shared drive restrictions to defaults.";
                };
                readonly canDeleteChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can delete children from folders in this shared drive";
                };
                readonly canTrashChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can trash children from folders in this shared drive";
                };
            };
        };
        readonly themeId: {
            readonly type: "string";
            readonly description: "The ID of the theme from which the background image and color will be set.";
        };
        readonly backgroundImageFile: {
            readonly type: "object";
            readonly description: "An image file and cropping parameters from which a background image for this shared drive is set.";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of an image file in Drive to use for the background image.";
                };
                readonly xCoordinate: {
                    readonly type: "number";
                    readonly description: "The X coordinate of the upper left corner of the cropping area in the background image.";
                };
                readonly yCoordinate: {
                    readonly type: "number";
                    readonly description: "The Y coordinate of the upper left corner of the cropping area in the background image.";
                };
                readonly width: {
                    readonly type: "number";
                    readonly description: "The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.";
                };
            };
        };
        readonly createdTime: {
            readonly type: "string";
            readonly description: "The time at which the shared drive was created (RFC 3339 date-time).";
        };
        readonly hidden: {
            readonly type: "boolean";
            readonly description: "Whether the shared drive is hidden from default view.";
        };
        readonly restrictions: {
            readonly type: "object";
            readonly description: "A set of restrictions that apply to this shared drive or items inside this shared drive.";
            readonly properties: {
                readonly copyRequiresWriterPermission: {
                    readonly type: "boolean";
                    readonly description: "Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive.";
                };
                readonly domainUsersOnly: {
                    readonly type: "boolean";
                    readonly description: "Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.";
                };
                readonly driveMembersOnly: {
                    readonly type: "boolean";
                    readonly description: "Whether access to items inside this shared drive is restricted to its members.";
                };
                readonly adminManagedRestrictions: {
                    readonly type: "boolean";
                    readonly description: "Whether administrative privileges on this shared drive are required to modify restrictions.";
                };
                readonly sharingFoldersRequiresOrganizerPermission: {
                    readonly type: "boolean";
                    readonly description: "If true, only users with the organizer role can share folders. If false, users with either the organizer role or the file organizer role can share folders.";
                };
            };
        };
        readonly orgUnitId: {
            readonly type: "string";
            readonly description: "The organizational unit of this shared drive. This field is only populated when the useDomainAdminAccess parameter is set to true";
        };
    };
};
export declare const GoogleDriveFilesInput: {
    readonly type: "object";
    readonly description: "The input for files from a google drive";
    readonly properties: {
        readonly driveId: {
            readonly type: "string";
            readonly description: "The ID of the shared drive. If the drifeId is not provided, defaults to the user's myDrive.";
        };
        readonly corpora: {
            readonly type: "string";
            readonly description: "Bodies of items (files/documents) to which the query applies. Supported bodies are 'user', 'domain', 'drive', and 'allDrives'. Prefer 'user' or 'drive' to 'allDrives' for efficiency. By default, corpora is set to 'user'. However, this can change depending on the filter set through the 'q' parameter.";
        };
        readonly includeItemsFromAllDrives: {
            readonly type: "boolean";
            readonly description: "Whether both My Drive and shared drive items should be included in results. Requires `supportsAllDrives` param to be true.";
        };
        readonly trashed: {
            readonly type: "boolean";
            readonly description: "Whether to include trashed items. Defaults to true.";
        };
        readonly orderBy: {
            readonly type: "string";
            readonly description: "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but can be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name.";
        };
        readonly pageSize: {
            readonly type: "number";
            readonly description: "The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.";
        };
        readonly pageToken: {
            readonly type: "string";
            readonly description: "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.";
        };
        readonly q: {
            readonly type: "string";
            readonly description: "A query for filtering the file results. See https://developers.google.com/drive/api/guides/search-files for supported syntax.";
        };
        readonly spaces: {
            readonly type: "string";
            readonly description: "A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'.";
        };
        readonly supportsAllDrives: {
            readonly type: "boolean";
            readonly description: "Whether the requesting application supports both My Drives and shared drives. (Default: false)";
        };
        readonly includePermissionsForView: {
            readonly type: "string";
            readonly description: "Specifies which additional view's permissions to include in the response. Only 'published' is supported.";
        };
        readonly includeLabels: {
            readonly type: "string";
            readonly description: "A comma-separated list of labels to return for each file. If specified, supported labels are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'.";
        };
    };
};
export declare const GoogleDriveFiles: {
    readonly type: "object";
    readonly description: "The output for files from a google drive";
    readonly properties: {
        readonly nextPageToken: {
            readonly type: "string";
            readonly description: "The token for the next page of files. This will be absent if the end of the files list has been reached.";
        };
        readonly kind: {
            readonly type: "string";
            readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#fileList'.";
        };
        readonly incompleteSearch: {
            readonly type: "boolean";
            readonly description: "Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the 'allDrives' corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as 'user' or 'drive'.";
        };
        readonly files: {
            readonly type: "array";
            readonly description: "The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.";
            readonly items: {
                readonly type: "object";
                readonly description: "A single Drive file";
                readonly properties: {
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#file'.";
                    };
                    readonly driveId: {
                        readonly type: "string";
                        readonly description: "The ID of the shared drive the file resides in. Only populated for items in shared drives.";
                    };
                    readonly fileExtension: {
                        readonly type: "string";
                        readonly description: "The extension of the file. The final component of fullFileExtension. This is only available for files with binary content in Google Drive.";
                    };
                    readonly copyRequiresWriterPermission: {
                        readonly type: "boolean";
                        readonly description: "Whether the options to copy, print, or download this file, should be disabled for readers and commenters.";
                    };
                    readonly md5Checksum: {
                        readonly type: "string";
                        readonly description: "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.";
                    };
                    readonly contentHints: {
                        readonly type: "object";
                        readonly description: "Additional information about the content of the file. These fields are never populated in responses.";
                        readonly properties: {
                            readonly indexableText: {
                                readonly type: "string";
                                readonly description: "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.";
                            };
                            readonly thumbnail: {
                                readonly type: "object";
                                readonly description: "A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.";
                                readonly properties: {
                                    readonly image: {
                                        readonly type: "string";
                                        readonly description: "The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.";
                                    };
                                    readonly mimeType: {
                                        readonly type: "string";
                                        readonly description: "The MIME type of the thumbnail.";
                                    };
                                };
                            };
                        };
                    };
                    readonly writersCanShare: {
                        readonly type: "boolean";
                        readonly description: "Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.";
                    };
                    readonly viewedByMe: {
                        readonly type: "boolean";
                        readonly description: "Whether the file has been viewed by this user.";
                    };
                    readonly mimeType: {
                        readonly type: "string";
                        readonly description: "The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.";
                    };
                    readonly parents: {
                        readonly type: "array";
                        readonly description: "The IDs of the parent folders which contain the file. If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly thumbnailLink: {
                        readonly type: "string";
                        readonly description: "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.";
                    };
                    readonly iconLink: {
                        readonly type: "string";
                        readonly description: "A static, unauthenticated link to the file's icon.";
                    };
                    readonly shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the file has been shared. Not populated for items in shared drives.";
                    };
                    readonly lastModifyingUser: {
                        readonly type: "object";
                        readonly description: "The last user to modify the file.";
                        readonly properties: {
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "A plain text displayable name for this user.";
                            };
                            readonly kind: {
                                readonly type: "string";
                                readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                            };
                            readonly me: {
                                readonly type: "boolean";
                                readonly description: "Whether this user is the requesting user.";
                            };
                            readonly permissionId: {
                                readonly type: "string";
                                readonly description: "The user's ID as visible in Permission resources.";
                            };
                            readonly emailAddress: {
                                readonly type: "string";
                                readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                            };
                            readonly photoLink: {
                                readonly type: "string";
                                readonly description: "A link to the user's profile photo, if available.";
                            };
                        };
                    };
                    readonly owners: {
                        readonly type: "array";
                        readonly description: "The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A user that ownes the file.";
                            readonly properties: {
                                readonly displayName: {
                                    readonly type: "string";
                                    readonly description: "A plain text displayable name for this user.";
                                };
                                readonly kind: {
                                    readonly type: "string";
                                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                                };
                                readonly me: {
                                    readonly type: "boolean";
                                    readonly description: "Whether this user is the requesting user.";
                                };
                                readonly permissionId: {
                                    readonly type: "string";
                                    readonly description: "The user's ID as visible in Permission resources.";
                                };
                                readonly emailAddress: {
                                    readonly type: "string";
                                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                                };
                                readonly photoLink: {
                                    readonly type: "string";
                                    readonly description: "A link to the user's profile photo, if available.";
                                };
                            };
                        };
                    };
                    readonly headRevisionId: {
                        readonly type: "string";
                        readonly description: "The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.";
                    };
                    readonly sharingUser: {
                        readonly type: "object";
                        readonly description: "The user who shared the file with the requesting user, if applicable.";
                        readonly properties: {
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "A plain text displayable name for this user.";
                            };
                            readonly kind: {
                                readonly type: "string";
                                readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                            };
                            readonly me: {
                                readonly type: "boolean";
                                readonly description: "Whether this user is the requesting user.";
                            };
                            readonly permissionId: {
                                readonly type: "string";
                                readonly description: "The user's ID as visible in Permission resources.";
                            };
                            readonly emailAddress: {
                                readonly type: "string";
                                readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                            };
                            readonly photoLink: {
                                readonly type: "string";
                                readonly description: "A link to the user's profile photo, if available.";
                            };
                        };
                    };
                    readonly webViewLink: {
                        readonly type: "string";
                        readonly description: "A link for opening the file in a relevant Google editor or viewer in a browser.";
                    };
                    readonly webContentLink: {
                        readonly type: "string";
                        readonly description: "A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.";
                    };
                    readonly size: {
                        readonly type: "string";
                        readonly description: "Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.";
                    };
                    readonly permissions: {
                        readonly type: "array";
                        readonly description: "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "The ID of the permission.";
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the grantee. Valid values are: - user - group - domain - anyone";
                                };
                                readonly displayName: {
                                    readonly type: "string";
                                    readonly description: "The `pretty` name of the value of the permission.";
                                };
                                readonly kind: {
                                    readonly type: "string";
                                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.";
                                };
                                readonly permissionDetails: {
                                    readonly type: "array";
                                    readonly description: " Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly description: "A set of permissions that a user with the effective role can use to access a file or folder.";
                                        readonly properties: {
                                            readonly permissionType: {
                                                readonly type: "string";
                                                readonly description: "The type of the permission";
                                            };
                                            readonly inheritedFrom: {
                                                readonly type: "string";
                                                readonly description: "The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the shared drive.";
                                            };
                                            readonly role: {
                                                readonly type: "string";
                                                readonly description: "The role of the permission";
                                            };
                                            readonly inherited: {
                                                readonly type: "boolean";
                                                readonly description: "Whether this permission is inherited.";
                                            };
                                        };
                                    };
                                };
                                readonly photoLink: {
                                    readonly type: "string";
                                    readonly description: "A link to the user's profile photo, if available.";
                                };
                                readonly emailAddress: {
                                    readonly type: "string";
                                    readonly description: "The email address of the user or group to which this permission refers.";
                                };
                                readonly role: {
                                    readonly type: "string";
                                    readonly description: "The role granted by this permission. Valid values are: - owner - organizer - fileOrganizer - writer - commenter - reader";
                                };
                                readonly allowFileDiscovery: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.";
                                };
                                readonly domain: {
                                    readonly type: "string";
                                    readonly description: "The domain to which this permission refers.";
                                };
                                readonly expirationTime: {
                                    readonly type: "string";
                                    readonly description: "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future";
                                };
                                readonly deleted: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.";
                                };
                                readonly view: {
                                    readonly type: "string";
                                    readonly description: "Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.";
                                };
                                readonly pendingOwner: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.";
                                };
                            };
                        };
                    };
                    readonly hasThumbnail: {
                        readonly type: "boolean";
                        readonly description: "Whether the file has a thumbnail.";
                    };
                    readonly spaces: {
                        readonly type: "array";
                        readonly description: "The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly folderColorRgb: {
                        readonly type: "string";
                        readonly description: "The color for a folder as an RGB hex string.";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the file.";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.";
                    };
                    readonly description: {
                        readonly type: "string";
                        readonly description: "A short description of the file.";
                    };
                    readonly starred: {
                        readonly type: "boolean";
                        readonly description: "Whether the user has starred the file.";
                    };
                    readonly trashed: {
                        readonly type: "boolean";
                        readonly description: "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.";
                    };
                    readonly explicitlyTrashed: {
                        readonly type: "boolean";
                        readonly description: "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.";
                    };
                    readonly createdTime: {
                        readonly type: "string";
                        readonly description: "The time at which the file was created (RFC 3339 date-time).";
                    };
                    readonly modifiedTime: {
                        readonly type: "string";
                        readonly description: "The last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.";
                    };
                    readonly modifiedByMeTime: {
                        readonly type: "string";
                        readonly description: "The last time the file was modified by the user (RFC 3339 date-time).";
                    };
                    readonly viewedByMeTime: {
                        readonly type: "string";
                        readonly description: "The last time the file was viewed by the user (RFC 3339 date-time).";
                    };
                    readonly sharedWithMeTime: {
                        readonly type: "string";
                        readonly description: "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).";
                    };
                    readonly quotaBytesUsed: {
                        readonly type: "string";
                        readonly description: "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.";
                    };
                    readonly version: {
                        readonly type: "string";
                        readonly description: "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.";
                    };
                    readonly originalFilename: {
                        readonly type: "string";
                        readonly description: "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.";
                    };
                    readonly ownedByMe: {
                        readonly type: "boolean";
                        readonly description: "Whether the user owns the file. Not populated for items in shared drives.";
                    };
                    readonly fullFileExtension: {
                        readonly type: "string";
                        readonly description: "The full file extension extracted from the name field. May contain multiple concatenated extensions, such as \"tar.gz\". This is only available for files with binary content in Google Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.";
                    };
                    readonly properties: {
                        readonly type: "object";
                        readonly description: "Additional metadata about the file.";
                    };
                    readonly appProperties: {
                        readonly type: "object";
                        readonly description: "Additional metadata about the file.";
                    };
                    readonly isAppAuthorized: {
                        readonly type: "boolean";
                        readonly description: "Whether the file was created or opened by the requesting app.";
                    };
                    readonly capabilities: {
                        readonly type: "object";
                        readonly description: "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.";
                        readonly properties: {
                            readonly canMoveChildrenOutOfDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.";
                            };
                            readonly canReadDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.";
                            };
                            readonly canEdit: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can edit this file.";
                            };
                            readonly canCopy: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.";
                            };
                            readonly canComment: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can comment on this file.";
                            };
                            readonly canAddChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can add children to this folder. This is always false when the item is not a folder.";
                            };
                            readonly canDelete: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can delete this file.";
                            };
                            readonly canDownload: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can download this file.";
                            };
                            readonly canListChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can list the children of this folder. This is always false when the item is not a folder.";
                            };
                            readonly canRemoveChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can remove children from this folder. This is always false when the item is not a folder.";
                            };
                            readonly canRename: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can rename this file.";
                            };
                            readonly canTrash: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can move this file to trash.";
                            };
                            readonly canReadRevisions: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.";
                            };
                            readonly canChangeCopyRequiresWriterPermission: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can change the copyRequiresWriterPermission restriction of this file.";
                            };
                            readonly canUnrtash: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can restore this file from trash.";
                            };
                            readonly canModifyContent: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can modify the content of this file.";
                            };
                            readonly canDeleteChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                            };
                            readonly canTrashChildren: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                            };
                            readonly canMoveItemOutOfDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.";
                            };
                            readonly canAddMyDriveParent: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.";
                            };
                            readonly canRemoveMyDriveParent: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.";
                            };
                            readonly canMoveItemWithinDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.";
                            };
                            readonly canShare: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can modify the sharing settings for this file.";
                            };
                            readonly canMoveChildrenWithinDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.";
                            };
                            readonly canModifyContentRestriction: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can modify the contentRestrictions on this file.";
                            };
                            readonly canAddFolderFromAnotherDrive: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                            };
                            readonly canChangeSecurityUpdateEnabled: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can change the securityUpdateEnabled field on link share metadata";
                            };
                            readonly canAcceptOwnership: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can accept the ownership transfer for this file. Not populated for items in shared drives.";
                            };
                            readonly canReadLabels: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can read the labels on the file.";
                            };
                            readonly canModifyLabels: {
                                readonly type: "boolean";
                                readonly description: "Whether the current user can modify the file's labels.";
                            };
                        };
                    };
                    readonly hasAugmentedPermissions: {
                        readonly type: "boolean";
                        readonly description: "Whether there are permissions directly on this file. This field is only populated for items in shared drives.";
                    };
                    readonly trashingUser: {
                        readonly type: "object";
                        readonly description: "The user who trashed the file. Only populated for items in shared drives.";
                        readonly properties: {
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "A plain text displayable name for this user.";
                            };
                            readonly kind: {
                                readonly type: "string";
                                readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                            };
                            readonly me: {
                                readonly type: "boolean";
                                readonly description: "Whether this user is the requesting user.";
                            };
                            readonly permissionId: {
                                readonly type: "string";
                                readonly description: "The user's ID as visible in Permission resources.";
                            };
                            readonly emailAddress: {
                                readonly type: "string";
                                readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                            };
                            readonly photoLink: {
                                readonly type: "string";
                                readonly description: "A link to the user's profile photo, if available.";
                            };
                        };
                    };
                    readonly thumbnailVersion: {
                        readonly type: "string";
                        readonly description: "The thumbnail version for use in thumbnail cache invalidation.";
                    };
                    readonly trashedTime: {
                        readonly type: "string";
                        readonly description: "The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.";
                    };
                    readonly modifiedByMe: {
                        readonly type: "boolean";
                        readonly description: "Whether the file has been modified by this user.";
                    };
                    readonly permissionIds: {
                        readonly type: "array";
                        readonly description: "A collection of permission IDs for users with access to this file";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A permission ID from a permission for this file.";
                        };
                    };
                    readonly imageMediaMetadata: {
                        readonly type: "object";
                        readonly description: "Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.";
                        readonly properties: {
                            readonly flashUsed: {
                                readonly type: "boolean";
                                readonly description: "Whether a flash was used in taking this image.";
                            };
                            readonly meteringMode: {
                                readonly type: "string";
                                readonly description: "The metering mode used to create the photo.";
                            };
                            readonly sensor: {
                                readonly type: "string";
                                readonly description: "The type of sensor used to create the photo.";
                            };
                            readonly exposureMode: {
                                readonly type: "string";
                                readonly description: "The exposure mode used to create the photo.";
                            };
                            readonly colorSpace: {
                                readonly type: "string";
                                readonly description: "The color space of the photo.";
                            };
                            readonly whiteBalance: {
                                readonly type: "string";
                                readonly description: "The white balance mode used to create the photo.";
                            };
                            readonly width: {
                                readonly type: "number";
                                readonly description: "The width of the image in pixels.";
                            };
                            readonly height: {
                                readonly type: "number";
                                readonly description: "The height of the image in pixels.";
                            };
                            readonly location: {
                                readonly type: "object";
                                readonly description: "The location stored in the image.";
                                readonly properties: {
                                    readonly latitude: {
                                        readonly type: "number";
                                        readonly description: "The latitude stored in the image.";
                                    };
                                    readonly longitude: {
                                        readonly type: "number";
                                        readonly description: "The longitude stored in the image.";
                                    };
                                    readonly altitude: {
                                        readonly type: "number";
                                        readonly description: "The altitude stored in the image.";
                                    };
                                };
                            };
                            readonly rotation: {
                                readonly type: "number";
                                readonly description: "The rotation in clockwise degrees from the image's original orientation.";
                            };
                            readonly time: {
                                readonly type: "string";
                                readonly description: "The date and time the photo was taken (EXIF DateTime).";
                            };
                            readonly cameraMake: {
                                readonly type: "string";
                                readonly description: "The make of the camera used to create the photo.";
                            };
                            readonly cameraModel: {
                                readonly type: "string";
                                readonly description: "The model of the camera used to create the photo.";
                            };
                            readonly exposureTime: {
                                readonly type: "number";
                                readonly description: "The length of the exposure, in seconds.";
                            };
                            readonly aperture: {
                                readonly type: "number";
                                readonly description: "The aperture used to create the photo (f-number).";
                            };
                            readonly focalLength: {
                                readonly type: "number";
                                readonly description: "The focal length used to create the photo, in millimeters.";
                            };
                            readonly isoSpeed: {
                                readonly type: "number";
                                readonly description: "The ISO speed used to create the photo.";
                            };
                            readonly exposureBias: {
                                readonly type: "number";
                                readonly description: "The exposure bias of the photo (APEX value).";
                            };
                            readonly maxApertureValue: {
                                readonly type: "number";
                                readonly description: "The smallest f-number of the lens at the focal length used to create the photo (APEX value).";
                            };
                            readonly subjectDistance: {
                                readonly type: "number";
                                readonly description: "The distance to the subject of the photo, in meters.";
                            };
                            readonly lens: {
                                readonly type: "string";
                                readonly description: "The lens used to create the photo.";
                            };
                        };
                    };
                    readonly videoMediaMetadata: {
                        readonly type: "object";
                        readonly description: "Metadata about video media. This will only be present for video types.";
                        readonly properties: {
                            readonly width: {
                                readonly type: "number";
                                readonly description: "The width of the video in pixels.";
                            };
                            readonly height: {
                                readonly type: "number";
                                readonly description: "The height of the video in pixels.";
                            };
                            readonly durationMillis: {
                                readonly type: "number";
                                readonly description: "The duration of the video in milliseconds.";
                            };
                        };
                    };
                    readonly shortcutDetails: {
                        readonly type: "object";
                        readonly description: "Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.";
                        readonly properties: {
                            readonly targetId: {
                                readonly type: "string";
                                readonly description: "The ID of the file that this shortcut points to.";
                            };
                            readonly targetMimeType: {
                                readonly type: "string";
                                readonly description: "The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.";
                            };
                            readonly targetResourceKey: {
                                readonly type: "string";
                                readonly description: "The resource key of the target file.";
                            };
                        };
                    };
                    readonly contentRestrictions: {
                        readonly type: "array";
                        readonly description: "Content restrictions for this file. Only populated if there are content restrictions for this file.";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A set of restrictions for a content file.";
                            readonly properties: {
                                readonly readOnly: {
                                    readonly type: "boolean";
                                    readonly description: "Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.";
                                };
                                readonly reason: {
                                    readonly type: "string";
                                    readonly description: "Reason for why the content of the file is restricted.";
                                };
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the content restriction. Currently the only possible value is globalContentRestriction.";
                                };
                                readonly restrictingUser: {
                                    readonly type: "object";
                                    readonly description: "The user who set the content restriction.";
                                    readonly properties: {
                                        readonly displayName: {
                                            readonly type: "string";
                                            readonly description: "A plain text displayable name for this user.";
                                        };
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                                        };
                                        readonly me: {
                                            readonly type: "boolean";
                                            readonly description: "Whether this user is the requesting user.";
                                        };
                                        readonly permissionId: {
                                            readonly type: "string";
                                            readonly description: "The user's ID as visible in Permission resources.";
                                        };
                                        readonly emailAddress: {
                                            readonly type: "string";
                                            readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                                        };
                                        readonly photoLink: {
                                            readonly type: "string";
                                            readonly description: "A link to the user's profile photo, if available.";
                                        };
                                    };
                                };
                                readonly restrictionTime: {
                                    readonly type: "string";
                                    readonly description: "The time at which the content restriction was set (formatted RFC 3339 timestamp).";
                                };
                            };
                        };
                    };
                    readonly resourceKey: {
                        readonly type: "string";
                        readonly description: "A key needed to access the item via a shared link.";
                    };
                    readonly linkShareMetadata: {
                        readonly type: "object";
                        readonly description: "Metadata about the shared link.";
                        readonly properties: {
                            readonly securityUpdateEligible: {
                                readonly type: "boolean";
                                readonly description: "Indicates whether the link is eligible for security update.";
                            };
                            readonly securityUpdateEnabled: {
                                readonly type: "boolean";
                                readonly description: "Specifies whether the link requires a password to access.";
                            };
                        };
                    };
                    readonly labelInfo: {
                        readonly type: "object";
                        readonly description: "An overview of the labels on the file.";
                        readonly properties: {
                            readonly labels: {
                                readonly type: "array";
                                readonly description: "The list of labels contained on the file.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly description: "A label contained on the file";
                                    readonly properties: {
                                        readonly id: {
                                            readonly type: "string";
                                            readonly description: "The ID of the label.";
                                        };
                                        readonly revisionId: {
                                            readonly type: "string";
                                            readonly description: "The revision ID of the label.";
                                        };
                                        readonly kind: {
                                            readonly type: "string";
                                            readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#label'.";
                                        };
                                        readonly fields: {
                                            readonly type: "object";
                                            readonly description: "Additional metadata about this label.";
                                        };
                                    };
                                };
                            };
                        };
                    };
                    readonly sha1Checksum: {
                        readonly type: "string";
                        readonly description: "The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.";
                    };
                    readonly sha256Checksum: {
                        readonly type: "string";
                        readonly description: "The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.";
                    };
                };
            };
        };
    };
};
export declare const GoogleDriveFileMetadataInput: {
    readonly type: "object";
    readonly description: "The input for a file from a google drive";
    readonly properties: {
        readonly fileId: {
            readonly type: "string";
            readonly description: "The id of the file";
        };
        readonly supportsAllDrives: {
            readonly type: "boolean";
            readonly description: "Whether the requesting application supports both My Drives and shared drives.";
        };
        readonly includePermissionsForView: {
            readonly type: "string";
            readonly description: "Specifies which additional view's permissions to include in the response. Only 'published' is supported.";
        };
        readonly includeLabels: {
            readonly type: "string";
            readonly description: "A comma-separated list of IDs of labels to include in the labelInfo part of the response.";
        };
    };
    readonly required: readonly ["fileId"];
};
export declare const GoogleDriveFileMetadata: {
    readonly type: "object";
    readonly description: "A single Drive file";
    readonly properties: {
        readonly kind: {
            readonly type: "string";
            readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#file'.";
        };
        readonly driveId: {
            readonly type: "string";
            readonly description: "The ID of the shared drive the file resides in. Only populated for items in shared drives.";
        };
        readonly fileExtension: {
            readonly type: "string";
            readonly description: "The extension of the file. The final component of fullFileExtension. This is only available for files with binary content in Google Drive.";
        };
        readonly copyRequiresWriterPermission: {
            readonly type: "boolean";
            readonly description: "Whether the options to copy, print, or download this file, should be disabled for readers and commenters.";
        };
        readonly md5Checksum: {
            readonly type: "string";
            readonly description: "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.";
        };
        readonly contentHints: {
            readonly type: "object";
            readonly description: "Additional information about the content of the file. These fields are never populated in responses.";
            readonly properties: {
                readonly indexableText: {
                    readonly type: "string";
                    readonly description: "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.";
                };
                readonly thumbnail: {
                    readonly type: "object";
                    readonly description: "A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.";
                    readonly properties: {
                        readonly image: {
                            readonly type: "string";
                            readonly description: "The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.";
                        };
                        readonly mimeType: {
                            readonly type: "string";
                            readonly description: "The MIME type of the thumbnail.";
                        };
                    };
                };
            };
        };
        readonly writersCanShare: {
            readonly type: "boolean";
            readonly description: "Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.";
        };
        readonly viewedByMe: {
            readonly type: "boolean";
            readonly description: "Whether the file has been viewed by this user.";
        };
        readonly mimeType: {
            readonly type: "string";
            readonly description: "The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.";
        };
        readonly parents: {
            readonly type: "array";
            readonly description: "The IDs of the parent folders which contain the file. If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly thumbnailLink: {
            readonly type: "string";
            readonly description: "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.";
        };
        readonly iconLink: {
            readonly type: "string";
            readonly description: "A static, unauthenticated link to the file's icon.";
        };
        readonly shared: {
            readonly type: "boolean";
            readonly description: "Whether the file has been shared. Not populated for items in shared drives.";
        };
        readonly lastModifyingUser: {
            readonly type: "object";
            readonly description: "The last user to modify the file.";
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "A plain text displayable name for this user.";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                };
                readonly me: {
                    readonly type: "boolean";
                    readonly description: "Whether this user is the requesting user.";
                };
                readonly permissionId: {
                    readonly type: "string";
                    readonly description: "The user's ID as visible in Permission resources.";
                };
                readonly emailAddress: {
                    readonly type: "string";
                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                };
                readonly photoLink: {
                    readonly type: "string";
                    readonly description: "A link to the user's profile photo, if available.";
                };
            };
        };
        readonly owners: {
            readonly type: "array";
            readonly description: "The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.";
            readonly items: {
                readonly type: "object";
                readonly description: "A user that ownes the file.";
                readonly properties: {
                    readonly displayName: {
                        readonly type: "string";
                        readonly description: "A plain text displayable name for this user.";
                    };
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                    };
                    readonly me: {
                        readonly type: "boolean";
                        readonly description: "Whether this user is the requesting user.";
                    };
                    readonly permissionId: {
                        readonly type: "string";
                        readonly description: "The user's ID as visible in Permission resources.";
                    };
                    readonly emailAddress: {
                        readonly type: "string";
                        readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                    };
                    readonly photoLink: {
                        readonly type: "string";
                        readonly description: "A link to the user's profile photo, if available.";
                    };
                };
            };
        };
        readonly headRevisionId: {
            readonly type: "string";
            readonly description: "The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.";
        };
        readonly sharingUser: {
            readonly type: "object";
            readonly description: "The user who shared the file with the requesting user, if applicable.";
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "A plain text displayable name for this user.";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                };
                readonly me: {
                    readonly type: "boolean";
                    readonly description: "Whether this user is the requesting user.";
                };
                readonly permissionId: {
                    readonly type: "string";
                    readonly description: "The user's ID as visible in Permission resources.";
                };
                readonly emailAddress: {
                    readonly type: "string";
                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                };
                readonly photoLink: {
                    readonly type: "string";
                    readonly description: "A link to the user's profile photo, if available.";
                };
            };
        };
        readonly webViewLink: {
            readonly type: "string";
            readonly description: "A link for opening the file in a relevant Google editor or viewer in a browser.";
        };
        readonly webContentLink: {
            readonly type: "string";
            readonly description: "A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.";
        };
        readonly size: {
            readonly type: "string";
            readonly description: "Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.";
        };
        readonly permissions: {
            readonly type: "array";
            readonly description: "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.";
            readonly items: {
                readonly type: "object";
                readonly description: "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the permission.";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the grantee. Valid values are: - user - group - domain - anyone";
                    };
                    readonly displayName: {
                        readonly type: "string";
                        readonly description: "The `pretty` name of the value of the permission.";
                    };
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.";
                    };
                    readonly permissionDetails: {
                        readonly type: "array";
                        readonly description: " Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A set of permissions that a user with the effective role can use to access a file or folder.";
                            readonly properties: {
                                readonly permissionType: {
                                    readonly type: "string";
                                    readonly description: "The type of the permission";
                                };
                                readonly inheritedFrom: {
                                    readonly type: "string";
                                    readonly description: "The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the shared drive.";
                                };
                                readonly role: {
                                    readonly type: "string";
                                    readonly description: "The role of the permission";
                                };
                                readonly inherited: {
                                    readonly type: "boolean";
                                    readonly description: "Whether this permission is inherited.";
                                };
                            };
                        };
                    };
                    readonly photoLink: {
                        readonly type: "string";
                        readonly description: "A link to the user's profile photo, if available.";
                    };
                    readonly emailAddress: {
                        readonly type: "string";
                        readonly description: "The email address of the user or group to which this permission refers.";
                    };
                    readonly role: {
                        readonly type: "string";
                        readonly description: "The role granted by this permission. Valid values are: - owner - organizer - fileOrganizer - writer - commenter - reader";
                    };
                    readonly allowFileDiscovery: {
                        readonly type: "boolean";
                        readonly description: "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.";
                    };
                    readonly domain: {
                        readonly type: "string";
                        readonly description: "The domain to which this permission refers.";
                    };
                    readonly expirationTime: {
                        readonly type: "string";
                        readonly description: "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future";
                    };
                    readonly deleted: {
                        readonly type: "boolean";
                        readonly description: "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.";
                    };
                    readonly view: {
                        readonly type: "string";
                        readonly description: "Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.";
                    };
                    readonly pendingOwner: {
                        readonly type: "boolean";
                        readonly description: "Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.";
                    };
                };
            };
        };
        readonly hasThumbnail: {
            readonly type: "boolean";
            readonly description: "Whether the file has a thumbnail.";
        };
        readonly spaces: {
            readonly type: "array";
            readonly description: "The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly folderColorRgb: {
            readonly type: "string";
            readonly description: "The color for a folder as an RGB hex string.";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the file.";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "A short description of the file.";
        };
        readonly starred: {
            readonly type: "boolean";
            readonly description: "Whether the user has starred the file.";
        };
        readonly trashed: {
            readonly type: "boolean";
            readonly description: "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.";
        };
        readonly explicitlyTrashed: {
            readonly type: "boolean";
            readonly description: "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.";
        };
        readonly createdTime: {
            readonly type: "string";
            readonly description: "The time at which the file was created (RFC 3339 date-time).";
        };
        readonly modifiedTime: {
            readonly type: "string";
            readonly description: "The last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.";
        };
        readonly modifiedByMeTime: {
            readonly type: "string";
            readonly description: "The last time the file was modified by the user (RFC 3339 date-time).";
        };
        readonly viewedByMeTime: {
            readonly type: "string";
            readonly description: "The last time the file was viewed by the user (RFC 3339 date-time).";
        };
        readonly sharedWithMeTime: {
            readonly type: "string";
            readonly description: "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).";
        };
        readonly quotaBytesUsed: {
            readonly type: "string";
            readonly description: "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.";
        };
        readonly version: {
            readonly type: "string";
            readonly description: "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.";
        };
        readonly originalFilename: {
            readonly type: "string";
            readonly description: "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.";
        };
        readonly ownedByMe: {
            readonly type: "boolean";
            readonly description: "Whether the user owns the file. Not populated for items in shared drives.";
        };
        readonly fullFileExtension: {
            readonly type: "string";
            readonly description: "The full file extension extracted from the name field. May contain multiple concatenated extensions, such as \"tar.gz\". This is only available for files with binary content in Google Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.";
        };
        readonly properties: {
            readonly type: "object";
            readonly description: "Additional metadata about the file.";
        };
        readonly appProperties: {
            readonly type: "object";
            readonly description: "Additional metadata about the file.";
        };
        readonly isAppAuthorized: {
            readonly type: "boolean";
            readonly description: "Whether the file was created or opened by the requesting app.";
        };
        readonly capabilities: {
            readonly type: "object";
            readonly description: "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.";
            readonly properties: {
                readonly canMoveChildrenOutOfDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canReadDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.";
                };
                readonly canEdit: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can edit this file.";
                };
                readonly canCopy: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.";
                };
                readonly canComment: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can comment on this file.";
                };
                readonly canAddChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add children to this folder. This is always false when the item is not a folder.";
                };
                readonly canDelete: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can delete this file.";
                };
                readonly canDownload: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can download this file.";
                };
                readonly canListChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can list the children of this folder. This is always false when the item is not a folder.";
                };
                readonly canRemoveChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can remove children from this folder. This is always false when the item is not a folder.";
                };
                readonly canRename: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can rename this file.";
                };
                readonly canTrash: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move this file to trash.";
                };
                readonly canReadRevisions: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.";
                };
                readonly canChangeCopyRequiresWriterPermission: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the copyRequiresWriterPermission restriction of this file.";
                };
                readonly canUnrtash: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can restore this file from trash.";
                };
                readonly canModifyContent: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the content of this file.";
                };
                readonly canDeleteChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canTrashChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canMoveItemOutOfDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.";
                };
                readonly canAddMyDriveParent: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.";
                };
                readonly canRemoveMyDriveParent: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.";
                };
                readonly canMoveItemWithinDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.";
                };
                readonly canShare: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the sharing settings for this file.";
                };
                readonly canMoveChildrenWithinDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.";
                };
                readonly canModifyContentRestriction: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the contentRestrictions on this file.";
                };
                readonly canAddFolderFromAnotherDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canChangeSecurityUpdateEnabled: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the securityUpdateEnabled field on link share metadata";
                };
                readonly canAcceptOwnership: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can accept the ownership transfer for this file. Not populated for items in shared drives.";
                };
                readonly canReadLabels: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can read the labels on the file.";
                };
                readonly canModifyLabels: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the file's labels.";
                };
            };
        };
        readonly hasAugmentedPermissions: {
            readonly type: "boolean";
            readonly description: "Whether there are permissions directly on this file. This field is only populated for items in shared drives.";
        };
        readonly trashingUser: {
            readonly type: "object";
            readonly description: "The user who trashed the file. Only populated for items in shared drives.";
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "A plain text displayable name for this user.";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                };
                readonly me: {
                    readonly type: "boolean";
                    readonly description: "Whether this user is the requesting user.";
                };
                readonly permissionId: {
                    readonly type: "string";
                    readonly description: "The user's ID as visible in Permission resources.";
                };
                readonly emailAddress: {
                    readonly type: "string";
                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                };
                readonly photoLink: {
                    readonly type: "string";
                    readonly description: "A link to the user's profile photo, if available.";
                };
            };
        };
        readonly thumbnailVersion: {
            readonly type: "string";
            readonly description: "The thumbnail version for use in thumbnail cache invalidation.";
        };
        readonly trashedTime: {
            readonly type: "string";
            readonly description: "The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.";
        };
        readonly modifiedByMe: {
            readonly type: "boolean";
            readonly description: "Whether the file has been modified by this user.";
        };
        readonly permissionIds: {
            readonly type: "array";
            readonly description: "A collection of permission IDs for users with access to this file";
            readonly items: {
                readonly type: "string";
                readonly description: "A permission ID from a permission for this file.";
            };
        };
        readonly imageMediaMetadata: {
            readonly type: "object";
            readonly description: "Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.";
            readonly properties: {
                readonly flashUsed: {
                    readonly type: "boolean";
                    readonly description: "Whether a flash was used in taking this image.";
                };
                readonly meteringMode: {
                    readonly type: "string";
                    readonly description: "The metering mode used to create the photo.";
                };
                readonly sensor: {
                    readonly type: "string";
                    readonly description: "The type of sensor used to create the photo.";
                };
                readonly exposureMode: {
                    readonly type: "string";
                    readonly description: "The exposure mode used to create the photo.";
                };
                readonly colorSpace: {
                    readonly type: "string";
                    readonly description: "The color space of the photo.";
                };
                readonly whiteBalance: {
                    readonly type: "string";
                    readonly description: "The white balance mode used to create the photo.";
                };
                readonly width: {
                    readonly type: "number";
                    readonly description: "The width of the image in pixels.";
                };
                readonly height: {
                    readonly type: "number";
                    readonly description: "The height of the image in pixels.";
                };
                readonly location: {
                    readonly type: "object";
                    readonly description: "The location stored in the image.";
                    readonly properties: {
                        readonly latitude: {
                            readonly type: "number";
                            readonly description: "The latitude stored in the image.";
                        };
                        readonly longitude: {
                            readonly type: "number";
                            readonly description: "The longitude stored in the image.";
                        };
                        readonly altitude: {
                            readonly type: "number";
                            readonly description: "The altitude stored in the image.";
                        };
                    };
                };
                readonly rotation: {
                    readonly type: "number";
                    readonly description: "The rotation in clockwise degrees from the image's original orientation.";
                };
                readonly time: {
                    readonly type: "string";
                    readonly description: "The date and time the photo was taken (EXIF DateTime).";
                };
                readonly cameraMake: {
                    readonly type: "string";
                    readonly description: "The make of the camera used to create the photo.";
                };
                readonly cameraModel: {
                    readonly type: "string";
                    readonly description: "The model of the camera used to create the photo.";
                };
                readonly exposureTime: {
                    readonly type: "number";
                    readonly description: "The length of the exposure, in seconds.";
                };
                readonly aperture: {
                    readonly type: "number";
                    readonly description: "The aperture used to create the photo (f-number).";
                };
                readonly focalLength: {
                    readonly type: "number";
                    readonly description: "The focal length used to create the photo, in millimeters.";
                };
                readonly isoSpeed: {
                    readonly type: "number";
                    readonly description: "The ISO speed used to create the photo.";
                };
                readonly exposureBias: {
                    readonly type: "number";
                    readonly description: "The exposure bias of the photo (APEX value).";
                };
                readonly maxApertureValue: {
                    readonly type: "number";
                    readonly description: "The smallest f-number of the lens at the focal length used to create the photo (APEX value).";
                };
                readonly subjectDistance: {
                    readonly type: "number";
                    readonly description: "The distance to the subject of the photo, in meters.";
                };
                readonly lens: {
                    readonly type: "string";
                    readonly description: "The lens used to create the photo.";
                };
            };
        };
        readonly videoMediaMetadata: {
            readonly type: "object";
            readonly description: "Metadata about video media. This will only be present for video types.";
            readonly properties: {
                readonly width: {
                    readonly type: "number";
                    readonly description: "The width of the video in pixels.";
                };
                readonly height: {
                    readonly type: "number";
                    readonly description: "The height of the video in pixels.";
                };
                readonly durationMillis: {
                    readonly type: "number";
                    readonly description: "The duration of the video in milliseconds.";
                };
            };
        };
        readonly shortcutDetails: {
            readonly type: "object";
            readonly description: "Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.";
            readonly properties: {
                readonly targetId: {
                    readonly type: "string";
                    readonly description: "The ID of the file that this shortcut points to.";
                };
                readonly targetMimeType: {
                    readonly type: "string";
                    readonly description: "The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.";
                };
                readonly targetResourceKey: {
                    readonly type: "string";
                    readonly description: "The resource key of the target file.";
                };
            };
        };
        readonly contentRestrictions: {
            readonly type: "array";
            readonly description: "Content restrictions for this file. Only populated if there are content restrictions for this file.";
            readonly items: {
                readonly type: "object";
                readonly description: "A set of restrictions for a content file.";
                readonly properties: {
                    readonly readOnly: {
                        readonly type: "boolean";
                        readonly description: "Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.";
                    };
                    readonly reason: {
                        readonly type: "string";
                        readonly description: "Reason for why the content of the file is restricted.";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the content restriction. Currently the only possible value is globalContentRestriction.";
                    };
                    readonly restrictingUser: {
                        readonly type: "object";
                        readonly description: "The user who set the content restriction.";
                        readonly properties: {
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "A plain text displayable name for this user.";
                            };
                            readonly kind: {
                                readonly type: "string";
                                readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                            };
                            readonly me: {
                                readonly type: "boolean";
                                readonly description: "Whether this user is the requesting user.";
                            };
                            readonly permissionId: {
                                readonly type: "string";
                                readonly description: "The user's ID as visible in Permission resources.";
                            };
                            readonly emailAddress: {
                                readonly type: "string";
                                readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                            };
                            readonly photoLink: {
                                readonly type: "string";
                                readonly description: "A link to the user's profile photo, if available.";
                            };
                        };
                    };
                    readonly restrictionTime: {
                        readonly type: "string";
                        readonly description: "The time at which the content restriction was set (formatted RFC 3339 timestamp).";
                    };
                };
            };
        };
        readonly resourceKey: {
            readonly type: "string";
            readonly description: "A key needed to access the item via a shared link.";
        };
        readonly linkShareMetadata: {
            readonly type: "object";
            readonly description: "Metadata about the shared link.";
            readonly properties: {
                readonly securityUpdateEligible: {
                    readonly type: "boolean";
                    readonly description: "Indicates whether the link is eligible for security update.";
                };
                readonly securityUpdateEnabled: {
                    readonly type: "boolean";
                    readonly description: "Specifies whether the link requires a password to access.";
                };
            };
        };
        readonly labelInfo: {
            readonly type: "object";
            readonly description: "An overview of the labels on the file.";
            readonly properties: {
                readonly labels: {
                    readonly type: "array";
                    readonly description: "The list of labels contained on the file.";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A label contained on the file";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the label.";
                            };
                            readonly revisionId: {
                                readonly type: "string";
                                readonly description: "The revision ID of the label.";
                            };
                            readonly kind: {
                                readonly type: "string";
                                readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#label'.";
                            };
                            readonly fields: {
                                readonly type: "object";
                                readonly description: "Additional metadata about this label.";
                            };
                        };
                    };
                };
            };
        };
        readonly sha1Checksum: {
            readonly type: "string";
            readonly description: "The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.";
        };
        readonly sha256Checksum: {
            readonly type: "string";
            readonly description: "The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.";
        };
    };
};
export declare const GoogleDriveFileInput: {
    readonly type: "object";
    readonly description: "The input for a file from a google drive";
    readonly properties: {
        readonly fileId: {
            readonly type: "string";
            readonly description: "The id of the file. Only google docs & google sheets files are currently supported via this resource.";
        };
        readonly acknowledgeAbuse: {
            readonly type: "boolean";
            readonly description: "Whether the user is acknowledging the risk of downloading known malware or other abusive files.";
        };
        readonly supportsAllDrives: {
            readonly type: "boolean";
            readonly description: "Whether the requesting application supports both My Drives and shared drives.";
        };
        readonly includePermissionsForView: {
            readonly type: "string";
            readonly description: "Specifies which additional view's permissions to include in the response. Only 'published' is supported.";
        };
        readonly includeLabels: {
            readonly type: "string";
            readonly description: "A comma-separated list of IDs of labels to include in the labelInfo part of the response.";
        };
    };
    readonly required: readonly ["fileId", "acknowledgeAbuse"];
};
export declare const GoogleDriveFile: {
    readonly type: "object";
    readonly description: "A single Drive file";
    readonly properties: {
        readonly kind: {
            readonly type: "string";
            readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#file'.";
        };
        readonly driveId: {
            readonly type: "string";
            readonly description: "The ID of the shared drive the file resides in. Only populated for items in shared drives.";
        };
        readonly fileExtension: {
            readonly type: "string";
            readonly description: "The extension of the file. The final component of fullFileExtension. This is only available for files with binary content in Google Drive.";
        };
        readonly copyRequiresWriterPermission: {
            readonly type: "boolean";
            readonly description: "Whether the options to copy, print, or download this file, should be disabled for readers and commenters.";
        };
        readonly md5Checksum: {
            readonly type: "string";
            readonly description: "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.";
        };
        readonly contentHints: {
            readonly type: "object";
            readonly description: "Additional information about the content of the file. These fields are never populated in responses.";
            readonly properties: {
                readonly indexableText: {
                    readonly type: "string";
                    readonly description: "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.";
                };
                readonly thumbnail: {
                    readonly type: "object";
                    readonly description: "A thumbnail for the file. This will only be used if Drive cannot generate a standard thumbnail.";
                    readonly properties: {
                        readonly image: {
                            readonly type: "string";
                            readonly description: "The URL-safe Base64 encoded bytes of the thumbnail image. It should conform to RFC 4648 section 5.";
                        };
                        readonly mimeType: {
                            readonly type: "string";
                            readonly description: "The MIME type of the thumbnail.";
                        };
                    };
                };
            };
        };
        readonly writersCanShare: {
            readonly type: "boolean";
            readonly description: "Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.";
        };
        readonly viewedByMe: {
            readonly type: "boolean";
            readonly description: "Whether the file has been viewed by this user.";
        };
        readonly mimeType: {
            readonly type: "string";
            readonly description: "The MIME type of the file. Google Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.";
        };
        readonly parents: {
            readonly type: "array";
            readonly description: "The IDs of the parent folders which contain the file. If not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly thumbnailLink: {
            readonly type: "string";
            readonly description: "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content.";
        };
        readonly iconLink: {
            readonly type: "string";
            readonly description: "A static, unauthenticated link to the file's icon.";
        };
        readonly shared: {
            readonly type: "boolean";
            readonly description: "Whether the file has been shared. Not populated for items in shared drives.";
        };
        readonly lastModifyingUser: {
            readonly type: "object";
            readonly description: "The last user to modify the file.";
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "A plain text displayable name for this user.";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                };
                readonly me: {
                    readonly type: "boolean";
                    readonly description: "Whether this user is the requesting user.";
                };
                readonly permissionId: {
                    readonly type: "string";
                    readonly description: "The user's ID as visible in Permission resources.";
                };
                readonly emailAddress: {
                    readonly type: "string";
                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                };
                readonly photoLink: {
                    readonly type: "string";
                    readonly description: "A link to the user's profile photo, if available.";
                };
            };
        };
        readonly owners: {
            readonly type: "array";
            readonly description: "The owners of the file. Currently, only certain legacy files may have more than one owner. Not populated for items in shared drives.";
            readonly items: {
                readonly type: "object";
                readonly description: "A user that ownes the file.";
                readonly properties: {
                    readonly displayName: {
                        readonly type: "string";
                        readonly description: "A plain text displayable name for this user.";
                    };
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                    };
                    readonly me: {
                        readonly type: "boolean";
                        readonly description: "Whether this user is the requesting user.";
                    };
                    readonly permissionId: {
                        readonly type: "string";
                        readonly description: "The user's ID as visible in Permission resources.";
                    };
                    readonly emailAddress: {
                        readonly type: "string";
                        readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                    };
                    readonly photoLink: {
                        readonly type: "string";
                        readonly description: "A link to the user's profile photo, if available.";
                    };
                };
            };
        };
        readonly headRevisionId: {
            readonly type: "string";
            readonly description: "The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.";
        };
        readonly sharingUser: {
            readonly type: "object";
            readonly description: "The user who shared the file with the requesting user, if applicable.";
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "A plain text displayable name for this user.";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                };
                readonly me: {
                    readonly type: "boolean";
                    readonly description: "Whether this user is the requesting user.";
                };
                readonly permissionId: {
                    readonly type: "string";
                    readonly description: "The user's ID as visible in Permission resources.";
                };
                readonly emailAddress: {
                    readonly type: "string";
                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                };
                readonly photoLink: {
                    readonly type: "string";
                    readonly description: "A link to the user's profile photo, if available.";
                };
            };
        };
        readonly webViewLink: {
            readonly type: "string";
            readonly description: "A link for opening the file in a relevant Google editor or viewer in a browser.";
        };
        readonly webContentLink: {
            readonly type: "string";
            readonly description: "A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.";
        };
        readonly size: {
            readonly type: "string";
            readonly description: "Size in bytes of blobs and first party editor files. Won't be populated for files that have no size, like shortcuts and folders.";
        };
        readonly permissions: {
            readonly type: "array";
            readonly description: "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.";
            readonly items: {
                readonly type: "object";
                readonly description: "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the permission.";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the grantee. Valid values are: - user - group - domain - anyone";
                    };
                    readonly displayName: {
                        readonly type: "string";
                        readonly description: "The `pretty` name of the value of the permission.";
                    };
                    readonly kind: {
                        readonly type: "string";
                        readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#permission'.";
                    };
                    readonly permissionDetails: {
                        readonly type: "array";
                        readonly description: " Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A set of permissions that a user with the effective role can use to access a file or folder.";
                            readonly properties: {
                                readonly permissionType: {
                                    readonly type: "string";
                                    readonly description: "The type of the permission";
                                };
                                readonly inheritedFrom: {
                                    readonly type: "string";
                                    readonly description: "The ID of the item from which this permission is inherited. This is an output-only field and is only populated for members of the shared drive.";
                                };
                                readonly role: {
                                    readonly type: "string";
                                    readonly description: "The role of the permission";
                                };
                                readonly inherited: {
                                    readonly type: "boolean";
                                    readonly description: "Whether this permission is inherited.";
                                };
                            };
                        };
                    };
                    readonly photoLink: {
                        readonly type: "string";
                        readonly description: "A link to the user's profile photo, if available.";
                    };
                    readonly emailAddress: {
                        readonly type: "string";
                        readonly description: "The email address of the user or group to which this permission refers.";
                    };
                    readonly role: {
                        readonly type: "string";
                        readonly description: "The role granted by this permission. Valid values are: - owner - organizer - fileOrganizer - writer - commenter - reader";
                    };
                    readonly allowFileDiscovery: {
                        readonly type: "boolean";
                        readonly description: "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.";
                    };
                    readonly domain: {
                        readonly type: "string";
                        readonly description: "The domain to which this permission refers.";
                    };
                    readonly expirationTime: {
                        readonly type: "string";
                        readonly description: "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future";
                    };
                    readonly deleted: {
                        readonly type: "boolean";
                        readonly description: "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.";
                    };
                    readonly view: {
                        readonly type: "string";
                        readonly description: "Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.";
                    };
                    readonly pendingOwner: {
                        readonly type: "boolean";
                        readonly description: "Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.";
                    };
                };
            };
        };
        readonly hasThumbnail: {
            readonly type: "boolean";
            readonly description: "Whether the file has a thumbnail.";
        };
        readonly spaces: {
            readonly type: "array";
            readonly description: "The spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.";
            readonly items: {
                readonly type: "string";
            };
        };
        readonly folderColorRgb: {
            readonly type: "string";
            readonly description: "The color for a folder as an RGB hex string.";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the file.";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "A short description of the file.";
        };
        readonly starred: {
            readonly type: "boolean";
            readonly description: "Whether the user has starred the file.";
        };
        readonly trashed: {
            readonly type: "boolean";
            readonly description: "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.";
        };
        readonly explicitlyTrashed: {
            readonly type: "boolean";
            readonly description: "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.";
        };
        readonly createdTime: {
            readonly type: "string";
            readonly description: "The time at which the file was created (RFC 3339 date-time).";
        };
        readonly modifiedTime: {
            readonly type: "string";
            readonly description: "The last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user.";
        };
        readonly modifiedByMeTime: {
            readonly type: "string";
            readonly description: "The last time the file was modified by the user (RFC 3339 date-time).";
        };
        readonly viewedByMeTime: {
            readonly type: "string";
            readonly description: "The last time the file was viewed by the user (RFC 3339 date-time).";
        };
        readonly sharedWithMeTime: {
            readonly type: "string";
            readonly description: "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).";
        };
        readonly quotaBytesUsed: {
            readonly type: "string";
            readonly description: "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.";
        };
        readonly version: {
            readonly type: "string";
            readonly description: "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.";
        };
        readonly originalFilename: {
            readonly type: "string";
            readonly description: "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.";
        };
        readonly ownedByMe: {
            readonly type: "boolean";
            readonly description: "Whether the user owns the file. Not populated for items in shared drives.";
        };
        readonly fullFileExtension: {
            readonly type: "string";
            readonly description: "The full file extension extracted from the name field. May contain multiple concatenated extensions, such as \"tar.gz\". This is only available for files with binary content in Google Drive. This is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.";
        };
        readonly properties: {
            readonly type: "object";
            readonly description: "Additional metadata about the file.";
        };
        readonly appProperties: {
            readonly type: "object";
            readonly description: "Additional metadata about the file.";
        };
        readonly isAppAuthorized: {
            readonly type: "boolean";
            readonly description: "Whether the file was created or opened by the requesting app.";
        };
        readonly capabilities: {
            readonly type: "object";
            readonly description: "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.";
            readonly properties: {
                readonly canMoveChildrenOutOfDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canReadDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.";
                };
                readonly canEdit: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can edit this file.";
                };
                readonly canCopy: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.";
                };
                readonly canComment: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can comment on this file.";
                };
                readonly canAddChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add children to this folder. This is always false when the item is not a folder.";
                };
                readonly canDelete: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can delete this file.";
                };
                readonly canDownload: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can download this file.";
                };
                readonly canListChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can list the children of this folder. This is always false when the item is not a folder.";
                };
                readonly canRemoveChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can remove children from this folder. This is always false when the item is not a folder.";
                };
                readonly canRename: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can rename this file.";
                };
                readonly canTrash: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move this file to trash.";
                };
                readonly canReadRevisions: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.";
                };
                readonly canChangeCopyRequiresWriterPermission: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the copyRequiresWriterPermission restriction of this file.";
                };
                readonly canUnrtash: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can restore this file from trash.";
                };
                readonly canModifyContent: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the content of this file.";
                };
                readonly canDeleteChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canTrashChildren: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canMoveItemOutOfDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.";
                };
                readonly canAddMyDriveParent: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.";
                };
                readonly canRemoveMyDriveParent: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.";
                };
                readonly canMoveItemWithinDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.";
                };
                readonly canShare: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the sharing settings for this file.";
                };
                readonly canMoveChildrenWithinDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.";
                };
                readonly canModifyContentRestriction: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the contentRestrictions on this file.";
                };
                readonly canAddFolderFromAnotherDrive: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.";
                };
                readonly canChangeSecurityUpdateEnabled: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can change the securityUpdateEnabled field on link share metadata";
                };
                readonly canAcceptOwnership: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can accept the ownership transfer for this file. Not populated for items in shared drives.";
                };
                readonly canReadLabels: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can read the labels on the file.";
                };
                readonly canModifyLabels: {
                    readonly type: "boolean";
                    readonly description: "Whether the current user can modify the file's labels.";
                };
            };
        };
        readonly hasAugmentedPermissions: {
            readonly type: "boolean";
            readonly description: "Whether there are permissions directly on this file. This field is only populated for items in shared drives.";
        };
        readonly trashingUser: {
            readonly type: "object";
            readonly description: "The user who trashed the file. Only populated for items in shared drives.";
            readonly properties: {
                readonly displayName: {
                    readonly type: "string";
                    readonly description: "A plain text displayable name for this user.";
                };
                readonly kind: {
                    readonly type: "string";
                    readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                };
                readonly me: {
                    readonly type: "boolean";
                    readonly description: "Whether this user is the requesting user.";
                };
                readonly permissionId: {
                    readonly type: "string";
                    readonly description: "The user's ID as visible in Permission resources.";
                };
                readonly emailAddress: {
                    readonly type: "string";
                    readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                };
                readonly photoLink: {
                    readonly type: "string";
                    readonly description: "A link to the user's profile photo, if available.";
                };
            };
        };
        readonly thumbnailVersion: {
            readonly type: "string";
            readonly description: "The thumbnail version for use in thumbnail cache invalidation.";
        };
        readonly trashedTime: {
            readonly type: "string";
            readonly description: "The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.";
        };
        readonly modifiedByMe: {
            readonly type: "boolean";
            readonly description: "Whether the file has been modified by this user.";
        };
        readonly permissionIds: {
            readonly type: "array";
            readonly description: "A collection of permission IDs for users with access to this file";
            readonly items: {
                readonly type: "string";
                readonly description: "A permission ID from a permission for this file.";
            };
        };
        readonly imageMediaMetadata: {
            readonly type: "object";
            readonly description: "Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.";
            readonly properties: {
                readonly flashUsed: {
                    readonly type: "boolean";
                    readonly description: "Whether a flash was used in taking this image.";
                };
                readonly meteringMode: {
                    readonly type: "string";
                    readonly description: "The metering mode used to create the photo.";
                };
                readonly sensor: {
                    readonly type: "string";
                    readonly description: "The type of sensor used to create the photo.";
                };
                readonly exposureMode: {
                    readonly type: "string";
                    readonly description: "The exposure mode used to create the photo.";
                };
                readonly colorSpace: {
                    readonly type: "string";
                    readonly description: "The color space of the photo.";
                };
                readonly whiteBalance: {
                    readonly type: "string";
                    readonly description: "The white balance mode used to create the photo.";
                };
                readonly width: {
                    readonly type: "number";
                    readonly description: "The width of the image in pixels.";
                };
                readonly height: {
                    readonly type: "number";
                    readonly description: "The height of the image in pixels.";
                };
                readonly location: {
                    readonly type: "object";
                    readonly description: "The location stored in the image.";
                    readonly properties: {
                        readonly latitude: {
                            readonly type: "number";
                            readonly description: "The latitude stored in the image.";
                        };
                        readonly longitude: {
                            readonly type: "number";
                            readonly description: "The longitude stored in the image.";
                        };
                        readonly altitude: {
                            readonly type: "number";
                            readonly description: "The altitude stored in the image.";
                        };
                    };
                };
                readonly rotation: {
                    readonly type: "number";
                    readonly description: "The rotation in clockwise degrees from the image's original orientation.";
                };
                readonly time: {
                    readonly type: "string";
                    readonly description: "The date and time the photo was taken (EXIF DateTime).";
                };
                readonly cameraMake: {
                    readonly type: "string";
                    readonly description: "The make of the camera used to create the photo.";
                };
                readonly cameraModel: {
                    readonly type: "string";
                    readonly description: "The model of the camera used to create the photo.";
                };
                readonly exposureTime: {
                    readonly type: "number";
                    readonly description: "The length of the exposure, in seconds.";
                };
                readonly aperture: {
                    readonly type: "number";
                    readonly description: "The aperture used to create the photo (f-number).";
                };
                readonly focalLength: {
                    readonly type: "number";
                    readonly description: "The focal length used to create the photo, in millimeters.";
                };
                readonly isoSpeed: {
                    readonly type: "number";
                    readonly description: "The ISO speed used to create the photo.";
                };
                readonly exposureBias: {
                    readonly type: "number";
                    readonly description: "The exposure bias of the photo (APEX value).";
                };
                readonly maxApertureValue: {
                    readonly type: "number";
                    readonly description: "The smallest f-number of the lens at the focal length used to create the photo (APEX value).";
                };
                readonly subjectDistance: {
                    readonly type: "number";
                    readonly description: "The distance to the subject of the photo, in meters.";
                };
                readonly lens: {
                    readonly type: "string";
                    readonly description: "The lens used to create the photo.";
                };
            };
        };
        readonly videoMediaMetadata: {
            readonly type: "object";
            readonly description: "Metadata about video media. This will only be present for video types.";
            readonly properties: {
                readonly width: {
                    readonly type: "number";
                    readonly description: "The width of the video in pixels.";
                };
                readonly height: {
                    readonly type: "number";
                    readonly description: "The height of the video in pixels.";
                };
                readonly durationMillis: {
                    readonly type: "number";
                    readonly description: "The duration of the video in milliseconds.";
                };
            };
        };
        readonly shortcutDetails: {
            readonly type: "object";
            readonly description: "Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.";
            readonly properties: {
                readonly targetId: {
                    readonly type: "string";
                    readonly description: "The ID of the file that this shortcut points to.";
                };
                readonly targetMimeType: {
                    readonly type: "string";
                    readonly description: "The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.";
                };
                readonly targetResourceKey: {
                    readonly type: "string";
                    readonly description: "The resource key of the target file.";
                };
            };
        };
        readonly contentRestrictions: {
            readonly type: "array";
            readonly description: "Content restrictions for this file. Only populated if there are content restrictions for this file.";
            readonly items: {
                readonly type: "object";
                readonly description: "A set of restrictions for a content file.";
                readonly properties: {
                    readonly readOnly: {
                        readonly type: "boolean";
                        readonly description: "Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.";
                    };
                    readonly reason: {
                        readonly type: "string";
                        readonly description: "Reason for why the content of the file is restricted.";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the content restriction. Currently the only possible value is globalContentRestriction.";
                    };
                    readonly restrictingUser: {
                        readonly type: "object";
                        readonly description: "The user who set the content restriction.";
                        readonly properties: {
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "A plain text displayable name for this user.";
                            };
                            readonly kind: {
                                readonly type: "string";
                                readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#user'.";
                            };
                            readonly me: {
                                readonly type: "boolean";
                                readonly description: "Whether this user is the requesting user.";
                            };
                            readonly permissionId: {
                                readonly type: "string";
                                readonly description: "The user's ID as visible in Permission resources.";
                            };
                            readonly emailAddress: {
                                readonly type: "string";
                                readonly description: "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.";
                            };
                            readonly photoLink: {
                                readonly type: "string";
                                readonly description: "A link to the user's profile photo, if available.";
                            };
                        };
                    };
                    readonly restrictionTime: {
                        readonly type: "string";
                        readonly description: "The time at which the content restriction was set (formatted RFC 3339 timestamp).";
                    };
                };
            };
        };
        readonly resourceKey: {
            readonly type: "string";
            readonly description: "A key needed to access the item via a shared link.";
        };
        readonly linkShareMetadata: {
            readonly type: "object";
            readonly description: "Metadata about the shared link.";
            readonly properties: {
                readonly securityUpdateEligible: {
                    readonly type: "boolean";
                    readonly description: "Indicates whether the link is eligible for security update.";
                };
                readonly securityUpdateEnabled: {
                    readonly type: "boolean";
                    readonly description: "Specifies whether the link requires a password to access.";
                };
            };
        };
        readonly labelInfo: {
            readonly type: "object";
            readonly description: "An overview of the labels on the file.";
            readonly properties: {
                readonly labels: {
                    readonly type: "array";
                    readonly description: "The list of labels contained on the file.";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A label contained on the file";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the label.";
                            };
                            readonly revisionId: {
                                readonly type: "string";
                                readonly description: "The revision ID of the label.";
                            };
                            readonly kind: {
                                readonly type: "string";
                                readonly description: "Identifies what kind of resource this is. Value: the fixed string 'drive#label'.";
                            };
                            readonly fields: {
                                readonly type: "object";
                                readonly description: "Additional metadata about this label.";
                            };
                        };
                    };
                };
            };
        };
        readonly sha1Checksum: {
            readonly type: "string";
            readonly description: "The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.";
        };
        readonly sha256Checksum: {
            readonly type: "string";
            readonly description: "The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.";
        };
        readonly fileContent: {
            readonly type: "string";
            readonly description: "The actual content of the file. Only google docs & google sheets files are supported. In case of google docs a plaintext representation of the content is returned. In the case of google sheets, a csv representation of the content is returned in string form. All other file types will return an error message in this field.";
        };
    };
};
export declare const GoogleDriveCreateFileBody: {
    readonly type: "object";
    readonly description: "The request body for GoogleDriveCreateFile";
    readonly properties: {
        readonly metadata: {
            readonly type: "object";
            readonly description: "The metadata for the file";
            readonly properties: {
                readonly name: {
                    readonly type: "string";
                    readonly description: "The name of the file. This is not necessarily unique. Must include a file extension as part of the name e.g. `file.txt`, `file.csv`";
                };
                readonly driveId: {
                    readonly type: "string";
                    readonly description: "The ID of the drive to create the file in. If not provided, the user's myDrive will be useed.";
                };
            };
            readonly required: readonly ["name"];
        };
        readonly content: {
            readonly type: "string";
            readonly description: "The content of the file encoded as a base64 string";
        };
    };
    readonly required: readonly ["metadata", "content"];
};
export declare const GoogleDriveCreateFileInput: {
    readonly type: "object";
    readonly description: "The input for GoogleDriveCreateFile";
    readonly properties: {
        readonly fileType: {
            readonly type: "string";
            readonly description: "The type of file to create. Valid options are `document` & `spreadsheet`.";
        };
    };
    readonly required: readonly ["fileType"];
};
