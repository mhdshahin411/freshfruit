/* =============================================================
   Fresh Focus Food Stuff — Cart & Wishlist (localStorage)
   ============================================================= */

const CART_KEY = "ff_cart";
const WISH_KEY = "ff_wishlist";
const DELIVERY_FEE = 0;        // Free same-day delivery in Dubai
const FREE_ABOVE = 50;         // Free delivery threshold (all orders qualify anyway)

/* ---------- storage helpers ---------- */
function readCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function writeCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  updateCartBadge();
  document.dispatchEvent(new CustomEvent("cart:change"));
}
function readWish() {
  try { return JSON.parse(localStorage.getItem(WISH_KEY)) || []; }
  catch { return []; }
}
function writeWish(ids) {
  localStorage.setItem(WISH_KEY, JSON.stringify(ids));
  updateCartBadge();
  document.dispatchEvent(new CustomEvent("wish:change"));
}

/* ---------- cart operations ---------- */
function addToCart(id, qty = 1) {
  const items = readCart();
  const found = items.find((i) => i.id === id);
  if (found) found.qty += qty;
  else items.push({ id, qty });
  writeCart(items);
  const p = getProduct(id);
  toast(`${p ? p.name : "Item"} added to cart`, "🛒");
}
function setQty(id, qty) {
  let items = readCart();
  if (qty <= 0) items = items.filter((i) => i.id !== id);
  else {
    const found = items.find((i) => i.id === id);
    if (found) found.qty = qty;
  }
  writeCart(items);
}
function removeFromCart(id) {
  writeCart(readCart().filter((i) => i.id !== id));
}
function cartCount() {
  return readCart().reduce((n, i) => n + i.qty, 0);
}
function cartSubtotal() {
  return readCart().reduce((sum, i) => {
    const p = getProduct(i.id);
    return sum + (p ? p.price * i.qty : 0);
  }, 0);
}
function clearCart() { writeCart([]); }

/* ---------- wishlist operations ---------- */
function inWishlist(id) { return readWish().includes(id); }
function toggleWishlist(id) {
  const ids = readWish();
  const idx = ids.indexOf(id);
  if (idx >= 0) { ids.splice(idx, 1); toast("Removed from wishlist", "🤍"); }
  else { ids.push(id); toast("Saved to wishlist", "❤️"); }
  writeWish(ids);
  return inWishlist(id);
}

/* ---------- badge ---------- */
function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach((el) => {
    const n = cartCount();
    el.textContent = n;
    el.classList.toggle("hidden", n === 0);
  });
  document.querySelectorAll("[data-wish-count]").forEach((el) => {
    const n = readWish().length;
    el.textContent = n;
    el.classList.toggle("hidden", n === 0);
  });
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg, icon = "✅") {
  let host = document.getElementById("toast-host");
  if (!host) {
    host = document.createElement("div");
    host.id = "toast-host";
    host.className = "fixed z-[60] bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none";
    document.body.appendChild(host);
  }
  const el = document.createElement("div");
  el.className =
    "pointer-events-auto flex items-center gap-2 rounded-full bg-neutral-900 text-white text-sm font-medium pl-4 pr-5 py-3 shadow-2xl shadow-black/20 toast-in";
  el.innerHTML = `<span class="text-base">${icon}</span><span>${msg}</span>`;
  host.appendChild(el);
  setTimeout(() => {
    el.classList.add("toast-out");
    setTimeout(() => el.remove(), 300);
  }, 2400);
}

if (typeof window !== "undefined") {
  Object.assign(window, {
    addToCart, setQty, removeFromCart, cartCount, cartSubtotal, clearCart,
    readCart, inWishlist, toggleWishlist, readWish, updateCartBadge, toast,
    DELIVERY_FEE, FREE_ABOVE,
  });
  document.addEventListener("DOMContentLoaded", updateCartBadge);
}
