const cartCount = document.querySelector(".cart-count");
if (cartCount) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.innerText = cart.length;
}
const productsInCart = document.querySelector(".products-in-cart");
const priceTotal = document.querySelector(".price-total");

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [];
  }
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

const lotrButton = document.querySelector(".lordOfTheRingsButton");
if (lotrButton) {
  lotrButton.addEventListener("click", function () {
    addToCart({ name: "Lord of the Rings", price: 14.39 });
  });
}

const twilightButton = document.getElementById("twilightButton");
if (twilightButton) {
  twilightButton.addEventListener("click", function () {
    addToCart({ name: "Twilight", price: 10.49 });
  });
}

const draculaButton = document.getElementById("draculaButton");
if (draculaButton) {
  draculaButton.addEventListener("click", function () {
    addToCart({ name: "Dracula", price: 12.69 });
  });
}

const duneButton = document.getElementById("duneButton");
if (duneButton) {
  duneButton.addEventListener("click", function () {
    addToCart({ name: "Dune", price: 12.25 });
  });
}

const odysseyButton = document.getElementById("odysseyButton");
if (odysseyButton) {
  odysseyButton.addEventListener("click", function () {
    addToCart({ name: "The Odyssey", price: 15.29 });
  });
}
const steveJobsButton = document.getElementById("steveJobsButton");
if (steveJobsButton) {
  steveJobsButton.addEventListener("click", function () {
    addToCart({ name: "Steve Jobs", price: 18.99 });
  });
}

const peopleWeMeetOnVacationButton = document.getElementById(
  "peopleWeMeetOnVacationButton",
);
if (peopleWeMeetOnVacationButton) {
  peopleWeMeetOnVacationButton.addEventListener("click", function () {
    addToCart({ name: "People We Meet on Vacation", price: 11.24 });
  });
}
const hungerGamesButton = document.getElementById("hungerGamesButton");
if (hungerGamesButton) {
  hungerGamesButton.addEventListener("click", function () {
    addToCart({ name: "Hunger Games", price: 14.39 });
  });
}

if (productsInCart && priceTotal) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart || cart.length === 0) {
    productsInCart.innerText = "No products yet";
    priceTotal.innerText = "$0.00";
  } else {
    productsInCart.innerHTML = "";

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      const p = document.createElement("p");
      p.classList.add("cart-item");
      p.innerText = item.name + " -$" + item.price;
      productsInCart.appendChild(p);

      total = total + item.price;
    }

    priceTotal.innerText = "$" + total.toFixed(2);
  }
}
