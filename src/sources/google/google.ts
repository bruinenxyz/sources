import { PostResource, Resource } from "../resource";
import { OAuth2Source, Source } from "../source";
import { FromSchema } from "json-schema-to-ts";
import {
  GoogleProfile,
  GoogleDraftsInput,
  GoogleDrafts,
  GoogleParsedDrafts,
  GoogleDraftInput,
  GoogleDraft,
  GoogleParsedDraft,
  GoogleLabels,
  GoogleLabelInput,
  GoogleLabel,
  GoogleMessagesInput,
  GoogleMessages,
  GoogleParsedMessages,
  GoogleMessageInput,
  GoogleMessage,
  GoogleParsedMessage,
  GoogleThreadsInput,
  GoogleThreads,
  GoogleParsedThreads,
  GoogleThreadInput,
  GoogleThread,
  GoogleParsedThread,
  GoogleCalendarsInput,
  GoogleCalendars,
  GoogleCalendarInput,
  GoogleCalendar,
  GoogleEventsInput,
  GoogleEvents,
  GoogleEventInput,
  GoogleEvent,
  GoogleDriveAbout,
  GoogleSharedDrivesInput,
  GoogleSharedDrives,
  GoogleSharedDriveInput,
  GoogleSharedDrive,
  GoogleDriveFilesInput,
  GoogleDriveFiles,
  GoogleDriveFileMetadataInput,
  GoogleDriveFileMetadata,
  GoogleDriveFileInput,
  GoogleDriveFile,
  GoogleDriveCreateFileBody,
  GoogleDriveCreateFileInput,
} from "./google.types";
import { Axios, AxiosResponse } from "axios";
import axios from "axios";
import * as _ from "lodash";
import qs from "qs";

type GoogleProfileType = FromSchema<typeof GoogleProfile>;
type GoogleDraftsInputType = FromSchema<typeof GoogleDraftsInput>;
type GoogleDraftsType = FromSchema<typeof GoogleDrafts>;
type GoogleParsedDraftsType = FromSchema<typeof GoogleParsedDrafts>;
type GoogleDraftInputType = FromSchema<typeof GoogleDraftInput>;
type GoogleDraftType = FromSchema<typeof GoogleDraft>;
type GoogleParsedDraftType = FromSchema<typeof GoogleParsedDraft>;
type GoogleLabelsType = FromSchema<typeof GoogleLabels>;
type GoogleLabelInputType = FromSchema<typeof GoogleLabelInput>;
type GoogleLabelType = FromSchema<typeof GoogleLabel>;
type GoogleMessagesInputType = FromSchema<typeof GoogleMessagesInput>;
type GoogleMessagesType = FromSchema<typeof GoogleMessages>;
type GoogleParsedMessagesType = FromSchema<typeof GoogleParsedMessages>;
type GoogleMessageInputType = FromSchema<typeof GoogleMessageInput>;
type GoogleMessageType = FromSchema<typeof GoogleMessage>;
type GoogleParsedMessageType = FromSchema<typeof GoogleParsedMessage>;
type GoogleThreadsInputType = FromSchema<typeof GoogleThreadsInput>;
type GoogleThreadsType = FromSchema<typeof GoogleThreads>;
type GoogleParsedThreadsType = FromSchema<typeof GoogleParsedThreads>;
type GoogleThreadInputType = FromSchema<typeof GoogleThreadInput>;
type GoogleThreadType = FromSchema<typeof GoogleThread>;
type GoogleParsedThreadType = FromSchema<typeof GoogleParsedThread>;
type GoogleCalendarsInputType = FromSchema<typeof GoogleCalendarsInput>;
type GoogleCalendarsType = FromSchema<typeof GoogleCalendars>;
type GoogleCalendarInputType = FromSchema<typeof GoogleCalendarInput>;
type GoogleCalendarType = FromSchema<typeof GoogleCalendar>;
type GoogleEventsInputType = FromSchema<typeof GoogleEventsInput>;
type GoogleEventsType = FromSchema<typeof GoogleEvents>;
type GoogleEventInputType = FromSchema<typeof GoogleEventInput>;
type GoogleEventType = FromSchema<typeof GoogleEvent>;
type GoogleDriveAboutType = FromSchema<typeof GoogleDriveAbout>;
type GoogleSharedDrivesInputType = FromSchema<typeof GoogleSharedDrivesInput>;
type GoogleSharedDrivesType = FromSchema<typeof GoogleSharedDrives>;
type GoogleSharedDriveInputType = FromSchema<typeof GoogleSharedDriveInput>;
type GoogleSharedDriveType = FromSchema<typeof GoogleSharedDrive>;
type GoogleDriveFilesInputType = FromSchema<typeof GoogleDriveFilesInput>;
type GoogleDriveFilesType = FromSchema<typeof GoogleDriveFiles>;
type GoogleDriveFileMetadataInputType = FromSchema<
  typeof GoogleDriveFileMetadataInput
