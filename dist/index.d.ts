import { Github } from "./sources/github/github";
import { Google } from "./sources/google/google";
import { Slack } from "./sources/slack/slack";
import { Notion } from "./sources/notion/notion";
import { PostAction, Action, PatchAction, DeleteAction } from "./sources/resource";
declare const Sources: {
    [x: string]: any;
};
export default Sources;
export { Github, Google, Slack, Notion, PostAction, PatchAction, DeleteAction, Action, };
