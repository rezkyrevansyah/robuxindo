"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  PackageOpen,
  Phone,
  UserRound,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, label: "Order Gamepass", active: true },
  { number: 2, label: "Detail Informasi", active: true },
  { number: 3, label: "Buat Gamepass", active: false },
  { number: 4, label: "Metode Pembayaran", active: false },
  { number: 5, label: "Konfirmasi Order", active: false },
];

const minAmount = 50;
const maxAmount = 500;
const pricePerUnit = 4806 / 50;

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function GamepassOrderPage() {
  const [username, setUsername] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(minAmount);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const price = useMemo(
    () => Math.round(selectedAmount * pricePerUnit),
    [selectedAmount]
  );
  const canContinue = username.trim().length >= 3 && phone.trim().length >= 8;
  const checkoutHref = `/checkout?game=sawah-indo&item=sawah-indo-rbx-100&qty=1`;

  const handleAmountChange = (value: string) => {
    const numericValue = Number(value.replace(/[^\d]/g, ""));

    if (Number.isNaN(numericValue)) {
      setSelectedAmount(minAmount);
      return;
    }

    setSelectedAmount(Math.min(maxAmount, Math.max(minAmount, numericValue)));
  };

  return (
    <section className="bg-rb-bg pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-rb-border bg-rb-surface/92 px-4 py-5 shadow-[0_16px_34px_rgba(110,67,48,0.08)] sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Beli Gamepass
              </p>
              <h1 className="mt-2 font-heading text-[1.8rem] font-black tracking-tight text-brand-900 sm:text-[2.2rem]">
                Detail Informasi Pesanan
              </h1>
            </div>

            <Link
              href="/produk"
              className="inline-flex items-center gap-2 rounded-full border border-rb-border bg-white px-4 py-2.5 text-sm font-semibold text-brand-900 shadow-[0_8px_18px_rgba(110,67,48,0.05)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Produk
            </Link>
          </div>

          <div className="mt-7">
            <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:items-start lg:justify-center lg:px-3">
              {steps.map((step, index) => {
                const completedConnector = index < 2;

                return (
                  <div
                    key={step.number}
                    className="flex items-start lg:flex-1"
                  >
                    <div className="flex w-full items-center gap-3 rounded-2xl border border-rb-border bg-white/80 px-3 py-3 text-left lg:flex-col lg:items-center lg:gap-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-center">
                      <div
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold",
                          step.active
                            ? "border-rb-orange bg-rb-orange text-white"
                            : "border-rb-border bg-white text-rb-text2"
                        )}
                      >
                        {step.number}
                      </div>
                      <p
                        className={cn(
                          "text-[11px] font-semibold leading-4 lg:mt-2 lg:max-w-[88px]",
                          step.active ? "text-brand-900" : "text-rb-text2"
                        )}
                      >
                        {step.label}
                      </p>
                    </div>

                    {index < steps.length - 1 ? (
                      <div className="mt-[18px] hidden h-[2px] flex-1 bg-rb-border lg:block">
                        <div
                          className={cn(
                            "h-full",
                            completedConnector ? "bg-rb-orange" : "bg-rb-border"
                          )}
                        />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-[34px] border border-rb-border bg-rb-surface px-5 py-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:px-8 sm:py-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
              Step 2
            </p>
            <h2 className="mt-3 font-heading text-[1.9rem] font-black tracking-tight text-brand-900 sm:text-[2.2rem]">
              Detail Informasi
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
              Isi data akun, pilih jumlah gamepass, lalu lanjutkan ke proses berikutnya dengan
              tampilan yang rapi dan langsung kebaca seperti checkout store.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <label className="block">
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                <UserRound className="h-4 w-4 text-brand-700" />
                Username Roblox
              </span>
              <Input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Masukkan username Roblox"
                className="h-12 rounded-full border-rb-border bg-white px-5 text-sm text-brand-900 shadow-none focus-visible:border-brand-300"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-[220px_minmax(0,1fr)]">
              <div className="space-y-2">
                <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                  <PackageOpen className="h-4 w-4 text-brand-700" />
                  Jumlah
                </span>
                <div className="relative">
                  <PackageOpen className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500" />
                  <Input
                    inputMode="numeric"
                    value={selectedAmount}
                    onChange={(event) => handleAmountChange(event.target.value)}
                    className="h-12 rounded-full border-rb-border bg-white pl-12 pr-5 text-sm font-semibold text-brand-900 shadow-none focus-visible:border-brand-300"
                  />
                </div>
              </div>

              <label className="block">
                <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                  <PackageOpen className="h-4 w-4 text-brand-700" />
                  Nominal Harga
                </span>
                <div className="flex h-12 items-center rounded-full border border-rb-border bg-white px-5 text-sm font-semibold text-brand-900">
                  {formatRupiah(price)}
                </div>
              </label>
            </div>

            <div className="pt-1">
              <input
                type="range"
                min={minAmount}
                max={maxAmount}
                step={10}
                value={selectedAmount}
                onChange={(event) => handleAmountChange(event.target.value)}
                className="h-2.5 w-full cursor-pointer appearance-none rounded-full bg-brand-100 accent-rb-orange"
              />
              <div className="mt-3 flex items-center justify-between text-xs font-medium text-rb-text2">
                <span>{minAmount}</span>
                <span>{selectedAmount}</span>
                <span>{maxAmount}</span>
              </div>
            </div>

            <label className="block">
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                <Phone className="h-4 w-4 text-brand-700" />
                Nomor WhatsApp
              </span>
              <div className="flex h-12 overflow-hidden rounded-full border border-rb-border bg-white">
                <div className="flex items-center border-r border-rb-border px-4 text-sm font-semibold text-brand-900">
                  +62
                </div>
                <Input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="812xxxxxxx"
                  className="h-full border-0 px-4 shadow-none focus-visible:ring-0"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                <Mail className="h-4 w-4 text-brand-700" />
                Email Notifikasi (Opsional)
              </span>
              <Input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="kamu@email.com"
                className="h-12 rounded-full border-rb-border bg-white px-5 text-sm text-brand-900 shadow-none focus-visible:border-brand-300"
              />
            </label>
          </div>

          <div className="mt-7 rounded-[28px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.94))] p-5 shadow-[0_12px_24px_rgba(110,67,48,0.04)] sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <PackageOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-900">Catatan:</p>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-rb-text2">
                  <li>Robux gamepass membutuhkan waktu diproses sesuai antrean aktif.</li>
                  <li>Akun akan mulai diproses setelah pembayaran berhasil terverifikasi.</li>
                  <li>Pastikan username Roblox dan nomor WhatsApp yang kamu isi benar.</li>
                  <li>Estimasi aman pengiriman berada di kisaran 5-7 hari sesuai jenis order.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/produk"
              className="inline-flex w-full items-center justify-center rounded-full border border-rb-border bg-white px-6 py-3 text-sm font-semibold text-brand-900 shadow-[0_8px_18px_rgba(110,67,48,0.05)] sm:w-auto sm:min-w-[170px]"
            >
              Kembali
            </Link>
            <Link
              href={canContinue ? checkoutHref : "#"}
              aria-disabled={!canContinue}
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold sm:w-auto sm:min-w-[170px]",
                canContinue
                  ? "bg-brand-900 text-white shadow-[0_14px_24px_rgba(110,67,48,0.16)]"
                  : "cursor-not-allowed bg-brand-300/60 text-white/85"
              )}
            >
              Lanjutkan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
