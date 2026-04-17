"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileSearch, Search, ShieldAlert, UserRound } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type LookupMode = "identity" | "invoice";

export default function OrderLookupPage() {
  const router = useRouter();
  const [mode, setMode] = useState<LookupMode>("identity");
  const [query, setQuery] = useState("");

  const placeholder = useMemo(
    () =>
      mode === "identity"
        ? "Username Roblox atau Email kamu"
        : "Masukkan Invoice ID kamu",
    [mode]
  );

  const isReady = query.trim().length >= 3;

  const handleSubmit = () => {
    if (!isReady) return;

    const params = new URLSearchParams({
      game: "sawah-indo",
      user: mode === "identity" ? query.trim() : "itsmeyohanaa",
      email: mode === "identity" ? "user@email.com" : "invoice@email.com",
      payment: "QRIS",
      delivery: "Proses Reguler",
      amount: "100 RBX",
      total: "11877",
      order: mode === "invoice" ? query.trim() : "RBX69D67A59C3E85",
      created: "2026-04-15T19:45:00+07:00",
      expires: "2026-04-16T19:45:00+07:00",
    });

    router.push(`/invoice?${params.toString()}`);
  };

  return (
    <section className="bg-rb-bg pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-rb-border bg-rb-surface px-5 py-7 shadow-[0_20px_36px_rgba(110,67,48,0.08)] sm:px-8 sm:py-9">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
              <Search className="h-3.5 w-3.5" />
              Cek Pesanan
            </span>

            <h1 className="mt-5 font-heading text-[2rem] font-black tracking-tight text-brand-900 sm:text-[2.5rem]">
              Cek Pesanan Kamu
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-rb-text2 sm:text-[15px]">
              Pembelian lewat aplikasi Discord atau Telegram tidak dapat dicek di sini ya. Gunakan
              username, email, atau invoice ID untuk melacak pesananmu.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <div className="rounded-full bg-rb-alt p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setMode("identity")}
                  className={cn(
                    "rounded-full px-4 py-3 text-sm font-semibold transition-colors",
                    mode === "identity"
                      ? "bg-brand-900 text-white shadow-[0_12px_20px_rgba(110,67,48,0.16)]"
                      : "text-rb-text2"
                  )}
                >
                  Pakai Username / Email
                </button>
                <button
                  type="button"
                  onClick={() => setMode("invoice")}
                  className={cn(
                    "rounded-full px-4 py-3 text-sm font-semibold transition-colors",
                    mode === "invoice"
                      ? "bg-brand-900 text-white shadow-[0_12px_20px_rgba(110,67,48,0.16)]"
                      : "text-rb-text2"
                  )}
                >
                  Pakai Invoice ID
                </button>
              </div>
            </div>

            <div className="mt-5">
              <label className="block">
                <div className="relative">
                  {mode === "identity" ? (
                    <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500" />
                  ) : (
                    <FileSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-500" />
                  )}
                  <Input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={placeholder}
                    className="h-13 rounded-full border-rb-border bg-white pl-12 pr-5 text-sm text-brand-900 shadow-none focus-visible:border-brand-300"
                  />
                </div>
              </label>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isReady}
                className={cn(
                  "mt-5 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold shadow-[0_14px_24px_rgba(110,67,48,0.16)]",
                  isReady
                    ? "bg-[linear-gradient(135deg,#875643,#A8745A)] text-white"
                    : "cursor-not-allowed bg-brand-300/60 text-white/85 shadow-none"
                )}
              >
                Cek Pesananku
              </button>
            </div>

            <div className="mt-7 rounded-[28px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.94))] p-5 shadow-[0_12px_24px_rgba(110,67,48,0.04)] sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-900">Catatan:</p>
                  <p className="mt-2 text-sm leading-7 text-rb-text2">
                    Kalau kamu beli Robux Via Login, pesanan hanya bisa dicari melalui Invoice ID ya
                    SobatMayo.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-7 text-center text-sm font-medium text-rb-text2">
              Belum memesan?{" "}
              <Link href="/produk" className="font-semibold text-brand-900 underline underline-offset-2">
                Belanja Di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
