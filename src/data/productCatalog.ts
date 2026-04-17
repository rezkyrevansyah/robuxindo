export type ProductCategory =
  | "Gamepass"
  | "Limited"
  | "Simulator"
  | "Roleplay"
  | "Adventure";

export type ProductCatalogItem = {
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  description: string;
  priceFrom: string;
  itemCount: number;
  accentFrom: string;
  accentTo: string;
  glow: string;
  badge?: string;
  isFeatured?: boolean;
};

export type ProductDetailItem = {
  id: string;
  title: string;
  description: string;
  amount: string;
  price: number;
  originalPrice: number;
  badge?: string;
};

export const productCatalog: ProductCatalogItem[] = [
  {
    slug: "sawah-indo",
    name: "Sawah Indo",
    subtitle: "Gamepass",
    category: "Gamepass",
    description: "Paket item santai buat farming dan progres lebih cepat.",
    priceFrom: "Rp 4.500",
    itemCount: 14,
    accentFrom: "#f6c28b",
    accentTo: "#f2a65a",
    glow: "rgba(246,194,139,0.42)",
    badge: "Favorit",
    isFeatured: true,
  },
  {
    slug: "blox-fruits",
    name: "Blox Fruits",
    subtitle: "Bundle",
    category: "Adventure",
    description: "Pilihan gamepass dan item boost buat grinding lebih hemat.",
    priceFrom: "Rp 6.000",
    itemCount: 18,
    accentFrom: "#f2a65a",
    accentTo: "#ef8c78",
    glow: "rgba(242,166,90,0.4)",
    badge: "Hot",
    isFeatured: true,
  },
  {
    slug: "fish-it",
    name: "Fish It",
    subtitle: "Gamepass",
    category: "Adventure",
    description: "Koleksi gamepass andalan buat progress mancing makin sat-set.",
    priceFrom: "Rp 5.000",
    itemCount: 11,
    accentFrom: "#f4b740",
    accentTo: "#f6c28b",
    glow: "rgba(244,183,64,0.35)",
    badge: "Update",
  },
  {
    slug: "fisch-gamepass",
    name: "Fisch",
    subtitle: "Gamepass",
    category: "Gamepass",
    description: "Akses pilihan pass populer dan item utilitas paling dicari.",
    priceFrom: "Rp 7.500",
    itemCount: 9,
    accentFrom: "#f6c28b",
    accentTo: "#d9b8a2",
    glow: "rgba(246,194,139,0.38)",
  },
  {
    slug: "expedition-antartica",
    name: "Expedition Antartica",
    subtitle: "Bundle",
    category: "Adventure",
    description: "Pilihan paket item dan booster untuk ekspedisi makin cepat.",
    priceFrom: "Rp 8.000",
    itemCount: 8,
    accentFrom: "#e5d9ff",
    accentTo: "#f6c28b",
    glow: "rgba(217,184,162,0.34)",
  },
  {
    slug: "evade",
    name: "Evade",
    subtitle: "VIP Gamepass",
    category: "Gamepass",
    description: "Pass dan coin utility buat push progress tanpa ribet.",
    priceFrom: "Rp 4.000",
    itemCount: 7,
    accentFrom: "#f29ab5",
    accentTo: "#f6c28b",
    glow: "rgba(242,154,181,0.34)",
  },
  {
    slug: "the-forge",
    name: "The Forge",
    subtitle: "Gamepass",
    category: "Adventure",
    description: "Upgrade tools, slot, dan buff penting dalam satu katalog.",
    priceFrom: "Rp 5.500",
    itemCount: 12,
    accentFrom: "#d9b8a2",
    accentTo: "#a8745a",
    glow: "rgba(168,116,90,0.28)",
  },
  {
    slug: "dress-to-impress",
    name: "Dress To Impress",
    subtitle: "Limited",
    category: "Limited",
    description: "Pilihan item limited dan paket premium yang lagi rame dicari.",
    priceFrom: "Rp 9.500",
    itemCount: 16,
    accentFrom: "#f3bfdc",
    accentTo: "#f6c28b",
    glow: "rgba(243,191,220,0.36)",
    badge: "Limited",
  },
  {
    slug: "car-driving-indonesia",
    name: "Car Driving Indonesia",
    subtitle: "Bundle",
    category: "Roleplay",
    description: "Bundle premium dan utility pass untuk pemain roleplay aktif.",
    priceFrom: "Rp 6.500",
    itemCount: 10,
    accentFrom: "#f2a65a",
    accentTo: "#72c29a",
    glow: "rgba(114,194,154,0.3)",
  },
  {
    slug: "welcome-to-bloxburg",
    name: "Welcome to Bloxburg",
    subtitle: "Pass",
    category: "Roleplay",
    description: "Gamepass Bloxburg paling penting buat build dan kerja lebih efisien.",
    priceFrom: "Rp 8.500",
    itemCount: 13,
    accentFrom: "#f6c28b",
    accentTo: "#f2a65a",
    glow: "rgba(246,194,139,0.4)",
    badge: "Best Seller",
  },
  {
    slug: "brookhaven",
    name: "Brookhaven",
    subtitle: "Item Bundle",
    category: "Roleplay",
    description: "Bundle item dan private feature buat roleplay lebih seru.",
    priceFrom: "Rp 3.500",
    itemCount: 6,
    accentFrom: "#f8b4c9",
    accentTo: "#d9b8a2",
    glow: "rgba(248,180,201,0.35)",
  },
  {
    slug: "strongest-battlegrounds",
    name: "The Strongest Battlegrounds",
    subtitle: "Gamepass",
    category: "Adventure",
    description: "Pass, emote, dan utility buat pemain PvP yang mau lebih praktis.",
    priceFrom: "Rp 6.000",
    itemCount: 10,
    accentFrom: "#f2a65a",
    accentTo: "#875643",
    glow: "rgba(110,67,48,0.22)",
  },
  {
    slug: "valence-district",
    name: "Valence District",
    subtitle: "Premium",
    category: "Roleplay",
    description: "Akses premium dan bundle item buat roleplay lebih lengkap.",
    priceFrom: "Rp 7.000",
    itemCount: 9,
    accentFrom: "#c5b6ff",
    accentTo: "#f6c28b",
    glow: "rgba(197,182,255,0.34)",
  },
  {
    slug: "survive-the-killer",
    name: "Survive The Killer",
    subtitle: "Pass",
    category: "Adventure",
    description: "Katalog gamepass dan item khusus buat main lebih agresif.",
    priceFrom: "Rp 5.000",
    itemCount: 8,
    accentFrom: "#ef8c78",
    accentTo: "#f4b740",
    glow: "rgba(239,140,120,0.36)",
  },
  {
    slug: "hypershot",
    name: "Hypershot",
    subtitle: "Event Bundle",
    category: "Limited",
    description: "Item event dan bundle spesial yang cepat habis tiap restock.",
    priceFrom: "Rp 7.500",
    itemCount: 11,
    accentFrom: "#f2a65a",
    accentTo: "#f29ab5",
    glow: "rgba(242,154,181,0.32)",
    badge: "Event",
  },
  {
    slug: "abyss-miner",
    name: "Abyss Miner",
    subtitle: "Simulator",
    category: "Simulator",
    description: "Boost, luck, dan utility pass buat farming lebih konsisten.",
    priceFrom: "Rp 4.500",
    itemCount: 7,
    accentFrom: "#d9b8a2",
    accentTo: "#f2e2d6",
    glow: "rgba(217,184,162,0.34)",
  },
  {
    slug: "blue-lock-rivals",
    name: "Blue Lock Rivals",
    subtitle: "Pass",
    category: "Adventure",
    description: "Pilihan spin, boost, dan premium pass untuk push rank.",
    priceFrom: "Rp 6.500",
    itemCount: 13,
    accentFrom: "#9ec5ff",
    accentTo: "#f6c28b",
    glow: "rgba(158,197,255,0.34)",
  },
  {
    slug: "prospecting",
    name: "Prospecting",
    subtitle: "Simulator",
    category: "Simulator",
    description: "Katalog utility dan premium upgrade yang paling sering dicari.",
    priceFrom: "Rp 5.500",
    itemCount: 8,
    accentFrom: "#72c29a",
    accentTo: "#f6c28b",
    glow: "rgba(114,194,154,0.3)",
  },
  {
    slug: "blade-ball",
    name: "Blade Ball",
    subtitle: "Bundle",
    category: "Adventure",
    description: "Bundle spin dan premium utilities buat progres lebih cepat.",
    priceFrom: "Rp 4.500",
    itemCount: 10,
    accentFrom: "#f4b740",
    accentTo: "#ef8c78",
    glow: "rgba(244,183,64,0.34)",
  },
  {
    slug: "drag-drive-simulator",
    name: "Drag Drive Simulator",
    subtitle: "Simulator",
    category: "Simulator",
    description: "Gamepass progres, boost, dan paket utility paling hemat.",
    priceFrom: "Rp 5.000",
    itemCount: 9,
    accentFrom: "#f6c28b",
    accentTo: "#875643",
    glow: "rgba(135,86,67,0.3)",
  },
  {
    slug: "restaurant-tycoon-2",
    name: "Restaurant Tycoon 2",
    subtitle: "Premium",
    category: "Roleplay",
    description: "Akses premium dan boost buat bangun restoran lebih efisien.",
    priceFrom: "Rp 7.000",
    itemCount: 6,
    accentFrom: "#f3bfdc",
    accentTo: "#f2a65a",
    glow: "rgba(243,191,220,0.3)",
  },
  {
    slug: "sailor-piece",
    name: "Sailor Piece",
    subtitle: "Adventure Pass",
    category: "Adventure",
    description: "Item pass dan bundle adventure untuk pemain aktif harian.",
    priceFrom: "Rp 6.000",
    itemCount: 7,
    accentFrom: "#f2a65a",
    accentTo: "#72c29a",
    glow: "rgba(242,166,90,0.34)",
  },
];

