import type { Metadata } from "next";
import AuthSplitPage from "@/components/pages/AuthSplitPage";

export const metadata: Metadata = {
  title: "Login | Robuxindo Store",
  description:
    "Masuk ke akun Robuxindo untuk mengakses transaksi, pesanan, dan pembelian Roblox dengan cepat.",
};

export default function LoginPage() {
  return <AuthSplitPage variant="login" />;
}
