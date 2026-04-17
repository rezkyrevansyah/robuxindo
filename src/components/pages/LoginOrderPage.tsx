"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  KeyRound,
  LockKeyhole,
  Mail,
  Phone,
  ShieldAlert,
  UserRound,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const steps = [
  { number: 1, label: "Order Via Login", active: true },
  { number: 2, label: "Pilih Nominal Robux", active: true },
  { number: 3, label: "Informasi Akun", active: true },
  { number: 4, label: "Metode Pembayaran", active: false },
  { number: 5, label: "Konfirmasi Order", active: false },
];

const backupPlaceholders = [
  "Kode Backup 1",
  "Kode Backup 2",
  "Kode Backup 3",
  "Kode Backup 4",
  "Kode Backup 5",
];

export default function LoginOrderPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [notificationEmail, setNotificationEmail] = useState("");
  const [backupCodes, setBackupCodes] = useState(["", "", "", "", ""]);

  const canContinue =
    username.trim().length >= 3 &&
    password.trim().length >= 6 &&
    phone.trim().length >= 8 &&
    backupCodes.every((code) => code.trim().length >= 4);

  const checkoutHref = "/checkout?game=sawah-indo&item=sawah-indo-rbx-100&qty=1";

  const handleBackupChange = (index: number, value: string) => {
    setBackupCodes((current) => {
      const next = [...current];
      next[index] = value;
      return next;
    });
  };

  return (
    <section className="bg-rb-bg pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[34px] border border-rb-border bg-rb-surface/92 px-4 py-5 shadow-[0_16px_34px_rgba(110,67,48,0.08)] sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Beli via Login
              </p>
              <h1 className="mt-2 font-heading text-[1.8rem] font-black tracking-tight text-brand-900 sm:text-[2.2rem]">
                Informasi Akun Pesanan
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
                const completedConnector = index < 3;

                return (
                  <div key={step.number} className="flex items-start lg:flex-1">
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
                          "text-[11px] font-semibold leading-4 lg:mt-2 lg:max-w-[94px]",
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

        <div className="mx-auto mt-8 max-w-4xl rounded-[34px] border border-rb-border bg-rb-surface px-5 py-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:px-8 sm:py-8">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
              Step 3
            </p>
            <h2 className="mt-3 font-heading text-[1.9rem] font-black tracking-tight text-brand-900 sm:text-[2.2rem]">
              Informasi Akun
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
              Isi detail akun Roblox dan semua kode backup yang dibutuhkan, lalu lanjut ke
              pembayaran tanpa flow berlapis.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                <UserRound className="h-4 w-4 text-brand-700" />
                Username Roblox
              </span>
              <Input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username Roblox"
                className="h-12 rounded-full border-rb-border bg-white px-5 text-sm text-brand-900 shadow-none focus-visible:border-brand-300"
              />
            </label>

            <label className="block">
              <span className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-brand-900">
                <LockKeyhole className="h-4 w-4 text-brand-700" />
                Password Roblox
              </span>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password Roblox"
                className="h-12 rounded-full border-rb-border bg-white px-5 text-sm text-brand-900 shadow-none focus-visible:border-brand-300"
              />
            </label>

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
                value={notificationEmail}
                onChange={(event) => setNotificationEmail(event.target.value)}
                placeholder="kamu@email.com"
                className="h-12 rounded-full border-rb-border bg-white px-5 text-sm text-brand-900 shadow-none focus-visible:border-brand-300"
              />
            </label>
          </div>

          <div className="mt-7">
            <h3 className="text-center text-base font-black text-brand-900 sm:text-lg">
              Masukkan Kode Backup (5 Buah)
            </h3>

            <div className="mt-5 space-y-3">
              {backupPlaceholders.map((placeholder, index) => (
                <label key={placeholder} className="block">
                  <div className="relative">
                    <ShieldAlert className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500" />
                    <Input
                      value={backupCodes[index]}
                      onChange={(event) => handleBackupChange(index, event.target.value)}
                      placeholder={placeholder}
                      className="h-12 rounded-full border-rb-border bg-white pl-12 pr-5 text-sm text-brand-900 shadow-none focus-visible:border-brand-300"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-7 rounded-[28px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.94))] p-5 shadow-[0_12px_24px_rgba(110,67,48,0.04)] sm:p-6">
            <p className="text-base font-black text-brand-900">Cara Buat Backup Code:</p>
            <ol className="mt-4 space-y-2 text-sm leading-7 text-rb-text2">
              <li>1. Buka aplikasi Roblox di HP kamu.</li>
              <li>2. Login ke akun lalu tekan ikon tiga titik di pojok kanan bawah.</li>
              <li>3. Scroll ke bawah lalu pilih Settings (Pengaturan).</li>
              <li>4. Masuk ke menu Security (Keamanan).</li>
              <li>5. Aktifkan 2-Step Verification memakai email atau authenticator.</li>
              <li>6. Setelah aktif, pilih menu Generate Backup Codes.</li>
              <li>7. Nantinya kode cadangan akan muncul.</li>
              <li>8. Simpan kode tersebut di catatan aman, screenshot, atau password manager.</li>
            </ol>

            <p className="mt-4 text-sm font-semibold text-[#d06a57]">
              Penting: kode cadangan cuma bisa ditampilkan sekali saat dibuat, jadi jangan sampai
              lupa simpan ya.
            </p>

            <div className="mt-5 flex justify-center sm:justify-start">
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(110,67,48,0.16)]"
              >
                <KeyRound className="h-4 w-4" />
                Lihat Video Tutorial
              </Link>
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
