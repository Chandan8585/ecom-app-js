import { products } from "./db/product.js"

export const createHorizontalProductCard = (products , parentContainer)=> {
        for(let product of products){
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card-horizontal", "d-flex", "shadow");
            cardContainer.innerHTML =  `
            <div class="card-hori-image-container relative" >
                 <img class="card-image" src=${product.img}>
                 
            </div>
            <div class="card-details d-flex direction-column">
                 <div class="card-title">${product.brand}</div>
                 <div class="card-description">
                      <p class="card-des">${product.name}</p>
                      <p class="card-price">Rs. ${product.newPrice}<span class="price-strike-through padding-all-8">Rs. ${product.oldPrice}</span>
                         <span class="discount padding-all-8">(${product.discount}% OFF)</span>
                      </p>
                 </div>
                 <div class="quantity-container d-flex gap">
                      <p class="q-title">Quantity: </p>
                      <div class="count-container d-flex align-center gap">
                           <button class="count">-</button>
                           <span class="count-value">1</span>
                           <button class="count">+</button>
                      </div>
                 </div>
                 <div class="cta-btn d-flex gap">
                      <div class="cta-btn" >
                          <button class="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" data-id="${product._id}"><img src="./assets/cart.jpg" alt="cart" class="cartImageinhor"> Remove Item</button>
                      </div>
                      <div class="cta-btn" >
                          <button class="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
                          Move to Wishlist</button>
                       </div>
                 </div>
            </div>
       `
           parentContainer.appendChild(cardContainer);
        }
}
