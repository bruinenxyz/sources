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
