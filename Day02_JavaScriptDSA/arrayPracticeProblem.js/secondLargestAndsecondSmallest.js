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
    console.log("secondMin:", secondMin);
    console.log("secondMax:", secondMax);
    return;
    }

function randomArray() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 900) + 100);
    }
    return arr;
}

console.log(secondLargestAndsecondSmallest(randomArray()));