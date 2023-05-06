/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Handlebars from 'handlebars';
import fs from 'fs';
import { Github } from './github/github';
import path from 'path';

fs.readFile(path.resolve(__dirname, "./controller.hbs"), function (err, data) {
  if (err) {
    throw err; 
  }
  const dataString = data.toString();
  const template = Handlebars.compile(dataString);
  const github = new Github();
  const result = template({
    SourceName: github.getName(),
    SourceType: github.getType(),
    resources: Object.values(github.resources).map((resource) => {
      return {
        ResourceName: resource.getName(),
        ResourceInputSchema: JSON.stringify({ schema: resource.JSONInputSchema}),
        ResourceOutputSchema: JSON.stringify({schema: resource.JSONOutputSchema}),
      };
    }),
  });

  fs.writeFile('./controller.ts', result, function (err) {
    if (err) {
      throw err;
    }
  });
});
