declare module 'tokenize-text' {

    export interface Token {
        value: string;
        index: number;
        offset: number;
    }

    export type filterFnType = (word: string, current: number, prev: number) => boolean;

    export class Tokenizer {
        new (): Tokenizer;
        words: () => (text: string) => Token[];
        sections: () => (text: string) => Token[];
        characters: () => (text: string) => Token[];
        re: (regex: Regex) => (text: string) => Token[];
        filter: (filterFnType) => (tokens: Token[]) => Token[];
    }

    export default Tokenizer;
}
