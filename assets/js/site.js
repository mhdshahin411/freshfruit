/* =============================================================
   Daily Fresh — Shared UI (header, footer, cards, fx)
   ============================================================= */

const WHATSAPP = "971500000000"; // <-- replace with real WhatsApp number
const PHONE_DISPLAY = "+971 50 000 0000";
const EMAIL = "hello@dailyfresh.ae";

/* ---------- SVG icon set ---------- */
const I = {
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="w-5 h-5"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="w-6 h-6"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="w-6 h-6"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.53 15.26L2 22l4.86-1.27A10 10 0 1 0 12 2z"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  leaf: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16z"/><path d="M4 13c4-1 8-3 11-8"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z"/><path d="m9 12 2 2 4-4"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 2l3 6.5 7 .7-5.2 4.7 1.5 6.9L12 17.8 5.7 20.8l1.5-6.9L2 9.2l7-.7z"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
};

/* ---------- LOGO ---------- */
function logoMarkup(size = "text-xl") {
  return `
  <a href="index.html" class="flex items-center gap-2.5 shrink-0 group">
    <span class="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="w-5 h-5"><path d="M11 20A7 7 0 0 1 4 13c0-6 8-9 16-9 0 8-3 16-9 16z" fill="rgba(255,255,255,.15)"/><path d="M4 13c4-1 8-3 11-8" stroke-linecap="round"/></svg>
    </span>
    <span class="leading-none">
      <span class="block font-display font-extrabold ${size} tracking-tight text-neutral-900">Daily<span class="text-brand-600">Fresh</span></span>
      <span class="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-semibold">Fresh Produce · Dubai</span>
    </span>
  </a>`;
}

/* ---------- HEADER ---------- */
const NAV = [
  { label: "Home", href: "index.html" },
  { label: "Shop", href: "shop.html" },
  { label: "Mango Festival", href: "shop.html?tag=mango", accent: true },
  { label: "About", href: "about.html" },
  { label: "Contact", href: "contact.html" },
];

