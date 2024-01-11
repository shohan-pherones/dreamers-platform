import addToCart, { removeFromCart } from "./src/js/cart";
import fetchProducts from "./src/js/products";
import {
  cartModal,
  getSubtotal,
  renderCartElement,
  updateCartCounter,
} from "./src/js/render";
import "./style.css";

fetchProducts();
addToCart();
updateCartCounter();
cartModal();
renderCartElement();
removeFromCart();
getSubtotal();
