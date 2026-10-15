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

- **Bodoni Moda** for display. Section headings use automatic optical sizing for true
  Didone contrast on paper. The hero tagline is a lockup: the handwritten "a little bit" in
  `--pink-hi` (Homemade Apple, tilted -6°) signs into an indented "from", over "everywhere"
  and a pink full stop. The hero sets Bodoni at 700 with the optical size pinned to 32, not
  the ~96 it would auto-pick, so the hairlines are thick enough to survive moving video.
  `--shadow-text` lifts it off the photo. Tried and rejected: Gloock (bland), Fraunces Soft
  (good but heavy) and Fraunces italic (flagged as the stock AI hero).
- **Figtree** for body and UI: round, friendly, legible at 16–17px.
- **Homemade Apple**: the hero lead-in and handwritten notes, no more than four uses on the page. The font name
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
- **Vignettes** close every frame softly. Espresso on photos (`.photo-zoom::after`,
  the grazing photo), the hero (in the scrim) and the walnut wall. A warm walnut glow from above
  on the espresso grazing section. Blush pink at the edges of the paper section, and a deeper
  rose (`--rose-rgb`) on the pink cakes section, where ink stays at 8.5:1 even in the corners.
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
