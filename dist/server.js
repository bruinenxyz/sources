"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_1 = require("./sources/github/github");
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const sources = {
    Github: github_1.Github
};
const app = (0, express_1.default)();
const generateEndpoints = (source) => {
    const sourceObject = new source();
    Object.values(sourceObject.resources).map((resource) => {
        app.get(`/${sourceObject.getName()}/${resource.getName()}`, (req, res) => {
            const action = resource.getAction();
            action(axios_1.default, req.query).then((result) => {
                res.send(result);
            });
        });
    });
};
generateEndpoints(github_1.Github);
app.listen(3000);
