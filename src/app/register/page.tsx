import type { Metadata } from "next";
import AuthSplitPage from "@/components/pages/AuthSplitPage";

export const metadata: Metadata = {
  title: "Register | Robuxindo Store",
  description:
    "Buat akun baru di Robuxindo untuk menikmati pengalaman belanja Roblox yang lebih cepat dan terorganisir.",
};

export default function RegisterPage() {
  return <AuthSplitPage variant="register" />;
}
