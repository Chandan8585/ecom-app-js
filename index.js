import { products } from "./assets/db/product.js";


const productContainer = document.getElementById("products");

// let cart = JSON.parse(localStorage.getItem("cart"))||[];

for(let product of products){
const cardContainer = document.createElement("div");
cardContainer.classList.add(
    "card",
    "card-vertical", 
    "d-flex", 
    "direction-column", 
    "relative", 
    "shadow")
    productContainer.appendChild(cardContainer);
// Card Image
const cardImageContainer = document.createElement("div");
cardImageContainer.classList.add("card-image-container");
const image = document.createElement("img");
image.classList.add("card-image")
image.setAttribute("src", product.img);
image.setAttribute("alt", products.name);
cardImageContainer.appendChild(image);
cardContainer.appendChild(cardImageContainer);


const details = document.createElement("div");
details.classList.add("card-details");
const title = document.createElement("div");
title.classList.add("card-title");
title.innerText = product.name;
details.appendChild(title);
cardContainer.appendChild(details);
const descriptionContainer = document.createElement("div");
descriptionContainer.classList.add("card-description");
details.appendChild(descriptionContainer);
const description = document.createElement("p");
description.classList.add("card-des");
description.innerText = product.brand
descriptionContainer.appendChild(description);


const discountedPrice = document.createElement("p");
discountedPrice.classList.add("card-price");
discountedPrice.innerText = `Rs. ${product.newPrice}`;
descriptionContainer.appendChild(discountedPrice);


const originalPrice = document.createElement("span");
originalPrice.classList.add("price-strike-through");
originalPrice.innerText = `Rs. ${product.oldPrice}`;
discountedPrice.appendChild(originalPrice);


const discount = document.createElement("span");
discount.classList.add("discount");
discount.innerText = `(${product.discount}% OFF)`;
discountedPrice.appendChild(discount);


const addToCart = document.createElement("div");
addToCart.classList.add("cta-btn");

const button = document.createElement("button");
button.classList.add("button", 
"btn-primary", 
"btn-icon", 
"cart-btn", 
"d-flex");
button.setAttribute("data-id", product._id);
const cartImage = document.createElement("img");
cartImage.setAttribute("src", "https://icon-library.com/images/shopping-cart-icon-white/shopping-cart-icon-white-12.jpg");

cartImage.classList.add("cart-img");
button.innerText = "Add To Cart";
button.appendChild(cartImage);
addToCart.appendChild(button);
descriptionContainer.appendChild(addToCart);
}
