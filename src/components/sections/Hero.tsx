"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Zap, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const trustBadges = [
  { icon: Zap, label: "Proses < 5 Menit" },
  { icon: Shield, label: "Transaksi Aman" },
  { icon: Star, label: "Rating 4.9/5" },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  };
}

export default function Hero() {
  return (
    <section className="relative bg-rb-bg overflow-hidden">
      {/* Background decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-175 h-175 rounded-full bg-[radial-gradient(ellipse_at_top_right,#F6C28B26,transparent_55%)]" />
        <div className="absolute -bottom-32 -left-16 w-125 h-125 rounded-full bg-[radial-gradient(ellipse_at_bottom_left,#F2E2D630,transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-7 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">

            {/* Instant badge */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-rb-green-soft text-rb-green border border-rb-green/20 rounded-full px-4 py-1.5 text-xs font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rb-green animate-pulse" />
              Proses Instan &amp; Aman
            </motion.div>

            {/* Headline — H1 for SEO */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading font-bold text-4xl sm:text-5xl xl:text-6xl text-brand-900 leading-[1.15] tracking-tight"
            >
              Top Up Robux{" "}
              <span className="text-rb-orange">Cepat</span>,{" "}
              <br className="hidden sm:block" />
              Aman &amp; Terpercaya
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-rb-text2 text-lg leading-relaxed max-w-md"
            >
              Beli Robux dengan harga murah, proses hitungan menit, dan sudah
              dipercaya ribuan gamer Roblox Indonesia.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href="#produk"
                className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-700 text-white font-semibold text-base px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_4px_16px_rgba(110,67,48,0.3)] active:scale-[0.98]"
              >
                Beli Sekarang
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#layanan"
                className="inline-flex items-center gap-2 bg-brand-100 hover:bg-brand-300/50 text-brand-900 font-semibold text-base px-8 py-3.5 rounded-xl border border-brand-300 transition-all active:scale-[0.98]"
              >
                Lihat Produk
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-x-5 gap-y-2.5 justify-center lg:justify-start"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-1.5 text-sm text-rb-text2"
                >
                  <badge.icon className="h-4 w-4 text-rb-green shrink-0" />
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Ambient glow rings */}
            <div aria-hidden className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-[radial-gradient(circle,#F4B74040,transparent_65%)]" />
            <div aria-hidden className="absolute w-48 h-48 lg:w-60 lg:h-60 rounded-full bg-[radial-gradient(circle,#F2A65A22,transparent_60%)]" />

            {/* Main robux icon card */}
            <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-3xl bg-brand-dark shadow-[0_24px_64px_rgba(63,45,37,0.28)] flex items-center justify-center overflow-hidden">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(242,166,90,0.12),transparent_60%)]" />
              <Image
                src="/robux-icon.png"
                alt="Robux icon"
                width={180}
                height={180}
                className="object-contain relative z-10"
                priority
              />
            </div>

            {/* Floating badge: price */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="absolute -right-2 top-6 lg:-right-6 bg-rb-surface rounded-2xl shadow-[0_6px_24px_rgba(63,45,37,0.12)] border border-rb-border px-4 py-3 min-w-35"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-rb-amber/20 flex items-center justify-center text-base shrink-0">
                  💎
                </div>
                <div>
                  <div className="text-xs text-rb-text2 font-medium">1.000 Robux</div>
                  <div className="text-sm font-bold text-brand-900 font-heading">Rp 19.500</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge: trust */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -left-2 bottom-6 lg:-left-6 bg-rb-surface rounded-2xl shadow-[0_6px_24px_rgba(63,45,37,0.12)] border border-rb-border px-4 py-3"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle className="h-5 w-5 text-rb-green shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-rb-text">10.000+ Pembeli</div>
                  <div className="text-xs text-rb-text2">100% Aman &amp; Terpercaya</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom shape divider into next section */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-12 bg-rb-alt"
        style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
      />
    </section>
  );
}
