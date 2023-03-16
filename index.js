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