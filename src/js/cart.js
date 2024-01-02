import fetchSingleProduct from "./single-product";

const productsWrapper = document.querySelector(".products__wrapper");

export default function addToCart() {
  productsWrapper.addEventListener("click", (e) => detectProduct(e));
}

async function detectProduct(e) {
  if (e.target.classList.contains("add__to__cart__btn")) {
    const btn = e.target;
    const productId = +btn.dataset.id;
    const product = await fetchSingleProduct(productId);
  }
}
