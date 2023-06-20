import { Resource, PostResource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import {
  SlackProfile,
  SlackPostMessage,
  SlackPostMessageBody,
  SlackConversationsInput,
  SlackConversations,
  SlackConversationHistoryInput,
  SlackConversationHistory,
  SlackConversationRepliesInput,
  SlackConversationReplies,
} from "./slack.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";

type SlackProfileType = FromSchema<typeof SlackProfile>;
type SlackPostMessageBodyType = FromSchema<typeof SlackPostMessageBody>;
type SlackPostMessageType = FromSchema<typeof SlackPostMessage>;
type SlackConversationsInputType = FromSchema<typeof SlackConversationsInput>;
type SlackConversationsType = FromSchema<typeof SlackConversations>;
type SlackConversationHistoryInputType = FromSchema<
  typeof SlackConversationHistoryInput
>;
type SlackConversationHistoryType = FromSchema<typeof SlackConversationHistory>;
type SlackConversationRepliesInputType = FromSchema<
  typeof SlackConversationRepliesInput
>;
type SlackConversationRepliesType = FromSchema<typeof SlackConversationReplies>;

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
];

async function getProfile(
  authClient: Axios,
  params?: null
): Promise<SlackProfileType> {
  const { data }: any = await authClient.get("/users.profile.get");
  return data.profile;
}

async function getConversations(
  authClient: Axios,
  params?: any
): Promise<SlackConversationsType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
    if (paramsString.charAt(0) === "&") {
      paramsString = "?" + paramsString.slice(1);
    }
  }
  const { data }: any = await authClient.get(
    `/conversations.list${paramsString}`
  );
  return data;
}

async function getConversationHistory(
  authClient: Axios,
  params: any
): Promise<SlackConversationHistoryType> {
  const { data }: any = await authClient.post("/conversations.history", params);
  return data;
}

async function getConversationReplies(
  authClient: Axios,
  params: any
): Promise<SlackConversationHistoryType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
    if (paramsString.charAt(0) === "&") {
      paramsString = "?" + paramsString.slice(1);
    }
  }
  const { data }: any = await authClient.get(
    `/conversations.replies${paramsString}`
  );
  return data;
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
        "A messaging app for business that connects people to the information they need.",
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

  public isTokenExpired(accessCredentials: any): boolean {
    if (new Date() > new Date(accessCredentials.expires)) {
      return true;
    }
    return false;
  }

  public async getExternalAccountId(authClient: Axios) {
    const { data } = await authClient.get("/users.identity");
    if (data.ok) {
      return data.user.id.toString();
    }
    return "";
  }

  public getSourceJSONSchema = () => null;
}
