# SA Invoice Pro — Website

Public marketing + **pricing / payment portal** for SA Invoice Pro.

This is **not** the desk app repo.

| Repo | Role |
|------|------|
| [sa-invoice-pro](https://github.com/dexter187gold/sa-invoice-pro) | Desk SPA + license_server.py |
| [saip-sync](https://github.com/dexter187gold/saip-sync) | Cloud sync + client portal API |
| **sa-invoice-pro-website** (this) | Marketing, pricing, checkout entry |

**Product email:** sainvoicepro@gmail.com

## Deploy

Cloudflare Pages or any static host:
- Build: none required for v1 static site (or `npx serve .`)
- Root: this repo

Point DNS e.g. `www.sainvoicepro.co.za` or `sainvoicepro.pages.dev` here.

## Payment flow (target)

1. User picks a plan on `/pricing.html`
2. Redirect to PayFast (or Stripe) checkout
3. Webhook on **license server** issues seats automatically
4. User opens desk → License → Activate (or auto after return URL)

See desk repo `docs/APP_LINKS.md` for live service URLs.
