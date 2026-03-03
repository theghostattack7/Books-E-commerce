const cartCount = document.querySelector(".cart-count");
const productsInCart = document.querySelector(".products-in-cart");
const priceTotal = document.querySelector(".price-total");

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [];
  }
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.innerText = cart.length;
}

document
  .querySelector(".lordOfTheRingsButton")
  .addEventListener("click", function () {
    addToCart({ name: "Lord of the Rings", price: 14.39 });
  });

  const twilightButton = document.getElementById("twilightButton");
if(twilightButton){
  twilightButton.addEventListener("click", function () {
    addToCart({ name: "Twilight", price: 10.49 });
}
}

document.getElementById("draculaButton").addEventListener("click", function () {
  addToCart({ name: "Dracula", price: 12.69 });
});

document.getElementById("duneButton").addEventListener("click", function () {
  addToCart({ name: "Dune", price: 12.25 });
});

document.getElementById("odysseyButton").addEventListener("click", function () {
  addToCart({ name: "The Odyssey", price: 15.29 });
});

document
  .getElementById("steveJobsButton")
  .addEventListener("click", function () {
    addToCart({ name: "Steve Jobs", price: 18.99 });
  });
document
  .getElementById("peopleWeMeetOnVacationButton")
  .addEventListener("click", function () {
    addToCart({ name: "People We Meet on Vacation", price: 11.24 });
  });
document
  .getElementById("hungerGamesButton")
  .addEventListener("click", function () {
    addToCart({ name: "Hunger Games", price: 14.39 });
  });

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
      p.innerText = item.name + " -$" + item.price;
      productsInCart.appendChild(p);

      total = total + item.price;
    }

    priceTotal.innerText = "$" + total;
  }
}
