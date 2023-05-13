"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apiRouter = (0, express_1.Router)();
apiRouter.get('/', (_, res) => {
    res.send('Hello, world!');
});
exports.default = apiRouter;
