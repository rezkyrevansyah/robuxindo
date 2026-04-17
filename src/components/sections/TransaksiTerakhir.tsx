"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Transaction {
  initial: string;
  name: string;
  product: string;
  price: string;
  time: string;
  avatarColor: string;
}

const transactions: Transaction[] = [
  { initial: "R", name: "Rezky A***", product: "1.700 Robux", price: "Rp 34.000", time: "2 mnt lalu", avatarColor: "bg-brand-500" },
  { initial: "F", name: "Fajar M***", product: "800 Robux", price: "Rp 16.500", time: "4 mnt lalu", avatarColor: "bg-rb-orange" },
  { initial: "D", name: "Dinda P***", product: "4.500 Robux", price: "Rp 84.000", time: "7 mnt lalu", avatarColor: "bg-rb-green" },
  { initial: "B", name: "Bagas S***", product: "1.000 Robux", price: "Rp 19.500", time: "11 mnt lalu", avatarColor: "bg-brand-700" },
  { initial: "N", name: "Nadia K***", product: "Voucher Gift", price: "Rp 50.000", time: "15 mnt lalu", avatarColor: "bg-rb-amber" },
  { initial: "R", name: "Rizki H***", product: "400 Robux", price: "Rp 8.000", time: "19 mnt lalu", avatarColor: "bg-brand-300" },
];

export default function TransaksiTerakhir() {
  return (
    <section className="bg-rb-bg py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 xs:flex-row xs:items-start xs:justify-between sm:items-end">
          <div>
            <span className="inline-block text-xs font-semibold text-brand-500 uppercase tracking-widest mb-2">
              Live Transaksi
            </span>
            <h2 className="font-heading text-[1.75rem] font-bold text-brand-900 xs:text-[1.9rem] lg:text-[2.35rem]">
              Baru Saja Dibeli
            </h2>
            <p className="mt-2 max-w-sm text-sm text-rb-text2 sm:text-base">
              Bergabung dengan ribuan gamer yang sudah top up di sini.
            </p>
          </div>

          <div className="flex w-fit shrink-0 items-center gap-2 rounded-full bg-rb-green-soft px-3 py-1.5 text-sm font-semibold text-rb-green">
            <span className="w-2 h-2 rounded-full bg-rb-green animate-pulse shrink-0" />
            Live
          </div>
        </div>

        {/* Transaction grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {transactions.map((tx, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="flex items-center gap-3 rounded-2xl border border-rb-border bg-rb-surface px-3.5 py-3 shadow-[0_2px_10px_rgba(63,45,37,0.05)] xs:px-4"
            >
              {/* Avatar */}
              <div
                className={`${tx.avatarColor} flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white`}
              >
                {tx.initial}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="truncate text-sm font-semibold text-rb-text">
                    {tx.name}
                  </span>
                  <span className="text-xs text-rb-text2 shrink-0">{tx.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm text-rb-text2 truncate">{tx.product}</span>
                  <span className="shrink-0 font-heading text-sm font-bold text-brand-900">
                    {tx.price}
                  </span>
                </div>
              </div>

              {/* Status check */}
              <CheckCircle className="h-[18px] w-[18px] shrink-0 text-rb-green" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
