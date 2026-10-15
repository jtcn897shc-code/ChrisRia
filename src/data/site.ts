// Single source of truth for every word, number and link on the site.
// (confirmed) = taken from the client's own Facebook page, Google listing,
// shop signage or photos. TODO = not confirmed; never presented as fact.

export const site = {
  name: "ChrisRia Cuisine & Bakery", // (confirmed) Google listing + door decal
  shortName: "ChrisRia",
  tagline: "A little bit from everywhere.", // (confirmed) Facebook bio, their words
  bio: "Homemade with love: meals and desserts for your heart.", // (confirmed) Facebook bio, lightly punctuated
  url: "https://jtcn897shc-code.github.io/chrisria/", // TODO: swap for the real domain when there is one

  phone: {
    display: "(778) 987-1469", // (confirmed) Facebook contact info
    href: "tel:+17789871469",
  },
  // TODO: verify — Facebook shows a WhatsApp button; we assume it uses the same number.
  whatsapp: "17789871469",
  email: "renitoronto@yahoo.ca", // (confirmed) Facebook contact info

  address: {
    street: "8344 Young Rd #103", // (confirmed)
    city: "Chilliwack",
    region: "BC",
    postal: "V2P 4N9",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=ChrisRia+Cuisine+%26+Bakery+8344+Young+Rd+Chilliwack",
  },

  // (confirmed) Facebook "Services" list
  services: ["In-store pickup", "Takeout", "Delivery", "Contactless delivery"],

  // TODO: real opening hours. Until then the site tells people to call ahead
  // instead of inventing hours. Fill as e.g. [{ days: "Tue–Sat", time: "9am–6pm" }].
  hours: [] as { days: string; time: string }[],

  proof: {
    // (confirmed) Facebook page, Oct 2026 screenshot. Update the numbers as they change.
    recommendPct: 94,
    reviewCount: 15,
    source: "Facebook",
    // TODO: paste the page's real Facebook URL; this search link is a working stand-in.
    href: "https://www.facebook.com/search/top?q=ChrisRia%20Cuisine",
  },

  socials: {
    facebook: "https://www.facebook.com/search/top?q=ChrisRia%20Cuisine", // TODO: real page URL
  },
};

// The two hands of the logo: a cake in one, a skillet in the other.
// Items come from the shop window decals and the client's own photos.
export const hands = {
  sweet: {
    note: "this hand",
    title: "Sweet",
    lede: "A full pastry case, individual mousse desserts, and cakes made to order for the day you need them.",
    items: [
      "Custom cakes", // (confirmed) window decal "Custom cakes"
      "Pastries from the case", // (confirmed) counter photo
      "Mousse cups and plated desserts", // (confirmed) customer photo
    ],
  },
  savory: {
    note: "that hand",
    title: "Savory",
    lede: "Hot food to take home, paninis and sandwiches, and party trays big enough for the whole family.",
    items: [
      "Lunch and dinner to go", // (confirmed) window decal
      "Paninis and sandwiches", // (confirmed) window decal
      "Party trays: mac and cheese, wings, charcuterie", // (confirmed) New Year's spread photo
    ],
  },
};

export const grazing = {
  title: "A grazing table for the whole room.",
  body: "Cured meats folded into roses, wheels of cheese, crackers, fruit, meatballs, pinwheels and dips, laid out by hand until there's no table left. Tell us the date and how many people are coming, and we'll build it.",
  // (confirmed) items visible in the client's grazing-table photo
  contents: ["Salami roses", "Cheese wheels and cubes", "Crackers and breadsticks", "Fresh fruit", "Meatballs", "Pinwheels", "Dips"],
};

// A real sequence, so numbered markers are honest here.
export const cakeSteps = [
  { title: "Send us the date", body: "And a photo or a few words about what you have in mind: flavour, colours, writing on top." },
  { title: "We confirm the details", body: "Size, design and price, so you know exactly what you're getting." }, // TODO: confirm deposit / lead-time policy with the client
  { title: "Pick it up on Young Rd", body: "Or ask about delivery." }, // (confirmed) delivery is a listed service
];

// Options for the order composer. Each produces a pre-written WhatsApp message.
export const orderKinds = ["Grazing table", "Custom cake", "Party trays", "Something else"] as const;

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Grazing tables", href: "#grazing" },
  { label: "Cakes", href: "#cakes" },
  { label: "Visit", href: "#visit" },
];

// Display headlines end in an accent full stop; split it off so it can be styled.
export const stop = (s: string) => (s.endsWith(".") ? s.slice(0, -1) : s);

export const waHref = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const defaultOrderText = "Hi ChrisRia! I'd like to ask about an order.";
