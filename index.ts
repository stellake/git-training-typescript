export function computeFibonacciNumber(position: number): number {
    if (position === 0) {
        return 0;
    }

    if (position < 0) {
        const positionIsOdd = position % 2 === -1;
        return computeFibonacciNumber(-position) * (positionIsOdd ? 1 : -1);
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
