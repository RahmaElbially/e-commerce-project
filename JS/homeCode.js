window.addEventListener("load", ()=>{
  if(window.localStorage.getItem("color")){
      var root = document.documentElement;
      root.style.setProperty('--background-color', window.localStorage.getItem("color"));
      root.style.setProperty('--links-color', "#FFF");
      root.style.setProperty('--black-color', "#FFF");
      root.style.setProperty('--black-color-opacity', "#FFF");
  }
  if(window.localStorage.getItem("color") === "#B1D9DB"){
    var root = document.documentElement;
    root.style.setProperty('--links-color', "rgba(30, 30, 30, 0.5)");
    root.style.setProperty('--black-color', "#1E1E1E");
    root.style.setProperty('--black-color-opacity', "rgba(30, 30, 30, 0.75)");
  };
});

// Login And Register Buttons :
let loginBtn = document.querySelector("#loginBtn");
let registerBtn = document.querySelector("#registerBtn");
loginBtn.onclick = function(){
  location.assign("login.html");
};
registerBtn.onclick = function(){
  location.assign("register.html");
};

// User Name : 
let loginRegisterBtn = document.querySelector(".btns");
let userNameIcon = document.querySelector(".user");
let userName = document.querySelector(".user-name");

window.addEventListener("load",()=>{
  if(localStorage.getItem("email")){
    loginRegisterBtn.style.display = "none";
    userNameIcon.style.display = "flex";
    userName.textContent = localStorage.getItem("fullName");
  }
});

// Show User Buttons :
let userBtns = document.querySelector(".user-btns");
let userIcon = document.querySelector(".user-icon");

userIcon.addEventListener("click", ()=>{
  userBtns.classList.toggle("display-none");
});

// LogOut Button :
let logoutBtn = document.querySelector(".log-out");
logoutBtn.addEventListener("click", ()=>{
  localStorage.clear();
  location.assign("login.html");
});

// Shopping Cart And Favourite Icon :
let shoppingCartIcon = document.querySelector("#shoppingCart");
let favouriteIcon = document.querySelector("#favourite");
shoppingCartIcon.addEventListener("click",()=>{
  location.assign("cart.html")
});
favouriteIcon.addEventListener("click",()=>{
  location.assign("favourite.html")
});


// Products Slider :
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 110}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");
let curSlide = 0;
let maxSlide = slides.length - 1;
nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
//   move slide by -110%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${110 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  //   move slide by 110%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${110 * (indx - curSlide)}%)`;
  });
});

// Click Favourite On Best Selling :
let favItems = localStorage.getItem("FavItem")? JSON.parse(localStorage.getItem("FavItem")):[];
let heartIcon = document.querySelectorAll(".best-selling .heart");
heartIcon.forEach(function(item){
  item.addEventListener("click", ()=>{
    if(localStorage.getItem("email")){
      item.style.color = "red";
      const slide = item.closest(".slide");
      const favImage = slide.querySelector("img").src;
      const favName = slide.querySelector("h3").textContent;
      const favourite = {
        image: favImage,
        name: favName
      };
      favItems = [...favItems,favourite];
      const favItem = localStorage.setItem("FavItem",JSON.stringify(favItems));
    }else{
      setTimeout(()=>{
        location.assign("login.html");
      },500);
    };
  });
});

// Click Shopping Cart On Best Selling :
let cartItems = localStorage.getItem("CartItem")? JSON.parse(localStorage.getItem("CartItem")):[];
let cartIcon = document.querySelectorAll(".best-selling .cart");
let cartNumbers = document.querySelector(".number");
cartIcon.forEach(function(item){
  item.addEventListener("click", ()=>{
    if(localStorage.getItem("email")){
      item.style.color = "yellow";
      cartNumbers.textContent = cartItems.length+1;
      const slide = item.closest(".slide");
      const cartImage = slide.querySelector("img").src;
      const cartName = slide.querySelector("h3").textContent;
      const cartPrice = slide.querySelector("p").getAttribute("price");
      const cart = {
        imageProduct: cartImage,
        nameProduct: cartName,
        priceProduct: cartPrice
      };
      cartItems = [...cartItems,cart];
      const cartItem = localStorage.setItem("CartItem",JSON.stringify(cartItems));
    }else{
      setTimeout(()=>{
        location.assign("login.html");
      },500);
    };
  });
});


