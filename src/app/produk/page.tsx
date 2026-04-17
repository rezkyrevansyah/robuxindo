import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCatalogPage from "@/components/pages/ProductCatalogPage";

export const metadata: Metadata = {
  title: "Produk Roblox | Robuxindo Store",
  description:
    "Jelajahi katalog game Roblox, gamepass, dan item populer di Robuxindo Store. Pilih game favoritmu lalu lanjut ke flow pembayaran yang cepat dan rapi.",
};

type ProdukPageProps = {
  searchParams: Promise<{
    kategori?: string | string[];
    q?: string | string[];
  }>;
};

export default async function ProdukPage({ searchParams }: ProdukPageProps) {
  const params = await searchParams;
  const initialCategory = Array.isArray(params.kategori) ? params.kategori[0] : params.kategori;
  const initialQuery = Array.isArray(params.q) ? params.q[0] : params.q;

  return (
    <>
      <Navbar />
      <main>
        <ProductCatalogPage
          initialCategory={initialCategory}
          initialQuery={initialQuery}
        />
      </main>
      <Footer />
    </>
  );
}
