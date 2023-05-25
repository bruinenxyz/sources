"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleProfile = void 0;
exports.GoogleProfile = {
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
};
