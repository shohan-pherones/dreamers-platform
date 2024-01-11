import { updateLocalStorage } from "./local-storage";
import { renderSingleProductError } from "./render";

let basket = JSON.parse(localStorage.getItem("basket")) || [];

export default function store(action = "VIEW_BASKET", payload) {
  switch (action) {
    case "ADD_PRODUCT":
      const existedProduct = basket.find((pr) => pr.id === payload.id);
      if (existedProduct) {
        renderSingleProductError("You already added this product");
      } else {
        basket.push(payload);
        updateLocalStorage("basket", basket);
      }

    case "REMOVE_PRODUCT":
      const newBasket = basket.filter((pr) => pr.id !== payload);
      basket = newBasket;
      updateLocalStorage("basket", basket);

    case "GET_SUBTOTAL":
      const subtotal = basket.reduce((sum, el) => (sum += el.price), 0);
      return subtotal;

    case "VIEW_BASKET":
      return basket;
  }
}
