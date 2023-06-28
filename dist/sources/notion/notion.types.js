"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionDeleteBlockInput = exports.NotionAppendBlockChildren = exports.NotionAppendBlockChildrenBody = exports.NotionAppendBlockChildrenInput = exports.NotionCreatePageInDatabaseBody = exports.NotionCreatePageInPageBody = exports.NotionBlockChildren = exports.NotionBlockChildrenInput = exports.NotionBlock = exports.NotionBlockInput = exports.NotionComment = exports.NotionCommentOnDiscussionBody = exports.NotionCommentOnPageBody = exports.NotionComments = exports.NotionCommentsInput = exports.NotionQueryDatabase = exports.NotionQueryDatabaseBody = exports.NotionQueryDatabaseInput = exports.NotionDatabase = exports.NotionDatabaseInput = exports.NotionPageProperty = exports.NotionPagePropertyInput = exports.NotionPage = exports.NotionPageInput = exports.NotionSearch = exports.NotionSearchInput = exports.NotionUser = exports.NotionUserInput = exports.NotionUsers = exports.NotionUsersInput = exports.NotionProfile = void 0;
exports.NotionProfile = {
    type: "object",
    description: "A Notion user profile",
    properties: {
        id: {
            type: "string",
            description: "The ID of the user",
        },
        name: {
            type: "string",
            description: "The name of the user",
        },
        avatar_url: {
            type: "string",
            description: "The URL of the user's profile photo",
        },
        type: {
            type: "string",
            description: "The type of user",
        },
        email: {
            type: "string",
            description: "The email address of the user",
        },
    },
};
exports.NotionUsersInput = {
    type: "object",
    description: "The input for a list of Notion users",
    properties: {
        start_cursor: {
            type: "string",
            description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results",
        },
        page_size: {
            type: "number",
            description: "The number of items from the full list desired in the response. Maximum: 100",
        },
    },
};
exports.NotionUsers = {
    type: "object",
    description: "A list of Notion users",
    properties: {
        next_cursor: {
            type: "string",
            description: "The cursor value to use in the next request if there are more results",
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more results",
        },
        users: {
            type: "array",
            description: "The list of users",
            items: {
                type: "object",
                description: "A Notion user",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'user'",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the user",
                    },
                    type: {
                        type: "string",
                        description: "The type of user",
                    },
                    name: {
                        type: "string",
                        description: "The name of the user",
                    },
                    avatar_url: {
                        type: "string",
                        description: "The URL of the user's profile photo",
                    },
                    person: {
                        type: "object",
                        description: "The person object of the user",
                        properties: {
                            email: {
                                type: "string",
                                description: "The email address of the user",
                            },
                        },
                    },
                    bot: {
                        type: "object",
                        description: "The bot object of the user",
                        properties: {
                            owner: {
                                type: "object",
                                description: "The owner object of the bot",
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.NotionUserInput = {
    type: "object",
    description: "The input for a Notion user",
    properties: {
        userId: {
            type: "string",
            description: "The ID of the user",
        },
    },
    required: ["userId"],
};
exports.NotionUser = {
    type: "object",
    description: "A Notion user",
    properties: {
        object: {
            type: "string",
            description: "Always 'user'",
        },
        id: {
            type: "string",
            description: "The ID of the user",
        },
        type: {
            type: "string",
            description: "The type of user",
        },
        name: {
            type: "string",
            description: "The name of the user",
        },
        avatar_url: {
            type: "string",
            description: "The URL of the user's profile photo",
        },
        person: {
            type: "object",
            description: "The person object of the user",
            properties: {
                email: {
                    type: "string",
                    description: "The email address of the user",
                },
            },
        },
        bot: {
            type: "object",
            description: "The bot object of the user",
            properties: {
                owner: {
                    type: "object",
                    description: "The owner object of the bot",
                },
            },
        },
    },
};
exports.NotionSearchInput = {
    type: "object",
    description: "The input for a Notion search",
    properties: {
        query: {
            type: "string",
            description: "The text that the API compares page and database titles against.",
        },
        sortDirection: {
            type: "string",
            description: "The direction to sort in. Possible values include 'ascending' and 'descending'.",
        },
        sortTimestamp: {
            type: "string",
            description: "The time to sort by. Possible values include 'last_edited_time' and 'created_time'.",
        },
        filter: {
            type: "string",
            description: "The value to filter by - limits the request to search only pages or to search only databases. Possible values include 'page' and 'database'.",
        },
        start_cursor: {
            type: "string",
            description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.",
        },
        page_size: {
            type: "number",
            description: "The number of items from the full list desired in the response. Maximum: 100.",
        },
    },
};
exports.NotionSearch = {
    type: "object",
    description: "A Notion search",
    properties: {
        object: {
            type: "string",
            description: "Always 'list'",
        },
        next_cursor: {
            type: "string",
            description: "The cursor value to use in the next request if there are more results",
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more results",
        },
        type: {
            type: "string",
            description: "The type of search",
        },
        results: {
            type: "array",
            description: "The list of search results",
            items: {
                type: "object",
                description: "A search result",
                properties: {
                    object: {
                        type: "string",
                        description: "The type of the result object",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the result object",
                    },
                    created_time: {
                        type: "string",
                        description: "The time the result object was created",
                    },
                    last_edited_time: {
                        type: "string",
                        description: "The time the result object was last edited",
                    },
                    created_by: {
                        type: "object",
                        description: "The user who created the result object",
                        properties: {
                            object: {
                                type: "string",
                                description: "Always 'user'",
                            },
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                        },
                    },
                    last_edited_by: {
                        type: "object",
                        description: "The user who last edited the result object",
                        properties: {
                            object: {
                                type: "string",
                                description: "Always 'user'",
                            },
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                        },
                    },
                    cover: {
                        type: "object",
                        description: "The cover of the result object",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the cover",
                            },
                            external: {
                                type: "object",
                                description: "The external object of the cover",
                                properties: {
                                    url: {
                                        type: "string",
                                        description: "The URL of the cover",
                                    },
                                },
                            },
                        },
                    },
                    icon: {
                        type: "object",
                        description: "The icon of the result object",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the icon",
                            },
                            emoji: {
                                type: "string",
                                description: "The emoji of the icon",
                            },
                        },
                    },
                    parent: {
                        type: "object",
                        description: "The parent of the result object",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the parent",
                            },
                            database_id: {
                                type: "string",
                                description: "The ID of the database",
                            },
                        },
                    },
                    archived: {
                        type: "boolean",
                        description: "Whether the result object is archived",
                    },
                    url: {
                        type: "string",
                        description: "The URL of the result object",
                    },
                    properties: {
                        type: "object",
                        description: "The properties of the result object",
                    },
                },
            },
        },
    },
};
exports.NotionPageInput = {
    type: "object",
    description: "The input for a Notion page",
    properties: {
        pageId: {
            type: "string",
            description: "The ID of the page",
        },
        filterProperties: {
            type: "string",
            description: "A comma-separated list of page property value IDs associated with the page. Use this param to limit the response to a specific page property value or values. To retrieve multiple properties, specify each page property ID. For example: 'iAk8,b7dh,17T4'.",
        },
    },
    required: ["pageId"],
};
exports.NotionPage = {
    type: "object",
    description: "A Notion page. Page properties are limited to up to 25 references per page property. To retrieve data related to properties that have more than 25 references, use the Retrieve a page property endpoint. ",
    properties: {
        object: {
            type: "string",
            description: "Always 'page'",
        },
        id: {
            type: "string",
            description: "The ID of the page",
        },
        created_time: {
            type: "string",
            description: "The time the page was created",
        },
        last_edited_time: {
            type: "string",
            description: "The time the page was last edited",
        },
        created_by: {
            type: "object",
            description: "The user who created the page",
            properties: {
                object: {
                    type: "string",
                    description: "Always 'user'",
                },
                id: {
                    type: "string",
                    description: "The ID of the user",
                },
            },
        },
        last_edited_by: {
            type: "object",
            description: "The user who last edited the page",
            properties: {
                object: {
                    type: "string",
                    description: "Always 'user'",
                },
                id: {
                    type: "string",
                    description: "The ID of the user",
                },
            },
        },
        cover: {
            type: "object",
            description: "The cover of the page",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the cover",
                },
                external: {
                    type: "object",
                    description: "The external object of the cover",
                    properties: {
                        url: {
                            type: "string",
                            description: "The URL of the cover",
                        },
                    },
                },
            },
        },
        icon: {
            type: "object",
            description: "The icon of the page",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the icon",
                },
                emoji: {
                    type: "string",
                    description: "The emoji of the icon",
                },
            },
        },
        parent: {
            type: "object",
            description: "The parent of the page",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the parent",
                },
                database_id: {
                    type: "string",
                    description: "The ID of the database",
                },
            },
        },
        archived: {
            type: "boolean",
            description: "Whether the page is archived",
        },
        properties: {
            type: "object",
            description: "The properties of the page",
        },
        url: {
            type: "string",
            description: "The URL of the page",
        },
    },
};
exports.NotionPagePropertyInput = {
    type: "object",
    description: "The input for a Notion page property",
    properties: {
        pageId: {
            type: "string",
            description: "The ID of the page",
        },
        propertyId: {
            type: "string",
            description: "The ID of the property",
        },
        page_size: {
            type: "integer",
            description: "The number of results to return. The maximum page size is 100. If left blank, the default of 100 is used.",
        },
        start_cursor: {
            type: "string",
            description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.",
        },
    },
    required: ["pageId", "propertyId"],
};
exports.NotionPageProperty = {
    type: "object",
    description: "A Notion page property",
    properties: {
        object: {
            type: "string",
            description: "The type of the response object",
        },
        id: {
            type: "string",
            description: "The ID of the page property",
        },
        type: {
            type: "string",
            description: "The type of the page property",
        },
        number: {
            type: "number",
            description: "The number of the page property",
        },
        next_cursor: {
            type: "string",
            description: "The cursor for the next page of results",
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more results",
        },
        next_url: {
            type: "string",
            description: "The URL for the next page of results",
        },
        property_item: {
            type: "object",
            description: "The property item of the page property",
            properties: {
                id: {
                    type: "string",
                    description: "The ID of the property item",
                },
                type: {
                    type: "string",
                    description: "The type of the property item",
                },
                next_url: {
                    type: "string",
                },
                rich_text: {
                    type: "object",
                    description: "The rich text of the property item",
                },
                rollup: {
                    type: "object",
                    description: "The rollup of the property item",
                },
            },
        },
        results: {
            type: "array",
            description: "The results of the page property",
            items: {
                type: "object",
                description: "The result of the page property",
                properties: {
                    object: {
                        type: "string",
                        description: "The type of the result object",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the result",
                    },
                    type: {
                        type: "string",
                        description: "The type of the result",
                    },
                    relation: {
                        type: "object",
                        description: "The relation of the result",
                        properties: {
                            id: {
                                type: "string",
                                description: "The ID of the relation",
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.NotionDatabaseInput = {
    type: "object",
    description: "The input for a Notion database",
    properties: {
        databaseId: {
            type: "string",
            description: "The ID of the database",
        },
    },
    required: ["databaseId"],
};
exports.NotionDatabase = {
    type: "object",
    description: "A Notion database",
    properties: {
        object: {
            type: "string",
            description: "The type of the response object",
        },
        id: {
            type: "string",
            description: "The ID of the database",
        },
        created_time: {
            type: "string",
            description: "The time the database was created",
        },
        last_edited_time: {
            type: "string",
            description: "The time the database was last edited",
        },
        icon: {
            type: "object",
            description: "The icon of the database",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the icon",
                },
                emoji: {
                    type: "string",
                    description: "The emoji of the icon",
                },
            },
        },
        cover: {
            type: "object",
            description: "The cover of the database",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the cover",
                },
                external: {
                    type: "object",
                    description: "The external object of the cover",
                    properties: {
                        url: {
                            type: "string",
                            description: "The URL of the cover",
                        },
                    },
                },
            },
        },
        url: {
            type: "string",
            description: "The URL of the database",
        },
        title: {
            type: "array",
            description: "The title of the database",
            items: {
                type: "object",
                description: "The title object of the database",
                properties: {
                    type: {
                        type: "string",
                        description: "The type of the title",
                    },
                    text: {
                        type: "object",
                        description: "The text of the title",
                        properties: {
                            content: {
                                type: "string",
                                description: "The content of the title",
                            },
                            link: {
                                type: "string",
                                description: "The link of the title",
                            },
                        },
                    },
                    annotations: {
                        type: "object",
                        description: "The annotations of the title",
                        properties: {
                            bold: {
                                type: "boolean",
                                description: "Whether the title is bold",
                            },
                            italic: {
                                type: "boolean",
                                description: "Whether the title is italic",
                            },
                            strikethrough: {
                                type: "boolean",
                                description: "Whether the title is strikethrough",
                            },
                            underline: {
                                type: "boolean",
                                description: "Whether the title is underlined",
                            },
                            code: {
                                type: "boolean",
                                description: "Whether the title is code",
                            },
                            color: {
                                type: "string",
                                description: "The color of the title",
                            },
                        },
                    },
                    plain_text: {
                        type: "string",
                        description: "The plain text of the title",
                    },
                    href: {
                        type: "string",
                        description: "The href of the title",
                    },
                },
            },
        },
        description: {
            type: "array",
            description: "The description of the database",
            items: {
                type: "object",
                description: "The title object of the database",
                properties: {
                    type: {
                        type: "string",
                        description: "The type of the title",
                    },
                    text: {
                        type: "object",
                        description: "The text of the title",
                        properties: {
                            content: {
                                type: "string",
                                description: "The content of the title",
                            },
                            link: {
                                type: "string",
                                description: "The link of the title",
                            },
                        },
                    },
                    annotations: {
                        type: "object",
                        description: "The annotations of the title",
                        properties: {
                            bold: {
                                type: "boolean",
                                description: "Whether the title is bold",
                            },
                            italic: {
                                type: "boolean",
                                description: "Whether the title is italic",
                            },
                            strikethrough: {
                                type: "boolean",
                                description: "Whether the title is strikethrough",
                            },
                            underline: {
                                type: "boolean",
                                description: "Whether the title is underlined",
                            },
                            code: {
                                type: "boolean",
                                description: "Whether the title is code",
                            },
                            color: {
                                type: "string",
                                description: "The color of the title",
                            },
                        },
                    },
                    plain_text: {
                        type: "string",
                        description: "The plain text of the title",
                    },
                    href: {
                        type: "string",
                        description: "The href of the title",
                    },
                },
            },
        },
        properties: {
            type: "object",
            description: "The properties of the database",
        },
        parent: {
            type: "object",
            description: "The parent of the database",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the parent",
                },
                page_id: {
                    type: "string",
                    description: "The page ID of the parent",
                },
            },
        },
        archived: {
            type: "boolean",
            description: "Whether the database is archived",
        },
        is_inline: {
            type: "boolean",
            description: "Whether the database is inline",
        },
    },
};
exports.NotionQueryDatabaseInput = {
    type: "object",
    description: "The input for a Notion database query",
    properties: {
        databaseId: {
            type: "string",
            description: "The ID of the database",
        },
        filterProperties: {
            type: "string",
            description: "A list of comma-separated page property value IDs associated with the database. Use this param to limit the response to a specific page property value or values for pages that meet the filter criteria. For example: 'iAk8,b7dh,17T4'.",
        },
    },
    required: ["databaseId"],
};
exports.NotionQueryDatabaseBody = {
    type: "object",
    description: "The body for a Notion database query",
    properties: {
        filter: {
            type: "object",
            description: "When supplied, limits which pages are returned based on the filter conditions. Refer to https://developers.notion.com/reference/post-database-query-filter for more on constructing the filter object.",
        },
        sorts: {
            type: "array",
            description: "When supplied, sorts the results based on the sort conditions. Refer to https://developers.notion.com/reference/post-database-query-sort for more on constructing the sorts array.",
        },
        start_cursor: {
            type: "string",
            description: "When supplied, returns a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.",
        },
        page_size: {
            type: "number",
            description: "The number of items from the full list desired in the response. Maximum: 100. Default: 100.",
        },
    },
};
exports.NotionQueryDatabase = {
    type: "object",
    description: "The response for a Notion database query",
    properties: {
        object: {
            type: "string",
            description: "The object type of the database query response",
        },
        next_cursor: {
            type: "string",
            description: "The next cursor of the database query response",
        },
        has_more: {
            type: "boolean",
            description: "Whether the database query response has more",
        },
        type: {
            type: "string",
            description: "The type of the database query response",
        },
        page: {
            type: "object",
            description: "The page of the database query response",
        },
        results: {
            type: "array",
            description: "The results of the database query response",
            items: {
                type: "object",
                description: "A result object of the database query response",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'page'",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the page",
                    },
                    created_time: {
                        type: "string",
                        description: "The time the page was created",
                    },
                    last_edited_time: {
                        type: "string",
                        description: "The time the page was last edited",
                    },
                    created_by: {
                        type: "object",
                        description: "The user who created the page",
                        properties: {
                            object: {
                                type: "string",
                                description: "Always 'user'",
                            },
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                        },
                    },
                    last_edited_by: {
                        type: "object",
                        description: "The user who last edited the page",
                        properties: {
                            object: {
                                type: "string",
                                description: "Always 'user'",
                            },
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                        },
                    },
                    cover: {
                        type: "object",
                        description: "The cover of the page",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the cover",
                            },
                            external: {
                                type: "object",
                                description: "The external object of the cover",
                                properties: {
                                    url: {
                                        type: "string",
                                        description: "The URL of the cover",
                                    },
                                },
                            },
                        },
                    },
                    icon: {
                        type: "object",
                        description: "The icon of the page",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the icon",
                            },
                            emoji: {
                                type: "string",
                                description: "The emoji of the icon",
                            },
                        },
                    },
                    parent: {
                        type: "object",
                        description: "The parent of the page",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the parent",
                            },
                            database_id: {
                                type: "string",
                                description: "The ID of the database",
                            },
                        },
                    },
                    archived: {
                        type: "boolean",
                        description: "Whether the page is archived",
                    },
                    properties: {
                        type: "object",
                        description: "The properties of the page",
                    },
                    url: {
                        type: "string",
                        description: "The URL of the page",
                    },
                },
            },
        },
    },
};
exports.NotionCommentsInput = {
    type: "object",
    description: "The input for a Notion comments query",
    properties: {
        block_id: {
            type: "string",
            description: "The ID of the block",
        },
        start_cursor: {
            type: "string",
            description: "When supplied, returns a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.",
        },
        page_size: {
            type: "number",
            description: "The number of items from the full list desired in the response. Maximum: 100. Default: 100.",
        },
    },
    required: ["block_id"],
};
exports.NotionComments = {
    type: "object",
    description: "The response for a Notion comments query",
    properties: {
        object: {
            type: "string",
            description: "The object type of the comments query response",
        },
        next_cursor: {
            type: "string",
            description: "The next cursor of the comments query response",
        },
        has_more: {
            type: "boolean",
            description: "Whether the comments query response has more",
        },
        type: {
            type: "string",
            description: "The type of the comments query response",
        },
        comment: {
            type: "object",
            description: "The comment of the comments query response",
        },
        results: {
            type: "array",
            description: "The results of the comments query response",
            items: {
                type: "object",
                description: "A result object of the comments query response",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'comment'",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the comment",
                    },
                    parent: {
                        type: "object",
                        description: "The parent of the comment",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the parent",
                            },
                            page_id: {
                                type: "string",
                                description: "The ID of the page",
                            },
                        },
                    },
                    discussion_id: {
                        type: "string",
                        description: "The ID of the discussion",
                    },
                    created_time: {
                        type: "string",
                        description: "The time the comment was created",
                    },
                    last_edited_time: {
                        type: "string",
                        description: "The time the comment was last edited",
                    },
                    created_by: {
                        type: "object",
                        description: "The user who created the comment",
                        properties: {
                            object: {
                                type: "string",
                                description: "Always 'user'",
                            },
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                        },
                    },
                    rich_text: {
                        type: "array",
                        description: "The rich text of the comment",
                        items: {
                            type: "object",
                            description: "A rich text object of the comment",
                            properties: {
                                type: {
                                    type: "string",
                                    description: "The type of the rich text",
                                },
                                text: {
                                    type: "object",
                                    description: "The text of the rich text",
                                    properties: {
                                        content: {
                                            type: "string",
                                            description: "The content of the text",
                                        },
                                        link: {
                                            type: "string",
                                            description: "The link of the text",
                                        },
                                    },
                                },
                                annotations: {
                                    type: "object",
                                    description: "The annotations of the rich text",
                                    properties: {
                                        bold: {
                                            type: "boolean",
                                            description: "Whether the rich text is bold",
                                        },
                                        italic: {
                                            type: "boolean",
                                            description: "Whether the rich text is italic",
                                        },
                                        strikethrough: {
                                            type: "boolean",
                                            description: "Whether the rich text is strikethrough",
                                        },
                                        underline: {
                                            type: "boolean",
                                            description: "Whether the rich text is underline",
                                        },
                                        code: {
                                            type: "boolean",
                                            description: "Whether the rich text is code",
                                        },
                                        color: {
                                            type: "string",
                                            description: "The color of the rich text",
                                        },
                                    },
                                },
                                plain_text: {
                                    type: "string",
                                    description: "The plain text of the rich text",
                                },
                                href: {
                                    type: "string",
                                    description: "The href of the rich text",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
exports.NotionCommentOnPageBody = {
    type: "object",
    description: "The body for a Notion comment on page request",
    properties: {
        parent: {
            type: "object",
            description: "The parent of the comment",
            properties: {
                page_id: {
                    type: "string",
                    description: "The ID of the page",
                },
            },
            required: ["page_id"],
        },
        rich_text: {
            type: "array",
            description: "The rich text of the comment",
            items: {
                type: "object",
                description: "A rich text object of the comment. For more information on creating a rich text object, see https://developers.notion.com/reference/rich-text",
            },
        },
    },
    required: ["parent", "rich_text"],
};
exports.NotionCommentOnDiscussionBody = {
    type: "object",
    description: "The body for a Notion comment on discussion request",
    properties: {
        discussion_id: {
            type: "string",
            description: "The ID of the discussion",
        },
        rich_text: {
            type: "array",
            description: "The rich text of the comment",
            items: {
                type: "object",
                description: "A rich text object of the comment. For more information on creating a rich text object, see https://developers.notion.com/reference/rich-text",
            },
        },
    },
    required: ["discussion_id", "rich_text"],
};
exports.NotionComment = {
    type: "object",
    description: "The response for a Notion comment request",
    properties: {
        object: {
            type: "string",
            description: "Always 'comment'",
        },
        id: {
            type: "string",
            description: "The ID of the comment",
        },
        parent: {
            type: "object",
            description: "The parent of the comment",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the parent",
                },
                page_id: {
                    type: "string",
                    description: "The ID of the page",
                },
            },
        },
        discussion_id: {
            type: "string",
            description: "The ID of the discussion",
        },
        created_time: {
            type: "string",
            description: "The time the comment was created",
        },
        last_edited_time: {
            type: "string",
            description: "The time the comment was last edited",
        },
        created_by: {
            type: "object",
            description: "The user who created the comment",
            properties: {
                object: {
                    type: "string",
                    description: "Always 'user'",
                },
                id: {
                    type: "string",
                    description: "The ID of the user",
                },
            },
        },
        rich_text: {
            type: "array",
            description: "The rich text of the comment",
            items: {
                type: "object",
                description: "A rich text object of the comment",
                properties: {
                    type: {
                        type: "string",
                        description: "The type of the rich text",
                    },
                    text: {
                        type: "object",
                        description: "The text of the rich text",
                        properties: {
                            content: {
                                type: "string",
                                description: "The content of the text",
                            },
                            link: {
                                type: "string",
                                description: "The link of the text",
                            },
                        },
                    },
                    annotations: {
                        type: "object",
                        description: "The annotations of the rich text",
                        properties: {
                            bold: {
                                type: "boolean",
                                description: "Whether the rich text is bold",
                            },
                            italic: {
                                type: "boolean",
                                description: "Whether the rich text is italic",
                            },
                            strikethrough: {
                                type: "boolean",
                                description: "Whether the rich text is strikethrough",
                            },
                            underline: {
                                type: "boolean",
                                description: "Whether the rich text is underline",
                            },
                            code: {
                                type: "boolean",
                                description: "Whether the rich text is code",
                            },
                            color: {
                                type: "string",
                                description: "The color of the rich text",
                            },
                        },
                    },
                    plain_text: {
                        type: "string",
                        description: "The plain text of the rich text",
                    },
                    href: {
                        type: "string",
                        description: "The href of the rich text",
                    },
                },
            },
        },
    },
};
exports.NotionBlockInput = {
    type: "object",
    description: "The input for a Notion block request",
    properties: {
        blockId: {
            type: "string",
            description: "The ID of the block",
        },
    },
    required: ["blockId"],
};
exports.NotionBlock = {
    type: "object",
    description: "The response for a Notion block request",
    properties: {
        object: {
            type: "string",
            description: "Always 'block'",
        },
        id: {
            type: "string",
            description: "The ID of the block",
        },
        parent: {
            type: "object",
            description: "The parent of the block",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the parent",
                },
                page_id: {
                    type: "string",
                    description: "The ID of the page",
                },
            },
        },
        created_time: {
            type: "string",
            description: "The time the block was created",
        },
        last_edited_time: {
            type: "string",
            description: "The time the block was last edited",
        },
        created_by: {
            type: "object",
            description: "The user who created the block",
            properties: {
                object: {
                    type: "string",
                    description: "Always 'user'",
                },
                id: {
                    type: "string",
                    description: "The ID of the user",
                },
            },
        },
        last_edited_by: {
            type: "object",
            description: "The user who last edited the block",
            properties: {
                object: {
                    type: "string",
                    description: "Always 'user'",
                },
                id: {
                    type: "string",
                    description: "The ID of the user",
                },
            },
        },
        has_children: {
            type: "boolean",
            description: "Whether the block has children",
        },
        archived: {
            type: "boolean",
            description: "Whether the block is archived",
        },
        type: {
            type: "string",
            description: "The type of the block. This value is also a key in the block object, the value of which is an object that contains the block content and annotations. For more information on block types, see https://developers.notion.com/reference/block",
        },
        is_toggleable: {
            type: "boolean",
            description: "Whether the block is toggleable",
        },
    },
};
exports.NotionBlockChildrenInput = {
    type: "object",
    description: "The input for a Notion block children request",
    properties: {
        blockId: {
            type: "string",
            description: "The ID of the block",
        },
        startCursor: {
            type: "string",
            description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.",
        },
        pageSize: {
            type: "number",
            description: "The number of items from the full list desired in the response. Maximum: 100",
        },
    },
    required: ["blockId"],
};
exports.NotionBlockChildren = {
    type: "object",
    description: "The response for a Notion block children request",
    properties: {
        object: {
            type: "string",
            description: "Always 'list'",
        },
        next_cursor: {
            type: "string",
            description: "If there are more results, the response will contain a next_cursor property with the cursor value to use in the next request to fetch the next page of results.",
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more results to fetch using next_cursor",
        },
        type: {
            type: "string",
            description: "The type of the elements in the results array",
        },
        block: {
            type: "object",
            description: "The block of the results",
        },
        results: {
            type: "array",
            description: "The results of the request",
            items: {
                type: "object",
                description: "A block object",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'block'",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the block",
                    },
                    parent: {
                        type: "object",
                        description: "The parent of the block",
                        properties: {
                            type: {
                                type: "string",
                                description: "The type of the parent",
                            },
                            page_id: {
                                type: "string",
                                description: "The ID of the page",
                            },
                        },
                    },
                    created_time: {
                        type: "string",
                        description: "The time the block was created",
                    },
                    last_edited_time: {
                        type: "string",
                        description: "The time the block was last edited",
                    },
                    created_by: {
                        type: "object",
                        description: "The user who created the block",
                        properties: {
                            object: {
                                type: "string",
                                description: "Always 'user'",
                            },
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                        },
                    },
                    last_edited_by: {
                        type: "object",
                        description: "The user who last edited the block",
                        properties: {
                            object: {
                                type: "string",
                                description: "Always 'user'",
                            },
                            id: {
                                type: "string",
                                description: "The ID of the user",
                            },
                        },
                    },
                    has_children: {
                        type: "boolean",
                        description: "Whether the block has children",
                    },
                    archived: {
                        type: "boolean",
                        description: "Whether the block is archived",
                    },
                    type: {
                        type: "string",
                        description: "The type of the block. This value is also a key in the block object, the value of which is an object that contains the block content and annotations. For more information on block types, see https://developers.notion.com/reference/block",
                    },
                    is_toggleable: {
                        type: "boolean",
                        description: "Whether the block is toggleable",
                    },
                },
            },
        },
    },
};
exports.NotionCreatePageInPageBody = {
    type: "object",
    description: "The body for a Notion create page in page request",
    properties: {
        parent: {
            type: "object",
            description: "The parent of the page",
            properties: {
                page_id: {
                    type: "string",
                    description: "The ID of the parent page",
                },
            },
        },
        properties: {
            type: "object",
            description: "The properties of the page",
            properties: {
                title: {
                    type: "string",
                    description: "The title of the page",
                },
            },
        },
        children: {
            type: "array",
            description: "The children of the page as an array of block objects",
            items: {
                type: "object",
                description: "A block object. For more information on block objects, see https://developers.notion.com/reference/block",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'block'",
                    },
                    type: {
                        type: "string",
                        description: "The type of the block",
                    },
                },
            },
        },
        icon: {
            type: "object",
            description: "The icon of the new page. Either an emoji object or an external file object.",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the icon",
                },
                emoji: {
                    type: "string",
                    description: "The emoji of the icon",
                },
                file: {
                    type: "object",
                    description: "The external file of the icon. For more information on constructing a file object, see https://developers.notion.com/reference/file-object",
                },
            },
        },
        cover: {
            type: "object",
            description: "The cover of the new page. Takes the form of a file object. For more information on constructing a file object, see https://developers.notion.com/reference/file-object",
        },
    },
    required: ["parent", "properties"],
};
exports.NotionCreatePageInDatabaseBody = {
    type: "object",
    description: "The body for a Notion create page in database request",
    properties: {
        parent: {
            type: "object",
            description: "The parent of the page",
            properties: {
                database_id: {
                    type: "string",
                    description: "The ID of the parent database",
                },
            },
        },
        properties: {
            type: "object",
            description: "The properties of the page. The schema must match the parent database's properties",
        },
        children: {
            type: "array",
            description: "The children of the page as an array of block objects",
            items: {
                type: "object",
                description: "A block object. For more information on block objects, see https://developers.notion.com/reference/block",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'block'",
                    },
                    type: {
                        type: "string",
                        description: "The type of the block",
                    },
                },
            },
        },
        icon: {
            type: "object",
            description: "The icon of the new page. Either an emoji object or an external file object.",
            properties: {
                type: {
                    type: "string",
                    description: "The type of the icon",
                },
                emoji: {
                    type: "string",
                    description: "The emoji of the icon",
                },
                file: {
                    type: "object",
                    description: "The external file of the icon. For more information on constructing a file object, see https://developers.notion.com/reference/file-object",
                },
            },
        },
        cover: {
            type: "object",
            description: "The cover of the new page. Takes the form of a file object. For more information on constructing a file object, see https://developers.notion.com/reference/file-object",
        },
    },
    required: ["parent", "properties"],
};
exports.NotionAppendBlockChildrenInput = {
    type: "object",
    description: "The input for a Notion append block children request",
    properties: {
        blockId: {
            type: "string",
            description: "The ID of the block to append children to",
        },
    },
    required: ["blockId"],
};
exports.NotionAppendBlockChildrenBody = {
    type: "object",
    description: "The body for a Notion append block children request",
    properties: {
        children: {
            type: "array",
            description: "The children of the block as an array of block objects",
            items: {
                type: "object",
                description: "A block object. For more information on block objects, see https://developers.notion.com/reference/block",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'block'",
                    },
                    type: {
                        type: "string",
                        description: "The type of the block",
                    },
                },
            },
        },
    },
    required: ["children"],
};
exports.NotionAppendBlockChildren = {
    type: "object",
    description: "The response for a Notion append block children request",
    properties: {
        object: {
            type: "string",
            description: "Always 'list'",
        },
        next_cursor: {
            type: "null",
            description: "The cursor value to continue pagination. This will be null if no further results exist",
        },
        has_more: {
            type: "boolean",
            description: "Whether there are more results after this page",
        },
        type: {
            type: "string",
            description: "The type of the results",
        },
        block: {
            type: "object",
            description: "The block that was appended to",
        },
        results: {
            type: "array",
            description: "The blocks that were appended",
            items: {
                type: "object",
                description: "A block object that was appended",
                properties: {
                    object: {
                        type: "string",
                        description: "Always 'block'",
                    },
                    type: {
                        type: "string",
                        description: "The type of the block. This value is also a key in the plock object that contains the block content.",
                    },
                    id: {
                        type: "string",
                        description: "The ID of the block",
                    },
                    createdTime: {
                        type: "string",
                        description: "The time the block was created",
                    },
                    lastEditedTime: {
                        type: "string",
                        description: "The time the block was last edited",
                    },
                    hasChildren: {
                        type: "boolean",
                        description: "Whether the block has children",
                    },
                    archived: {
                        type: "boolean",
                        description: "Whether the block is archived",
                    },
                },
            },
        },
    },
};
exports.NotionDeleteBlockInput = {
    type: "object",
    description: "The input for a Notion delete block request",
    properties: {
        blockId: {
            type: "string",
            description: "The ID of the block to delete",
        },
    },
    required: ["blockId"],
};
