import { Github } from "./sources/github/github";
import { Google } from "./sources/google/google";
import { Slack } from "./sources/slack/slack";
declare const Sources: {
    [x: string]: any;
};
export default Sources;
export { Github, Google, Slack };
