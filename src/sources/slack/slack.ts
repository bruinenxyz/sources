import { Resource, PostResource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import {
  SlackProfile,
  SlackUserInput,
  SlackUser,
  SlackConversationsInput,
  SlackConversations,
  SlackEnhancedConversations,
  SlackConversationHistoryInput,
  SlackConversationHistory,
  SlackEnhancedConversationHistory,
  SlackConversationRepliesInput,
  SlackConversationReplies,
  SlackEnhancedConversationReplies,
  SlackPostMessage,
  SlackPostMessageBody,
} from "./slack.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";
import qs from "qs";

type SlackProfileType = FromSchema<typeof SlackProfile>;
type SlackUserInputType = FromSchema<typeof SlackUserInput>;
type SlackUserType = FromSchema<typeof SlackUser>;
type SlackConversationsInputType = FromSchema<typeof SlackConversationsInput>;
type SlackConversationsType = FromSchema<typeof SlackConversations>;
type SlackEnhancedConversationsType = FromSchema<
  typeof SlackEnhancedConversations
>;
type SlackConversationHistoryInputType = FromSchema<
  typeof SlackConversationHistoryInput
>;
type SlackConversationHistoryType = FromSchema<typeof SlackConversationHistory>;
type SlackEnhancedConversationHistoryType = FromSchema<
  typeof SlackEnhancedConversationHistory
>;
type SlackConversationRepliesInputType = FromSchema<
  typeof SlackConversationRepliesInput
>;
type SlackConversationRepliesType = FromSchema<typeof SlackConversationReplies>;
type SlackEnhancedConversationRepliesType = FromSchema<
  typeof SlackEnhancedConversationReplies
>;
type SlackPostMessageBodyType = FromSchema<typeof SlackPostMessageBody>;
type SlackPostMessageType = FromSchema<typeof SlackPostMessage>;

type BasicUser = {
  id?: string;
  name?: string;
  real_name?: string;
};

const slack_api_url = "https://slack.com/api";
const slackScopes = [
  "chat:write",
  "channels:read",
  "channels:history",
  "im:read",
  "im:history",
  "mpim:read",
  "mpim:history",
  "users.profile:read",
  "users:read",
  "users:read.email",
];

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

// Generates an array of BasicUser objects from an array of userIds
async function getBasicUserArray(
  authClient: Axios,
  userIds: string[]
): Promise<BasicUser[]> {
  return await Promise.all(
    userIds.map(async (userId: any) => {
      const user = await getUser(authClient, { userId: userId });
      return _.pick(user, ["id", "name", "real_name"]);
    })
  );
}

async function getProfile(
  authClient: Axios,
  params?: null
): Promise<SlackProfileType> {
  const { data }: any = await authClient.get("/users.profile.get");
  // Get user data using email
  const userData = await authClient.get(
    `${slack_api_url}/users.lookupByEmail?email=${data.profile.email}`
  );
  return { ...data.profile, userId: userData.data.user.id };
}

// Get user data using userId
async function getUser(authClient: Axios, params: any): Promise<SlackUserType> {
  const { data }: any = await authClient.get(
    `/users.info?user=${params.userId}`
  );
  return data.user;
}

async function getConversations(
  authClient: Axios,
  params?: any
): Promise<SlackConversationsType> {
  const paramString = generateParamsString(params);
  const { data }: any = await authClient.get(
    `/conversations.list${paramString}`
  );
  return data;
}

async function getEnhancedConversations(
  authClient: Axios,
  params?: any
): Promise<SlackEnhancedConversationsType> {
  const paramString = generateParamsString(params);
  const { data }: any = await authClient.get(
    `/conversations.list${paramString}`
  );
  const channels = [...(data.channels || [])];
  // Add array of members as BasicUser objects for each channel
  const enhancedChannels = await Promise.all(
    channels.map(async (channel: any) => {
      const { data }: any = await authClient.get(
        `/conversations.members?channel=${channel.id}&limit=50`
      );
      const userIds = [...(data.members || [])];
      const members = await getBasicUserArray(authClient, userIds);
      return { ...channel, members: members };
    })
  );
  return { ...data, channels: enhancedChannels };
}

async function getConversationHistory(
  authClient: Axios,
  params: any
): Promise<SlackConversationHistoryType> {
  const body = { ...params };
  delete body["accountId"];
  const { data }: any = await authClient.post("/conversations.history", params);
  return data;
}

async function getEnhancedConversationHistory(
  authClient: Axios,
  params: any
): Promise<SlackEnhancedConversationHistoryType> {
  const body = { ...params };
  delete body["accountId"];
  // Limits to 100 messages - Slack default is 100
  if (parseInt(body.limit) > 100) {
    delete body["limit"];
  }
  const { data }: any = await authClient.post("/conversations.history", body);
  const messages = [...(data.messages || [])];
  // Add BasicUser object as user and array of BasicUser objects as reply_users for each message
  const enhancedMessages = await Promise.all(
    messages.map(async (message: any) => {
      const user = await getUser(authClient, { userId: message.user });
      if (message.reply_users) {
        const replyUsers = await getBasicUserArray(
          authClient,
          message.reply_users
        );
        return {
          ...message,
          user: _.pick(user, ["id", "name", "real_name"]),
          reply_users: replyUsers,
        };
      }
      return {
        ...message,
        user: _.pick(user, ["id", "name", "real_name"]),
      };
    })
  );
  return { ...data, messages: enhancedMessages };
}

async function getConversationReplies(
  authClient: Axios,
  params: any
): Promise<SlackConversationRepliesType> {
  const paramString = generateParamsString(params);
  const { data }: any = await authClient.get(
    `/conversations.replies${paramString}`
  );
  return data;
}

async function getEnhancedConversationReplies(
  authClient: Axios,
  params: any
): Promise<SlackEnhancedConversationRepliesType> {
  const paramString = generateParamsString(params);
  const { data }: any = await authClient.get(
    `/conversations.replies${paramString}`
  );
  const messages = [...(data.messages || [])];
  // Add BasicUser object as user and array of BasicUser objects as reply_users for each message
  const enhancedMessages = await Promise.all(
    messages.map(async (message: any) => {
      const user = await getUser(authClient, { userId: message.user });
      if (message.reply_users) {
        const replyUsers = await getBasicUserArray(
          authClient,
          message.reply_users
        );
        return {
          ...message,
          user: _.pick(user, ["id", "name", "real_name"]),
          reply_users: replyUsers,
        };
      }
      return {
        ...message,
        user: _.pick(user, ["id", "name", "real_name"]),
      };
    })
  );
  return { ...data, messages: enhancedMessages };
}

async function postMessage(
  authClient: Axios,
  body: SlackPostMessageBodyType,
  params?: null
): Promise<SlackPostMessageType> {
  const { data }: any = await authClient.post("/chat.postMessage", body);
  return data;
}

export class Slack extends OAuth2Source implements Source {
  resources: {
    [x: string]: Resource<any, any> | PostResource<any, any, any>;
  };
  description: string;

  public constructor() {
    super("slack");
    this.description = "A source for Slack";
    this.resources = {
      profile: new Resource<null, SlackProfileType>(
        "profile",
        "Slack Profile",
        "get",
        "Your basic Slack profile",
        getProfile,
        null,
        SlackProfile
      ),
      user: new Resource<SlackUserInputType, SlackUserType>(
        "user",
        "Slack User",
        "get",
        "Get a Slack user by user ID",
        getUser,
        SlackUserInput,
        SlackUser
      ),
      conversations: new Resource<
        SlackConversationsInputType,
        SlackConversationsType
      >(
        "conversations",
        "Slack Conversations",
        "get",
        "Get a list of Slack conversations",
        getConversations,
        SlackConversationsInput,
        SlackConversations
      ),
      enhancedConversations: new Resource<
        SlackConversationsInputType,
        SlackEnhancedConversationsType
      >(
        "enhancedConversations",
        "Slack Enhanced Conversations",
        "get",
        "Get a list of Slack conversations with members",
        getEnhancedConversations,
        SlackConversationsInput,
        SlackEnhancedConversations
      ),
      conversationHistory: new Resource<
        SlackConversationHistoryInputType,
        SlackConversationHistoryType
      >(
        "conversationHistory",
        "Slack Conversation History",
        "get",
        "Get the history of a Slack conversation",
        getConversationHistory,
        SlackConversationHistoryInput,
        SlackConversationHistory
      ),
      enhancedConversationHistory: new Resource<
        SlackConversationHistoryInputType,
        SlackEnhancedConversationHistoryType
      >(
        "enhancedConversationHistory",
        "Slack Enhanced Conversation History",
        "get",
        "Get the history of a Slack conversation with user information",
        getEnhancedConversationHistory,
        SlackConversationHistoryInput,
        SlackEnhancedConversationHistory
      ),
      conversationReplies: new Resource<
        SlackConversationRepliesInputType,
        SlackConversationRepliesType
      >(
        "conversationReplies",
        "Slack Conversation Replies",
        "get",
        "Get the replies of a Slack conversation message",
        getConversationReplies,
        SlackConversationRepliesInput,
        SlackConversationReplies
      ),
      enhancedConversationReplies: new Resource<
        SlackConversationRepliesInputType,
        SlackEnhancedConversationRepliesType
      >(
        "enhancedConversationReplies",
        "Slack Enhanced Conversation Replies",
        "get",
        "Get the replies of a Slack conversation message with user information",
        getEnhancedConversationReplies,
        SlackConversationRepliesInput,
        SlackEnhancedConversationReplies
      ),
      postMessage: new PostResource<
        SlackPostMessageBodyType,
        null,
        SlackPostMessageType
      >(
        "postMessage",
        "Slack Post Message",
        "post",
        "Post a message to a Slack channel",
        postMessage,
        SlackPostMessageBody,
        null,
        SlackPostMessage
      ),
    };
    this.metadata = {
      name: this.getName(),
      friendlyName: "Slack",
      description:
        "A messaging app for business that connects people to the information they need",
      icon: "https://www.svgrepo.com/show/303320/slack-new-logo-logo.svg",
      color: ["#36c5f1", "#2fb67c", "#e01e5a", "#ecb22d"],
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
    return slack_api_url;
  };

  public getAuthHeaders = (credential: { accessToken: string }) => {
    return {
      Authorization: `Bearer ${credential.accessToken}`,
    };
  };

  public async handleAuthCallback(
    code: string,
    credentials: any,
    redirectUrl: string
  ) {
    const url =
      `${slack_api_url}/oauth.v2.access?` +
      `client_id=${credentials.id}` +
      `&client_secret=${credentials.secret}` +
      `&code=${code}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
    try {
      // eslint-disable-next-line
      const { data }: any = await axios.post(
        url,
        {},
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      return {
        accessToken: data.authed_user.access_token,
      };
    } catch (error) {
      return "";
    }
  }

  public async deactivate(accessCredentials: any) {
    try {
      const { data } = await axios.get(`${slack_api_url}/auth.revoke`, {
        headers: this.getAuthHeaders(accessCredentials),
      });
      return "success";
    } catch (error) {
      return `Slack deactivation error: ${error}`;
    }
  }

  public getAuthUrl = (
    state: string,
    credentials: any,
    redirectUrl: string
  ) => {
    const scopes = _.join(slackScopes, ",");
    const url =
      `https://slack.com/oauth/v2/authorize?` +
      `user_scope=${scopes}` +
      `&state=${state}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
      `&client_id=${credentials.id}`;
    return url;
  };

  public async getExternalAccountId(authClient: Axios) {
    const { userId } = await getProfile(authClient);
    if (userId) {
      return userId;
    }
    return "";
  }

  public getSourceJSONSchema = () => null;
}
