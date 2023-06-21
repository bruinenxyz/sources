"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackPostMessage = exports.SlackPostMessageBody = exports.SlackConversationReplies = exports.SlackConversationRepliesInput = exports.SlackEnhancedConversationHistory = exports.SlackConversationHistory = exports.SlackConversationHistoryInput = exports.SlackEnhancedConversations = exports.SlackConversations = exports.SlackConversationsInput = exports.SlackUser = exports.SlackUserInput = exports.SlackProfile = void 0;
exports.SlackProfile = {
    title: "SlackProfile",
    description: "A slack profile",
    type: "object",
    properties: {
        userId: {
            type: "string",
            description: "The user id of the profile",
        },
        title: {
            type: "string",
            description: "The title of the profile",
        },
        phone: {
            type: "string",
            description: "The phone of the profile",
        },
        skype: {
            type: "string",
            description: "The skype of the profile",
        },
        real_name: {
            type: "string",
            description: "The real name of the profile",
        },
        real_name_normalized: {
            type: "string",
            description: "The normalized real name of the profile",
        },
        display_name: {
            type: "string",
            description: "The display name of the profile",
        },
        display_name_normalized: {
            type: "string",
            description: "The normalized display name of the profile",
        },
        fields: {
            type: "object",
            description: "The fields of the profile",
        },
        status_text: {
            type: "string",
            description: "The status text of the profile",
        },
        status_emoji: {
            type: "string",
            description: "The status emoji of the profile",
        },
        status_expiration: {
            type: "number",
            description: "The status expiration of the profile",
        },
        avatar_hash: {
            type: "string",
            description: "The avatar hash of the profile",
        },
        start_date: {
            type: "string",
            description: "The start date of the profile",
        },
        pronouns: {
            type: "string",
            description: "The pronouns of the profile",
        },
        huddle_state: {
            type: "string",
            description: "The huddle state of the profile",
        },
        huddle_state_expiration_ts: {
            type: "number",
            description: "The huddle state expiration ts of the profile",
        },
        first_name: {
            type: "string",
            description: "The first name of the profile",
        },
        last_name: {
            type: "string",
            description: "The last name of the profile",
        },
    },
};
exports.SlackUserInput = {
    title: "Slack User Input",
    description: "The input for slack user",
    type: "object",
    properties: {
        user: {
            type: "string",
            description: "The user id",
        },
    },
    required: ["user"],
};
exports.SlackUser = {
    title: "Slack User",
    description: "A slack user",
    type: "object",
    properties: {
        id: {
            type: "string",
            description: "The id of the user",
        },
        team_id: {
            type: "string",
            description: "The team id of the user",
        },
        name: {
            type: "string",
            description: "The name of the user",
        },
        deleted: {
            type: "boolean",
            description: "Whether the user is deleted",
        },
        color: {
            type: "string",
            description: "The color of the user",
        },
        real_name: {
            type: "string",
            description: "The real name of the user",
        },
        tz: {
            type: "string",
            description: "The timezone of the user",
        },
        tz_label: {
            type: "string",
            description: "The timezone label of the user",
        },
        tz_offset: {
            type: "number",
            description: "The timezone offset of the user",
        },
        profile: {
            type: "object",
            description: "The profile of the user",
            properties: {
                avatar_hash: {
                    type: "string",
                    description: "The avatar hash of the user",
                },
                status_text: {
                    type: "string",
                    description: "The status text of the user",
                },
                status_emoji: {
                    type: "string",
                    description: "The status emoji of the user",
                },
                real_name: {
                    type: "string",
                    description: "The real name of the user",
                },
                display_name: {
                    type: "string",
                    description: "The display name of the user",
                },
                real_name_normalized: {
                    type: "string",
                    description: "The normalized real name of the user",
                },
                display_name_normalized: {
                    type: "string",
                    description: "The normalized display name of the user",
                },
                email: {
                    type: "string",
                    description: "The email of the user",
                },
                image_original: {
                    type: "string",
                    description: "The original image of the user",
                },
                team: {
                    type: "string",
                    description: "The team of the user",
                },
            },
        },
        is_admin: {
            type: "boolean",
            description: "Whether the user is an admin",
        },
        is_owner: {
            type: "boolean",
            description: "Whether the user is an owner",
        },
        is_primary_owner: {
            type: "boolean",
            description: "Whether the user is a primary owner",
        },
        is_restricted: {
            type: "boolean",
            description: "Whether the user is restricted",
        },
        is_ultra_restricted: {
            type: "boolean",
            description: "Whether the user is ultra restricted",
        },
        is_bot: {
            type: "boolean",
            description: "Whether the user is a bot",
        },
        is_app_user: {
            type: "boolean",
            description: "Whether the user is an app user",
        },
        updated: {
            type: "number",
            description: "The updated timestamp of the user",
        },
        has_2fa: {
            type: "boolean",
            description: "Whether the user has 2fa",
        },
    },
};
exports.SlackConversationsInput = {
    title: "Slack Conversations Input",
    description: "The input for slack conversations",
    type: "object",
    properties: {
        cursor: {
            type: "string",
            description: "The cursor (i.e. next page token) for slack conversations",
        },
        exclude_archived: {
            type: "boolean",
            description: "Whether to exclude archived conversations",
        },
        limit: {
            type: "number",
            description: "The max number of conversations to return",
        },
        types: {
            type: "string",
            description: "A comma separated list of the types of conversations to return. Defaults to public_channel. Additional types include mpim & im.",
        },
    },
};
exports.SlackConversations = {
    title: "Slack Conversations",
    description: "A slack conversations response",
    type: "object",
    properties: {
        ok: {
            type: "boolean",
            description: "Whether the conversations were retrieved successfully",
        },
        channels: {
            type: "array",
            description: "The array of conversations",
            items: {
                type: "object",
                description: "A conversation",
                properties: {
                    id: {
                        type: "string",
                        description: "The id of the conversation",
                    },
                    name: {
                        type: "string",
                        description: "The name of the conversation",
                    },
                    is_channel: {
                        type: "boolean",
                        description: "Whether the conversation is a channel",
                    },
                    is_group: {
                        type: "boolean",
                        description: "Whether the conversation is a group",
                    },
                    is_im: {
                        type: "boolean",
                        description: "Whether the conversation is an im",
                    },
                    created: {
                        type: "number",
                        description: "The created timestamp of the conversation",
                    },
                    creator: {
                        type: "string",
                        description: "The creator of the conversation",
                    },
                    is_archived: {
                        type: "boolean",
                        description: "Whether the conversation is archived",
                    },
                    is_general: {
                        type: "boolean",
                        description: "Whether the conversation is general",
                    },
                    unlinked: {
                        type: "number",
                        description: "The unlinked timestamp of the conversation",
                    },
                    name_normalized: {
                        type: "string",
                        description: "The normalized name of the conversation",
                    },
                    is_shared: {
                        type: "boolean",
                        description: "Whether the conversation is shared",
                    },
                    is_ext_shared: {
                        type: "boolean",
                        description: "Whether the conversation is externally shared",
                    },
                    is_org_shared: {
                        type: "boolean",
                        description: "Whether the conversation is org shared",
                    },
                    pending_shared: {
                        type: "array",
                        description: "The pending shared of the conversation",
                    },
                    is_pending_ext_shared: {
                        type: "boolean",
                        description: "Whether the conversation is pending externally shared",
                    },
                    is_member: {
                        type: "boolean",
                        description: "Whether the conversation is a member",
                    },
                    is_private: {
                        type: "boolean",
                        description: "Whether the conversation is private",
                    },
                    is_mpim: {
                        type: "boolean",
                        description: "Whether the conversation is mpim",
                    },
                    is_open: {
                        type: "boolean",
                        description: "Whether the conversation is open",
                    },
                    updated: {
                        type: "number",
                        description: "The updated timestamp of the conversation",
                    },
                    topic: {
                        type: "object",
                        description: "The topic of the conversation",
                        properties: {
                            value: {
                                type: "string",
                                description: "The description of the topic",
                            },
                            creator: {
                                type: "string",
                                description: "The creator of the topic",
                            },
                            last_set: {
                                type: "number",
                                description: "The last set timestamp of the topic",
                            },
                        },
                    },
                    purpose: {
                        type: "object",
                        description: "The purpose of the conversation",
                        properties: {
                            value: {
                                type: "string",
                                description: "The description of the purpose",
                            },
                            creator: {
                                type: "string",
                                description: "The creator of the purpose",
                            },
                            last_set: {
                                type: "number",
                                description: "The last set timestamp of the purpose",
                            },
                        },
                    },
                    priority: {
                        type: "number",
                        description: "The priority of the conversation",
                    },
                    previous_names: {
                        type: "array",
                        description: "The previous names of the conversation",
                        items: {
                            type: "string",
                            description: "A previous name of the conversation",
                        },
                    },
                    num_members: {
                        type: "number",
                        description: "The number of members of the conversation",
                    },
                },
            },
        },
        response_metadata: {
            type: "object",
            description: "The response metadata of the conversations",
            properties: {
                next_cursor: {
                    type: "string",
                    description: "The next cursor (i.e. next page token) of the conversations",
                },
            },
        },
        error: {
            type: "string",
            description: "The error of the conversations",
        },
    },
};
exports.SlackEnhancedConversations = {
    title: "Slack Enhanced Conversations",
    description: "A slack enhanced conversations response",
    type: "object",
    properties: {
        ok: {
            type: "boolean",
            description: "Whether the conversations were retrieved successfully",
        },
        channels: {
            type: "array",
            description: "The array of conversations",
            items: {
                type: "object",
                description: "A conversation",
                properties: {
                    id: {
                        type: "string",
                        description: "The id of the conversation",
                    },
                    name: {
                        type: "string",
                        description: "The name of the conversation",
                    },
                    is_channel: {
                        type: "boolean",
                        description: "Whether the conversation is a channel",
                    },
                    is_group: {
                        type: "boolean",
                        description: "Whether the conversation is a group",
                    },
                    is_im: {
                        type: "boolean",
                        description: "Whether the conversation is an im",
                    },
                    created: {
                        type: "number",
                        description: "The created timestamp of the conversation",
                    },
                    creator: {
                        type: "string",
                        description: "The creator of the conversation",
                    },
                    is_archived: {
                        type: "boolean",
                        description: "Whether the conversation is archived",
                    },
                    is_general: {
                        type: "boolean",
                        description: "Whether the conversation is general",
                    },
                    unlinked: {
                        type: "number",
                        description: "The unlinked timestamp of the conversation",
                    },
                    name_normalized: {
                        type: "string",
                        description: "The normalized name of the conversation",
                    },
                    is_shared: {
                        type: "boolean",
                        description: "Whether the conversation is shared",
                    },
                    is_ext_shared: {
                        type: "boolean",
                        description: "Whether the conversation is externally shared",
                    },
                    is_org_shared: {
                        type: "boolean",
                        description: "Whether the conversation is org shared",
                    },
                    pending_shared: {
                        type: "array",
                        description: "The pending shared of the conversation",
                    },
                    is_pending_ext_shared: {
                        type: "boolean",
                        description: "Whether the conversation is pending externally shared",
                    },
                    is_member: {
                        type: "boolean",
                        description: "Whether the conversation is a member",
                    },
                    is_private: {
                        type: "boolean",
                        description: "Whether the conversation is private",
                    },
                    is_mpim: {
                        type: "boolean",
                        description: "Whether the conversation is mpim",
                    },
                    is_open: {
                        type: "boolean",
                        description: "Whether the conversation is open",
                    },
                    updated: {
                        type: "number",
                        description: "The updated timestamp of the conversation",
                    },
                    topic: {
                        type: "object",
                        description: "The topic of the conversation",
                        properties: {
                            value: {
                                type: "string",
                                description: "The description of the topic",
                            },
                            creator: {
                                type: "string",
                                description: "The creator of the topic",
                            },
                            last_set: {
                                type: "number",
                                description: "The last set timestamp of the topic",
                            },
                        },
                    },
                    purpose: {
                        type: "object",
                        description: "The purpose of the conversation",
                        properties: {
                            value: {
                                type: "string",
                                description: "The description of the purpose",
                            },
                            creator: {
                                type: "string",
                                description: "The creator of the purpose",
                            },
                            last_set: {
                                type: "number",
                                description: "The last set timestamp of the purpose",
                            },
                        },
                    },
                    priority: {
                        type: "number",
                        description: "The priority of the conversation",
                    },
                    previous_names: {
                        type: "array",
                        description: "The previous names of the conversation",
                        items: {
                            type: "string",
                            description: "A previous name of the conversation",
                        },
                    },
                    num_members: {
                        type: "number",
                        description: "The number of members of the conversation",
                    },
                    members: {
                        type: "array",
                        description: "The members of the conversation",
                        items: {
                            type: "object",
                            description: "A member of the conversation",
                            properties: {
                                id: {
                                    type: "string",
                                    description: "The id of the member",
                                },
                                name: {
                                    type: "string",
                                    description: "The name of the member",
                                },
                                real_name: {
                                    type: "string",
                                    description: "The real name of the member",
                                },
                            },
                        },
                    },
                },
            },
        },
        response_metadata: {
            type: "object",
            description: "The response metadata of the conversations",
            properties: {
                next_cursor: {
                    type: "string",
                    description: "The next cursor (i.e. next page token) of the conversations",
                },
            },
        },
        error: {
            type: "string",
            description: "The error of the conversations",
        },
    },
};
exports.SlackConversationHistoryInput = {
    title: "Slack Conversation History Input",
    description: "A slack conversation history input",
    type: "object",
    properties: {
        channel: {
            type: "string",
            description: "The channel ID to retrieve history from",
        },
        cursor: {
            type: "string",
            description: "The cursor (i.e. page token) to retrieve history from",
        },
        inclusive: {
            type: "boolean",
            description: "Whether to include messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified.",
        },
        latest: {
            type: "number",
            description: "Only messages before this Unix timestamp will be included in results. Default is the current time.",
        },
        limit: {
            type: "number",
            description: "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
        },
        oldest: {
            type: "number",
            description: "Only messages after this Unix timestamp will be included in results. Default is 0.",
        },
    },
    required: ["channel"],
};
exports.SlackConversationHistory = {
    title: "Slack Conversation History",
    description: "A slack conversation history response",
    type: "object",
    properties: {
        ok: {
            type: "boolean",
            description: "Whether the conversation history was retrieved successfully",
        },
        messages: {
            type: "array",
            description: "The messages of the conversation history",
            items: {
                type: "object",
                description: "A message of the conversation history",
                properties: {
                    type: {
                        type: "string",
                        description: "The type of the message",
                    },
                    user: {
                        type: "string",
                        description: "The user that sent the message",
                    },
                    text: {
                        type: "string",
                        description: "The text of the message",
                    },
                    ts: {
                        type: "string",
                        description: "The timestamp of the message",
                    },
                    team: {
                        type: "string",
                        description: "The team of the message",
                    },
                    bot_id: {
                        type: "string",
                        description: "The bot ID of the message",
                    },
                    bot_profile: {
                        type: "object",
                        description: "The bot profile of the message",
                        properties: {
                            id: {
                                type: "string",
                                description: "The id of the bot profile",
                            },
                            deleted: {
                                type: "boolean",
                                description: "Whether the bot profile was deleted",
                            },
                            name: {
                                type: "string",
                                description: "The name of the bot profile",
                            },
                            updated: {
                                type: "number",
                                description: "The updated timestamp of the bot profile",
                            },
                            app_id: {
                                type: "string",
                                description: "The app ID of the bot profile",
                            },
                            team_id: {
                                type: "string",
                                description: "The team ID of the bot profile",
                            },
                        },
                    },
                    app_id: {
                        type: "string",
                        description: "The app ID of the message",
                    },
                    attachments: {
                        type: "array",
                        description: "The attachments of the message",
                        items: {
                            type: "object",
                            description: "An attachment of the message",
                            properties: {
                                service_name: {
                                    type: "string",
                                    description: "The service name of the attachment",
                                },
                                text: {
                                    type: "string",
                                    description: "The text of the attachment",
                                },
                                fallback: {
                                    type: "string",
                                    description: "The fallback of the attachment",
                                },
                                thumb_url: {
                                    type: "string",
                                    description: "The thumbnail URL of the attachment",
                                },
                                thumb_width: {
                                    type: "number",
                                    description: "The thumbnail width of the attachment",
                                },
                                thumb_height: {
                                    type: "number",
                                    description: "The thumbnail height of the attachment",
                                },
                                id: {
                                    type: "number",
                                    description: "The ID of the attachment",
                                },
                            },
                        },
                    },
                    blocks: {
                        type: "array",
                        description: "The blocks of the message",
                        items: {
                            type: "object",
                            description: "A block of the message",
                            properties: {
                                type: {
                                    type: "string",
                                    description: "The type of the block",
                                },
                                block_id: {
                                    type: "string",
                                    description: "The block ID of the block",
                                },
                                elements: {
                                    type: "array",
                                    description: "The elements of the block",
                                    items: {
                                        type: "object",
                                        description: "An element of the block",
                                    },
                                },
                            },
                        },
                    },
                    reactions: {
                        type: "array",
                        description: "The reactions of the message",
                        items: {
                            type: "object",
                            description: "A reaction of the message",
                            properties: {
                                name: {
                                    type: "string",
                                    description: "The name of the reaction",
                                },
                                users: {
                                    type: "array",
                                    description: "The users of the reaction",
                                    items: {
                                        type: "string",
                                        description: "The user IDs of a user of the reaction",
                                    },
                                },
                                count: {
                                    type: "number",
                                    description: "The count of the number of users who used the reaction",
                                },
                            },
                        },
                    },
                },
            },
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more messages to retrieve",
        },
        pin_count: {
            type: "number",
            description: "The number of pinned messages in the conversation",
        },
        response_metadata: {
            type: "object",
            description: "The response metadata of the conversation history",
            properties: {
                next_cursor: {
                    type: "string",
                    description: "The next cursor (i.e. next page token) of the conversation history",
                },
            },
        },
        error: {
            type: "string",
            description: "The error of the conversation history",
        },
    },
};
exports.SlackEnhancedConversationHistory = {
    title: "Slack Enhanced Conversation History",
    description: "A slack enhanced conversation history response",
    type: "object",
    properties: {
        ok: {
            type: "boolean",
            description: "Whether the conversation history was retrieved successfully",
        },
        messages: {
            type: "array",
            description: "The messages of the conversation history",
            items: {
                type: "object",
                description: "A message of the conversation history",
                properties: {
                    type: {
                        type: "string",
                        description: "The type of the message",
                    },
                    user: {
                        type: "object",
                        description: "The user that sent the message",
                        properties: {
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                            name: {
                                type: "string",
                                description: "The name of the user",
                            },
                            real_name: {
                                type: "string",
                                description: "The real name of the user",
                            },
                        },
                    },
                    text: {
                        type: "string",
                        description: "The text of the message",
                    },
                    ts: {
                        type: "string",
                        description: "The timestamp of the message",
                    },
                    team: {
                        type: "string",
                        description: "The team of the message",
                    },
                    bot_id: {
                        type: "string",
                        description: "The bot ID of the message",
                    },
                    bot_profile: {
                        type: "object",
                        description: "The bot profile of the message",
                        properties: {
                            id: {
                                type: "string",
                                description: "The id of the bot profile",
                            },
                            deleted: {
                                type: "boolean",
                                description: "Whether the bot profile was deleted",
                            },
                            name: {
                                type: "string",
                                description: "The name of the bot profile",
                            },
                            updated: {
                                type: "number",
                                description: "The updated timestamp of the bot profile",
                            },
                            app_id: {
                                type: "string",
                                description: "The app ID of the bot profile",
                            },
                            team_id: {
                                type: "string",
                                description: "The team ID of the bot profile",
                            },
                        },
                    },
                    app_id: {
                        type: "string",
                        description: "The app ID of the message",
                    },
                    attachments: {
                        type: "array",
                        description: "The attachments of the message",
                        items: {
                            type: "object",
                            description: "An attachment of the message",
                            properties: {
                                service_name: {
                                    type: "string",
                                    description: "The service name of the attachment",
                                },
                                text: {
                                    type: "string",
                                    description: "The text of the attachment",
                                },
                                fallback: {
                                    type: "string",
                                    description: "The fallback of the attachment",
                                },
                                thumb_url: {
                                    type: "string",
                                    description: "The thumbnail URL of the attachment",
                                },
                                thumb_width: {
                                    type: "number",
                                    description: "The thumbnail width of the attachment",
                                },
                                thumb_height: {
                                    type: "number",
                                    description: "The thumbnail height of the attachment",
                                },
                                id: {
                                    type: "number",
                                    description: "The ID of the attachment",
                                },
                            },
                        },
                    },
                    blocks: {
                        type: "array",
                        description: "The blocks of the message",
                        items: {
                            type: "object",
                            description: "A block of the message",
                            properties: {
                                type: {
                                    type: "string",
                                    description: "The type of the block",
                                },
                                block_id: {
                                    type: "string",
                                    description: "The block ID of the block",
                                },
                                elements: {
                                    type: "array",
                                    description: "The elements of the block",
                                    items: {
                                        type: "object",
                                        description: "An element of the block",
                                    },
                                },
                            },
                        },
                    },
                    reactions: {
                        type: "array",
                        description: "The reactions of the message",
                        items: {
                            type: "object",
                            description: "A reaction of the message",
                            properties: {
                                name: {
                                    type: "string",
                                    description: "The name of the reaction",
                                },
                                users: {
                                    type: "array",
                                    description: "The users of the reaction",
                                    items: {
                                        type: "string",
                                        description: "The user IDs of a user of the reaction",
                                    },
                                },
                                count: {
                                    type: "number",
                                    description: "The count of the number of users who used the reaction",
                                },
                            },
                        },
                    },
                },
            },
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more messages to retrieve",
        },
        pin_count: {
            type: "number",
            description: "The number of pinned messages in the conversation",
        },
        response_metadata: {
            type: "object",
            description: "The response metadata of the conversation history",
            properties: {
                next_cursor: {
                    type: "string",
                    description: "The next cursor (i.e. next page token) of the conversation history",
                },
            },
        },
        error: {
            type: "string",
            description: "The error of the conversation history",
        },
    },
};
exports.SlackConversationRepliesInput = {
    title: "Slack Conversation Replies Input",
    description: "A slack conversation replies input",
    type: "object",
    properties: {
        channel: {
            type: "string",
            description: "The channel ID to retrieve replies from",
        },
        ts: {
            type: "string",
            description: "The timestamp of the parent message",
        },
        cursor: {
            type: "string",
            description: "The cursor (i.e. page token) to retrieve replies from",
        },
        inclusive: {
            type: "boolean",
            description: "Whether to include messages with oldest or latest timestamps in results. Ignored unless either timestamp is specified.",
        },
        latest: {
            type: "number",
            description: "Only messages before this Unix timestamp will be included in results. Default is the current time.",
        },
        limit: {
            type: "number",
            description: "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached.",
        },
        oldest: {
            type: "number",
            description: "Only messages after this Unix timestamp will be included in results. Default is 0.",
        },
    },
    required: ["channel", "ts"],
};
exports.SlackConversationReplies = {
    title: "Slack Conversation Replies",
    description: "A slack conversation replies response",
    type: "object",
    properties: {
        ok: {
            type: "boolean",
            description: "Whether the conversation replies were retrieved successfully",
        },
        messages: {
            type: "array",
            description: "The messages of the conversation replies",
            items: {
                type: "object",
                description: "A message of the conversation replies",
                properties: {
                    type: {
                        type: "string",
                        description: "The type of the message",
                    },
                    user: {
                        type: "string",
                        description: "The user that sent the message",
                    },
                    text: {
                        type: "string",
                        description: "The text of the message",
                    },
                    thread_ts: {
                        type: "string",
                        description: "The timestamp of the parent message",
                    },
                    parent_user_id: {
                        type: "string",
                        description: "The user ID of the parent message",
                    },
                    reply_count: {
                        type: "number",
                        description: "The number of replies to the message",
                    },
                    subscribed: {
                        type: "boolean",
                        description: "Whether the user is subscribed to the message",
                    },
                    last_read: {
                        type: "string",
                        description: "The timestamp of the last read message",
                    },
                    unread_count: {
                        type: "number",
                        description: "The number of unread messages",
                    },
                    ts: {
                        type: "string",
                        description: "The timestamp of the message",
                    },
                    attachments: {
                        type: "array",
                        description: "The attachments of the message",
                        items: {
                            type: "object",
                            description: "An attachment of the message",
                            properties: {
                                service_name: {
                                    type: "string",
                                    description: "The service name of the attachment",
                                },
                                text: {
                                    type: "string",
                                    description: "The text of the attachment",
                                },
                                fallback: {
                                    type: "string",
                                    description: "The fallback of the attachment",
                                },
                                thumb_url: {
                                    type: "string",
                                    description: "The thumbnail URL of the attachment",
                                },
                                thumb_width: {
                                    type: "number",
                                    description: "The thumbnail width of the attachment",
                                },
                                thumb_height: {
                                    type: "number",
                                    description: "The thumbnail height of the attachment",
                                },
                                id: {
                                    type: "number",
                                    description: "The ID of the attachment",
                                },
                            },
                        },
                    },
                },
            },
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more messages to retrieve",
        },
        response_metadata: {
            type: "object",
            description: "The response metadata of the conversation replies",
            properties: {
                next_cursor: {
                    type: "string",
                    description: "The next cursor (i.e. next page token) of the conversation replies",
                },
            },
        },
        error: {
            type: "string",
            description: "The error of the conversation replies",
        },
    },
};
exports.SlackPostMessageBody = {
    title: "Slack Post Message Body",
    description: "A slack post message body",
    type: "object",
    properties: {
        channel: {
            type: "string",
            description: "The channel to post to",
        },
        thread_ts: {
            type: "string",
            description: "The thread to post to",
        },
        text: {
            type: "string",
            description: "The text to post",
        },
    },
    required: ["channel", "text"],
};
exports.SlackPostMessage = {
    title: "Slack Post Message",
    description: "A slack post message response",
    type: "object",
    properties: {
        ok: {
            type: "boolean",
            description: "Whether the message was posted successfully",
        },
        channel: {
            type: "string",
            description: "The channel of the message post",
        },
        ts: {
            type: "string",
            description: "The timestamp of the message post",
        },
        message: {
            type: "object",
            description: "The message of the message post",
            properties: {
                text: {
                    type: "string",
                    description: "The text of the message post",
                },
                username: {
                    type: "string",
                    description: "The username of the message post",
                },
                type: {
                    type: "string",
                    description: "The type of the message post",
                },
                subtype: {
                    type: "string",
                    description: "The subtype of the message post",
                },
                ts: {
                    type: "string",
                    description: "The timestamp of the message post",
                },
            },
        },
    },
};
