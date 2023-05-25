import { JSONSchema } from "json-schema-to-ts";

export const GoogleProfile = {
  title: "GoogleProfile",
  description: "A google profile",
  type: "object",
  properties: {
    emailAddress: { type: "string", description: "The email of the user" },
    messagesTotal: {
      type: "number",
      description: "The total messages of the user",
    },
    threadsTotal: {
      type: "number",
      description: "The total email threads of the user",
    },
    historyId: { type: "string", description: "The historyId of the user" },
  },
} as const satisfies JSONSchema;

export const GoogleDraftsInput = {
  title: "GoogleDraftsInput",
  description: "The input for your google drafts",
  type: "object",
  properties: {
    pageToken: {
      type: "string",
      description: "The page token for your drafts",
    },
    query: {
      type: "string",
      description: "The query for your drafts",
    },
  },
} as const satisfies JSONSchema;

export const GoogleDrafts = {
  title: "GoogleDrafts",
  description: "Your google drafts",
  type: "object",
  properties: {
    drafts: {
      type: "array",
      description: "A list of your google drafts",
      items: {
        type: "object",
        properties: {
          id: { type: "string", description: "The id of the draft" },
          message: {
            type: "object",
            description: "The message of the draft",
            items: {
              type: "object",
              properties: {
                id: { type: "string", description: "The id of the message" },
                threadId: {
                  type: "string",
                  description: "The threadId of the message",
                },
              },
            },
          },
        },
      },
    },
    nextPageToken: {
      type: "string",
      description: "The next page token for your drafts",
    },
    resultSizeEstimate: {
      type: "number",
      description: "The result size estimate for your drafts",
    },
  },
} as const satisfies JSONSchema;
