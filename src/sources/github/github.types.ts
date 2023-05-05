import { JSONSchema } from 'json-schema-to-ts'

export const dogSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    age: { type: "integer" },
    hobbies: { type: "array", items: { type: "string" } },
    favoriteFood: { enum: ["pizza", "taco", "fries"] },
  },
  required: ["name", "age"],
} as const;


export const GithubProfile =  {
  'title': 'GithubProfile',
  'description': 'A github profile',
  'type': 'object',
  'properties': {
    "login": {
      type: "string",
      description: "The username of the user",
    },
    "id": {
      type: "string",
      description: "The id of the user",
    },
    "node_id": {
      type: "string",
      description: "The node id of the user",
    },
    "avatar_url": {
      type: "string",
      description: "The avatar url of the user",
    },
    "gravatar_id": {
      type: "string",
      description: "The gravatar id of the user",
    },
    "url": {
      type: "string",
      description: "The url of the user",
    },
    "html_url": {
      type: "string",
      description: "The html url of the user",
    },
    "followers_url": {
      type: "string",
      description: "The followers url of the user",
    },
    "following_url": {
      type: "string",
      description: "The following url of the user",
    },
    "gists_url": {
      type: "string",
      description: "The gists url of the user",
    }
  }
} as const satisfies JSONSchema

export const GithubRepo =  {
  'title': 'GithubRepo',
  'description': 'A github repo',
  'type': 'object',
  'properties': {
    "id": {
      type: "string",
      description: "The id of the repo",
    },
    "node_id": {
      type: "string",
      description: "The node id of the repo",
    },
    "name": {
      type: "string",
      description: "The name of the repo",
    },
    "full_name": {
      type: "string",
      description: "The full name of the repo",
    },
    "private": {
      type: "boolean",
      description: "Whether the repo is private",
    },
  } as const
} as const satisfies JSONSchema