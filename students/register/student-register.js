const form = document.querySelector("form"),
  lrnField = form.querySelector(".lrn"),
  lrnInput = lrnField.querySelector(".lrn"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword");

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

// LRN Validation
function lrn() {
    const passPattern =
    "^[0-9]{12}$";
  
    if (!lrnInput.value.match(passPattern)) {
      return lrnField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
    }
    lrnField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
  }

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

// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form submitting
  lrn();
  createPass();
  confirmPass();

  //calling function on key up
  lrnInput.addEventListener("keyup", lrn);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !lrnField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  );
})


const submit = document.getElementById('register')
    submit.onclick = function(){
        const lrn = document.getElementById('lrn')
        const pass2 = document.getElementById('pass2')
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: lrn.value,
                password: pass2.value
            })
        }).then(function(result){
          return result.json()
        }).then(function(result){
          console.log('result:', result);
        })
    }