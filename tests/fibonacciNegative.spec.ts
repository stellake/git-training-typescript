import { computeNegativeFibonacci } from "../index";

describe('computeNegativeFibonacci', () => {
    it.each([
        [-6, -8],
        [-5, 5],
        [-4, -3],
        [-3, 2],
        [-2, -1],
        [-1, 1]
    ])('works for small negative number %i', (input, expected) => {
        const actual = computeNegativeFibonacci(input);
        expect(actual).toBe(expected);
    });

    it.each([
        [0],
        [1],
    ])('throws for non-negative numbers %i', (input) => {
        let thrown = false;
        try {
            const actual = computeNegativeFibonacci(input);
        } catch(e) {
            thrown = true;
        }
        expect(thrown).toBe(true);
    });
});
