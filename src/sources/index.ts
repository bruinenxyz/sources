import { Github } from "./github/github";
const githubName = new Github().getName();
import { Source } from "./source";

const sources: { [x: string]: any } = {};
sources[githubName] = Github;

export default sources;
