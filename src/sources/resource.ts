type GetAction<Params, ReturnType> = (
  authenticatedClient: any,
  params: Params
) => Promise<ReturnType>;

type PostAction<Body, Params, ReturnType> = (
  authenticatedClient: any,
  body: Body,
  params: Params
) => Promise<ReturnType>;

export type Resource<Body, Params, ReturnType> =
  | GetResource<Params, ReturnType>
  | PostResource<Body, Params, ReturnType>;

export class GetResource<Params, ReturnType> {
  public name: string;
  public friendlyName: string;
  public type: string;
  public description: string;
  public action: GetAction<Params, ReturnType>;
  public JSONInputSchema: unknown;
  public JSONOutputSchema: unknown;
  public constructor(
    name: string,
    friendlyName: string,
    type: string,
    description: string,
    action: GetAction<Params, ReturnType>,
    JSONInputSchema: unknown,
    JSONOutputSchema: unknown
  ) {
    this.name = name;
    this.friendlyName = friendlyName;
    this.type = type;
    this.description = description;
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

  public getJSON() {
    return {
      name: this.name,
      friendlyName: this.friendlyName,
      type: this.type,
      description: this.description,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      JSONInputSchema: this.JSONInputSchema,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      JSONOutputSchema: this.JSONOutputSchema,
    };
  }
}

export class PostResource<Body, Params, ReturnType> {
  public name: string;
  public friendlyName: string;
  public type: string;
  public description: string;
  public action: PostAction<Body, Params, ReturnType>;
  public JSONBodySchema: unknown;
  public JSONInputSchema: unknown;
  public JSONOutputSchema: unknown;
  public constructor(
    name: string,
    friendlyName: string,
    type: string,
    description: string,
    action: PostAction<Body, Params, ReturnType>,
    JSONBodySchema: unknown,
    JSONInputSchema: unknown,
    JSONOutputSchema: unknown
  ) {
    this.name = name;
    this.friendlyName = friendlyName;
    this.type = type;
    this.description = description;
    this.action = action;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.JSONBodySchema = JSONBodySchema;
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

  public getJSON() {
    return {
      name: this.name,
      friendlyName: this.friendlyName,
      type: this.type,
      description: this.description,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      JSONBodySchema: this.JSONBodySchema,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      JSONInputSchema: this.JSONInputSchema,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      JSONOutputSchema: this.JSONOutputSchema,
    };
  }
}

export type GetResourceMetadata = {
  name: string;
  friendlyName: string;
  type: string;
  description: string;
  JSONInputSchema: any;
  JSONOutputSchema: any;
};

export type PostResourceMetadata = {
  name: string;
  friendlyName: string;
  type: string;
  description: string;
  JSONBodySchema: any;
  JSONInputSchema: any;
  JSONOutputSchema: any;
};
