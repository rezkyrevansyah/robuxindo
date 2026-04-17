"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  Check,
  ChevronRight,
  CreditCard,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  TicketPercent,
  Wallet,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  getProductDetailItems,
  type ProductCatalogItem,
  type ProductDetailItem,
} from "@/data/productCatalog";
import { cn } from "@/lib/utils";

type DeliveryOption = {
  id: string;
  title: string;
  description: string;
  eta: string;
  accent: string;
};

type PackageOption = {
  id: string;
  label: string;
  subtitle: string;
  amount: string;
  price: number;
  originalPrice: number;
  badge?: string;
};

type PaymentMethod = {
  id: string;
  name: string;
  description: string;
  fee: number;
  icon: typeof Wallet;
};

type CheckoutOrderPageProps = {
  product: ProductCatalogItem;
  initialItem?: {
    id?: string;
  };
  initialQuantity?: number;
};

const deliveryOptions: DeliveryOption[] = [
  {
    id: "standard",
    title: "Proses Reguler",
    description: "Paling hemat dan cocok buat pembelian santai.",
    eta: "5-15 menit",
    accent: "rgba(114,194,154,0.16)",
  },
  {
    id: "priority",
    title: "Proses Prioritas",
    description: "Masuk antrean cepat buat kamu yang mau lebih sat-set.",
    eta: "1-5 menit",
    accent: "rgba(242,166,90,0.18)",
  },
];

const paymentMethods: PaymentMethod[] = [
  {
    id: "qris",
    name: "QRIS",
    description: "Scan cepat dari e-wallet atau mobile banking.",
    fee: 1200,
    icon: Smartphone,
  },
  {
    id: "ewallet",
    name: "E-Wallet",
    description: "Dana, OVO, GoPay, ShopeePay, dan lainnya.",
    fee: 1500,
    icon: Wallet,
  },
  {
    id: "bank-transfer",
    name: "Transfer Bank",
    description: "Cocok untuk nominal besar dan pembelian stabil.",
    fee: 2500,
    icon: CreditCard,
  },
];

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function makePackages(_product: ProductCatalogItem, detailItems: ProductDetailItem[]): PackageOption[] {
  return detailItems.map((item) => ({
    id: item.id,
    label: item.title,
    subtitle: item.description,
    amount: item.amount,
    price: item.price,
    originalPrice: item.originalPrice,
    badge: item.badge,
  }));
}

