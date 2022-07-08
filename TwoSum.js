// Solution №1:
// Brute-force

const twoSum = (numbers, target) => {
    for (let i = 0; i < numbers.length; i += 1) {
        for (let j =  i + 1; j < numbers.length; j += 1) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
};

// Solution №2:
// Hash-data

const twoSum = (numbers, target) => {
    const hash = {};
    for (let i = 0; i < numbers.length; i += 1) {
        if (hash[target - numbers[i]] !== undefined) {
            return [hash[target - numbers[i]], i];
        }
        hash[numbers[i]] = i;
    }
};
