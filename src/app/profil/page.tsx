import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import UserProfilePage from "@/components/pages/UserProfilePage";

export const metadata: Metadata = {
  title: "Detail Pengguna | Robuxindo Store",
  description:
    "Lihat detail akun pengguna, ringkasan aktivitas, dan informasi profil di Robuxindo Store.",
};

export default function ProfilPage() {
  return (
    <>
      <Navbar />
      <main>
        <UserProfilePage />
      </main>
      <Footer />
    </>
  );
}
