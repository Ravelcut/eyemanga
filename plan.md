---
title: iManga Project Plan
tags:
  - project
  - imanga
  - eye-manga
  - react
created: 2026-03-18
status: in-progress
---

# 👁️ iManga — Project Plan

> [!info] Overview
> **iManga (Eye Manga)** is a manga-themed e-commerce storefront built with **React 18 + Vite 5**. The UI uses a bold comic-panel aesthetic with manga-style borders, halftone backgrounds, and grayscale-to-color image transitions. The store integrates with Instagram for branding and checkout via DMs.

---

## 🎯 Project Goals

- [ ] Build a visually striking manga-themed online store
- [ ] Showcase manga volumes, apparel, and merchandise
- [ ] Drive traffic to the **@eye_manga_official** Instagram page
- [ ] Enable checkout via Instagram DMs
- [ ] Create a responsive, mobile-friendly experience

---

## 🏗️ Current Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | React 18                            |
| Bundler     | Vite 5                              |
| Icons       | `react-icons` (Feather + FA)        |
| Fonts       | Oswald (headings) + Inter (body)    |
| Styling     | Vanilla CSS (component-scoped)      |
| Deployment  | *TBD*                               |

---

## 📦 Current Features

### ✅ Completed

- [x] Manga-panel grid layout with responsive breakpoints
- [x] Sticky header with SVG eye logo
- [x] Product catalog (6 items) with hover overlays
- [x] Add-to-cart functionality with live counter
- [x] Checkout button → Instagram DM link
- [x] Instagram panel with post grid + hover stats
- [x] Follow/Unfollow toggle
- [x] Simulated Instagram login/logout
- [x] Comic-style design system (borders, shadows, typography)
- [x] Grayscale-to-color image transitions on hover

### 🔧 Needs Improvement

- [ ] Product data is hardcoded — no backend or CMS
- [ ] No real authentication — login is simulated
- [ ] No routing — single page only
- [ ] No search or filtering for products
- [ ] Placeholder images from `picsum.photos`
- [ ] `App.css` is empty / unused
- [ ] No loading states or error handling
- [ ] No SEO meta tags beyond `<title>`

---

## 🗺️ Roadmap

### Phase 1 — Polish & Content `#mvp`

> [!tip] Goal
> Make the current single-page app production-ready with real content.

- [ ] Replace placeholder images with real product artwork
- [ ] Add more products to the catalog
- [ ] Add a hero/banner section at the top
- [ ] Add a footer with links, socials, and copyright
- [ ] Improve mobile responsiveness (test on real devices)
- [ ] Add favicon and Open Graph meta tags
- [ ] Clean up unused `App.css`
- [ ] Add loading skeleton/shimmer for images

---

### Phase 2 — Navigation & Pages `#routing`

> [!tip] Goal
> Expand from a single page to a multi-page experience.

- [ ] Install `react-router-dom`
- [ ] Create page structure:
	- [ ] **Home** — hero + featured products + Instagram panel
	- [ ] **Catalog** — full product grid with filters
	- [ ] **Product Detail** — individual product page
	- [ ] **About** — brand story and team
	- [ ] **Contact** — form or Instagram redirect
- [ ] Add animated page transitions
- [ ] Update header nav to use `<Link>` components

---

### Phase 3 — Product & Cart System `#ecommerce`

> [!tip] Goal
> Build a proper cart and product management system.

- [ ] Create a product data file or connect to a CMS/API
- [ ] Implement cart as a proper data structure (not just a counter)
	- [ ] Track individual items, quantities, sizes
	- [ ] Cart drawer/sidebar UI
	- [ ] Remove items / update quantity
- [ ] Add product categories and filtering
- [ ] Add search functionality
- [ ] Product detail page with image gallery
- [ ] Size/variant selection for apparel

---

### Phase 4 — Backend & Data `#backend`

> [!tip] Goal
> Move from hardcoded data to a real data layer.

- [ ] Choose backend approach:
	- [ ] **Option A:** Firebase (Firestore + Auth + Hosting)
	- [ ] **Option B:** Node.js + Express + MongoDB
	- [ ] **Option C:** Headless CMS (Sanity, Strapi, Contentful)
- [ ] Implement product CRUD (admin side)
- [ ] Real user authentication (Instagram OAuth or email)
- [ ] Order tracking / order history
- [ ] Persist cart state (localStorage or server-side)

---

### Phase 5 — Instagram Integration `#social`

> [!tip] Goal
> Deepen the Instagram connection beyond a simple link.

- [ ] Embed real Instagram feed via Instagram Basic Display API
- [ ] Real follower count display
- [ ] Instagram OAuth for login
- [ ] Share product to Instagram Stories integration
- [ ] User-generated content section (customer photos)

---

### Phase 6 — Deployment & Launch `#deploy`

> [!tip] Goal
> Ship the site and make it publicly accessible.

- [ ] Choose hosting platform:
	- [ ] **Option A:** Vercel (recommended for Vite/React)
	- [ ] **Option B:** Netlify
	- [ ] **Option C:** GitHub Pages (static only)
- [ ] Set up custom domain
- [ ] Configure SSL
- [ ] Set up CI/CD pipeline
- [ ] Performance audit (Lighthouse)
- [ ] SEO audit and optimization

---

## 📂 Project Structure

```
Project iManga/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/
│       ├── eye1.png
│       ├── eye2.png
│       └── eye3.png
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component + state
    ├── App.css           # (empty)
    ├── index.css         # Global styles + design tokens
    └── components/
        ├── Header.jsx           # Sticky nav + logo + cart
        ├── MangaLayout.jsx      # Grid wrapper
        ├── MangaLayout.css
        ├── ProductCatalog.jsx   # Product grid
        ├── ProductCatalog.css
        ├── InstagramPanel.jsx   # IG feed section
        └── InstagramPanel.css
```

---

## 🎨 Design System Reference

| Token               | Value                                 |
| -------------------- | ------------------------------------- |
| `--bg-color`         | `#ffffff`                             |
| `--text-color`       | `#000000`                             |
| `--border-color`     | `#000000`                             |
| `--manga-border`     | `4px solid black`                     |
| `--manga-shadow`     | `8px 8px 0px 0px black`              |
| `--manga-shadow-hover` | `12px 12px 0px 0px black`          |
| Heading font         | Oswald (400, 700)                     |
| Body font            | Inter (400, 600, 900)                 |

---

## 💡 Ideas & Future Features

- [ ] Dark mode / theme toggle
- [ ] Manga reader/viewer component (flip through pages)
- [ ] Wishlist / favorites system
- [ ] Newsletter signup
- [ ] Discount codes / promo system
- [ ] Anime-style page transition animations
- [ ] Sound effects on interactions (optional/toggleable)
- [ ] Multi-language support (EN/JP)

---

## 📎 Links & Resources

- **Instagram:** [@eye_manga_official](https://www.instagram.com/eye_manga_official/)
- **Checkout DM:** [ig.me/m/eye_manga_official](https://ig.me/m/eye_manga_official)
- **Font — Oswald:** [Google Fonts](https://fonts.google.com/specimen/Oswald)
- **Font — Inter:** [Google Fonts](https://fonts.google.com/specimen/Inter)

---

> [!note] Last Updated
> 2026-03-18