// Feed Back Slider:
let slider = document.querySelector('.feed-back-content');
let items = document.querySelectorAll('.feed-back-item');
let dots = document.querySelectorAll('.feed-back-heading .dots li');

let lengthItems = items.length - 1;
let active = 0;
function reloadSlider(){
    slider.style.left = -(items[active].offsetLeft)*0.65 + 'px';
    console.log(-items[active].offsetLeft + 'px')
    let last_active_dot = document.querySelector('.feed-back-heading .dots li.activeDot');
    last_active_dot.classList.remove('activeDot');
    dots[active].classList.add('activeDot');
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

// Aside position
let aside = document.querySelector("aside");
let arrowIcon = document.querySelector(".arrow");

arrowIcon.addEventListener("click",()=>{
    aside.classList.toggle("left");
})

// Change Colors
let colors = document.querySelectorAll(".colors .color");

for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click",function(){
        window.localStorage.setItem("color",colors[i].getAttribute("value")); 
        var root = document.documentElement;
        root.style.setProperty('--background-color', colors[i].getAttribute("value"));
        root.style.setProperty('--links-color', colors[i].style.color = "#FFF");
        root.style.setProperty('--black-color', colors[i].style.color = "#FFF");
        root.style.setProperty('--black-color-opacity', colors[i].style.color = "#FFF");
        if(window.localStorage.getItem("color") === "#B1D9DB"){
          var root = document.documentElement;
          root.style.setProperty('--links-color', colors[i].style.color = "rgba(30, 30, 30, 0.5)");
          root.style.setProperty('--black-color', colors[i].style.color = "#1E1E1E");
          root.style.setProperty('--black-color-opacity', colors[i].style.color = "rgba(30, 30, 30, 0.75)");
      };
    })
}

// Button Scroll
let scrollBtn = document.querySelector(".scroll");
window.onscroll = function() {
  if (window.scrollY >= 300){
    scrollBtn.style.display = "block";
  }else{
    scrollBtn.style.display = "none";
  }
}

scrollBtn.onclick = function() {
  window.scrollTo({
    top: 0 ,
    behavior: "smooth"
  });
}

// Media

// Show Hidden Div :
let bars = document.querySelector(".bar");
let hiddenDiv = document.querySelector(".hidden-div");

bars.addEventListener("click",function (){
  hiddenDiv.classList.toggle("display-none");
})

// Location To Pages By Icons :
let shoppingCartHidden = document.querySelector("#shoppingCartHidden");
let favouritetHidden = document.querySelector("#favouriteHidden");

shoppingCartHidden.addEventListener("click", ()=>{
  location.assign("cart.html");
})
favouritetHidden.addEventListener("click", ()=>{
  location.assign("favourite.html");
})

// Location To Register and Login Pages :
let loginBtnHidden = document.getElementById("loginHidden");
let registerBtnHidden = document.getElementById("registerHidden");

loginBtnHidden.onclick = function (){
  location.assign("login.html");
}
registerBtnHidden.onclick = function (){
  location.assign("register.html");
}

// If User In Local Storage : 
let btnsHidden = document.getElementById("btnsHidden");
let userDataHidden = document.getElementById("userDataHidden");
let userBtnsHidden = document.getElementById("userBtnsHidden");
let userNameHidden = document.querySelector(".user-name-hidden");

if(localStorage.getItem("email")){
  btnsHidden.style.display = "none";
  userDataHidden.style.display = "flex";
  userBtnsHidden.style.display = "flex";
  userNameHidden.textContent = localStorage.getItem("fullName");
}

// LogOut : 
let logOutHidden = document.getElementById("LogOut");
logOutHidden.addEventListener("click", ()=>{
    localStorage.clear();
    location.assign("login.html");
})
