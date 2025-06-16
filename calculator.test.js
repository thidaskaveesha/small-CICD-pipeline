const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('should subtract two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should multiply two numbers', () => {
        expect(calculator.multiply(4, 3)).toBe(12);
    });

    test('should divide two numbers', () => {
        expect(calculator.divide(6, 2)).toBe(3);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed');
    });
});
