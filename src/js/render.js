const productsWrapper = document.querySelector(".products__wrapper");

export function renderLoading(loadingState) {
  const template = `
    <div class="loading__spinner flex justify-center col-span-full">
      <span class="animate-spin">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg>
      </span>
    </div>
  `;

  if (loadingState) {
    productsWrapper.insertAdjacentHTML("beforeend", template);
  } else {
    document.querySelector(".loading__spinner").style.display = "none";
  }
}

export function renderError(message) {
  const template = `
    <div class="flex justify-center col-span-full">
      <p class="text-center text-rose-600">${message}</p>
    </div>
  `;

  productsWrapper.insertAdjacentHTML("beforeend", template);
}

export function renderProducts(products) {
  products.forEach((product) => {
    const template = `
      <div class="bg-white p-10 rounded-2xl shadow-2xl shadow-gray/25 overflow-hidden">
        <div class="w-full aspect-[4/5] overflow-hidden">
          <img src="${product?.images[0]}" alt="${
      product?.title
    }" class="w-full h-full object-cover"/>
        </div>
        <div class="mt-5 flex flex-col gap-2.5 items-start">
          <h6 class="uppercase text-xs font-semibold tracking-widest bg-orange text-light px-2 py-1 rounded-full">${
            product?.category
          }</h6>
          <h3 class="text-xl font-medium">${product?.title?.substring(0, 20)}${
      product?.title?.length > 20 ? "..." : ""
    }</h3>
          <p class="text-dark/50">${product?.description?.substring(
            0,
            50
          )}...</p>
          <div class="flex justify-between items-center gap-5 w-full">
            <p class="text-2xl font-medium">$${product?.price}</p>
            <button data-id="${
              product?.id
            }" class="btn add__to__cart__btn">Add to cart</button>
          </div>
        </div>
      </div>
    `;

    productsWrapper.insertAdjacentHTML("beforeend", template);
  });
}

export function renderSingleProductLoading(loadingState, element) {
  if (loadingState) {
    const template = `
      <span class="animate-spin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader"><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"/><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"/><line x1="2" x2="6" y1="12" y2="12"/><line x1="18" x2="22" y1="12" y2="12"/><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"/><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"/></svg>
      </span>
    `;

    element.textContent = "";
    element.insertAdjacentHTML("beforeend", template);
  } else {
    element.textContent = "Add to cart";
  }
}
