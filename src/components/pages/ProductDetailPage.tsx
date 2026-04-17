"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Sparkles,
  Truck,
} from "lucide-react";
import type { ProductCatalogItem, ProductDetailItem } from "@/data/productCatalog";

type ProductDetailPageProps = {
  product: ProductCatalogItem;
  item: ProductDetailItem;
  relatedItems: ProductDetailItem[];
};

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function SmallItemCard({
  product,
  item,
}: {
  product: ProductCatalogItem;
  item: ProductDetailItem;
}) {
  return (
    <article className="rounded-[26px] border border-rb-border bg-rb-surface p-3 shadow-[0_12px_24px_rgba(110,67,48,0.06)]">
      <div
        className="relative aspect-square overflow-hidden rounded-[22px] border border-white/60"
        style={{
          background: `linear-gradient(145deg, ${product.accentFrom}, ${product.accentTo})`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.84),transparent_34%)]" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white/84 shadow-[0_12px_24px_rgba(110,67,48,0.1)]">
            <Image
              src="/robux-icon.png"
              alt={`${item.title} icon`}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="px-1 pb-1 pt-3">
        <h3 className="font-heading text-base font-black leading-tight text-brand-900">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-rb-text2">{item.amount}</p>
        <p className="mt-3 font-heading text-lg font-black text-brand-900">
          {formatRupiah(item.price)}
        </p>
        <Link
          href={`/produk/${product.slug}/${item.id}`}
          className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-rb-border bg-white px-4 py-2.5 text-sm font-semibold text-brand-900"
        >
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}

export default function ProductDetailPage({
  product,
  item,
  relatedItems,
}: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = item.price * quantity;
  const cartHref = `/cart?${new URLSearchParams({
    game: product.slug,
    item: item.id,
    qty: String(quantity),
  }).toString()}`;
  const checkoutHref = `/checkout?${new URLSearchParams({
    game: product.slug,
    item: item.id,
    qty: String(quantity),
  }).toString()}`;

  return (
    <section className="bg-rb-bg pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-rb-text2">
          <Link
            href={`/produk/${product.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-rb-border bg-rb-surface px-4 py-2 font-semibold text-brand-700 shadow-[0_8px_18px_rgba(110,67,48,0.05)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Item
          </Link>

          <div className="rounded-full bg-white px-4 py-2 shadow-[0_8px_18px_rgba(110,67,48,0.05)]">
            <span className="font-medium text-rb-text2">Produk / {product.name} / </span>
            <span className="font-semibold text-brand-900">{item.title}</span>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
          <section
            className="relative overflow-hidden rounded-[32px] border border-rb-border p-5 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:p-6"
            style={{
              background: `linear-gradient(145deg, ${product.accentFrom}16, rgba(255,253,252,0.98), ${product.accentTo}24)`,
            }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.82),transparent_36%)]" />
            <div className="relative z-10">
              <div
                className="relative overflow-hidden rounded-[28px] border border-white/60"
                style={{
                  background: `linear-gradient(145deg, ${product.accentFrom}, ${product.accentTo})`,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.84),transparent_34%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_32%)]" />
                <div className="relative z-10 flex aspect-square items-center justify-center p-8">
                  <div className="flex h-44 w-44 items-center justify-center rounded-[36px] bg-white/86 shadow-[0_18px_34px_rgba(110,67,48,0.12)]">
                    <Image
                      src="/robux-icon.png"
                      alt={item.title}
                      width={92}
                      height={92}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-[24px] border border-rb-border bg-white/84 p-4 shadow-[0_10px_22px_rgba(110,67,48,0.05)]">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-900">Catatan penting</p>
                    <p className="mt-2 text-sm leading-7 text-rb-text2">
                      Produk diproses sesuai stok aktif. Untuk item atau pass khusus, pastikan data
                      akun yang kamu isi nanti benar supaya proses lebih cepat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[32px] border border-rb-border bg-rb-surface p-5 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                {product.category}
              </span>
              {item.badge ? (
                <span className="rounded-full bg-rb-orange px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                  {item.badge}
                </span>
              ) : null}
            </div>

            <h1 className="mt-4 font-heading text-[2rem] font-black leading-none tracking-tight text-brand-900 xs:text-[2.25rem] sm:text-[2.8rem]">
              {item.title}
            </h1>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  Harga Item
                </p>
                <p className="mt-3 text-sm text-rb-text2 line-through">
                  {formatRupiah(item.originalPrice)}
                </p>
                <p className="mt-1 font-heading text-3xl font-black text-brand-900">
                  {formatRupiah(item.price)}
                </p>
              </div>

              <div className="rounded-[24px] border border-rb-border bg-white p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  Total Terjual
                </p>
                <p className="mt-3 font-heading text-3xl font-black text-brand-900">
                  {item.badge ? "1.2k+" : "540+"}
                </p>
                <p className="mt-1 text-sm text-rb-text2">Item ini termasuk yang paling sering dipilih.</p>
              </div>
            </div>

            <div className="mt-6 rounded-[26px] border border-rb-border bg-white p-4 sm:p-5">
              <p className="text-sm font-semibold text-brand-900">Catatan:</p>
              <div className="mt-3 flex items-start gap-3 rounded-[22px] bg-rb-bg px-4 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Truck className="h-4 w-4" />
                </div>
                <p className="text-sm leading-7 text-rb-text2">
                  Produk ini diproses manual maupun semi otomatis tergantung jenis item. Pastikan
                  username, email, dan kontak aktif saat checkout supaya notifikasi lebih cepat masuk.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-end">
              <div>
                <p className="text-sm font-semibold text-brand-900">Jumlah</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-rb-border bg-white p-1 shadow-[0_8px_18px_rgba(110,67,48,0.05)]">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-brand-900 transition-colors hover:bg-brand-100"
                    aria-label="Kurangi jumlah"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 px-3 text-center font-heading text-xl font-black text-brand-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-brand-900 transition-colors hover:bg-brand-100"
                    aria-label="Tambah jumlah"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  Total Harga
                </p>
                <p className="mt-2 font-heading text-3xl font-black text-brand-900">
                  {formatRupiah(totalPrice)}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={cartHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand-300 bg-white px-5 py-3.5 text-sm font-semibold text-brand-900 shadow-[0_10px_18px_rgba(110,67,48,0.06)] sm:w-auto"
              >
                <ShoppingCart className="h-4 w-4" />
                Tambah Keranjang
              </Link>
              <Link
                href={checkoutHref}
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(110,67,48,0.16)] sm:w-auto"
              >
                Beli Langsung
              </Link>
            </div>
          </section>
        </div>

        {relatedItems.length > 0 ? (
          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  Produk Serupa
                </p>
                <h2 className="mt-2 font-heading text-[1.85rem] font-black tracking-tight text-brand-900">
                  Item lain dari {product.name}
                </h2>
              </div>
              <Link
                href={`/produk/${product.slug}`}
                className="hidden rounded-full border border-rb-border bg-white px-4 py-2 text-sm font-semibold text-brand-900 sm:inline-flex"
              >
                Lihat semua item
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 xl:grid-cols-4">
              {relatedItems.map((entry) => (
                <SmallItemCard key={entry.id} product={product} item={entry} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </section>
  );
}
