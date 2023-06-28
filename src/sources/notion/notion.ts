import {
  Resource,
  PostResource,
  PatchResource,
  DeleteResource,
} from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import {
  NotionProfile,
  NotionUsersInput,
  NotionUsers,
  NotionUserInput,
  NotionUser,
  NotionSearchInput,
  NotionSearch,
  NotionPageInput,
  NotionPage,
  NotionPagePropertyInput,
  NotionPageProperty,
  NotionDatabaseInput,
  NotionDatabase,
  NotionQueryDatabaseInput,
  NotionQueryDatabaseBody,
  NotionQueryDatabase,
  NotionCommentsInput,
  NotionComments,
  NotionCommentOnPageBody,
  NotionCommentOnDiscussionBody,
  NotionComment,
  NotionBlockInput,
  NotionBlock,
  NotionBlockChildrenInput,
  NotionBlockChildren,
  NotionCreatePageInPageBody,
  NotionCreatePageInDatabaseBody,
  NotionAppendBlockChildrenBody,
  NotionAppendBlockChildrenInput,
  NotionAppendBlockChildren,
  NotionDeleteBlockInput,
} from "./notion.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";
import qs from "qs";

type NotionProfileType = FromSchema<typeof NotionProfile>;
type NotionUsersInputType = FromSchema<typeof NotionUsersInput>;
type NotionUsersType = FromSchema<typeof NotionUsers>;
type NotionUserInputType = FromSchema<typeof NotionUserInput>;
type NotionUserType = FromSchema<typeof NotionUser>;
type NotionSearchInputType = FromSchema<typeof NotionSearchInput>;
type NotionSearchType = FromSchema<typeof NotionSearch>;
type NotionPageInputType = FromSchema<typeof NotionPageInput>;
type NotionPageType = FromSchema<typeof NotionPage>;
type NotionPagePropertyInputType = FromSchema<typeof NotionPagePropertyInput>;
type NotionPagePropertyType = FromSchema<typeof NotionPageProperty>;
type NotionDatabaseInputType = FromSchema<typeof NotionDatabaseInput>;
type NotionDatabaseType = FromSchema<typeof NotionDatabase>;
type NotionQueryDatabaseInputType = FromSchema<typeof NotionQueryDatabaseInput>;
type NotionQueryDatabaseBodyType = FromSchema<typeof NotionQueryDatabaseBody>;
type NotionQueryDatabaseType = FromSchema<typeof NotionQueryDatabase>;
type NotionCommentsInputType = FromSchema<typeof NotionCommentsInput>;
type NotionCommentsType = FromSchema<typeof NotionComments>;
type NotionCommentOnPageBodyType = FromSchema<typeof NotionCommentOnPageBody>;
type NotionCommentOnDiscussionBodyType = FromSchema<
  typeof NotionCommentOnDiscussionBody
>;
type NotionCommentType = FromSchema<typeof NotionComment>;
type NotionBlockInputType = FromSchema<typeof NotionBlockInput>;
type NotionBlockType = FromSchema<typeof NotionBlock>;
type NotionBlockChildrenInputType = FromSchema<typeof NotionBlockChildrenInput>;
type NotionBlockChildrenType = FromSchema<typeof NotionBlockChildren>;
type NotionCreatePageInPageBodyType = FromSchema<
  typeof NotionCreatePageInPageBody
>;
type NotionCreatePageInDatabaseBodyType = FromSchema<
  typeof NotionCreatePageInDatabaseBody
>;
type NotionAppendBlockChildrenBodyType = FromSchema<
  typeof NotionAppendBlockChildrenBody
>;
type NotionAppendBlockChildrenInputType = FromSchema<
  typeof NotionAppendBlockChildrenInput
>;
type NotionAppendBlockChildrenType = FromSchema<
  typeof NotionAppendBlockChildren
>;
type NotionDeleteBlockInputType = FromSchema<typeof NotionDeleteBlockInput>;

const notion_api_url = "https://api.notion.com/v1";

// Generates a query string from an object of params
function generateParamsString(params: any): string {
  if (params) {
    const cleanParams = { ...params };
    delete cleanParams["accountId"];
    return qs.stringify(cleanParams, {
      addQueryPrefix: true,
      encode: false,
    });
  }
  return "";
}

