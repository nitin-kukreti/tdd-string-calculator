import { StringCalculator } from "./StringCalculator";

describe('StringCalculator', () => {
    let calculator: StringCalculator;

    beforeEach(() => {
        calculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(calculator.add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(calculator.add("1")).toBe(1);
        expect(calculator.add("5")).toBe(5);
    });

    test('should return the sum for two numbers', () => {
        expect(calculator.add("1,2")).toBe(3);
        expect(calculator.add("10,20")).toBe(30);
    });

    test('should handle new line as a delimiter', () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test('should support custom delimiters', () => {
        expect(calculator.add("//;\n1;2;3")).toBe(6);
        expect(calculator.add("//[***]\n1***2***3")).toBe(6);
    });

    test('should throw an error on negative numbers', () => {
        expect(() => calculator.add("1,-2,3")).toThrowError("Negative numbers not allowed: -2");
        expect(() => calculator.add("//;\n1;-2;3")).toThrowError("Negative numbers not allowed: -2");
        expect(() => calculator.add("//;\n1;-2;-3")).toThrowError("Negative numbers not allowed: -2, -3");
    });
});
