let arr = [];

arr[0] = parseInt(process.argv[2]);
arr[1] = parseInt(process.argv[3]);
arr[2] = parseInt(process.argv[4]);

let sum = sumOfThreeIntergerIsZero(arr);

function sumOfThreeIntergerIsZero(arr) {
    return arr[0] + arr[1] + arr[2];
}

if (sum == 0) {
    console.log("Sum of three integers is zero");
}
else {
    console.log("Sum of three integers is not zero");
}
