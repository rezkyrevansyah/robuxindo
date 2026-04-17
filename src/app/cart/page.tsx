import type { Metadata } from "next";
import CartPage from "@/components/pages/CartPage";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getProductBySlug, getProductDetailItemById, productCatalog } from "@/data/productCatalog";

export const metadata: Metadata = {
  title: "Keranjang | Robuxindo Store",
  description:
    "Cek item yang sudah kamu pilih sebelum lanjut ke checkout di Robuxindo Store.",
};

type CartRouteProps = {
  searchParams: Promise<{
    game?: string | string[];
    item?: string | string[];
    qty?: string | string[];
  }>;
};

export default async function CartRoute({ searchParams }: CartRouteProps) {
  const params = await searchParams;
  const slug = Array.isArray(params.game) ? params.game[0] : params.game;
  const itemId = Array.isArray(params.item) ? params.item[0] : params.item;
  const qtyParam = Array.isArray(params.qty) ? params.qty[0] : params.qty;
  const quantity = Math.max(1, Number(qtyParam) || 1);

  if (!slug || !itemId) {
    return (
      <>
        <Navbar />
        <main>
          <CartPage isEmpty />
        </main>
        <Footer />
      </>
    );
  }

  const product = getProductBySlug(slug) ?? productCatalog[0];
  const item = getProductDetailItemById(product, itemId);

  if (!item) {
    return (
      <>
        <Navbar />
        <main>
          <CartPage isEmpty />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <CartPage product={product} item={item} quantity={quantity} />
      </main>
      <Footer />
    </>
  );
}
