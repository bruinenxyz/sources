type Action<Params, ReturnType> = (authenticatedClient: any, params: Params) => Promise<ReturnType>;
export declare class Resource<Params, ReturnType> {
    name: string;
    type: string;
    action: Action<Params, ReturnType>;
    JSONInputSchema: any;
    JSONOutputSchema: any;
    constructor(name: string, type: string, action: Action<Params, ReturnType>, JSONInputSchema: any, JSONOutputSchema: any);
    getName(): string;
    getType(): string;
    getAction(): Action<Params, ReturnType>;
}
export {};
