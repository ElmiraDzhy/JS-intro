'use strict';

//learn loops

//homework task :

function fizzbuzz (){
    for(let i = 0; i < 100; i++){
        if( i % 3 === 0 && i % 5 === 0 ){
            console.log('fizzbuzz')
        } else if( i % 3 === 0 ){
            console.log('fizz')
        }else if( i % 5 === 0 ){
            console.log('buzz')
        } else {
            console.log(i);
        }
       
    }
}

function guessNumber(){
let userNumber = Number(prompt('input number'));

    while(userNumber !== number){
        userNumber > number ? console.log('to big') : console.log('to small');
        userNumber = Number(prompt('input number'));
   }
   console.log('You win!');
}

let number = Math.round(Math.random()*10);

guessNumber();


