//Conditional statements
//if else

//take Hour
//if hour6am-12pm Good morning
//if 12-6pm afternoon
//otherwise say good evening

//set up
// if (condition){
// statement
// }
// else if(different condition){
// statement
// else if(different condition){
// statement
// else (different condition){
// statement
// }

let hour = 4;

if (hour >= 6 && hour < 12) console.log("Good Morning");
else if (hour >= 12 && hour < 18) console.log("Good afternoon");
else console.log("Good Evening");
// if (hour >= 6 && hour < 12) {
//   console.log("Good Morning");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good afternoon");
// } else console.log("Good Evening");

//Switch case
//
let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "host":
    console.log("Host User");
    break;

  default:
    console.log("Unknown User");
}

//the if else equivalent
if (role === "guest") console.log("Guest");
else if (role === "host") console.log("Host");
else console.log("unknown");

//FORused repeat
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

//LOOPS
// FOR LOOPS (initial expression; condition; increment expression;){action}
for (let i = 0; i < 5; i++) {
  console.log("hello");
}
for (let i = 45; i > 34; i--) {
  if (i % 2 !== 0) console.log(i);
}

//WHILE

// let i = 0;

// // while (condition)
// while (i <= 5) {if (i%2 !== 0) console.log(i);
//   i++;
// }

// DO WHILE LOOP it is done at least once.. becaus the while ischecked at the end

let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);

//Infinite LOOPS
//be careful
// let i = 0;
// do {
//   if (i % 1 !== 0) console.log(i);
//   // i++; //THIS IS OFF THEN IT WILL NEVER STOP!
// } while (i <= 5);

//FOR IN

const person = {
  name: "GG",
  age: 8,
};

for (let key in person) console.log(key, person[key]);
console.log(person["name"]);

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

//For Of items in an array

for (let color of colors) console.log(color);

//Break and COntinue break jumpout of loop and continue moves to next part of the code.
let a = 0;

while (a <= 10) {
  // if(a === 5) break;
  if (a % 2 === 0);
  console.log(a);
  a++;
  continue;
}

//Exercise
let number = max(5, 1);
console.log(number);

function max(d, e) {
(d > e) ? d : e;
}
// function max(d, e) {
//   if (d > e) return d;
//   else return e;//want to remove this if possible
// }