>;
type GoogleDriveFileMetadataType = FromSchema<typeof GoogleDriveFileMetadata>;
type GoogleDriveFileInputType = FromSchema<typeof GoogleDriveFileInput>;
type GoogleDriveFileType = FromSchema<typeof GoogleDriveFile>;
type GoogleDriveCreateFileBodyType = FromSchema<
  typeof GoogleDriveCreateFileBody
>;
type GoogleDriveCreateFileInputType = FromSchema<
  typeof GoogleDriveCreateFileInput
>;

const google_auth_url = "https://accounts.google.com/o/oauth2/v2/auth";
const google_token_url = "https://oauth2.googleapis.com";
const google_gmail_url = "https://gmail.googleapis.com/gmail/v1/users/me";
const google_calendar_url = "https://www.googleapis.com/calendar/v3";
const google_drive_url = "https://www.googleapis.com/drive/v3";

// To view Google API Scopes go to https://developers.google.com/identity/protocols/oauth2/scopes
const googleScopes = [
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/gmail.readonly",
  "https://www.googleapis.com/auth/calendar.settings.readonly",
  "https://www.googleapis.com/auth/calendar.readonly",
  "https://www.googleapis.com/auth/calendar.events.readonly",
  "https://www.googleapis.com/auth/drive",
];

function generateParamsString(params: any): string {
  if (params) {
    const cleanParams = { ...params };
    delete cleanParams["accountId"];
    if (Object.keys(cleanParams).length) {
      return qs.stringify(cleanParams, {
        addQueryPrefix: true,
        encode: false,
      });
    }
  }
  return "";
}

function findBody(partsArray: any[]): string {
  for (let i = 0; i < partsArray.length; i++) {
    const mimeType = partsArray[i].mimeType;
    if (mimeType === "text/plain") {
      const body = partsArray[i].body.data;
      return Buffer.from(body, "base64").toString("utf-8");
    } else if (partsArray[i].parts) {
      const body = findBody(partsArray[i].parts);
      if (!!body) {
        return body;
      }
    }
  }
  return "";
}

