function isPrime(num){
    if(num <= 1){
        return false;
        }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
            }
        }
    return true;
}

let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

for(let i = start; i <= end; i++){
    if(isPrime(i)){
        console.log(i);
        }
    }