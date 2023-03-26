// VARIABLES
const signInForm = document.querySelector("#sign_in");
const signInButton = document.querySelector("#sign-in-button");
const username = document.querySelector("#username_signin");
const usernameError = document.querySelector("#username_signinError");
const password_signin = document.querySelector("#password_signin");
const password_signinError = document.querySelector("#password_signinError");

// const confirmSuccess = document.querySelector(".message-sent");
let formSubmitted = false;


// CHANGE PLACEHOLDERS TO INPUT TIPS ON FOCUS
firstName.addEventListener("focus", function() {
  firstName.placeholder = "Min 1 letter";  
});
firstName.addEventListener("blur", function() {
  firstName.placeholder = "First Name";  
});
lastName.addEventListener("focus", function() {
  lastName.placeholder = "Min 4 letters";  
});
lastName.addEventListener("blur", function() {
  lastName.placeholder = "Last Name";  
});
email.addEventListener("focus", function() {
  email.placeholder = "Valid Email format (john.doe@mail.com)";  
});
email.addEventListener("blur", function() {
  email.placeholder = "Email Address";  
});
message.addEventListener("focus", function() {
  message.placeholder = "Min 10 characters";  
});
message.addEventListener("blur", function() {
  message.placeholder = "What can we help you with";  
});

