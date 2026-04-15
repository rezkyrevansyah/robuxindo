"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";

const slides = [
  { id: 0, gradientFrom: "#6E4330", gradientTo: "#A8745A" },
  { id: 1, gradientFrom: "#C0723A", gradientTo: "#F4B740" },
  { id: 2, gradientFrom: "#875643", gradientTo: "#D9B8A2" },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDir(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  useEffect(() => {
    const id = setInterval(() => go((current + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [current, go]);

  return (
    <section
      className="relative w-full overflow-hidden bg-rb-bg pb-8 pt-5 sm:pb-10 sm:pt-6 lg:pb-12"
      aria-label="Banner promosi"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-[26px] border border-rb-border/80 shadow-[0_18px_40px_rgba(110,67,48,0.08)] aspect-2/1 sm:aspect-3/1 lg:aspect-[16/5]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${slides[current].gradientFrom} 0%, ${slides[current].gradientTo} 100%)`,
              }}
              initial={{ opacity: 0, x: dir * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -dir * 80 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <div className="pointer-events-none select-none flex flex-col items-center gap-2 text-white/40">
                <ImageIcon className="h-8 w-8 sm:h-11 sm:w-11 lg:h-12 lg:w-12" strokeWidth={1} />
                <p className="text-xs sm:text-sm font-medium tracking-wide">
                  Banner {current + 1} · Gambar dari CMS
                </p>
              </div>

              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white" />
                <div className="absolute bottom-0 right-24 h-24 w-24 rounded-full bg-white" />
                <div className="absolute top-1/2 left-8 h-16 w-16 rounded-full bg-white" />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => go((current - 1 + slides.length) % slides.length)}
            aria-label="Slide sebelumnya"
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40 sm:left-4 sm:h-9 sm:w-9"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button
            onClick={() => go((current + 1) % slides.length)}
            aria-label="Slide berikutnya"
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition-colors hover:bg-black/40 sm:right-4 sm:h-9 sm:w-9"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "h-2 w-5 bg-white" : "h-2 w-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
