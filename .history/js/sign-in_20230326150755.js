// VARIABLES
const signInForm = document.querySelector("#sign_in");
const signInButton = document.querySelector("#sign-in-button");
const usernameSignIn = document.querySelector("#username_signin");
const usernameSignInError = document.querySelector("#username_signinError");
const passwordSignin = document.querySelector("#password_signin");
const passwordSigninError = document.querySelector("#password_signinError");

// const confirmSuccess = document.querySelector(".message-sent");
let formSubmitted = false;


// CHANGE PLACEHOLDERS TO INPUT TIPS ON FOCUS
usernameSignIn.addEventListener("focus", function () {
  usernameSignIn.placeholder = "Min 4 characters";
});
usernameSignIn.addEventListener("blur", function () {
  usernameSignIn.placeholder = "Username";
});
passwordSignin.addEventListener("focus", function () {
  passwordSignin.placeholder = "Min 4 characters";
});
passwordSignin.addEventListener("blur", function () {
  passwordSignin.placeholder = "Password";
});

