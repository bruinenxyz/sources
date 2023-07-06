export declare const NotionProfile: {
    readonly type: "object";
    readonly description: "A Notion user profile";
    readonly properties: {
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the user";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the user";
        };
        readonly avatar_url: {
            readonly type: "string";
            readonly description: "The URL of the user's profile photo";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of user";
        };
        readonly email: {
            readonly type: "string";
            readonly description: "The email address of the user";
        };
    };
};
export declare const NotionUsersInput: {
    readonly type: "object";
    readonly description: "The input for a list of Notion users";
    readonly properties: {
        readonly start_cursor: {
            readonly type: "string";
            readonly description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results";
        };
        readonly page_size: {
            readonly type: "number";
            readonly description: "The number of items from the full list desired in the response. Maximum: 100";
        };
    };
};
export declare const NotionUsers: {
    readonly type: "object";
    readonly description: "A list of Notion users";
    readonly properties: {
        readonly next_cursor: {
            readonly type: "string";
            readonly description: "The cursor value to use in the next request if there are more results";
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more results";
        };
        readonly users: {
            readonly type: "array";
            readonly description: "The list of users";
            readonly items: {
                readonly type: "object";
                readonly description: "A Notion user";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "Always 'user'";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the user";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of user";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "The name of the user";
                    };
                    readonly avatar_url: {
                        readonly type: "string";
                        readonly description: "The URL of the user's profile photo";
                    };
                    readonly person: {
                        readonly type: "object";
                        readonly description: "The person object of the user";
                        readonly properties: {
                            readonly email: {
                                readonly type: "string";
                                readonly description: "The email address of the user";
                            };
                        };
                    };
                    readonly bot: {
                        readonly type: "object";
                        readonly description: "The bot object of the user";
                        readonly properties: {
                            readonly owner: {
                                readonly type: "object";
                                readonly description: "The owner object of the bot";
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const NotionUserInput: {
    readonly type: "object";
    readonly description: "The input for a Notion user";
    readonly properties: {
        readonly userId: {
            readonly type: "string";
            readonly description: "The ID of the user";
        };
    };
    readonly required: readonly ["userId"];
};
export declare const NotionUser: {
    readonly type: "object";
    readonly description: "A Notion user";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "Always 'user'";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the user";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of user";
        };
        readonly name: {
            readonly type: "string";
            readonly description: "The name of the user";
        };
        readonly avatar_url: {
            readonly type: "string";
            readonly description: "The URL of the user's profile photo";
        };
        readonly person: {
            readonly type: "object";
            readonly description: "The person object of the user";
            readonly properties: {
                readonly email: {
                    readonly type: "string";
                    readonly description: "The email address of the user";
                };
            };
        };
        readonly bot: {
            readonly type: "object";
            readonly description: "The bot object of the user";
            readonly properties: {
                readonly owner: {
                    readonly type: "object";
                    readonly description: "The owner object of the bot";
                };
            };
        };
    };
};
export declare const NotionSearchInput: {
    readonly type: "object";
    readonly description: "The input for a Notion search";
    readonly properties: {
        readonly query: {
            readonly type: "string";
            readonly description: "The text that the API compares page and database titles against.";
        };
        readonly sortDirection: {
            readonly type: "string";
            readonly description: "The direction to sort in. Possible values include 'ascending' and 'descending'.";
        };
        readonly sortTimestamp: {
            readonly type: "string";
            readonly description: "The time to sort by. Possible values include 'last_edited_time' and 'created_time'.";
        };
        readonly filter: {
            readonly type: "string";
            readonly description: "The value to filter by - limits the request to search only pages or to search only databases. Possible values include 'page' and 'database'.";
        };
        readonly start_cursor: {
            readonly type: "string";
            readonly description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.";
        };
        readonly page_size: {
            readonly type: "number";
            readonly description: "The number of items from the full list desired in the response. Maximum: 100.";
        };
    };
};
export declare const NotionSearch: {
    readonly type: "object";
    readonly description: "A Notion search";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "Always 'list'";
        };
        readonly next_cursor: {
            readonly type: "string";
            readonly description: "The cursor value to use in the next request if there are more results";
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more results";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of search";
        };
        readonly results: {
            readonly type: "array";
            readonly description: "The list of search results";
            readonly items: {
                readonly type: "object";
                readonly description: "A search result";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "The type of the result object";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the result object";
                    };
                    readonly created_time: {
                        readonly type: "string";
                        readonly description: "The time the result object was created";
                    };
                    readonly last_edited_time: {
                        readonly type: "string";
                        readonly description: "The time the result object was last edited";
                    };
                    readonly created_by: {
                        readonly type: "object";
                        readonly description: "The user who created the result object";
                        readonly properties: {
                            readonly object: {
                                readonly type: "string";
                                readonly description: "Always 'user'";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                        };
                    };
                    readonly last_edited_by: {
                        readonly type: "object";
                        readonly description: "The user who last edited the result object";
                        readonly properties: {
                            readonly object: {
                                readonly type: "string";
                                readonly description: "Always 'user'";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                        };
                    };
                    readonly cover: {
                        readonly type: "object";
                        readonly description: "The cover of the result object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the cover";
                            };
                            readonly external: {
                                readonly type: "object";
                                readonly description: "The external object of the cover";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "The URL of the cover";
                                    };
                                };
                            };
                        };
                    };
                    readonly icon: {
                        readonly type: "object";
                        readonly description: "The icon of the result object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the icon";
                            };
                            readonly emoji: {
                                readonly type: "string";
                                readonly description: "The emoji of the icon";
                            };
                        };
                    };
                    readonly parent: {
                        readonly type: "object";
                        readonly description: "The parent of the result object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the parent";
                            };
                            readonly database_id: {
                                readonly type: "string";
                                readonly description: "The ID of the database";
                            };
                        };
                    };
                    readonly archived: {
                        readonly type: "boolean";
                        readonly description: "Whether the result object is archived";
                    };
                    readonly url: {
                        readonly type: "string";
                        readonly description: "The URL of the result object";
                    };
                    readonly properties: {
                        readonly type: "object";
                        readonly description: "The properties of the result object";
                    };
                };
            };
        };
    };
};
export declare const NotionPageInput: {
    readonly type: "object";
    readonly description: "The input for a Notion page";
    readonly properties: {
        readonly pageId: {
            readonly type: "string";
            readonly description: "The ID of the page";
        };
        readonly filterProperties: {
            readonly type: "string";
            readonly description: "A comma-separated list of page property value IDs associated with the page. Use this param to limit the response to a specific page property value or values. To retrieve multiple properties, specify each page property ID. For example: 'iAk8,b7dh,17T4'.";
        };
    };
    readonly required: readonly ["pageId"];
};
export declare const NotionPage: {
    readonly type: "object";
    readonly description: "A Notion page. Page properties are limited to up to 25 references per page property. To retrieve data related to properties that have more than 25 references, use the Retrieve a page property endpoint. ";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "Always 'page'";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the page";
        };
        readonly created_time: {
            readonly type: "string";
            readonly description: "The time the page was created";
        };
        readonly last_edited_time: {
            readonly type: "string";
            readonly description: "The time the page was last edited";
        };
        readonly created_by: {
            readonly type: "object";
            readonly description: "The user who created the page";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "Always 'user'";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the user";
                };
            };
        };
        readonly last_edited_by: {
            readonly type: "object";
            readonly description: "The user who last edited the page";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "Always 'user'";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the user";
                };
            };
        };
        readonly cover: {
            readonly type: "object";
            readonly description: "The cover of the page";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the cover";
                };
                readonly external: {
                    readonly type: "object";
                    readonly description: "The external object of the cover";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL of the cover";
                        };
                    };
                };
            };
        };
        readonly icon: {
            readonly type: "object";
            readonly description: "The icon of the page";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the icon";
                };
                readonly emoji: {
                    readonly type: "string";
                    readonly description: "The emoji of the icon";
                };
            };
        };
        readonly parent: {
            readonly type: "object";
            readonly description: "The parent of the page";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the parent";
                };
                readonly database_id: {
                    readonly type: "string";
                    readonly description: "The ID of the database";
                };
            };
        };
        readonly archived: {
            readonly type: "boolean";
            readonly description: "Whether the page is archived";
        };
        readonly properties: {
            readonly type: "object";
            readonly description: "The properties of the page";
        };
        readonly url: {
            readonly type: "string";
            readonly description: "The URL of the page";
        };
    };
};
export declare const NotionPagePropertyInput: {
    readonly type: "object";
    readonly description: "The input for a Notion page property";
    readonly properties: {
        readonly pageId: {
            readonly type: "string";
            readonly description: "The ID of the page";
        };
        readonly propertyId: {
            readonly type: "string";
            readonly description: "The ID of the property";
        };
        readonly page_size: {
            readonly type: "number";
            readonly description: "The number of results to return. The maximum page size is 100. If left blank, the default of 100 is used.";
        };
        readonly start_cursor: {
            readonly type: "string";
            readonly description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.";
        };
    };
    readonly required: readonly ["pageId", "propertyId"];
};
export declare const NotionPageProperty: {
    readonly type: "object";
    readonly description: "A Notion page property";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "The type of the response object";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the page property";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of the page property";
        };
        readonly number: {
            readonly type: "number";
            readonly description: "The number of the page property";
        };
        readonly next_cursor: {
            readonly type: "string";
            readonly description: "The cursor for the next page of results";
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more results";
        };
        readonly next_url: {
            readonly type: "string";
            readonly description: "The URL for the next page of results";
        };
        readonly property_item: {
            readonly type: "object";
            readonly description: "The property item of the page property";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the property item";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the property item";
                };
                readonly next_url: {
                    readonly type: "string";
                };
                readonly rich_text: {
                    readonly type: "object";
                    readonly description: "The rich text of the property item";
                };
                readonly rollup: {
                    readonly type: "object";
                    readonly description: "The rollup of the property item";
                };
            };
        };
        readonly results: {
            readonly type: "array";
            readonly description: "The results of the page property";
            readonly items: {
                readonly type: "object";
                readonly description: "The result of the page property";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "The type of the result object";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the result";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the result";
                    };
                    readonly relation: {
                        readonly type: "object";
                        readonly description: "The relation of the result";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the relation";
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const NotionDatabaseInput: {
    readonly type: "object";
    readonly description: "The input for a Notion database";
    readonly properties: {
        readonly databaseId: {
            readonly type: "string";
            readonly description: "The ID of the database";
        };
    };
    readonly required: readonly ["databaseId"];
};
export declare const NotionDatabase: {
    readonly type: "object";
    readonly description: "A Notion database";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "The type of the response object";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the database";
        };
        readonly created_time: {
            readonly type: "string";
            readonly description: "The time the database was created";
        };
        readonly last_edited_time: {
            readonly type: "string";
            readonly description: "The time the database was last edited";
        };
        readonly icon: {
            readonly type: "object";
            readonly description: "The icon of the database";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the icon";
                };
                readonly emoji: {
                    readonly type: "string";
                    readonly description: "The emoji of the icon";
                };
            };
        };
        readonly cover: {
            readonly type: "object";
            readonly description: "The cover of the database";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the cover";
                };
                readonly external: {
                    readonly type: "object";
                    readonly description: "The external object of the cover";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "The URL of the cover";
                        };
                    };
                };
            };
        };
        readonly url: {
            readonly type: "string";
            readonly description: "The URL of the database";
        };
        readonly title: {
            readonly type: "array";
            readonly description: "The title of the database";
            readonly items: {
                readonly type: "object";
                readonly description: "The title object of the database";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the title";
                    };
                    readonly text: {
                        readonly type: "object";
                        readonly description: "The text of the title";
                        readonly properties: {
                            readonly content: {
                                readonly type: "string";
                                readonly description: "The content of the title";
                            };
                            readonly link: {
                                readonly type: "string";
                                readonly description: "The link of the title";
                            };
                        };
                    };
                    readonly annotations: {
                        readonly type: "object";
                        readonly description: "The annotations of the title";
                        readonly properties: {
                            readonly bold: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is bold";
                            };
                            readonly italic: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is italic";
                            };
                            readonly strikethrough: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is strikethrough";
                            };
                            readonly underline: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is underlined";
                            };
                            readonly code: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is code";
                            };
                            readonly color: {
                                readonly type: "string";
                                readonly description: "The color of the title";
                            };
                        };
                    };
                    readonly plain_text: {
                        readonly type: "string";
                        readonly description: "The plain text of the title";
                    };
                    readonly href: {
                        readonly type: "string";
                        readonly description: "The href of the title";
                    };
                };
            };
        };
        readonly description: {
            readonly type: "array";
            readonly description: "The description of the database";
            readonly items: {
                readonly type: "object";
                readonly description: "The title object of the database";
                readonly properties: {
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the title";
                    };
                    readonly text: {
                        readonly type: "object";
                        readonly description: "The text of the title";
                        readonly properties: {
                            readonly content: {
                                readonly type: "string";
                                readonly description: "The content of the title";
                            };
                            readonly link: {
                                readonly type: "string";
                                readonly description: "The link of the title";
                            };
                        };
                    };
                    readonly annotations: {
                        readonly type: "object";
                        readonly description: "The annotations of the title";
                        readonly properties: {
                            readonly bold: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is bold";
                            };
                            readonly italic: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is italic";
                            };
                            readonly strikethrough: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is strikethrough";
                            };
                            readonly underline: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is underlined";
                            };
                            readonly code: {
                                readonly type: "boolean";
                                readonly description: "Whether the title is code";
                            };
                            readonly color: {
                                readonly type: "string";
                                readonly description: "The color of the title";
                            };
                        };
                    };
                    readonly plain_text: {
                        readonly type: "string";
                        readonly description: "The plain text of the title";
                    };
                    readonly href: {
                        readonly type: "string";
                        readonly description: "The href of the title";
                    };
                };
            };
        };
        readonly properties: {
            readonly type: "object";
            readonly description: "The properties of the database";
        };
        readonly parent: {
            readonly type: "object";
            readonly description: "The parent of the database";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the parent";
                };
                readonly page_id: {
                    readonly type: "string";
                    readonly description: "The page ID of the parent";
                };
            };
        };
        readonly archived: {
            readonly type: "boolean";
            readonly description: "Whether the database is archived";
        };
        readonly is_inline: {
            readonly type: "boolean";
            readonly description: "Whether the database is inline";
        };
    };
};
export declare const NotionQueryDatabaseInput: {
    readonly type: "object";
    readonly description: "The input for a Notion database query";
    readonly properties: {
        readonly databaseId: {
            readonly type: "string";
            readonly description: "The ID of the database";
        };
        readonly filterProperties: {
            readonly type: "string";
            readonly description: "A list of comma-separated page property value IDs associated with the database. Use this param to limit the response to a specific page property value or values for pages that meet the filter criteria. For example: 'iAk8,b7dh,17T4'.";
        };
    };
    readonly required: readonly ["databaseId"];
};
export declare const NotionQueryDatabaseBody: {
    readonly type: "object";
    readonly description: "The body for a Notion database query";
    readonly properties: {
        readonly filter: {
            readonly type: "object";
            readonly description: "When supplied, limits which pages are returned based on the filter conditions. Refer to https://developers.notion.com/reference/post-database-query-filter for more on constructing the filter object.";
        };
        readonly sorts: {
            readonly type: "array";
            readonly description: "When supplied, sorts the results based on the sort conditions. Refer to https://developers.notion.com/reference/post-database-query-sort for more on constructing the sorts array.";
        };
        readonly start_cursor: {
            readonly type: "string";
            readonly description: "When supplied, returns a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.";
        };
        readonly page_size: {
            readonly type: "number";
            readonly description: "The number of items from the full list desired in the response. Maximum: 100. Default: 100.";
        };
    };
};
export declare const NotionQueryDatabase: {
    readonly type: "object";
    readonly description: "The response for a Notion database query";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "The object type of the database query response";
        };
        readonly next_cursor: {
            readonly type: "string";
            readonly description: "The next cursor of the database query response";
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether the database query response has more";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of the database query response";
        };
        readonly page: {
            readonly type: "object";
            readonly description: "The page of the database query response";
        };
        readonly results: {
            readonly type: "array";
            readonly description: "The results of the database query response";
            readonly items: {
                readonly type: "object";
                readonly description: "A result object of the database query response";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "Always 'page'";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the page";
                    };
                    readonly created_time: {
                        readonly type: "string";
                        readonly description: "The time the page was created";
                    };
                    readonly last_edited_time: {
                        readonly type: "string";
                        readonly description: "The time the page was last edited";
                    };
                    readonly created_by: {
                        readonly type: "object";
                        readonly description: "The user who created the page";
                        readonly properties: {
                            readonly object: {
                                readonly type: "string";
                                readonly description: "Always 'user'";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                        };
                    };
                    readonly last_edited_by: {
                        readonly type: "object";
                        readonly description: "The user who last edited the page";
                        readonly properties: {
                            readonly object: {
                                readonly type: "string";
                                readonly description: "Always 'user'";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                        };
                    };
                    readonly cover: {
                        readonly type: "object";
                        readonly description: "The cover of the page";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the cover";
                            };
                            readonly external: {
                                readonly type: "object";
                                readonly description: "The external object of the cover";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "The URL of the cover";
                                    };
                                };
                            };
                        };
                    };
                    readonly icon: {
                        readonly type: "object";
                        readonly description: "The icon of the page";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the icon";
                            };
                            readonly emoji: {
                                readonly type: "string";
                                readonly description: "The emoji of the icon";
                            };
                        };
                    };
                    readonly parent: {
                        readonly type: "object";
                        readonly description: "The parent of the page";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the parent";
                            };
                            readonly database_id: {
                                readonly type: "string";
                                readonly description: "The ID of the database";
                            };
                        };
                    };
                    readonly archived: {
                        readonly type: "boolean";
                        readonly description: "Whether the page is archived";
                    };
                    readonly properties: {
                        readonly type: "object";
                        readonly description: "The properties of the page";
                    };
                    readonly url: {
                        readonly type: "string";
                        readonly description: "The URL of the page";
                    };
                };
            };
        };
    };
};
export declare const NotionBlockInput: {
    readonly type: "object";
    readonly description: "The input for a Notion block request";
    readonly properties: {
        readonly blockId: {
            readonly type: "string";
            readonly description: "The ID of the block";
        };
    };
    readonly required: readonly ["blockId"];
};
export declare const NotionBlock: {
    readonly type: "object";
    readonly description: "The response for a Notion block request";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "Always 'block'";
        };
        readonly id: {
            readonly type: "string";
            readonly description: "The ID of the block";
        };
        readonly parent: {
            readonly type: "object";
            readonly description: "The parent of the block";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the parent";
                };
                readonly page_id: {
                    readonly type: "string";
                    readonly description: "The ID of the page";
                };
            };
        };
        readonly created_time: {
            readonly type: "string";
            readonly description: "The time the block was created";
        };
        readonly last_edited_time: {
            readonly type: "string";
            readonly description: "The time the block was last edited";
        };
        readonly created_by: {
            readonly type: "object";
            readonly description: "The user who created the block";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "Always 'user'";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the user";
                };
            };
        };
        readonly last_edited_by: {
            readonly type: "object";
            readonly description: "The user who last edited the block";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "Always 'user'";
                };
                readonly id: {
                    readonly type: "string";
                    readonly description: "The ID of the user";
                };
            };
        };
        readonly has_children: {
            readonly type: "boolean";
            readonly description: "Whether the block has children";
        };
        readonly archived: {
            readonly type: "boolean";
            readonly description: "Whether the block is archived";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of the block. This value is also a key in the block object, the value of which is an object that contains the block content and annotations. For more information on block types, see https://developers.notion.com/reference/block";
        };
        readonly is_toggleable: {
            readonly type: "boolean";
            readonly description: "Whether the block is toggleable";
        };
    };
};
export declare const NotionBlockChildrenInput: {
    readonly type: "object";
    readonly description: "The input for a Notion block children request";
    readonly properties: {
        readonly blockId: {
            readonly type: "string";
            readonly description: "The ID of the block";
        };
        readonly startCursor: {
            readonly type: "string";
            readonly description: "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results.";
        };
        readonly pageSize: {
            readonly type: "number";
            readonly description: "The number of items from the full list desired in the response. Maximum: 100";
        };
    };
    readonly required: readonly ["blockId"];
};
export declare const NotionBlockChildren: {
    readonly type: "object";
    readonly description: "The response for a Notion block children request";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "Always 'list'";
        };
        readonly next_cursor: {
            readonly type: "string";
            readonly description: "If there are more results, the response will contain a next_cursor property with the cursor value to use in the next request to fetch the next page of results.";
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more results to fetch using next_cursor";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of the elements in the results array";
        };
        readonly block: {
            readonly type: "object";
            readonly description: "The block of the results";
        };
        readonly results: {
            readonly type: "array";
            readonly description: "The results of the request";
            readonly items: {
                readonly type: "object";
                readonly description: "A block object";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "Always 'block'";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the block";
                    };
                    readonly parent: {
                        readonly type: "object";
                        readonly description: "The parent of the block";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly description: "The type of the parent";
                            };
                            readonly page_id: {
                                readonly type: "string";
                                readonly description: "The ID of the page";
                            };
                        };
                    };
                    readonly created_time: {
                        readonly type: "string";
                        readonly description: "The time the block was created";
                    };
                    readonly last_edited_time: {
                        readonly type: "string";
                        readonly description: "The time the block was last edited";
                    };
                    readonly created_by: {
                        readonly type: "object";
                        readonly description: "The user who created the block";
                        readonly properties: {
                            readonly object: {
                                readonly type: "string";
                                readonly description: "Always 'user'";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                        };
                    };
                    readonly last_edited_by: {
                        readonly type: "object";
                        readonly description: "The user who last edited the block";
                        readonly properties: {
                            readonly object: {
                                readonly type: "string";
                                readonly description: "Always 'user'";
                            };
                            readonly id: {
                                readonly type: "string";
                                readonly description: "The ID of the user";
                            };
                        };
                    };
                    readonly has_children: {
                        readonly type: "boolean";
                        readonly description: "Whether the block has children";
                    };
                    readonly archived: {
                        readonly type: "boolean";
                        readonly description: "Whether the block is archived";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the block. This value is also a key in the block object, the value of which is an object that contains the block content and annotations. For more information on block types, see https://developers.notion.com/reference/block";
                    };
                    readonly is_toggleable: {
                        readonly type: "boolean";
                        readonly description: "Whether the block is toggleable";
                    };
                };
            };
        };
    };
};
export declare const NotionCreatePageInPageBody: {
    readonly type: "object";
    readonly description: "The body for a Notion create page in page request";
    readonly properties: {
        readonly parent: {
            readonly type: "object";
            readonly description: "The parent of the page";
            readonly properties: {
                readonly page_id: {
                    readonly type: "string";
                    readonly description: "The ID of the parent page";
                };
            };
        };
        readonly properties: {
            readonly type: "object";
            readonly description: "The properties of the page";
            readonly properties: {
                readonly title: {
                    readonly type: "array";
                    readonly description: "The title of the page";
                    readonly items: {
                        readonly type: "object";
                        readonly description: "A text object";
                        readonly properties: {
                            readonly text: {
                                readonly type: "object";
                                readonly description: "The text of the object";
                                readonly properties: {
                                    readonly content: {
                                        readonly type: "string";
                                        readonly description: "The content of the text";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly required: readonly ["title"];
        };
        readonly children: {
            readonly type: "array";
            readonly description: "The children of the page as an array of block objects";
            readonly items: {
                readonly type: "object";
                readonly description: "A block object. For more information on block objects, see https://developers.notion.com/reference/block";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "Always 'block'";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the block";
                    };
                };
            };
        };
        readonly icon: {
            readonly type: "object";
            readonly description: "The icon of the new page. Either an emoji object or an external file object.";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the icon";
                };
                readonly emoji: {
                    readonly type: "string";
                    readonly description: "The emoji of the icon";
                };
                readonly file: {
                    readonly type: "object";
                    readonly description: "The external file of the icon. For more information on constructing a file object, see https://developers.notion.com/reference/file-object";
                };
            };
        };
        readonly cover: {
            readonly type: "object";
            readonly description: "The cover of the new page. Takes the form of a file object. For more information on constructing a file object, see https://developers.notion.com/reference/file-object";
        };
    };
    readonly required: readonly ["parent", "properties"];
};
export declare const NotionCreatePageInDatabaseBody: {
    readonly type: "object";
    readonly description: "The body for a Notion create page in database request";
    readonly properties: {
        readonly parent: {
            readonly type: "object";
            readonly description: "The parent of the page";
            readonly properties: {
                readonly database_id: {
                    readonly type: "string";
                    readonly description: "The ID of the parent database";
                };
            };
        };
        readonly properties: {
            readonly type: "object";
            readonly description: "The properties of the page. The schema must match the parent database's properties";
        };
        readonly children: {
            readonly type: "array";
            readonly description: "The children of the page as an array of block objects";
            readonly items: {
                readonly type: "object";
                readonly description: "A block object. For more information on block objects, see https://developers.notion.com/reference/block";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "Always 'block'";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the block";
                    };
                };
            };
        };
        readonly icon: {
            readonly type: "object";
            readonly description: "The icon of the new page. Either an emoji object or an external file object.";
            readonly properties: {
                readonly type: {
                    readonly type: "string";
                    readonly description: "The type of the icon";
                };
                readonly emoji: {
                    readonly type: "string";
                    readonly description: "The emoji of the icon";
                };
                readonly file: {
                    readonly type: "object";
                    readonly description: "The external file of the icon. For more information on constructing a file object, see https://developers.notion.com/reference/file-object";
                };
            };
        };
        readonly cover: {
            readonly type: "object";
            readonly description: "The cover of the new page. Takes the form of a file object. For more information on constructing a file object, see https://developers.notion.com/reference/file-object";
        };
    };
    readonly required: readonly ["parent", "properties"];
};
export declare const NotionAppendBlockChildrenInput: {
    readonly type: "object";
    readonly description: "The input for a Notion append block children request";
    readonly properties: {
        readonly blockId: {
            readonly type: "string";
            readonly description: "The ID of the block to append children to";
        };
    };
    readonly required: readonly ["blockId"];
};
export declare const NotionAppendBlockChildrenBody: {
    readonly type: "object";
    readonly description: "The body for a Notion append block children request";
    readonly properties: {
        readonly children: {
            readonly type: "array";
            readonly description: "The children of the block as an array of block objects";
            readonly items: {
                readonly type: "object";
                readonly description: "A block object. For more information on block objects, see https://developers.notion.com/reference/block";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "Always 'block'";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the block";
                    };
                };
            };
        };
    };
    readonly required: readonly ["children"];
};
export declare const NotionAppendBlockChildren: {
    readonly type: "object";
    readonly description: "The response for a Notion append block children request";
    readonly properties: {
        readonly object: {
            readonly type: "string";
            readonly description: "Always 'list'";
        };
        readonly next_cursor: {
            readonly type: "string";
            readonly description: "The cursor value to continue pagination. This will be null if no further results exist";
        };
        readonly has_more: {
            readonly type: "boolean";
            readonly description: "Whether there are more results after this page";
        };
        readonly type: {
            readonly type: "string";
            readonly description: "The type of the results";
        };
        readonly block: {
            readonly type: "object";
            readonly description: "The block that was appended to";
        };
        readonly results: {
            readonly type: "array";
            readonly description: "The blocks that were appended";
            readonly items: {
                readonly type: "object";
                readonly description: "A block object that was appended";
                readonly properties: {
                    readonly object: {
                        readonly type: "string";
                        readonly description: "Always 'block'";
                    };
                    readonly type: {
                        readonly type: "string";
                        readonly description: "The type of the block. This value is also a key in the plock object that contains the block content.";
                    };
                    readonly id: {
                        readonly type: "string";
                        readonly description: "The ID of the block";
                    };
                    readonly createdTime: {
                        readonly type: "string";
                        readonly description: "The time the block was created";
                    };
                    readonly lastEditedTime: {
                        readonly type: "string";
                        readonly description: "The time the block was last edited";
                    };
                    readonly hasChildren: {
                        readonly type: "boolean";
                        readonly description: "Whether the block has children";
                    };
                    readonly archived: {
                        readonly type: "boolean";
                        readonly description: "Whether the block is archived";
                    };
                };
            };
        };
    };
};
export declare const NotionDeleteBlockInput: {
    readonly type: "object";
    readonly description: "The input for a Notion delete block request";
    readonly properties: {
        readonly blockId: {
            readonly type: "string";
            readonly description: "The ID of the block to delete";
        };
    };
    readonly required: readonly ["blockId"];
};
