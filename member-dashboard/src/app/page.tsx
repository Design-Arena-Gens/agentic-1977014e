import { Calendar, CreditCard, Sparkles, Star, Users } from "lucide-react";
import { ProgressIndicator } from "@/components/progress-indicator";
import { StatCard } from "@/components/stat-card";
import { TrendChart } from "@/components/trend-chart";

export default function Home() {
  const stats = [
    {
      label: "Anggota Aktif",
      value: "1.248",
      change: 4.2,
      period: "Bulan ini",
      icon: <Users className="h-5 w-5" />,
    },
    {
      label: "Pendaftaran Baru",
      value: "186",
      change: 8.6,
      period: "7 hari terakhir",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      label: "Retensi",
      value: "92%",
      change: 2.1,
      period: "YoY",
      icon: <Star className="h-5 w-5" />,
    },
    {
      label: "Pendapatan",
      value: "Rp 148 jt",
      change: 6.4,
      period: "30 hari terakhir",
      icon: <CreditCard className="h-5 w-5" />,
    },
  ];

  const trendData = [
    { label: "Mar", value: 780 },
    { label: "Apr", value: 820 },
    { label: "Mei", value: 910 },
    { label: "Jun", value: 980 },
    { label: "Jul", value: 1020 },
  ];

  const tiers = [
    {
      name: "Prime Member",
      members: 402,
      growth: 6.8,
      perks: ["Premium event", "Prioritas support"],
      color: "from-emerald-500/90 to-emerald-400/70",
    },
    {
      name: "Gold Member",
      members: 582,
      growth: 4.1,
      perks: ["Workshop eksklusif", "Diskon partner"],
      color: "from-amber-500/90 to-amber-400/70",
    },
    {
      name: "Community",
      members: 264,
      growth: 3.3,
      perks: ["Forum diskusi", "Library konten"],
      color: "from-sky-500/90 to-sky-400/70",
    },
  ];

  const members = [
    {
      name: "Rico Fadillah",
      tier: "Prime",
      lastActive: "Hari ini",
      status: "Aktif",
      progress: 92,
    },
    {
      name: "Nadia Rahma",
      tier: "Gold",
      lastActive: "Kemarin",
      status: "Onboarding",
      progress: 60,
    },
    {
      name: "Yoga Satria",
      tier: "Prime",
      lastActive: "2 hari lalu",
      status: "Aktif",
      progress: 80,
    },
    {
      name: "Clara Paramita",
      tier: "Community",
      lastActive: "3 hari lalu",
      status: "Peringatan",
      progress: 48,
    },
  ];

  const tasks = [
    {
      label: "Hubungi member dengan masa aktif < 10 hari",
      due: "Besok",
      owner: "Tim Success",
    },
    {
      label: "Review data onboarding Gelombang Juli",
      due: "Jumat",
      owner: "Tim Operasional",
    },
    {
      label: "Kurasi konten akademi minggu depan",
      due: "Senin",
      owner: "Tim Konten",
    },
  ];

  const events = [
    {
      title: "Executive Breakfast Club",
      date: "18 Jul 2024",
      time: "07.30 — 10.00 WIB",
      type: "Offline",
    },
    {
      title: "Webinar: Growth Playbook Member",
      date: "23 Jul 2024",
      time: "19.00 — 20.30 WIB",
      type: "Online",
    },
  ];

  const highlights = [
    {
      title: "Program mentorship batch #12 telah dibuka",
      detail: "200 kuota tersedia dengan mentor dari industri kreatif dan teknologi.",
    },
    {
      title: "Kolaborasi baru dengan SpaceHub",
      detail: "Diskon coworking 35% untuk seluruh member aktif sampai 31 Agustus.",
    },
  ];

  const quickActions = [
    "Tambah anggota baru",
    "Kirim pesan broadcast",
    "Atur jadwal event",
    "Lihat laporan keuangan",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white py-12 text-zinc-900 dark:from-black dark:via-zinc-950 dark:to-zinc-950 dark:text-zinc-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 lg:px-10">
        <header className="flex flex-col gap-4 rounded-3xl border border-emerald-100/60 bg-white/70 p-8 shadow-lg shadow-emerald-100/50 backdrop-blur-lg dark:border-emerald-500/10 dark:bg-zinc-950/80 dark:shadow-none lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">
              Member Area
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
              Dasbor Pertumbuhan Komunitas
            </h1>
            <p className="mt-3 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
              Pantau performa komunitas, aktivitas member, dan peluang engagement baru dalam satu tampilan intuitif.
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-3 rounded-2xl border border-zinc-100 bg-white/80 p-4 text-sm shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/70 sm:flex-row sm:items-center sm:justify-between sm:text-base lg:w-auto">
            <div>
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Snapshot harian
              </p>
              <p className="font-semibold text-zinc-800 dark:text-zinc-50">
                14 Juli 2024
              </p>
            </div>
            <div className="flex items-center gap-2 text-emerald-500">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold">Realtime data sinkron</span>
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[2.1fr,1fr]">
          <div className="flex flex-col gap-6">
            <section className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
              {stats.map((item) => (
                <StatCard key={item.label} {...item} />
              ))}
            </section>

            <section className="grid gap-6 rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-sm shadow-emerald-100/50 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/80 dark:shadow-none lg:grid-cols-[1.2fr,0.9fr]">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">Tren Aktivasi Member</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Pertumbuhan konsisten selama 5 bulan terakhir.
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300">
                    +12.4% QoQ
                  </span>
                </div>
                <TrendChart data={trendData} />
              </div>

              <div className="flex flex-col gap-5">
                <ProgressIndicator
                  value={92}
                  label="Retensi Anggota"
                  description="Mayoritas member Prime bertahan lebih dari 12 bulan dengan tingkat kepuasan 4.8/5."
                />
                <div className="rounded-2xl border border-zinc-100 bg-gradient-to-br from-emerald-500/10 via-white to-white p-5 dark:border-zinc-800/60 dark:from-emerald-500/10 dark:via-zinc-900 dark:to-zinc-900">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-500">
                    Fokus Minggu Ini
                  </h3>
                  <ul className="mt-3 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <li>• Optimalkan campaign referensi member.</li>
                    <li>• Finalisasi modul onboarding interaktif.</li>
                    <li>• Aktifkan automasi reminder renewal.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-100 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/80">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Segmentasi Member</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Dampak program terbaru terhadap tiap level keanggotaan.
                  </p>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-emerald-500/30 dark:bg-zinc-900 dark:text-emerald-300">
                  Lihat detail cohort
                </button>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white/80 p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950/80"
                  >
                    <div className={`rounded-xl bg-gradient-to-br ${tier.color} p-4 text-white`}>
                      <h3 className="text-lg font-semibold">{tier.name}</h3>
                      <p className="text-sm opacity-90">{tier.members} member aktif</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-zinc-500 dark:text-zinc-400">
                        Pertumbuhan
                      </span>
                      <span className="font-semibold text-emerald-500 dark:text-emerald-300">
                        +{tier.growth}%
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {tier.perks.map((perk) => (
                        <span
                          key={perk}
                          className="rounded-full border border-zinc-200 bg-white px-3 py-1 font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400"
                        >
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-100 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/80">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Member Spotlight</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Aktivitas terbaru member prioritas.
                  </p>
                </div>
                <button className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-300">
                  Ekspor CSV
                </button>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-100 dark:border-zinc-800/60">
                <table className="min-w-full divide-y divide-zinc-100 text-sm dark:divide-zinc-800">
                  <thead className="bg-zinc-50/80 text-left text-xs uppercase tracking-wider text-zinc-500 dark:bg-zinc-900/60 dark:text-zinc-400">
                    <tr>
                      <th className="px-5 py-3">Nama</th>
                      <th className="px-5 py-3">Tier</th>
                      <th className="px-5 py-3">Aktivitas Terakhir</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 bg-white dark:divide-zinc-900 dark:bg-zinc-950">
                    {members.map((member) => (
                      <tr key={member.name} className="transition hover:bg-emerald-50/40 dark:hover:bg-emerald-500/10">
                        <td className="px-5 py-4 font-medium">{member.name}</td>
                        <td className="px-5 py-4">
                          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                            {member.tier}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-zinc-500 dark:text-zinc-400">
                          {member.lastActive}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              member.status === "Aktif"
                                ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"
                                : member.status === "Onboarding"
                                ? "bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300"
                                : "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300"
                            }`}
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-28 rounded-full bg-zinc-200 dark:bg-zinc-800">
                              <div
                                className="h-full rounded-full bg-emerald-500"
                                style={{ width: `${member.progress}%` }}
                              />
                            </div>
                            <span className="text-xs font-semibold text-zinc-500">
                              {member.progress}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-6">
            <section className="rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-sm shadow-emerald-100/40 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/80">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-emerald-500" />
                <div>
                  <h2 className="text-lg font-semibold">Agenda Komunitas</h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Aktivitas yang akan meningkatkan retensi minggu ini.
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {events.map((event) => (
                  <div
                    key={event.title}
                    className="rounded-2xl border border-zinc-100 bg-white/90 p-4 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950/80"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                      {event.type}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {event.date} • {event.time}
                    </p>
                    <button className="mt-3 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-300">
                      Kelola peserta
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/80">
              <h2 className="text-lg font-semibold">Tugas Prioritas</h2>
              <ul className="mt-4 space-y-4 text-sm">
                {tasks.map((task) => (
                  <li
                    key={task.label}
                    className="flex flex-col gap-2 rounded-2xl border border-zinc-100 bg-white/90 p-4 transition hover:border-emerald-200 hover:bg-emerald-50/60 dark:border-zinc-800/60 dark:bg-zinc-950/80 dark:hover:border-emerald-500/30 dark:hover:bg-emerald-500/10"
                  >
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                      <span>{task.owner}</span>
                      <span className="font-semibold text-emerald-500">{task.due}</span>
                    </div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {task.label}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/80">
              <h2 className="text-lg font-semibold">Sorotan & Peluang</h2>
              <div className="mt-4 space-y-4">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-2xl border border-zinc-100 bg-white/90 p-4 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950/80"
                  >
                    <h3 className="font-semibold text-zinc-800 dark:text-zinc-100">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      {highlight.detail}
                    </p>
                    <button className="mt-3 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 dark:text-emerald-300">
                      Tindak lanjuti
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/80">
              <h2 className="text-lg font-semibold">Aksi Cepat</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    className="rounded-2xl border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-emerald-600 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-emerald-500/30 dark:bg-zinc-950/80 dark:text-emerald-300 dark:hover:border-emerald-400/60"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
