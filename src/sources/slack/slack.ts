import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import { SlackProfile } from "./slack.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";

type SlackProfileType = FromSchema<typeof SlackProfile>;

const slack_api_url = "https://slack.com/api";
const slackScopes = [
  "chat:write",
  "channels:read",
  "channels:history",
  "profile",
];

async function getProfile(
  authClient: Axios,
  params?: null
): Promise<SlackProfileType> {
  const { data }: { data: SlackProfileType } = await authClient.get(
    "/openid.connect.userInfo"
  );
  return data;
}

export class Slack extends OAuth2Source implements Source {
  resources: {
    [x: string]: Resource<any, any>;
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
    };
    this.metadata = {
      name: this.getName(),
      friendlyName: "Slack",
      description:
        "A messaging app for business that connects people to the information they need.",
      icon: "https://www.vectorlogo.zone/util/preview.html?image=/logos/slack/slack-icon.svg",
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
      `${slack_api_url}/oauth.access?` +
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
        accessToken: data.access_token,
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
    const scopes = _.join(slackScopes, " ");
    const url =
      `https://slack.com/oauth/authorize?` +
      `scope=${encodeURIComponent(scopes)}` +
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
    const { sub } = await getProfile(authClient);
    if (sub) {
      return sub.toString();
    }
    return "";
  }

  public getSourceJSONSchema = () => null;
}
