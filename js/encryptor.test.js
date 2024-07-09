/*

La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

import {encryptText, decryptedText} from "./encryptions";


describe('encryptor tests suite', () => {
    
    test('encryptText equal pedro paramo', () => {
        expect(encryptText('pedro paramo')).toBe('penterdrober pairaimober');
        });
    
        test('encryptText equal dentermober', () => {
            expect(encryptText('demo')).toBe('dentermober');
            });
        
        test('encryptText equal hoberlai', () => {
            expect(encryptText('hola')).toBe('hoberlai');
            });
        test('encryptText equal lai', () => {
            expect(encryptText('la')).toBe('lai');
            });

        test('encryptText equal fenterrrobercairrimesl', () => {
                expect(encryptText('ferrocarril')).toBe('fenterrrobercairrimesl');
            });    
            test('encryptText equal lai bimescimesclentertai denterl fufattufatrober', () => {
                expect(encryptText('la bicicleta del futuro')).toBe('lai bimescimesclentertai denterl fufattufatrober');
            });
    
});    

describe('decryptor tests suite', () => {
    
   
    test('textString includes pattern', () => {
       

        expect(decryptedText('dentermober')).toBe('demo');
    });

    test('textString includes pattern', () => {
       

        expect(decryptedText('penterdrober pairaimober lai')).toBe('pedro paramo la');
    });

    test('textString includes pattern', () => {
       

        expect(decryptedText('fenterrrobercairrimesl')).toBe('ferrocarril');
    });

});




