function isReapeatTwiceDigit(number) {
    if (number % 11 == 0) {
        return true;
    } else {
        return false;
    }
}

let twiceNumber  = [];

for (let i = 10; i < 100; i++) {
    if (isReapeatTwiceDigit(i)) {
        twiceNumber.push(i);
    }
}

console.log("Twice number are: " + twiceNumber);