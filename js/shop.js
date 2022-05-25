// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

let seleccionado;

var total = 0;

let priceWithPromoAceite = 10;


let productsCopia = JSON.parse(JSON.stringify(products));
// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  seleccionado = productsCopia.find(product => product.id == id);
  cartList.push(seleccionado);
  generateCart();
  applyPromotionsCart();
  calculateTotal();
  printCart();
}

// Exercise 2
function cleanCart() {
  productsCopia = JSON.parse(JSON.stringify(products));
  cartList = [];
  cart = [];
  total = 0;
  document.querySelector(".listTitle").innerHTML = "Select Something";
  document.querySelector(".list").innerHTML = ``;
  document.querySelector(".clean").style.display = "none";
  document.getElementById("count_product").innerHTML = `0`;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  total = 0;
  for (element of cart) {
    if (element.subtotalWithDiscount == undefined) {
      total += element.subtotal;
    } else {
      total += element.subtotalWithDiscount;
    }
  }
  console.log(total);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  let valor;
  for (seleccionado of cartList) {
    valor = cart.indexOf(seleccionado);
  }
  if (valor == -1) {
    seleccionado.quantity = 1;
    seleccionado.subtotal = seleccionado.price;
    cart.push(seleccionado);
  } else {
    seleccionado.quantity++;
    seleccionado.subtotal += seleccionado.price;
  }
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (seleccionado of cart) {
    if (seleccionado.id == 1 && seleccionado.quantity >= 3) {
      seleccionado.subtotalWithDiscount = priceWithPromoAceite * seleccionado.quantity;
    }
    if (seleccionado.id == 3 && seleccionado.quantity >= 10) {
      seleccionado.subtotalWithDiscount = (2 * seleccionado.subtotal) / 3;
    }
  }
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  seleccionado = productsCopia.find(product => product.id == id);
  let valor = cart.indexOf(seleccionado);
  if (valor == -1) {
    seleccionado.quantity = 1;
    seleccionado.subtotal = seleccionado.price;
    cart.push(seleccionado);
  } else {
    seleccionado.quantity++;
    seleccionado.subtotal += seleccionado.price;
  }
  applyPromotionsCart();
  calculateTotal();
  printCart();
}

// Exercise 8
function removeFromCart(id) {
  let priceWithPromoMezcla;
  for (cartItem of cart) {
    priceWithPromoMezcla = (2 * cartItem.price) / 3;
    if (cartItem.id == id) {
      if (cartItem.quantity > 1) {
        --cartItem.quantity;
        if (cartItem.id == 1 && cartItem.quantity > 2) {
          cartItem.subtotalWithDiscount -= priceWithPromoAceite;
          cartItem.subtotal -= cartItem.price;
          total -= 10;
        } else if (cartItem.id == 1 && cartItem.quantity == 2) {
          cartItem.subtotalWithDiscount -= 9;
          cartItem.subtotal -= cartItem.price;
          total -= 9;
        } else if (cartItem.id == 3 && cartItem.quantity >= 10) {
          cartItem.subtotalWithDiscount -= priceWithPromoMezcla;
          cartItem.subtotal -= cartItem.price;
          total -= priceWithPromoMezcla;
        } else if (cartItem.id == 3 && cartItem.quantity == 9) {
          cartItem.subtotalWithDiscount += 16.67;
          cartItem.subtotal -= cartItem.price;
          total += 11.67;
        } else {
          cartItem.subtotal -= cartItem.price;
          total -= cartItem.price;
        }
        printCart();
      } else {
        let index = cart.indexOf(cartItem);
        cart.splice(index, 1);
        cartItem.subtotal = 0;
        total = total - cartItem.price;
        printCart();
        if (cart.length == 0) {
          cleanCart();
        }
      }
    }
  }
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  document.getElementById("count_product").innerHTML = `${cart.length}`;
  document.querySelector(".clean").style.display = "block";
  document.querySelector(".listTitle").innerHTML = "Shopping Cart";
  document.querySelector(".list").innerHTML = `<table class="table mt-3 me-3">
                                                <thead>
                                                  <tr>
                                                    <th scope="col">Products</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Qty.</th>
                                                    <th scope="col">Total</th>
                                                  </tr>
                                                </thead>
                                                <tbody id="cuerpo">
                                                </tbody>
                                              </table>
                                              <div class="text-center fs-2">Total:€${total.toFixed(2)}</div>`;
  for (cartItem of cart) {
    if (cartItem.subtotalWithDiscount == undefined || !((cartItem.id == 1 && cartItem.quantity >= 3) || (cartItem.id == 3 && cartItem.quantity >= 10))) {
      document.querySelector("tbody").insertAdjacentHTML("beforeend", `<tr>
              <td>${cartItem.name}</td>
              <td>${cartItem.price}</td>
              <td>${cartItem.quantity}</td>
              <td>${cartItem.subtotal}</td>
              <td><a onclick="removeFromCart(${cartItem.id})" class="btn btn-danger pt-0 pb-0" role="button">-</a></td>
            <tr>`)
    } else {
      document.querySelector("tbody").insertAdjacentHTML("beforeend", `<tr>
            <td>${cartItem.name}</td>
            <td>${cartItem.price}</td>
            <td>${cartItem.quantity}</td>
            <td>${cartItem.subtotalWithDiscount.toFixed(2)}</td>
            <td><a onclick="removeFromCart(${cartItem.id})" class="buttonDelete btn btn-danger pt-0 pb-0" role="button">-</a></td>
          <tr>`)
    }
  }
}

function open_modal() {
  console.log("Open Modal");
}
