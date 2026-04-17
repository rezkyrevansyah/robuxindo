import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CheckoutOrderPage from "@/components/pages/CheckoutOrderPage";
import { productCatalog } from "@/data/productCatalog";

export const metadata: Metadata = {
  title: "Checkout | Robuxindo Store",
  description:
    "Single-page checkout Robuxindo Store untuk pilih paket, isi akun, pilih metode pembayaran, dan lanjut bayar dengan cepat.",
};

type CheckoutPageProps = {
  searchParams: Promise<{
    game?: string | string[];
    item?: string | string[];
    qty?: string | string[];
  }>;
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const gameSlug = Array.isArray(params.game) ? params.game[0] : params.game;
  const selectedItemId = Array.isArray(params.item) ? params.item[0] : params.item;
  const selectedQty = Array.isArray(params.qty) ? params.qty[0] : params.qty;
  const selectedProduct =
    productCatalog.find((item) => item.slug === gameSlug) ?? productCatalog[0];
  const initialQuantity = Math.max(1, Number(selectedQty) || 1);

  return (
    <>
      <Navbar />
      <main>
        <CheckoutOrderPage
          product={selectedProduct}
          initialItem={{
            id: selectedItemId,
          }}
          initialQuantity={initialQuantity}
        />
      </main>
      <Footer />
    </>
  );
}
