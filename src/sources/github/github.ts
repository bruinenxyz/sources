import { Resource } from '../resource';
import { OAuth2Source } from '../source';
import { FromSchema } from "json-schema-to-ts";
import { GithubProfile, GithubRepo, dogSchema } from './github.types';
import Ajv, {JTDDataType} from "ajv/dist/jtd"

const schema = {
  properties: {
    foo: {type: "int32"},
    bar: {type: "string"},
  },
  type: "object",
  name: "MyData",
  description: "MyData is a simple object with a string and an integer",
} as const;

type MyData = JTDDataType<typeof schema>

type GithubProfileType = FromSchema<typeof GithubProfile>;
type GithubRepoType = FromSchema<typeof GithubRepo>;
type Dog = FromSchema<typeof dogSchema>;

export class Github extends OAuth2Source{
  public constructor() {
    super('github');
  }

  public async getProfile(authClient: any): Promise<GithubProfileType> {
    return new Promise((resolve, reject) => resolve({gravatar_id: 'test', gravity: 'test'}));
  }

  public async getRepos(authClient: any, params: {}): Promise<GithubRepoType> {
    return new Promise((resolve, reject) => resolve({ name: "something", description: 'test',  art: 'test' }));
  }

  public resources = [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    new Resource<GetRepoParams, GetRepoReturnType>('repos', 'get', this.getRepos, GetRepoInput, GetRepoReturn),
  ];
}
