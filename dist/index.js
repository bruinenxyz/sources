"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Github = void 0;
const github_1 = require("./sources/github/github");
Object.defineProperty(exports, "Github", { enumerable: true, get: function () { return github_1.Github; } });
const Sources = {};
Sources[new github_1.Github().getName()] = github_1.Github;
exports.default = Sources;
