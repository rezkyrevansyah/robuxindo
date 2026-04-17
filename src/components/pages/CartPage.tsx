import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import type { ProductCatalogItem, ProductDetailItem } from "@/data/productCatalog";

type CartPageProps =
  | {
      product: ProductCatalogItem;
      item: ProductDetailItem;
      quantity: number;
      isEmpty?: false;
    }
  | {
      isEmpty: true;
    };

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CartPage(props: CartPageProps) {
  if ("isEmpty" in props && props.isEmpty) {
    return (
      <section className="bg-rb-bg pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-rb-border bg-rb-surface p-8 text-center shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-brand-100 text-brand-700">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h1 className="mt-5 font-heading text-[1.9rem] font-black tracking-tight text-brand-900 sm:text-[2.3rem]">
              Keranjang kamu masih kosong
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
              Belum ada item yang masuk ke keranjang. Pilih produk dulu, lalu gunakan tombol
              tambah keranjang dari halaman detail item.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/produk"
                className="inline-flex items-center justify-center rounded-full border border-rb-border bg-white px-5 py-3 text-sm font-semibold text-brand-900 shadow-[0_8px_18px_rgba(110,67,48,0.05)]"
              >
                Lihat Produk
              </Link>
              <Link
                href="/beli-gamepass"
                className="inline-flex items-center justify-center rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(110,67,48,0.18)]"
              >
                Beli Gamepass
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { product, item, quantity } = props;
  const subtotal = item.price * quantity;
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
            href={`/produk/${product.slug}/${item.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-rb-border bg-rb-surface px-4 py-2 font-semibold text-brand-700 shadow-[0_8px_18px_rgba(110,67,48,0.05)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Detail
          </Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="rounded-[32px] border border-rb-border bg-rb-surface p-5 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  Keranjang
                </p>
                <h1 className="font-heading text-2xl font-black tracking-tight text-brand-900">
                  Daftar pesananmu
                </h1>
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-rb-border bg-white p-4 shadow-[0_10px_22px_rgba(110,67,48,0.05)] sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-brand-100/55">
                    <Image
                      src="/robux-icon.png"
                      alt={item.title}
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                      {product.name}
                    </p>
                    <h2 className="mt-1 font-heading text-xl font-black text-brand-900">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-rb-text2">{item.amount}</p>
                    <p className="mt-2 font-heading text-lg font-black text-brand-900">
                      {formatRupiah(item.price)}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-rb-border bg-rb-bg px-4 py-2 text-sm font-semibold text-rb-text2"
                >
                  <Trash2 className="h-4 w-4" />
                  Hapus
                </button>
              </div>

              <div className="mt-5 grid gap-3 border-t border-dashed border-rb-border pt-5 text-sm text-rb-text2 sm:grid-cols-3">
                <div>
                  <p>Jumlah</p>
                  <p className="mt-1 font-semibold text-brand-900">{quantity}</p>
                </div>
                <div>
                  <p>Status</p>
                  <p className="mt-1 font-semibold text-brand-900">Siap checkout</p>
                </div>
                <div>
                  <p>Subtotal</p>
                  <p className="mt-1 font-semibold text-brand-900">{formatRupiah(subtotal)}</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="xl:sticky xl:top-24 xl:self-start">
            <div className="overflow-hidden rounded-[30px] border border-rb-border bg-rb-surface shadow-[0_18px_34px_rgba(110,67,48,0.08)]">
              <div className="border-b border-rb-border px-5 py-5 sm:px-6">
                <h2 className="font-heading text-2xl font-black tracking-tight text-brand-900">
                  Ringkasan
                </h2>
              </div>

              <div className="space-y-5 px-5 py-5 sm:px-6">
                <div className="rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between text-rb-text2">
                      <span>Item</span>
                      <span className="font-semibold text-brand-900">{item.title}</span>
                    </div>
                    <div className="flex items-center justify-between text-rb-text2">
                      <span>Jumlah</span>
                      <span className="font-semibold text-brand-900">{quantity}</span>
                    </div>
                    <div className="border-t border-dashed border-rb-border pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-900">Total sementara</span>
                        <span className="font-heading text-2xl font-black text-brand-900">
                          {formatRupiah(subtotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href={checkoutHref}
                  className="inline-flex w-full items-center justify-center rounded-[22px] bg-brand-900 px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(110,67,48,0.18)]"
                >
                  Beli Sekarang
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
