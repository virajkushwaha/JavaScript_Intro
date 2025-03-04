function primeFactors(N) {
    let factors = [];
    
    // Check for divisibility by 2 and divide N until it is odd
    while (N % 2 === 0) {
        factors.push(2);
        N = Math.floor(N / 2);
    }
    
    // Check for odd factors from 3 to sqrt(N)
    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            factors.push(i);
            N = Math.floor(N / i);
        }
    }
    
    // If N is still greater than 2, then it must be a prime number
    if (N > 2) {
        factors.push(N);
    }
    
    return factors;
}

// Example usage
let N = process.argv[2];
console.log(`Prime factors of ${N}:`, primeFactors(N));
