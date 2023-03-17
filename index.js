'use strict';

//learn loops

// for (let i = 0; i < 10; i+=2) {
//     console.log(i);
// }


let counter = 0;
while (counter < 3) {
    console.log(counter);
    counter++;
}

console.group();

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

console.groupEnd();

// let index = 0;
// while (index <= 10) {
//     if(index % 2 === 0){
//         console.log(index);
//     }
//     index++;
// }

console.group();
let index = 0;
while (index <= 10) {
    if(index % 3 === 0){
        console.log(`${index} divide by 3`);
    }

    if(index % 5 === 0){
        console.log(`${index} divide by 5`);
    }
    index++;
}

let a = 0;
let sum = 0;
while (a <= 20) {
    sum += a;
    a++;
}

console.log(sum);

console.groupEnd();

// do {
    
// } while (condition);
