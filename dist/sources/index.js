"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const github_1 = require("./github/github");
const githubName = new github_1.Github().getName();
const sources = {};
sources[githubName] = github_1.Github;
exports.default = sources;
