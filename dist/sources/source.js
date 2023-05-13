"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Source = exports.BaseSource = void 0;
class BaseSource {
    constructor(name, type, accessType) {
        this.name = name;
        this.type = type;
        this.accessType = accessType;
        this.resources = {};
        this.metadata = {};
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getAccessType() {
        return this.accessType;
    }
    getResources() {
        return this.resources;
    }
    getMetadata() {
        return this.metadata;
    }
}
exports.BaseSource = BaseSource;
class OAuth2Source extends BaseSource {
    constructor(name) {
        super(name, "OAuth2", "APIKey");
    }
    isTokenExpired() {
        return false;
    }
}
exports.OAuth2Source = OAuth2Source;
