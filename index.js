'use strict';

function firstF (func){
 return func();
}

function secondF(){
    return 'Hello from second function!';
}

console.log(firstF(secondF));

/**
 * 
 * @param {Date} obj 
 * @returns {string}
 */
function myClock (obj){
    return `Now is ${obj.getHours()} 
            hours and ${obj.getMinutes()} 
            minutes and ${obj.getSeconds()} seconds`;
}

const dateObj = new Date();

/**
 * 
 * @param {number} num 
 * @returns {string}
 */
function getDevider(num){
let result = '';

    if(num % 2 === 0){

        result += 'devide by 2';

    } else if( num % 3 === 0){

        result += 'devide by 3';

    } else if( num % 5 === 0){

        result+= 'devide by 5';

    } else{
        return 'devide by nothing';
    }
    return result;

}

// console.log(getDevider(12));
// console.log(getDevider(15));
// console.log(getDevider(25));
// console.log(getDevider(11));
