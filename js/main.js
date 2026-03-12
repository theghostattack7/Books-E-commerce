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
    cart = []; /*empty brackets was taken from google ai*/
  }
  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

const lotrButton = document.querySelector(".lordOfTheRingsButton");
if (lotrButton) {
  lotrButton.addEventListener("click", function (event) {
    event.preventDefault(); /* Adapted from https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault*/
    addToCart({ name: "Lord of the Rings", price: 14.39 });
  });
}

const twilightButton = document.getElementById("twilightButton");
if (twilightButton) {
  twilightButton.addEventListener("click", function (event) {
    event.preventDefault();
    addToCart({ name: "Twilight", price: 10.49 });
  });
}

const draculaButton = document.getElementById("draculaButton");
if (draculaButton) {
  draculaButton.addEventListener("click", function (event) {
    event.preventDefault();
    addToCart({ name: "Dracula", price: 12.69 });
  });
}

const duneButton = document.getElementById("duneButton");
if (duneButton) {
  duneButton.addEventListener("click", function (event) {
    event.preventDefault();
    addToCart({ name: "Dune", price: 12.25 });
  });
}

const odysseyButton = document.getElementById("odysseyButton");
if (odysseyButton) {
  odysseyButton.addEventListener("click", function (event) {
    event.preventDefault();
    addToCart({ name: "The Odyssey", price: 15.29 });
  });
}
const steveJobsButton = document.getElementById("steveJobsButton");
if (steveJobsButton) {
  steveJobsButton.addEventListener("click", function (event) {
    event.preventDefault();
    addToCart({ name: "Steve Jobs", price: 18.99 });
  });
}

const peopleWeMeetOnVacationButton = document.getElementById(
  "peopleWeMeetOnVacationButton",
);
if (peopleWeMeetOnVacationButton) {
  peopleWeMeetOnVacationButton.addEventListener("click", function (event) {
    event.preventDefault();
    addToCart({ name: "People We Meet on Vacation", price: 11.24 });
  });
}
const hungerGamesButton = document.getElementById("hungerGamesButton");
if (hungerGamesButton) {
  hungerGamesButton.addEventListener("click", function (event) {
    event.preventDefault();
    addToCart({ name: "Hunger Games", price: 14.39 });
  });
}

if (productsInCart && priceTotal) {
  /*helped fix some bugs with Chatgpt and Copilot*/
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart || cart.length === 0) {
    productsInCart.innerText = "No products yet";
    priceTotal.innerText = "$0.00";
  } else {
    productsInCart.innerHTML = "";

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      const row = document.createElement("div");
      row.classList.add("cart-row");

      const p = document.createElement("p");
      p.classList.add("cart-item");
      p.innerText = item.name + " -$" + item.price;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("cart-button");
      deleteButton.innerText = "Delete Item";

      deleteButton.addEventListener("click", function () {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cart));

        row.remove();
        priceTotal.innerText =
          "$" +
          cart
            .reduce(function (sum, x) {
              return sum + x.price;
            }, 0)
            .toFixed(2);
      });

      row.appendChild(p);
      row.appendChild(deleteButton);

      productsInCart.appendChild(row);

      total = total + item.price;
    }

    priceTotal.innerText = "$" + total.toFixed(2);
  }
}
