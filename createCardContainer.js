import { products } from "./db/product.js";

import { findProductInCart } from "./utils/findProductInCart.js";


export const createCardContainer = (products, parentElement, findProductInCart ,pageType) => {
for(let product of products){
    const cardContainer = document.createElement("div");
    cardContainer.classList.add(
        "card",
        "card-vertical", 
        "d-flex", 
        "direction-column", 
        "relative", 
        "shadow")
       
    // Card Image
    const cardImageContainer = document.createElement("div");
    cardImageContainer.classList.add("card-image-container");
    const image = document.createElement("img");
    image.classList.add("card-image")
    image.setAttribute("src", product.img);
    image.setAttribute("alt", products.name);
    cardImageContainer.appendChild(image);
    cardContainer.appendChild(cardImageContainer);
    
    //Details
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
    
    //Wishlist
    const wishlist = document.createElement("div");
    wishlist.classList.add("card", "wishlist", "card-vertical", "d-flex", "direction-column", "relative");
    wishlist.innerHTML = ` <div class="card-image-container relative">
    <span class="material-icons heart">favorite_border</span>
    `
    cardContainer.appendChild(wishlist);

    //Pricing
    const discountedPrice = document.createElement("p");
    discountedPrice.classList.add("card-price");
    discountedPrice.innerText = `Rs. ${product.newPrice}`;
    descriptionContainer.appendChild(discountedPrice);
    
    
    const originalPrice = document.createElement("span");
    originalPrice.classList.add("price-strike-through");
    originalPrice.innerText = `Rs. ${product.oldPrice}`;
    discountedPrice.appendChild(originalPrice);
    
    //Discount
    const discount = document.createElement("span");
    discount.classList.add("discount");
    discount.innerText = `(${product.discount}% OFF)`;
    discountedPrice.appendChild(discount);
    
    //rating Container start
    const ratings = document.createElement("p");
    ratings.classList.add("d-flex", "align-center");

    const rating = document.createElement("span");
    rating.innerText = product.rating;
    ratings.appendChild(rating);


    
    const star = document.createElement("span");
    star.classList.add("material-icons-outlined", "star");
    star.innerText = "star";
    ratings.appendChild(star);
    descriptionContainer.appendChild(ratings);


    // rating Container end
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
    const isProductInCart = findProductInCart(
        JSON.parse(localStorage.getItem("cart")),
        product._id
      );
      button.innerText =
        pageType === "cartPage"
          ? "Remove"
          : pageType === "productPage" && isProductInCart
          ? "Go To Cart"
          : "Add To Cart";
    button.appendChild(cartImage);
    addToCart.appendChild(button);
    descriptionContainer.appendChild(addToCart);
    parentElement.appendChild(cardContainer);
    }
}
