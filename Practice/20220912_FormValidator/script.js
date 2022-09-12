module.exports = { submitListener, showError };

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
// function showError(input, message) {
function showError() {
  // const formControl = input.parentElement;
  // formControl.className = "form-control error";
  // const small = formControl.querySelector("small");
  // small.innerText = message;
}

// function showSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }

// function submitListener(event) {
function submitListener() {
  // event.preventDefault();
  // // console.log(username.valid);
  // if (username.value === "") {
  showError();
  // showError(username, "Username is required");
  // } else {
  //   showSuccess(username);
  // }
}
//Event Listener
form && form.addEventListener("submit", submitListener);
