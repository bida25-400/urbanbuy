function openModal() {
  document.getElementById("authModal").style.display = "block";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {
  let modal = document.getElementById("authModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function(e) {
    <a href="cart.html" data-name="..." data-price="..."></a>
    let name = this.dataset.name;
    let price = parseFloat(this.dataset.price);

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
    updateCartCount();
  });
});

// OPTIONAL: cart count
function updateCartCount() {
  let count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.length;
  }
}

// load count on page load
updateCartCount();