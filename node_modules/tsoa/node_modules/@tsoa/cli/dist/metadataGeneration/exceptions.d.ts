import { Node } from 'typescript';
export declare class GenerateMetadataError extends Error {
    constructor(message?: string, node?: Node, onlyCurrent?: boolean);
}
export declare function prettyLocationOfNode(node: Node): string;
export declare function prettyTroubleCause(node: Node, onlyCurrent?: boolean): string;
