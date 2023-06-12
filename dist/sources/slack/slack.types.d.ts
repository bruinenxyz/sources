export declare const SlackProfile: {
    readonly title: "SlackProfile";
    readonly description: "A slack profile";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the request was successful";
        };
        readonly sub: {
            readonly type: "string";
            readonly description: "The user ID";
        };
        readonly email: {
            readonly type: "string";
            readonly description: "The user email";
        };
        readonly email_verified: {
            readonly type: "boolean";
            readonly description: "Whether the user email is verified";
        };
        readonly date_email_verified: {
            readonly type: "number";
            readonly description: "The date the user email was verified";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The user name";
        };
        readonly picture: {
            readonly type: "string";
            readonly description: "The user picture";
        };
        readonly given_name: {
            readonly type: "string";
            readonly description: "The user given name";
        };
        readonly family_name: {
            readonly type: "string";
            readonly description: "The user family name";
        };
        readonly locale: {
            readonly type: "string";
            readonly description: "The user locale";
        };
    };
};
