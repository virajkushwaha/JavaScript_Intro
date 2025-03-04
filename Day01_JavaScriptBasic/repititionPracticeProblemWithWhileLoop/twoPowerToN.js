let a = parseInt(process.argv[2]);

let i = a;
while (i == a) {
    console.log(i);
    i *= 2;
    if(i < 256) break;
}
