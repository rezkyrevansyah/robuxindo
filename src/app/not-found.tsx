import Image from "next/image";
import Link from "next/link";

import mascotRobux2 from "../../mascotrobux2.png";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-rb-bg px-6 py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(246,194,139,0.22),transparent_22%),radial-gradient(circle_at_84%_20%,rgba(243,232,221,0.95),transparent_18%),radial-gradient(circle_at_82%_82%,rgba(242,166,90,0.16),transparent_20%),radial-gradient(circle_at_16%_74%,rgba(232,216,200,0.7),transparent_22%)]"
      />
      <div
        aria-hidden="true"
          className="pointer-events-none absolute left-6 top-8 h-44 w-44 rounded-full border border-brand-100/80 bg-[radial-gradient(circle,rgba(255,253,252,0.95),rgba(242,226,214,0.22))] blur-[1px] xs:left-10 xs:top-10"
      />
      <div
        aria-hidden="true"
          className="pointer-events-none absolute bottom-10 right-8 h-52 w-52 rounded-full border border-brand-100/70 bg-[radial-gradient(circle,rgba(255,253,252,0.92),rgba(243,232,221,0.28))] blur-[1px] xs:right-12"
      />

      <section className="relative mx-auto flex w-full max-w-4xl flex-col items-center rounded-[36px] border border-rb-border/90 bg-[linear-gradient(180deg,rgba(255,253,252,0.98),rgba(250,246,241,0.98))] px-6 py-12 text-center shadow-[0_30px_80px_rgba(110,67,48,0.1)] backdrop-blur-sm xs:px-8 sm:px-12 sm:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(168,116,90,0.2),transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 bottom-0 h-28 rounded-b-[36px] bg-[radial-gradient(circle_at_center,rgba(246,194,139,0.12),transparent_70%)]"
        />

        <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-100/65 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-700">
          Oops, halaman nyasar
        </span>

        <div className="relative mb-5 mt-6 flex h-36 w-36 items-center justify-center rounded-full border border-brand-100 bg-[radial-gradient(circle,rgba(255,255,255,0.99)_0%,rgba(250,246,241,0.96)_54%,rgba(242,226,214,0.64)_100%)] shadow-[0_22px_42px_rgba(110,67,48,0.12)] sm:h-40 sm:w-40">
          <div
            aria-hidden="true"
            className="absolute inset-3 rounded-full border border-brand-100/80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[-16px] rounded-full border border-brand-100/55"
          />
          <Image
            src={mascotRobux2}
            alt="Maskot Robuxindo"
            className="relative z-10 h-auto w-[92px] object-contain sm:w-[104px]"
            priority
          />
        </div>

        <p className="text-[70px] font-extrabold leading-none tracking-[-0.06em] text-transparent bg-[linear-gradient(180deg,#d79a78_0%,#b77958_52%,#8f583f_100%)] bg-clip-text sm:text-[92px]">
          404
        </p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-rb-text sm:text-[32px]">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-7 text-rb-text2 sm:text-base">
          Wah, sepertinya halaman yang kamu cari sudah berpindah, belum tersedia,
          atau tautannya tidak valid.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#6E4330_0%,#8f583f_52%,#b77958_100%)] px-8 text-sm font-bold text-white shadow-[0_18px_32px_rgba(110,67,48,0.2)]"
        >
          Kembali ke Beranda
        </Link>
      </section>
    </main>
  );
}
