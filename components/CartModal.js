

export default class CartModal {
  $cartContainer;
  $cartHead;
  $productQuantity;
  $cartList;
  $cartBtn;
  $emptyCartBtn;
  $checkoutBtn;
  $totalPrice;

  constructor() {
    this.$cartContainer = document.createElement("div");
    this.$cartContainer.setAttribute("class", " shopping-cart ");

    this.$cartHead = document.createElement("div");
    this.$cartHead.setAttribute("class", "shopping-cart-head");

    // this.$productQuantity = document.createElement("span");
    // this.$productQuantity.textContent = "0";

    this.$cartHead.innerHTML =
    "<img src='https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png' alt='yourimgtext' width='30' height='30' />";
  this.$cartHead.setAttribute = ("class", "w-4 h-4 hover:scale-110 duration-300 ");

    this.$cartList = document.createElement("ul");
    this.$cartList.setAttribute("class", "shopping-cart-list");

    this.$cartBtn = document.createElement("div");
    this.$cartBtn.setAttribute("class", "cart-buttons");

    this.$emptyCartBtn = document.createElement("a");
    this.$emptyCartBtn.textContent = "Huỷ order";
    this.$emptyCartBtn.setAttribute("class", "button empty-cart-btn ");

    this.$checkoutBtn = document.createElement("a");
    this.$totalPrice = document.createElement("span");
    this.$totalPrice.textContent = "0đ";
    this.$totalPrice.setAttribute("class", "total-price");
    this.$checkoutBtn.textContent =
      "Thanh toán- " + this.$totalPrice.textContent;
    this.$checkoutBtn.setAttribute("class", "button cart-checkout");
  }
  openModal() {
    this.$cartContainer.classList.toggle("hidden");
  }

  render() {
    // this.$cartHead.appendChild(this.$productQuantity);

    this.$cartBtn.appendChild(this.$emptyCartBtn);
    this.$cartBtn.appendChild(this.$checkoutBtn);

    this.$cartContainer.appendChild(this.$cartHead);
    this.$cartContainer.appendChild(this.$cartList);
    this.$cartContainer.appendChild(this.$cartBtn);

    return this.$cartContainer;
  }
}

// const app = document.getElementById("app");
// const cart = new CartModal();

// app.appendChild(cart.render());
// {/* <div class="shopping-cart">
//   <div class="shopping-cart-head">
//     <span class="product-quantity">0</span> Product(s) in Cart
//   </div>
//   <ul class="shopping-cart-list"></ul>
//   <div class="cart-buttons">
//     <a href="#0" class="button empty-cart-btn">
//       Huỷ order
//     </a>
//     <a href="#0" class="button cart-checkout">
//       Thanh toán<span class="total-price">$0</span>
//     </a>
//   </div>
// </div>; */}

var ShoppingCart = function ($) {
  "use strict";

  // Cahce necesarry DOM Elements
  var productsEl = document.querySelector(".product"),
    cartEl = document.querySelector(".shopping-cart-list"),
    productQuantityEl = document.querySelector(".product-quantity"),
    emptyCartEl = document.querySelector(".empty-cart-btn"),
    cartCheckoutEl = document.querySelector(".cart-checkout"),
    totalPriceEl = document.querySelector(".total-price");

  // Fake JSON data array here should be API call
  var products = [
      {
        id: 0,
        name: "iPhone 6S",
        description:
          "Kogi skateboard tattooed, whatever portland fingerstache coloring book mlkshk leggings flannel dreamcatcher.",
        imageUrl: "http://www.icentar.me/phone/6s/images/goldbig.jpg",
        price: 799,
      },
    ],
    productsInCart = [];

  // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
  var generateProductList = function () {
    products.forEach(function (item) {
      var productEl = document.createElement("div");
      productEl.className = "product";
      productEl.innerHTML = `<div class="product-image">
                                <img src="${item.img}" alt="${item.name}">
                             </div>
                             <div class="product-name"><span>Product:</span> ${item.name}</div>
                             <div class="product-price"><span>Price:</span> ${item.price} $</div>
                             <div class="product-add-to-cart">
                               <a href="#0" class="button see-more">More Details</a>
                               <a href="#0" class="button add-to-cart" data-id=${item.name}>Add to Cart</a>
                             </div>
                          </div>
`;

      productsEl.appendChild(productEl);
    });
  };

  // Like one before and I have also used ES6 template strings
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

  // Exposes just init function to public, everything else is private
  return {
    init: init,
  };

  // I have included jQuery although I haven't used it
};
// (jQuery);

// ShoppingCart.init();