function extractRecipients(value: string) {
  const regex = /(([\w,\"\s]+)\s)?<?([^@<\s]+@[^@\s>]+)>?,/g;
  let m;
  let recipientsArray = [];
  while ((m = regex.exec(value)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    let name = "";
    let email = "";

    if (m[2]) {
      name = m[2].replace(/,$/, "").replace(/"/g, "").trim(); // strip whitespaces and commas, and remove quotation marks
    }

    if (m[3]) {
      email = m[3].replace(/,$/, "").trim(); // strip whitespaces and commas from end of string
    }

    let item = {
      name: name,
      email: email,
    };
    recipientsArray.push(item);
  }
  return recipientsArray;
}

async function getProfile(
  authClient: Axios,
  params?: null
): Promise<GoogleProfileType> {
  const { data }: { data: GoogleProfileType } = await authClient.get(
    "/profile"
  );
  return data;
}

async function getDrafts(
  authClient: Axios,
  params?: any
): Promise<GoogleDraftsType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
  }
  const { data } = await authClient.get(
    `/drafts?maxResults=500${paramsString}`
  );
  return {
    ..._.pick(data, ["resultSizeEstimate", "drafts", "nextPageToken"]),
  };
}

async function getParsedDrafts(
  authClient: Axios,
  params?: any
): Promise<GoogleParsedDraftsType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
  }
  const { data } = await authClient.get(`/drafts?maxResults=50${paramsString}`);
  const rawDrafts = {
    ..._.pick(data, ["resultSizeEstimate", "drafts", "nextPageToken"]),
  };
  const parsedDrafts = await Promise.all(
    rawDrafts.drafts.map((rawDraft: any) => {
      return getParsedDraft(authClient, { draftId: rawDraft.id });
    })
  );
  return { ...rawDrafts, drafts: parsedDrafts };
}

async function getDraft(
  authClient: Axios,
  params: any
): Promise<GoogleDraftType> {
  const { data } = await authClient.get(
    `/drafts/${params.draftId}?format=full`
  );
  return data;
}

async function getParsedDraft(
  authClient: Axios,
  params: any
): Promise<GoogleParsedDraftType> {
  try {
    const rawDraft: GoogleDraftType = await getDraft(authClient, params);
    if (!rawDraft.message) {
      throw new Error("No message found in draft");
    }
    if (!rawDraft.message.payload) {
      throw new Error("No payload found in draft");
    }
    if (!rawDraft.message.payload.headers) {
      throw new Error("No headers found in draft");
    }
    if (!rawDraft.message.payload.parts) {
      throw new Error("No parts found in draft");
    }

    //Headers
    const headers = rawDraft.message.payload.headers;
    const date = headers.find((header) => header.name === "Date");
    const subject = headers.find((header) => header.name === "Subject");
    const from = headers.find((header) => header.name === "From");
    const to = headers.find((header) => header.name === "To");
    const cc = headers.find((header) => header.name === "Cc");
    const bcc = headers.find((header) => header.name === "Bcc");

    //Parts
    const parts = rawDraft.message.payload.parts;

    //Attachments
    const attachments = parts
      .filter((part) => part.body?.attachmentId)
      .map((part) => {
        return {
          attachmentId: part.body?.attachmentId,
          mimeType: part.mimeType,
          filename: part.filename,
          contentType: part.headers?.find(
            (header) => header.name === "Content-Type"
          )?.value,
          contentDisposition: part.headers?.find(
            (header) => header.name === "Content-Disposition"
          )?.value,
          contentTransferEncoding: part.headers?.find(
            (header) => header.name === "Content-Transfer-Encoding"
          )?.value,
          size: part.body?.size,
        };
      });

    return {
      id: rawDraft.id,
      messageId: rawDraft.message.id,
      threadId: rawDraft.message.threadId,
      labelIds: rawDraft.message.labelIds,
      headers: {
        date: date ? date.value : "",
        subject: subject ? subject.value : "",
        from: from?.value
          ? extractRecipients(from.value + ",")[0]
          : { name: "", email: "" },
        to: to?.value ? extractRecipients(to.value + ",") : [],
        cc: cc?.value ? extractRecipients(cc.value + ",") : [],
        bcc: bcc?.value ? extractRecipients(bcc.value + ",") : [],
      },
      body: findBody(parts),
      attachments: attachments,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function getLabels(
  authClient: Axios,
  params?: null
): Promise<GoogleLabelsType> {
  const { data } = await authClient.get(`/labels`);
  return { resultSizeEstimate: data.labels.length, labels: data.labels };
}

async function getLabel(
  authClient: Axios,
  params: any
): Promise<GoogleLabelType> {
  const { data } = await authClient.get(`/labels/${params.labelId}`);
  return data;
}

async function getMessages(
  authClient: Axios,
  params?: any
): Promise<GoogleMessagesType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
  }
  const { data } = await authClient.get(
    `/messages?maxResults=500${paramsString}`
  );
  return {
    ..._.pick(data, ["resultSizeEstimate", "messages", "nextPageToken"]),
  };
}

async function getParsedMessages(
  authClient: Axios,
  params?: any
): Promise<GoogleParsedMessagesType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
  }
  const { data } = await authClient.get(
    `/messages?maxResults=50${paramsString}`
  );
  const rawMessages = {
    ..._.pick(data, ["resultSizeEstimate", "messages", "nextPageToken"]),
  };
  const parsedMessages = await Promise.all(
    rawMessages.messages.map((rawMessage: any) => {
      return getParsedMessage(authClient, { messageId: rawMessage.id });
    })
  );
  return { ...rawMessages, messages: parsedMessages };
}

