import { Github } from "./sources/github/github";
import { Google } from "./sources/google/google";
import { Slack } from "./sources/slack/slack";
import { PostAction, Action } from "./sources/resource";
declare const Sources: {
    [x: string]: any;
};
export default Sources;
export { Github, Google, Slack, PostAction, Action };
