import {getTokenizer, tokenizeToWords} from "./tokenizerService";

describe('tokenizer service', () => {

    test('lexer instance should be truthy', async () => {
        const service = await getTokenizer('tr');
        expect(service).toBeTruthy()
    });

    test('empty text should return empty array', async () => {
        const tokens =  tokenizeToWords('tr', '');
        expect(tokens).toHaveLength(0);
    });

    test('single string word', async () => {
        const tokens =  tokenizeToWords('tr', 'merhaba');
        expect(tokens).toHaveLength(1);
    });

    test('multi string word', async () => {
        const tokens =  tokenizeToWords('tr', 'merhaba ben adam ikinci');
        expect(tokens).toHaveLength(4);
    });

    test('string with punctuations', async () => {
        const tokens =  tokenizeToWords('tr', 'Merhaba bende Ahmet\'e katılıyorum. Gökhan\'da katılıyor.');
        expect(tokens).toHaveLength(6);
    });

    test('multi line string', async () => {

        const text = `Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. 
        
        Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
        
        Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.`;
        const tokens =  tokenizeToWords('tr', text);
        expect(tokens).toHaveLength(55);
    });

});
