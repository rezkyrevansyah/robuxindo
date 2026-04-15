import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/sections/HeroBanner";
import StatsBar from "@/components/sections/StatsBar";
import Trending from "@/components/sections/Trending";
import LayananUtama from "@/components/sections/LayananUtama";
import Stats from "@/components/sections/Stats";
import TransaksiTerakhir from "@/components/sections/TransaksiTerakhir";
import ProdukPopuler from "@/components/sections/ProdukPopuler";
import FaqBantuan from "@/components/sections/FaqBantuan";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Banner slider */}
        <HeroBanner />

        <section className="relative overflow-hidden bg-rb-alt py-6 sm:py-8 lg:py-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-[46%] bg-[radial-gradient(circle_at_top_right,rgba(246,194,139,0.28),transparent_62%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom_center,rgba(242,166,90,0.16),transparent_68%)]" />
            <div className="absolute inset-y-0 left-0 w-[34%] bg-[radial-gradient(circle_at_left_center,rgba(255,255,255,0.4),transparent_70%)]" />
          </div>

          {/* 2. Live stats bar */}
          <StatsBar />

          {/* 3. Trending products grid */}
          <Trending />
        </section>

        {/* 3. Pilih Layanan — 3 cards */}
        <LayananUtama />

        {/* 4. Stats / social proof numbers */}
        <Stats />

        {/* 5. Live transaksi terakhir */}
        <TransaksiTerakhir />

        {/* 6. Produk populer — horizontal slider */}
        <ProdukPopuler />

        {/* 7. FAQ + Bantuan */}
        <FaqBantuan />
      </main>
      <Footer />
    </>
  );
}
