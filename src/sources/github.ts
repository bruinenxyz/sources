import { Resource } from './resource';
import { OAuth2Source } from './source';

type GetRepoParams = {
  username: string;
}

type GetRepoReturnType = {
  name: string;
  description: string;
}

export class Github extends OAuth2Source{
  public constructor() {
    super('github');
  }

  public async getRepos(authClient: any, params: GetRepoParams): Promise<GetRepoReturnType> {
    return new Promise((resolve, reject) => resolve({ name: "test", description: "test" }));
  }

  public resources = [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    new Resource<GetRepoParams, GetRepoReturnType>("repos", "type", this.getRepos),
  ];
}

const github = new Github();

const resource = github.resources[0];
const action = resource.getAction();

const response = action(null, {username: "joshuaharry"});
const responseType = typeof response