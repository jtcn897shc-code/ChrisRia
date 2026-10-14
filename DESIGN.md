# ChrisRia design system

## The argument

The logo is a chef holding a layer cake in one hand and a skillet in the other. That's the
business: a pastry case and a hot kitchen behind one counter. The site says so directly
("Cake in one hand. Skillet in the other.") and uses the mascot as a diagram of the menu.

## Logo

The mascot is a mature redraw of the original cartoon (Higgsfield GPT Image 2.5, from the
client's logo): same chef, same blonde bob, white jacket, red apron, cake in one hand and
skillet in the other, on the pink blob. It's drawn as an editorial illustration with adult
proportions. The nav uses a round crop of her face, which is also the favicon. **The client
should approve the redraw before launch**; the original is in git history.

## Palette

Sampled from the logo and the shop, not picked from a swatch book.

| Token | Hex | From | Use |
|---|---|---|---|
| `--paper` | #FBF0F2 | logo blob, diluted | page ground |
| `--ink` | #2B1813 | the chocolate cake | text, dark sections |
| `--red` | #C42029 | apron and skillet | CTAs, sweet/savory headings |
| `--pink` | #F0C3E3 | logo blob (sampled #F0C0E4) | cakes section, stamp, message bubble |
| `--walnut` | #5E3823 | slat wall behind the counter | visit section, hero fallback |
| `--gold` | #D9AE4F | the CHRISRIA letters | labels on dark grounds only |

Contrast (WCAG): ink/paper 15.2, red/paper 5.3, white/red 5.9, ink/pink 11.0, red/pink **3.8**
(large text only), gold/walnut 4.9, gold/ink 8.1, cream/walnut 9.6.

Rules: gold never sits on paper. Red is never small text on pink. Pink is a shape colour
on light grounds.

## Type

- **Fraunces** for display, with the `SOFT` axis at 100 so the serifs round off like
  piped icing. Section heads are set at 560. The hero tagline is the one loud line: 900
  weight, `WONK` on, tight leading, lifted off the photo by `--shadow-text`, so it reads
  like a bakery sign. It replaced Gloock, which read bland over the video. Rejected
  alternatives: Bodoni Moda (its hairlines vanish over moving footage) and Fraunces italic
  (the stock AI-startup hero, flagged by the design detector).
- **Figtree** for body and UI: round, friendly, legible at 16–17px.
- **Homemade Apple**: handwritten notes, at most three on the page. The font name
  matches the brand's "homemade" voice.

Scale is 1.25 from a 17px body (`--step--1` … `--step-5`).

## Shapes and texture

- **Scalloped edge**: the bakery box, and the Grainhaus reference. Used where a light
  section rises over a dark one.
- **The logo's blob**: used as a photo mask (`clip-path: url(#blob)`).
- **Walnut slats**: a texture cut from their own counter photo (`public/media/slats.webp`, an 8px slat period tiled seamlessly), fading into solid walnut behind any text. Gold on the lightest slat is 2.6:1, so text never sits on the raw wall.
- **The plate**: a circular photo with a cream rim (Grainhaus).
- Two radii only: `--radius-pill` for small controls, `--radius-soft` (14px) for every rounded rectangle (form panel, fields, message bubble, storefront photo, reveal clip). Circles (plate, stamp, step numbers) are shapes.
- One elevation: `--shadow-lift`, used by the plate and the desktop order pill.
- Translucent ink only through `--ink-rgb`, `--line` and `--line-strong`. No raw hex in components.

## Motion

One orchestrated moment: the hero. A real photo of the counter, with the balloons removed,
becomes a 3-second camera push (Higgsfield). Scrolling scrubs it, so you walk up to the
counter, and the scalloped paper sheet then rises over it. Everything else is quiet:

| Element | Tool | Values |
|---|---|---|
| Hero scrub | rAF → `video.currentTime` | ends at 55% of the clip, 0.2 smoothing |
| Headline entrance | CSS animation | 900ms `--ease-out`, 60ms stagger |
| Grazing photo reveal | `clip-path` on an inner wrapper | 600ms `--ease-in-out`, once |
| Order bar | CSS transition | `translateY(100%)`, 240ms `--ease-out` |
| Hovers | CSS transition, fine pointers only | 200ms `ease`, `scale(1.02)` at most |

Reduced motion keeps the still poster and a normal-height hero, with no clip reveal and
opacity-only on the order bar. Without JS everything is visible and every CTA is a real link.

## Category clichés we avoid

Bakery and café sites default to: kraft-paper textures, chalkboard menus, wheat-sheaf
icons, cursive everything, "Est. 20XX" badges, stock croissant hero shots, pastel
gradients, and invented five-star testimonials. We use none of them. The only rating shown
is Facebook's, attributed and linked.
