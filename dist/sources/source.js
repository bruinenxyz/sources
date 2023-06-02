"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    isTokenExpired(accessCredentials) {
        return false;
    }
    refreshToken(authCredential, accessCredential) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
}
exports.OAuth2Source = OAuth2Source;
