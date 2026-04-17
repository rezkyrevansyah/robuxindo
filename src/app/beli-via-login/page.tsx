import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LoginOrderPage from "@/components/pages/LoginOrderPage";

export const metadata: Metadata = {
  title: "Beli via Login | Robuxindo Store",
  description:
    "Halaman beli via login Robuxindo Store dengan flow satu halaman, step aktif di info akun, dan tampilan commerce yang rapi.",
};

export default function BeliViaLoginPage() {
  return (
    <>
      <Navbar />
      <main>
        <LoginOrderPage />
      </main>
      <Footer />
    </>
  );
}
