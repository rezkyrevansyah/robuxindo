"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const stats = [
  {
    value: 50000,
    formatted: "50.000+",
    label: "Total Transaksi",
    detail: "Order berhasil diproses dengan cepat dan aman.",
    icon: PackageCheck,
    accent: "bg-brand-100 text-brand-700",
  },
  {
    value: 500,
    formatted: "500 Juta+",
    label: "Robux Terjual",
    detail: "Dipilih gamer Roblox Indonesia setiap harinya.",
    icon: Sparkles,
    accent: "bg-rb-peach/45 text-brand-700",
  },
  {
    value: 10000,
    formatted: "10.000+",
    label: "Pembeli Puas",
    detail: "Pelanggan loyal yang kembali belanja di Robuxindo.",
    icon: Users,
    accent: "bg-rb-green-soft text-rb-green",
  },
  {
    value: 3,
    formatted: "3 Tahun",
    label: "Pengalaman",
    detail: "Rekam jejak yang bikin proses beli makin tenang.",
    icon: ShieldCheck,
    accent: "bg-[#f7efe7] text-brand-700",
  },
];

function CountUp({
  value,
  formatted,
  duration = 1800,
}: {
  value: number;
  formatted: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  const isLarge = value >= 1000;
  const displayValue = isLarge ? count.toLocaleString("id-ID") : count;
  const suffix = formatted.replace(/[\d.,]/g, "").trim();

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-rb-bg py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,rgba(242,166,90,0.13),transparent_72%)]" />
        <div className="absolute left-0 top-16 h-60 w-60 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-rb-peach/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              <BadgeCheck className="h-3.5 w-3.5" />
              Trusted Store
            </div>
            <h2 className="font-heading text-[1.75rem] font-black tracking-tight text-brand-900 xs:text-[1.9rem] sm:text-[2.2rem]">
              Angka Nyata yang Bangun Trust
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-rb-text2 sm:text-base">
              Bukan sekadar tampilan, ini bukti kalau Robuxindo sudah dipercaya banyak gamer
              untuk top up cepat, aman, dan konsisten.
            </p>
          </div>

          <div className="rounded-2xl border border-rb-border bg-white/75 px-4 py-3 shadow-[0_12px_30px_rgba(110,67,48,0.08)] backdrop-blur lg:max-w-[240px]">
            <p className="text-sm font-semibold text-brand-900">Proses instan & support aktif</p>
            <p className="mt-1 text-xs text-rb-text2">Social proof yang bikin visitor lebih yakin beli.</p>
          </div>
        </div>

        <div className="grid gap-4 xs:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.94))] p-[18px] shadow-[0_14px_34px_rgba(110,67,48,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(110,67,48,0.14)] sm:p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_70%)]" />
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-100/40 blur-2xl" />
              </div>

              <div className="relative z-10">
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl ${stat.accent} sm:mb-5 sm:h-11 sm:w-11`}>
                  <stat.icon className="h-5 w-5" strokeWidth={1.9} />
                </div>

                <div className="font-heading text-[1.7rem] font-black leading-none text-brand-900 xs:text-[1.9rem] sm:text-[2.15rem]">
                  <CountUp value={stat.value} formatted={stat.formatted} />
                </div>

                <p className="mt-2.5 text-[0.95rem] font-semibold text-rb-text sm:mt-3 sm:text-base">{stat.label}</p>
                <p className="mt-1.5 text-sm leading-6 text-rb-text2">{stat.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
