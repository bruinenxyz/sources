"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const github_1 = require("./github/github");
const path_1 = __importDefault(require("path"));
fs_1.default.readFile(path_1.default.resolve(__dirname, "./controller.hbs"), function (err, data) {
    if (err) {
        throw err;
    }
    const dataString = data.toString();
    const template = handlebars_1.default.compile(dataString);
    const github = new github_1.Github();
    const result = template({
        SourceName: github.getName(),
        SourceNamePascal: github.getName().charAt(0).toUpperCase() + github.getName().slice(1),
        AccessType: github.getAccessType(),
        resources: Object.values(github.resources).map((resource) => {
            return {
                ResourceName: resource.getName(),
                ResourceInputSchema: JSON.stringify({
                    schema: resource.JSONInputSchema,
                }),
                ResourceOutputSchema: JSON.stringify({
                    schema: resource.JSONOutputSchema,
                }),
            };
        }),
    });
    fs_1.default.mkdirSync(`../sources/${github.getName()}`, { recursive: true });
    fs_1.default.writeFile(`../sources/${github.getName()}/${github.getName()}.controller.ts`, result, function (err) {
        if (err) {
            throw err;
        }
    });
});
fs_1.default.readFile(path_1.default.resolve(__dirname, "./module.hbs"), function (err, data) {
    if (err) {
        throw err;
    }
    const dataString = data.toString();
    const template = handlebars_1.default.compile(dataString);
    const github = new github_1.Github();
    const result = template({
        SourceName: github.getName(),
        SourceNamePascal: github.getName().charAt(0).toUpperCase() + github.getName().slice(1),
    });
    fs_1.default.mkdirSync(`../sources/${github.getName()}`, { recursive: true });
    fs_1.default.writeFile(`../sources/${github.getName()}/${github.getName()}.module.ts`, result, function (err) {
        if (err) {
            throw err;
        }
    });
});
