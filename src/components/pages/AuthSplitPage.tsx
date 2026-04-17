"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { setMockAuthUser } from "@/lib/mock-auth";

type AuthVariant = "login" | "register";

type AuthSplitPageProps = {
  variant: AuthVariant;
};

const benefits = [
  "Transaksi cepat dan aman",
  "Harga terjangkau untuk kebutuhan Roblox",
  "Customer support siap bantu setiap hari",
];

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335"/>
    </svg>
  );
}

function PasswordField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Input
        type={visible ? "text" : "password"}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-xl border-rb-border bg-white px-4 pr-11 text-sm text-brand-900 shadow-none placeholder:text-rb-text2 focus-visible:border-brand-400 focus-visible:ring-1 focus-visible:ring-brand-300/30"
      />
      <button
        type="button"
        onClick={() => setVisible((current) => !current)}
        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-rb-text2 transition-colors hover:text-brand-800"
        aria-label={visible ? "Sembunyikan password" : "Tampilkan password"}
      >
        {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}

function BrandPanel({ variant }: { variant: AuthVariant }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-rb-border bg-[linear-gradient(150deg,rgba(255,253,252,0.99),rgba(243,232,221,0.97))] p-8 shadow-sm">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-5%] top-[8%] h-48 w-48 rounded-full bg-rb-peach/15 blur-3xl" />
        <div className="absolute bottom-[-5%] right-[5%] h-56 w-56 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between gap-10">
        <div className="space-y-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_20px_rgba(110,67,48,0.12)]">
            <Image
              src="/logo_robuxindo.png"
              alt="Robuxindo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>

          <div className="space-y-3">
            <h1 className="font-heading text-3xl font-black leading-tight tracking-tight text-brand-900">
              {variant === "login" ? (
                <>Masuk ke akun<br />Robuxindo</>
              ) : (
                <>Buat akun baru<br />Robuxindo</>
              )}
            </h1>
            <p className="max-w-xs text-sm leading-6 text-rb-text2">
              Platform terpercaya untuk top up Roblox, gamepass, dan kebutuhan item lainnya dengan flow belanja yang rapi, cepat, dan aman.
            </p>
          </div>

          <div className="space-y-3">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5 text-rb-text">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-rb-orange" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2.5">
          <Link
            href="/login"
            className={cn(
              "inline-flex h-10 min-w-0 flex-1 items-center justify-center rounded-xl border px-5 text-sm font-semibold transition-colors xs:min-w-[110px] xs:flex-none",
              variant === "login"
                ? "border-brand-900 bg-brand-900 text-white hover:bg-brand-800"
                : "border-rb-border bg-white text-brand-900 hover:bg-brand-50"
            )}
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className={cn(
              "inline-flex h-10 min-w-0 flex-1 items-center justify-center rounded-xl border px-5 text-sm font-semibold transition-colors xs:min-w-[110px] xs:flex-none",
              variant === "register"
                ? "border-brand-900 bg-brand-900 text-white hover:bg-brand-800"
                : "border-rb-border bg-white text-brand-900 hover:bg-brand-50"
            )}
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 text-xs text-rb-text2">
      <span className="h-px flex-1 bg-rb-border" />
      <span>atau</span>
      <span className="h-px flex-1 bg-rb-border" />
    </div>
  );
}

function GoogleButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-full items-center justify-center gap-2.5 rounded-xl border border-rb-border bg-white px-4 text-sm font-semibold text-brand-900 transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
    >
      <GoogleIcon />
      {label}
    </button>
  );
}

function RegisterForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+62");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const canSubmit =
    firstName.trim().length >= 2 &&
    email.trim().includes("@") &&
    phone.trim().length >= 8 &&
    password.trim().length >= 6 &&
    confirmPassword.trim().length >= 6 &&
    password === confirmPassword &&
    agreed;

  const handleRegister = () => {
    if (!canSubmit) return;

    const fullName = [firstName.trim(), lastName.trim()].filter(Boolean).join(" ");
    setMockAuthUser({
      name: fullName || firstName.trim(),
      email: email.trim(),
      phone: `${phonePrefix} ${phone.trim()}`.trim(),
    });
    router.push("/profil");
  };

  return (
    <>
      <div>
        <h2 className="font-heading text-2xl font-black tracking-tight text-brand-900">
          Buat Akun Baru
        </h2>
        <p className="mt-1 text-sm text-rb-text2">
          Lengkapi data diri Anda untuk mendaftar
        </p>
      </div>

      <GoogleButton label="Daftar dengan Google" />

      <Divider />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-brand-900">Nama Depan</span>
          <Input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Nama Depan"
            className="h-11 rounded-xl border-rb-border bg-white px-4 text-sm text-brand-900 shadow-none placeholder:text-rb-text2 focus-visible:border-brand-400 focus-visible:ring-1 focus-visible:ring-brand-300/30"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-brand-900">
            Nama Belakang <span className="font-normal text-rb-text2">(Opsional)</span>
          </span>
          <Input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Nama Belakang"
            className="h-11 rounded-xl border-rb-border bg-white px-4 text-sm text-brand-900 shadow-none placeholder:text-rb-text2 focus-visible:border-brand-400 focus-visible:ring-1 focus-visible:ring-brand-300/30"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold text-brand-900">Email</span>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-rb-text2" />
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Masukkan email"
            className="h-11 rounded-xl border-rb-border bg-white pl-10 pr-4 text-sm text-brand-900 shadow-none placeholder:text-rb-text2 focus-visible:border-brand-400 focus-visible:ring-1 focus-visible:ring-brand-300/30"
          />
        </div>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold text-brand-900">Nomor Handphone</span>
        <div className="flex h-11 overflow-hidden rounded-xl border border-rb-border bg-white focus-within:border-brand-400 focus-within:ring-1 focus-within:ring-brand-300/30">
          <div className="flex shrink-0 items-center gap-1.5 border-r border-rb-border px-3">
            <Phone className="h-3.5 w-3.5 text-rb-text2" />
            <input
              value={phonePrefix}
              onChange={(event) => setPhonePrefix(event.target.value)}
              className="w-12 bg-transparent text-sm font-medium text-brand-900 outline-none"
              aria-label="Kode negara"
            />
          </div>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Nomor handphone"
            className="min-w-0 flex-1 bg-transparent px-3 text-sm text-brand-900 outline-none placeholder:text-rb-text2"
          />
        </div>
      </label>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-brand-900">Password</span>
          <PasswordField
            value={password}
            onChange={setPassword}
            placeholder="Buat password"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-brand-900">Konfirmasi Password</span>
          <PasswordField
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Konfirmasi password"
          />
        </label>
      </div>

      <label className="flex items-start gap-2.5 text-sm text-rb-text2">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-rb-border accent-brand-800"
        />
        <span className="text-xs leading-5">
          Saya menyetujui{" "}
          <Link href="#" className="font-semibold text-brand-900 underline underline-offset-2">
            Syarat dan Ketentuan
          </Link>{" "}
          serta{" "}
          <Link href="#" className="font-semibold text-brand-900 underline underline-offset-2">
            Kebijakan Privasi
          </Link>
        </span>
      </label>

      <button
        type="button"
        onClick={handleRegister}
        disabled={!canSubmit}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand-900 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(110,67,48,0.18)] transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Lanjut ke Verifikasi
      </button>

      <p className="text-center text-xs text-rb-text2">
        Sudah punya akun?{" "}
        <Link href="/login" className="font-semibold text-brand-900">
          Masuk Sekarang
        </Link>
      </p>
    </>
  );
}

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const canSubmit = email.trim().includes("@") && password.trim().length >= 6;

  const handleLogin = () => {
    if (!canSubmit) return;

    const emailValue = email.trim();
    const derivedName = emailValue
      .split("@")[0]
      .replace(/[._-]+/g, " ")
      .split(" ")
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");

    setMockAuthUser({
      name: derivedName || "Pengguna Robuxindo",
      email: emailValue,
    });
    router.push("/profil");
  };

  return (
    <>
      <div>
        <h2 className="font-heading text-2xl font-black tracking-tight text-brand-900">
          Masuk ke Akun
        </h2>
        <p className="mt-1 text-sm text-rb-text2">
          Masukkan kredensial Anda untuk melanjutkan
        </p>
      </div>

      <GoogleButton label="Login dengan Google" />

      <Divider />

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold text-brand-900">Email</span>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-rb-text2" />
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Masukkan email"
            className="h-11 rounded-xl border-rb-border bg-white pl-10 pr-4 text-sm text-brand-900 shadow-none placeholder:text-rb-text2 focus-visible:border-brand-400 focus-visible:ring-1 focus-visible:ring-brand-300/30"
          />
        </div>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold text-brand-900">Password</span>
        <PasswordField
          value={password}
          onChange={setPassword}
          placeholder="Masukkan password"
        />
      </label>

      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-xs text-rb-text2">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
            className="h-4 w-4 rounded border-rb-border accent-brand-800"
          />
          Ingat saya
        </label>

        <Link href="#" className="text-xs font-medium text-brand-700 hover:text-brand-900">
          Lupa Password?
        </Link>
      </div>

      <button
        type="button"
        onClick={handleLogin}
        disabled={!canSubmit}
        className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand-900 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(110,67,48,0.18)] transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Masuk
      </button>

      <p className="text-center text-xs text-rb-text2">
        Belum punya akun?{" "}
        <Link href="/register" className="font-semibold text-brand-900">
          Daftar Sekarang
        </Link>
      </p>
    </>
  );
}

export default function AuthSplitPage({ variant }: AuthSplitPageProps) {
  return (
    <section className="min-h-screen bg-rb-bg">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[5%] top-[10%] h-64 w-64 rounded-full bg-rb-peach/12 blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <Link
        href="/"
        className="fixed right-5 top-5 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-rb-border bg-white text-rb-text2 shadow-sm transition-colors hover:bg-brand-50 hover:text-brand-900"
        aria-label="Tutup"
      >
        <X className="h-4 w-4" />
      </Link>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-5xl items-center gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <BrandPanel variant={variant} />

        <div className="mx-auto w-full max-w-md rounded-2xl border border-rb-border bg-white p-7 shadow-sm">
          <div className="space-y-4">
            {variant === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </section>
  );
}
