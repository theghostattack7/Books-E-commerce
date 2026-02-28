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
