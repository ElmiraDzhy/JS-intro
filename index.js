'use strict';


let userAge = Number(prompt());

//
function isAdult (userAge){
    return userAge >= 18 ? true : false;
}

console.log(`${isAdult(userAge) ? 'user is adult' : 'user is not adult' }`);

//

function mySum (a, b){
    return a +b;
}


console.log(mySum(5,16));

//

const divElem = document.createElement('div');
document.body.appendChild(divElem);
divElem.style.backgroundColor = 'blue';
divElem.style.height = '100px';
divElem.style.width = '100px';
divElem.textContent = 'Text from js.file';
divElem.style.color = 'white';

//

function argFun(...arg){
    return arg.map((item) => item*item);
}







