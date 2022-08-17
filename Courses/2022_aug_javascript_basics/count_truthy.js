const array = [0, null, undefined, "", 1, 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let countTruthy = 0;
  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
}
// return "yes";