export default function CheckoutOrderPage({
  product,
  initialItem,
  initialQuantity = 1,
}: CheckoutOrderPageProps) {
  const router = useRouter();
  const detailItems = getProductDetailItems(product);
  const packageOptions = makePackages(product, detailItems);
  const initialPackageId =
    initialItem?.id && packageOptions.some((option) => option.id === initialItem.id)
      ? initialItem.id
      : packageOptions[0].id;

  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0].id);
  const [selectedPackage, setSelectedPackage] = useState(initialPackageId);
  const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0].id);
  const [quantity] = useState(Math.max(1, initialQuantity));
  const [username, setUsername] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [voucher, setVoucher] = useState("");

  const packageChoice =
    packageOptions.find((option) => option.id === selectedPackage) ?? packageOptions[0];
  const paymentChoice =
    paymentMethods.find((method) => method.id === selectedPayment) ?? paymentMethods[0];
  const deliveryChoice =
    deliveryOptions.find((option) => option.id === selectedDelivery) ?? deliveryOptions[0];

  const packageSubtotal = packageChoice.price * quantity;
  const originalSubtotal = packageChoice.originalPrice * quantity;
  const discount = originalSubtotal - packageSubtotal;
  const serviceFee = selectedDelivery === "priority" ? 2500 : 0;
  const voucherCut = voucher.trim().toLowerCase() === "robuxindo" ? 2000 : 0;
  const totalPayment = packageSubtotal + paymentChoice.fee + serviceFee - voucherCut;

  const isFormReady =
    username.trim().length > 2 &&
    whatsApp.trim().length > 8 &&
    email.trim().includes("@");

  const handlePayNow = () => {
    if (!isFormReady) return;

    const now = new Date();
    const createdAt = now.toISOString();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString();
    const orderId = `RBX${product.slug.slice(0, 3).toUpperCase()}${String(now.getTime()).slice(-8)}`;
    const invoiceHref = `/invoice?${new URLSearchParams({
      game: product.slug,
      user: username.trim() || "itsmeyohanaa",
      email: email.trim() || "user@email.com",
      payment: paymentChoice.name,
      delivery: deliveryChoice.title,
      amount: packageChoice.amount,
      qty: String(quantity),
      total: String(totalPayment),
      order: orderId,
      created: createdAt,
      expires: expiresAt,
    }).toString()}`;

    router.push(invoiceHref);
  };

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

          <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-2 font-medium text-brand-700">
            <ShieldCheck className="h-4 w-4" />
            Checkout aman, cepat, dan satu halaman
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_360px]">
          <div className="space-y-6">
            <section className="relative overflow-hidden rounded-[30px] border border-rb-border bg-rb-surface px-5 py-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:px-6 lg:px-7">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_top_right,rgba(246,194,139,0.24),transparent_70%)]" />
                <div className="absolute inset-y-0 left-0 w-[30%] bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.8),transparent_72%)]" />
              </div>

              <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
                    Order Sekarang
                  </span>
                  <h1 className="mt-4 font-heading text-[2rem] font-black leading-none tracking-tight text-brand-900 xs:text-[2.3rem] sm:text-[2.65rem]">
                    Checkout {product.name} tanpa flow yang muter-muter
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
                    Semua kebutuhan order disatukan di satu halaman: pilih paket, isi akun, pilih
                    pembayaran, lalu langsung lanjut bayar.
                  </p>
                </div>

                <div className="rounded-[26px] border border-rb-border bg-white/88 p-4 shadow-[0_10px_24px_rgba(110,67,48,0.06)] sm:min-w-[250px]">
                  <div
                    className="relative overflow-hidden rounded-[22px] border border-white/60 p-4"
                    style={{
                      background: `linear-gradient(145deg, ${product.accentFrom}, ${product.accentTo})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_32%)]" />
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/82 shadow-[0_10px_20px_rgba(63,45,37,0.1)]">
                        <Image
                          src="/robux-icon.png"
                          alt="Robux Icon"
                          width={34}
                          height={34}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                          {product.category}
                        </p>
                        <h2 className="font-heading text-lg font-extrabold text-white">
                          {product.name}
                        </h2>
                        <p className="text-sm text-white/84">
                          {packageChoice.label} - {packageChoice.amount}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[30px] border border-rb-border bg-rb-surface p-5 shadow-[0_16px_30px_rgba(110,67,48,0.07)] sm:p-6">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                    1. Pilih Proses
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-brand-900">
                    Tentukan jenis layanan
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-rb-green-soft px-3 py-2 text-xs font-semibold text-[#2f7a58]">
                  <BadgeCheck className="h-4 w-4" />
                  Akun aman & proses jelas
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {deliveryOptions.map((option) => {
                  const active = option.id === selectedDelivery;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedDelivery(option.id)}
                      className={cn(
                        "rounded-[24px] border p-4 text-left shadow-[0_8px_20px_rgba(110,67,48,0.04)]",
                        active ? "border-[#72C29A] bg-[#effaf4]" : "border-rb-border bg-white"
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-heading text-lg font-bold text-brand-900">
                            {option.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-rb-text2">{option.description}</p>
                        </div>
                        <span
                          className="mt-1 h-11 w-11 rounded-2xl"
                          style={{ backgroundColor: option.accent }}
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-sm font-semibold text-brand-700">{option.eta}</span>
                        {active ? (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-900 text-white">
                            <Check className="h-4 w-4" />
                          </span>
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[30px] border border-rb-border bg-rb-surface p-5 shadow-[0_16px_30px_rgba(110,67,48,0.07)] sm:p-6">
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  2. Detail Akun
                </p>
                <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-brand-900">
                  Isi data penerima
                </h2>
                <p className="mt-2 text-sm leading-7 text-rb-text2">
                  Masukkan data yang aktif supaya proses dan notifikasi order lebih lancar.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900">Username Roblox</label>
                  <Input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Contoh: itsmeyohanaa"
                    className="h-12 rounded-2xl border-rb-border bg-white px-4 text-sm shadow-none focus-visible:border-brand-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-900">Nomor WhatsApp</label>
                  <Input
                    value={whatsApp}
                    onChange={(event) => setWhatsApp(event.target.value)}
                    placeholder="08xxxxxxxxxx"
                    className="h-12 rounded-2xl border-rb-border bg-white px-4 text-sm shadow-none focus-visible:border-brand-300"
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-semibold text-brand-900">Email Notifikasi</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="kamu@email.com"
                    className="h-12 rounded-2xl border-rb-border bg-white px-4 text-sm shadow-none focus-visible:border-brand-300"
                  />
                </div>
              </div>
            </section>

            <section className="rounded-[30px] border border-rb-border bg-rb-surface p-5 shadow-[0_16px_30px_rgba(110,67,48,0.07)] sm:p-6">
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  3. Pilih Paket
                </p>
                <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-brand-900">
                  Ambil nominal atau bundle terbaik
                </h2>
              </div>

              <div className="grid gap-3 xs:grid-cols-2 xl:grid-cols-3">
                {packageOptions.map((option) => {
                  const active = option.id === selectedPackage;

                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setSelectedPackage(option.id)}
                      className={cn(
                        "relative overflow-hidden rounded-[24px] border p-4 text-left shadow-[0_10px_22px_rgba(110,67,48,0.05)]",
                        active ? "border-brand-900 bg-brand-100/50" : "border-rb-border bg-white"
                      )}
                    >
                      {option.badge ? (
                        <span className="absolute left-0 top-0 rounded-br-2xl rounded-tl-[22px] bg-rb-orange px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                          {option.badge}
                        </span>
                      ) : null}

                      <div className={cn("pt-4", option.badge ? "pt-7" : "")}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-heading text-lg font-bold text-brand-900">
                              {option.amount}
                            </p>
                            <p className="mt-1 text-sm text-rb-text2">{option.label}</p>
                          </div>
                          {active ? (
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white">
                              <Check className="h-4 w-4" />
                            </span>
                          ) : null}
                        </div>

                        <div className="mt-4 border-t border-dashed border-rb-border pt-4">
                          <p className="text-sm text-rb-text2 line-through">
                            {formatRupiah(option.originalPrice)}
                          </p>
                          <p className="mt-1 font-heading text-2xl font-extrabold text-brand-900">
                            {formatRupiah(option.price)}
                          </p>
                          <p className="mt-1 text-xs font-medium text-rb-text2">{option.subtitle}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[30px] border border-rb-border bg-rb-surface p-5 shadow-[0_16px_30px_rgba(110,67,48,0.07)] sm:p-6">
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                  4. Pembayaran
                </p>
                <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-brand-900">
                  Pilih metode bayar yang paling nyaman
                </h2>
              </div>

              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const active = method.id === selectedPayment;

                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setSelectedPayment(method.id)}
                      className={cn(
                        "flex w-full items-center gap-4 rounded-[24px] border p-4 text-left shadow-[0_8px_18px_rgba(110,67,48,0.04)]",
                        active ? "border-brand-900 bg-brand-100/45" : "border-rb-border bg-white"
                      )}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                        <method.icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-heading text-lg font-bold text-brand-900">
                            {method.name}
                          </p>
                          <p className="text-sm font-semibold text-brand-700">
                            +{formatRupiah(method.fee)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-rb-text2">{method.description}</p>
                      </div>
                      {active ? (
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-900 text-white">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="space-y-2">
                  <label className="inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                    <TicketPercent className="h-4 w-4 text-brand-700" />
                    Promo / Voucher
                  </label>
                  <Input
                    value={voucher}
                    onChange={(event) => setVoucher(event.target.value)}
                    placeholder="Masukkan kode promo, contoh: ROBUXINDO"
                    className="h-12 rounded-2xl border-rb-border bg-white px-4 text-sm shadow-none focus-visible:border-brand-300"
                  />
                </div>
                <div className="rounded-[22px] border border-rb-border bg-brand-100/50 px-4 py-3 text-sm font-medium text-brand-700">
                  Gunakan kode <span className="font-black">ROBUXINDO</span> buat potongan demo
                </div>
              </div>
            </section>
          </div>

          <aside className="xl:sticky xl:top-24 xl:self-start">
            <div className="overflow-hidden rounded-[30px] border border-rb-border bg-rb-surface shadow-[0_18px_34px_rgba(110,67,48,0.08)]">
              <div className="border-b border-rb-border px-5 py-5 sm:px-6">
                <h2 className="font-heading text-2xl font-black tracking-tight text-brand-900">
                  Ringkasan Order
                </h2>
                <p className="mt-2 text-sm leading-6 text-rb-text2">
                  Semua detail belanja kamu langsung kebaca di sini.
                </p>
              </div>

              <div className="space-y-5 px-5 py-5 sm:px-6">
                <div className="rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_10px_18px_rgba(110,67,48,0.08)]">
                      <Image
                        src="/robux-icon.png"
                        alt="Robux Icon"
                        width={30}
                        height={30}
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                        {product.category}
                      </p>
                      <h3 className="mt-1 font-heading text-lg font-bold text-brand-900">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-rb-text2">
                        {packageChoice.amount} x {quantity}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm text-rb-text2">
                    <div className="flex items-center justify-between">
                      <span>Jumlah</span>
                      <span className="font-semibold text-brand-900">{quantity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>User</span>
                      <span className="font-semibold text-brand-900">
                        {username.trim() || "Belum diisi"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Proses</span>
                      <span className="font-semibold text-brand-900">{deliveryChoice.title}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Pembayaran</span>
                      <span className="font-semibold text-brand-900">{paymentChoice.name}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-rb-border bg-white p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between text-rb-text2">
                      <span>Harga paket</span>
                      <span className="font-semibold text-brand-900">
                        {formatRupiah(packageSubtotal)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-rb-text2">
                      <span>Biaya metode bayar</span>
                      <span className="font-semibold text-brand-900">
                        {formatRupiah(paymentChoice.fee)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-rb-text2">
                      <span>Biaya prioritas</span>
                      <span className="font-semibold text-brand-900">
                        {serviceFee ? formatRupiah(serviceFee) : "Gratis"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-rb-text2">
                      <span>Diskon hemat</span>
                      <span className="font-semibold text-[#2f7a58]">
                        -{formatRupiah(discount)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-rb-text2">
                      <span>Potongan voucher</span>
                      <span className="font-semibold text-[#2f7a58]">
                        -{formatRupiah(voucherCut)}
                      </span>
                    </div>
                    <div className="border-t border-dashed border-rb-border pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-900">Total pembayaran</span>
                        <span className="font-heading text-2xl font-black text-brand-900">
                          {formatRupiah(totalPayment)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-rb-border bg-brand-100/45 p-4 text-sm text-rb-text2">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-900">Notifikasi order aktif</p>
                      <p className="mt-1 leading-6">
                        Status pembelian akan dikirim ke email dan WhatsApp yang kamu isi.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePayNow}
                  disabled={!isFormReady}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-[22px] px-5 py-4 text-sm font-semibold shadow-[0_14px_24px_rgba(110,67,48,0.18)]",
                    isFormReady
                      ? "bg-brand-900 text-white"
                      : "cursor-not-allowed bg-brand-300/60 text-white/85 shadow-none"
                  )}
                >
                  Bayar Sekarang
                  <ChevronRight className="h-4 w-4" />
                </button>

                <p className="text-center text-xs leading-6 text-rb-text2">
                  Dengan melanjutkan pembayaran, kamu menyetujui ringkasan order dan metode proses
                  yang dipilih.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
