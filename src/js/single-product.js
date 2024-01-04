import { renderSingleProductError, renderSingleProductLoading } from "./render";

export default async function fetchSingleProduct(id, btn) {
  try {
    renderSingleProductLoading(true, btn);
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Product not found");
    const data = await res.json();
    return data;
  } catch (error) {
    renderSingleProductError(error.message);
  } finally {
    renderSingleProductLoading(false, btn);
  }
}
