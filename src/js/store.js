import { updateLocalStorage } from "./local-storage";
import { renderSingleProductError } from "./render";

const basket = JSON.parse(localStorage.getItem("basket")) || [];

export default function store(action = "VIEW_BASKET", product = {}) {
  switch (action) {
    case "ADD_PRODUCT":
      const existedProduct = basket.find((pr) => pr.id === product.id);
      if (existedProduct) {
        renderSingleProductError("You already added this product");
      } else {
        basket.push(product);
        updateLocalStorage("basket", basket);
      }

    case "VIEW_BASKET":
      return basket;
  }
}
