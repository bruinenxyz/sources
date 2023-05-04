import { Github } from './github';

import {OAuth2Source} from './source';

const sources = {
  Github
};


const generateSDK = (source: any) => {
  const sourceObject = new source();
  const sdk: any = {};
  for (const resource of sourceObject.resources) {
    const action = resource.getAction();
  }
  return null;
}

const test = () => {
  for (const source in sources) {

    const sdk = generateSDK(source);
  }
}

export default sources; 