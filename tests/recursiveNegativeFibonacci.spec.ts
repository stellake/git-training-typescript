import { computeFibonacciNumber } from "../index";

describe('recursiveFibonacci - negative', () => {
    it.each([
        [0, 0],
        [-1, 1],
        [-2, -1],
        [-3, 2],
        [-4, -3],
        [-5, 5],
        [-6, -8],
    ])('works for small number %i', (input, expected) => {
        const actual = computeFibonacciNumber(input, true);
        expect(actual).toBe(expected);
    });
});
