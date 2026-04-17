import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InvoiceStatusPage from "@/components/pages/InvoiceStatusPage";
import { productCatalog } from "@/data/productCatalog";

export const metadata: Metadata = {
  title: "Invoice / Status Order | Robuxindo Store",
  description:
    "Pantau status pembayaran dan proses pesanan Roblox kamu di halaman invoice Robuxindo Store.",
};

type InvoicePageProps = {
  searchParams: Promise<{
    game?: string | string[];
    user?: string | string[];
    email?: string | string[];
    payment?: string | string[];
    delivery?: string | string[];
    amount?: string | string[];
    total?: string | string[];
    order?: string | string[];
    created?: string | string[];
    expires?: string | string[];
  }>;
};

function getStringParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function InvoicePage({ searchParams }: InvoicePageProps) {
  const params = await searchParams;
  const gameSlug = getStringParam(params.game);
  const selectedProduct =
    productCatalog.find((item) => item.slug === gameSlug) ?? productCatalog[0];

  const createdAt = getStringParam(params.created) ?? "2026-04-15T19:45:00+07:00";
  const expiresAt = getStringParam(params.expires) ?? "2026-04-16T19:45:00+07:00";

  return (
    <>
      <Navbar />
      <main>
        <InvoiceStatusPage
          product={selectedProduct}
          username={getStringParam(params.user) ?? "itsmeyohanaa"}
          email={getStringParam(params.email) ?? "user@email.com"}
          paymentMethod={getStringParam(params.payment) ?? "QRIS"}
          deliveryMethod={getStringParam(params.delivery) ?? "Proses Reguler"}
          amount={getStringParam(params.amount) ?? "100 RBX"}
          totalPayment={Number(getStringParam(params.total) ?? "11877")}
          orderId={getStringParam(params.order) ?? "RBX69D67A59C3E85"}
          createdAt={createdAt}
          expiresAt={expiresAt}
        />
      </main>
      <Footer />
    </>
  );
}
