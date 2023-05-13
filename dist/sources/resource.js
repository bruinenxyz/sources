"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
class Resource {
    constructor(name, type, action, JSONInputSchema, JSONOutputSchema) {
        this.name = name;
        this.type = type;
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
}
exports.Resource = Resource;
