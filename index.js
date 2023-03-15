'use strict';


function toSquare(...args){
    return args.map( item => item*item );
}

const toSquare2 = (...args) => args.map( item => item*item )


function threeNum (a, b, c){
    return a*b/c;
}

const threeNum2 = (a, b, c) =>  a*b/c;

function greeting (str){
    return `Hello, ${str}!`;
}

const greeting2 = str => `Hello, ${str}`;

