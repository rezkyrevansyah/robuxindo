"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Clock3,
  Copy,
  CreditCard,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import type { ProductCatalogItem } from "@/data/productCatalog";
import { cn } from "@/lib/utils";

type InvoiceStatusPageProps = {
  product: ProductCatalogItem;
  username: string;
  email: string;
  paymentMethod: string;
  deliveryMethod: string;
  amount: string;
  totalPayment: number;
  orderId: string;
  createdAt: string;
  expiresAt: string;
};

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(dateString));
}

function getRemainingTime(target: string) {
  const diff = new Date(target).getTime() - Date.now();

  if (diff <= 0) {
    return { expired: true, hours: "00", minutes: "00", seconds: "00" };
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return {
    expired: false,
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

const statusSteps = [
  { label: "Pesanan Dibuat", active: true, icon: PackageCheck },
  { label: "Menunggu Bayar", active: true, icon: CreditCard },
  { label: "Sedang Diproses", active: false, icon: Clock3 },
  { label: "Selesai", active: false, icon: CheckCircle2 },
];

export default function InvoiceStatusPage({
  product,
  username,
  email,
  paymentMethod,
  deliveryMethod,
  amount,
  totalPayment,
  orderId,
  createdAt,
  expiresAt,
}: InvoiceStatusPageProps) {
  const [remainingTime, setRemainingTime] = useState(() => getRemainingTime(expiresAt));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingTime(getRemainingTime(expiresAt));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [expiresAt]);

  return (
    <section className="bg-rb-bg pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          <div className="overflow-hidden rounded-[30px] border border-rb-border bg-[linear-gradient(135deg,#f4b740,#f2a65a)] px-5 py-5 text-white shadow-[0_18px_34px_rgba(244,183,64,0.28)] sm:px-6 sm:py-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/80">
                  Menunggu Pembayaran
                </p>
                <h1 className="mt-2 font-heading text-[1.9rem] font-black leading-none tracking-tight sm:text-[2.3rem]">
                  Selesaikan pembayaran sebelum timer habis
                </h1>
                <p className="mt-3 text-sm leading-7 text-white/88 sm:text-[15px]">
                  Pesanan kamu sudah tercatat. Tinggal lanjut bayar dan status akan otomatis berubah
                  ke proses setelah pembayaran masuk.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/20 bg-white/14 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                  <Clock3 className="h-4 w-4" />
                  Batas waktu pembayaran
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: "Jam", value: remainingTime.hours },
                    { label: "Menit", value: remainingTime.minutes },
                    { label: "Detik", value: remainingTime.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[18px] bg-brand-dark/30 px-3 py-3 text-center shadow-[0_10px_20px_rgba(63,45,37,0.18)]"
                    >
                      <p className="font-heading text-2xl font-black">{item.value}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/74">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-rb-border bg-rb-surface p-4 shadow-[0_16px_30px_rgba(110,67,48,0.08)] sm:p-5">
            <div className="relative">
              <div className="absolute left-[calc(12.5%+1.4rem)] right-[calc(12.5%+1.4rem)] top-[1.38rem] hidden h-[2px] bg-rb-border xl:block" />
              <div className="absolute left-[calc(12.5%+1.4rem)] right-[calc(62.5%+1.4rem)] top-[1.38rem] hidden h-[2px] bg-brand-900 xl:block" />

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {statusSteps.map((step) => (
                  <div
                    key={step.label}
                    className="relative z-10 rounded-[24px] border border-rb-border bg-white p-4 text-center shadow-[0_8px_18px_rgba(110,67,48,0.04)] xl:border-0 xl:bg-transparent xl:p-0 xl:shadow-none"
                  >
                    <div
                      className={cn(
                        "mx-auto flex h-11 w-11 items-center justify-center rounded-full border",
                        step.active
                          ? "border-brand-900 bg-brand-900 text-white"
                          : "border-rb-border bg-white text-rb-text2"
                      )}
                    >
                      <step.icon className="h-4.5 w-4.5" />
                    </div>
                    <p
                      className={cn(
                        "mt-3 text-sm font-semibold",
                        step.active ? "text-brand-900" : "text-rb-text2"
                      )}
                    >
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_360px]">
            <div className="space-y-6">
              <section className="overflow-hidden rounded-[30px] border border-rb-border bg-rb-surface shadow-[0_18px_34px_rgba(110,67,48,0.08)]">
                <div className="flex flex-col gap-3 border-b border-rb-border px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                      Detail Transaksi
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-brand-900">
                      Invoice #{orderId}
                    </h2>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full border border-rb-border bg-white px-4 py-2 text-sm font-semibold text-brand-700"
                  >
                    <Copy className="h-4 w-4" />
                    Copy ID
                  </button>
                </div>

                <div className="space-y-5 px-5 py-5 sm:px-6">
                  <div className="rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-white shadow-[0_12px_22px_rgba(110,67,48,0.08)]">
                        <Image
                          src="/robux-icon.png"
                          alt="Robux Icon"
                          width={34}
                          height={34}
                          className="object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                          {product.category}
                        </p>
                        <h3 className="mt-1 font-heading text-xl font-bold text-brand-900">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-brand-700">{amount}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-full bg-rb-green-soft px-3 py-1 text-xs font-semibold text-[#2f7a58]">
                            Pasti masuk
                          </span>
                          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                            Proses cepat
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 rounded-[24px] border border-rb-border bg-white p-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rb-text2">
                        Username
                      </p>
                      <p className="mt-2 text-base font-semibold text-brand-900">{username}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rb-text2">
                        Waktu Order
                      </p>
                      <p className="mt-2 text-base font-semibold text-brand-900">
                        {formatDate(createdAt)}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rb-text2">
                        Metode Proses
                      </p>
                      <p className="mt-2 text-base font-semibold text-brand-900">
                        {deliveryMethod}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rb-text2">
                        Email Notifikasi
                      </p>
                      <p className="mt-2 text-base font-semibold text-brand-900">{email}</p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-rb-border bg-brand-dark px-5 py-4 text-white">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                          Total Pembayaran
                        </p>
                        <p className="mt-2 font-heading text-[1.8rem] font-black">
                          {formatRupiah(totalPayment)}
                        </p>
                      </div>
                      <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/82">
                        Menunggu bayar
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[30px] border border-rb-border bg-rb-surface px-5 py-5 shadow-[0_16px_30px_rgba(110,67,48,0.08)] sm:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                      Ada masalah?
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-brand-900">
                      Tim support siap bantu order kamu
                    </h2>
                  </div>

                  <Link
                    href="/#bantuan"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white"
                  >
                    Hubungi Support
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>
            </div>

            <aside className="xl:sticky xl:top-24 xl:self-start">
              <div className="space-y-5 rounded-[30px] border border-rb-border bg-rb-surface p-5 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:p-6">
                <div className="rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                        Metode Pembayaran
                      </p>
                      <p className="mt-1 font-heading text-xl font-bold text-brand-900">
                        {paymentMethod}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-rb-border bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-rb-green-soft text-[#2f7a58]">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-900">Pembayaran terverifikasi</p>
                      <p className="mt-1 text-sm leading-6 text-rb-text2">
                        Setelah pembayaran berhasil, status akan otomatis berpindah ke proses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-rb-border bg-white p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                    Langkah Selanjutnya
                  </p>
                  <ul className="mt-3 space-y-3 text-sm leading-6 text-rb-text2">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                        1
                      </span>
                      Selesaikan pembayaran sebelum timer habis.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                        2
                      </span>
                      Tim kami akan memproses pesanan sesuai metode proses yang kamu pilih.
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                        3
                      </span>
                      Status selesai akan dikirim ke email dan bisa dicek kembali lewat invoice.
                    </li>
                  </ul>
                </div>

                <Link
                  href="#"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[22px] bg-brand-900 px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(110,67,48,0.18)]"
                >
                  Bayar Sekarang
                  <ChevronRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/produk"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[22px] border border-rb-border bg-white px-5 py-4 text-sm font-semibold text-brand-900"
                >
                  Belanja Produk Lain
                </Link>

                {remainingTime.expired ? (
                  <p className="text-center text-xs font-semibold text-[#b85b41]">
                    Waktu pembayaran sudah habis. Silakan buat pesanan baru jika ingin melanjutkan.
                  </p>
                ) : (
                  <div className="rounded-[24px] border border-rb-border bg-brand-100/45 p-4 text-sm text-rb-text2">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-700">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-900">Status realtime aktif</p>
                        <p className="mt-1 leading-6">
                          Simpan halaman ini untuk memantau perubahan status pesananmu.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
