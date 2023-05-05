type Action<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;

export class Resource<Params, ReturnType>{
  public name: string;
  public type: string;
  public action: Action<Params, ReturnType>;
  public JSONInputSchema: any;
  public JSONOutputSchema: any;
  public constructor(name: string, type: string, action: Action<Params, ReturnType>, JSONInputSchema: any, JSONOutputSchema: any) {
    this.name = name;
    this.type = type;
    this.action = action;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.JSONInputSchema = JSONInputSchema;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.JSONOutputSchema = JSONOutputSchema;
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