function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulateDiceRolls() {
    let rollCount = {};
    let maxRolls = 10;
    
    // Initialize dictionary with numbers 1 to 6
    for (let i = 1; i <= 6; i++) {
        rollCount[i] = 0;
    }
    
    // Roll die until one number reaches maxRolls
    let reachedMax = false;
    while (!reachedMax) {
        let roll = rollDie();
        rollCount[roll]++;
        
        if (rollCount[roll] === maxRolls) {
            reachedMax = true;
        }
    }
    
    // Find max and min rolled numbers
    let maxNumber = Object.keys(rollCount).reduce((a, b) => rollCount[a] > rollCount[b] ? a : b);
    let minNumber = Object.keys(rollCount).reduce((a, b) => rollCount[a] < rollCount[b] ? a : b);
    
    console.log("Roll counts:", rollCount);
    console.log(`Number that reached 10 times first: ${maxNumber}`);
    console.log(`Number that appeared least times: ${minNumber}`);
}

// Run the simulation
simulateDiceRolls();


