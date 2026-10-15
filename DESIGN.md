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
| `--pink` | #F0C3E3 | logo blob (sampled #F0C0E4) | the highlight: cakes section, stamp, bubble, highlighter links, blush vignette |
| `--pink-hi` | #F094D1 | same hue, saturated | pink *text* on dark grounds: hero script, headline stops, labels, underlines |
| `--walnut` | #5E3823 | slat wall behind the counter | visit section, hero fallback |

Contrast (WCAG): ink/paper 15.2, red/paper 5.3, white/red 5.9, ink/pink 11.0, red/pink **3.8**
(large text only), pink-hi/ink 7.9, pink-hi/walnut 4.8, cream/walnut 9.6.

**Pink highlights the site.** `--accent` is the per-ground highlight: red on light sections,
`--pink-hi` on dark ones (`.on-dark`). Every display headline ends in an accent full stop
(`.stop`). Links on paper get a pink highlighter stroke (`.mark`); links on dark grounds get a
thin pink underline. Pale pink is never text: at small sizes it reads as cream. Gold was retired
so pink is the only highlight.

## Type

- **Gabarito** (800–900) for display: chunky, tightly tracked (-0.045em), and lowercase
  via CSS (source text keeps its case for screen readers). The Roulé reference supplied this
  register. The brand name "ChrisRia" keeps its capitals. Small body-font labels never go
  lowercase, so proper nouns like "Young Rd" stay correct.
- **The hero lockup** is the hybrid: the pink **Yellowtail** brush script "a little bit"
  (tilted -7°, at least 2.3rem, a 0.6px stroke so it holds up on phones) leads into "from /
  everywhere." in Gabarito 900, flush left, with a pink full stop. On phones the size scales
  with the screen (`clamp(3.4rem, 15.5vw, 6rem)`) so "everywhere." fills the column.
  Tried and rejected along the way: Gloock (bland), Fraunces Soft (heavy), Fraunces italic
  (the stock AI hero) and Bodoni Moda (it read "off" to the client).
- **Figtree** for body and UI: round, friendly, legible at 16–17px.
- **Yellowtail**: the hero lead-in and the handwritten notes ("this hand", "that hand", the
  cake caption). Bold enough to read over photos, unlike the thinner Homemade Apple it replaced.

Scale is 1.25 from a 17px body (`--step--1` … `--step-5`).

## Shapes and texture

- **Scalloped edge**: the bakery box, and the Grainhaus reference. Used where a light
  section rises over a dark one.
- **The logo's blob**: used as a photo mask (`clip-path: url(#blob)`).
- **Walnut slats**: a texture cut from their own counter photo (`public/media/slats.webp`, an 8px slat period tiled seamlessly), fading into solid walnut behind any text. Gold on the lightest slat is 2.6:1, so text never sits on the raw wall.
- **The plate**: a circular photo with a cream rim (Grainhaus).
- Two radii only: `--radius-pill` for small controls, `--radius-soft` (14px) for every rounded rectangle (form panel, fields, message bubble, storefront photo, reveal clip). Circles (plate, stamp, step numbers) are shapes.
- One elevation: `--shadow-lift`, used by the plate and the desktop order pill.
- **Vignettes** are subtle and neutral black, never tinted: `--vignette-photo` (30% at the
  corners) on every photo and the grazing table, deeper on the hero scrim and the walnut wall,
  and `--vignette-light` (7%) on the paper and pink sections, which frames them without muddying
  the colour.
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
