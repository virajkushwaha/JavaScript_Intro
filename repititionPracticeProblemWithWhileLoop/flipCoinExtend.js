function flipCoin(){
    return Math.random() < 0.5  ? "Heads" : "Tails";
    
}

let a = 0;

let tail = 0;
let head = 0;

while (a === 0) {
    let result = flipCoin();
    if (result === "Heads") {
        head++;
    } else {
        tail++;
    }
    if (head === 11 || tail === 11) {
        if(head === 11){
            console.log("Heads wins");
        }
        else{
            console.log("Tails wins");
        }
        a = 1;
    }
}