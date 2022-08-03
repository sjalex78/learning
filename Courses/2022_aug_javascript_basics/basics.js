//Constants
let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

//if a constant need to be reassigned use let otherwise use const

const paymentRate = 0.3;
console.log(paymentRate);

//Primitive Types
//value types strings numbers Boolean undefined and null
let happy = "Mosh"; //strings literal
let age = 30; //number literal
let isApproved = true; // Boolean Literal true and false(can not be variable names
let firstName = undefined;
let lastName = null; //to clear the value of a variable

//Dynamic Typing
//the typeof a variable can change
console.log(typeof happy);
console.log(typeof age);
console.log(typeof isApproved);
console.log(typeof firstName); //type and value
console.log(typeof lastName); //object

//ReferenceTypes
//a. Objects
//put
let person = {
  face: "Happy",
  hands: true,
}; //object literal

console.log(person);
console.log(person.face);
console.log(person.hands);

//Bracket Notation this can be used in a dynamic way
person["hands"] = false;
console.log(person.hands);

//b. arrays
let selectedColors = []; //array literal that is empty
let deletedColors = ["red", "blue"]; //array literal that is empty
deletedColors[2] = "green";
console.log(deletedColors);
deletedColors[3] = 1;
console.log(deletedColors.length);
console.log(deletedColors);

//Functions
//performing a task
function greet(nickname, sound) {//parameter input {
  console.log('Hi ' + nickname + ' ' + sound);
}

greet('Tilly', "moo!");//argument is the value you supply for the parameter
greet('Sarah', "woof!");

//Types of functions
//calculates a value
function square(number) {
  //parameter input {
  return number * number;
}

let number = square(2);
console.log(number);

//or call the function
console.log(square(2))
