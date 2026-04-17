"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Search, Sparkles } from "lucide-react";
import {
  productCatalog,
  type ProductCatalogItem,
  type ProductDetailItem,
} from "@/data/productCatalog";

type ProductItemsPageProps = {
  product: ProductCatalogItem;
  items: ProductDetailItem[];
};

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function ItemThumb({
  product,
  item,
}: {
  product: ProductCatalogItem;
  item: ProductDetailItem;
}) {
  return (
    <div
      className="relative aspect-square overflow-hidden rounded-[22px] border border-white/60"
      style={{
        background: `linear-gradient(145deg, ${product.accentFrom}, ${product.accentTo})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.82),transparent_34%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_36%)]" />
      <div className="absolute -right-4 top-3 h-20 w-20 rounded-full bg-white/25 blur-xl" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white/84 shadow-[0_12px_24px_rgba(110,67,48,0.1)]">
          <Image
            src="/robux-icon.png"
            alt={`${item.title} icon`}
            width={42}
            height={42}
            className="object-contain"
          />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
            {product.name}
          </p>
          <h3 className="mt-1 font-heading text-lg font-black leading-tight text-white">
            {item.amount}
          </h3>
        </div>
      </div>
    </div>
  );
}

function ItemCard({
  product,
  item,
}: {
  product: ProductCatalogItem;
  item: ProductDetailItem;
}) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-rb-border bg-rb-surface p-3 shadow-[0_12px_26px_rgba(110,67,48,0.06)]">
      <ItemThumb product={product} item={item} />

      <div className="flex flex-1 flex-col px-1 pb-1 pt-3">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
            {product.category}
          </span>
        </div>

        <h3 className="font-heading text-[1.05rem] font-black leading-tight text-brand-900">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-rb-text2">{item.description}</p>

        <div className="mt-4">
          <p className="text-sm text-rb-text2 line-through">{formatRupiah(item.originalPrice)}</p>
          <p className="mt-1 font-heading text-2xl font-black text-brand-900">
            {formatRupiah(item.price)}
          </p>
        </div>

        <Link
          href={`/produk/${product.slug}/${item.id}`}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(110,67,48,0.14)]"
        >
          Lihat Detail
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

export default function ProductItemsPage({
  product,
  items,
}: ProductItemsPageProps) {
  const [query, setQuery] = useState("");
  const relatedGames = productCatalog
    .filter((entry) => entry.slug !== product.slug && entry.category === product.category)
    .slice(0, 5);

  const normalizedQuery = query.trim().toLowerCase();
  const filteredItems = items.filter((item) => {
    if (!normalizedQuery) return true;

    return [item.title, item.description, item.amount].some((value) =>
      value.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <section className="bg-rb-bg pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-rb-text2">
          <Link
            href="/produk"
            className="inline-flex items-center gap-2 rounded-full border border-rb-border bg-rb-surface px-4 py-2 font-semibold text-brand-700 shadow-[0_8px_18px_rgba(110,67,48,0.05)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Produk
          </Link>

          <div className="rounded-full bg-white px-4 py-2 shadow-[0_8px_18px_rgba(110,67,48,0.05)]">
            <span className="font-medium text-rb-text2">Beranda / Produk / </span>
            <span className="font-semibold text-brand-900">{product.name}</span>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-[28px] border border-rb-border bg-rb-surface p-5 shadow-[0_16px_28px_rgba(110,67,48,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Semua Produk
              </p>
              <div className="mt-4 space-y-2">
                <Link
                  href="/produk"
                  className="flex items-center justify-between rounded-2xl bg-brand-100 px-4 py-3 text-sm font-semibold text-brand-900"
                >
                  Kembali ke katalog
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {relatedGames.map((entry) => (
                  <Link
                    key={entry.slug}
                    href={`/produk/${entry.slug}`}
                    className="block rounded-2xl border border-rb-border bg-white px-4 py-3 text-sm font-medium text-rb-text2 transition-colors hover:border-brand-300 hover:text-brand-900"
                  >
                    {entry.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-5 shadow-[0_16px_28px_rgba(110,67,48,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Highlight
              </p>
              <h2 className="mt-3 font-heading text-xl font-black text-brand-900">
                {product.itemCount}+ item siap dipilih
              </h2>
              <p className="mt-2 text-sm leading-7 text-rb-text2">
                Pilih item dulu, lalu masuk ke detail produk untuk atur jumlah dan lanjut beli.
              </p>
            </div>
          </aside>

          <div className="space-y-6">
            <section
              className="relative overflow-hidden rounded-[32px] border border-rb-border px-5 py-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:px-7 sm:py-7"
              style={{
                background: `linear-gradient(135deg, ${product.accentFrom}14, rgba(255,253,252,0.96), ${product.accentTo}22)`,
              }}
            >
              <div className="pointer-events-none absolute inset-0">
                <div
                  className="absolute inset-y-0 right-0 w-[42%]"
                  style={{
                    background: `radial-gradient(circle at top right, ${product.glow}, transparent 68%)`,
                  }}
                />
                <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-white/50 blur-3xl" />
              </div>

              <div className="relative z-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
                    <Sparkles className="h-3.5 w-3.5" />
                    {product.category}
                  </span>
                  <h1 className="mt-4 font-heading text-[2rem] font-black leading-none tracking-tight text-brand-900 xs:text-[2.3rem] sm:text-[2.7rem]">
                    {product.name}
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
                    {product.description} Sekarang pilih item yang kamu butuhkan, lalu lanjut ke
                    halaman detail buat atur jumlah, simpan ke keranjang, atau beli langsung.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <div className="rounded-[22px] border border-rb-border bg-white/82 px-4 py-3 shadow-[0_8px_18px_rgba(110,67,48,0.05)]">
                      <p className="font-heading text-xl font-black text-brand-900">
                        {items.length}
                      </p>
                      <p className="text-xs font-medium text-rb-text2">Pilihan item</p>
                    </div>
                    <div className="rounded-[22px] border border-rb-border bg-white/82 px-4 py-3 shadow-[0_8px_18px_rgba(110,67,48,0.05)]">
                      <p className="font-heading text-xl font-black text-brand-900">
                        {product.priceFrom}
                      </p>
                      <p className="text-xs font-medium text-rb-text2">Harga awal</p>
                    </div>
                  </div>
                </div>

                <div className="w-full justify-self-start rounded-[28px] border border-rb-border bg-white/84 p-4 shadow-[0_12px_28px_rgba(110,67,48,0.08)] lg:w-auto lg:justify-self-end">
                  <label className="relative block">
                    <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-rb-text2" />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Cari item..."
                      className="h-12 w-full min-w-0 rounded-full border border-rb-border bg-white px-12 pr-4 text-sm text-brand-900 shadow-none placeholder:text-rb-text2 focus:border-brand-300 focus:outline-none lg:min-w-[220px]"
                    />
                  </label>
                  <p className="mt-3 text-xs leading-6 text-rb-text2">
                    Menampilkan <span className="font-semibold text-brand-900">{filteredItems.length}</span>{" "}
                    item untuk {product.name}
                  </p>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <ItemCard key={item.id} product={product} item={item} />
              ))}
            </div>

            {filteredItems.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-rb-border bg-rb-surface px-6 py-10 text-center">
                <h2 className="font-heading text-xl font-bold text-brand-900">
                  Item yang kamu cari belum ketemu
                </h2>
                <p className="mt-3 text-sm leading-7 text-rb-text2">
                  Coba ganti kata kunci atau lihat item lain di kategori {product.category}.
                </p>
              </div>
            ) : null}

            <section className="rounded-[30px] border border-rb-border bg-[linear-gradient(135deg,rgba(110,67,48,0.96),rgba(168,116,90,0.94))] px-6 py-7 text-white shadow-[0_20px_36px_rgba(110,67,48,0.18)] sm:px-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  Butuh Bantuan?
                </p>
                <h2 className="mt-2 font-heading text-2xl font-black tracking-tight sm:text-[2rem]">
                  Bingung pilih item yang paling cocok?
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/78 sm:text-[15px]">
                  Kami bisa bantu arahkan item yang paling pas buat kebutuhan akunmu sebelum kamu
                  lanjut checkout.
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-0">
                <Link
                  href="/#bantuan"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white"
                >
                  Hubungi Bantuan
                </Link>
                <Link
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-900"
                >
                  Lanjut ke Checkout
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
