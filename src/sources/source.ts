import { Resource } from './resource';

export class BaseSource {
  public name: string;
  public type: string;
  public constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  public getName() {
    return this.name;
  }

  public getType() {
    return this.type;
  }

  public resources = Resource<>[];
}

export class OAuth2Source extends BaseSource {
  public constructor(name: string) {
    super(name, 'oauth2');
  }

  public getAuthUrl() {
    throw new Error('Not implemented');
  }

}