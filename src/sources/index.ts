import { Github } from "./github/github";
const githubName = new Github().getName();

const sources = {};
sources[githubName] = Github;

export default sources;
