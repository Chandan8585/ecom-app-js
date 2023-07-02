import { createCardContainer } from "./createCardContainer.js";
import { findProductInCart } from "./utils/findProductInCart.js";
import { createHorizontalProductCard } from "./horizontalProductCard.js";
const cartContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
cartContainer.addEventListener("click", (event)=>{
     cart =  cart.filter(({_id})=> _id !== event.target.dataset.id);
     cartContainer.innerHTML = "";
     
     createHorizontalProductCard(cart, cartContainer);
    localStorage.setItem("cart", JSON.stringify(cart));
})

createHorizontalProductCard(cart, cartContainer);

let priceBeforeDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc, curr) => acc + curr.oldPrice , 0);

let priceAfterDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc, curr)=> acc+ curr.newPrice, 0);


let discountedPrice = priceBeforeDiscount - priceAfterDiscount;
let priceContainer = document.querySelector(".price-container");


let totalProducts = document.querySelector(".item-count");
totalProducts.innerText = JSON.parse(localStorage.getItem("cart")).length;

let totalPrice = document.querySelector(".product-price");
totalPrice.innerText = priceBeforeDiscount;




let totalAmount = document.querySelector(".total-amount");
totalAmount.innerText = priceAfterDiscount;


let discountAmount = document.querySelectorAll(".discounted-amount");


for(let element of discountAmount){
    element.innerText = discountedPrice;
}


if(JSON.parse(localStorage.getItem("cart")).length === 0){
    priceContainer.innerHTML = "Add Some Products";
}
