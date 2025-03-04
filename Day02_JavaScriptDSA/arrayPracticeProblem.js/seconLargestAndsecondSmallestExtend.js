function secondLargestAndsecondSmallest(arr) {
    let min = Number.MAX_VALUE;
    let secondMin = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;     
    let secondMax = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] != min) {
            secondMin = arr[i];
        }
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] != max) {
            secondMax = arr[i];
        }
    }
    console.log("Array:", arr);
    console.log("Second Min:", secondMin);
    console.log("Second Max:", secondMax);
    return "";
    }
function usingSortFindSecondLargestAndSecondSmallest(arr) {
    console.log("Array:", arr);
    arr.sort();
    console.log("Second Min:", arr[1]);
    console.log("Second Max:", arr[arr.length - 2]);
    return "";
    }
function randomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 900) + 100);
    }
    return arr;
}

console.log("Without Using Sorting:");
console.log(secondLargestAndsecondSmallest(randomArray()));
console.log("Using Sorting:");
console.log(usingSortFindSecondLargestAndSecondSmallest(randomArray()));