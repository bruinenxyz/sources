import { Github } from "./sources/github/github";
import { Google } from "./sources/google/google";
import { Slack } from "./sources/slack/slack";
import { PostAction, Action } from "./sources/resource";

const Sources: { [x: string]: any } = {};
Sources[new Github().getName()] = Github;
Sources[new Google().getName()] = Google;
Sources[new Slack().getName()] = Slack;

export default Sources;

export { Github, Google, Slack, PostAction, Action };
