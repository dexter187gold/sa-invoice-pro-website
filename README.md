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
- `pricing.html` — licence plans and PayFast checkout entry
- `support.html` — contact and FAQ
- `privacy.html` / `terms.html` — preliminary legal information
- `payment-success.html` / `payment-cancelled.html` — checkout return pages
- `404.html` — not-found page

The app captures use the real production interface rendered with isolated sample workspace data; no real customer information is included.

## Cloudflare Pages

Project: `sa-invoice`  
Production URL: https://sa-invoice.pages.dev  
Git source: `dexter187gold/sa-invoice-pro-website`, branch `main`

Static HTML/CSS/JS. Framework preset: None. Build command: blank. Output directory: `.`. Root directory: repository root.

## PayFast

The pricing page calls the billing service at `https://sa-invoice-license.onrender.com/api/billing/checkout`. Merchant credentials and the PayFast passphrase must remain server-side. Test the complete sandbox checkout and payment-notification flow before enabling live payments.

The displayed prices are single-purchase licence prices, not recurring subscriptions. The checkout return page does not itself confirm a successful payment; the billing service must verify the payment notification before issuing a licence.

Support: [sainvoicepro@gmail.com](mailto:sainvoicepro@gmail.com).
