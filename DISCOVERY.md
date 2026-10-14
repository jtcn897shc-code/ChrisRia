# ChrisRia Cuisine & Bakery: discovery

Sources: the client's Facebook page (screenshots, Oct 2026), their Google listing photos,
two customer photos from Google reviews, and the shop's own window decals.

## Confirmed (used verbatim on the site)

| Fact | Value | Source |
|---|---|---|
| Name | ChrisRia Cuisine & Bakery | Google listing, door decal |
| Tagline | "A little bit from everywhere." | Facebook bio |
| Bio | "Homemade with love meals & desserts for your heart" | Facebook bio |
| Address | 8344 Young Rd #103, Chilliwack, BC V2P 4N9 | Facebook |
| Phone | (778) 987-1469 | Facebook |
| Email | renitoronto@yahoo.ca | Facebook |
| Services | In-store pickup, delivery, contactless delivery, takeout | Facebook |
| Price band | $$ | Facebook |
| Proof | 94% recommend (15 reviews) | Facebook, Oct 2026 |
| Menu lines | Lunch & dinner to go, paninis, sandwiches, custom cakes | Window decals |
| Also sold | Pastries, mousse desserts, party trays, grazing tables | Client and customer photos |
| Outdoor seating | Bistro tables out front | Storefront photo |

## Open: blocking launch

- [ ] **Opening hours.** The site says "Call ahead for today's hours" until these exist (`site.hours`).
- [ ] **WhatsApp number.** Facebook shows a WhatsApp button; we assume it's (778) 987-1469. Confirm.
- [ ] **Customer photos.** `desserts` and `storefront` come from customers' Google reviews
      (alycia bede, Tanya John). Get their permission, or replace with the shop's own photos.
- [ ] **Facebook page URL.** The site links to a Facebook search as a stand-in.
- [ ] **Domain.** Currently GitHub Pages at `/chrisria/`.

## Open: nice to have

- [ ] Real customer quotes, with permission (there are no testimonials on the site, by design).
- [ ] Cake lead time, deposit and price ranges.
- [ ] Grazing-table sizes or per-head pricing.
- [ ] Delivery radius and fee.
- [ ] Better, larger original photos (most current images are crops of phone screenshots).
- [ ] Who Chris and Ria are, for an About section, in their own words.

## Generated media (Higgsfield)

- `counter-*.webp`, `hero-poster*.webp`: the client's counter photo with the party balloons removed (GPT Image 2.5, 0.25 credits). Everything else is unchanged.
- `hero-push-*`: a 3-second camera push toward the counter generated from that photo (Cinema Studio Video v2, 3 credits). The site scrubs it by scroll.
- No food was generated. Every dish on the site is real.
