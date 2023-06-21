type GetAction<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;
type PostAction<Body, Params, ReturnType> = (authenticatedClient: any, body: Body, params: Params) => Promise<ReturnType>;
export type Resource<Body, Params, ReturnType> = GetResource<Params, ReturnType> | PostResource<Body, Params, ReturnType>;
export declare class GetResource<Params, ReturnType> {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    action: GetAction<Params, ReturnType>;
    JSONInputSchema: unknown;
    JSONOutputSchema: unknown;
    constructor(name: string, friendlyName: string, type: string, description: string, action: GetAction<Params, ReturnType>, JSONInputSchema: unknown, JSONOutputSchema: unknown);
    getName(): string;
    getType(): string;
    getAction(): GetAction<Params, ReturnType>;
    getJSON(): {
        name: string;
        friendlyName: string;
        type: string;
        description: string;
        JSONInputSchema: unknown;
        JSONOutputSchema: unknown;
    };
}
export declare class PostResource<Body, Params, ReturnType> {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    action: PostAction<Body, Params, ReturnType>;
    JSONBodySchema: unknown;
    JSONInputSchema: unknown;
    JSONOutputSchema: unknown;
    constructor(name: string, friendlyName: string, type: string, description: string, action: PostAction<Body, Params, ReturnType>, JSONBodySchema: unknown, JSONInputSchema: unknown, JSONOutputSchema: unknown);
    getName(): string;
    getType(): string;
    getAction(): PostAction<Body, Params, ReturnType>;
    getJSON(): {
        name: string;
        friendlyName: string;
        type: string;
        description: string;
        JSONBodySchema: unknown;
        JSONInputSchema: unknown;
        JSONOutputSchema: unknown;
    };
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
export {};
