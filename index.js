import { products } from "./db/product.js";
import { createCardContainer } from "./createCardContainer.js";
import { findProductInCart } from "./utils/findProductInCart.js";


const filterContainer = document.getElementById("side-bar");
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


filterContainer.addEventListener("click", (event)=> {
    const updatedProducts = products.filter(({rating})=> rating > event.target.dataset.rating);
    productContainer.innerHTML = "";

    createCardContainer(updatedProducts, productContainer, findProductInCart, "productPage");
})

let search = document.getElementById("search-input");
function capitalizeFirstLetter(str){
    const words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
    return words.join(" ");
}
search.addEventListener("input", (event)=> {
         let searched = event.target.value;
         let searchText = capitalizeFirstLetter(searched);
         console.log(searchText);
        let searchedProducts = products.filter(({name})=> name.includes(searchText));
        productContainer.innerHTML = "";
  createCardContainer(searchedProducts, productContainer, findProductInCart, "productPage");
})

createCardContainer(products, productContainer, findProductInCart, "productPage");


