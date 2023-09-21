let products = [
    {name: "Iphone 8", id: "iphone8", price: 40000, img: "../img/iphone-8-apple.jpg" , "categorie" : {name: "Phones", id: "phones"}},
    {name: "Iphone 13", id: "iphone13", price: 200000, img: "../img/iphone13-apple.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Iphone 14", id: "iphone14", price: 900000, img: "../img/iphone14-apple.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Iphone X", id: "iphoneX", price: 160000, img: "../img/iphone-X-apple.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Redmi A1", id: "redmiA1", price: 90000, img: "../img/redmi-a1.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Samsung A235", id: "samsungA235", price: 70000, img: "../img/samsung-a235.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Samsung S23", id: "samsungS23", price: 450000, img: "../img/samsung-s23.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Samsung Z-flip 3", id: "samsungZflip3", price: 800000, img: "../img/samsung-z-flip3.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Samsung Z-fold 4", id: "samsungZfold4", price: 850000, img: "../img/samsung-z-fold4.jpg","categorie" : {name: "Phones", id: "phones"}},
    {name: "Xiaommi Redmi Note 11", id: "xiaomiRedmiNote11", price: 60000, img: "../img/xiaomi-redmi-note-11.png","categorie" : {name: "Phones", id: "phones"}},
    {name: "Apple Watch 8", id: "appleWatch8", price: 190000, img: "../img/apple-watch-8.jpeg","categorie" : {name: "Watch", id: "watch"}},
    {name: "Apple Watch SE", id: "appleWatchSE", price: 290000, img: "../img/apple-watch-se.jpg","categorie" : {name: "Watch", id: "watch"}},
    {name: "Samsung Watch 5", id: "samsungWatch5", price: 100000, img: "../img/samsung-watch-5.jpeg","categorie" : {name: "Watch", id: "watch"}}
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

let productDiv = document.getElementById("productContainer");

for (let product of products){
    let container = document.createElement("div");
    container.classList.add("card-container");
    container.innerHTML = `
    <img class="card-img" src=${product.img} alt=${product.name}>
    <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-price">$${product.price}</p>
        <a href="../cart.html" class="btn-buy">ADD TO CART</a>
    </div>
    `;
    
    let btnBuy = container.querySelector(".btn-buy");
    btnBuy.addEventListener('click', () => addToCart(product))

    productDiv.appendChild(container);
}

function addToCart(product){
    let existingProduct = cart.find(item => item.id === product.id);
    if(existingProduct){
        existingProduct.quantity++;
    }
    else{
        cart.push({...product,quantity:1});
    }
}
