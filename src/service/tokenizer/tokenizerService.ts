import Tokenizer, {Token} from 'tokenize-text';

const tokenizerMap: {[key: string]: Tokenizer} = {};

export function getTokenizer(lang: string): Tokenizer {

    if(!tokenizerMap[lang]) {
        const tokenizer = new Tokenizer();
        tokenizerMap[lang] = tokenizer;
    }

    return tokenizerMap[lang];
}

export function tokenizeToWords(lang: string, text: string): Token[] {

    const tokenizer = getTokenizer(lang).words();

    return tokenizer(text);
}
