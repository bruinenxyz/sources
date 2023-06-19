"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResource = exports.Resource = void 0;
class Resource {
    constructor(name, friendlyName, type, description, action, JSONInputSchema, JSONOutputSchema) {
        this.name = name;
        this.friendlyName = friendlyName;
        this.type = type;
        this.description = description;
        this.action = action;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.JSONInputSchema = JSONInputSchema;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.JSONOutputSchema = JSONOutputSchema;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getAction() {
        return this.action;
    }
    getJSON() {
        return {
            name: this.name,
            friendlyName: this.friendlyName,
            type: this.type,
            description: this.description,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            JSONInputSchema: this.JSONInputSchema,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            JSONOutputSchema: this.JSONOutputSchema,
        };
    }
}
exports.Resource = Resource;
class PostResource {
    constructor(name, friendlyName, type, description, action, JSONBodySchema, JSONInputSchema, JSONOutputSchema) {
        this.name = name;
        this.friendlyName = friendlyName;
        this.type = type;
        this.description = description;
        this.action = action;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.JSONBodySchema = JSONBodySchema;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.JSONInputSchema = JSONInputSchema;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.JSONOutputSchema = JSONOutputSchema;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getAction() {
        return this.action;
    }
    getJSON() {
        return {
            name: this.name,
            friendlyName: this.friendlyName,
            type: this.type,
            description: this.description,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            JSONBodySchema: this.JSONBodySchema,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            JSONInputSchema: this.JSONInputSchema,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            JSONOutputSchema: this.JSONOutputSchema,
        };
    }
}
exports.PostResource = PostResource;
