import { Github } from "./github/github";
import { Google } from "./google/google";
import { Source } from "./source";

const githubName = new Github().getName();
const googleName = new Google().getName();

const sources: { [x: string]: any } = {};
sources[githubName] = Github;
sources[googleName] = Google;

export default sources;
