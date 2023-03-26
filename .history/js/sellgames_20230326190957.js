// VARIABLES
const sellGamesForm = document.querySelector("#sellgames-form");
const sellGamesButton = document.querySelector("#sellgames-button");
const usernamesellGames = document.querySelector("#username");
const usernamesellGamesError = document.querySelector("#username_sellGamesError");
const passwordsellGames = document.querySelector("#password");
const passwordsellGamesError = document.querySelector("#password_sellGamesError");
const repeatPasswordsellGames = document.querySelector("#repeat-password");
const repeatPasswordsellGamesError = document.querySelector(
  "#repeat-password_sellGamesError"
);
const emailsellGames = document.querySelector("#email");
const emailsellGamesError = document.querySelector("#email_sellGamesError");
// let formSubmitted = false;

// CHANGE PLACEHOLDERS TO INPUT TIPS ON FOCUS
usernamesellGames.addEventListener("focus", function () {
  usernamesellGames.placeholder = "Min 4 characters";
});
usernamesellGames.addEventListener("blur", function () {
  usernamesellGames.placeholder = "Username";
});
passwordsellGames.addEventListener("focus", function () {
  passwordsellGames.placeholder = "Min 4 characters";
});
passwordsellGames.addEventListener("blur", function () {
  passwordsellGames.placeholder = "Password";
});
repeatPasswordsellGames.addEventListener("focus", function () {
  repeatPasswordsellGames.placeholder = "Repeat your wanted password";
});
repeatPasswordsellGames.addEventListener("blur", function () {
  repeatPasswordsellGames.placeholder = "Repeat Password";
});
emailsellGames.addEventListener("focus", function () {
  emailsellGames.placeholder = "Enter a valid email address";
});
emailsellGames.addEventListener("blur", function () {
  emailsellGames.placeholder = "Email Address";
});

// THE VALIDATION FUNCTION TO BE RUN ON SUBMIT
function validateForm(event) {
  event.preventDefault(); // Needed so the forms dont reset
  if (formSubmitted) {
    if (checkLength(usernamesellGames.value, 3)) {
      usernamesellGamesError.style.display = "none";
      usernamesellGames.style.backgroundColor = "#8fff98";
      usernamesellGames.style.color = "#000000";
    } else {
      usernamesellGamesError.style.display = "block";
      usernamesellGames.style.backgroundColor = "#fafad2";
      usernamesellGames.style.color = "#FF0000";
    }
    if (checkLength(passwordsellGames.value, 3)) {
      passwordsellGamesError.style.display = "none";
      passwordsellGames.style.backgroundColor = "#8fff98";
      passwordsellGames.style.color = "#000000";
    } else {
      passwordsellGamesError.style.display = "block";
      passwordsellGames.style.backgroundColor = "#fafad2";
      passwordsellGames.style.color = "#FF0000";
    }
    if (checkLength(repeatPasswordsellGames.value, 3)) {
      repeatPasswordsellGamesError.style.display = "none";
      repeatPasswordsellGames.style.backgroundColor = "#8fff98";
      repeatPasswordsellGames.style.color = "#000000";
    } else {
      repeatPasswordsellGamesError.style.display = "block";
      repeatPasswordsellGames.style.backgroundColor = "#fafad2";
      repeatPasswordsellGames.style.color = "#FF0000";
    }
    if (validateEmail(emailsellGames.value)) {
      emailsellGamesError.style.display = "none";
      emailsellGames.style.backgroundColor = "#8fff98";
      emailsellGames.style.color = "#000000";
    } else {
      emailsellGamesError.style.display = "block";
      emailsellGames.style.backgroundColor = "#fafad2";
      emailsellGames.style.color = "#FF0000";
    }
    if (
      checkLength(usernamesellGames.value, 3) &&
      checkLength(passwordsellGames.value, 3)
    ) {
      sellGamesButton.setAttribute("type", "submit");
      sellGamesButton.innerText = "sellGames";
      sellGamesButton.addEventListener("click", successMessage);
    } else {
      sellGamesButton.innerText = "Form Error";
    }
  }
}

// EVENTLISTENER TO CHECK IF FORM IS SUBMITTED
sellGamesForm.addEventListener("submit", function (event) {
  formSubmitted = true; // Set flag to true on form submit
  validateForm(event);
});

// Add event listeners to each input for typing events
usernamesellGames.addEventListener("input", validateForm);
passwordsellGames.addEventListener("input", validateForm);
repeatPasswordsellGames.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);

// VALIDATE THE LENGTH OF USERNAME & PASSWORD
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// SHOW SUCCESS MESSAGE WHEN FORM IS SUBMITTED
function successMessage() {
  const confirmSuccess = document.querySelector("#sellGamesed");
  confirmSuccess.style.display = "block";
  confirmSuccess.innerHTML = `
    <p class="successful">Thank you! We will send you an email when the game is approved</p>
    <p class="successful">Taking you to games...</p>
  `;
  setTimeout(function () {
    window.location.assign("psn-list.html");
  }, 4000);
}

// VALIDATE EMAILADDRESS PATTERN
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S/; // The \S+ means one or more non-whitespace characters
  const patternMatches = regEx.test(email);
  // console.log(email.value);
  return patternMatches;
}
