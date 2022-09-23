export function computeFibonacciNumber(position: number, recursion: boolean = false): number {
    if (recursion) {
        return recursiveFibonacci(position);
    }

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


export function recursiveFibonacci(initialPosition: number, left: number = 0, right: number = 1, position: number = initialPosition): number {
    if (initialPosition === 0) {
        return 0;
    }
    if (position === 0) {
        return left;
    }
    if (initialPosition > 0) {
        return recursiveFibonacci(initialPosition, right, left + right, position - 1);
    }
    return recursiveFibonacci(initialPosition, right - left, left, position + 1);
}
