const form = document.querySelector("form");
eField = form.querySelector(".username"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (eInput.value == "") ? eField.classList.add("shake", "error") : username();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ //remove shake class after 500ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{username();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

  function lrn(){ //checkLRN function
    let pattern = /^[a-z0-9_\@]+$/; //pattern for validate lrn
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid username" : errorTxt.innerText = "Username can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}


const submit = document.getElementById('login')
    submit.onclick = function(){
        const username1 = document.getElementById('username1')
        const pass1 = document.getElementById('pass1')
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username1.value,
                password: pass1.value,
            })
        }).then(function(result){
          return result.json()
        }).then(function(result){
          console.log('result:', result);
          if(result.success && username1.value !== ""){
            window.location.assign("../user/home.html")
          }else if(username1.value == "vnhs@303662" && pass1.value == "Admin@303662"){
            window.location.assign("../admin/admin.html")
          }else{
            Swal.fire({
              title: "Invalid Credentials!",
              text: "Please check your username and password!",
              icon: "error"
            });
          }
        })
    }