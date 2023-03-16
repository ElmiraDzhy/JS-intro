'use strict';

const PI = 3.14;

function average (a, b){
    return  isNaN(a) || isNaN(b) ? false : (a+b)/2;
} 

function quadEquation(a,b,c){
    let D = (b * b) - (4 * a * c);

    if(D < 0){

        return false;

    } 
     if(D === 0){

        return -b/(2*a);

    } 
     if(D > 0){

         return ` x1 = ${(-b + Math.sqrt(D)) / (2*a)} x2 = ${(-b - Math.sqrt(D)) /( 2*a)}`;
    }

}

function circleRadius(r){
    return 2*PI*r;

}

/**
 * 
 * @param {number} radius
 * @param {number} height
 * @returns {number}
 */
function cylinderVolume (r, h) {
    return PI * (r*r) * h;
}

let func = function(){
    return;
}

let arrowFunc = x => x * x;











