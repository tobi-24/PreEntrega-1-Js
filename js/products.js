let cart = JSON.parse(localStorage.getItem("cart")) || [];

function productLoad (){
    let productDiv = document.getElementById("productContainer");

    fetch('../json/products.json')
        .then(response => response.json())
        .then(data => {
            for (let product of data){
                let container = document.createElement("div");
                container.classList.add("card-container");
                container.innerHTML = `
                <img class="card-img" src=${product.img} alt=${product.name}>
                <div class="card-body">
                    <h3 class="card-title">${product.name}</h3>
                    <p class="card-price">$${product.price}</p>
                    <a href="cart.html"><button class="btn-buy">ADD TO CART</button></a>
                </div> 
                `;
                
                let btnBuy = container.querySelector(".btn-buy");
                btnBuy.addEventListener('click', () => addToCart(product));
            
                productDiv.appendChild(container);
            };
        }) 
}


function addToCart(product) {
    let existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct){
        existingProduct.quantity++;
    } else{
        cart.push({...product, quantity: 1});
    }
    cartSavedInLocalStorage();
}

function cartSavedInLocalStorage(){
    localStorage.setItem("cart", JSON.stringify(cart));
};

document.addEventListener("DOMContentLoaded", function() {
    productLoad()
});
