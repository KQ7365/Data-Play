import { getProducts, getEmployees, getOrders } from "./database.js";

// Get copy of state for use in this module
const products = getProducts();
const employees = getEmployees();
const orders = getOrders();

// Function whose responsibility is to find the product for an order
const findproduct = (order) => {
  let orderProduct = [];
  for (const product of products) {
    if (product.id === order.productId) {
      orderProduct = product;
    }
  }

  return orderProduct;
};

// Function whose responsibility is to find the employee for an order
const findemployee = (order, allEmployees) => {
  let orderEmployee = [];

  for (const employee of allEmployees) {
    if (employee.id === order.employeeId) {
      orderEmployee = employee;
    }
  }

  return orderEmployee;
};

export const Orders = () => {
  let html = "<ul>";

  for (const order of orders) {
    const employee = findemployee(order, employees);
    const product = findproduct(order);

    html += `<li>${product.name} was sold by ${employee.name} on ${new Date(
      order.timestamp
    ).toLocaleDateString()}</li>`;
  }

  html += "</ul>";

  return html;
};
