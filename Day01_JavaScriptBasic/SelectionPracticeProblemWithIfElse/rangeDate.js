
const args = process.argv.slice(2); 

// Validate input
if (args.length !== 2) {
    console.log("Usage: node checkDate.js <day> <month>");
    process.exit(1);
}

// Convert input to numbers
let day = parseInt(args[0], 10);
let month = parseInt(args[1], 10);

// Check if the date is between March 20 and June 20
let isValid = 
    (month === 3 && day >= 20 && day <=31) ||  // March 20 or later
    (month === 4) ||               // Any day in April
    (month === 5) ||               // Any day in May
    (month === 6 && day <= 20);    // June 20 or earlier


// Print the result
console.log(isValid);
