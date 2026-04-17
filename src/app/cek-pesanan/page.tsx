import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import OrderLookupPage from "@/components/pages/OrderLookupPage";

export const metadata: Metadata = {
  title: "Cek Pesanan | Robuxindo Store",
  description:
    "Cari pesanan Roblox kamu dengan username, email, atau invoice ID di halaman cek pesanan Robuxindo Store.",
};

export default function CekPesananPage() {
  return (
    <>
      <Navbar />
      <main>
        <OrderLookupPage />
      </main>
      <Footer />
    </>
  );
}
