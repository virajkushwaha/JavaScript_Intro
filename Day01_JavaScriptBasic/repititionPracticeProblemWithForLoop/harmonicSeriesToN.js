let n = parseInt(process.argv[2]);

let harmonicSeries = "";

for (let i = 1; i <= n; i++) {
    harmonicSeries += "1/"+i+" + ";
}

console.log("Harmonic Series of "+n+" is: "+harmonicSeries.slice(0, -2));