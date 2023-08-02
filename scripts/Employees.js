import { getEmployees, getOrders } from "./database.js";

const employees = getEmployees();

export const Employees = () => {
  let html = "<ul>";

  for (const employee of employees) {
    html += `<li data-type="totalorders" data-id="${employee.id}" data-name="${employee.name}">${employee.name}</li>`;
  }

  html += "</ul>";

  return html;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "totalorders") {
    const employeeId = itemClicked.dataset.id;
    const employeeName = itemClicked.dataset.name;
    let totalOrders = 0;
    const orderData = getOrders();

    for (const orders of orderData) {
      if (parseInt(employeeId) === orders.employeeId) {
        totalOrders++;
      }
    }
    window.alert(`${employeeName} sold ${totalOrders} orders`);
  }
});
