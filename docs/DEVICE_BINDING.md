# Device binding — what we use (and what we refuse)

## Do **not** use

| Identifier | Why not |
|------------|--------|
| **IP address** | Changes on mobile data, VPN, load-balancer, shared shop Wi‑Fi. Breaks paying customers; easy to “change” without stealing software. |
| **MAC address** | **Not available** in browsers (privacy). Only possible in some native/desktop installs with elevated rights — still spoofable. |

## Prefer (modern, harder to casually bypass)

1. **Paid account identity** — email (and later Google sign-in) that received the payment.  
2. **Server-side seats** — license server stores plan, seat count, device list.  
3. **Payment webhook** — seats only exist after money clears (PayFast ITN / Stripe).  
4. **Soft device id** — stable random id in IndexedDB / localStorage (current HWID-style), used to *count seats*, not as the sole secret.  
5. Optional later: native app hardware id **plus** server validation.

## Honest security

Anything that only runs in the browser can be patched by a determined pirate.  
Real control is:

- cloud features / sync gated by valid server session  
- payment-backed seats  
- revoke on chargeback  

“Unbypassable client lock” is not a product you can ship on the web. Account + payment + seats is the industry standard.
