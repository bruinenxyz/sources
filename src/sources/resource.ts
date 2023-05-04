type Action<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;

export class Resource<Params, ReturnType>{
  public name: string;
  public type: string;
  public action: Action<Params, ReturnType>;
  public constructor(name: string, type: string, action: Action<Params, ReturnType>) {
    this.name = name;
    this.type = type;
    this.action = action;
  }

  public getName() {
    return this.name;
  }

  public getType() {
    return this.type;
  }

  public getAction() {
    return this.action;
  }
}