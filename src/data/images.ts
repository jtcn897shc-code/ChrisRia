// Every image on the site, keyed by name. Paths are relative to /public.
// Source notes matter: two photos came from customers' Google reviews and
// need the client to get permission (or swap for their own shots) before launch.

export type Img = {
  src: string; // largest variant
  srcset: string;
  width: number;
  height: number;
  alt: string;
  source: string;
};

const set = (name: string, widths: number[], height: number, alt: string, source: string): Img => {
  const max = Math.max(...widths);
  return {
    src: `media/${name}-${max}.webp`,
    srcset: widths.map((w) => `media/${name}-${w}.webp ${w}w`).join(", "),
    width: max,
    height,
    alt,
    source,
  };
};

export const images = {
  heroPoster: set("hero-poster", [1280], 716, "The ChrisRia counter: pastry cases, cakes and the gold CHRISRIA letters above the kitchen door.", "Client Facebook photo (Dec 29, 2025), balloons removed and camera move generated in Higgsfield"),
  heroPosterMobile: { ...set("hero-poster-m", [588], 716, "The ChrisRia counter and cake case.", "As above, portrait crop"), width: 586 },
  counter: set("counter", [800, 1344], 752, "The ChrisRia counter with pastry cases and cakes.", "Client Facebook photo, cleaned in Higgsfield"),
  grazing: set("grazing", [800, 1260], 941, "A long grazing table covered edge to edge with salami roses, cheese, crackers, fruit, meatballs, pinwheels and dips.", "Client photo"),
  spread: set("spread", [800, 1260], 797, "A New Year's spread: two trays of mac and cheese, wings with ranch, two charcuterie platters spelling Happy New Year, and a chocolate drip cake.", "Client Google listing photo"),
  // TODO: customer photo (Google review). Get permission or replace with the client's own shot.
  desserts: set("desserts", [800, 1260], 941, "Four desserts in a box: a chocolate cake with Nutella, a vanilla mousse cup with berries, a chocolate mousse cup and a red raspberry-shaped mousse.", "Customer Google review photo — permission needed"),
  // TODO: customer photo (Google review). Get permission or replace with the client's own shot.
  storefront: set("storefront", [700, 1260], 1676, "The ChrisRia storefront at 8344 Young Rd, with bistro tables and planters out front.", "Customer Google review photo — permission needed"),
  cake: set("cake", [420], 420, "A chocolate drip cake topped with gold, piped with Happy New Year.", "Crop of the client's New Year's spread photo"),
};

// Mature redraw of the original cartoon mascot (Higgsfield, from the client's logo):
// same chef, same cake-and-skillet pose, editorial illustration style.
export const logo = {
  webp: "media/logo-480.webp",
  webp2x: "media/logo-960.webp",
  png: "media/logo-480.png",
  small: "media/logo-240.webp",
  face: "media/logo-face-128.webp", // round badge for the nav
  width: 480,
  height: 349,
  alt: "ChrisRia logo: a smiling chef holding a layer cake in one hand and a skillet of vegetables in the other.",
};