async function getProfile(
  authClient: Axios,
  params?: null
): Promise<NotionProfileType> {
  const { data } = await authClient.get("/users/me");
  return {
    ..._.pick(data.bot.owner.user, ["id", "name", "avatar_url", "type"]),
    email: _.get(data.bot.owner.user, "person.email"),
  };
}

async function getUsers(
  authClient: Axios,
  params?: any
): Promise<NotionUsersType> {
  const paramString = generateParamsString(params);
  const { data } = await authClient.get(`/users${paramString}`);
  return data;
}

async function getUser(
  authClient: Axios,
  params: any
): Promise<NotionUserType> {
  const { data } = await authClient.get(`/users/${params.userId}`);
  return data;
}

async function search(
  authClient: Axios,
  params?: any
): Promise<NotionSearchType> {
  const requestBody: any = {};
  if (params.query) {
    requestBody["query"] = params.query;
  }
  if (params.filter) {
    requestBody["filter"] = {
      value: params.filter,
      property: "object",
    };
  }
  if (params.start_cursor) {
    requestBody["start_cursor"] = params.start_cursor;
  }
  if (params.page_size) {
    requestBody["page_size"] = params.page_size;
  }
  if (params.sortDirection || params.sortTimestamp) {
    requestBody["sort"] = {};
    if (params.sortDirection) {
      requestBody["sort"]["direction"] = params.sortDirection;
    }
    if (params.sortTimestamp) {
      requestBody["sort"]["timestamp"] = params.sortTimestamp;
    }
  }
  const { data } = await authClient.post("/search", requestBody);
  return data;
}

async function getPage(
  authClient: Axios,
  params: any
): Promise<NotionPageType> {
  let paramString = "";
  if (params.filterProperties) {
    const propertyIds = params.filterProperties.split(",");
    propertyIds.forEach((propertyId: string) => {
      paramString += `&filter_properties=${propertyId}`;
    });
    paramString = "?" + paramString.slice(1);
  }
  const { data } = await authClient.get(
    `/pages/${params.pageId}${paramString}`
  );
  return data;
}

async function getPageProperty(
  authClient: Axios,
  params: any
): Promise<NotionPagePropertyType> {
  const paramString = generateParamsString(
    _.omit(params, ["pageId", "propertyId"])
  );
  const { data } = await authClient.get(
    `/pages/${params.pageId}/properties/${params.propertyId}${paramString}`
  );
  return data;
}

async function createPageInPage(
  authClient: Axios,
  body: NotionCreatePageInPageBodyType,
  params?: null
): Promise<NotionPageType> {
  const { data } = await authClient.post(`/pages`, body);
  return data;
}

async function createPageInDatabase(
  authClient: Axios,
  body: NotionCreatePageInDatabaseBodyType,
  params?: null
): Promise<NotionPageType> {
  const { data } = await authClient.post(`/pages`, body);
  return data;
}

async function getDatabase(
  authClient: Axios,
  params: any
): Promise<NotionDatabaseType> {
  const { data } = await authClient.get(`/databases/${params.databaseId}`);
  return data;
}

async function queryDatabase(
  authClient: Axios,
  body: NotionQueryDatabaseBodyType,
  params: any
): Promise<NotionQueryDatabaseType> {
  let paramString = "";
  if (params.filterProperties) {
    const propertyIds = params.filterProperties.split(",");
    propertyIds.forEach((propertyId: string) => {
      paramString += `&filter_properties=${propertyId}`;
    });
    paramString = "?" + paramString.slice(1);
  }
  const { data } = await authClient.post(
    `/databases/${params.databaseId}/query${paramString}`,
    body
  );
  return data;
}

async function getComments(
  authClient: Axios,
  params: any
): Promise<NotionCommentsType> {
  const paramString = generateParamsString(params);
  const { data } = await authClient.get(`/comments${paramString}`);
  return data;
}

async function postCommentOnPage(
  authClient: Axios,
  body: NotionCommentOnPageBodyType,
  params?: null
): Promise<NotionCommentType> {
  const { data } = await authClient.post(`/comments`, body);
  return data;
}

async function postCommentOnDiscussion(
  authClient: Axios,
  body: NotionCommentOnDiscussionBodyType,
  params?: null
): Promise<NotionCommentType> {
  const { data } = await authClient.post(`/comments`, body);
  return data;
}

