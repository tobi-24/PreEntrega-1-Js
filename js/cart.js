let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btnClear = document.getElementById ("deleteCart");
let total = document.getElementById ("totalInCart");
let btnBuy = document.getElementById ("buyBtn");

let divCart = document.getElementById ("cartContainer");

function showCart (cart){
   
    divCart.innerHTML = "";

    if (cart.length === 0){
        let bodyCart = document.createElement("div");
        bodyCart.classList.add("body-cart");
        bodyCart.innerHTML = `<p class="text-action">Your cart is empty</p>`;
        divCart.appendChild(bodyCart);
    }
    else{
        cart.forEach(product => {
            let bodyDiv = document.createElement("div");  
            bodyDiv.classList.add("body-div");
        
            bodyDiv.innerHTML = `
            <div class="product-cart">
                <img class="cart-img" src=${product.img} alt=${product.name}>
                <p class="product-quantity">Quantity ${product.quantity}</p>
                <h3 class="prodcut-title">${product.name}</h3>    
                <p class="product-price">$${product.price}</p>
                <button class="trash-button" data-product-id="${product.id}">
                    <img class="trash-ico" src="../img/trash-fill.svg" alt="Trash Icon">
                </button>
            </div>
            `;

            let trashButton = bodyDiv.querySelector(".trash-button");
            trashButton.addEventListener("click", () => {
            const productId = trashButton.getAttribute("data-product-id");
            const productToRemove = cart.find(product => product.id === productId);
            if (productToRemove) {
                removeProductFromCart(productToRemove);
            }
        });

            divCart.appendChild(bodyDiv);
        });
    }
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    total.textContent = `Total: $${totalPrice}`;
}


function removeProductFromCart(productToRemove) {

    cart = cart.filter(product => product.id !== productToRemove.id);

    cartSavedInLocalStorage();

    showCart(cart); 
}
function cartSavedInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

btnClear.addEventListener('click', () =>{
    cart = [];
    cartSavedInLocalStorage();
    showCart(cart);
})

showCart(cart);

btnBuy.addEventListener ('click', ()=>{
    cart = [];
    cartSavedInLocalStorage();
    showCart(cart)
    divCart.innerHTML = `<p class="text-action">Thanks for your purchase!!</p>`;
})