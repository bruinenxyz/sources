export declare const SlackProfile: {
    readonly title: "SlackProfile";
    readonly description: "A slack profile";
    readonly type: "object";
    readonly properties: {
        readonly title: {
            readonly type: "string";
            readonly description: "The title of the profile";
        };
        readonly phone: {
            readonly type: "string";
            readonly description: "The phone of the profile";
        };
        readonly skype: {
            readonly type: "string";
            readonly description: "The skype of the profile";
        };
        readonly real_name: {
            readonly type: "string";
            readonly description: "The real name of the profile";
        };
        readonly real_name_normalized: {
            readonly type: "string";
            readonly description: "The normalized real name of the profile";
        };
        readonly display_name: {
            readonly type: "string";
            readonly description: "The display name of the profile";
        };
        readonly display_name_normalized: {
            readonly type: "string";
            readonly description: "The normalized display name of the profile";
        };
        readonly fields: {
            readonly type: "object";
            readonly description: "The fields of the profile";
        };
        readonly status_text: {
            readonly type: "string";
            readonly description: "The status text of the profile";
        };
        readonly status_emoji: {
            readonly type: "string";
            readonly description: "The status emoji of the profile";
        };
        readonly status_expiration: {
            readonly type: "number";
            readonly description: "The status expiration of the profile";
        };
        readonly avatar_hash: {
            readonly type: "string";
            readonly description: "The avatar hash of the profile";
        };
        readonly start_date: {
            readonly type: "string";
            readonly description: "The start date of the profile";
        };
        readonly pronouns: {
            readonly type: "string";
            readonly description: "The pronouns of the profile";
        };
        readonly huddle_state: {
            readonly type: "string";
            readonly description: "The huddle state of the profile";
        };
        readonly huddle_state_expiration_ts: {
            readonly type: "number";
            readonly description: "The huddle state expiration ts of the profile";
        };
        readonly first_name: {
            readonly type: "string";
            readonly description: "The first name of the profile";
        };
        readonly last_name: {
            readonly type: "string";
            readonly description: "The last name of the profile";
        };
    };
};
export declare const SlackPostMessageInput: {};
export declare const SlackPostMessage: {};
