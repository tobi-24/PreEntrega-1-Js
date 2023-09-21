let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cartContainer");


function renderCart() {
    cartContainer.innerHTML = "";
    
    for (let item of cart) {
        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img class="cart-item-img" src=${item.img} alt=${item.name}>
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">$${item.price}</p>
                <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    }
}

function addToCart(product) {
    let existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}


document.getElementById("emptyCartBtn").addEventListener("click", () => {
    cart = [];
    localStorage.removeItem("cart"); 
    renderCart();
});


renderCart();


document.addEventListener("DOMContentLoaded", () => {
    let storedCart = localStorage.getItem("cart");
    if (storedCart) {
        cart = JSON.parse(storedCart);
        renderCart();
    }
});





