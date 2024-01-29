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

// User Name : 
let userNameCart = document.querySelector(".user-name");

window.addEventListener("load",()=>{
  if(localStorage.getItem("email")){
    userNameCart.textContent = localStorage.getItem("fullName");
  }
});

// Show User Buttons :
let userBtnsCart = document.querySelector(".user-btns");
let userIconCart = document.querySelector(".user-icon");

userIconCart.addEventListener("click", ()=>{
  userBtnsCart.classList.toggle("display-none");
});

// LogOut Button :
let logoutBtnCart = document.querySelector(".log-out");
logoutBtnCart.addEventListener("click", ()=>{
  localStorage.clear();
  location.assign("login.html");
});

// Favourite And Home Page :
let favouriteIconCart = document.querySelector("#favourite");
let homePageCart = document.querySelector("#home");
favouriteIconCart.addEventListener("click",()=>{
  location.assign("favourite.html")
});
homePageCart.addEventListener("click",()=>{
  location.assign("index.html")
});

// Get Cart Item From Local Storage :
let cartItemSection = document.querySelector(".cart-item-section");
let priceDiv = document.querySelector(".price");
let showPrice = document.querySelector(".show-price");
let totalPriceDiv = document.querySelector(".total-price");
let totalPrice = 0;

window.onload = function(){
  if(localStorage.getItem("CartItem")){
    priceDiv.style.display="flex";
    let itemInCart = localStorage.getItem("CartItem");
    let itemCart = JSON.parse(itemInCart);
    itemCart.forEach((e) => {
        cartItemSection.innerHTML += `
          <div class="cart-item container py-10">
            <div class="cart-item-content flex justify-around items-center">
              <div class="cart-image">
                <img src="${e.imageProduct}" alt="" width="150px">
              </div>

              <h2 class="font-extrabold text-xl text-backgroundColor">${e.nameProduct}</h2>

              <p class="font-medium text-linksColor text-lg" price="${e.priceProduct}"> ${e.priceProduct}</p>

              <i class="fas fa-trash-alt text-red-500 text-2xl cursor-pointer"></i>
            </div>
          </div>
     `
        totalPrice+= +(e.priceProduct);
       
        showPrice.addEventListener("click", ()=>{
            totalPriceDiv.textContent = totalPrice;
        }) 
    });
          // Delete Cart Item :
          let trashIcon = cartItemSection.querySelectorAll(".cart-item i");
          console.log(trashIcon)
          let cartItemContent = document.querySelectorAll(".cart-item");
          for(let i = 0; i < trashIcon.length; i++){
              trashIcon[i].addEventListener("click",()=>{
                  cartItemContent[i].remove();
                  if(trashIcon.length == 0){
                      priceDiv.style.display = "none";
                  }
            })
          } 
    
  }
  else{
    cartItemSection.innerHTML = `<p class="text-center mt-16px text-red-500">You haven't choose elements yet! </p>`
  }
}

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
};

// Aside position
let aside = document.querySelector("aside");
let arrowIcon = document.querySelector(".arrow");

arrowIcon.addEventListener("click",()=>{
    aside.classList.toggle("left");
});