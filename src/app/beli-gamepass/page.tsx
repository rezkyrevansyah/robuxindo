import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GamepassOrderPage from "@/components/pages/GamepassOrderPage";

export const metadata: Metadata = {
  title: "Beli Gamepass | Robuxindo Store",
  description:
    "Halaman beli gamepass Robuxindo Store dengan flow informasi pesanan yang rapi, cepat, dan terasa seperti checkout commerce.",
};

export default function BeliGamepassPage() {
  return (
    <>
      <Navbar />
      <main>
        <GamepassOrderPage />
      </main>
      <Footer />
    </>
  );
}
