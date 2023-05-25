import { Github } from "./sources/github/github";
import { Google } from "./sources/google/google";

const Sources: { [x: string]: any } = {};
Sources[new Github().getName()] = Github;
Sources[new Google().getName()] = Google;

export default Sources;

export { Github, Google };
