import { Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import { GoogleProfile } from "./google.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";

type GoogleProfileType = FromSchema<typeof GoogleProfile>;

const google_auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
const google_token_url = "https://oauth2.googleapis.com";
const google_gmail_url = "https://gmail.googleapis.com/gmail/v1/users/me";
const google_calendar_url = "https://www.googleapis.com/calendar/v3";

// To view Google API Scopes go to https://developers.google.com/identity/protocols/oauth2/scopes
const googleScopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/gmail.readonly",
  "https://www.googleapis.com/auth/calendar.settings.readonly",
  "https://www.googleapis.com/auth/calendar.readonly",
  "https://www.googleapis.com/auth/calendar.events.readonly",
];

async function getProfile(
  authClient: Axios,
  params?: null
): Promise<GoogleProfileType> {
  const { data }: { data: GoogleProfileType } = await authClient.get(
    "/profile"
  );
  return data;
}

export class Google extends OAuth2Source implements Source {
  resources: {
    [x: string]: Resource<any, any>;
  };
  description: string;

  public constructor() {
    super("google");
    this.description = "A source for Google";
    this.resources = {
      profile: new Resource<null, GoogleProfileType>(
        "profile",
        "Google Profile",
        "get",
        "Your basic google profile",
        getProfile,
        null,
        GoogleProfile
      ),
    };
    this.metadata = {
      name: this.getName(),
      friendlyName: "Google",
      description:
        "Provider of online services including search, email, storage, productivity tools, advertising, and mobile OS.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      color: ["#eb4132", "#fbbd01", "#31a952", "#4086f4"],
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

  public getBaseUrl = (resourceName?: string) => {
    const calendarArray = [""]; //TODO: complete array
    if (calendarArray.includes(resourceName as string)) {
      return google_calendar_url;
    } else {
      return google_gmail_url;
    }
  };

  public getAuthHeaders = (credential: {
    accessToken: string;
    refreshToken: string;
    expires: Date;
  }) => {
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
      `${google_token_url}/token?` +
      `client_id=${credentials.id}` +
      `&client_secret=${credentials.secret}` +
      `&code=${code}` +
      "&grant_type=authorization_code" +
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

      let expires = new Date();
      expires.setSeconds(expires.getSeconds() + data.expires_in);

      return {
        accessToken: data.access_token,
        refreshToken: data.refresh_token,
        expires,
      };
    } catch (error) {
      return "";
    }
  }

  public async deactivate(accessCredentials?: string) {
    const access = await JSON.parse(accessCredentials as string);
    try {
      const { data } = await axios.post(
        `${google_token_url}/revoke?token=${access.accessToken}`
      );
      return;
    } catch (error) {
      console.log(`Google deactivation error: ${error}`);
      return;
    }
  }

  public getAuthUrl = (
    state: string,
    credentials: any,
    redirectUrl: string
  ) => {
    const scopes = _.join(googleScopes, " ");
    const url =
      `${google_auth_url}?` +
      `scope=${encodeURIComponent(scopes)}` +
      `&access_type=offline` +
      `&response_type=code` +
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

  public async refreshToken(authCredential: any, refreshToken: string) {
    const url =
      `${google_token_url}/token?` +
      `client_id=${authCredential.id}` +
      `&client_secret=${authCredential.secret}` +
      `&grant_type=refresh_token` +
      `&refresh_token=${refreshToken}`;
    const { data } = await axios.post(
      url,
      {},
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    let expires = new Date();
    expires.setSeconds(expires.getSeconds() + data.expires_in);

    return {
      accessToken: data.access_token,
      refreshToken: refreshToken,
      expires,
    };
  }

  public async getExternalAccountId(authClient: Axios) {
    const { emailAddress } = await getProfile(authClient);
    if (emailAddress) {
      return emailAddress.toString();
    }
    return "";
  }

  public getSourceJSONSchema = () => null;
}