async function getMessage(
  authClient: Axios,
  params: any
): Promise<GoogleMessageType> {
  const { data } = await authClient.get(
    `/messages/${params.messageId}?format=full`
  );
  return data;
}

async function getParsedMessage(
  authClient: Axios,
  params: any
): Promise<GoogleParsedMessageType> {
  try {
    const rawMessage: GoogleMessageType = await getMessage(authClient, params);
    if (!rawMessage) {
      throw new Error("No message found");
    }
    if (!rawMessage.payload) {
      throw new Error("No payload found in message");
    }
    if (!rawMessage.payload.headers) {
      throw new Error("No headers found in message");
    }
    let parts: any[] = [];
    if (rawMessage.payload.parts) {
      parts = rawMessage.payload.parts;
    }

    //Headers
    const headers = rawMessage.payload.headers;
    const date = headers.find((header) => header.name === "Date");
    const subject = headers.find((header) => header.name === "Subject");
    const from = headers.find((header) => header.name === "From");
    const to = headers.find((header) => header.name === "To");
    const cc = headers.find((header) => header.name === "Cc");
    const bcc = headers.find((header) => header.name === "Bcc");

    //Attachments
    const attachments = parts
      .filter((part) => part.body?.attachmentId)
      .map((part) => {
        return {
          attachmentId: part.body?.attachmentId,
          mimeType: part.mimeType,
          filename: part.filename,
          contentType: part.headers?.find(
            (header: any) => header.name === "Content-Type"
          )?.value,
          contentDisposition: part.headers?.find(
            (header: any) => header.name === "Content-Disposition"
          )?.value,
          contentTransferEncoding: part.headers?.find(
            (header: any) => header.name === "Content-Transfer-Encoding"
          )?.value,
          size: part.body?.size,
        };
      });

    return {
      id: rawMessage.id,
      threadId: rawMessage.threadId,
      labelIds: rawMessage.labelIds,
      headers: {
        date: date ? date.value : "",
        subject: subject ? subject.value : "",
        from: from?.value
          ? extractRecipients(from.value + ",")[0]
          : { name: "", email: "" },
        to: to?.value ? extractRecipients(to.value + ",") : [],
        cc: cc?.value ? extractRecipients(cc.value + ",") : [],
        bcc: bcc?.value ? extractRecipients(bcc.value + ",") : [],
      },
      body: findBody(parts),
      attachments: attachments,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function getThreads(
  authClient: Axios,
  params?: any
): Promise<GoogleThreadsType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
  }
  const { data } = await authClient.get(
    `/threads?maxResults=500${paramsString}`
  );
  return {
    ..._.pick(data, ["resultSizeEstimate", "threads", "nextPageToken"]),
  };
}

async function getParsedThreads(
  authClient: Axios,
  params?: any
): Promise<GoogleParsedThreadsType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
  }
  const { data } = await authClient.get(
    `/threads?maxResults=50${paramsString}`
  );
  const rawThreads = {
    ..._.pick(data, ["resultSizeEstimate", "threads", "nextPageToken"]),
  };
  const parsedThreads = await Promise.all(
    rawThreads.threads.map((rawThread: any) => {
      return getParsedThread(authClient, { threadId: rawThread.id });
    })
  );
  return { ...rawThreads, threads: parsedThreads };
}

async function getThread(
  authClient: Axios,
  params: any
): Promise<GoogleThreadType> {
  const { data } = await authClient.get(
    `/threads/${params.threadId}?format=full`
  );
  return data;
}

