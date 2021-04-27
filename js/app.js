'use strict';

alert('hello , and welcome to my web introduction ');

let userName = prompt('please enter your name ');

alert('welcom ' + userName);




let Name = prompt('is my name ahmad ? yes or no ');

switch (Name.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}


let myAge = prompt('is my age 23 ?  ');

switch (myAge.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}

let colorEye = prompt('what do you thank about my color eyes is it broan ?');

switch (colorEye.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}

let study = prompt('what do you thank about my major is it a mechanical engineer ?')

switch (study.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}

let phoneType = prompt('do i have an android phone ?');

switch (phoneType.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}

alert('thank you ' + userName + ' for your time ,please return as many you want ');