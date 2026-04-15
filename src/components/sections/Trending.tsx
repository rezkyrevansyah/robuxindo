"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

type TrendingItem = {
  name: string;
  accent: string;
  ribbon?: string;
  useRobuxIcon?: boolean;
  initials?: string;
  variant?: "coin" | "square";
};

const products: TrendingItem[] = [
  {
    name: "Bobux Instan Vilog",
    accent: "#f2a65a",
    ribbon: "PROMO !",
    useRobuxIcon: true,
    variant: "coin",
  },
  {
    name: "Bobux 5 Hari",
    accent: "#a8745a",
    ribbon: "PROMO !",
    useRobuxIcon: true,
    variant: "coin",
  },
  {
    name: "SAWAH INDO",
    accent: "#72c29a",
    initials: "SI",
  },
  {
    name: "Fish It !",
    accent: "#f4b740",
    initials: "FI",
    ribbon: "UPDATE !",
  },
  {
    name: "Drag Drive Simulator",
    accent: "#f6c28b",
    initials: "DD",
  },
  {
    name: "BloxBurg",
    accent: "#d9b8a2",
    initials: "BB",
  },
];

function ProductThumb({ item }: { item: TrendingItem }) {
  if (item.useRobuxIcon) {
    return (
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center sm:h-[68px] sm:w-[68px]">
        <div
          className="absolute inset-0 rounded-full opacity-90"
          style={{
            background: `radial-gradient(circle at center, ${item.accent}28 0%, transparent 72%)`,
          }}
        />
        {item.variant === "coin" ? (
          <>
            <div
              className="absolute inset-[6px] rounded-full border-2"
              style={{ borderColor: `${item.accent}cc` }}
            />
            <div
              className="absolute inset-0 rounded-full border border-dashed"
              style={{ borderColor: `${item.accent}88` }}
            />
          </>
        ) : null}
        <Image
          src="/robux-icon.png"
          alt={item.name}
          width={48}
          height={48}
          className="relative z-10 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
        />
      </div>
    );
  }

  return (
    <div
      className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-rb-border bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(242,226,214,0.7))] sm:h-[62px] sm:w-[62px]"
      style={{
        boxShadow: `inset 0 0 0 1px ${item.accent}1f`,
      }}
    >
      <div
        className="absolute inset-2 rounded-sm opacity-70"
        style={{
          background: `linear-gradient(145deg, ${item.accent}2d, transparent 78%)`,
        }}
      />
      <span className="relative z-10 font-heading text-base font-bold text-brand-900">
        {item.initials}
      </span>
    </div>
  );
}

function Ribbon({ label }: { label: string }) {
  return (
    <div className="absolute right-[-35px] top-[13px] z-20 w-[110px] rotate-45 bg-[linear-gradient(135deg,#f2a65a,#e1784d)] py-0.5 text-center text-[10px] font-bold uppercase tracking-wide text-white shadow-[0_10px_16px_rgba(225,120,77,0.24)]">
      {label}
    </div>
  );
}

function ProductCard({ item, index }: { item: TrendingItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.42, ease: "easeOut" }}
    >
      <Link
        href="#produk"
        className="group relative flex min-h-[84px] items-center gap-3.5 overflow-hidden rounded-2xl border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.95),rgba(243,232,221,0.92))] px-3 py-3 shadow-[0_10px_22px_rgba(110,67,48,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-[0_16px_28px_rgba(110,67,48,0.12)] sm:min-h-[88px]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(246,194,139,0.22),transparent_46%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]" />
        </div>

        {item.ribbon ? <Ribbon label={item.ribbon} /> : null}

        <ProductThumb item={item} />

        <div className="relative z-10 min-w-0 pr-12">
          <h3 className="font-heading text-base font-bold leading-tight text-brand-900 sm:text-[0.98rem]">
            {item.name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Trending() {
  return (
    <section id="trending" className="relative z-10 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-8">
          <div className="mb-2 inline-flex items-center gap-2.5">
            <Flame className="h-8 w-8 fill-rb-orange text-rb-orange sm:h-9 sm:w-9" />
            <h2 className="font-heading text-[1.7rem] font-black tracking-tight text-brand-900 sm:text-[2.1rem]">
              TRENDING
            </h2>
          </div>

          <p className="text-sm font-semibold text-rb-text2 sm:text-lg">
            Produk Paling Hype Saat Ini! Jangan Sampai Ketinggalan
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item, index) => (
            <ProductCard key={item.name} item={item} index={index} />
          ))}
        </div>

        <div className="mt-7 flex justify-center sm:mt-8">
          <Link
            href="#produk"
            className="inline-flex items-center gap-2.5 rounded-xl border border-brand-300 bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-brand-700"
          >
            Lihat Semua Produk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
