import { computeFibonacciNumber } from "../index";

describe('recursiveFibonacci', () => {
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
    ])('works for small number %i', (input, expected) => {
        const actual = computeFibonacciNumber(input, true);
        expect(actual).toBe(expected);
    });
});
