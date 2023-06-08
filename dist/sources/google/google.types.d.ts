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