async function getParsedThread(
  authClient: Axios,
  params: any
): Promise<GoogleParsedThreadType> {
  try {
    const rawThread: GoogleThreadType = await getThread(authClient, params);
    const rawMessages = rawThread.messages;
    if (!rawMessages) {
      throw new Error("No messages found");
    }
    const messages = rawMessages.map((rawMessage: any) => {
      if (!rawMessage) {
        throw new Error("No message found");
      }
      if (!rawMessage.payload) {
        throw new Error("No payload found in message");
      }
      if (!rawMessage.payload.headers) {
        throw new Error("No headers found in message");
      }
      let parts: any[] = [];
      if (rawMessage.payload.parts) {
        parts = rawMessage.payload.parts;
      }

      //Headers
      const headers = rawMessage.payload.headers;
      const date = headers.find((header: any) => header.name === "Date");
      const subject = headers.find((header: any) => header.name === "Subject");
      const from = headers.find((header: any) => header.name === "From");
      const to = headers.find((header: any) => header.name === "To");
      const cc = headers.find((header: any) => header.name === "Cc");
      const bcc = headers.find((header: any) => header.name === "Bcc");

      //Attachments
      const attachments = parts
        .filter((part: any) => part.body?.attachmentId)
        .map((part: any) => {
          return {
            attachmentId: part.body?.attachmentId,
            mimeType: part.mimeType,
            filename: part.filename,
            contentType: part.headers?.find(
              (header: any) => header.name === "Content-Type"
            )?.value,
            contentDisposition: part.headers?.find(
              (header: any) => header.name === "Content-Disposition"
            )?.value,
            contentTransferEncoding: part.headers?.find(
              (header: any) => header.name === "Content-Transfer-Encoding"
            )?.value,
            size: part.body?.size,
          };
        });

      return {
        id: rawMessage.id,
        threadId: rawMessage.threadId,
        labelIds: rawMessage.labelIds,
        headers: {
          date: date ? date.value : "",
          subject: subject ? subject.value : "",
          from: from?.value
            ? extractRecipients(from.value + ",")[0]
            : { name: "", email: "" },
          to: to?.value ? extractRecipients(to.value + ",") : [],
          cc: cc?.value ? extractRecipients(cc.value + ",") : [],
          bcc: bcc?.value ? extractRecipients(bcc.value + ",") : [],
        },
        body: findBody(parts),
        attachments: attachments,
      };
    });
    return {
      id: rawThread.id,
      messages: messages,
    };
  } catch (error) {
    throw new Error(error);
  }
}

async function getCalendars(
  authClient: Axios,
  params?: any
): Promise<GoogleCalendarsType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      paramsString += `&${key}=${params[key] as string}`;
    });
  }
  const { data } = await authClient.get(
    `/users/me/calendarList?maxResults=250${paramsString}`
  );
  return {
    ..._.pick(data, ["kind", "etag", "nextPageToken", "nextSyncToken"]),
    resultSizeEstimate: data.items.length,
    calendars: data.items,
  };
}

async function getCalendar(
  authClient: Axios,
  params: any
): Promise<GoogleCalendarType> {
  const { data } = await authClient.get(`/calendars/${params.calendarId}`);
  return data;
}

async function getEvents(
  authClient: Axios,
  params?: any
): Promise<GoogleEventsType> {
  let paramsString = "";
  if (params) {
    Object.keys(params).forEach((key: string) => {
      if (key !== "calendarId") {
        paramsString += `&${key}=${params[key] as string}`;
      }
    });
  }
  const { data } = await authClient.get(
    `/calendars/${
      params.calendarId ? params.calendarId : "primary"
    }/events?maxResults=2000${paramsString}`
  );
  return {
    ..._.pick(data, [
      "kind",
      "etag",
      "summary",
      "description",
      "updated",
      "timeZone",
      "accessRole",
      "defaultReminders",
      "nextPageToken",
      "nextSyncToken",
    ]),
    resultSizeEstimate: data.items.length,
    events: data.items,
  };
}

async function getEvent(
  authClient: Axios,
  params: any
): Promise<GoogleEventType> {
  const { data } = await authClient.get(
    `/calendars/${params.calendarId}/events/${params.eventId}${
      params.timeZone ? `?timeZone=${params.timeZone}` : ""
    }`
  );
  return data;
}

