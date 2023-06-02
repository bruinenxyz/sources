type Action<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;
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
export type ResourceMetadata = {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    JSONInputSchema: any;
    JSONOutputSchema: any;
};
export {};
