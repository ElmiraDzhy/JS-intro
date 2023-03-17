'use strict';


let choice = Number(prompt( ));



function userChoice(num){
let result = '';


    if( isNaN(num) ){
        return 'you input wrong type of data';
    }

    switch (num) {
        case 1:
            
            result += 'monday';
            break;

        case 2:

            result += ' tuesday';
            break;

        case 3:

            result += 'wednesday';
            break;

        case 4:

            result += 'thursday';
            break;

        case 5:

            result += 'friday';
            break;

        case 6:

            result += 'saturday';
            break;

        case 7:

            result += 'sunsday';
            break;
    
        default:
            result += 'you did not choose anything';
    }

    return result;

}

alert(userChoice(choice));




