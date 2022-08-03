//Operators- used withvariable to create an expression
//Arithmetic Operators

let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);

//Increment (++)
console.log(x++);
console.log(x);

//Decrement
console.log(x);
console.log(x--);

//Assignment Operators

x++; //same as x= x +1
console.log((x += 5));
console.log((x *= 5));

//Comparison operators relational

let z = 1;

console.log(z > 0);
console.log(z >= 0);
console.log(z < 1);
console.log(z <= 1);

//equality (strict) type and value
console.log(z === 1); //same as
console.log("z" === z); //false
console.log(z !== 1); //not same as

// equality (loose)
console.log(1 == 1); //that or that
console.log("1" == 1); //that or that it takes the first and converts the second a string
console.log(true == 1); //it will take the boolean so say both as true

//ternary operators (conditional) if else end
let points = 110;
let type = points > 100 ? "GOLD" : "SILVER";
console.log(type);

//Logical Operators with non-booleans and, or not
//AND && returns true if both areTRUE

console.log(true && true); //TRUE
console.log(true && false); //FALSE

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log("Eligible", eligibleForLoan);

//OR || returns true if one is TRUE

console.log(true || true); //TRUE
console.log(true || false); //TRUE

let highIncomeOr = true;
let goodCreditScoreOr = false;
let eligibleForLoanOr = highIncomeOr || goodCreditScoreOr;

//NOT ! returns true if one is TRUE
applicationRefused = !eligibleForLoan;

console.log("application refused", applicationRefused);

//Logical Operators with non-booleans
console.log(false || true);
console.log(false || 1);
console.log(false || 1 || 2); //short circuiting
console.log(false || "Mosh");
console.log(true || "Mosh"); //truthy or falsy
//falsey values undefined, null, 0, false, " ", NaN
console.log(null || "Mosh"); //truthy or falsy
console.log(0 || "Mosh"); //truthy or falsy
console.log(NaN || "Mosh"); //truthy or falsy

//pick a colour or a default color

let userColor = ""; //add a colour here to change the current color
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

//bitwise operators numbers are stored in binary format
//1 = 00000001 8bits that are 1 bit of info
// 2 =00000010

console.log(1 | 2); // | bitwise OR //R = 00000011=> 3
console.log(1 & 2); // | bitwise OR //R = 00000000=> 0

//access control system Read Write Execute
// 00000100 READ 0000010 WRITE 00000001 Exercute

const readPermission = 4;
const writePermission = 2;
const exercutePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);
//remove the readPermission to change status to no

//Operator precedence use brackets to control the order

let b = 2 + 3 * 4;
console.log(b);
let c = (2 + 3) * 4;
console.log(c);

let d = 10;
let e = d > 5 && d < 15;
console.log(e); //true

//Swapping variables

let f = "red";
let g = "blue";

let h = f;
f = g;
g = h;
console.log(f);
console.log(g);
