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
