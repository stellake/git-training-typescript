import { computeFibonacciNumber } from "../index";

it('computeFibonacciNumber works for null', () => {
    const actual = computeFibonacciNumber(null);
    expect(actual).toEqual(1);
});