function renderHeader() {
  const host = document.querySelector("[data-header]");
  if (!host) return;
  // Make the whole header sticky (top strip + nav) — pins for the entire page.
  host.classList.add("sticky", "top-0", "z-40");
  const page = document.body.dataset.page || "";
  const links = NAV.map((n) => {
    const active = n.href.split("?")[0].replace(".html", "") === page;
    return `<a href="${n.href}" class="relative px-1 py-1 text-sm font-medium transition-colors ${
      n.accent ? "text-orange-600 hover:text-orange-700" : active ? "text-brand-700" : "text-neutral-600 hover:text-brand-700"
    }">${n.label}${active ? `<span class="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-500"></span>` : ""}</a>`;
  }).join("");

  host.innerHTML = `
  <!-- top strip -->
  <div class="bg-neutral-900 text-white text-xs">
    <div class="mx-auto max-w-7xl px-4 h-9 flex items-center justify-between">
      <p class="flex items-center gap-2"><span class="text-brand-400">${I.truck}</span><span class="hidden sm:inline">Same-day delivery across Dubai · Order before 4 PM</span><span class="sm:hidden">Same-day Dubai delivery</span></p>
      <div class="flex items-center gap-4">
        <a href="tel:${PHONE_DISPLAY.replace(/\s/g,'')}" class="hover:text-brand-300 transition hidden sm:inline">${PHONE_DISPLAY}</a>
        <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" class="text-brand-300 hover:text-brand-200 font-semibold">WhatsApp Us</a>
      </div>
    </div>
  </div>
  <!-- main nav -->
  <div id="mainnav" class="bg-white/90 backdrop-blur-lg border-b border-neutral-100 transition-shadow">
    <div class="mx-auto max-w-7xl px-4 h-16 md:h-20 flex items-center gap-2 sm:gap-4">
      ${logoMarkup()}
      <nav class="hidden lg:flex items-center gap-7 ml-6">${links}</nav>
      <div class="ml-auto flex items-center gap-0.5 sm:gap-2">
        <button data-search-open class="grid place-items-center w-10 h-10 rounded-full text-neutral-600 hover:bg-neutral-100 transition" aria-label="Search">${I.search}</button>
        <a href="cart.html" class="relative hidden sm:grid place-items-center w-10 h-10 rounded-full text-neutral-600 hover:bg-neutral-100 transition" aria-label="Wishlist">
          ${I.heart}<span data-wish-count class="hidden absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full bg-orange-500 text-white text-[10px] font-bold">0</span>
        </a>
        <a href="cart.html" class="relative grid place-items-center w-10 h-10 rounded-full text-neutral-600 hover:bg-neutral-100 transition" aria-label="Cart">
          ${I.cart}<span data-cart-count class="hidden absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 grid place-items-center rounded-full bg-brand-600 text-white text-[10px] font-bold">0</span>
        </a>
        <a href="shop.html" class="btn-shine hidden md:inline-flex items-center gap-1.5 ml-1 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 h-10 transition shadow-lg shadow-brand-500/25">Shop Now</a>
        <button data-menu-open class="lg:hidden grid place-items-center w-10 h-10 rounded-full text-neutral-700 hover:bg-neutral-100 transition" aria-label="Menu">${I.menu}</button>
      </div>
    </div>
  </div>`;

  // sticky shadow
  const nav = document.getElementById("mainnav");
  const onScroll = () => nav.classList.toggle("shadow-lg", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  buildMobileMenu();
  buildSearchOverlay();
  document.querySelector("[data-menu-open]")?.addEventListener("click", () => toggleMobileMenu(true));
  document.querySelector("[data-search-open]")?.addEventListener("click", () => toggleSearch(true));
  updateCartBadge();
}

/* ---------- MOBILE MENU ---------- */
function buildMobileMenu() {
  if (document.getElementById("mobile-menu")) return;
  const el = document.createElement("div");
  el.id = "mobile-menu";
  el.className = "fixed inset-0 z-[70] lg:hidden invisible overflow-hidden";
  el.innerHTML = `
    <div data-overlay class="absolute inset-0 bg-black/40 opacity-0 transition-opacity"></div>
    <div data-panel class="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-white shadow-2xl translate-x-full transition-transform duration-300 flex flex-col">
      <div class="flex items-center justify-between p-4 border-b border-neutral-100">
        ${logoMarkup("text-lg")}
        <button data-menu-close class="grid place-items-center w-10 h-10 rounded-full hover:bg-neutral-100">${I.close}</button>
      </div>
      <nav class="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
        ${NAV.map((n) => `<a href="${n.href}" class="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium ${n.accent ? "text-orange-600" : "text-neutral-800"} hover:bg-brand-50 transition">${n.label}<span class="text-neutral-300">›</span></a>`).join("")}
      </nav>
      <div class="p-4 border-t border-neutral-100 space-y-3">
        <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 w-full rounded-full bg-brand-600 text-white font-semibold py-3.5">${I.whatsapp}<span>Order on WhatsApp</span></a>
        <a href="tel:${PHONE_DISPLAY.replace(/\s/g,'')}" class="block text-center text-sm text-neutral-500">${PHONE_DISPLAY}</a>
      </div>
    </div>`;
  document.body.appendChild(el);
  el.querySelector("[data-overlay]").addEventListener("click", () => toggleMobileMenu(false));
  el.querySelector("[data-menu-close]").addEventListener("click", () => toggleMobileMenu(false));
  el.querySelectorAll("nav a").forEach((a) => a.addEventListener("click", () => toggleMobileMenu(false)));
}
function toggleMobileMenu(open) {
  const el = document.getElementById("mobile-menu");
  if (!el) return;
  const panel = el.querySelector("[data-panel]");
  const overlay = el.querySelector("[data-overlay]");
  if (open) {
    el.classList.remove("invisible");
    void el.offsetWidth; // force reflow so the transition runs (no rAF dependency)
    overlay.classList.add("opacity-100");
    panel.classList.remove("translate-x-full");
    document.body.style.overflow = "hidden";
  } else {
    overlay.classList.remove("opacity-100");
    panel.classList.add("translate-x-full");
    document.body.style.overflow = "";
    setTimeout(() => el.classList.add("invisible"), 300);
  }
}

/* ---------- SEARCH OVERLAY ---------- */
function buildSearchOverlay() {
  if (document.getElementById("search-overlay")) return;
  const el = document.createElement("div");
  el.id = "search-overlay";
  el.className = "fixed inset-0 z-[75] invisible";
  el.innerHTML = `
    <div data-overlay class="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 transition-opacity"></div>
    <div data-panel class="absolute top-0 inset-x-0 bg-white shadow-2xl -translate-y-full transition-transform duration-300">
      <div class="mx-auto max-w-3xl px-4 py-6">
        <div class="flex items-center gap-3 border-2 border-brand-500 rounded-2xl px-4 py-3">
          <span class="text-brand-500">${I.search}</span>
          <input data-search-input type="text" placeholder="Search mangoes, juices, vegetables…" class="flex-1 outline-none text-lg placeholder:text-neutral-400" />
          <button data-search-close class="grid place-items-center w-9 h-9 rounded-full hover:bg-neutral-100 text-neutral-500">${I.close}</button>
        </div>
        <div data-search-results class="mt-4 grid gap-2 max-h-[60vh] overflow-y-auto"></div>
      </div>
    </div>`;
  document.body.appendChild(el);
  const input = el.querySelector("[data-search-input]");
  const results = el.querySelector("[data-search-results]");
  const render = (q) => {
    const term = q.trim().toLowerCase();
    const list = !term ? PRODUCTS.filter((p) => p.bestSeller) :
      PRODUCTS.filter((p) => (p.name + " " + p.category + " " + p.tags.join(" ") + " " + p.origin).toLowerCase().includes(term));
    results.innerHTML = list.length ? list.slice(0, 8).map((p) => `
      <a href="product.html?id=${p.id}" class="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-50 transition">
        <img src="${p.img}" alt="${p.name}" class="w-14 h-14 rounded-lg object-cover" loading="lazy"/>
        <div class="flex-1 min-w-0"><p class="font-semibold text-neutral-800 truncate">${p.name}</p><p class="text-xs text-neutral-400 capitalize">${p.category} · ${p.origin}</p></div>
        <span class="font-bold text-brand-700">${formatAED(p.price)}</span>
      </a>`).join("") :
      `<p class="text-center text-neutral-400 py-8">No results for “${q}”. Try “mango” or “juice”.</p>`;
  };
  input.addEventListener("input", (e) => render(e.target.value));
  el.querySelector("[data-overlay]").addEventListener("click", () => toggleSearch(false));
  el.querySelector("[data-search-close]").addEventListener("click", () => toggleSearch(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleSearch(false); });
  el._render = render;
}
function toggleSearch(open) {
  const el = document.getElementById("search-overlay");
  if (!el) return;
  const panel = el.querySelector("[data-panel]");
  const overlay = el.querySelector("[data-overlay]");
  const input = el.querySelector("[data-search-input]");
  if (open) {
    el.classList.remove("invisible");
    el._render("");
    void el.offsetWidth; // force reflow so the transition runs (no rAF dependency)
    overlay.classList.add("opacity-100");
    panel.classList.remove("-translate-y-full");
    setTimeout(() => input.focus(), 150);
  } else {
    overlay.classList.remove("opacity-100");
    panel.classList.add("-translate-y-full");
    setTimeout(() => el.classList.add("invisible"), 300);
  }
}

/* ---------- PRODUCT CARD ---------- */
function productCard(p) {
  const disc = discountPct(p);
  const wished = inWishlist(p.id);
  const badgeColor = p.badge === "Sale" ? "bg-orange-500" :
    /Mango/.test(p.badge || "") ? "bg-gradient-to-r from-orange-500 to-yellow-500" :
    p.badge === "Best Seller" ? "bg-brand-600" : "bg-neutral-800";
  return `
  <article class="group relative flex flex-col rounded-2xl bg-white border border-neutral-100 overflow-hidden hover:shadow-2xl hover:shadow-neutral-200/60 hover:-translate-y-1 transition-all duration-300">
    <div class="relative overflow-hidden aspect-[4/3] bg-neutral-50">
      <a href="product.html?id=${p.id}">
        <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"/>
      </a>
      <div class="absolute top-3 left-3 flex flex-col gap-1.5">
        ${p.badge ? `<span class="text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow ${badgeColor}">${p.badge}</span>` : ""}
        ${disc ? `<span class="bg-white text-orange-600 text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow">-${disc}%</span>` : ""}
      </div>
      <button data-wish="${p.id}" class="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-full bg-white/90 backdrop-blur shadow hover:scale-110 transition ${wished ? "text-orange-500" : "text-neutral-400 hover:text-orange-500"}" aria-label="Add to wishlist">
        <svg viewBox="0 0 24 24" fill="${wished ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" class="w-4 h-4"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>
      </button>
      <a href="product.html?id=${p.id}" class="absolute inset-x-3 bottom-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-center text-sm font-semibold bg-white/95 backdrop-blur text-neutral-800 rounded-xl py-2 shadow-lg">Quick view</a>
    </div>
    <div class="flex flex-col flex-1 p-4">
      <div class="flex items-center gap-1 text-xs text-neutral-400 mb-1">
        <span class="capitalize">${p.category}</span><span>·</span><span>${p.origin}</span>
      </div>
      <a href="product.html?id=${p.id}" class="font-semibold text-neutral-900 leading-snug hover:text-brand-700 transition line-clamp-1">${p.name}</a>
      <div class="flex items-center gap-1 mt-1 text-amber-400">${I.star}<span class="text-xs text-neutral-500 font-medium">${p.rating} <span class="text-neutral-300">(${p.reviews})</span></span></div>
      <p class="text-xs text-neutral-400 mt-1">${p.unit}</p>
      <div class="mt-auto pt-3 flex items-end justify-between gap-2">
        <div class="leading-none">
          <span class="text-lg font-extrabold text-neutral-900">${formatAED(p.price)}</span>
          ${p.oldPrice ? `<span class="ml-1 text-sm text-neutral-400 line-through">${formatAED(p.oldPrice)}</span>` : ""}
        </div>
        <button data-add="${p.id}" class="btn-shine grid place-items-center w-10 h-10 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/25 hover:scale-105 active:scale-95 transition" aria-label="Add to cart">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="w-5 h-5"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </div>
  </article>`;
}

/* delegate add/wish clicks */
function wireProductGrids(root = document) {
  root.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) { addToCart(add.dataset.add); return; }
    const wish = e.target.closest("[data-wish]");
    if (wish) {
      const on = toggleWishlist(wish.dataset.wish);
      wish.classList.toggle("text-orange-500", on);
      wish.classList.toggle("text-neutral-400", !on);
      wish.querySelector("svg").setAttribute("fill", on ? "currentColor" : "none");
    }
  });
}

