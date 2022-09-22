import { computeFibonacciArray } from "../index";

describe('computeFibonacciArrayEfficient', () => {
    // TODO: Test the negative ranges
    it('works for a small range', () => {
        const start = 1;
        const end = 9;
        const expected = [1, 1, 2, 3, 5, 8, 13, 21, 34];
        const actual = computeFibonacciArray(start, end, true);
        expect(actual).toStrictEqual(expected);
    });
});
