const form = document.querySelector("form"),
  userNameField = form.querySelector(".userName"),
  userNameInput = form.querySelector(".user"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");




// Username Validation
function userName() {
  const passPattern =
  "^([0-9]*[a-zA-Z]){3,}[0-9]*$";

  if (!userNameInput.value.match(passPattern)) {
    return userNameField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  userNameField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); //getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
  }
  passField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
}

// Confirm Password Validtion
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

 // Calling Funtion on Form Submit
 form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  userName();
  createPass();
  confirmPass();
  
  //calling function on key up
  userNameInput.addEventListener("keyup", userName);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);
  if (
    !userNameField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  );
})

const submit = document.getElementById('register2')
    submit.onclick = function(){
        const userName = document.getElementById('userName')
        const pass2 = document.getElementById('pass2')
        fetch('http://localhost:3000/register2', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userName.value,
                password: pass2.value,
            })
        })
    }
