import { Github } from "./github/github";
import { Google } from "./google/google";
import { Slack } from "./slack/slack";
import { Source } from "./source";

const githubName = new Github().getName();
const googleName = new Google().getName();
const slackName = new Slack().getName();

const sources: { [x: string]: any } = {};
sources[githubName] = Github;
sources[googleName] = Google;
sources[slackName] = Slack;

export default sources;
