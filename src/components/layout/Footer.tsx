import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  pembelian: [
    { label: "Beli Robux", href: "#produk" },
    { label: "Beli Item Roblox", href: "#layanan" },
    { label: "Voucher & Gift", href: "#layanan" },
    { label: "Cek Pesanan", href: "#cek-pesanan" },
  ],
  bantuan: [
    { label: "FAQ", href: "#bantuan" },
    { label: "Hubungi Kami", href: "#bantuan" },
    { label: "Cara Pembelian", href: "#bantuan" },
    { label: "Status Layanan", href: "#" },
  ],
  informasi: [
    { label: "Tentang Kami", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
  ],
};

const socials = [
  { label: "WhatsApp", href: "https://wa.me/628xxx", emoji: "💬" },
  { label: "Instagram", href: "#", emoji: "📸" },
  { label: "TikTok", href: "#", emoji: "🎵" },
  { label: "Telegram", href: "#", emoji: "✈️" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 min-[430px]:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand column */}
          <div className="min-[430px]:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/logo_robuxindo.png"
                alt="Robuxindo Store"
                width={40}
                height={40}
                className="rounded-full opacity-90"
              />
              <span className="font-heading font-semibold text-white text-sm leading-tight">
                Robuxindo<br />
                <span className="font-normal text-brand-300 text-xs">Store</span>
              </span>
            </Link>

            <p className="mb-6 max-w-[280px] text-sm leading-relaxed text-brand-300 min-[430px]:max-w-[220px]">
              Top up Robux murah, cepat, dan aman. Terpercaya oleh ribuan gamer Roblox Indonesia.
            </p>

            {/* Social media */}
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-colors"
                >
                  {s.emoji}
                </a>
              ))}
            </div>
          </div>

          {/* Pembelian */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Pembelian
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.pembelian.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-300 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Bantuan
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.bantuan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-300 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Informasi
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.informasi.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-300 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col gap-3">
          <p className="text-brand-300/70 text-xs leading-relaxed max-w-2xl">
            Robuxindo Store adalah platform independen dan tidak berafiliasi, tidak didukung, atau
            disponsori oleh Roblox Corporation. &ldquo;Roblox&rdquo; dan &ldquo;Robux&rdquo; adalah merek
            dagang dari Roblox Corporation.
          </p>
          <p className="text-brand-300/50 text-xs">
            © 2025 Robuxindo Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
