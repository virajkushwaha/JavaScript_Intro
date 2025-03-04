let number = parseInt(process.argv[2]);
let unit = process.argv[3];

switch (unit) {
    case "feet":
        console.log("Inch:", number * 12);
        console.log("Meter:", number / 3.28084);
        break;
    case "inch":
        console.log("Feet:", number / 12);
        console.log("Meter:", number / 39.3701);
        break;
    case "meter":
        console.log("Feet:", number * 3.28084);
        console.log("Inch:", number * 39.3701);
        break;
    default:
        console.log("Invalid Unit Or Not Accepted By the Program");
        break;
}