async function getDriveAbout(
  authClient: Axios,
  params?: null
): Promise<GoogleDriveAboutType> {
  const { data } = await authClient
    .get("/about?fields=user,storageQuota")
    .catch((error) => {
      return error.response;
    });
  return data;
}

async function getSharedDrives(
  authClient: Axios,
  params?: any
): Promise<GoogleSharedDrivesType> {
  const paramString = generateParamsString(params);
  const { data } = await authClient.get(`/drives${paramString}`);
  return data;
}

async function getSharedDrive(
  authClient: Axios,
  params: any
): Promise<GoogleSharedDriveType> {
  const paramString = generateParamsString(_.omit(params, ["driveId"]));
  const { data } = await authClient.get(
    `/drives/${params.driveId}${paramString}}`
  );
  return data;
}

async function getDriveFiles(
  authClient: Axios,
  params?: any
): Promise<GoogleDriveFilesType> {
  const paramString = generateParamsString(params);
  const { data } = await authClient.get(`/files${paramString}`);
  return data;
}

async function getDriveFileMetadata(
  authClient: Axios,
  params: any
): Promise<GoogleDriveFileMetadataType> {
  params["fields"] =
    "id,name,mimeType,parents,modifiedTime,createdTime,size,webViewLink,iconLink,thumbnailLink,hasThumbnail";
  const paramString = generateParamsString(_.omit(params, ["fileId"]));
  const { data } = await authClient.get(
    `/files/${params.fileId}${paramString}`
  );
  return data;
}

async function getDriveFile(
  authClient: Axios,
  params: any
): Promise<GoogleDriveFileType> {
  const metadata = await getDriveFileMetadata(
    authClient,
    _.omit(params, ["acknowledgeAbuse"])
  );
  switch (metadata.mimeType) {
    case "application/vnd.google-apps.document":
      const docResponse = await authClient.get(
        `/files/${params.fileId}/export?mimeType=text/plain`
      );
      return { ...metadata, fileContent: String(docResponse.data) };
    case "application/vnd.google-apps.spreadsheet":
      const sheetResponse = await authClient.get(
        `/files/${params.fileId}/export?mimeType=text/csv`
      );
      return { ...metadata, fileContent: String(sheetResponse.data) };
    default:
      return {
        ...metadata,
        fileContent:
          "ERROR: The requested file's content-type isn't currently supported.",
      };
  }
}

