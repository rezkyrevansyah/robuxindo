"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, ShoppingCart, UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  clearMockAuthUser,
  getMockAuthUser,
  getUserInitials,
  subscribeMockAuth,
  type MockAuthUser,
} from "@/lib/mock-auth";

const navLinks = [
  { label: "Produk", href: "/produk" },
  { label: "Beli Gamepass", href: "/beli-gamepass" },
  { label: "Robux via Login", href: "/beli-via-login" },
  { label: "Cek Pesanan", href: "/cek-pesanan" },
  { label: "Leaderboard", href: "/leaderboard" },
];

function isNavLinkActive(href: string, pathname: string, categoryParam: string | null) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/produk") {
    return pathname.startsWith("/produk") && categoryParam !== "Gamepass";
  }

  if (href.startsWith("/produk?")) {
    const [, query = ""] = href.split("?");
    const params = new URLSearchParams(query);
    const kategori = params.get("kategori");

    return pathname === "/produk" && categoryParam === kategori;
  }

  if (href === "/beli-gamepass") {
    return pathname === "/beli-gamepass";
  }

  if (href === "/beli-via-login") {
    return pathname === "/beli-via-login";
  }

  if (href === "/cek-pesanan") {
    return pathname === "/cek-pesanan";
  }

  if (href === "/leaderboard") {
    return pathname === "/leaderboard";
  }

  return false;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<MockAuthUser | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const categoryParam =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("kategori")
      : null;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sync = () => setUser(getMockAuthUser());
    sync();
    return subscribeMockAuth(sync);
  }, []);

  const handleLogout = () => {
    clearMockAuthUser();
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-rb-border/80 bg-rb-surface/94 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "shadow-[0_10px_28px_rgba(63,45,37,0.08)]"
          : "shadow-[0_2px_10px_rgba(63,45,37,0.04)]"
      )}
    >
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[74px] sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo_robuxindo.png"
            alt="Robuxindo Store"
            width={42}
            height={42}
            className="rounded-full border border-rb-border/80 bg-white p-0.5"
            priority
          />
          <div className="hidden xs:block">
            <p className="font-heading text-[1.7rem] font-black leading-none tracking-tight text-brand-900">
              Robuxindo
            </p>
            <p className="mt-1 text-[12px] font-medium text-rb-text2">
              Top up Roblox terpercaya
            </p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center justify-center rounded-full border border-rb-border bg-white/82 p-1.5 shadow-[0_10px_22px_rgba(110,67,48,0.05)]">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(link.href, pathname, categoryParam);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-4 py-2.5 text-[14px] font-semibold leading-none transition-colors",
                  isActive
                    ? "bg-brand-900 text-white shadow-[0_10px_18px_rgba(110,67,48,0.14)]"
                    : "text-rb-text2 hover:bg-brand-100/80 hover:text-brand-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:flex shrink-0 items-center gap-2.5">
          <Link
            href="/cart"
            aria-label="Keranjang"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-rb-border bg-white text-rb-text2 shadow-[0_8px_18px_rgba(110,67,48,0.05)] transition-colors hover:border-brand-300 hover:text-brand-900"
          >
            <ShoppingCart className="h-4 w-4" />
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-3 rounded-full border border-rb-border bg-white px-3 py-2 shadow-[0_8px_18px_rgba(110,67,48,0.05)]">
                <Avatar size="default" className="size-9">
                  <AvatarFallback className="bg-brand-100 font-semibold text-brand-900">
                    {getUserInitials(user.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-sm font-semibold leading-none text-brand-900">{user.name}</p>
                  <p className="mt-1 text-[11px] text-rb-text2">Profil saya</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                sideOffset={8}
                className="w-56 rounded-2xl border border-rb-border bg-white p-2 shadow-[0_16px_28px_rgba(110,67,48,0.12)]"
              >
                <div className="px-3 py-2">
                  <p className="text-sm font-semibold text-brand-900">{user.name}</p>
                  <p className="mt-1 text-xs text-rb-text2">{user.email}</p>
                </div>
                <DropdownMenuSeparator className="bg-rb-border" />
                <DropdownMenuItem
                  onClick={() => router.push("/profil")}
                  className="rounded-xl px-3 py-2.5 text-brand-900"
                >
                  <span className="inline-flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    Profil Saya
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="rounded-xl px-3 py-2.5 text-brand-900"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-rb-border bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 shadow-[0_8px_18px_rgba(110,67,48,0.05)] transition-colors hover:border-brand-300 hover:bg-brand-100"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_20px_rgba(110,67,48,0.16)] transition-colors hover:bg-brand-700"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5 xs:gap-2 xl:hidden">
          <Link
            href="/cart"
            aria-label="Keranjang"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-rb-border bg-white text-rb-text2 shadow-[0_8px_18px_rgba(110,67,48,0.05)] transition-colors hover:bg-brand-100 hover:text-brand-900"
          >
            <ShoppingCart className="h-4 w-4" />
          </Link>

          <Sheet>
            <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-full border border-rb-border bg-white shadow-[0_8px_18px_rgba(110,67,48,0.05)] transition-colors hover:bg-brand-100">
              <Menu className="h-5 w-5 text-brand-900" />
              <span className="sr-only">Buka menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-rb-surface p-0">
              <div className="border-b border-rb-border px-5 py-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo_robuxindo.png"
                    alt="Robuxindo Store"
                    width={42}
                    height={42}
                    className="rounded-full border border-rb-border bg-white p-0.5"
                  />
                  <div>
                    <p className="font-heading text-lg font-black text-brand-900">
                      Robuxindo
                    </p>
                    <p className="text-xs text-rb-text2">Top up Roblox terpercaya</p>
                  </div>
                </div>
              </div>

              <nav className="flex flex-col gap-1.5 px-4 py-4">
                {navLinks.map((link) => {
                  const isActive = isNavLinkActive(link.href, pathname, categoryParam);

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={cn(
                        "rounded-2xl px-4 py-3.5 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-900 font-semibold text-white shadow-[0_10px_18px_rgba(110,67,48,0.14)]"
                          : "text-rb-text2 hover:bg-brand-100 hover:text-brand-900"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="border-t border-rb-border px-4 py-4">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-rb-border bg-white p-3">
                      <Avatar size="default" className="size-10">
                        <AvatarFallback className="bg-brand-100 font-semibold text-brand-900">
                          {getUserInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-brand-900">{user.name}</p>
                        <p className="text-xs text-rb-text2">{user.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="/profil"
                        className="flex items-center justify-center rounded-2xl border border-rb-border bg-white px-4 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-100"
                      >
                        Profil
                      </Link>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center justify-center rounded-2xl bg-brand-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/login"
                      className="flex items-center justify-center rounded-2xl border border-rb-border bg-white px-4 py-3 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-100"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center justify-center rounded-2xl bg-brand-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
