let a = []
let max = 0;
let min = 1000;
for (let i = 0; i < 5; i++) {
    let b = Math.floor(Math.random() * 900) + 100;
    if (b > max) {
        max = b;
    }
    if (b < min) {
        min = b;
    }
    a.push(b);
}
console.log("Array:", a);
console.log("Max:", max);
console.log("Min:", min);
