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
let registerBtn = document.querySelector(".registerBtn");
let loginWord = document.querySelector("#login-word");

loginLink.addEventListener("click",function(){
    location.assign("login.html")
})

registerLink.addEventListener("click",function(){
    location.assign("register.html")
})

loginWord.addEventListener("click",function(){
    location.assign("login.html")
})

// Check Validates
let fullName = document.querySelector(".fName");
let registerdEmail = document.querySelector(".regEmail");
let registerPassword = document.querySelector(".regPassword");
let errorName = document.querySelector(".error-name");
let errorEmail = document.querySelector(".error-email");
let errorPassword = document.querySelector(".error-password");

registerBtn.addEventListener("click",function(e){
    if(fullName.value.trim() === ""){
        e.preventDefault();
        errorName.style.display = "block";
        fullName.style.borderBottom = "1px solid red";
    }if(registerdEmail.value.trim() === ""){
        e.preventDefault();
        errorEmail.style.display = "block";
        registerdEmail.style.borderBottom = "1px solid red"
    }if(registerPassword.value.trim() === ""){
        e.preventDefault();
        errorPassword.style.display = "block";
        registerPassword.style.borderBottom = "1px solid red"
    }
    else{
        errorName.style.display = "none";
        errorEmail.style.display = "none";
        errorPassword.style.display = "none";
        fullName.style.borderBottom = "1px solid #D8D3D3";
        registerdEmail.style.borderBottom = "1px solid #D8D3D3";
        registerPassword.style.borderBottom = "1px solid #D8D3D3";

        localStorage.setItem("fullName",fullName.value);
        localStorage.setItem("email",registerdEmail.value);
        localStorage.setItem("password",registerPassword.value);
        setTimeout(function(){
            location.assign("login.html");
        },1000)
    }
})

// Show Password
let closeImage = document.querySelector("#close");

closeImage.addEventListener("click",function(){
    if (registerPassword.type === "password") {
        registerPassword.type = "text";
        closeImage.src = "../Images/open.png";
      } else {
        registerPassword.type = "password";
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



