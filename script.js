const menuList = document.getElementById("menu-list");
const orderItems = document.getElementById("order-items");
const totalPrice = document.getElementById("total-price");

const menuItems = [
  { name: "Burger", price: 10 },
  { name: "Pizza", price: 12 },
  { name: "Salad", price: 8 },
  // Add more menu items here
];

menuItems.forEach(item => {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.innerHTML = `
    <h3>${item.name}</h3>
    <p>$${item.price}</p>
    <button class="add-to-order">Add to Order</button>
  `;
  menuList.appendChild(menuItem);

  menuItem.querySelector(".add-to-order").addEventListener("click", () => {
    const orderItem = document.createElement("li");
    orderItem.textContent = `${item.name} - $${item.price}`;
    orderItems.appendChild(orderItem);

    const currentTotal = parseFloat(totalPrice.textContent.replace("Total: $", ""));
    totalPrice.textContent = `Total: $${currentTotal + item.price}`;
  });
});