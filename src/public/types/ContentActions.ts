import { Action } from "./Action";

export interface ContentActions {
    setState: (val: Action) => void;
    setGeneratedPost: (val: string) => void;
    generatedPost?: string;
}