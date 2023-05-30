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
                  parts: {
                    type: "array",
                    description: "The parts of the part",
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
                          },
                        },
                      },
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

export const GoogleParsedDraft = {
  title: "GoogleParsedDraft",
  description: "Your google parsed draft",
  type: "object",
  properties: {
    id: { type: "string", description: "The id of the draft" },
    messageId: { type: "string", description: "The id of the draft" },
    threadId: { type: "string", description: "The threadId of the draft" },
    labelIds: { type: "array", description: "The labelIds of the draft" },
    headers: {
      type: "object",
      description: "The headers of the draft",
      properties: {
        date: { type: "string", description: "The date of the draft" },
        subject: { type: "string", description: "The subject of the draft" },
        from: {
          type: "object",
          description: "The writer of the draft",
          properties: {
            name: { type: "string", description: "The name of the writer" },
            email: { type: "string", description: "The email of the writer" },
          },
        },
        to: {
          type: "array",
          description: "The receivers of the draft",
          items: {
            type: "object",
            description: "A recipients of the draft",
            properties: {
              name: {
                type: "string",
                description: "The name of the recipient",
              },
              email: {
                type: "string",
                description: "The email of the recipient",
              },
            },
          },
        },
        cc: {
          type: "array",
          description: "The ccs of the draft",
          items: {
            type: "object",
            description: "A cc of the draft",
            properties: {
              name: {
                type: "string",
                description: "The name of the cc",
              },
              email: {
                type: "string",
                description: "The email of the cc",
              },
            },
          },
        },
        bcc: {
          type: "array",
          description: "The bccs of the draft",
          items: {
            type: "object",
            description: "A bcc of the draft",
            properties: {
              name: {
                type: "string",
                description: "The name of the bcc",
              },
              email: {
                type: "string",
                description: "The email of the bcc",
              },
            },
          },
        },
      },
    },
    body: { type: "string", description: "The body of the draft" },
    attachments: {
      type: "array",
      description: "The attachments of the draft",
      items: {
        type: "object",
        description: "An attachment of the draft",
        properties: {
          attachmentId: {
            type: "string",
            description: "The attachmentId of the attachment",
          },
          mimeType: {
            type: "string",
            description: "The mimeType of the attachment",
          },
          filename: {
            type: "string",
            description: "The filename of the attachment",
          },
          contentType: {
            type: "string",
            description: "The contentType of the attachment",
          },
          contentDisposition: {
            type: "string",
            description: "The contentDisposition of the attachment",
          },
          contentTransferEncoding: {
            type: "string",
            description: "The contentTransferEncoding of the attachment",
          },
          size: { type: "number", description: "The size of the attachment" },
        },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleLabels = {
  title: "GoogleLabels",
  description: "Your google labels",
  type: "object",
  properties: {
    resultSizeEstimate: {
      type: "number",
      description: "The result size estimate for your labels",
    },
    labels: {
      type: "array",
      description: "A list of your google labels",
      items: {
        type: "object",
        properties: {
          id: { type: "string", description: "The id of the label" },
          name: { type: "string", description: "The name of the label" },
          messageListVisibility: {
            type: "string",
            description: "The messageListVisibility of the label",
          },
          labelListVisibility: {
            type: "string",
            description: "The labelListVisibility of the label",
          },
          type: { type: "string", description: "The type of the label" },
        },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleLabelInput = {
  title: "GoogleLabelInput",
  description: "The input for your google label",
  type: "object",
  properties: {
    labelId: {
      type: "string",
      description: "The id of the label",
    },
  },
  required: ["labelId"],
} as const satisfies JSONSchema;

export const GoogleLabel = {
  title: "GoogleLabel",
  description: "Your google label",
  type: "object",
  properties: {
    id: { type: "string", description: "The id of the label" },
    name: { type: "string", description: "The name of the label" },
    messageListVisibility: {
      type: "string",
      description: "The messageListVisibility of the label",
    },
    labelListVisibility: {
      type: "string",
      description: "The labelListVisibility of the label",
    },
    type: { type: "string", description: "The type of the label" },
    messagesTotal: {
      type: "number",
      description: "The total messages for the label",
    },
    messagesUnread: {
      type: "number",
      description: "The total unread messages for the label",
    },
    threadsTotal: {
      type: "number",
      description: "The total threads for the label",
    },
    threadsUnread: {
      type: "number",
      description: "The total unread threads for the label",
    },
    color: {
      type: "object",
      description: "The color of the label",
      properties: {
        textColor: { type: "string" },
        backgroundColor: { type: "string" },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleMessagesInput = {
  title: "GoogleMessagesInput",
  description: "The input for your google messages",
  type: "object",
  properties: {
    labelIds: {
      type: "string",
      description: "The labelIds of the messages",
    },
    pageToken: {
      type: "string",
      description: "The pageToken of the messages",
    },
    q: { type: "string", description: "The query of the messages" },
  },
} as const satisfies JSONSchema;

export const GoogleMessages = {
  title: "GoogleMessages",
  description: "Your google messages",
  type: "object",
  properties: {
    resultSizeEstimate: {
      type: "number",
      description: "The result size estimate for your messages",
    },
    nextPageToken: { type: "string", description: "The next page token" },
    messages: {
      type: "array",
      description: "A list of your google messages",
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
} as const satisfies JSONSchema;

export const GoogleMessageInput = {
  title: "GoogleMessageInput",
  description: "The input for your google message",
  type: "object",
  properties: {
    messageId: {
      type: "string",
      description: "The id of the message",
    },
  },
  required: ["messageId"],
} as const satisfies JSONSchema;

export const GoogleMessage = {
  title: "GoogleMessage",
  description: "Your google message",
  type: "object",
  properties: {
    id: { type: "string", description: "The id of the message" },
    threadId: { type: "string", description: "The threadId of the message" },
    labelIds: {
      type: "array",
      description: "The labelIds of the message",
      items: { type: "string" },
    },
    snippet: { type: "string", description: "The snippet of the message" },
    historyId: { type: "string", description: "The historyId of the message" },
    internalDate: {
      type: "string",
      description: "The internalDate of the message",
    },
    payload: {
      type: "object",
      description: "The payload of the message",
      properties: {
        partId: { type: "string", description: "The partId of the payload" },
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
            properties: { name: { type: "string" }, value: { type: "string" } },
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
              partId: { type: "string", description: "The partId of the part" },
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
  },
} as const satisfies JSONSchema;

export const GoogleThreadsInput = {
  title: "GoogleThreadsInput",
  description: "The input for your google threads",
  type: "object",
  properties: {
    labelIds: {
      type: "string",
      description: "The labelIds of the threads",
    },
    pageToken: {
      type: "string",
      description: "The pageToken of the threads",
    },
    q: { type: "string", description: "The query of the threads" },
  },
} as const satisfies JSONSchema;

export const GoogleThreads = {
  title: "GoogleThreads",
  description: "Your google threads",
  type: "object",
  properties: {
    resultSizeEstimate: {
      type: "number",
      description: "The result size estimate for your threads",
    },
    nextPageToken: { type: "string", description: "The next page token" },
    threads: {
      type: "array",
      description: "A list of your google threads",
      items: {
        type: "object",
        properties: {
          id: { type: "string", description: "The id of the thread" },
          snippet: { type: "string", description: "The snippet of the thread" },
          historyId: {
            type: "string",
            description: "The historyId of the thread",
          },
        },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleThreadInput = {
  title: "GoogleThreadInput",
  description: "The input for your google thread",
  type: "object",
  properties: {
    threadId: {
      type: "string",
      description: "The id of the thread",
    },
  },
  required: ["threadId"],
} as const satisfies JSONSchema;

export const GoogleThread = {
  title: "GoogleThread",
  description: "Your google thread",
  type: "object",
  properties: {
    id: { type: "string", description: "The id of the thread" },
    snippet: { type: "string", description: "The snippet of the thread" },
    historyId: { type: "string", description: "The historyId of the thread" },
    messages: {
      type: "array",
      description: "A list of the messages in the thread",
      items: {
        type: "object",
        properties: {
          id: { type: "string", description: "The id of the message" },
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
        },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleCalendarsInput = {
  title: "GoogleCalendarsInput",
  description: "The input for your google calendars",
  type: "object",
  properties: {
    pageToken: {
      type: "string",
      description: "The pageToken of the calendars",
    },
    showDeleted: {
      type: "boolean",
      description: "Whether to show deleted calendars",
    },
    showHidden: {
      type: "boolean",
      description: "Whether to show hidden calendars",
    },
    syncToken: {
      type: "string",
      description: "The syncToken of the calendars",
    },
  },
} as const satisfies JSONSchema;

export const GoogleCalendars = {
  title: "GoogleCalendars",
  description: "Your google calendars",
  type: "object",
  properties: {
    kind: { type: "string", description: "The kind of the calendars" },
    etag: { type: "string", description: "The etag of the calendars" },
    nextPageToken: { type: "string", description: "The next page token" },
    nextSyncToken: { type: "string", description: "The next sync token" },
    calendars: {
      type: "array",
      description: "A list of your google calendars",
      items: {
        type: "object",
        description: "A google calendar",
        properties: {
          kind: { type: "string", description: "The kind of the calendar" },
          etag: { type: "string", description: "The etag of the calendar" },
          id: { type: "string", description: "The id of the calendar" },
          summary: {
            type: "string",
            description: "The summary of the calendar",
          },
          description: {
            type: "string",
            description: "The description of the calendar",
          },
          location: {
            type: "string",
            description: "The location of the calendar",
          },
          timeZone: {
            type: "string",
            description: "The timeZone of the calendar",
          },
          summaryOverride: {
            type: "string",
            description: "The summaryOverride of the calendar",
          },
          colorId: {
            type: "string",
            description: "The colorId of the calendar",
          },
          backgroundColor: {
            type: "string",
            description: "The backgroundColor of the calendar",
          },
          foregroundColor: {
            type: "string",
            description: "The foregroundColor of the calendar",
          },
          hidden: {
            type: "boolean",
            description: "Whether the calendar is hidden",
          },
          selected: {
            type: "boolean",
            description: "Whether the calendar is selected",
          },
          accessRole: {
            type: "string",
            description: "The accessRole of the calendar",
          },
          defaultReminders: {
            type: "object",
            description: "The defaultReminders of the calendar",
            properties: {
              method: {
                type: "string",
                description: "The method of the defaultReminder",
              },
              minutes: {
                type: "number",
                description: "The minutes of the defaultReminder",
              },
            },
          },
          notificationSettings: {
            type: "object",
            description: "The notificationSettings of the calendar",
            properties: {
              notifications: {
                type: "array",
                description: "The notifications of the notificationSettings",
                items: {
                  type: "object",
                  properties: {
                    type: {
                      type: "string",
                      description: "The type of the notification",
                    },
                    method: {
                      type: "string",
                      description: "The method of the notification",
                    },
                  },
                },
              },
            },
          },
          primary: {
            type: "boolean",
            description: "Whether the calendar is primary",
          },
          deleted: {
            type: "boolean",
            description: "Whether the calendar is deleted",
          },
          conferenceProperties: {
            type: "object",
            description: "The conferenceProperties of the calendar",
            properties: {
              allowedConferenceSolutionTypes: {
                type: "array",
                description:
                  "The allowedConferenceSolutionTypes of the conferenceProperties",
                items: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleCalendarInput = {
  title: "GoogleCalendarInput",
  description: "The input for your google calendar",
  type: "object",
  properties: {
    calendarId: { type: "string", description: "The id of the calendar" },
  },
  required: ["calendarId"],
} as const satisfies JSONSchema;

export const GoogleCalendar = {
  title: "GoogleCalendar",
  description: "Your google calendar",
  type: "object",
  properties: {
    kind: { type: "string", description: "The kind of the calendar" },
    etag: { type: "string", description: "The etag of the calendar" },
    id: { type: "string", description: "The id of the calendar" },
    summary: { type: "string", description: "The summary of the calendar" },
    description: {
      type: "string",
      description: "The description of the calendar",
    },
    location: { type: "string", description: "The location of the calendar" },
    timeZone: { type: "string", description: "The timeZone of the calendar" },
    conferenceProperties: {
      type: "object",
      description: "The conferenceProperties of the calendar",
      properties: {
        allowedConferenceSolutionTypes: {
          type: "array",
          description:
            "The allowedConferenceSolutionTypes of the conferenceProperties",
          items: { type: "string" },
        },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleEventsInput = {
  title: "GoogleEventsInput",
  description: "The input for your google calendar's events",
  type: "object",
  properties: {
    calendarId: { type: "string", description: "The id of the calendar" },
    maxAttendees: { type: "number", description: "The max attendees" },
    orderBy: { type: "string", description: "The order by" },
    pageToken: { type: "string", description: "The page token" },
    q: { type: "string", description: "The query" },
    showDeleted: { type: "boolean", description: "Whether to show deleted" },
    singleEvents: {
      type: "boolean",
      description: "Whether to show single events",
    },
    timeMax: { type: "string", description: "The time max" },
    timeMin: { type: "string", description: "The time min" },
    timeZone: { type: "string", description: "The time zone" },
    updatedMin: { type: "string", description: "The updated min" },
    syncToken: { type: "string", description: "The sync token" },
    iCalUID: { type: "string", description: "The iCal UID" },
  },
} as const satisfies JSONSchema;

export const GoogleEvents = {
  title: "GoogleEvents",
  description: "Your google calendar's events",
  type: "object",
  properties: {
    kind: { type: "string", description: "The kind of the events" },
    etag: { type: "string", description: "The etag of the events" },
    summary: { type: "string", description: "The summary of the events" },
    description: {
      type: "string",
      description: "The description of the events",
    },
    updated: { type: "string", description: "The updated date of the events" },
    timeZone: { type: "string", description: "The timeZone of the events" },
    accessRole: { type: "string", description: "The accessRole of the events" },
    defaultReminders: {
      type: "array",
      description: "The defaultReminders of the events",
      items: {
        type: "object",
        properties: {
          method: {
            type: "string",
            description: "The method of the defaultReminder",
          },
          minutes: {
            type: "number",
            description: "The minutes of the defaultReminder",
          },
        },
      },
    },
    nextPageToken: {
      type: "string",
      description: "The nextPageToken of the events",
    },
    nextSyncToken: {
      type: "string",
      description: "The nextSyncToken of the events",
    },
    resultSizeEstimate: {
      type: "number",
      description: "The resultSizeEstimate of the events",
    },
    events: {
      type: "array",
      description: "The list of events",
      items: {
        type: "object",
        description: "An event",
        properties: {
          kind: { type: "string", description: "The kind of the event" },
          etag: { type: "string", description: "The etag of the event" },
          id: { type: "string", description: "The id of the event" },
          status: { type: "string", description: "The status of the event" },
          htmlLink: {
            type: "string",
            description: "The htmlLink of the event",
          },
          created: {
            type: "string",
            description: "The created date of the event",
          },
          updated: {
            type: "string",
            description: "The updated date of the event",
          },
          summary: { type: "string", description: "The summary of the event" },
          description: {
            type: "string",
            description: "The description of the event",
          },
          location: {
            type: "string",
            description: "The location of the event",
          },
          colorId: { type: "string", description: "The colorId of the event" },
          creator: {
            type: "object",
            description: "The creator of the event",
            properties: {
              id: { type: "string", description: "The id of the creator" },
              email: {
                type: "string",
                description: "The email of the creator",
              },
              displayName: {
                type: "string",
                description: "The displayName of the creator",
              },
              self: {
                type: "boolean",
                description: "Whether the creator is self",
              },
            },
          },
          organizer: {
            type: "object",
            description: "The organizer of the event",
            properties: {
              id: { type: "string", description: "The id of the organizer" },
              email: {
                type: "string",
                description: "The email of the organizer",
              },
              displayName: {
                type: "string",
                description: "The displayName of the organizer",
              },
              self: {
                type: "boolean",
                description: "Whether the organizer is self",
              },
            },
          },
          start: {
            type: "object",
            description: "The start of the event",
            properties: {
              date: { type: "string", description: "The date of the start" },
              dateTime: {
                type: "string",
                description: "The dateTime of the start",
              },
              timeZone: {
                type: "string",
                description: "The timeZone of the start",
              },
            },
          },
          end: {
            type: "object",
            description: "The end of the event",
            properties: {
              date: { type: "string", description: "The date of the end" },
              dateTime: {
                type: "string",
                description: "The dateTime of the end",
              },
              timeZone: {
                type: "string",
                description: "The timeZone of the end",
              },
            },
          },
          endTimeUnspecified: {
            type: "boolean",
            description: "Whether the endTime is unspecified",
          },
          recurrence: {
            type: "array",
            description: "The recurrence of the event",
            items: { type: "string" },
          },
          recurringEventId: {
            type: "string",
            description: "The recurringEventId of the event",
          },
          originalStartTime: {
            type: "object",
            description: "The originalStartTime of the event",
            properties: {
              date: {
                type: "string",
                description: "The date of the originalStartTime",
              },
              dateTime: {
                type: "string",
                description: "The dateTime of the originalStartTime",
              },
              timeZone: {
                type: "string",
                description: "The timeZone of the originalStartTime",
              },
            },
          },
          transparency: {
            type: "string",
            description: "The transparency of the event",
          },
          visibility: {
            type: "string",
            description: "The visibility of the event",
          },
          iCalUID: { type: "string", description: "The iCalUID of the event" },
          sequence: {
            type: "number",
            description: "The sequence of the event",
          },
          attendees: {
            type: "array",
            description: "The attendees of the event",
            items: {
              type: "object",
              description: "An attendee",
              properties: {
                id: { type: "string", description: "The id of the attendee" },
                email: {
                  type: "string",
                  description: "The email of the attendee",
                },
                displayName: {
                  type: "string",
                  description: "The displayName of the attendee",
                },
                organizer: {
                  type: "boolean",
                  description: "Whether the attendee is the organizer",
                },
                self: {
                  type: "boolean",
                  description: "Whether the attendee is self",
                },
                resource: {
                  type: "boolean",
                  description: "Whether the attendee is a resource",
                },
                optional: {
                  type: "boolean",
                  description: "Whether the attendee is optional",
                },
                responseStatus: {
                  type: "string",
                  description: "The responseStatus of the attendee",
                },
                comment: {
                  type: "string",
                  description: "The comment of the attendee",
                },
                additionalGuests: {
                  type: "number",
                  description: "The additionalGuests of the attendee",
                },
              },
            },
          },
          attendeesOmitted: {
            type: "boolean",
            description: "Whether attendees are omitted",
          },
          extendedProperties: {
            type: "object",
            description: "The extendedProperties of the event",
            properties: {
              private: {
                type: "object",
                description: "The private extendedProperties of the event",
              },
              shared: {
                type: "object",
                description: "The shared extendedProperties of the event",
              },
            },
          },
          hangoutLink: {
            type: "string",
            description: "The hangoutLink of the event",
          },
          conferenceData: {
            type: "object",
            description: "The conferenceData of the event",
            properties: {
              createRequest: {
                type: "object",
                description: "The createRequest of the conferenceData",
                properties: {
                  requestId: {
                    type: "string",
                    description: "The requestId of the createRequest",
                  },
                  conferenceSolutionKey: {
                    type: "object",
                    description:
                      "The conferenceSolutionKey of the createRequest",
                    properties: {
                      type: {
                        type: "string",
                        description: "The type of the conferenceSolutionKey",
                      },
                    },
                  },
                  status: {
                    type: "object",
                    description: "The status of the createRequest",
                    properties: {
                      statusCode: {
                        type: "string",
                        description: "The statusCode of the status",
                      },
                    },
                  },
                },
              },
              entryPoints: {
                type: "array",
                description: "The entryPoints of the conferenceData",
                items: {
                  type: "object",
                  description: "An entryPoint",
                  properties: {
                    entryPointType: {
                      type: "string",
                      description: "The entryPointType of the entryPoint",
                    },
                    uri: {
                      type: "string",
                      description: "The uri of the entryPoint",
                    },
                    label: {
                      type: "string",
                      description: "The label of the entryPoint",
                    },
                    pin: {
                      type: "string",
                      description: "The pin of the entryPoint",
                    },
                    accessCode: {
                      type: "string",
                      description: "The accessCode of the entryPoint",
                    },
                    meetingCode: {
                      type: "string",
                      description: "The meetingCode of the entryPoint",
                    },
                    passcode: {
                      type: "string",
                      description: "The passcode of the entryPoint",
                    },
                    password: {
                      type: "string",
                      description: "The password of the entryPoint",
                    },
                  },
                },
              },
              conferenceSolution: {
                type: "object",
                description: "The conferenceSolution of the conferenceData",
                properties: {
                  key: {
                    type: "object",
                    description: "The key of the conferenceSolution",
                    properties: {
                      type: {
                        type: "string",
                        description: "The type of the key",
                      },
                    },
                  },
                  name: {
                    type: "string",
                    description: "The name of the conferenceSolution",
                  },
                  iconUri: {
                    type: "string",
                    description: "The iconUri of the conferenceSolution",
                  },
                },
              },
              conferenceId: {
                type: "string",
                description: "The conferenceId of the conferenceData",
              },
              signature: {
                type: "string",
                description: "The signature of the conferenceData",
              },
              notes: {
                type: "string",
                description: "The notes of the conferenceData",
              },
            },
          },
          gadget: {
            type: "object",
            description: "The gadget of the event",
            properties: {
              type: { type: "string", description: "The type of the gadget" },
              title: { type: "string", description: "The title of the gadget" },
              link: { type: "string", description: "The link of the gadget" },
              iconLink: {
                type: "string",
                description: "The iconLink of the gadget",
              },
              width: { type: "number", description: "The width of the gadget" },
              height: {
                type: "number",
                description: "The height of the gadget",
              },
              display: {
                type: "string",
                description: "The display of the gadget",
              },
              preferences: {
                type: "object",
                description: "The preferences of the gadget",
              },
            },
          },
          anyoneCanAddSelf: {
            type: "boolean",
            description: "Whether anyone can add self",
          },
          guestsCanInviteOthers: {
            type: "boolean",
            description: "Whether guests can invite others",
          },
          guestsCanModify: {
            type: "boolean",
            description: "Whether guests can modify",
          },
          guestsCanSeeOtherGuests: {
            type: "boolean",
            description: "Whether guests can see other guests",
          },
          privateCopy: {
            type: "boolean",
            description: "Whether the event is a private copy",
          },
          locked: {
            type: "boolean",
            description: "Whether the event is locked",
          },
          reminders: {
            type: "object",
            description: "The reminders of the event",
            properties: {
              useDefault: {
                type: "boolean",
                description: "Whether the reminders use default",
              },
              overrides: {
                type: "array",
                description: "The overrides of the reminders",
                items: {
                  type: "object",
                  description: "A reminder override",
                  properties: {
                    method: {
                      type: "string",
                      description: "The method of the reminder override",
                    },
                    minutes: {
                      type: "number",
                      description: "The minutes of the reminder override",
                    },
                  },
                },
              },
            },
          },
          source: {
            type: "object",
            description: "The source of the event",
            properties: {
              url: { type: "string", description: "The url of the source" },
              title: { type: "string", description: "The title of the source" },
            },
          },
          attachments: {
            type: "array",
            description: "The attachments of the event",
            items: {
              type: "object",
              description: "An attachment",
              properties: {
                fileUrl: {
                  type: "string",
                  description: "The fileUrl of the attachment",
                },
                title: {
                  type: "string",
                  description: "The title of the attachment",
                },
                mimeType: {
                  type: "string",
                  description: "The mimeType of the attachment",
                },
                iconLink: {
                  type: "string",
                  description: "The iconLink of the attachment",
                },
                fileId: {
                  type: "string",
                  description: "The fileId of the attachment",
                },
              },
            },
          },
          eventType: {
            type: "string",
            description: "The eventType of the event",
          },
        },
      },
    },
  },
} as const satisfies JSONSchema;

export const GoogleEventInput = {
  title: "GoogleEventInput",
  description: "The input for your google calendar's event",
  type: "object",
  properties: {
    calendarId: {
      type: "string",
      description: "The calendarId of the calendar which contains the event",
    },
    eventId: { type: "string", description: "The id of the event" },
    timeZone: { type: "string", description: "The timeZone of the event" },
  },
  required: ["calendarId", "eventId"],
} as const satisfies JSONSchema;

export const GoogleEvent = {
  title: "GoogleEvent",
  description: "Your google calendar's event",
  type: "object",
  properties: {
    kind: { type: "string", description: "The kind of the event" },
    etag: { type: "string", description: "The etag of the event" },
    id: { type: "string", description: "The id of the event" },
    status: { type: "string", description: "The status of the event" },
    htmlLink: {
      type: "string",
      description: "The htmlLink of the event",
    },
    created: {
      type: "string",
      description: "The created date of the event",
    },
    updated: {
      type: "string",
      description: "The updated date of the event",
    },
    summary: { type: "string", description: "The summary of the event" },
    description: {
      type: "string",
      description: "The description of the event",
    },
    location: {
      type: "string",
      description: "The location of the event",
    },
    colorId: { type: "string", description: "The colorId of the event" },
    creator: {
      type: "object",
      description: "The creator of the event",
      properties: {
        id: { type: "string", description: "The id of the creator" },
        email: {
          type: "string",
          description: "The email of the creator",
        },
        displayName: {
          type: "string",
          description: "The displayName of the creator",
        },
        self: {
          type: "boolean",
          description: "Whether the creator is self",
        },
      },
    },
    organizer: {
      type: "object",
      description: "The organizer of the event",
      properties: {
        id: { type: "string", description: "The id of the organizer" },
        email: {
          type: "string",
          description: "The email of the organizer",
        },
        displayName: {
          type: "string",
          description: "The displayName of the organizer",
        },
        self: {
          type: "boolean",
          description: "Whether the organizer is self",
        },
      },
    },
    start: {
      type: "object",
      description: "The start of the event",
      properties: {
        date: { type: "string", description: "The date of the start" },
        dateTime: {
          type: "string",
          description: "The dateTime of the start",
        },
        timeZone: {
          type: "string",
          description: "The timeZone of the start",
        },
      },
    },
    end: {
      type: "object",
      description: "The end of the event",
      properties: {
        date: { type: "string", description: "The date of the end" },
        dateTime: {
          type: "string",
          description: "The dateTime of the end",
        },
        timeZone: {
          type: "string",
          description: "The timeZone of the end",
        },
      },
    },
    endTimeUnspecified: {
      type: "boolean",
      description: "Whether the endTime is unspecified",
    },
    recurrence: {
      type: "array",
      description: "The recurrence of the event",
      items: { type: "string" },
    },
    recurringEventId: {
      type: "string",
      description: "The recurringEventId of the event",
    },
    originalStartTime: {
      type: "object",
      description: "The originalStartTime of the event",
      properties: {
        date: {
          type: "string",
          description: "The date of the originalStartTime",
        },
        dateTime: {
          type: "string",
          description: "The dateTime of the originalStartTime",
        },
        timeZone: {
          type: "string",
          description: "The timeZone of the originalStartTime",
        },
      },
    },
    transparency: {
      type: "string",
      description: "The transparency of the event",
    },
    visibility: {
      type: "string",
      description: "The visibility of the event",
    },
    iCalUID: { type: "string", description: "The iCalUID of the event" },
    sequence: {
      type: "number",
      description: "The sequence of the event",
    },
    attendees: {
      type: "array",
      description: "The attendees of the event",
      items: {
        type: "object",
        description: "An attendee",
        properties: {
          id: { type: "string", description: "The id of the attendee" },
          email: {
            type: "string",
            description: "The email of the attendee",
          },
          displayName: {
            type: "string",
            description: "The displayName of the attendee",
          },
          organizer: {
            type: "boolean",
            description: "Whether the attendee is the organizer",
          },
          self: {
            type: "boolean",
            description: "Whether the attendee is self",
          },
          resource: {
            type: "boolean",
            description: "Whether the attendee is a resource",
          },
          optional: {
            type: "boolean",
            description: "Whether the attendee is optional",
          },
          responseStatus: {
            type: "string",
            description: "The responseStatus of the attendee",
          },
          comment: {
            type: "string",
            description: "The comment of the attendee",
          },
          additionalGuests: {
            type: "number",
            description: "The additionalGuests of the attendee",
          },
        },
      },
    },
    attendeesOmitted: {
      type: "boolean",
      description: "Whether attendees are omitted",
    },
    extendedProperties: {
      type: "object",
      description: "The extendedProperties of the event",
      properties: {
        private: {
          type: "object",
          description: "The private extendedProperties of the event",
        },
        shared: {
          type: "object",
          description: "The shared extendedProperties of the event",
        },
      },
    },
    hangoutLink: {
      type: "string",
      description: "The hangoutLink of the event",
    },
    conferenceData: {
      type: "object",
      description: "The conferenceData of the event",
      properties: {
        createRequest: {
          type: "object",
          description: "The createRequest of the conferenceData",
          properties: {
            requestId: {
              type: "string",
              description: "The requestId of the createRequest",
            },
            conferenceSolutionKey: {
              type: "object",
              description: "The conferenceSolutionKey of the createRequest",
              properties: {
                type: {
                  type: "string",
                  description: "The type of the conferenceSolutionKey",
                },
              },
            },
            status: {
              type: "object",
              description: "The status of the createRequest",
              properties: {
                statusCode: {
                  type: "string",
                  description: "The statusCode of the status",
                },
              },
            },
          },
        },
        entryPoints: {
          type: "array",
          description: "The entryPoints of the conferenceData",
          items: {
            type: "object",
            description: "An entryPoint",
            properties: {
              entryPointType: {
                type: "string",
                description: "The entryPointType of the entryPoint",
              },
              uri: {
                type: "string",
                description: "The uri of the entryPoint",
              },
              label: {
                type: "string",
                description: "The label of the entryPoint",
              },
              pin: {
                type: "string",
                description: "The pin of the entryPoint",
              },
              accessCode: {
                type: "string",
                description: "The accessCode of the entryPoint",
              },
              meetingCode: {
                type: "string",
                description: "The meetingCode of the entryPoint",
              },
              passcode: {
                type: "string",
                description: "The passcode of the entryPoint",
              },
              password: {
                type: "string",
                description: "The password of the entryPoint",
              },
            },
          },
        },
        conferenceSolution: {
          type: "object",
          description: "The conferenceSolution of the conferenceData",
          properties: {
            key: {
              type: "object",
              description: "The key of the conferenceSolution",
              properties: {
                type: {
                  type: "string",
                  description: "The type of the key",
                },
              },
            },
            name: {
              type: "string",
              description: "The name of the conferenceSolution",
            },
            iconUri: {
              type: "string",
              description: "The iconUri of the conferenceSolution",
            },
          },
        },
        conferenceId: {
          type: "string",
          description: "The conferenceId of the conferenceData",
        },
        signature: {
          type: "string",
          description: "The signature of the conferenceData",
        },
        notes: {
          type: "string",
          description: "The notes of the conferenceData",
        },
      },
    },
    gadget: {
      type: "object",
      description: "The gadget of the event",
      properties: {
        type: { type: "string", description: "The type of the gadget" },
        title: { type: "string", description: "The title of the gadget" },
        link: { type: "string", description: "The link of the gadget" },
        iconLink: {
          type: "string",
          description: "The iconLink of the gadget",
        },
        width: { type: "number", description: "The width of the gadget" },
        height: {
          type: "number",
          description: "The height of the gadget",
        },
        display: {
          type: "string",
          description: "The display of the gadget",
        },
        preferences: {
          type: "object",
          description: "The preferences of the gadget",
        },
      },
    },
    anyoneCanAddSelf: {
      type: "boolean",
      description: "Whether anyone can add self",
    },
    guestsCanInviteOthers: {
      type: "boolean",
      description: "Whether guests can invite others",
    },
    guestsCanModify: {
      type: "boolean",
      description: "Whether guests can modify",
    },
    guestsCanSeeOtherGuests: {
      type: "boolean",
      description: "Whether guests can see other guests",
    },
    privateCopy: {
      type: "boolean",
      description: "Whether the event is a private copy",
    },
    locked: {
      type: "boolean",
      description: "Whether the event is locked",
    },
    reminders: {
      type: "object",
      description: "The reminders of the event",
      properties: {
        useDefault: {
          type: "boolean",
          description: "Whether the reminders use default",
        },
        overrides: {
          type: "array",
          description: "The overrides of the reminders",
          items: {
            type: "object",
            description: "A reminder override",
            properties: {
              method: {
                type: "string",
                description: "The method of the reminder override",
              },
              minutes: {
                type: "number",
                description: "The minutes of the reminder override",
              },
            },
          },
        },
      },
    },
    source: {
      type: "object",
      description: "The source of the event",
      properties: {
        url: { type: "string", description: "The url of the source" },
        title: { type: "string", description: "The title of the source" },
      },
    },
    attachments: {
      type: "array",
      description: "The attachments of the event",
      items: {
        type: "object",
        description: "An attachment",
        properties: {
          fileUrl: {
            type: "string",
            description: "The fileUrl of the attachment",
          },
          title: {
            type: "string",
            description: "The title of the attachment",
          },
          mimeType: {
            type: "string",
            description: "The mimeType of the attachment",
          },
          iconLink: {
            type: "string",
            description: "The iconLink of the attachment",
          },
          fileId: {
            type: "string",
            description: "The fileId of the attachment",
          },
        },
      },
    },
    eventType: {
      type: "string",
      description: "The eventType of the event",
    },
  },
} as const satisfies JSONSchema;