async function createDriveFile(
  authClient: Axios,
  body: any,
  params: any
): Promise<GoogleDriveFileMetadataType> {
  const metadata = { ...body.metadata };
  const content = body.content;
  const boundary = "-------314159265358979323846";
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;
  switch (params.fileType) {
    case "document":
      metadata["mimeType"] = "application/vnd.google-apps.document";
      break;
    case "spreadsheet":
      metadata["mimeType"] = "application/vnd.google-apps.spreadsheet";
      break;
    default:
      throw new Error("Invalid file type");
  }
  const metadataString = [
    delimiter,
    "Content-Type: application/json; charset=UTF-8",
    "",
    JSON.stringify(metadata),
  ].join("\r\n");
  const contentString = [
    delimiter,
    "Content-Type: text/plain",
    "",
    Buffer.from(content, "base64"),
  ].join("\r\n");
  const requestBody = [metadataString, contentString, closeDelimiter].join("");
  const { data }: any = await authClient
    .post("/files?uploadType=multipart", requestBody, {
      headers: { "Content-Type": `multipart/related; boundary=${boundary}` },
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}

export class Google extends OAuth2Source implements Source {
  resources: {
    [x: string]: Resource<any, any> | PostResource<any, any, any>;
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
      drafts: new Resource<GoogleDraftsInputType, GoogleDraftsType>(
        "drafts",
        "Google Drafts",
        "get",
        "Your gmail drafts",
        getDrafts,
        GoogleDraftsInput,
        GoogleDrafts
      ),
      parsedDrafts: new Resource<GoogleDraftsInputType, GoogleParsedDraftsType>(
        "parsedDrafts",
        "Google Parsed Drafts",
        "get",
        "Your gmail parsed drafts",
        getParsedDrafts,
        GoogleDraftsInput,
        GoogleParsedDrafts
      ),
      draft: new Resource<GoogleDraftInputType, GoogleDraftType>(
        "draft",
        "Google Draft",
        "get",
        "Your gmail draft",
        getDraft,
        GoogleDraftInput,
        GoogleDraft
      ),
      parsedDraft: new Resource<GoogleDraftInputType, GoogleParsedDraftType>(
        "parsedDraft",
        "Google Parsed Draft",
        "get",
        "Your gmail parsed draft",
        getParsedDraft,
        GoogleDraftInput,
        GoogleParsedDraft
      ),
      labels: new Resource<null, GoogleLabelsType>(
        "labels",
        "Google Labels",
        "get",
        "Your gmail labels",
        getLabels,
        null,
        GoogleLabels
      ),
      label: new Resource<GoogleLabelInputType, GoogleLabelType>(
        "label",
        "Google Label",
        "get",
        "Your gmail label",
        getLabel,
        GoogleLabelInput,
        GoogleLabel
      ),
      messages: new Resource<GoogleMessagesInputType, GoogleMessagesType>(
        "messages",
        "Google Messages",
        "get",
        "Your gmail messages",
        getMessages,
        GoogleMessagesInput,
        GoogleMessages
      ),
      parsedMessages: new Resource<
        GoogleMessagesInputType,
        GoogleParsedMessagesType
      >(
        "parsedMessages",
        "Google Parsed Messages",
        "get",
        "Your gmail parsed messages",
        getParsedMessages,
        GoogleMessagesInput,
        GoogleParsedMessages
      ),
      message: new Resource<GoogleMessageInputType, GoogleMessageType>(
        "message",
        "Google Message",
        "get",
        "Your gmail message",
        getMessage,
        GoogleMessageInput,
        GoogleMessage
      ),
      parsedMessage: new Resource<
        GoogleMessageInputType,
        GoogleParsedMessageType
      >(
        "parsedMessage",
        "Google Parsed Message",
        "get",
        "Your gmail parsed message",
        getParsedMessage,
        GoogleMessageInput,
        GoogleParsedMessage
      ),
      threads: new Resource<GoogleThreadsInputType, GoogleThreadsType>(
        "threads",
        "Google Threads",
        "get",
        "Your gmail threads",
        getThreads,
        GoogleThreadsInput,
        GoogleThreads
      ),
      parsedThreads: new Resource<
        GoogleThreadsInputType,
        GoogleParsedThreadsType
      >(
        "parsedThreads",
        "Google Parsed Threads",
        "get",
        "Your gmail parsed threads",
        getParsedThreads,
        GoogleThreadsInput,
        GoogleParsedThreads
      ),
      thread: new Resource<GoogleThreadInputType, GoogleThreadType>(
        "thread",
        "Google Thread",
        "get",
        "Your gmail thread",
        getThread,
        GoogleThreadInput,
        GoogleThread
      ),
      parsedThread: new Resource<GoogleThreadInputType, GoogleParsedThreadType>(
        "parsedThread",
        "Google Parsed Thread",
        "get",
        "Your gmail parsed thread",
        getParsedThread,
        GoogleThreadInput,
        GoogleParsedThread
      ),
      calendars: new Resource<GoogleCalendarsInputType, GoogleCalendarsType>(
        "calendars",
        "Google Calendars",
        "get",
        "Your google calendars",
        getCalendars,
        GoogleCalendarsInput,
        GoogleCalendars
      ),
      calendar: new Resource<GoogleCalendarInputType, GoogleCalendarType>(
        "calendar",
        "Google Calendar",
        "get",
        "Your google calendar",
        getCalendar,
        GoogleCalendarInput,
        GoogleCalendar
      ),
      events: new Resource<GoogleEventsInputType, GoogleEventsType>(
        "events",
        "Google Events",
        "get",
        "Your google events",
        getEvents,
        GoogleEventsInput,
        GoogleEvents
      ),
      event: new Resource<GoogleEventInputType, GoogleEventType>(
        "event",
        "Google Event",
        "get",
        "Your google event",
        getEvent,
        GoogleEventInput,
        GoogleEvent
      ),
      driveAbout: new Resource<null, GoogleDriveAboutType>(
        "driveAbout",
        "Google Drive About",
        "get",
        "Information about the user, the user's Drive, and system capabilities.",
        getDriveAbout,
        null,
        GoogleDriveAbout
      ),
      sharedDrives: new Resource<
        GoogleSharedDrivesInputType,
        GoogleSharedDrivesType
      >(
        "sharedDrives",
        "Google Shared Drives",
        "get",
        "Your google shared drives, excluding the user's `My Drive`",
        getSharedDrives,
        GoogleSharedDrivesInput,
        GoogleSharedDrives
      ),
      sharedDrive: new Resource<
        GoogleSharedDriveInputType,
        GoogleSharedDriveType
      >(
        "sharedDrive",
        "Google Shared Drive",
        "get",
        "A google shared drive",
        getSharedDrive,
        GoogleSharedDriveInput,
        GoogleSharedDrive
      ),
      driveFiles: new Resource<GoogleDriveFilesInputType, GoogleDriveFilesType>(
        "driveFiles",
        "Google Drive Files",
        "get",
        "Your google drive files",
        getDriveFiles,
        GoogleDriveFilesInput,
        GoogleDriveFiles
      ),
      driveFileMetadata: new Resource<
        GoogleDriveFileMetadataInputType,
        GoogleDriveFileMetadataType
      >(
        "driveFileMetadata",
        "Google Drive File Metadata",
        "get",
        "Your google drive file metadata",
        getDriveFileMetadata,
        GoogleDriveFileInput,
        GoogleDriveFileMetadata
      ),
      driveFile: new Resource<GoogleDriveFileInputType, GoogleDriveFileType>(
        "driveFile",
        "Google Drive File",
        "get",
        "Your google drive file",
        getDriveFile,
        GoogleDriveFileInput,
        GoogleDriveFile
      ),
      createDriveFile: new PostResource<
        GoogleDriveCreateFileBodyType,
        GoogleDriveCreateFileInputType,
        GoogleDriveFileMetadataType
      >(
        "createDriveFile",
        "Google Drive Create File",
        "post",
        "Create a google drive file",
        createDriveFile,
        GoogleDriveCreateFileBody,
        GoogleDriveCreateFileInput,
        GoogleDriveFileMetadata
      ),
    };
    this.metadata = {
      name: this.getName(),
      friendlyName: "Google",
      description:
        "Provider of online services including search, email, storage, productivity tools, advertising, and mobile OS",
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

  public getBaseUrl = (resourceName: string) => {
    const calendarArray = ["calendars", "calendar", "events", "event"];
    const driveArray = [
      "driveAbout",
      "sharedDrives",
      "sharedDrive",
      "driveFiles",
      "driveFileMetadata",
      "driveFile",
      "createDriveFile",
    ];
    if (resourceName && calendarArray.includes(resourceName)) {
      return google_calendar_url;
    } else if (resourceName && driveArray.includes(resourceName)) {
      if (resourceName === "createDriveFile") {
        return "https://www.googleapis.com/upload/drive/v3";
      }
      return google_drive_url;
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

  public async deactivate(accessCredentials: any) {
    try {
      const { data } = await axios.post(
        `${google_token_url}/revoke?token=${accessCredentials.accessToken}`
      );
      return "success";
    } catch (error) {
      return `Google deactivation error: ${error}`;
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
      `&prompt=select_account` +
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

  public async refreshToken(authCredential: any, accessCredential: any) {
    const url =
      `${google_token_url}/token?` +
      `client_id=${authCredential.id}` +
      `&client_secret=${authCredential.secret}` +
      `&grant_type=refresh_token` +
      `&refresh_token=${accessCredential.refreshToken}`;
    try {
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
        refreshToken: accessCredential.refreshToken,
        expires,
      };
    } catch (error) {
      return { error: error };
    }
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
