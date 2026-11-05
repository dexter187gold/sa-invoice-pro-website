# SA Invoice Pro — Marketing Website

A forest-green gradient, multi-page marketing website for SA Invoice Pro. This repository is separate from the desk app and production Worker.

## Repositories and services

- **Website:** https://github.com/dexter187gold/sa-invoice-pro-website
- **Desk app:** https://github.com/dexter187gold/sa-invoice-pro
- **Production app:** https://sa-invoice-pro.pcrepairdex.workers.dev
- **Cloudflare Pages:** https://sa-invoice.pages.dev
- **Website Worker alias:** https://sa-invoice.pcrepairdex.workers.dev

## Website pages

- `index.html` — homepage and live-app dashboard capture
- `features.html` — product feature tour, actual invoice and job-screen captures
- `how-it-works.html` — quote-to-invoice workflow
- `about.html` — about SA Invoice Pro
- `pricing.html` — app-aligned annual licence plans and Paystack app checkout entry
- `support.html` — contact and FAQ
- `privacy.html` / `terms.html` — preliminary legal information
- `refund-policy.html` — refund and cancellation policy (Paystack / compliance)
- `payment-success.html` / `payment-cancelled.html` — checkout return pages
- `404.html` — not-found page

The app captures use the real production interface rendered with isolated sample workspace data; no real customer information is included.

## Cloudflare Pages

Project: `sa-invoice`  
Production URL: https://sa-invoice.pages.dev  
Git source: `dexter187gold/sa-invoice-pro-website`, branch `main`

Static HTML/CSS/JS. Framework preset: None. Build command: blank. Output directory: `.`. Root directory: repository root.

If a new page 404s after push, open Cloudflare → Workers & Pages → **sa-invoice** → Deployments → **Retry deployment** (or **Create deployment** from `main`). Confirm GitHub is still connected under Settings → Builds.

## Paystack

The website directs customers to the SA Invoice Pro app licence page for checkout. The app's current self-service plans are Trial (7 days), Solo (R1,999/year, 1 seat), Shop (R4,999/year, up to 5 seats), and Multi-branch (R11,999/year, up to 25 seats). Lifetime and Enterprise licences are administrator-issued. Prices are guide prices; the billing service's checkout amount is authoritative. Paystack credentials and verification secrets must remain server-side.

Support: [sainvoicepro@gmail.com](mailto:sainvoicepro@gmail.com).
