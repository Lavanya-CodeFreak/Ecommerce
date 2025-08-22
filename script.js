let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({product, price});
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");

  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  totalElement.textContent = total;
}
