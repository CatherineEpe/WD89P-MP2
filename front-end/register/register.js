const form = document.querySelector("form"),
  usernameField = form.querySelector(".username"),
  usernameInput = usernameField.querySelector(".username"),
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

// Username Validation
function username() {
    const passPattern =
    /^[a-z0-9_\@]+$/;
  
    if (!usernameInput.value.match(passPattern)) {
      return usernameField.classList.add("invalid"); //adding invalid class if password input value do not match with passPattern
    }
    usernameField.classList.remove("invalid"); //removing invalid class if password input value matched with passPattern
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
  username();
  createPass();
  confirmPass();

  //calling function on key up
  usernameInput.addEventListener("keyup", username);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  if (
    !usernameField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  );
})


const submit = document.getElementById('register')
    submit.onclick = function(){
        const username2 = document.getElementById('username2')
        const pass2 = document.getElementById('pass2')
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username2.value,
                password: pass2.value
            })
        }).then(function(result){
          return result.json()
        }).then(function(result){
          console.log('result:', result);
          if(result.success && username2.value !== "" && password.value !== ""){
            Swal.fire({
              title: "Succesfully Registered!",
              text: "Congratulations!",
              icon: "success"
            });
          }else{
            Swal.fire({
              title: "Registration Unsuccessful!",
              text: "There was a problem in your registration! Please try again!",
              icon: "error"
            });
          }
        })
    }