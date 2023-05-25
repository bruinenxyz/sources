import { Github } from "./sources/github/github";
import { Google } from "./sources/google/google";
declare const Sources: {
    [x: string]: any;
};
export default Sources;
export { Github, Google };