export const productCategories: Array<"Semua" | ProductCategory> = [
  "Semua",
  "Gamepass",
  "Limited",
  "Simulator",
  "Roleplay",
  "Adventure",
];

export function getProductDetailItems(product: ProductCatalogItem): ProductDetailItem[] {
  const basePrice = Number(product.priceFrom.replace(/[^\d]/g, ""));

  if (product.category === "Gamepass") {
    return [
      {
        id: `${product.slug}-rbx-100`,
        title: "Starter Pack",
        description: "Pilihan hemat buat user yang mau coba dulu.",
        amount: "100 RBX",
        price: basePrice,
        originalPrice: Math.round(basePrice / 0.96),
        badge: "Hemat",
      },
      {
        id: `${product.slug}-rbx-250`,
        title: "Bundle 250",
        description: "Nominal pas buat pembelian harian dan event pendek.",
        amount: "250 RBX",
        price: basePrice * 2,
        originalPrice: Math.round((basePrice * 2) / 0.95),
      },
      {
        id: `${product.slug}-rbx-500`,
        title: "Bundle 500",
        description: "Paling sering dipilih buat top up menengah.",
        amount: "500 RBX",
        price: basePrice * 4,
        originalPrice: Math.round((basePrice * 4) / 0.92),
        badge: "Populer",
      },
      {
        id: `${product.slug}-rbx-1000`,
        title: "Bundle 1000",
        description: "Cocok buat kamu yang mau langsung beres.",
        amount: "1000 RBX",
        price: basePrice * 8,
        originalPrice: Math.round((basePrice * 8) / 0.9),
        badge: "Best Value",
      },
    ];
  }

  if (product.category === "Limited") {
    return [
      {
        id: `${product.slug}-limited-starter`,
        title: "Limited Starter",
        description: "Item limited entry level yang lagi ramai dicari.",
        amount: "1 item",
        price: basePrice,
        originalPrice: Math.round(basePrice / 0.95),
        badge: "Fast Sell",
      },
      {
        id: `${product.slug}-limited-bundle`,
        title: "Limited Bundle",
        description: "Paket 2 item limited buat koleksi lebih hemat.",
        amount: "2 item",
        price: basePrice * 2,
        originalPrice: Math.round((basePrice * 2) / 0.92),
      },
      {
        id: `${product.slug}-limited-premium`,
        title: "Limited Premium",
        description: "Item pilihan dengan prioritas proses lebih cepat.",
        amount: "3 item",
        price: basePrice * 3,
        originalPrice: Math.round((basePrice * 3) / 0.9),
        badge: "Premium",
      },
    ];
  }

  return [
    {
      id: `${product.slug}-starter`,
      title: "Starter Bundle",
      description: "Bundle aman buat mulai progres tanpa ribet.",
      amount: "1 item",
      price: basePrice,
      originalPrice: Math.round(basePrice / 0.96),
      badge: "Hemat",
    },
    {
      id: `${product.slug}-plus`,
      title: "Plus Bundle",
      description: "Paling pas untuk user yang mau value lebih besar.",
      amount: "2 item",
      price: basePrice * 2,
      originalPrice: Math.round((basePrice * 2) / 0.94),
    },
    {
      id: `${product.slug}-pro`,
      title: "Pro Bundle",
      description: "Bundle favorit dengan diskon paling terasa.",
      amount: "3 item",
      price: basePrice * 3,
      originalPrice: Math.round((basePrice * 3) / 0.91),
      badge: "Populer",
    },
    {
      id: `${product.slug}-ultimate`,
      title: "Ultimate Bundle",
      description: "Buat user yang mau langsung beres sekali beli.",
      amount: "5 item",
      price: basePrice * 5,
      originalPrice: Math.round((basePrice * 5) / 0.88),
      badge: "Best Value",
    },
  ];
}

export function getProductBySlug(slug?: string) {
  return productCatalog.find((item) => item.slug === slug) ?? null;
}

export function getProductDetailItemById(
  product: ProductCatalogItem,
  itemId?: string
) {
  return getProductDetailItems(product).find((item) => item.id === itemId) ?? null;
}
