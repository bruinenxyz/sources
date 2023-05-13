import { Github } from "./sources/github/github";

const Sources: {[x: string]: any} = {};
Sources[new Github().getName()] = Github;

export default Sources;

export {
  Github,
};