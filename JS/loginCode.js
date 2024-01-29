window.addEventListener("load", ()=>{
    if(window.localStorage.getItem("color")){
        var root = document.documentElement;
        root.style.setProperty('--bg-color', window.localStorage.getItem("color"));
        root.style.setProperty('--button-color', window.localStorage.getItem("color"));
        root.style.setProperty('--login-color', window.localStorage.getItem("color"));
    }
})

// Location Changes
let loginLink = document.querySelector("#login-link");
let registerLink = document.querySelector("#register-link");
let loginBtn = document.querySelector(".loginBtn");
let registerWord = document.querySelector("#register-word");

loginLink.addEventListener("click",function(){
    location.assign("login.html")
})

registerLink.addEventListener("click",function(){
    location.assign("register.html")
})

registerWord.addEventListener("click",function(){
    location.assign("register.html")
})

// Check Validates
let loginEmail = document.querySelector(".loginEmail");
let loginPassword = document.querySelector(".loginPassword");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");

loginBtn.addEventListener("click",function(e){

    if(loginEmail.value.trim() === ""){
        e.preventDefault();
        errorEmail.style.display = "block";
        loginEmail.style.borderBottom = "1px solid red";
    }else if(loginEmail.value.trim() !== "" && localStorage.getItem("email").trim() !== loginEmail.value.trim()){
        errorEmail.textContent = "Your Email Is Wrong !";
        loginEmail.style.borderBottom = "1px solid red";
    }
    // else if(loginEmail.value.trim() !== "" ){
    //     errorEmail.style.display = "none";
    //     loginEmail.style.borderBottom = "1px solid #D8D3D3";
    // }

    if(loginPassword.value.trim() === ""){
        e.preventDefault();
        errorPassword.style.display = "block";
        loginPassword.style.borderBottom = "1px solid red";
    }else if(loginPassword.value.trim() !== "" && localStorage.getItem("password").trim() !== loginPassword.value.trim()){
        errorPassword.textContent = "Your Password Is Wrong !";
        loginPassword.style.borderBottom = "1px solid red";
    }else{
        if(localStorage.getItem("email").trim() === loginEmail.value.trim() 
        && localStorage.getItem("password").trim() === loginPassword.value.trim()){
            errorEmail.style.display = "none";
            errorPassword.style.display = "none";
            loginEmail.style.borderBottom = "1px solid #D8D3D3";
            loginPassword.style.borderBottom = "1px solid #D8D3D3";
            setTimeout(function(){
                location.assign("index.html");
            },1000)
        }
    }
})

// Show Password
let closeImage = document.querySelector("#close");

closeImage.addEventListener("click",function(){
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        closeImage.src = "../Images/open.png";
      } else {
        loginPassword.type = "password";
        closeImage.src = "../Images/close.png"; 
      }
})

// Change Colors
let colors = document.querySelectorAll(".colors .color");

for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click",function(){
        window.localStorage.setItem("color",colors[i].getAttribute("value")); 
        var root = document.documentElement;
        root.style.setProperty('--bg-color', colors[i].getAttribute("value"));
        root.style.setProperty('--button-color', colors[i].getAttribute("value"));
        root.style.setProperty('--login-color', colors[i].getAttribute("value"));
    })
}

// Aside position
let aside = document.querySelector("aside");
let arrowIcon = document.querySelector(".arrow");

arrowIcon.addEventListener("click",()=>{
    aside.classList.toggle("left");
})