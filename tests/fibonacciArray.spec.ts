import { computeFibonacciArray } from "../index";

describe('computeFibonacciArray', () => {
    it('works for a small range', () => {
        const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34];
        const actual = computeFibonacciArray(1, 9);
        expect(actual).toStrictEqual(expected);
    });
});
