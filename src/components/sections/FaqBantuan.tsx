"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BadgeHelp, MessageCircle } from "lucide-react";
import mascotRobux2 from "../../../mascotrobux2.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Berapa lama waktu pengiriman bobux?",
    a: "Proses biasanya selesai dalam 1-5 menit setelah pembayaran terverifikasi. Jika lewat 15 menit, tim support kami siap bantu cek pesananmu.",
  },
  {
    q: "Apa yang harus dilakukan jika bobux belum masuk?",
    a: "Siapkan bukti pembayaran dan nomor order, lalu hubungi support melalui WhatsApp. Tim kami akan bantu follow up sampai transaksi beres.",
  },
  {
    q: "Pembayaran bisa pakai apa saja?",
    a: "Kami menerima transfer bank, QRIS, e-wallet populer, serta pembayaran via minimarket agar proses checkout tetap mudah untuk semua user.",
  },
  {
    q: "Di mana saya dapat menghubungi support?",
    a: "Kamu bisa langsung menghubungi kami melalui WhatsApp yang tersedia di section ini. Estimasi respons rata-rata cepat dan aktif setiap hari.",
  },
  {
    q: "Apakah aman beli di sini?",
    a: "Aman. Robuxindo mengutamakan transaksi yang jelas, proses cepat, dan dukungan support aktif agar pembeli merasa tenang saat checkout.",
  },
];

export default function FaqBantuan() {
  return (
    <section id="bantuan" className="relative overflow-hidden bg-rb-bg py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-brand-100/35 blur-3xl" />
        <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-rb-peach/22 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="overflow-hidden rounded-[28px] border border-rb-border bg-[linear-gradient(145deg,rgba(255,253,252,0.98),rgba(243,232,221,0.92))] p-5 shadow-[0_20px_46px_rgba(110,67,48,0.1)] min-[430px]:rounded-[32px] min-[430px]:p-6"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              <BadgeHelp className="h-3.5 w-3.5" />
              Bantuan & FAQ
            </div>

            <h2 className="font-heading text-[1.95rem] font-black leading-[0.94] tracking-tight text-brand-900 min-[430px]:text-[2.3rem] sm:text-[2.9rem]">
              Punya
              <br />
              <span className="text-brand-500">Pertanyaan?</span>
            </h2>

            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-rb-text2 min-[430px]:mt-6 min-[430px]:text-base min-[430px]:leading-8">
              Temukan jawaban cepat untuk pertanyaan yang paling sering ditanyakan
              seputar layanan, pengiriman, dan keamanan di Robuxindo.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-[24px] border border-rb-border bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(242,226,214,0.72))] p-5 min-[430px]:mt-10 min-[430px]:rounded-[28px] min-[430px]:p-6">
              <div className="pointer-events-none absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-rb-peach/35 blur-2xl" />
              <div className="pointer-events-none absolute right-0 bottom-0 h-40 w-40 rounded-full bg-brand-100/70 blur-2xl" />

              <div className="relative z-10 flex min-h-[200px] flex-col justify-between gap-6 min-[430px]:min-h-[220px] sm:min-h-[240px]">
                <div>
                  <p className="text-[1.45rem] font-bold leading-tight text-brand-900 min-[430px]:text-[1.7rem]">
                    Masih bingung?
                  </p>
                  <p className="mt-2 max-w-[15rem] text-sm leading-6 text-rb-text2">
                    Tim kami siap bantu kamu pilih layanan yang paling cocok dan aman.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-5 min-[430px]:flex-row min-[430px]:items-end min-[430px]:justify-between">
                  <a
                    href="https://wa.me/628xxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-900 px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-brand-700 min-[430px]:w-auto"
                  >
                    Hubungi Kami
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <div className="relative mx-auto h-[132px] w-[132px] min-[430px]:ml-auto min-[430px]:mr-0 min-[430px]:h-[148px] min-[430px]:w-[148px]">
                    <Image
                      src={mascotRobux2}
                      alt="Maskot bantuan Robuxindo"
                      priority={false}
                      className="absolute bottom-0 right-0 z-10 h-auto w-[116px] object-contain drop-shadow-[0_16px_28px_rgba(110,67,48,0.18)] min-[430px]:w-[132px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="rounded-[28px] border border-rb-border bg-[linear-gradient(145deg,rgba(255,253,252,0.98),rgba(243,232,221,0.94))] p-5 shadow-[0_20px_46px_rgba(110,67,48,0.1)] min-[430px]:rounded-[32px] min-[430px]:p-6 lg:p-7"
          >
            <div className="mb-7">
              <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                <MessageCircle className="h-3.5 w-3.5" />
                Pusat Bantuan
              </div>
              <h3 className="font-heading text-[1.75rem] font-black leading-tight text-brand-900 min-[430px]:text-[2rem] sm:text-[2.4rem]">
                Pertanyaan yang sering ditanyakan
              </h3>
              <p className="mt-3 text-sm text-rb-text2 min-[430px]:text-base">
                Klik salah satu pertanyaan di bawah untuk melihat jawabannya.
              </p>
            </div>

            <Accordion className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-[20px] border border-rb-border bg-[linear-gradient(145deg,rgba(255,255,255,0.78),rgba(242,226,214,0.52))] px-4 transition-all data-open:shadow-[0_12px_28px_rgba(110,67,48,0.08)] min-[430px]:rounded-[22px] min-[430px]:px-5"
                >
                  <AccordionTrigger className="py-4 text-left font-heading text-[0.96rem] font-bold text-brand-900 hover:no-underline min-[430px]:py-5 min-[430px]:text-[1.05rem]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-7 text-rb-text2 min-[430px]:pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
