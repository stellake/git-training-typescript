import { computeFibonacciNumber } from "../index";

describe('computeFibonacciNumber', () => {
    it.each([
        [-6, -8],
        [-5, 5],
        [-4, -3],
        [-3, 2],
        [-2, -1],
        [-1, 1],
        [0, 0]
    ])('works for small negative number %i', (input, expected) => {
        const actual = computeFibonacciNumber(input);
        expect(actual).toBe(expected);
    });
});
