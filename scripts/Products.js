import { getProducts } from "./database.js";

const products = getProducts();

export const Products = () => {
  let html = "<ul>";

  for (const product of products) {
    html += `<li data-type="products" data-name="${product.name}" data-price="${product.price}">${product.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "products") {
    const productName = itemClicked.dataset.name;
    const productPrice = itemClicked.dataset.price;
    window.alert(`${productName} costs $${productPrice}`);
  }
});
