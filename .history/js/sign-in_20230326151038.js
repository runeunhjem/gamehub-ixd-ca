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


// THE VALIDATION FUNCTION TO BE RUN ON SUBMIT
function validateForm(event) {
  event.preventDefault(); // Needed so the forms dont reset
  if (formSubmitted) {
    if (checkLength(usernameSignIn.value, 0)) {
      usernameSignInError.style.display = "none";
      usernameSignIn.style.backgroundColor = "#8fff98";
      usernameSignIn.style.color = "#000000";
    } else {
      usernameSignInError.style.display = "block";
      usernameSignIn.style.backgroundColor = "#fafad2";
      usernameSignIn.style.color = "#000000";
    }
    if (checkLength(lastName.value, 3)) {
      lastNameError.style.display = "none";
      lastName.style.backgroundColor = "#8fff98";
      lastName.style.color = "#000000";
    } else {
      lastNameError.style.display = "block";
      lastName.style.backgroundColor = "#fafad2";
      lastName.style.color = "#FF0000";
    }    
    if (
      checkLength(firstName.value, 0) &&
      checkLength(lastName.value, 3) &&      
      validateEmail(email.value) &&
      checkLength(message.value, 9)
      ) {
      signInButton.setAttribute("type", "submit");
      signInButton.innerText = "Sign In";
      signInButton.className = "buttonSuccess";
      signInButton.addEventListener("click", successMessage);
    } else {
      signInButton.setAttribute("type", "button");
      signInButton.innerText = "Form Error";
      signInButton.className = "send-msg-button buttonNotReady";
      confirmSuccess.style.display = "none";
    }
  }
};
