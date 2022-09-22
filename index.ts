export function computeFibonacciNumber(position: number): number {
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

export function computeFibonacciArray(start: number, end: number): number[] {
    const result = [];
    for (let x = start; x <= end; x++) {
        result.push(computeFibonacciNumber(x));
    }
    return result;
}
