export function computeFibonacciNumber(position: number): number {
    if (position === 0) {
        return 0;
    }

    if (position < 0) {
        const positionIsOdd = position % 2 === -1;
        return computeFibonacciNumber(-position) * (positionIsOdd ? 1 : -1);
    }

    if (position <= 2) {
        return 1;
    }

    let smallFibonacciNumber = 1;
    let largeFibonacciNumber = 1;

    let currentPosition = 2;
    while (currentPosition < position) {
        const nextFibonacciNumber = smallFibonacciNumber;
        smallFibonacciNumber = largeFibonacciNumber;
        largeFibonacciNumber += nextFibonacciNumber;
        currentPosition++;
    }
    return largeFibonacciNumber;
}
