import { renderError, renderLoading, renderProducts } from "./render";

export default async function fetchProducts() {
  try {
    renderLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    renderProducts(data);
  } catch (error) {
    renderError(error.message);
  } finally {
    renderLoading(false);
  }
}
