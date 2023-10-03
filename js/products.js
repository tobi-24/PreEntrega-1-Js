let cart = JSON.parse(localStorage.getItem("cart")) || [];

function productLoad (){
    
    let productDiv = document.getElementById("productContainer");

    fetch("./js/products.json")
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
                    <button class="btn-buy">ADD TO CART</button>
                </div> 
                `;
                
                let btnBuy = container.querySelector(".btn-buy");
                btnBuy.addEventListener('click', () => addToCart(product));
                productDiv.appendChild(container);
            };
        }) 
}


function addToCart(product) {
    Toastify({
        text: "Your product has been added.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #bee9e8, #1B4965)",
        },
        onClick: function(){}
      }).showToast();
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
