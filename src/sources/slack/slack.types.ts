import { JSONSchema } from "json-schema-to-ts";

export const SlackProfile = {
  title: "SlackProfile",
  description: "A slack profile",
  type: "object",
  properties: {
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
} as const satisfies JSONSchema;

export const SlackPostMessage = {
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
} as const satisfies JSONSchema;

export const SlackPostMessageBody = {
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
} as const satisfies JSONSchema;
