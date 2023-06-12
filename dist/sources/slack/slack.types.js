"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackProfile = void 0;
exports.SlackProfile = {
    title: "SlackProfile",
    description: "A slack profile",
    type: "object",
    properties: {
        ok: {
            type: "boolean",
            description: "Whether the request was successful",
        },
        sub: {
            type: "string",
            description: "The user ID",
        },
        email: {
            type: "string",
            description: "The user email",
        },
        email_verified: {
            type: "boolean",
            description: "Whether the user email is verified",
        },
        date_email_verified: {
            type: "number",
            description: "The date the user email was verified",
        },
        name: {
            type: "string",
            description: "The user name",
        },
        picture: {
            type: "string",
            description: "The user picture",
        },
        given_name: {
            type: "string",
            description: "The user given name",
        },
        family_name: {
            type: "string",
            description: "The user family name",
        },
        locale: {
            type: "string",
            description: "The user locale",
        },
    },
};
