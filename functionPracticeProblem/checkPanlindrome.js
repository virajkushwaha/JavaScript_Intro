function checkPalindrome(num1, num2) {
    let reverse = 0;
    while (num1 > 0) {
        let remainder = num1 % 10;
        reverse = reverse * 10 + remainder;
        num1 = Math.floor(num1 / 10);
    }
    if (num2 == reverse) {
        return true;
    } else {
        return false;
    }
}

let num1 = process.argv[2];
let num2 = process.argv[3];

if (checkPalindrome(num1, num2)) {
    console.log("The numbers are palindrome.");
} else {
    console.log("The numbers are not palindrome.");
}