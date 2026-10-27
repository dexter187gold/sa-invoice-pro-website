# SA Invoice Pro — Marketing Website

Public marketing, pricing and checkout entry point for SA Invoice Pro. This is separate from the desk app and its production Worker.

## Repositories and services

| Resource | Purpose |
|---|---|
| [sa-invoice-pro](https://github.com/dexter187gold/sa-invoice-pro) | Desk app and license/billing server source |
| [saip-sync](https://github.com/dexter187gold/saip-sync) | Cloud sync and client portal API |
| **sa-invoice-pro-website** (this repository) | Public marketing website, pricing, checkout entry, legal pages |

## Deploy on Cloudflare Pages

Cloudflare Pages project: **sa-invoice**  
Production URL: https://sa-invoice.pages.dev  
Git source: `dexter187gold/sa-invoice-pro-website`, branch `main`

This is a static HTML/CSS/JavaScript website. No npm build is required.

- Framework preset: None
- Build command: leave blank
- Build output directory: `.`
- Root directory: repository root

Every push to `main` should trigger a production deployment.

## PayFast checkout

The pricing page calls the server-side billing endpoint at:

`https://sa-invoice-license.onrender.com/api/billing/checkout`

The server creates the signed PayFast checkout fields and receives ITNs. Merchant ID/key and passphrase must remain configured on the license server's admin/environment settings; never put the passphrase in this public repository.

The billing code uses `SA_WEBSITE_URL` (defaults to `https://sa-invoice.pages.dev`) to constrain return URLs, and `SA_LICENSE_SERVER_URL` (defaults to `https://sa-invoice-license.onrender.com`) for the ITN URL.

**Before taking live payments:** configure the PayFast merchant account, test the sandbox checkout and ITN, and only then switch off sandbox mode. The current checkout is a single-payment flow, not an automatic monthly subscription. Prices should not be advertised as recurring until recurring billing is implemented and tested.

## Pages

- `index.html` — marketing home
- `pricing.html` — plans and checkout modal
- `payment-success.html` / `payment-cancelled.html` — payment return pages
- `privacy.html` / `terms.html` — preliminary legal information
- `404.html` — not-found page

Product support: [sainvoicepro@gmail.com](mailto:sainvoicepro@gmail.com)
