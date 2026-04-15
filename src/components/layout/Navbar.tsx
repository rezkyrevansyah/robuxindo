"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Produk", href: "#produk" },
  { label: "Beli Gamepass", href: "#layanan" },
  { label: "Cek Pesanan", href: "#cek-pesanan" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Bantuan", href: "#bantuan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-rb-border/80 bg-rb-surface/94 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "shadow-[0_10px_28px_rgba(63,45,37,0.08)]"
          : "shadow-[0_2px_10px_rgba(63,45,37,0.04)]"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/logo_robuxindo.png"
            alt="Robuxindo Store"
            width={38}
            height={38}
            className="rounded-full"
            priority
          />
          <div className="hidden sm:block">
            <p className="font-heading text-lg font-extrabold text-brand-900">Robuxindo</p>
            <p className="text-[11px] font-medium tracking-wide text-rb-text2">
              Top up Roblox terpercaya
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                index === 0
                  ? "bg-brand-100 text-brand-900"
                  : "text-rb-text hover:bg-brand-100/80 hover:text-brand-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex shrink-0 items-center gap-2">
          <Link
            href="/cart"
            aria-label="Keranjang"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rb-border bg-white text-rb-text2 transition-colors hover:border-brand-300 hover:text-brand-900"
          >
            <ShoppingCart className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-rb-border bg-white px-4 py-2 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-300 hover:bg-brand-100"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-full bg-brand-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Register
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/cart"
            aria-label="Keranjang"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-rb-border bg-white text-rb-text2 transition-colors hover:bg-brand-100 hover:text-brand-900"
          >
            <ShoppingCart className="h-4 w-4" />
          </Link>

          <Sheet>
            <SheetTrigger className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-brand-100">
              <Menu className="h-5 w-5 text-brand-900" />
              <span className="sr-only">Buka menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-rb-surface p-0">
              <div className="border-b border-rb-border px-5 py-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo_robuxindo.png"
                    alt="Robuxindo Store"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-heading text-base font-bold text-brand-900">
                      Robuxindo Store
                    </p>
                    <p className="text-xs text-rb-text2">Murah, cepat, aman</p>
                  </div>
                </div>
              </div>

              <nav className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-3.5 py-3 text-sm font-medium transition-colors",
                      index === 0
                        ? "bg-brand-100 font-semibold text-brand-900"
                        : "text-rb-text2 hover:bg-brand-100 hover:text-brand-900"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-rb-border px-4 py-4">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/login"
                    className="flex items-center justify-center rounded-xl border border-rb-border bg-white px-4 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-100"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-center rounded-xl bg-brand-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
