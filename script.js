import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomePage from "./components/HomePage.js";
import Room from "./components/Room.js";
import { guestroom, diningroom, bedroom, products } from "./components/ProductApi.js";
import CartModal from './components/CartModal.js'


class Main {
    $container;
    $header;
    $itemsContainer;
    $footer;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.setAttribute('class', "w-{1024px} flex flex-col justify-center items-center m-auto mb-15 mx-auto")

        this.$header = new Header();
        this.$header.$logoEl.addEventListener("click", this.onHomeClick);
        this.$header.$productModal.$guestroom.addEventListener("click", this.onGuestroomClick);
        this.$header.$productModal.$diningroom.addEventListener("click", this.onDiningroomClick);
        this.$header.$productModal.$bedroom.addEventListener("click", this.onBedroomClick);

        this.$itemsContainer = document.createElement("div");

        this.$footer = new Footer();
    }

    onHomeClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        this.$itemsContainer.setAttribute("class", "");
        let html = new HomePage();
        this.$itemsContainer.appendChild(html.render());
    }

    onGuestroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        guestroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$itemsContainer.appendChild(html.render());
        })
        this.$itemsContainer.setAttribute("class", "w-{1024px} flex flex-wrap m-auto grid grid-cols-4");
    }

    onDiningroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        diningroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$itemsContainer.appendChild(html.render());
        })
        this.$itemsContainer.setAttribute("class", "w-{1024px} flex flex-wrap m-auto grid grid-cols-4");
    }

    onBedroomClick = (e) => {
        e.preventDefault();
        this.$itemsContainer.innerHTML = "";
        bedroom.forEach((item) => {
            let html = new Room(item.img, item.name, item.price);
            this.$itemsContainer.appendChild(html.render());
        })
        this.$itemsContainer.setAttribute("class", "w-{1024px} flex flex-wrap m-auto grid grid-cols-4");
    }

    render() {
        const homePage = new HomePage();

        this.$itemsContainer.appendChild(homePage.render());

        this.$container.appendChild(this.$header.render());
        this.$container.appendChild(this.$itemsContainer);
        this.$container.appendChild(this.$footer.render());

        return this.$container
    }
}


const app = document.getElementById("root");

const main = new Main();

const cartmd =new CartModal()

app.appendChild(main.render());
app.appendChild(cartmd.render())

var ShoppingCart = function ($) {
    "use strict";
  
    // Cahce necesarry DOM Elements
    var productsEl = document.querySelector(".product"),
      cartEl = document.querySelector(".shopping-cart-list"),
      productQuantityEl = document.querySelector(".product-quantity"),
      emptyCartEl = document.querySelector(".empty-cart-btn"),
      cartCheckoutEl = document.querySelector(".cart-checkout"),
      totalPriceEl = document.querySelector(".total-price");
  
    var generateCartList = function () {
      cartEl.innerHTML = "";
  
      productsInCart.forEach(function (item) {
        var li = document.createElement("li");
        li.innerHTML = `${item.quantity} ${item.product.name} - $${
          item.product.price * item.quantity
        }`;
        cartEl.appendChild(li);
      });
  
      productQuantityEl.innerHTML = productsInCart.length;
  
      generateCartButtons();
    };
  
    // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
    var generateCartButtons = function () {
      if (productsInCart.length > 0) {
        emptyCartEl.style.display = "block";
        cartCheckoutEl.style.display = "block";
        totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
      } else {
        emptyCartEl.style.display = "none";
        cartCheckoutEl.style.display = "none";
      }
    };
  
    // Setting up listeners for click event on all products and Empty Cart button as well
    var setupListeners = function () {
      productsEl.addEventListener("click", function (event) {
        var el = event.target;
        if (el.classList.contains("add-to-cart")) {
          var elId = el.dataset.id;
          addToCart(elId);
        }
      });
  
      emptyCartEl.addEventListener("click", function (event) {
        if (confirm("Bạn có chắc chắn muốn làm trống giỏ hàng?")) {
          productsInCart = [];
        }
        generateCartList();
      });
    };
  
    // Adds new items or updates existing one in productsInCart array
    var addToCart = function (name) {
      var obj = products[name];
      if (productsInCart.length === 0 || productFound(obj.name) === undefined) {
        productsInCart.push({ product: obj, quantity: 1 });
      } else {
        productsInCart.forEach(function (item) {
          if (item.product.name === obj.name) {
            item.quantity++;
          }
        });
      }
      generateCartList();
    };
  
    // This function checks if project is already in productsInCart array
    var productFound = function (productName) {
      return productsInCart.find(function (item) {
        return item.product.name === productName;
      });
    };
  
    var calculateTotalPrice = function () {
      return productsInCart.reduce(function (total, item) {
        return total + item.product.price * item.quantity;
      }, 0);
    };
  
    // This functon starts the whole application
    var init = function () {
      generateProductList();
      setupListeners();
    };
}