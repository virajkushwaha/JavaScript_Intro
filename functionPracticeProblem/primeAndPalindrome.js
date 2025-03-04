function isPrime(num){
    if(num <= 1){
        return false;
        }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
            }
        }
    return true;
}

function checkPalindrome(num){
    let reverse = 0;
    let temp = num;
    while (num > 0) {
        let remainder = num % 10;
        reverse = reverse * 10 + remainder;
        num = Math.floor(num / 10);
    }
    if (temp == reverse) {
        return true;
    } else {
        return false;
    }
}

let num = parseInt(process.argv[2]);
let isprime = isPrime(num);
let ispalindrome = checkPalindrome(num);

if(isprime && ispalindrome){
    console.log(num + " is a prime palindrome number");
}
else if(isprime){
    console.log(num + " is a prime number");
}
else if(ispalindrome){
    console.log(num + " is a palindrome number");
}
else{
    console.log(num + " is neither prime nor palindrome number");
}
