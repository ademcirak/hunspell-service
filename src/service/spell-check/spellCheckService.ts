import { Nodehun } from 'nodehun';
import fs from 'fs';
import path from 'path';
import {tokenizeToWords} from "../tokenizer/tokenizerService";
import {splitToSentences} from "../sentence/sentenceService";
import {Token} from "tokenize-text";

const nodehunMap: {[key: string]: Nodehun} = {};

export interface SpellCheckResult {
    text: string;
    offset: number;
    index: number;
    suggestions: string[] | null;
}


export async function getSpellChecker(lang: string): Promise<Nodehun> {
    if(!nodehunMap[lang]) {

        const affixPath = path.join(process.cwd(), 'dictionaries', lang, 'affix.aff');
        const dictionaryPath = path.join(process.cwd(), 'dictionaries', lang, 'dictionary.dic');

        const [affix, dictionary] = await Promise.all([
            fs.promises.readFile(affixPath),
            fs.promises.readFile(dictionaryPath)
        ])

        nodehunMap[lang] = new Nodehun(affix, dictionary);
    }

    return nodehunMap[lang];
}

export function startsWithCapital(lang: string, word: string){
    return word.charAt(0) === word.charAt(0).toLocaleUpperCase(lang);
}


export async function checkAndSuggest(hunspell: Nodehun, token: Token): Promise<SpellCheckResult | null> {

    if(!await hunspell.spell(token.value)) {
        const suggestions =  await hunspell.suggest(token.value);

        return {
            text: token.value,
            offset: token.offset,
            index: token.index,
            suggestions: suggestions,
        }
    }

    return null;
}


export async function spellCheck(lang: string, text: string): Promise<SpellCheckResult[]> {

    const hunspell = await getSpellChecker(lang);

    const sentences = splitToSentences(lang, text);

    const spellCheckRequests = [] as Promise<SpellCheckResult | null>[];

    // fastest performing loop rn
    for(let i = 0; i < sentences.length; i++) {
        const sentence = sentences[i];

        const tokens = tokenizeToWords(lang, sentence);

        for(let j = 0; j < tokens.length; j++) {

            const token = tokens[j];

            // skip capital letter words unless it is not first char of sentence
            if(j !== 0 && startsWithCapital(lang, token.value)) {
                continue;
            }

            // spellCheckRequests.push(checkAndSuggest(hunspell, token));

        }
    }

    const results = await Promise.all(spellCheckRequests);

    return results.filter(item => item !== null) as SpellCheckResult[];
}
