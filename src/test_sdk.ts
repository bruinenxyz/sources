import sources from "./sources"

const callGithub = () => {
  for (const source of Object.keys(sources)) {
    const source = new sources.Github();
  }
}