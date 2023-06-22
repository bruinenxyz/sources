export declare const SlackProfile: {
    readonly title: "SlackProfile";
    readonly description: "A slack profile";
    readonly type: "object";
    readonly properties: {
        readonly userId: {
            readonly type: "string";
            readonly description: "The user id of the profile";
        };
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
export declare const SlackUserInput: {
    readonly title: "Slack User Input";
    readonly description: "The input for slack user";
    readonly type: "object";
    readonly properties: {
        readonly userId: {
            readonly type: "string";
            readonly description: "The user id";
        };
    };
    readonly required: readonly ["userId"];
};
export declare const SlackUser: {
    readonly title: "Slack User";
    readonly description: "A slack user";
    readonly type: "object";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The id of the user";
        };
        readonly team_id: {
            readonly type: "string";
            readonly description: "The team id of the user";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the user";
        };
        readonly deleted: {
            readonly type: "boolean";
            readonly description: "Whether the user is deleted";
        };
        readonly color: {
            readonly type: "string";
            readonly description: "The color of the user";
        };
        readonly real_name: {
            readonly type: "string";
            readonly description: "The real name of the user";
        };
        readonly tz: {
            readonly type: "string";
            readonly description: "The timezone of the user";
        };
        readonly tz_label: {
            readonly type: "string";
            readonly description: "The timezone label of the user";
        };
        readonly tz_offset: {
            readonly type: "number";
            readonly description: "The timezone offset of the user";
        };
        readonly profile: {
            readonly type: "object";
            readonly description: "The profile of the user";
            readonly properties: {
                readonly avatar_hash: {
                    readonly type: "string";
                    readonly description: "The avatar hash of the user";
                };
                readonly status_text: {
                    readonly type: "string";
                    readonly description: "The status text of the user";
                };
                readonly status_emoji: {
                    readonly type: "string";
                    readonly description: "The status emoji of the user";
                };
                readonly real_name: {
                    readonly type: "string";
                    readonly description: "The real name of the user";
                };
                readonly display_name: {
                    readonly type: "string";
                    readonly description: "The display name of the user";
                };
                readonly real_name_normalized: {
                    readonly type: "string";
                    readonly description: "The normalized real name of the user";
                };
                readonly display_name_normalized: {
                    readonly type: "string";
                    readonly description: "The normalized display name of the user";
                };
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email of the user";
                };
                readonly image_original: {
                    readonly type: "string";
                    readonly description: "The original image of the user";
                };
                readonly team: {
                    readonly type: "string";
                    readonly description: "The team of the user";
                };
            };
        };
        readonly is_admin: {
            readonly type: "boolean";
            readonly description: "Whether the user is an admin";
        };
        readonly is_owner: {
            readonly type: "boolean";
            readonly description: "Whether the user is an owner";
        };
        readonly is_primary_owner: {
            readonly type: "boolean";
            readonly description: "Whether the user is a primary owner";
        };
        readonly is_restricted: {
            readonly type: "boolean";
            readonly description: "Whether the user is restricted";
        };
        readonly is_ultra_restricted: {
            readonly type: "boolean";
            readonly description: "Whether the user is ultra restricted";
        };
        readonly is_bot: {
            readonly type: "boolean";
            readonly description: "Whether the user is a bot";
        };
        readonly is_app_user: {
            readonly type: "boolean";
            readonly description: "Whether the user is an app user";
        };
        readonly updated: {
            readonly type: "number";
            readonly description: "The updated timestamp of the user";
        };
        readonly has_2fa: {
            readonly type: "boolean";
            readonly description: "Whether the user has 2fa";
        };
    };
};
export declare const SlackConversationsInput: {
    readonly title: "Slack Conversations Input";
    readonly description: "The input for slack conversations";
    readonly type: "object";
    readonly properties: {
        readonly cursor: {
            readonly type: "string";
            readonly description: "The cursor (i.e. next page token) for slack conversations";
        };
        readonly exclude_archived: {
            readonly type: "boolean";
            readonly description: "Whether to exclude archived conversations";
        };
        readonly limit: {
            readonly type: "number";
            readonly description: "The max number of conversations to return. Default is 100.";
        };
        readonly types: {
            readonly type: "string";
            readonly description: "A comma separated list of the types of conversations to return. Defaults to public_channel. Additional types include mpim & im.";
        };
    };
};
export declare const SlackConversations: {
    readonly title: "Slack Conversations";
    readonly description: "A slack conversations response";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the conversations were retrieved successfully";
        };
        readonly channels: {
            readonly type: "array";
            readonly description: "The array of conversations";
            readonly items: {
                readonly type: "object";
                readonly description: "A conversation";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the conversation";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the conversation";
                    };
                    readonly is_channel: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is a channel";
                    };
                    readonly is_group: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is a group";
                    };
                    readonly is_im: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is an im";
                    };
                    readonly created: {
                        readonly type: "number";
                        readonly description: "The created timestamp of the conversation";
                    };
                    readonly creator: {
                        readonly type: "string";
                        readonly description: "The creator of the conversation";
                    };
                    readonly is_archived: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is archived";
                    };
                    readonly is_general: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is general";
                    };
                    readonly unlinked: {
                        readonly type: "number";
                        readonly description: "The unlinked timestamp of the conversation";
                    };
                    readonly name_normalized: {
                        readonly type: "string";
                        readonly description: "The normalized name of the conversation";
                    };
                    readonly is_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is shared";
                    };
                    readonly is_ext_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is externally shared";
                    };
                    readonly is_org_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is org shared";
                    };
                    readonly pending_shared: {
                        readonly type: "array";
                        readonly description: "The pending shared of the conversation";
                    };
                    readonly is_pending_ext_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is pending externally shared";
                    };
                    readonly is_member: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is a member";
                    };
                    readonly is_private: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is private";
                    };
                    readonly is_mpim: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is mpim";
                    };
                    readonly is_open: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is open";
                    };
                    readonly updated: {
                        readonly type: "number";
                        readonly description: "The updated timestamp of the conversation";
                    };
                    readonly topic: {
                        readonly type: "object";
                        readonly description: "The topic of the conversation";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                                readonly description: "The description of the topic";
                            };
                            readonly creator: {
                                readonly type: "string";
                                readonly description: "The creator of the topic";
                            };
                            readonly last_set: {
                                readonly type: "number";
                                readonly description: "The last set timestamp of the topic";
                            };
                        };
                    };
                    readonly purpose: {
                        readonly type: "object";
                        readonly description: "The purpose of the conversation";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                                readonly description: "The description of the purpose";
                            };
                            readonly creator: {
                                readonly type: "string";
                                readonly description: "The creator of the purpose";
                            };
                            readonly last_set: {
                                readonly type: "number";
                                readonly description: "The last set timestamp of the purpose";
                            };
                        };
                    };
                    readonly priority: {
                        readonly type: "number";
                        readonly description: "The priority of the conversation";
                    };
                    readonly previous_names: {
                        readonly type: "array";
                        readonly description: "The previous names of the conversation";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A previous name of the conversation";
                        };
                    };
                    readonly num_members: {
                        readonly type: "number";
                        readonly description: "The number of members of the conversation";
                    };
                };
            };
        };
        readonly response_metadata: {
            readonly type: "object";
            readonly description: "The response metadata of the conversations";
            readonly properties: {
                readonly next_cursor: {
                    readonly type: "string";
                    readonly description: "The next cursor (i.e. next page token) of the conversations";
                };
            };
        };
        readonly error: {
            readonly type: "string";
            readonly description: "The error of the conversations";
        };
    };
};
export declare const SlackEnhancedConversations: {
    readonly title: "Slack Enhanced Conversations";
    readonly description: "A slack enhanced conversations response";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the conversations were retrieved successfully";
        };
        readonly channels: {
            readonly type: "array";
            readonly description: "The array of conversations";
            readonly items: {
                readonly type: "object";
                readonly description: "A conversation";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The id of the conversation";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the conversation";
                    };
                    readonly is_channel: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is a channel";
                    };
                    readonly is_group: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is a group";
                    };
                    readonly is_im: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is an im";
                    };
                    readonly created: {
                        readonly type: "number";
                        readonly description: "The created timestamp of the conversation";
                    };
                    readonly creator: {
                        readonly type: "string";
                        readonly description: "The creator of the conversation";
                    };
                    readonly is_archived: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is archived";
                    };
                    readonly is_general: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is general";
                    };
                    readonly unlinked: {
                        readonly type: "number";
                        readonly description: "The unlinked timestamp of the conversation";
                    };
                    readonly name_normalized: {
                        readonly type: "string";
                        readonly description: "The normalized name of the conversation";
                    };
                    readonly is_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is shared";
                    };
                    readonly is_ext_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is externally shared";
                    };
                    readonly is_org_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is org shared";
                    };
                    readonly pending_shared: {
                        readonly type: "array";
                        readonly description: "The pending shared of the conversation";
                    };
                    readonly is_pending_ext_shared: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is pending externally shared";
                    };
                    readonly is_member: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is a member";
                    };
                    readonly is_private: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is private";
                    };
                    readonly is_mpim: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is mpim";
                    };
                    readonly is_open: {
                        readonly type: "boolean";
                        readonly description: "Whether the conversation is open";
                    };
                    readonly updated: {
                        readonly type: "number";
                        readonly description: "The updated timestamp of the conversation";
                    };
                    readonly topic: {
                        readonly type: "object";
                        readonly description: "The topic of the conversation";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                                readonly description: "The description of the topic";
                            };
                            readonly creator: {
                                readonly type: "string";
                                readonly description: "The creator of the topic";
                            };
                            readonly last_set: {
                                readonly type: "number";
                                readonly description: "The last set timestamp of the topic";
                            };
                        };
                    };
                    readonly purpose: {
                        readonly type: "object";
                        readonly description: "The purpose of the conversation";
                        readonly properties: {
                            readonly value: {
                                readonly type: "string";
                                readonly description: "The description of the purpose";
                            };
                            readonly creator: {
                                readonly type: "string";
                                readonly description: "The creator of the purpose";
                            };
                            readonly last_set: {
                                readonly type: "number";
                                readonly description: "The last set timestamp of the purpose";
                            };
                        };
                    };
                    readonly priority: {
                        readonly type: "number";
                        readonly description: "The priority of the conversation";
                    };
                    readonly previous_names: {
                        readonly type: "array";
                        readonly description: "The previous names of the conversation";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A previous name of the conversation";
                        };
                    };
                    readonly num_members: {
                        readonly type: "number";
                        readonly description: "The number of members of the conversation";
                    };
                    readonly members: {
                        readonly type: "array";
                        readonly description: "The members of the conversation. A maximum of 50 members will be returned if num_members is greater than 50.";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A member of the conversation";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "The id of the member";
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the member";
                                };
                                readonly real_name: {
                                    readonly type: "string";
                                    readonly description: "The real name of the member";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly response_metadata: {
            readonly type: "object";
            readonly description: "The response metadata of the conversations";
            readonly properties: {
                readonly next_cursor: {
                    readonly type: "string";
                    readonly description: "The next cursor (i.e. next page token) of the conversations";
                };
            };
        };
        readonly error: {
            readonly type: "string";
            readonly description: "The error of the conversations";
        };
    };
};
export declare const SlackConversationHistoryInput: {
    readonly title: "Slack Conversation History Input";
    readonly description: "A slack conversation history input";
    readonly type: "object";
    readonly properties: {
        readonly channel: {
            readonly type: "string";
            readonly description: "The channel ID to retrieve history from";
        };
        readonly cursor: {
            readonly type: "string";
            readonly description: "The cursor (i.e. page token) to retrieve history from";
        };
        readonly inclusive: {
            readonly type: "boolean";
            readonly description: "Whether to include messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified.";
        };
        readonly latest: {
            readonly type: "number";
            readonly description: "Only messages before this Unix timestamp will be included in results. Default is the current time.";
        };
        readonly limit: {
            readonly type: "number";
            readonly description: "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Default is 100, maximum for enhanced conversation history is 100.";
        };
        readonly oldest: {
            readonly type: "number";
            readonly description: "Only messages after this Unix timestamp will be included in results. Default is 0.";
        };
    };
    readonly required: readonly ["channel"];
};
export declare const SlackConversationHistory: {
    readonly title: "Slack Conversation History";
    readonly description: "A slack conversation history response";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the conversation history was retrieved successfully";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "The messages of the conversation history";
            readonly items: {
                readonly type: "object";
                readonly description: "A message of the conversation history";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the message";
                    };
                    readonly user: {
                        readonly type: "string";
                        readonly description: "The user that sent the message";
                    };
                    readonly text: {
                        readonly type: "string";
                        readonly description: "The text of the message";
                    };
                    readonly ts: {
                        readonly type: "string";
                        readonly description: "The timestamp of the message";
                    };
                    readonly team: {
                        readonly type: "string";
                        readonly description: "The team of the message";
                    };
                    readonly bot_id: {
                        readonly type: "string";
                        readonly description: "The bot ID of the message";
                    };
                    readonly bot_profile: {
                        readonly type: "object";
                        readonly description: "The bot profile of the message";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The id of the bot profile";
                            };
                            readonly deleted: {
                                readonly type: "boolean";
                                readonly description: "Whether the bot profile was deleted";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the bot profile";
                            };
                            readonly updated: {
                                readonly type: "number";
                                readonly description: "The updated timestamp of the bot profile";
                            };
                            readonly app_id: {
                                readonly type: "string";
                                readonly description: "The app ID of the bot profile";
                            };
                            readonly team_id: {
                                readonly type: "string";
                                readonly description: "The team ID of the bot profile";
                            };
                        };
                    };
                    readonly app_id: {
                        readonly type: "string";
                        readonly description: "The app ID of the message";
                    };
                    readonly reply_count: {
                        readonly type: "number";
                        readonly description: "The reply count of the message";
                    };
                    readonly reply_users_count: {
                        readonly type: "number";
                        readonly description: "The reply users count of the message";
                    };
                    readonly latest_reply: {
                        readonly type: "string";
                        readonly description: "The latest reply of the message";
                    };
                    readonly reply_users: {
                        readonly type: "array";
                        readonly description: "The reply users of the message";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "A reply user of the message";
                        };
                    };
                    readonly subscribed: {
                        readonly type: "boolean";
                        readonly description: "Whether the user is subscribed to the message";
                    };
                    readonly last_read: {
                        readonly type: "string";
                        readonly description: "The last read of the message";
                    };
                    readonly is_locked: {
                        readonly type: "boolean";
                        readonly description: "Whether the message is locked";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment of the message";
                            readonly properties: {
                                readonly service_name: {
                                    readonly type: "string";
                                    readonly description: "The service name of the attachment";
                                };
                                readonly text: {
                                    readonly type: "string";
                                    readonly description: "The text of the attachment";
                                };
                                readonly fallback: {
                                    readonly type: "string";
                                    readonly description: "The fallback of the attachment";
                                };
                                readonly thumb_url: {
                                    readonly type: "string";
                                    readonly description: "The thumbnail URL of the attachment";
                                };
                                readonly thumb_width: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail width of the attachment";
                                };
                                readonly thumb_height: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail height of the attachment";
                                };
                                readonly id: {
                                    readonly type: "number";
                                    readonly description: "The ID of the attachment";
                                };
                            };
                        };
                    };
                    readonly blocks: {
                        readonly type: "array";
                        readonly description: "The blocks of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A block of the message";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the block";
                                };
                                readonly block_id: {
                                    readonly type: "string";
                                    readonly description: "The block ID of the block";
                                };
                                readonly elements: {
                                    readonly type: "array";
                                    readonly description: "The elements of the block";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly description: "An element of the block";
                                    };
                                };
                            };
                        };
                    };
                    readonly reactions: {
                        readonly type: "array";
                        readonly description: "The reactions of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A reaction of the message";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the reaction";
                                };
                                readonly users: {
                                    readonly type: "array";
                                    readonly description: "The users of the reaction";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly description: "The user IDs of a user of the reaction";
                                    };
                                };
                                readonly count: {
                                    readonly type: "number";
                                    readonly description: "The count of the number of users who used the reaction";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more messages to retrieve";
        };
        readonly pin_count: {
            readonly type: "number";
            readonly description: "The number of pinned messages in the conversation";
        };
        readonly response_metadata: {
            readonly type: "object";
            readonly description: "The response metadata of the conversation history";
            readonly properties: {
                readonly next_cursor: {
                    readonly type: "string";
                    readonly description: "The next cursor (i.e. next page token) of the conversation history";
                };
            };
        };
        readonly error: {
            readonly type: "string";
            readonly description: "The error of the conversation history";
        };
    };
};
export declare const SlackEnhancedConversationHistory: {
    readonly title: "Slack Enhanced Conversation History";
    readonly description: "A slack enhanced conversation history response";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the conversation history was retrieved successfully";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "The messages of the conversation history";
            readonly items: {
                readonly type: "object";
                readonly description: "A message of the conversation history";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the message";
                    };
                    readonly user: {
                        readonly type: "object";
                        readonly description: "The user that sent the message";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the user";
                            };
                            readonly real_name: {
                                readonly type: "string";
                                readonly description: "The real name of the user";
                            };
                        };
                    };
                    readonly text: {
                        readonly type: "string";
                        readonly description: "The text of the message";
                    };
                    readonly ts: {
                        readonly type: "string";
                        readonly description: "The timestamp of the message";
                    };
                    readonly team: {
                        readonly type: "string";
                        readonly description: "The team of the message";
                    };
                    readonly bot_id: {
                        readonly type: "string";
                        readonly description: "The bot ID of the message";
                    };
                    readonly bot_profile: {
                        readonly type: "object";
                        readonly description: "The bot profile of the message";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The id of the bot profile";
                            };
                            readonly deleted: {
                                readonly type: "boolean";
                                readonly description: "Whether the bot profile was deleted";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the bot profile";
                            };
                            readonly updated: {
                                readonly type: "number";
                                readonly description: "The updated timestamp of the bot profile";
                            };
                            readonly app_id: {
                                readonly type: "string";
                                readonly description: "The app ID of the bot profile";
                            };
                            readonly team_id: {
                                readonly type: "string";
                                readonly description: "The team ID of the bot profile";
                            };
                        };
                    };
                    readonly app_id: {
                        readonly type: "string";
                        readonly description: "The app ID of the message";
                    };
                    readonly reply_count: {
                        readonly type: "number";
                        readonly description: "The reply count of the message";
                    };
                    readonly reply_users_count: {
                        readonly type: "number";
                        readonly description: "The reply users count of the message";
                    };
                    readonly latest_reply: {
                        readonly type: "string";
                        readonly description: "The latest reply of the message";
                    };
                    readonly reply_users: {
                        readonly type: "array";
                        readonly description: "The reply users of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A reply user of the message";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "The ID of the reply user";
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the reply user";
                                };
                                readonly real_name: {
                                    readonly type: "string";
                                    readonly description: "The real name of the reply user";
                                };
                            };
                        };
                    };
                    readonly subscribed: {
                        readonly type: "boolean";
                        readonly description: "Whether the user is subscribed to the message";
                    };
                    readonly last_read: {
                        readonly type: "string";
                        readonly description: "The last read of the message";
                    };
                    readonly is_locked: {
                        readonly type: "boolean";
                        readonly description: "Whether the message is locked";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment of the message";
                            readonly properties: {
                                readonly service_name: {
                                    readonly type: "string";
                                    readonly description: "The service name of the attachment";
                                };
                                readonly text: {
                                    readonly type: "string";
                                    readonly description: "The text of the attachment";
                                };
                                readonly fallback: {
                                    readonly type: "string";
                                    readonly description: "The fallback of the attachment";
                                };
                                readonly thumb_url: {
                                    readonly type: "string";
                                    readonly description: "The thumbnail URL of the attachment";
                                };
                                readonly thumb_width: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail width of the attachment";
                                };
                                readonly thumb_height: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail height of the attachment";
                                };
                                readonly id: {
                                    readonly type: "number";
                                    readonly description: "The ID of the attachment";
                                };
                            };
                        };
                    };
                    readonly blocks: {
                        readonly type: "array";
                        readonly description: "The blocks of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A block of the message";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the block";
                                };
                                readonly block_id: {
                                    readonly type: "string";
                                    readonly description: "The block ID of the block";
                                };
                                readonly elements: {
                                    readonly type: "array";
                                    readonly description: "The elements of the block";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly description: "An element of the block";
                                    };
                                };
                            };
                        };
                    };
                    readonly reactions: {
                        readonly type: "array";
                        readonly description: "The reactions of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A reaction of the message";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the reaction";
                                };
                                readonly users: {
                                    readonly type: "array";
                                    readonly description: "The users of the reaction";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly description: "The user IDs of a user of the reaction";
                                    };
                                };
                                readonly count: {
                                    readonly type: "number";
                                    readonly description: "The count of the number of users who used the reaction";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more messages to retrieve";
        };
        readonly pin_count: {
            readonly type: "number";
            readonly description: "The number of pinned messages in the conversation";
        };
        readonly response_metadata: {
            readonly type: "object";
            readonly description: "The response metadata of the conversation history";
            readonly properties: {
                readonly next_cursor: {
                    readonly type: "string";
                    readonly description: "The next cursor (i.e. next page token) of the conversation history";
                };
            };
        };
        readonly error: {
            readonly type: "string";
            readonly description: "The error of the conversation history";
        };
    };
};
export declare const SlackConversationRepliesInput: {
    readonly title: "Slack Conversation Replies Input";
    readonly description: "A slack conversation replies input";
    readonly type: "object";
    readonly properties: {
        readonly channel: {
            readonly type: "string";
            readonly description: "The channel ID to retrieve replies from";
        };
        readonly ts: {
            readonly type: "string";
            readonly description: "The timestamp of the parent message";
        };
        readonly cursor: {
            readonly type: "string";
            readonly description: "The cursor (i.e. page token) to retrieve replies from";
        };
        readonly inclusive: {
            readonly type: "boolean";
            readonly description: "Whether to include messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified.";
        };
        readonly latest: {
            readonly type: "number";
            readonly description: "Only messages before this Unix timestamp will be included in results. Default is the current time.";
        };
        readonly limit: {
            readonly type: "number";
            readonly description: "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.";
        };
        readonly oldest: {
            readonly type: "number";
            readonly description: "Only messages after this Unix timestamp will be included in results. Default is 0.";
        };
    };
    readonly required: readonly ["channel", "ts"];
};
export declare const SlackConversationReplies: {
    readonly title: "Slack Conversation Replies";
    readonly description: "A slack conversation replies response";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the conversation replies were retrieved successfully";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "The messages of the conversation replies";
            readonly items: {
                readonly type: "object";
                readonly description: "A message of the conversation replies";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the message";
                    };
                    readonly user: {
                        readonly type: "string";
                        readonly description: "The user that sent the message";
                    };
                    readonly team: {
                        readonly type: "string";
                        readonly description: "The team ID of the message";
                    };
                    readonly reply_users_count: {
                        readonly type: "number";
                        readonly description: "The number of users who replied to the message";
                    };
                    readonly reply_users: {
                        readonly type: "array";
                        readonly description: "The users who replied to the message";
                        readonly items: {
                            readonly type: "string";
                            readonly description: "The user IDs of a user who replied to the message";
                        };
                    };
                    readonly text: {
                        readonly type: "string";
                        readonly description: "The text of the message";
                    };
                    readonly thread_ts: {
                        readonly type: "string";
                        readonly description: "The timestamp of the parent message";
                    };
                    readonly parent_user_id: {
                        readonly type: "string";
                        readonly description: "The user ID of the parent message";
                    };
                    readonly reply_count: {
                        readonly type: "number";
                        readonly description: "The number of replies to the message";
                    };
                    readonly subscribed: {
                        readonly type: "boolean";
                        readonly description: "Whether the user is subscribed to the message";
                    };
                    readonly last_read: {
                        readonly type: "string";
                        readonly description: "The timestamp of the last read message";
                    };
                    readonly is_locked: {
                        readonly type: "boolean";
                        readonly description: "Whether the message is locked";
                    };
                    readonly unread_count: {
                        readonly type: "number";
                        readonly description: "The number of unread messages";
                    };
                    readonly ts: {
                        readonly type: "string";
                        readonly description: "The timestamp of the message";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment of the message";
                            readonly properties: {
                                readonly service_name: {
                                    readonly type: "string";
                                    readonly description: "The service name of the attachment";
                                };
                                readonly text: {
                                    readonly type: "string";
                                    readonly description: "The text of the attachment";
                                };
                                readonly fallback: {
                                    readonly type: "string";
                                    readonly description: "The fallback of the attachment";
                                };
                                readonly thumb_url: {
                                    readonly type: "string";
                                    readonly description: "The thumbnail URL of the attachment";
                                };
                                readonly thumb_width: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail width of the attachment";
                                };
                                readonly thumb_height: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail height of the attachment";
                                };
                                readonly id: {
                                    readonly type: "number";
                                    readonly description: "The ID of the attachment";
                                };
                            };
                        };
                    };
                    readonly blocks: {
                        readonly type: "array";
                        readonly description: "The blocks of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A block of the message";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the block";
                                };
                                readonly block_id: {
                                    readonly type: "string";
                                    readonly description: "The block ID of the block";
                                };
                                readonly elements: {
                                    readonly type: "array";
                                    readonly description: "The elements of the block";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly description: "An element of the block";
                                    };
                                };
                            };
                        };
                    };
                    readonly reactions: {
                        readonly type: "array";
                        readonly description: "The reactions of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A reaction of the message";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the reaction";
                                };
                                readonly users: {
                                    readonly type: "array";
                                    readonly description: "The users of the reaction";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly description: "The user IDs of a user of the reaction";
                                    };
                                };
                                readonly count: {
                                    readonly type: "number";
                                    readonly description: "The count of the number of users who used the reaction";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more messages to retrieve";
        };
        readonly response_metadata: {
            readonly type: "object";
            readonly description: "The response metadata of the conversation replies";
            readonly properties: {
                readonly next_cursor: {
                    readonly type: "string";
                    readonly description: "The next cursor (i.e. next page token) of the conversation replies";
                };
            };
        };
        readonly error: {
            readonly type: "string";
            readonly description: "The error of the conversation replies";
        };
    };
};
export declare const SlackEnhancedConversationReplies: {
    readonly title: "Slack Enhanced Conversation Replies";
    readonly description: "An enhanced slack conversation replies response";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the conversation replies were retrieved successfully";
        };
        readonly messages: {
            readonly type: "array";
            readonly description: "The messages of the conversation replies";
            readonly items: {
                readonly type: "object";
                readonly description: "A message of the conversation replies";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the message";
                    };
                    readonly user: {
                        readonly type: "object";
                        readonly description: "The user that sent the message";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name of the user";
                            };
                            readonly real_name: {
                                readonly type: "string";
                                readonly description: "The real name of the user";
                            };
                        };
                    };
                    readonly team: {
                        readonly type: "string";
                        readonly description: "The team ID of the message";
                    };
                    readonly reply_users_count: {
                        readonly type: "number";
                        readonly description: "The number of users who replied to the message";
                    };
                    readonly reply_users: {
                        readonly type: "array";
                        readonly description: "The users who replied to the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "The user IDs of a user who replied to the message";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "string";
                                    readonly description: "The ID of the user";
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the user";
                                };
                                readonly real_name: {
                                    readonly type: "string";
                                    readonly description: "The real name of the user";
                                };
                            };
                        };
                    };
                    readonly text: {
                        readonly type: "string";
                        readonly description: "The text of the message";
                    };
                    readonly thread_ts: {
                        readonly type: "string";
                        readonly description: "The timestamp of the parent message";
                    };
                    readonly parent_user_id: {
                        readonly type: "string";
                        readonly description: "The user ID of the parent message";
                    };
                    readonly reply_count: {
                        readonly type: "number";
                        readonly description: "The number of replies to the message";
                    };
                    readonly subscribed: {
                        readonly type: "boolean";
                        readonly description: "Whether the user is subscribed to the message";
                    };
                    readonly last_read: {
                        readonly type: "string";
                        readonly description: "The timestamp of the last read message";
                    };
                    readonly is_locked: {
                        readonly type: "boolean";
                        readonly description: "Whether the message is locked";
                    };
                    readonly unread_count: {
                        readonly type: "number";
                        readonly description: "The number of unread messages";
                    };
                    readonly ts: {
                        readonly type: "string";
                        readonly description: "The timestamp of the message";
                    };
                    readonly attachments: {
                        readonly type: "array";
                        readonly description: "The attachments of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "An attachment of the message";
                            readonly properties: {
                                readonly service_name: {
                                    readonly type: "string";
                                    readonly description: "The service name of the attachment";
                                };
                                readonly text: {
                                    readonly type: "string";
                                    readonly description: "The text of the attachment";
                                };
                                readonly fallback: {
                                    readonly type: "string";
                                    readonly description: "The fallback of the attachment";
                                };
                                readonly thumb_url: {
                                    readonly type: "string";
                                    readonly description: "The thumbnail URL of the attachment";
                                };
                                readonly thumb_width: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail width of the attachment";
                                };
                                readonly thumb_height: {
                                    readonly type: "number";
                                    readonly description: "The thumbnail height of the attachment";
                                };
                                readonly id: {
                                    readonly type: "number";
                                    readonly description: "The ID of the attachment";
                                };
                            };
                        };
                    };
                    readonly blocks: {
                        readonly type: "array";
                        readonly description: "The blocks of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A block of the message";
                            readonly properties: {
                                readonly type: {
                                    readonly type: "string";
                                    readonly description: "The type of the block";
                                };
                                readonly block_id: {
                                    readonly type: "string";
                                    readonly description: "The block ID of the block";
                                };
                                readonly elements: {
                                    readonly type: "array";
                                    readonly description: "The elements of the block";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly description: "An element of the block";
                                    };
                                };
                            };
                        };
                    };
                    readonly reactions: {
                        readonly type: "array";
                        readonly description: "The reactions of the message";
                        readonly items: {
                            readonly type: "object";
                            readonly description: "A reaction of the message";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the reaction";
                                };
                                readonly users: {
                                    readonly type: "array";
                                    readonly description: "The users of the reaction";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly description: "The user IDs of a user of the reaction";
                                    };
                                };
                                readonly count: {
                                    readonly type: "number";
                                    readonly description: "The count of the number of users who used the reaction";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more messages to retrieve";
        };
        readonly response_metadata: {
            readonly type: "object";
            readonly description: "The response metadata of the conversation replies";
            readonly properties: {
                readonly next_cursor: {
                    readonly type: "string";
                    readonly description: "The next cursor (i.e. next page token) of the conversation replies";
                };
            };
        };
        readonly error: {
            readonly type: "string";
            readonly description: "The error of the conversation replies";
        };
    };
};
export declare const SlackPostMessageBody: {
    readonly title: "Slack Post Message Body";
    readonly description: "A slack post message body";
    readonly type: "object";
    readonly properties: {
        readonly channel: {
            readonly type: "string";
            readonly description: "The channel to post to";
        };
        readonly thread_ts: {
            readonly type: "string";
            readonly description: "The thread to post to";
        };
        readonly text: {
            readonly type: "string";
            readonly description: "The text to post";
        };
    };
    readonly required: readonly ["channel", "text"];
};
export declare const SlackPostMessage: {
    readonly title: "Slack Post Message";
    readonly description: "A slack post message response";
    readonly type: "object";
    readonly properties: {
        readonly ok: {
            readonly type: "boolean";
            readonly description: "Whether the message was posted successfully";
        };
        readonly channel: {
            readonly type: "string";
            readonly description: "The channel of the message post";
        };
        readonly ts: {
            readonly type: "string";
            readonly description: "The timestamp of the message post";
        };
        readonly message: {
            readonly type: "object";
            readonly description: "The message of the message post";
            readonly properties: {
                readonly text: {
                    readonly type: "string";
                    readonly description: "The text of the message post";
                };
                readonly username: {
                    readonly type: "string";
                    readonly description: "The username of the message post";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the message post";
                };
                readonly subtype: {
                    readonly type: "string";
                    readonly description: "The subtype of the message post";
                };
                readonly ts: {
                    readonly type: "string";
                    readonly description: "The timestamp of the message post";
                };
            };
        };
    };
};
