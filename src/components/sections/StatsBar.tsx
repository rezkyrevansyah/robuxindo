"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Package,
  ShoppingBag,
  Tag,
} from "lucide-react";

const stats = [
  {
    icon: Package,
    label: "Bobux Tersedia",
    value: "R$ 1.286.005",
  },
  {
    icon: Tag,
    label: "Harga Bobux",
    value: "Rp 11.011/100",
  },
  {
    icon: BarChart3,
    label: "Total Bobux Terjual",
    value: "R$ 9.969.353",
  },
  {
    icon: ShoppingBag,
    label: "Total Order",
    value: "22.904",
  },
];

export default function StatsBar() {
  return (
    <section className="relative z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-[24px] border border-rb-border bg-[linear-gradient(135deg,rgba(255,253,252,0.92),rgba(250,246,241,0.96))] shadow-[0_18px_42px_rgba(110,67,48,0.1)] backdrop-blur xs:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
              className={[
                "relative flex items-center gap-3.5 px-4 py-4 sm:px-5 sm:py-[18px] lg:px-6 lg:py-5",
                "border-rb-border/90",
                index < stats.length - 1 ? "border-b" : "",
                index % 2 === 0 ? "xs:border-r xl:border-r" : "",
                index >= 2 ? "xs:border-b-0" : "",
                index < stats.length - 1 ? "xl:border-b-0" : "",
                index === stats.length - 1 ? "border-b-0" : "",
              ].join(" ")}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:h-11 sm:w-11">
                <stat.icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.9} />
              </div>

              <div className="min-w-0">
                <p className="text-[0.9rem] font-semibold text-rb-text sm:text-[0.92rem]">{stat.label}</p>
                <p className="font-heading text-[1rem] font-bold leading-tight text-brand-900 sm:text-[1.08rem] lg:text-[1.12rem]">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
