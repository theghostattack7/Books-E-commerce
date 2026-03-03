const buttonElement = document.querySelectorAll("button");
const cartCount = document.querySelector(".cart-count");

if (localStorage.number) {
  cartCount.innerText = localStorage.number;
} else {
  cartCount.innerText = 0;
}

for (let i = 0; i < buttonElement.length; i++) {
  buttonElement[i].addEventListener("click", clickFunction);
}

function clickFunction(event) {
  //The event line was helped using Copilot//
  event.preventDefault();
  localStorage.number++;
  cartCount.innerText = localStorage.number;
}

const twilightButton = document.getElementById("twilightButton");
const draculaButton = document.getElementById("draculaButton");
const duneButton = document.getElementById("duneButton");
const odysseyButton = document.getElementById("odysseyButton");
const steveJobsButton = document.getElementById("steveJobsButton");
const peopleWeMeetOnVacationButton = document.getElementById(
  "peopleWeMeetOnVacationButton",
);
const hungerGamesButton = document.getElementById("hungerGamesButton");

const lotrButton = document.querySelector(".lordOfTheRingsButton");

if (lotrButton) {
  lotrButton.addEventListener("click", addToCart);
}

function addToCart() {
  localStorage.setItem(
    "cartItem",
    "Lord of the Rings -------------------------------  $14.39",
  );
  localStorage.setItem("price", "14.39");
}

const productsInCart = document.querySelector(".products-in-cart");
const priceTotal = document.querySelector(".price-total");

if (productsInCart) {
  const item = localStorage.getItem("cartItem");

  if (item) {
    productsInCart.innerText = item;
  }
}

if (priceTotal) {
  const cartPrice = localStorage.getItem("price");

  if (cartPrice) {
    priceTotal.innerText = item;
  }
}
