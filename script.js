const products = [
  { name: "EN 590 10PPM", category: "Low-sulphur diesel", image: "photo-1516937941344-00b4e0337589" },
  { name: "Crude Oil", category: "Petrochemicals", image: "photo-1518837695005-2083093ee35b" },
  { name: "LPG", category: "Liquefied petroleum gas", image: "photo-1473341304170-971dccb5ac1e" },
  { name: "Clinker", category: "Cement & construction", image: "photo-1516937941344-00b4e0337589" },
  { name: "Petrol", category: "Refined fuels", image: "photo-1532601224476-15c79f2f7a51" },
  { name: "Diesel", category: "Refined fuels", image: "photo-1473341304170-971dccb5ac1e" },
  { name: "Bitumen", category: "Road & infrastructure", image: "photo-1516937941344-00b4e0337589" },
  { name: "Coal", category: "Minerals & ores", image: "photo-1494412519320-aa613dfb7738" }
];

const productGrid = document.querySelector("#product-grid");

if (productGrid) {
  productGrid.innerHTML = products.map((product, index) => `
    <article class="product-card reveal" style="--product-image: url('https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=75')">
      <span class="product-number">0${index + 1}</span>
      <h3 class="product-name">${product.name}</h3>
      <span class="product-category">${product.category}</span>
    </article>
  `).join("");
}

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      primaryNav.classList.remove("is-open");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("reveal-ready");
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".product-card").forEach((card) => revealObserver.observe(card));
}
