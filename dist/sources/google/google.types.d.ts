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
