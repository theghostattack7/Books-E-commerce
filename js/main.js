const buttonElement = document.querySelector("button");
const cartCount = document.querySelector(".cart-count");

if (localStorage.number) {
  cartCount.innerText = localStorage.number;
} else {
  cartCount.innerText = 0;
}

if (buttonElement) {
  buttonElement.addEventListener("click", clickFunction);
}

function clickFunction() {
  localStorage.number++;
  cartCount.innerText = localStorage.number;
}
