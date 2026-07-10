# 🥭 Daily Fresh — Premium E-Commerce Website

A modern, premium, fully responsive e-commerce website for **Daily Fresh**, a fresh fruits & vegetables supplier based in Dubai, UAE — specialising in mangoes, exotic fruits, vegetables, cold-pressed juices and bulk produce with **same-day delivery**.

Built as a **fast, SEO-friendly, zero-build static site** (HTML + Tailwind CSS + vanilla JS) so it runs anywhere with no compilation step and loads instantly.

---

## ✨ Features

- **Sticky navigation** with logo, menu, live search overlay, wishlist & cart icons with counters
- **Floating WhatsApp button** with pulse animation on every page
- **Hero banner** — "Fresh From Farm to Your Door in Dubai" with floating produce badges
- **Mango Festival** seasonal promo with a live countdown timer
- **Popular Categories**, **Best Sellers**, **Why Choose Us**, **Testimonials** & **Instagram feed**
- **Shop page** with live filters (category, max-price slider, origin, on-sale), sorting & active-filter chips
- **Product detail** page with hover **image zoom**, thumbnail gallery, quantity selector, related products
- **Cart + 3-step checkout** flow → generates a ready-to-send **WhatsApp order** message
- **Wishlist** and **cart** persisted in `localStorage`
- **Discount badges**, sale prices, star ratings
- Smooth **scroll-reveal animations**, hover effects, toasts (Framer-Motion-like feel, pure CSS/IO)
- **Mobile-first** responsive, slide-in mobile menu, accessible (reduced-motion aware)
- **SEO**: per-page meta/OG tags, semantic HTML, `robots.txt`, `sitemap.xml`, canonical URLs

## 🎨 Design

Fresh **green / orange / yellow / white** palette · **Poppins** (display) + **Inter** (body) typography · premium cards, soft shadows, rounded geometry.

---

## 🚀 Run locally

Any static file server works. Easiest:

```bash
npm start          # serves at http://localhost:4321
# or
npx serve .
```

Or simply open `index.html` in a browser (some features like `fetch`-free localStorage work from `file://`, but a server is recommended).

---

## 📁 Structure

```
freshfruits/
├── index.html          # Homepage
├── shop.html           # Shop / all products + filters
├── product.html        # Product detail (?id=product-id)
├── cart.html           # Cart + checkout flow
├── about.html          # About us
├── contact.html        # Contact + map + FAQ
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── package.json
└── assets/
    ├── css/styles.css  # Custom animations & premium styling layer
    └── js/
        ├── products.js # Product catalog + categories (edit data here)
        ├── cart.js     # Cart & wishlist (localStorage) + toasts
        └── site.js     # Header, footer, mobile menu, search, product cards, WhatsApp FAB
```

---

## 🔧 Customising

- **Products / prices / images** → `assets/js/products.js`
- **WhatsApp number & contact details** → top of `assets/js/site.js` (`WHATSAPP`, `PHONE_DISPLAY`, `EMAIL`)
- **Brand colours** → the `tailwind.config` block in each page's `<head>` (and CSS variables in `styles.css`)
- Product images use Unsplash for the demo — swap the `img` URLs in `products.js` for real product photography.

## 📈 Going to production

The pages use the **Tailwind Play CDN** for instant setup (it prints a console warning by design). For production, either:
1. Install Tailwind via CLI/PostCSS and compile a single minified `tailwind.css`, or
2. Port into **Next.js 14 + shadcn/ui + Framer Motion** — the data model in `products.js` and the component markup map over cleanly.

---

© Daily Fresh LLC · Dubai, UAE
