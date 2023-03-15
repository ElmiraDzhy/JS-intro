'use strict';


function getBiggerNum (a = Number(prompt()), b = Number(prompt())){
    return a > b ? a : b;
}

function sum2 (...args){
    let result = 0;
    for(let i = 0; i < args.length; i++){
        result += args[i];
    }
    return result;
}

function isEven (num){
    return num % 2 ? false : true;
    // return !Boolean(num % 2);
}

const isEven2 = num =>  num % 2 === 0 ? true : false;





