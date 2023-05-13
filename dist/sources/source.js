"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Source = exports.BaseSource = void 0;
class BaseSource {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.resources = {};
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    getResources() {
        return this.resources;
    }
}
exports.BaseSource = BaseSource;
class OAuth2Source extends BaseSource {
    constructor(name) {
        super(name, "oauth2");
    }
    isTokenExpired() {
        return false;
    }
}
exports.OAuth2Source = OAuth2Source;
