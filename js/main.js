const buttonElement = document.querySelectorAll("button");
const cartCount = document.querySelector(".cart-count");

if (localStorage.number) {
  cartCount.innerText = localStorage.number;
} else {
  cartCount.innerText = 0;
}

for (let i = 0; i < buttonElement; i++) {
  buttonElement[i].addEventListener("click", clickFunction);
}

function clickFunction() {
  localStorage.number++;
  cartCount.innerText = localStorage.number;
}
