type Action<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;
export declare class Resource<Params, ReturnType> {
    name: string;
    friendlyName: string;
    type: string;
    description: string;
    action: Action<Params, ReturnType>;
    JSONInputSchema: any;
    JSONOutputSchema: any;
    constructor(name: string, friendlyName: string, type: string, description: string, action: Action<Params, ReturnType>, JSONInputSchema: any, JSONOutputSchema: any);
    getName(): string;
    getType(): string;
    getAction(): Action<Params, ReturnType>;
    getJSON(): {
        name: string;
        friendlyName: string;
        type: string;
        description: string;
        JSONInputSchema: any;
        JSONOutputSchema: any;
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
