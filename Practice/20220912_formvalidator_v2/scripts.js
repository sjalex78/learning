const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show input success view
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// email valid input
function isValidEmail(email) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email).toLowerCase());
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
    }
  });
}

// Event Listener
function submitListener(event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
  if (password2.value === "") {
    showError(password2, "Confirmation Password is required");
  } else {
    showSuccess(password2);
  }
}
//Event Listener
form && form.addEventListener("submit", submitListener);