async function getBlock(
  authClient: Axios,
  params: any
): Promise<NotionBlockType> {
  const { data } = await authClient.get(`/blocks/${params.blockId}`);
  return data;
}

async function getBlockChildren(
  authClient: Axios,
  params: any
): Promise<NotionBlockChildrenType> {
  const paramString = generateParamsString(_.omit(params, ["blockId"]));
  const { data } = await authClient.get(
    `/blocks/${params.blockId}/children${paramString}`
  );
  return data;
}

async function appendBlockChildren(
  authClient: Axios,
  body: NotionAppendBlockChildrenBodyType,
  params: any
): Promise<NotionAppendBlockChildrenType> {
  const { data } = await authClient.patch(
    `/blocks/${params.blockId}/children`,
    body
  );
  return data;
}

async function deleteBlock(
  authClient: Axios,
  params: any
): Promise<NotionBlockType> {
  const { data } = await authClient.delete(`/blocks/${params.blockId}`);
  return data;
}

export class Notion extends OAuth2Source implements Source {
  resources: {
    [x: string]:
      | Resource<any, any>
      | PostResource<any, any, any>
      | PatchResource<any, any, any>
      | DeleteResource<any, any>;
  };
  description: string;

  public constructor() {
    super("notion");
    this.description = "A source for Notion";
    this.resources = {
      profile: new Resource<null, NotionProfileType>(
        "profile",
        "Notion Profile",
        "get",
        "Your basic Notion profile",
        getProfile,
        null,
        NotionProfile
      ),
      users: new Resource<NotionUsersInputType, NotionUsersType>(
        "users",
        "Notion Users",
        "get",
        "Get a list of users for the workspace",
        getUsers,
        NotionUsersInput,
        NotionUsers
      ),
      user: new Resource<NotionUserInputType, NotionUserType>(
        "user",
        "Notion User",
        "get",
        "Get a user by ID",
        getUser,
        NotionUserInput,
        NotionUser
      ),
      search: new Resource<NotionSearchInputType, NotionSearchType>(
        "search",
        "Notion Search",
        "get",
        "Search for content in the workspace",
        search,
        NotionSearchInput,
        NotionSearch
      ),
      page: new Resource<NotionPageInputType, NotionPageType>(
        "page",
        "Notion Page",
        "get",
        "Get a page by ID",
        getPage,
        NotionPageInput,
        NotionPage
      ),
      pageProperty: new Resource<
        NotionPagePropertyInputType,
        NotionPagePropertyType
      >(
        "pageProperty",
        "Notion Page Property",
        "get",
        "Get a page property by ID",
        getPageProperty,
        NotionPagePropertyInput,
        NotionPageProperty
      ),
      database: new Resource<NotionDatabaseInputType, NotionDatabaseType>(
        "database",
        "Notion Database",
        "get",
        "Get a database by ID",
        getDatabase,
        NotionDatabaseInput,
        NotionDatabase
      ),
      queryDatabase: new PostResource<
        NotionQueryDatabaseBodyType,
        NotionQueryDatabaseInputType,
        NotionQueryDatabaseType
      >(
        "queryDatabase",
        "Notion Query Database",
        "post",
        "Query a database by ID",
        queryDatabase,
        NotionQueryDatabaseBody,
        NotionQueryDatabaseInput,
        NotionQueryDatabase
      ),
      comments: new Resource<NotionCommentsInputType, NotionCommentsType>(
        "comments",
        "Notion Comments",
        "get",
        "Get a list of comments for a block",
        getComments,
        NotionCommentsInput,
        NotionComments
      ),
      commentOnPage: new PostResource<
        NotionCommentOnPageBodyType,
        null,
        NotionCommentType
      >(
        "commentOnPage",
        "Notion Comment On Page",
        "post",
        "Comment on a page",
        postCommentOnPage,
        NotionCommentOnPageBody,
        null,
        NotionComment
      ),
      commentOnDiscussion: new PostResource<
        NotionCommentOnDiscussionBodyType,
        null,
        NotionCommentType
      >(
        "commentOnDiscussion",
        "Notion Comment On Discussion",
        "post",
        "Comment on a discussion",
        postCommentOnDiscussion,
        NotionCommentOnDiscussionBody,
        null,
        NotionComment
      ),
      block: new Resource<NotionBlockInputType, NotionBlockType>(
        "block",
        "Notion Block",
        "get",
        "Get a block by ID",
        getBlock,
        NotionBlockInput,
        NotionBlock
      ),
      blockChildren: new Resource<
        NotionBlockChildrenInputType,
        NotionBlockChildrenType
      >(
        "blockChildren",
        "Notion Block Children",
        "get",
        "Get a block's children by ID",
        getBlockChildren,
        NotionBlockChildrenInput,
        NotionBlockChildren
      ),
      createPageInPage: new PostResource<
        NotionCreatePageInPageBodyType,
        null,
        NotionPageType
      >(
        "createPageInPage",
        "Notion Create Page In Page",
        "post",
        "Create a page where the parent is a page",
        createPageInPage,
        NotionCreatePageInPageBody,
        null,
        NotionPage
      ),
      createPageInDatabase: new PostResource<
        NotionCreatePageInDatabaseBodyType,
        null,
        NotionPageType
      >(
        "createPageInDatabase",
        "Notion Create Page In Database",
        "post",
        "Create a page where the parent is a database",
        createPageInDatabase,
        NotionCreatePageInDatabaseBody,
        null,
        NotionPage
      ),
      appendBlockChildren: new PatchResource<
        NotionAppendBlockChildrenBodyType,
        NotionAppendBlockChildrenInputType,
        NotionAppendBlockChildrenType
      >(
        "appendBlockChildren",
        "Notion Append Block Children",
        "patch",
        "Append block children",
        appendBlockChildren,
        NotionAppendBlockChildrenBody,
        NotionAppendBlockChildrenInput,
        NotionAppendBlockChildren
      ),
      deleteBlock: new DeleteResource<
        NotionDeleteBlockInputType,
        NotionBlockType
      >(
        "deleteBlock",
        "Notion Delete Block",
        "delete",
        "Delete a block by ID",
        deleteBlock,
        NotionDeleteBlockInput,
        NotionBlock
      ),
    };
    this.metadata = {
      name: this.getName(),
      friendlyName: "Notion",
      description: "The connected workspace where better, faster work happens.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      color: ["#000000", "#ffffff"],
      auth: { authType: "oAuth2", authStart: "" },
      policyConfig: {
        type: this.getType(),
        credentials: {
          allowed: true,
          fields: [
            { name: "id", friendlyName: "ID", type: "auth" },
            {
              name: "secret",
              friendlyName: "Secret",
              type: "auth",
            },
          ],
        },
      },
      resources: Object.values(this.resources).map((resource) =>
        resource.getJSON()
      ),
    };
  }

