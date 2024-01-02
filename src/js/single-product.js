export default async function fetchSingleProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Product not found");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
