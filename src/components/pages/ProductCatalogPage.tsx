"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import {
  productCatalog,
  productCategories,
  type ProductCatalogItem,
  type ProductCategory,
} from "@/data/productCatalog";
import { cn } from "@/lib/utils";

type CategoryFilter = "Semua" | ProductCategory;

type ProductCatalogPageProps = {
  initialCategory?: string;
  initialQuery?: string;
};

function ProductThumb({ item }: { item: ProductCatalogItem }) {
  return (
    <div
      className="relative aspect-[1.26/1] overflow-hidden rounded-[22px] border border-white/60"
      style={{
        background: `linear-gradient(145deg, ${item.accentFrom}, ${item.accentTo})`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(circle at 25% 28%, rgba(255,255,255,0.72), transparent 30%), radial-gradient(circle at 82% 24%, ${item.glow}, transparent 28%), linear-gradient(140deg, rgba(255,255,255,0.12), rgba(63,45,37,0.12))`,
        }}
      />
      <div className="absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.26),transparent)]" />
      <div className="absolute -right-3 top-6 h-24 w-24 rounded-full bg-white/16 blur-xl" />
      <div className="absolute -left-5 bottom-2 h-20 w-20 rounded-full bg-white/16 blur-lg" />

      <div className="relative z-10 flex h-full flex-col justify-between p-3.5">
        <div className="flex items-start justify-between gap-2">
          <span className="rounded-full bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-brand-900">
            {item.subtitle}
          </span>
          {item.badge ? (
            <span className="rounded-full bg-brand-900/75 px-2 py-1 text-[10px] font-semibold text-white">
              {item.badge}
            </span>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80">
            Robuxindo Store
          </p>
          <h3 className="max-w-[11ch] text-lg font-black leading-[1.02] tracking-tight text-white xs:text-[1.2rem]">
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ item }: { item: ProductCatalogItem }) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-rb-border bg-rb-surface p-3 shadow-[0_12px_30px_rgba(110,67,48,0.07)]">
      <ProductThumb item={item} />

      <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
            {item.category}
          </span>
          <span className="text-[11px] font-medium text-rb-text2">{item.itemCount} item</span>
        </div>

        <h3 className="font-heading text-[1.02rem] font-bold leading-tight text-brand-900">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-rb-text2">
          {item.description}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-rb-text2">
              Mulai dari
            </p>
            <p className="mt-1 font-heading text-lg font-extrabold text-brand-900">
              {item.priceFrom}
            </p>
          </div>

          <Link
            href={`/produk/${item.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_18px_rgba(110,67,48,0.16)]"
          >
            Lihat Item
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

const catalogStats = [
  { label: "Game Aktif", value: "24+" },
  { label: "Item Tersedia", value: "360+" },
  { label: "Transaksi Masuk", value: "34.7k" },
];

export default function ProductCatalogPage({
  initialCategory,
  initialQuery = "",
}: ProductCatalogPageProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(
    initialCategory && productCategories.includes(initialCategory as CategoryFilter)
      ? (initialCategory as CategoryFilter)
      : "Semua"
  );

  const normalizedQuery = query.trim().toLowerCase();
  const filteredProducts = productCatalog.filter((item) => {
    const matchCategory = activeCategory === "Semua" || item.category === activeCategory;
    const matchQuery =
      normalizedQuery.length === 0 ||
      item.name.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.category.toLowerCase().includes(normalizedQuery);

    return matchCategory && matchQuery;
  });

  const featuredProducts = productCatalog.filter((item) => item.isFeatured).slice(0, 3);

  return (
    <section className="bg-rb-bg pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] border border-rb-border bg-rb-surface px-5 py-7 shadow-[0_18px_36px_rgba(110,67,48,0.08)] sm:px-7 sm:py-9 lg:px-10 lg:py-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_top_right,rgba(246,194,139,0.28),transparent_68%)]" />
            <div className="absolute inset-y-0 left-0 w-[30%] bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.8),transparent_70%)]" />
            <div className="absolute bottom-0 left-1/3 h-36 w-36 rounded-full bg-rb-peach/20 blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
              <Sparkles className="h-3.5 w-3.5" />
              Katalog Produk
            </span>

            <h1 className="mx-auto mt-5 max-w-2xl font-heading text-[2rem] font-black leading-none tracking-tight text-brand-900 xs:text-[2.3rem] sm:text-[2.75rem] lg:text-[3.15rem]">
              Pilih Game Roblox Favoritmu
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-rb-text2 xs:text-[15px] sm:text-base">
              Temukan gamepass, bundle, dan item paling dicari dalam satu katalog yang rapi.
              Semua pilihan disusun supaya kamu bisa lanjut ke halaman item dan pembayaran tanpa ribet.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:gap-4">
              {catalogStats.map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-[112px] rounded-[22px] border border-rb-border bg-white/78 px-4 py-3 shadow-[0_8px_20px_rgba(110,67,48,0.05)]"
                >
                  <p className="font-heading text-xl font-extrabold text-brand-900">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium text-rb-text2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-rb-text2" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari game, genre, atau item populer..."
                  className="h-12 w-full rounded-full border border-rb-border bg-white px-12 pr-4 text-sm text-brand-900 shadow-[0_8px_20px_rgba(110,67,48,0.05)] placeholder:text-rb-text2 focus:border-brand-300 focus:outline-none"
                />
              </label>

              <div className="flex items-center justify-center gap-2 rounded-full border border-rb-border bg-white/80 px-4 py-3 text-sm font-medium text-rb-text2 lg:justify-self-end">
                <SlidersHorizontal className="h-4 w-4 text-brand-700" />
                {filteredProducts.length} katalog cocok
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-[30px] border border-rb-border bg-rb-surface/88 p-4 shadow-[0_16px_32px_rgba(110,67,48,0.06)] sm:p-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.96),rgba(243,232,221,0.94))] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-500">
              Explore Dulu
            </p>
            <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-brand-900">
              Satu katalog, lanjut ke item yang lebih spesifik
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-rb-text2">
              Dari sini user pilih game dulu, lalu masuk ke halaman item per game seperti alur store
              Roblox yang kamu minta.
            </p>
          </div>

          <div className="grid gap-3 xs:grid-cols-2 md:grid-cols-3">
            {featuredProducts.map((item) => (
              <div
                key={item.slug}
                className="overflow-hidden rounded-[24px] border border-rb-border bg-white shadow-[0_10px_24px_rgba(110,67,48,0.05)]"
              >
                <div
                  className="h-28"
                  style={{
                    background: `linear-gradient(145deg, ${item.accentFrom}, ${item.accentTo})`,
                  }}
                />
                <div className="p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-sm font-bold text-brand-900">{item.name}</h3>
                  <p className="mt-1 text-xs text-rb-text2">Mulai {item.priceFrom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Pilih Kategori
              </p>
              <h2 className="mt-2 font-heading text-[1.7rem] font-black tracking-tight text-brand-900 sm:text-[2rem]">
                Katalog game yang paling sering dicari
              </h2>
            </div>

            <div className="text-sm text-rb-text2">
              Menampilkan <span className="font-bold text-brand-900">{filteredProducts.length}</span>{" "}
              hasil dari{" "}
              <span className="font-bold text-brand-900">{productCatalog.length}</span> game terkurasi
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {productCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-sm font-semibold",
                  activeCategory === category
                    ? "border-brand-900 bg-brand-900 text-white shadow-[0_10px_20px_rgba(110,67,48,0.14)]"
                    : "border-rb-border bg-rb-surface text-brand-700"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((item) => (
            <ProductCard key={item.slug} item={item} />
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-8 rounded-[28px] border border-dashed border-rb-border bg-rb-surface px-6 py-10 text-center">
            <h3 className="font-heading text-xl font-bold text-brand-900">
              Belum ada game yang cocok
            </h3>
            <p className="mt-3 text-sm leading-7 text-rb-text2">
              Coba ganti kata kunci atau pindah kategori buat menemukan game yang paling sesuai
              dengan kebutuhanmu.
            </p>
          </div>
        ) : null}

        <div className="mt-10 rounded-[30px] border border-rb-border bg-[linear-gradient(135deg,rgba(110,67,48,0.96),rgba(168,116,90,0.94))] px-6 py-7 text-white shadow-[0_20px_36px_rgba(110,67,48,0.18)] sm:px-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Butuh Bantuan?
            </p>
            <h2 className="mt-2 font-heading text-2xl font-black tracking-tight sm:text-[2rem]">
              Belum ketemu game atau item yang kamu cari?
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/78 sm:text-[15px]">
              Tim kami siap bantu pilihkan katalog yang paling cocok, kasih rekomendasi item, dan
              arahkan kamu ke pembelian yang paling cepat.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
            >
              Kembali ke Landing
            </Link>
            <Link
              href="/#bantuan"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900"
            >
              Hubungi Bantuan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
