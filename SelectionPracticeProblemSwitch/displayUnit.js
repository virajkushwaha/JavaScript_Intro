let unit = parseInt(process.argv[2]);

switch (unit) {
    case 1:
        console.log("Unit: One");
        break;
    case 10:
        console.log("Unit: Ten");
        break;
    case 100:
        console.log("Unit: Hundred");
        break;
    case 1000:
        console.log("Unit: Thousand");
        break;
    case 10000:
        console.log("Unit: Ten Thousand");
        break;
    case 100000:
        console.log("Unit: Lakh");
        break;
    case 1000000:
        console.log("Unit: Ten Lakh");
        break;
    default:
        console.log("Invalid Input");
        break;
}