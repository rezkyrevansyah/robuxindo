"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface GameProduct {
  name: string;
  game: string;
  price: string;
  thumbBg: string;
  thumbAccent: string;
  isRobux?: boolean;
  badge?: string;
}

const gameProducts: GameProduct[] = [
  {
    name: "Robux 400",
    game: "Robux Instan",
    price: "Rp 8.000",
    thumbBg: "#6E4330",
    thumbAccent: "#875643",
    isRobux: true,
    badge: "Starter",
  },
  {
    name: "Brookhaven",
    game: "Game Pass",
    price: "Rp 5.000",
    thumbBg: "#A8745A",
    thumbAccent: "#D9B8A2",
    badge: "Populer",
  },
  {
    name: "Adopt Me!",
    game: "Game Pass",
    price: "Rp 7.500",
    thumbBg: "#F2A65A",
    thumbAccent: "#F6C28B",
    badge: "🔥 Hot",
  },
  {
    name: "Blox Fruits",
    game: "Game Pass",
    price: "Rp 6.000",
    thumbBg: "#875643",
    thumbAccent: "#A8745A",
  },
  {
    name: "Anime Adv.",
    game: "Game Pass",
    price: "Rp 4.500",
    thumbBg: "#D9B8A2",
    thumbAccent: "#F2E2D6",
  },
  {
    name: "Robux 1.700",
    game: "Robux Instan",
    price: "Rp 32.000",
    thumbBg: "#6E4330",
    thumbAccent: "#875643",
    isRobux: true,
    badge: "Best Value",
  },
  {
    name: "Arsenal VIP",
    game: "Game Pass",
    price: "Rp 3.500",
    thumbBg: "#F4B740",
    thumbAccent: "#F6C28B",
  },
  {
    name: "Robux 4.500",
    game: "Robux Instan",
    price: "Rp 84.000",
    thumbBg: "#6E4330",
    thumbAccent: "#875643",
    isRobux: true,
    badge: "Pro",
  },
];

export default function ProdukPopuler() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="produk" className="overflow-hidden bg-rb-alt py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 min-[430px]:flex-row min-[430px]:items-end min-[430px]:justify-between">
          <div>
            <span className="inline-block text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
              Trending Sekarang
            </span>
            <h2 className="font-heading text-[1.7rem] font-bold text-brand-900 min-[430px]:text-[1.8rem] lg:text-[2.2rem]">
              Produk Populer
            </h2>
            <p className="mt-1 text-sm text-rb-text2">
              Pilihan terfavorit gamer Roblox Indonesia.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll kiri"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-rb-border bg-rb-surface text-brand-700 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll kanan"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-rb-border bg-rb-surface text-brand-700 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-3 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[430px]:gap-3.5"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {gameProducts.map((product, i) => (
            <motion.div
              key={`${product.name}-${i}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
              style={{ scrollSnapAlign: "start" }}
              className="w-[9.4rem] shrink-0 min-[430px]:w-40 sm:w-[11.5rem]"
            >
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rb-border bg-rb-surface shadow-[0_2px_10px_rgba(63,45,37,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(63,45,37,0.12)]">

                {/* Thumbnail */}
                <div
                  className="relative aspect-square flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: product.thumbBg }}
                >
                  {/* Inner gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${product.thumbAccent}50, transparent 65%)`,
                    }}
                  />
                  {product.badge && (
                    <div className="absolute top-2 right-2 bg-brand-900/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full z-10">
                      {product.badge}
                    </div>
                  )}
                  {product.isRobux ? (
                    <Image
                      src="/robux-icon.png"
                      alt={product.name}
                      width={54}
                      height={54}
                      className="object-contain relative z-10"
                    />
                  ) : (
                    <div
                      className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl text-xl font-bold"
                      style={{ backgroundColor: `${product.thumbAccent}80`, color: "#FFFDFC" }}
                    >
                      {product.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-2 p-3">
                  <div>
                    <h3 className="font-heading font-semibold text-sm text-brand-900 leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-rb-text2 mt-0.5">{product.game}</p>
                    <p className="mt-1 font-heading text-xs font-bold text-brand-700">
                      Mulai dari {product.price}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="mt-auto flex w-full items-center justify-center rounded-xl bg-brand-900 py-2 text-xs font-semibold text-white transition-all hover:bg-brand-700 active:scale-[0.98]"
                  >
                    Beli
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll kiri"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-rb-border bg-rb-surface text-brand-700 transition-colors hover:bg-brand-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll kanan"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-rb-border bg-rb-surface text-brand-700 transition-colors hover:bg-brand-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
