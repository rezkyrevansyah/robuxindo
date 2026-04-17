"use client";

import { useState } from "react";
import { Crown, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

type LeaderboardFilter = "all" | "month" | "week";

type LeaderboardEntry = {
  rank: number;
  name: string;
  purchases: string;
  robux: string;
  spent: string;
  avatarLabel: string;
  avatarFrom: string;
  avatarTo: string;
};

const filterTabs: Array<{ id: LeaderboardFilter; label: string }> = [
  { id: "all", label: "All Time" },
  { id: "month", label: "Bulan Ini" },
  { id: "week", label: "Minggu Ini" },
];

const leaderboardMap: Record<LeaderboardFilter, LeaderboardEntry[]> = {
  all: [
    { rank: 1, name: "Aq****11", purchases: "44 Order", robux: "260.100 RBX", spent: "Rp.38.169.650", avatarLabel: "AQ", avatarFrom: "#88c8ff", avatarTo: "#7c5cff" },
    { rank: 2, name: "Ou****18", purchases: "23 Order", robux: "103.822 RBX", spent: "Rp.15.642.300", avatarLabel: "OU", avatarFrom: "#5ed9b3", avatarTo: "#6a63ff" },
    { rank: 3, name: "fi****il", purchases: "65 Order", robux: "66.705 RBX", spent: "Rp.11.665.638", avatarLabel: "FI", avatarFrom: "#ffae66", avatarTo: "#ff5cb8" },
    { rank: 4, name: "li*****61", purchases: "78 Pembelian", robux: "8.500 RBX", spent: "Rp 10.916.933", avatarLabel: "LI", avatarFrom: "#93a1ff", avatarTo: "#e36cff" },
    { rank: 5, name: "pi****94", purchases: "16 Pembelian", robux: "61.000 RBX", spent: "Rp 8.989.000", avatarLabel: "PI", avatarFrom: "#7bcbff", avatarTo: "#68f0a7" },
    { rank: 6, name: "ci****ly", purchases: "21 Pembelian", robux: "60.700 RBX", spent: "Rp 8.866.100", avatarLabel: "CI", avatarFrom: "#ffa95a", avatarTo: "#ff6f91" },
    { rank: 7, name: "Gr****08", purchases: "42 Pembelian", robux: "51.810 RBX", spent: "Rp 7.368.000", avatarLabel: "GR", avatarFrom: "#d38bff", avatarTo: "#5f79ff" },
    { rank: 8, name: "St****21", purchases: "23 Pembelian", robux: "41.200 RBX", spent: "Rp 6.612.708", avatarLabel: "ST", avatarFrom: "#64d4ff", avatarTo: "#7e8fff" },
    { rank: 9, name: "ra****0o", purchases: "4 Pembelian", robux: "40.000 RBX", spent: "Rp 5.930.000", avatarLabel: "RA", avatarFrom: "#ff8cc8", avatarTo: "#ffb86b" },
    { rank: 10, name: "Ad****10", purchases: "6 Pembelian", robux: "45.001 RBX", spent: "Rp 5.799.050", avatarLabel: "AD", avatarFrom: "#f9cf6b", avatarTo: "#ff8f57" },
  ],
  month: [
    { rank: 1, name: "St****21", purchases: "18 Order", robux: "88.400 RBX", spent: "Rp.12.944.000", avatarLabel: "ST", avatarFrom: "#64d4ff", avatarTo: "#7e8fff" },
    { rank: 2, name: "fi****il", purchases: "29 Order", robux: "74.100 RBX", spent: "Rp.10.821.220", avatarLabel: "FI", avatarFrom: "#ffae66", avatarTo: "#ff5cb8" },
    { rank: 3, name: "Aq****11", purchases: "15 Order", robux: "69.880 RBX", spent: "Rp.10.116.950", avatarLabel: "AQ", avatarFrom: "#88c8ff", avatarTo: "#7c5cff" },
    { rank: 4, name: "ci****ly", purchases: "11 Pembelian", robux: "58.700 RBX", spent: "Rp 8.211.300", avatarLabel: "CI", avatarFrom: "#ffa95a", avatarTo: "#ff6f91" },
    { rank: 5, name: "Ou****18", purchases: "9 Pembelian", robux: "54.822 RBX", spent: "Rp 7.889.400", avatarLabel: "OU", avatarFrom: "#5ed9b3", avatarTo: "#6a63ff" },
    { rank: 6, name: "Gr****08", purchases: "19 Pembelian", robux: "47.500 RBX", spent: "Rp 6.960.000", avatarLabel: "GR", avatarFrom: "#d38bff", avatarTo: "#5f79ff" },
    { rank: 7, name: "li*****61", purchases: "14 Pembelian", robux: "39.000 RBX", spent: "Rp 5.288.400", avatarLabel: "LI", avatarFrom: "#93a1ff", avatarTo: "#e36cff" },
    { rank: 8, name: "pi****94", purchases: "7 Pembelian", robux: "34.100 RBX", spent: "Rp 4.866.900", avatarLabel: "PI", avatarFrom: "#7bcbff", avatarTo: "#68f0a7" },
    { rank: 9, name: "ra****0o", purchases: "5 Pembelian", robux: "31.250 RBX", spent: "Rp 4.421.000", avatarLabel: "RA", avatarFrom: "#ff8cc8", avatarTo: "#ffb86b" },
    { rank: 10, name: "Ad****10", purchases: "4 Pembelian", robux: "28.001 RBX", spent: "Rp 3.998.050", avatarLabel: "AD", avatarFrom: "#f9cf6b", avatarTo: "#ff8f57" },
  ],
  week: [
    { rank: 1, name: "Ou****18", purchases: "7 Order", robux: "42.222 RBX", spent: "Rp.6.540.000", avatarLabel: "OU", avatarFrom: "#5ed9b3", avatarTo: "#6a63ff" },
    { rank: 2, name: "Gr****08", purchases: "9 Order", robux: "38.510 RBX", spent: "Rp.5.968.000", avatarLabel: "GR", avatarFrom: "#d38bff", avatarTo: "#5f79ff" },
    { rank: 3, name: "ci****ly", purchases: "5 Order", robux: "34.700 RBX", spent: "Rp.5.102.100", avatarLabel: "CI", avatarFrom: "#ffa95a", avatarTo: "#ff6f91" },
    { rank: 4, name: "Aq****11", purchases: "4 Pembelian", robux: "29.300 RBX", spent: "Rp 4.416.500", avatarLabel: "AQ", avatarFrom: "#88c8ff", avatarTo: "#7c5cff" },
    { rank: 5, name: "fi****il", purchases: "6 Pembelian", robux: "27.705 RBX", spent: "Rp 4.165.638", avatarLabel: "FI", avatarFrom: "#ffae66", avatarTo: "#ff5cb8" },
    { rank: 6, name: "St****21", purchases: "8 Pembelian", robux: "24.200 RBX", spent: "Rp 3.812.708", avatarLabel: "ST", avatarFrom: "#64d4ff", avatarTo: "#7e8fff" },
    { rank: 7, name: "li*****61", purchases: "5 Pembelian", robux: "20.500 RBX", spent: "Rp 3.116.933", avatarLabel: "LI", avatarFrom: "#93a1ff", avatarTo: "#e36cff" },
    { rank: 8, name: "pi****94", purchases: "3 Pembelian", robux: "18.000 RBX", spent: "Rp 2.789.000", avatarLabel: "PI", avatarFrom: "#7bcbff", avatarTo: "#68f0a7" },
    { rank: 9, name: "ra****0o", purchases: "2 Pembelian", robux: "15.000 RBX", spent: "Rp 2.193.000", avatarLabel: "RA", avatarFrom: "#ff8cc8", avatarTo: "#ffb86b" },
    { rank: 10, name: "Ad****10", purchases: "2 Pembelian", robux: "12.001 RBX", spent: "Rp 1.899.050", avatarLabel: "AD", avatarFrom: "#f9cf6b", avatarTo: "#ff8f57" },
  ],
};

const podiumDecor = {
  1: {
    border: "border-[#d8b54f]/55",
    glow: "shadow-[0_0_0_1px_rgba(216,181,79,0.08),0_24px_44px_rgba(216,181,79,0.12)]",
    badge: "bg-[#e0b322] text-[#3f2d25]",
  },
  2: {
    border: "border-[#d8cce9]",
    glow: "shadow-[0_0_0_1px_rgba(163,132,186,0.08),0_24px_44px_rgba(163,132,186,0.1)]",
    badge: "bg-[#d9ddea] text-[#3f2d25]",
  },
  3: {
    border: "border-[#e1c8b4]",
    glow: "shadow-[0_0_0_1px_rgba(168,116,90,0.08),0_24px_44px_rgba(168,116,90,0.1)]",
    badge: "bg-[#cc7a20] text-[#fff8f4]",
  },
};

function PodiumCard({ entry }: { entry: LeaderboardEntry }) {
  const decor = podiumDecor[entry.rank as 1 | 2 | 3];

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-[linear-gradient(180deg,rgba(255,253,252,0.98),rgba(243,232,221,0.95))] p-4",
        decor.border,
        decor.glow
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(246,194,139,0.18),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.44),transparent)]" />

      <div className="relative z-10">
        <div className={cn("inline-flex rounded-full px-2.5 py-0.5 text-xs font-black", decor.badge)}>
          #{entry.rank}
        </div>

        <div
          className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/50 text-base font-black text-white shadow-[inset_0_8px_16px_rgba(255,255,255,0.14),0_8px_16px_rgba(110,67,48,0.12)]"
          style={{
            background: `linear-gradient(145deg, ${entry.avatarFrom}, ${entry.avatarTo})`,
          }}
        >
          {entry.avatarLabel}
        </div>

        <h3 className="mt-3 text-center font-heading text-xl font-black tracking-tight text-brand-900">
          {entry.name}
        </h3>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-rb-border bg-white/88 px-2.5 py-2 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-500">
              Order
            </p>
            <p className="mt-0.5 text-sm font-black text-brand-900">{entry.purchases.split(" ")[0]}</p>
          </div>
          <div className="rounded-xl border border-rb-border bg-white/88 px-2.5 py-2 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-500">
              Robux
            </p>
            <p className="mt-0.5 text-sm font-black text-brand-900">{entry.robux}</p>
          </div>
        </div>

        <div className="mt-2 rounded-xl border border-rb-border bg-white/88 px-3 py-2 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-500">
            Spent
          </p>
          <p className="mt-0.5 text-sm font-black text-brand-900">{entry.spent}</p>
        </div>
      </div>
    </article>
  );
}

