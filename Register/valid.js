const ShowPassword = document.querySelector("#show-pass");
const PasswordField = document.querySelector("#password");

ShowPassword.addEventListener("click", function() {
    this.classList.toggle("show");
    this.classList.toggle("hide-pass", !this.classList.contains("show"));
    const type = PasswordField.getAttribute("type") === "password" ? "text" : "password";
    PasswordField.setAttribute("type", type);
});

const ShowPassword2 = document.querySelector("#show-passc");
const PasswordField2 = document.querySelector("#confirm");

ShowPassword2.addEventListener("click", function() {
    this.classList.toggle("show");
    this.classList.toggle("hide-pass", !this.classList.contains("show"));
    const type = PasswordField2.getAttribute("type") === "password" ? "text" : "password";
    PasswordField2.setAttribute("type", type);
});

const pass1 = document.getElementById('password');
const pass2 = document.getElementById('confirm');

function validateName() {
    let inputName = document.querySelector("#nama");
    let valueName = inputName.value;
    let errorName = document.querySelector("#error-name");
  
    if (valueName == "") {
      errorName.innerHTML = "Please enter your first name";
      inputName.style.border = "3px solid red";
      return false;
    } else {
      errorName.innerHTML = "";
      return true;
    }
}

function validatePass() {
    let inputPass = document.querySelector("#password");
    let valuePass = inputPass.value;
    let errorPass = document.querySelector("#error-pass");

    const passPattern = 
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#?!@$%^&*-.])[A-Za-z\d#?!@$%^&*-.]{8,100}$/;
  
    if (valuePass == "") {
      errorPass.innerHTML = "Please enter your password";
      inputPass.style.border = "3px solid red";
      return false;
    } else if (!valuePass.match(passPattern)) {
      errorPass.innerHTML = "Password must consist of at least 8 characters, including a capital letter, small letter, number, and symbol";
      inputPass.style.border = "3px solid red";
      return false;
    } else {
      errorPass.innerHTML = "";
      inputPass.style.border = "3px solid #22539F";
      return true;
    }
}

function validatePassC() {
    let inputPassC = document.querySelector("#confirm");
    let valuePassC = inputPassC.value;
    let errorPassC = document.querySelector("#error-passc");
  
    if (valuePassC == "") {
        errorPassC.innerHTML = "Please enter your password confirmation";
        inputPassC.style.border = "3px solid red";
        return false;
    } else if (pass1.value !== pass2.value) {
        errorPassC.innerHTML = "Passwords do not match. Please try again";
        inputPassC.style.border = "3px solid red";
        return false;
    } else {
        errorPassC.innerHTML = "";
        inputPassC.style.border = "3px solid #22539F";
        return true;
    }
}

  
let get_started = document.querySelector("#get_started");
get_started.addEventListener("click", function(e) {
    e.preventDefault();
  
    let isNameValid = validateName();
    let isPassValid = validatePass();
    let isPassCValid = validatePassC();
    let isRadioValid = validateRadio();
  
    if (isNameValid && isPassValid && isPassCValid && isRadioValid) {
        window.location.href = 'UI.html';
    }
});
