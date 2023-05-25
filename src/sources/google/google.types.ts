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
    q: {
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
            properties: {
              id: {
                type: "string",
                description: "The id of the message",
              },
              threadId: {
                type: "string",
                description: "The threadId of the message",
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

export const GoogleDraftInput = {
  title: "GoogleDraftInput",
  description: "The input for your google draft",
  type: "object",
  properties: {
    draftId: {
      type: "string",
      description: "The id of the draft",
    },
  },
  required: ["draftId"],
} as const satisfies JSONSchema;

export const GoogleDraft = {
  title: "GoogleDraft",
  description: "Your google draft",
  type: "object",
  properties: {
    id: { type: "string", description: "The id of the draft" },
    message: {
      type: "object",
      description: "The message of the draft",
      properties: {
        id: {
          type: "string",
          description: "The id of the message",
        },
        threadId: {
          type: "string",
          description: "The threadId of the message",
        },
        labelIds: {
          type: "array",
          description: "The labelIds of the message",
          items: { type: "string" },
        },
        snippet: {
          type: "string",
          description: "The snippet of the message",
        },
        historyId: {
          type: "string",
          description: "The historyId of the message",
        },
        internalDate: {
          type: "string",
          description: "The internalDate of the message",
        },
        payload: {
          type: "object",
          description: "The payload of the message",
          properties: {
            partId: {
              type: "string",
              description: "The partId of the payload",
            },
            mimeType: {
              type: "string",
              description: "The mimeType of the payload",
            },
            filename: {
              type: "string",
              description: "The filename of the payload",
            },
            headers: {
              type: "array",
              description: "The headers of the payload",
              items: {
                type: "object",
                properties: {
                  name: { type: "string" },
                  value: { type: "string" },
                },
              },
            },
            body: {
              type: "object",
              description: "The body of the payload",
              properties: {
                size: { type: "number" },
                data: { type: "string" },
                attachmentId: { type: "string" },
              },
            },
            parts: {
              type: "array",
              description: "The parts of the payload",
              items: {
                type: "object",
                properties: {
                  partId: {
                    type: "string",
                    description: "The partId of the part",
                  },
                  mimeType: {
                    type: "string",
                    description: "The mimeType of the part",
                  },
                  filename: {
                    type: "string",
                    description: "The filename of the part",
                  },
                  headers: {
                    type: "array",
                    description: "The headers of the part",
                    items: {
                      type: "object",
                      properties: {
                        name: { type: "string" },
                        value: { type: "string" },
                      },
                    },
                  },
                  body: {
                    type: "object",
                    description: "The body of the part",
                    properties: {
                      size: { type: "number" },
                      data: { type: "string" },
                      attachmentId: { type: "string" },
                    },
                  },
                },
              },
            },
          },
        },
        sizeEstimate: {
          type: "number",
          description: "The sizeEstimate of the message",
        },
        raw: {
          type: "string",
          description: "The raw message",
        },
      },
    },
  },
} as const satisfies JSONSchema;
