const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const ThemeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// change theme
ThemeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  ThemeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  ThemeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                      <td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${
                        order.shipping === "declined"
                          ? "danger"
                          : order.shipping === "pending"
                          ? "warning"
                          : "primary"
                      }">
                        ${order.shipping}
                      </td>
                      <td class="primary">Details</td>
                      `;

  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
