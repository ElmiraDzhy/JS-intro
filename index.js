'use strict';



//

let a = Number(prompt());
let b = Number(prompt());

function mySum (a, b){
    return a + b;
}
console.log(mySum(a,b));


function sum2 (...args){
    let result = 0;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }
    return result;
}






