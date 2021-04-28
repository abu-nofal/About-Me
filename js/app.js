'use strict';

alert('hello , and welcome to my page introduction ');

let userName = prompt('please enter your name ');

alert('welcom ' + userName + ' i will ask a few question about me to now if you now me ');


let score = 0;//global variable


function q1(){
let Name = prompt('do you now how i am  ? yes or no ');

switch (Name.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect i am ahmad  ');
        score++;
        break;
    case 'no':
    case 'n':
        alert('dont wory you will now me after this ');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}
}
q1();
function q2(){

let myAge = prompt('is my age 23 ?  ');

switch (myAge.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        score++;
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}
}
q2();
function q3(){
let colorEye = prompt('what do you thank about my color eyes is it broan ?');

switch (colorEye.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        score++;
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}
}q3();
function q4(){
let study = prompt('what do you thank about my major is it a mechanical engineer ?')

switch (study.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect ');
        score++;
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}
}q4();
function q5(){
let phoneType = prompt('do i have an android phone ?');

switch (phoneType.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('great jop thats corect  ');
        score++;
        break;
    case 'no':
    case 'n':
        alert('oopps that is a wrong answer');
        break;

    default:
        alert('you must answer with yes or no ')
        break;
}
}
q5();

// you can use 4 question  using for loop
function q6(){
alert('welcome aguin ' + userName + ' now round two i will ask you a quess question are you ready  ')

let attempts = prompt('can you quess my fav number you have Four attempts to get my fav number let\'s begin \n choose number between 20 to 29 ');
attempts = parseInt(attempts);

for (let i = 0; i < 4; i++) {
    if (attempts == 23) {
        alert('great job that is amazing you have answer with ' + (i+1) + ' attemp');

        score++;
        break;

    }
    else if (attempts > 23) {
        alert('oopps your answer is to higth try again please ');
        attempts = prompt(' choose number between 20 to 29 lies than ' + attempts);
    }
    else if (attempts < 23) {
        alert('oopps your answer is to low try again please ');
        attempts = prompt(' choose number between 20 to 29 higher than ' + attempts);
    }

}}
q6();


function q7(){
alert('lets go with another question you have six attempts  ')

let question7 = prompt('can you guess my fav drink ');
let drink = ['water', 'cola', 'Pepsi', 'tea', 'coffee']


for (let z = 0; z < 6; z++) {


    if (question7 == 'cola') {

        alert('great job that is amazing you have answer with ' + (z+1) + ' attemp');
        score++;
        break;
    }

    else if (question7 == 'Pepsi') {

        alert('great job that is amazing you have answer with ' + (z+1) + ' attemp');
        score++;
        break;
    }
    else if (question7 == 'coffee') {

        alert('great job that is amazing you have answer with ' + (z+1) + ' attemp');
        score++;
        break;
    }
    else if (question7 == 'tea') {

        alert('great job that is amazing you have answer with ' + (z+1) + ' attemp');
        score++;
        break;

    }
    else if (question7 == 'water') {

        alert('great job that is amazing you have answer with ' + (z+1) + ' attemp');
        score++;
        break;

    }
    else {
        question7 = prompt('oopps  try agian you can make it  ');
    }



}





alert('the correct answer was cola, water , pepsi , tea and a coffee');

alert('great job ' + userName + ' you answer ' + score + ' question correct congratulations');


alert('thank you ' + userName + ' for your time ,please return as many you want ');
}q7(); 