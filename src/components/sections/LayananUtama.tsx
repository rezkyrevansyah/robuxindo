"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Crown, Gift, Sparkles } from "lucide-react";

const topUpFeatures = [
  "Bobux 100% masuk",
  "Harga termurah",
  "Proses secepat kilat",
];

const sideCards = [
  {
    title: "Gift Gamepass",
    description: "Temukan item gamepass dari game Roblox favoritmu.",
    icon: Gift,
    accent: "bg-rb-peach/35",
    iconColor: "text-brand-700",
    href: "/beli-gamepass",
  },
  {
    title: "Limited Items",
    description: "Dapatkan item langka Roblox dengan harga terjangkau.",
    icon: Crown,
    accent: "bg-brand-100",
    iconColor: "text-brand-700",
    href: "#produk",
  },
];

export default function LayananUtama() {
  return (
    <section
      id="layanan"
      className="relative overflow-hidden bg-rb-bg py-12 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_top,rgba(242,166,90,0.14),transparent_68%)]" />
        <div className="absolute right-0 top-14 h-72 w-72 rounded-full bg-rb-peach/15 blur-3xl" />
        <div className="absolute left-0 bottom-8 h-64 w-64 rounded-full bg-brand-100/45 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-10">
          <h2 className="font-heading text-[1.85rem] font-black tracking-tight text-brand-900 xs:text-[2rem] sm:text-[2.4rem] lg:text-[2.7rem]">
            Pilih Layanan Yang Kamu Butuhkan
          </h2>
          <p className="mx-auto mt-2.5 max-w-xl text-sm font-medium text-rb-text2 sm:text-base">
            Beli Robux dan Gamepass dengan harga termurah &amp; proses kilat.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_1.25fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="relative h-full overflow-hidden rounded-[28px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-5 shadow-[0_16px_36px_rgba(110,67,48,0.1)] lg:p-6"
          >
            <div className="absolute bottom-0 left-0 h-36 w-44 bg-[linear-gradient(12deg,rgba(168,116,90,0.18),rgba(242,166,90,0.06))] [clip-path:polygon(0_0,100%_28%,82%_100%,0_100%)]" />
            <div className="absolute right-[-34px] top-[-28px] h-48 w-48 rounded-full bg-rb-peach/22 blur-3xl" />
            <div className="absolute bottom-[-28px] right-6 h-44 w-44 rounded-full bg-brand-100/65 blur-2xl" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="max-w-full xs:max-w-[16.5rem]">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Terlaris
                </div>

                <h3 className="font-heading text-[1.55rem] font-black leading-tight text-brand-900 xs:text-[1.7rem] sm:text-[1.95rem]">
                  Top Up Bobux
                </h3>

                <ul className="mt-6 space-y-3">
                  {topUpFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-base font-semibold text-rb-text"
                    >
                      <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-brand-300 bg-white/80 text-brand-700">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#produk"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-brand-700 xs:w-auto"
                >
                  Beli Sekarang
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          <div className="flex h-full flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {sideCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: index * 0.08 + 0.08,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="overflow-hidden rounded-[26px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.96),rgba(243,232,221,0.94))] p-5 shadow-[0_14px_32px_rgba(110,67,48,0.08)]"
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-5 flex justify-center">
                      <div
                        className={`flex h-20 w-20 items-center justify-center rounded-[24px] ${card.accent} shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]`}
                      >
                        <card.icon
                          className={`h-9 w-9 ${card.iconColor}`}
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

                    <h3 className="font-heading text-[1.4rem] font-bold leading-tight text-brand-900">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-base leading-7 text-rb-text2">
                      {card.description}
                    </p>

                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-brand-300 bg-white px-5 py-3 text-sm font-semibold text-brand-900 transition duration-300 hover:bg-brand-100"
                    >
                      Beli Sekarang
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.18, duration: 0.45, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[26px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.96),rgba(243,232,221,0.94))] px-5 py-5 shadow-[0_14px_32px_rgba(110,67,48,0.08)]"
            >
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_right,rgba(168,116,90,0.25),transparent_72%)]" />
              <div className="relative z-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-500">
                  Coming Soon
                </p>
                <p className="mt-2 text-base font-medium text-rb-text2">
                  Ditunggu update selanjutnya ya
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
