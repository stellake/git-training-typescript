export function computeFibonacciNumber(position: number): number {
    if (position === 0) {
        return 0;
    }

    if (position < 0) {
        return computeNegativeFibonacci(position);
    }

    let i = 1;
    let j = 1;

    if (position <= 2) {
        return 1;
    }

    let currentPosition = 2;
    while (currentPosition < position) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
}

export function computeNegativeFibonacci(position: number): number {
    if (position >= 0) {
        throw new Error('position must be less than zero');
    }
    const resultIsNegative = position % 2 === 0;
    const absoluteResult = computeFibonacciNumber(-position);
    return resultIsNegative ? absoluteResult * (-1) : absoluteResult;
}
