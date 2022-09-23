import { computeFibonacciNumber } from "../index";

describe('computeFibonacciNumber', () => {
    it.each([
        [1, 1],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 5],
        [6, 8],
        [7, 13],
        [8, 21],
        [9, 34]
    ])('fibonacci works for small number: %i', (input, expected) => {
        const actual = computeFibonacciNumber(input);
        expect(actual).toBe(expected);
    });
});
