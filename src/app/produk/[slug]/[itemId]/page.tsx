import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductDetailPage from "@/components/pages/ProductDetailPage";
import {
  getProductBySlug,
  getProductDetailItemById,
  getProductDetailItems,
} from "@/data/productCatalog";

type ProductDetailRouteProps = {
  params: Promise<{
    slug: string;
    itemId: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductDetailRouteProps): Promise<Metadata> {
  const { slug, itemId } = await params;
  const product = getProductBySlug(slug);
  const item = product ? getProductDetailItemById(product, itemId) : null;

  if (!product || !item) {
    return {
      title: "Detail Produk Tidak Ditemukan | Robuxindo Store",
    };
  }

  return {
    title: `${item.title} | ${product.name} | Robuxindo Store`,
    description: `Lihat detail ${item.title} untuk ${product.name}, atur jumlah pesanan, lalu tambah ke keranjang atau beli langsung di Robuxindo Store.`,
  };
}

export default async function ProductDetailRoute({
  params,
}: ProductDetailRouteProps) {
  const { slug, itemId } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const item = getProductDetailItemById(product, itemId);

  if (!item) {
    notFound();
  }

  const relatedItems = getProductDetailItems(product)
    .filter((entry) => entry.id !== item.id)
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        <ProductDetailPage product={product} item={item} relatedItems={relatedItems} />
      </main>
      <Footer />
    </>
  );
}
