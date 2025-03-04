function celsiusToFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}

function fahrenheitToCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

let temp = process.argv[2];
let unit = process.argv[3];

switch (unit) {
    case 'C':
        console.log(`${temp}C = ${celsiusToFahrenheit(temp)} F`);
        break;
    case 'F':
        console.log(`${temp}F = ${fahrenheitToCelsius(temp)} C`);
        break;
    default:
        console.log("Invalid unit. Use 'C' or 'F'.");
        }