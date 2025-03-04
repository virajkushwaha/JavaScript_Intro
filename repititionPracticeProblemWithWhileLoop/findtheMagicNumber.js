let low = 1, high = 100;
let number=process.argv[2]; 

console.log("Think of a number between 1 to 100...");

while (low !== high) {
    let mid = Math.floor((low + high) / 2);
    let answer =number;
    if (answer === "yes") {
        high = mid;
    } else {
        low = mid + 1;
    }
}

console.log(`Your Magic Number is: ${low}`);