  public async getToken(credential: string) {
    const parsedCreds = await JSON.parse(credential);
    return { accessToken: parsedCreds.accessToken };
  }

  public getBaseUrl = (resourceName: string) => {
    return notion_api_url;
  };

  public getAuthHeaders = (credential: { accessToken: string }) => {
    return {
      Authorization: `Bearer ${credential.accessToken}`,
      "Notion-Version": "2022-06-28",
    };
  };

  public async handleAuthCallback(
    code: string,
    credentials: any,
    redirectUrl: string
  ) {
    const url = "https://api.notion.com/v1/oauth/token";
    try {
      // eslint-disable-next-line
      const { data }: any = await axios.post(
        url,
        {
          grant_type: "authorization_code",
          code: code,
          redirect_uri: redirectUrl,
        },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${credentials.id}:${credentials.secret}`
            ).toString("base64")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      return {
        accessToken: data.access_token,
      };
    } catch (error) {
      return "";
    }
  }

  public deactivate(accessCredentials?: any) {
    return "success";
  }

  public getAuthUrl = (
    state: string,
    credentials: any,
    redirectUrl: string
  ) => {
    const url =
      `https://api.notion.com/v1/oauth/authorize?` +
      `&response_type=code` +
      "&owner=user" +
      `&state=${state}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&client_id=${credentials.id}`;
    return url;
  };

  public async getExternalAccountId(authClient: Axios) {
    const { id } = await getProfile(authClient);
    if (id) {
      return id;
    }
    return "";
  }

  public getSourceJSONSchema = () => null;
}
