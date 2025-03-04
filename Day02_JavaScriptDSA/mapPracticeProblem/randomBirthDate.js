function generateBirthMonths() {
    let birthMonths = {};
    
    // Initialize dictionary with months (1-12)
    for (let i = 1; i <= 12; i++) {
        birthMonths[i] = [];
    }
    
    // Generate birth months for 50 individuals
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthMonths[month].push(`Person${i}`);
    }
    
    // Print birth months grouped by month
    console.log("Birthdays grouped by month:");
    for (let month in birthMonths) {
        console.log(`Month ${month}: ${birthMonths[month].join(", ")}`);
    }
}

// Run the birth month simulation
generateBirthMonths();
