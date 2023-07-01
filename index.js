import { products } from "./db/product.js";
import { createCardContainer } from "./createCardContainer.js";
import { findProductInCart } from "./utils/findProductInCart.js";



const productContainer = document.getElementById("products");

let cart = JSON.parse(localStorage.getItem("cart"))||[];
let isProductInCart;



productContainer.addEventListener("click", (event)=> {
    
    isProductInCart = findProductInCart(cart, event.target.dataset.id);

    const targetClassList = event.target.classList;
  if (targetClassList.contains("wishlist")) {
     targetClassList.toggle("favorite");
     targetClassList.toggle("favorite_border");
  }
 else if(!isProductInCart){
 const productAddedToCart = products.filter(({_id})=> 
    _id === event.target.dataset.id 
    )
    cart = [...cart, ...productAddedToCart];
    localStorage.setItem("cart" , JSON.stringify(cart));
    const cartButton = event.target;
    cartButton.innerHTML = "GO TO Cart <span class='material-icons-outlined'>shopping_cart</span>";
  }
  else {
    location.href = "cart.html"
  }
  
})
createCardContainer(products, productContainer, findProductInCart, "productPage");
