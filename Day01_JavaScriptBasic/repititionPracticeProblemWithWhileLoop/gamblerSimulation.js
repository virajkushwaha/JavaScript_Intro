function gamblerSimulation() {
    let money = 100;
    const goal = 200;
    let bets = 0, wins = 0;
    
    while (money > 0 && money < goal) {
        bets++;
        
        // Simulate a bet (50% chance of winning)
        if (Math.random() < 0.5) {
            money++; // Win Rs 1
            wins++;
        } else {
            money--; // Lose Rs 1
        }
    }
    
    console.log(`Final Money: Rs ${money}`);
    console.log(`Total Bets Made: ${bets}`);
    console.log(`Total Wins: ${wins}`);
}

// Run the simulation
gamblerSimulation();
