import { Github } from './github/github';

import {BaseSource, OAuth2Source} from './source';
import axios from 'axios';

import express from 'express';

const sources = {
  Github
};

const app = express();

const generateSDK = (source: typeof Github) => {
  const sourceObject = new source();
  for (const resource of sourceObject.resources) {
    app.get(`/${sourceObject.getName()}/${resource.getName()}`, (req, res) => {
      const action = resource.getAction();
      action(axios, req.query).then((result) => {
        res.send(result);
      });
    });
  }
  return null;
};

generateSDK(Github);

app.listen(3000);