/* ---------- FOOTER ---------- */
function renderFooter() {
  const host = document.querySelector("[data-footer]");
  if (!host) return;
  host.innerHTML = `
  <footer class="bg-neutral-900 text-neutral-300">
    <div class="mx-auto max-w-7xl px-4 pt-16 pb-8">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="mb-4">${logoMarkup("text-lg").replace('text-neutral-900','text-white').replace('text-neutral-400','text-neutral-500')}</div>
          <p class="text-sm text-neutral-400 leading-relaxed">Dubai's premium supplier of farm-fresh fruits, vegetables, exotic produce and cold-pressed juices — delivered to your door the same day.</p>
          <div class="flex gap-2 mt-5">
            ${["Instagram","Facebook","TikTok"].map((s)=>`<a href="#" class="grid place-items-center w-9 h-9 rounded-full bg-white/5 hover:bg-brand-600 transition text-xs font-semibold">${s[0]}</a>`).join("")}
          </div>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Shop</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="shop.html?cat=fruits" class="hover:text-brand-400 transition">Fresh Fruits</a></li>
            <li><a href="shop.html?cat=vegetables" class="hover:text-brand-400 transition">Vegetables</a></li>
            <li><a href="shop.html?cat=juices" class="hover:text-brand-400 transition">Fresh Juices</a></li>
            <li><a href="shop.html?tag=mango" class="hover:text-brand-400 transition">Mango Festival</a></li>
            <li><a href="shop.html?cat=bulk" class="hover:text-brand-400 transition">Bulk & Boxes</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="about.html" class="hover:text-brand-400 transition">About Us</a></li>
            <li><a href="contact.html" class="hover:text-brand-400 transition">Contact</a></li>
            <li><a href="shop.html" class="hover:text-brand-400 transition">All Products</a></li>
            <li><a href="cart.html" class="hover:text-brand-400 transition">Cart & Checkout</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Get in touch</h4>
          <ul class="space-y-3 text-sm text-neutral-400">
            <li>📍 Ras Al Khor Industrial Area, Dubai, UAE</li>
            <li>📞 <a href="tel:${PHONE_DISPLAY.replace(/\s/g,'')}" class="hover:text-brand-400">${PHONE_DISPLAY}</a></li>
            <li>✉️ <a href="mailto:${EMAIL}" class="hover:text-brand-400">${EMAIL}</a></li>
            <li>🕐 Daily · 7:00 AM – 10:00 PM</li>
          </ul>
          <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 mt-4 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2.5 transition">${I.whatsapp}<span>Chat on WhatsApp</span></a>
        </div>
      </div>
      <div class="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500">
        <p>© ${new Date().getFullYear()} Daily Fresh LLC · Dubai, UAE. All rights reserved.</p>
        <p class="flex gap-4"><a href="#" class="hover:text-neutral-300">Privacy</a><a href="#" class="hover:text-neutral-300">Terms</a><a href="#" class="hover:text-neutral-300">Delivery Info</a></p>
      </div>
    </div>
  </footer>`;
}

