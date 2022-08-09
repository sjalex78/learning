// divisible by3 fizz
//divsible  by5 Buzz
//both fizzBuzz
//no dicisible by 3 or 5 get <div class="form-group">
//not a numberie stringNAN

// function fizzBuzz(input) {
// if (typeof input !== 'number') return NaN;
//   else if (input % 3 == 0 && input % 5 == 0) return "fizzBuzz";
//   else if (input % 3 == 0) return "fizz";
//   else if (input % 5 == 0) return "Buzz";
//   else if (input % 3 != 0 && input % 5 != 0) return input;
// }
function fizzBuzz(input) {
if (typeof input !== 'number') return NaN;
  if (input % 3 === 0 && input % 5 == 0) return "fizzBuzz";
  if (input % 3 === 0) return "fizz";
  if (input % 5 === 0) return "Buzz";
  if ((input % 3 !== 0) && (input % 5 != 0)) return input;
}

const output = fizzBuzz(15);
console.log(output);
