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
    if (checkLength(firstName.value, 0)) {
      firstNameError.style.display = "none";
      firstName.style.backgroundColor = "#8fff98";
      firstName.style.color = "#000000";
    } else {
      firstNameError.style.display = "block";
      firstName.style.backgroundColor = "#fafad2";
      firstName.style.color = "#000000";
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
    if (validateEmail(email.value)) {
      emailError.style.display = "none";
      email.style.backgroundColor = "#8fff98";
      email.style.color = "#000000";
    } else {
      emailError.style.display = "block";
      email.style.backgroundColor = "#fafad2";
      email.style.color = "#FF0000";
    }
    if (checkLength(message.value, 9)) {      
      messageError.style.display = "none";
      message.style.backgroundColor = "#8fff98";
      message.style.color = "#000000";
    } else {
      messageError.style.display = "block";
      message.style.backgroundColor = "#fafad2";
      message.style.color = "#FF0000";
    }
    if (
      checkLength(firstName.value, 0) &&
      checkLength(lastName.value, 3) &&      
      validateEmail(email.value) &&
      checkLength(message.value, 9)
      ) {
      sendButton.setAttribute("type", "submit");
      sendButton.innerText = "Send Message";
      sendButton.className = "buttonSuccess";
      sendButton.addEventListener("click", successMessage);
    } else {
      sendButton.setAttribute("type", "button");
      sendButton.innerText = "Form Error";
      sendButton.className = "send-msg-button buttonNotReady";
      confirmSuccess.style.display = "none";
    }
  }
};
