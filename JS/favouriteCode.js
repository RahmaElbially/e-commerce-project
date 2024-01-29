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
let userNameFav = document.querySelector(".user-name");

window.addEventListener("load",()=>{
  if(localStorage.getItem("email")){
    userNameFav.textContent = localStorage.getItem("fullName");
  }
});

// Show User Buttons :
let userBtnsFav = document.querySelector(".user-btns");
let userIconFav = document.querySelector(".user-icon");

userIconFav.addEventListener("click", ()=>{
  userBtnsFav.classList.toggle("display-none");
});

// LogOut Button :
let logoutBtnFav = document.querySelector(".log-out");
logoutBtnFav.addEventListener("click", ()=>{
  localStorage.clear();
  location.assign("login.html");
});

// Shopping Cart And Home Page :
let shoppingCartIconFav = document.querySelector("#shoppingCart");
let homePageFav = document.querySelector("#home");
shoppingCartIconFav.addEventListener("click",()=>{
  location.assign("cart.html")
});
homePageFav.addEventListener("click",()=>{
  location.assign("index.html")
});

// Get Favourite Item From Local Storage :
let favouriteItemSection = document.querySelector(".favourite-item-section");
window.onload = function(){
  if(localStorage.getItem("FavItem")){
    let itemInFav = localStorage.getItem("FavItem");
    let itemFav = JSON.parse(itemInFav);
    itemFav.forEach((e) => {
     favouriteItemSection.innerHTML += `
          <div class="favourite-item container py-10">
            <div class="favourite-item-content flex justify-around items-center">
              <div class="favourite-image">
                <img src="${e.image}" alt="" width="150px">
              </div>

              <h2 class="font-extrabold text-xl text-backgroundColor">${e.name}</h2>

              <i class="fas fa-heart text-red-500 text-2xl cursor-pointer"></i>
            </div>
          </div>
     `
    });

    // Delete Favourit Item :
    let favIcon = favouriteItemSection.querySelectorAll(".favourite-item i");
    let favItemContent = document.querySelectorAll(".favourite-item");
    for(let i = 0; i < favIcon.length; i++){
      favIcon[i].addEventListener("click",()=>{
        favItemContent[i].remove();
      })
    }
  }
  else{
    favouriteItemSection.innerHTML = `<p class="text-center mt-16px text-red-500">You haven't choose elements yet! </p>`
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