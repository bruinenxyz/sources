export type Action<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;
export type PostAction<Body, Params, ReturnType> = (authenticatedClient: any, body: Body, params: Params) => Promise<ReturnType>;
export type PatchAction<Body, Params, ReturnType> = (authenticatedClient: any, body: Body, params: Params) => Promise<ReturnType>;
export type DeleteAction<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;
export declare class Resource<Params, ReturnType> {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    action: Action<Params, ReturnType>;
    JSONInputSchema: unknown;
    JSONOutputSchema: unknown;
    constructor(name: string, friendlyName: string, type: string, description: string, action: Action<Params, ReturnType>, JSONInputSchema: unknown, JSONOutputSchema: unknown);
    getName(): string;
    getType(): string;
    getAction(): Action<Params, ReturnType>;
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
export declare class PatchResource<Body, Params, ReturnType> {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    action: PatchAction<Body, Params, ReturnType>;
    JSONBodySchema: unknown;
    JSONInputSchema: unknown;
    JSONOutputSchema: unknown;
    constructor(name: string, friendlyName: string, type: string, description: string, action: PatchAction<Body, Params, ReturnType>, JSONBodySchema: unknown, JSONInputSchema: unknown, JSONOutputSchema: unknown);
    getName(): string;
    getType(): string;
    getAction(): PatchAction<Body, Params, ReturnType>;
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
export declare class DeleteResource<Params, ReturnType> {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    action: DeleteAction<Params, ReturnType>;
    JSONInputSchema: unknown;
    JSONOutputSchema: unknown;
    constructor(name: string, friendlyName: string, type: string, description: string, action: DeleteAction<Params, ReturnType>, JSONInputSchema: unknown, JSONOutputSchema: unknown);
    getName(): string;
    getType(): string;
    getAction(): DeleteAction<Params, ReturnType>;
    getJSON(): {
        name: string;
        friendlyName: string;
        type: string;
        description: string;
        JSONInputSchema: unknown;
        JSONOutputSchema: unknown;
    };
}
export type ResourceMetadata = {
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
export type PatchResourceMetadata = {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    JSONBodySchema: any;
    JSONInputSchema: any;
    JSONOutputSchema: any;
};
export type DeleteResourceMetadata = {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    JSONInputSchema: any;
    JSONOutputSchema: any;
};
