'use strict';

function calculator(){
    let userInput1 = Number(prompt('input first number'));
    let userInput2 = Number(prompt('input second number'));

    let userAction = prompt('what do you want?');

    switch (userAction) {
        case '*':
            return multiplication(userInput1, userInput2);
           

        case '/':
            return division(userInput1, userInput2);
         

        case '+':
            return plus(userInput1, userInput2);
           

        case '-':
            return minus(userInput1,userInput2);
           
    
        default:
            break;
    }
   

}

function plus(a, b){
return a + b;
}

function minus(a, b){
return a - b;
}

function division(a, b){
return a / b;
}

function multiplication(a, b){
return a * b;
}


console.log(calculator());

