"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CreditCard, Mail, Phone, ShieldCheck, ShoppingBag, UserRound } from "lucide-react";
import { getMockAuthUser, subscribeMockAuth, type MockAuthUser } from "@/lib/mock-auth";

const activityCards = [
  { label: "Status Akun", value: "Aktif", icon: ShieldCheck },
  { label: "Pesanan Tersimpan", value: "12 Order", icon: ShoppingBag },
  { label: "Metode Favorit", value: "QRIS", icon: CreditCard },
];

export default function UserProfilePage() {
  const [user, setUser] = useState<MockAuthUser | null>(null);

  useEffect(() => {
    const sync = () => setUser(getMockAuthUser());
    sync();
    return subscribeMockAuth(sync);
  }, []);

  if (!user) {
    return (
      <section className="bg-rb-bg pb-16 pt-8 sm:pb-20 sm:pt-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-rb-border bg-rb-surface p-8 text-center shadow-[0_18px_34px_rgba(110,67,48,0.08)] sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[24px] bg-brand-100 text-brand-700">
              <UserRound className="h-7 w-7" />
            </div>
            <h1 className="mt-5 font-heading text-[2rem] font-black tracking-tight text-brand-900">
              Kamu belum login
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
              Masuk dulu untuk melihat detail akun, data profil, dan aktivitas belanja Roblox kamu.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_24px_rgba(110,67,48,0.16)]"
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full border border-rb-border bg-white px-5 py-3 text-sm font-semibold text-brand-900 shadow-[0_8px_18px_rgba(110,67,48,0.05)]"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-rb-bg pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-5">
            <div className="rounded-[30px] border border-rb-border bg-rb-surface p-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)]">
              <div className="flex h-20 w-20 items-center justify-center rounded-[26px] bg-[linear-gradient(145deg,rgba(110,67,48,0.94),rgba(168,116,90,0.9))] text-2xl font-black text-white shadow-[0_16px_28px_rgba(110,67,48,0.18)]">
                {user.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <h1 className="mt-5 font-heading text-[2rem] font-black tracking-tight text-brand-900">
                {user.name}
              </h1>
              <p className="mt-2 text-sm leading-6 text-rb-text2">
                Profil pengguna untuk mengelola akun dan memantau aktivitas pembelian.
              </p>
            </div>

            <div className="rounded-[30px] border border-rb-border bg-rb-surface p-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Kontak
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rb-text2">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-900">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rb-text2">
                      Nomor HP
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-900">
                      {user.phone || "Belum diisi"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <section className="rounded-[30px] border border-rb-border bg-rb-surface p-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Detail Pengguna
              </p>
              <h2 className="mt-3 font-heading text-[2rem] font-black tracking-tight text-brand-900">
                Ringkasan Akun
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
                Halaman ini menjadi pusat informasi pengguna setelah login. Di sini user bisa
                melihat identitas akun, status, dan ringkasan aktivitas sebelum masuk ke halaman
                transaksi.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {activityCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-[24px] border border-rb-border bg-[linear-gradient(145deg,rgba(255,253,252,0.98),rgba(243,232,221,0.94))] p-5"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-700 shadow-[0_8px_18px_rgba(110,67,48,0.06)]">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                      {card.label}
                    </p>
                    <p className="mt-2 font-heading text-[1.45rem] font-black text-brand-900">
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[30px] border border-rb-border bg-rb-surface p-6 shadow-[0_18px_34px_rgba(110,67,48,0.08)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                Data Dasar
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-rb-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rb-text2">
                    Nama Lengkap
                  </p>
                  <p className="mt-2 text-base font-semibold text-brand-900">{user.name}</p>
                </div>
                <div className="rounded-[22px] border border-rb-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rb-text2">
                    Email Login
                  </p>
                  <p className="mt-2 text-base font-semibold text-brand-900">{user.email}</p>
                </div>
                <div className="rounded-[22px] border border-rb-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rb-text2">
                    Nomor HP
                  </p>
                  <p className="mt-2 text-base font-semibold text-brand-900">{user.phone || "-"}</p>
                </div>
                <div className="rounded-[22px] border border-rb-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rb-text2">
                    Status Akun
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#2f7a58]">Terverifikasi</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
