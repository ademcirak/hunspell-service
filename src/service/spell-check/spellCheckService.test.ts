import {getSpellChecker, spellCheck} from "./spellCheckService";

describe('spell check service', () => {

    test('should return spell check instance', async () => {
        const service = await getSpellChecker('tr');
        expect(service).toBeTruthy()
    });

    test('should return suggestions', async () => {
        const suggestions = await spellCheck('tr', 'merhaba ben Gökan');
        expect(suggestions).toBeTruthy()
    })

    test('lorem ipsum', async () => {

        const text = `Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. 
        
        Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
        
        Virginia'daki Hampden-Sydney College'dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan 'consectetur' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.`;

        const suggestions = await spellCheck('tr', text);
        expect(suggestions).toHaveLength(1);
    })
});
