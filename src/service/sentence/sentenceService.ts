const sentenceRegex = /(\.+|\:|\!|\?)(\"*|\'*|\)*|}*|]*)(\s|\n|\r|\r\n)/gm;

// const sentenceRegex = /([.?!])\s*(?=[A-ZÖÇŞİĞÜ])/g

const SEPARATOR = '|&|';

export function splitToSentences(lang: string, text: string): string[] {

    return text.replace(sentenceRegex, `$1$2${SEPARATOR}`).split(SEPARATOR);
}
