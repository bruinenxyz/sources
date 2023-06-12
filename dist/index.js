"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slack = exports.Google = exports.Github = void 0;
const github_1 = require("./sources/github/github");
Object.defineProperty(exports, "Github", { enumerable: true, get: function () { return github_1.Github; } });
const google_1 = require("./sources/google/google");
Object.defineProperty(exports, "Google", { enumerable: true, get: function () { return google_1.Google; } });
const slack_1 = require("./sources/slack/slack");
Object.defineProperty(exports, "Slack", { enumerable: true, get: function () { return slack_1.Slack; } });
const Sources = {};
Sources[new github_1.Github().getName()] = github_1.Github;
Sources[new google_1.Google().getName()] = google_1.Google;
Sources[new slack_1.Slack().getName()] = slack_1.Slack;
exports.default = Sources;
