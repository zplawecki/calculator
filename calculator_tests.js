import Calculator from 'calculator';

describe('Calculator', () => {

    it('should add correctly', function() => {  
        expect(add(2,2)).toEqual(4);
    });

    it('should substract correctly', funtion() => {
       expect(substract(2,2)).toEqual(0); 
    });

    it('should multiply correctly', function() => {
       expect(multiply(3,3)).toEqual(9);
    });

    it('hould divide correctly', function() => {
      expect(divide(6,2)).toEqual(3);
       }); 

}