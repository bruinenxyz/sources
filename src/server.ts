import { Github } from "./sources/github/github";

import { BaseSource, OAuth2Source } from "./sources/source";
import axios from "axios";

import express from "express";

const sources = {
  Github,
};

const app = express();

const generateEndpoints = (source: typeof Github) => {
  const sourceObject = new source();
  Object.values(sourceObject.resources).map((resource) => {
    app.get(`/${sourceObject.getName()}/${resource.getName()}`, (req, res) => {
      const action = resource.getAction();
      action(axios, null, req.query).then((result) => {
        res.send(result);
      });
    });
  });
};

generateEndpoints(Github);

app.listen(3000);
