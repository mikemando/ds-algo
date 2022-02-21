function sumNumbers(numbers) {
    let totalSum = 0;
    for (let number of numbers) {
        totalSum += number;
    }
    return totalSum;
}

sumNumbers([7, 5, 9]);
