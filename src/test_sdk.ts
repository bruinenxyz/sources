import * as Sources from "./sources/index";

const callGithub = () => {
  for (const source of Object.keys(Sources)) {
    const source = new Sources["github"]();
  }
};
