import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProductItemsPage from "@/components/pages/ProductItemsPage";
import { getProductBySlug, getProductDetailItems } from "@/data/productCatalog";

type ProductItemsRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductItemsRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Robuxindo Store",
    };
  }

  return {
    title: `${product.name} | Item Roblox | Robuxindo Store`,
    description: `Pilih item dan bundle ${product.name} di Robuxindo Store, lalu lanjut ke detail produk untuk atur jumlah dan pembelian dengan cepat.`,
  };
}

export default async function ProductItemsRoute({
  params,
}: ProductItemsRouteProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const items = getProductDetailItems(product);

  return (
    <>
      <Navbar />
      <main>
        <ProductItemsPage product={product} items={items} />
      </main>
      <Footer />
    </>
  );
}
