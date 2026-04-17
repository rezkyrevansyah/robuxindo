import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import LeaderboardPage from "@/components/pages/LeaderboardPage";

export const metadata: Metadata = {
  title: "Leaderboard | Robuxindo Store",
  description:
    "Lihat leaderboard pembeli Robux terbaik di Robuxindo Store untuk all time, bulan ini, dan minggu ini.",
};

export default function LeaderboardRoute() {
  return (
    <>
      <Navbar />
      <main>
        <LeaderboardPage />
      </main>
      <Footer />
    </>
  );
}
