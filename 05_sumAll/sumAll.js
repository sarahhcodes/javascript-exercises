const sumAll = function(firstNumber, lastNumber) {
    let sum = 0;

    if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber) ||
        firstNumber < 0 || lastNumber < 0) {
            return "ERROR";
        }

    else if (firstNumber > lastNumber) {
        for (let i = lastNumber; i <= firstNumber; i++) {
            sum += i;
        }

        return sum;
    }

    else {
        for (let i = firstNumber; i <= lastNumber; i++) {
            sum += i;
        }

        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