function RankingRow({ entry }: { entry: LeaderboardEntry }) {
  return (
    <div className="grid gap-3 rounded-xl border border-rb-border bg-rb-surface px-4 py-3 shadow-[0_4px_12px_rgba(110,67,48,0.05)] min-[880px]:grid-cols-[48px_minmax(0,1.2fr)_160px_160px] min-[880px]:items-center">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-rb-border bg-rb-alt text-sm font-black text-brand-900">
          #{entry.rank}
        </div>
      </div>

      <div className="flex items-center gap-2.5 min-w-0">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-black text-white shadow-[0_4px_10px_rgba(110,67,48,0.12)]"
          style={{ background: `linear-gradient(145deg, ${entry.avatarFrom}, ${entry.avatarTo})` }}
        >
          {entry.avatarLabel}
        </div>
        <div className="min-w-0">
          <p className="truncate font-heading text-base font-black tracking-tight text-brand-900">
            {entry.name}
          </p>
          <p className="text-xs font-semibold text-brand-500">{entry.purchases}</p>
        </div>
      </div>

      <div className="border-t border-rb-border pt-2.5 min-[880px]:border-l min-[880px]:border-t-0 min-[880px]:pl-5 min-[880px]:pt-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-400">Robux</p>
        <p className="mt-0.5 text-sm font-black text-brand-900">{entry.robux}</p>
      </div>

      <div className="border-t border-rb-border pt-2.5 min-[880px]:border-l min-[880px]:border-t-0 min-[880px]:pl-5 min-[880px]:pt-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-400">Spent</p>
        <p className="mt-0.5 text-sm font-black text-brand-900">{entry.spent}</p>
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  const [activeFilter, setActiveFilter] = useState<LeaderboardFilter>("all");
  const entries = leaderboardMap[activeFilter];
  const podium = [entries[0], entries[1], entries[2]];
  const rest = entries.slice(3);

  return (
    <section className="min-h-[calc(100vh-74px)] bg-rb-bg pb-14 pt-7">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-rb-border bg-[linear-gradient(180deg,rgba(255,253,252,0.98),rgba(243,232,221,0.94))] p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-300 bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                <Trophy className="h-3 w-3 text-rb-orange" />
                Hall of Fame
              </div>
              <h1 className="mt-3 font-heading text-2xl font-black tracking-tight text-brand-900 sm:text-3xl">
                {activeFilter === "all"
                  ? "Top 10 All Time"
                  : activeFilter === "month"
                    ? "Top 10 Bulan Ini"
                    : "Top 10 Minggu Ini"}
              </h1>
              <p className="mt-1 text-sm text-rb-text2">
                Daftar pembeli Robux terbaik sepanjang waktu.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                    activeFilter === tab.id
                      ? "border-brand-900 bg-brand-900 text-white shadow-[0_6px_14px_rgba(110,67,48,0.16)]"
                      : "border-rb-border bg-white text-rb-text2 hover:bg-brand-50"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            <PodiumCard entry={podium[0]} />
            <PodiumCard entry={podium[1]} />
            <PodiumCard entry={podium[2]} />
          </div>

          <div className="mt-4 space-y-2">
            {rest.map((entry) => (
              <RankingRow key={entry.rank} entry={entry} />
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-rb-border bg-rb-surface px-4 py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-500">
                  Mau Masuk Ranking?
                </p>
                <h2 className="mt-1.5 flex items-center gap-2 font-heading text-lg font-black tracking-tight text-brand-900">
                  <Crown className="h-4 w-4 text-rb-orange" />
                  Push pembelianmu dan kejar posisi teratas
                </h2>
              </div>
              <div className="rounded-full border border-rb-border bg-white px-4 py-1.5 text-xs font-semibold text-brand-700">
                Update ranking realtime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
