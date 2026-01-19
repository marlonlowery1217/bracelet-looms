// ✅ Change this to your real business email:
const BUSINESS_EMAIL = "your-email@example.com";

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.getElementById("year").textContent = String(new Date().getFullYear());

const emailLink = document.getElementById("emailLink");
emailLink.textContent = BUSINESS_EMAIL;
emailLink.href = `mailto:${BUSINESS_EMAIL}`;

const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(orderForm);
  const name = data.get("name");
  const email = data.get("email");
  const category = data.get("category");
  const quantity = data.get("quantity");
  const neededBy = data.get("neededBy") || "Not specified";
  const delivery = data.get("delivery") || "Not specified";
  const details = data.get("details");

  const subject = encodeURIComponent(`Bracelet Looms Order Request — ${category}`);
  const body = encodeURIComponent(
`Hi Bracelet Looms!

My name: ${name}
My email: ${email}

Item: ${category}
Quantity: ${quantity}
Needed by: ${neededBy}
Pickup/Shipping: ${delivery}

Custom details:
${details}

Thanks!`
  );

  // Opens user's email client with prefilled info
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});

document.getElementById("fillExample").addEventListener("click", () => {
  orderForm.elements["name"].value = "Jordan";
  orderForm.elements["email"].value = "jordan@example.com";
  orderForm.elements["category"].value = "Custom Bracelet";
  orderForm.elements["quantity"].value = 2;
  orderForm.elements["details"].value =
    "Bracelet 1: pastel rainbow beads, name 'SKY', kids size, add 2 hearts.\n" +
    "Bracelet 2: black + gold theme, initials 'JL', adult size, add star charm.";
});
