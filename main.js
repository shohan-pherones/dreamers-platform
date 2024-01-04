import addToCart from "./src/js/cart";
import fetchProducts from "./src/js/products";
import { updateCartCounter } from "./src/js/render";
import "./style.css";

fetchProducts();
addToCart();
updateCartCounter();