/* ---------- WHATSAPP FLOATING BUTTON ---------- */
function renderWhatsAppFab() {
  if (document.getElementById("wa-fab")) return;
  const a = document.createElement("a");
  a.id = "wa-fab";
  a.href = `https://wa.me/${WHATSAPP}?text=Hi%20Daily%20Fresh!%20I'd%20like%20to%20order%20fresh%20produce.`;
  a.target = "_blank"; a.rel = "noopener";
  a.className = "fixed z-50 bottom-5 right-5 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-2xl shadow-green-600/40 hover:scale-105 transition group wa-pulse";
  a.innerHTML = `${I.whatsapp}<span class="hidden sm:block font-semibold text-sm max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap transition-all duration-300">Order on WhatsApp</span>`;
  document.body.appendChild(a);
}

/* ---------- shared viewport helpers ---------- */
function _inView(el, factor = 0.9) {
  const r = el.getBoundingClientRect();
  const h = window.innerHeight || document.documentElement.clientHeight;
  return r.top < h * factor && r.bottom > 0;
}

/* ---------- SCROLL REVEAL (robust: immediate + IO + scroll fallback) ---------- */
let _revealBound = false;
function _revealEl(el) {
  el.style.transitionDelay = (el.dataset.revealDelay || 0) + "ms";
  el.classList.add("reveal-in");
}
function _revealScan() {
  const h = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll("[data-reveal].reveal-watched:not(.reveal-in)").forEach((el) => {
    // reveal once its top has crossed the trigger line — covers in-view AND already scrolled-past
    if (el.getBoundingClientRect().top < h * 0.92) _revealEl(el);
  });
}
function initReveal() {
  const els = [...document.querySelectorAll("[data-reveal]:not(.reveal-watched)")];
  if (!els.length) return;
  els.forEach((e) => e.classList.add("reveal-watched"));
  // 1) reveal anything already in view straight away — never depends on IO
  els.forEach((el) => { if (_inView(el, 0.98)) _revealEl(el); });
  // 2) IntersectionObserver for the rest (below the fold)
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { _revealEl(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.filter((el) => !el.classList.contains("reveal-in")).forEach((el) => io.observe(el));
  } else {
    els.forEach(_revealEl);
  }
  // 3) universal scroll/resize fallback so content is NEVER stuck hidden
  if (!_revealBound) {
    _revealBound = true;
    window.addEventListener("scroll", _revealScan, { passive: true });
    window.addEventListener("resize", _revealScan, { passive: true });
  }
}

/* ---------- COUNT-UP (animated numbers, robust) ---------- */
let _countBound = false;
function _runCount(el) {
  const target = parseFloat(el.dataset.countUp);
  const dec = parseInt(el.dataset.decimals || 0);
  const prefix = el.dataset.prefix || "";
  const suffix = el.dataset.suffix || "";
  const fmt = (n) => prefix + Number(n).toLocaleString("en-AE", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = fmt(target); return;
  }
  const dur = 1400;
  let start = null;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const step = (ts) => {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / dur, 1);
    el.textContent = fmt((target * ease(p)).toFixed(dec));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function _countScan() {
  const h = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll("[data-count-up].count-watched:not(.count-done)").forEach((el) => {
    if (el.getBoundingClientRect().top < h * 0.9) { el.classList.add("count-done"); _runCount(el); }
  });
}
function initCountUp() {
  const els = [...document.querySelectorAll("[data-count-up]:not(.count-watched)")];
  if (!els.length) return;
  els.forEach((e) => e.classList.add("count-watched"));
  els.forEach((el) => { if (_inView(el, 0.95)) { el.classList.add("count-done"); _runCount(el); } });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !en.target.classList.contains("count-done")) {
          en.target.classList.add("count-done"); _runCount(en.target); io.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    els.filter((el) => !el.classList.contains("count-done")).forEach((el) => io.observe(el));
  }
  if (!_countBound) {
    _countBound = true;
    window.addEventListener("scroll", _countScan, { passive: true });
  }
}

/* ---------- CART BADGE POP ---------- */
function popCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    if (el.classList.contains("hidden")) return;
    el.classList.remove("cart-pop"); void el.offsetWidth; el.classList.add("cart-pop");
  });
  const fab = document.getElementById("wa-fab");
}

/* ---------- BOOT ---------- */
function initSite() {
  renderHeader();
  renderFooter();
  renderWhatsAppFab();
  wireProductGrids();
  initReveal();
  initCountUp();
  updateCartBadge();
  document.addEventListener("cart:change", popCartBadge);
}
document.addEventListener("DOMContentLoaded", initSite);

if (typeof window !== "undefined") {
  Object.assign(window, { productCard, initReveal, initCountUp, popCartBadge, I, WHATSAPP, PHONE_DISPLAY, EMAIL, logoMarkup });
}
