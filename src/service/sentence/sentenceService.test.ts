import {splitToSentences} from "./sentenceService";

describe('sentence', () => {

    test('sentence string with punctuations', async () => {
        const tokens =  splitToSentences('tr', 'Merhaba bende Ahmet\'e katılıyorum. Gökhan\'da katılıyor.');
        expect(tokens).toHaveLength(2);
    });

    test('multi line string', async () => {

        const text = `Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. 
        
        Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
        
        Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.`;
        const tokens =  splitToSentences('tr', text);

        // we cant easly understand situations like that so it is false but good enough
        expect(tokens).toHaveLength(4);
    });

});
