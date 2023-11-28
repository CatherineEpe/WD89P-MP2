let eNumber1 = document.getElementById("eNumber1");
const password1 = document.getElementById("password1");
const myForm = document.querySelector("myForm");
const name1 = document.getElementById("name1");
const eNumber2 = document.getElementById("eNumber2");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");
const myForm2 = document.querySelector("myForm2");

function validateInput(){
        //Employee Number 1
        if(eNumber1.value.trim()===""){
            onError(eNumber1, "Employee Number cannot be empty");
        }else{
            onSuccess(eNumber1);
        }

        //password1
        if(password1.value.trim()===""){
            onError(password1, "Password cannot be empty");
        }else{
            onSuccess(password1);
        }
        //name1
        if(name1.value.trim()===""){
            onError(name1, "Password cannot be empty");
        }else{
            onSuccess(name1);
        }

        //Employee Number 2
        if(eNumber2.value.trim()===""){
            onError(eNumber2, "Password cannot be empty");
        }else{
            onSuccess(eNumber2);
        }

        //password2
        if(password2.value.trim()===""){
            onError(password2, "Password cannot be empty");
        }else{
            onSuccess(password2);
        }

        //password3
        if(password3.value.trim()===""){
            onError(password3, "Password cannot be empty");
        }else{
            if(password2.value.trim()!== password3.value.trim()){
                onError(password3, "Password don't match")
            }else
            onSuccess(password3);
        }
}

document.querySelector("#button1")
    .addEventListener("click",(event)=>{
        event.preventDefault();
        validateInput();
    });

document.querySelector("#button2")
    .addEventListener("click",(event)=>{
        event.preventDefault();
        validateInput();
    });

    function onSuccess(input){
        let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="hidden";
        messageEle.innerText="Employee Number cannot be empty";
        parent.classList.remove("error");
        parent.classList.add("success");
    }

    function onError(input,message){
        let parent=input.parentElement;
        let messageEle=parent.querySelector("small");
        messageEle.style.visibility="visible";
        messageEle.innerText= message;
        parent.classList.add("error");
        parent.classList.remove("success");
    }