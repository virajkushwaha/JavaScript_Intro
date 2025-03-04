let arg = process.argv.slice(1);

let year = parseInt(arg[1]);

if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
    console.log("Leap Year");
    }else{
    console.log("Not a Leap Year");
    }
