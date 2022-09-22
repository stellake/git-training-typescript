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

export function computeFibonacciArray(start: number, end: number, efficient: boolean = false): number[] {
    if (!efficient) {
        const result = [];
        for (let x = start; x <= end; x++) {
            result.push(computeFibonacciNumber(x));
        }
        return result;
    }
    if (start > end) {
        return [];
    }
    if (start === end) {
        return [computeFibonacciNumber(start)];
    }
    let output = [computeFibonacciNumber(start), computeFibonacciNumber(start + 1)];
    for (let x = 2; x <= end - start; x++) {
        const newValue = output[x - 2] + output[x - 1];
        output.push(newValue);
    }
    return output;
}
