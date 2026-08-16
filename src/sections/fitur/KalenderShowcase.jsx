import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'

/**
 * Baris fitur interaktif: klik salah satu kemampuan di daftar, panel pratinjau
 * di sebelahnya ikut berganti. Menggantikan FeatureRow statis khusus untuk
 * "Kalender, Tugas & Analitik".
 *
 * Pratinjaunya sengaja dibangun dari elemen HTML, bukan gambar placeholder —
 * jadi tidak menambah aset yang harus diganti nanti, dan tetap tajam di layar
 * mana pun.
 */

const ITEMS = [
  {
    id: 'kalender',
    icon: 'event_repeat',
    title: 'Acara berulang, pengingat, dan ekspor ICS',
    body: 'Jadwalkan sekali, berulang seterusnya. Pengingat dikirim otomatis, dan kalendernya bisa diekspor ke aplikasi lain.',
  },
  {
    id: 'booking',
    icon: 'meeting_room',
    title: 'Pemesanan ruang meeting',
    body: 'Pesan slot ruang, lalu masuk ke ruang virtualnya langsung dari acara yang sama.',
  },
  {
    id: 'tugas',
    icon: 'checklist',
    title: 'Daftar tugas harian per anggota',
    body: 'Setiap orang punya daftar sendiri, terlihat progresnya tanpa perlu rapat status.',
  },
  {
    id: 'analitik',
    icon: 'insights',
    title: 'Ringkasan keterlibatan dan penyelesaian',
    body: 'Seberapa hidup ruangnya, seberapa cepat tim merespons, dan seberapa tuntas pekerjaannya.',
  },
]

export default function KalenderShowcase() {
  const [active, setActive] = useState(0)
  const tabRefs = useRef([])

  // Pola tablist vertikal: panah untuk berpindah, Home/End ke ujung.
  const onKeyDown = (event) => {
    const last = ITEMS.length - 1
    let next = null
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    if (next === null) return
    event.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const current = ITEMS[active]

  return (
    <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
      {/* Panel pratinjau */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="min-w-0 rounded-xl border border-outline-variant/30 shadow-soft bg-surface-container-lowest p-5 sm:p-7 aspect-[4/3] flex"
      >
        <div key={current.id} className="w-full motion-safe:animate-fade-in">
          {active === 0 && <KalenderPreview />}
          {active === 1 && <BookingPreview />}
          {active === 2 && <TugasPreview />}
          {active === 3 && <AnalitikPreview />}
        </div>
      </div>

      {/* Copy, daftar yang bisa diklik, dan CTA */}
      <div className="min-w-0 pl-0 md:pl-12 mt-stack-lg md:mt-0">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-stack-md">
          <Icon name="event_available" filled />
        </div>
        <h2 className="font-headline-md text-headline-md text-on-background mb-stack-md">
          Kalender, Tugas &amp; Analitik
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
          Jadwal, pekerjaan harian, dan kondisi tim berada di tempat yang sama dengan ruang
          kerjanya, jadi tidak perlu berpindah aplikasi untuk tahu apa yang sedang berjalan.
        </p>

        <div
          role="tablist"
          aria-orientation="vertical"
          aria-label="Kemampuan kalender, tugas, dan analitik"
          className="flex flex-col gap-2"
          onKeyDown={onKeyDown}
        >
          {ITEMS.map((item, index) => {
            const selected = index === active
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => setActive(index)}
                className={`text-left rounded-xl border px-4 py-4 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  selected
                    ? 'border-primary/40 bg-surface shadow-soft'
                    : 'border-transparent hover:border-outline-variant/50 hover:bg-surface'
                }`}
              >
                <span className="flex items-start gap-3">
                  <span
                    className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center transition-colors ${
                      selected
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-high text-on-surface-variant'
                    }`}
                  >
                    <Icon name={item.icon} className="text-sm" />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block font-label-bold text-label-bold ${
                        selected ? 'text-on-surface' : 'text-on-surface-variant'
                      }`}
                    >
                      {item.title}
                    </span>
                    {selected && (
                      <span className="block font-body-md text-body-md text-on-surface-variant mt-1">
                        {item.body}
                      </span>
                    )}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <Link
          to="/checkout?plan=pro"
          className="mt-stack-lg w-full sm:w-auto inline-flex justify-center items-center gap-2 font-label-bold text-label-bold bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors active:scale-[0.98] duration-200"
        >
          Coba gratis sekarang
          <Icon name="arrow_forward" className="text-sm" />
        </Link>
      </div>
    </div>
  )
}

/* ── Pratinjau 1: kalender ─────────────────────────────────────────────── */
function KalenderPreview() {
  const hari = ['S', 'S', 'R', 'K', 'J', 'S', 'M']
  const tanggal = [4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="h-full flex flex-col">
      <PreviewHeader icon="calendar_month" title="Agustus 2026" action="Ekspor .ics" />

      <div className="grid grid-cols-7 gap-1 text-center mb-3">
        {hari.map((h, i) => (
          <div key={i} className="font-body-md text-[11px] text-on-surface-variant">
            {h}
          </div>
        ))}
        {tanggal.map((t) => (
          <div
            key={t}
            className={`font-body-md text-xs py-1.5 rounded ${
              t === 6 ? 'bg-primary text-on-primary font-bold' : 'text-on-surface-variant'
            }`}
          >
            {t}
          </div>
        ))}
      </div>

      <div className="space-y-2 flex-1">
        <EventRow time="09:00" title="Standup Harian" badge="Berulang" />
        <EventRow time="13:30" title="Sinkron Produk" badge="Pengingat" muted />
        <EventRow time="16:00" title="Retro Sprint" badge="Berulang" muted />
      </div>

      <div className="mt-3 pt-3 border-t border-outline-variant/30 flex items-center gap-2">
        <Icon name="notifications_active" className="text-primary text-sm" />
        <span className="font-body-md text-[11px] text-on-surface-variant">
          Pengingat terkirim 10 menit sebelum acara
        </span>
      </div>
    </div>
  )
}

function EventRow({ time, title, badge, muted = false }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
        muted ? 'border-outline-variant/40 bg-surface' : 'border-primary/25 bg-primary/5'
      }`}
    >
      <span className={`w-1 h-8 rounded-full shrink-0 ${muted ? 'bg-outline-variant' : 'bg-primary'}`} />
      <div className="min-w-0 flex-1">
        <div className="font-label-bold text-[13px] text-on-surface truncate">{title}</div>
        <div className="font-body-md text-[11px] text-on-surface-variant">{time}</div>
      </div>
      <span className="shrink-0 rounded-full bg-surface-container-high px-2 py-0.5 font-label-bold text-[10px] text-on-surface-variant">
        {badge}
      </span>
    </div>
  )
}

/* ── Pratinjau 2: pemesanan ruang ──────────────────────────────────────── */
function BookingPreview() {
  return (
    <div className="h-full flex flex-col">
      <PreviewHeader icon="meeting_room" title="Ruang Meeting A" action="Tersedia" />

      <div className="rounded-lg border border-outline-variant/40 bg-surface p-4 mb-3">
        <div className="flex items-center justify-between mb-3">
          <span className="font-headline-sm text-lg text-on-surface">10:00 – 11:00</span>
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-label-bold text-[10px] text-primary">
            Kamis, 6 Agu
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {['bg-primary', 'bg-secondary-container', 'bg-tertiary-container'].map((c, i) => (
              <span key={i} className={`w-7 h-7 rounded-full border-2 border-surface ${c}`} />
            ))}
          </div>
          <span className="font-body-md text-[11px] text-on-surface-variant">+4 diundang</span>
        </div>
      </div>

      <div className="mt-auto rounded-lg bg-primary px-4 py-3 flex items-center justify-center gap-2">
        <Icon name="meeting_room" className="text-on-primary text-sm" />
        <span className="font-label-bold text-[13px] text-on-primary">Gabung ke ruang virtual</span>
      </div>
    </div>
  )
}

/* ── Pratinjau 3: tugas harian ─────────────────────────────────────────── */
function TugasPreview() {
  const tugas = [
    { text: 'Review PR landing page', done: true },
    { text: 'Sinkron dengan tim CX', done: true },
    { text: 'Rapikan denah lantai 2', done: true },
    { text: 'Susun agenda sprint', done: false },
    { text: 'Kirim rekap kehadiran', done: false },
  ]
  const selesai = tugas.filter((t) => t.done).length

  return (
    <div className="h-full flex flex-col">
      <PreviewHeader icon="checklist" title="Tugas hari ini" action={`${selesai}/${tugas.length}`} />

      <div className="mb-3">
        <div className="h-1.5 w-full rounded-full bg-surface-container-high overflow-hidden">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${(selesai / tugas.length) * 100}%` }}
          />
        </div>
      </div>

      <ul className="space-y-1.5 flex-1">
        {tugas.map((t) => (
          <li key={t.text} className="flex items-center gap-2.5">
            <span
              className={`w-4 h-4 shrink-0 rounded flex items-center justify-center ${
                t.done ? 'bg-primary' : 'border border-outline-variant'
              }`}
            >
              {t.done && <Icon name="check" className="text-on-primary text-[10px]" />}
            </span>
            <span
              className={`font-body-md text-[12px] truncate ${
                t.done ? 'text-on-surface-variant line-through' : 'text-on-surface'
              }`}
            >
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ── Pratinjau 4: analitik ─────────────────────────────────────────────── */
// Bentuknya stat tile (angka utama), bukan grafik — itu bentuk yang tepat untuk
// metrik tunggal. Deret batang di bawah hanya satu seri satu warna, jadi tidak
// ada identitas warna yang perlu dibedakan.
function AnalitikPreview() {
  const bar = [
    { hari: 'Sen', nilai: 62 },
    { hari: 'Sel', nilai: 74 },
    { hari: 'Rab', nilai: 58 },
    { hari: 'Kam', nilai: 81 },
    { hari: 'Jum', nilai: 90 },
    { hari: 'Sab', nilai: 34 },
    { hari: 'Min', nilai: 21 },
  ]
  const max = Math.max(...bar.map((b) => b.nilai))

  return (
    <div className="h-full flex flex-col">
      <PreviewHeader icon="insights" title="Ringkasan minggu ini" action="7 hari" />

      <div className="grid grid-cols-3 gap-2">
        <StatTile label="Keterlibatan" value="86" unit="%" />
        <StatTile label="Waktu respons" value="1,4" unit="mnt" />
        <StatTile label="Tugas tuntas" value="92" unit="%" />
      </div>

      {/* Mark tipis, ujung membulat 4px, jarak antar batang 2px, dan sumbu yang
          tidak menonjol — batangnya tekstur tren, bukan bintang utama panel. */}
      <div className="flex-1 flex flex-col justify-end mt-4 min-h-0">
        <div className="flex-1 min-h-0 flex items-end gap-1 border-b border-outline-variant/40 pb-px">
          {bar.map((b) => (
            <div key={b.hari} className="flex-1 flex justify-center h-full items-end">
              <div
                className="w-3 rounded-t bg-primary/60"
                style={{ height: `${(b.nilai / max) * 100}%` }}
                title={`${b.hari}: ${b.nilai}%`}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-1.5">
          {bar.map((b) => (
            <span
              key={b.hari}
              className="flex-1 text-center font-body-md text-[10px] text-on-surface-variant"
            >
              {b.hari}
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Keterlibatan harian minggu ini: {bar.map((b) => `${b.hari} ${b.nilai} persen`).join(', ')}.
      </p>
    </div>
  )
}

function StatTile({ label, value, unit }) {
  return (
    <div className="rounded-lg bg-surface-container-low px-2.5 py-2">
      <div className="font-body-md text-[10px] text-on-surface-variant leading-tight mb-0.5">
        {label}
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="font-headline-sm text-lg text-on-surface">{value}</span>
        <span className="font-body-md text-[10px] text-on-surface-variant">{unit}</span>
      </div>
    </div>
  )
}

/* ── Bagian bersama ────────────────────────────────────────────────────── */
function PreviewHeader({ icon, title, action }) {
  return (
    <div className="flex items-center justify-between mb-4 pb-3 border-b border-outline-variant/30">
      <div className="flex items-center gap-2 min-w-0">
        <Icon name={icon} className="text-primary text-sm" />
        <span className="font-label-bold text-label-bold text-on-surface truncate">{title}</span>
      </div>
      <span className="shrink-0 font-body-md text-[11px] text-on-surface-variant">{action}</span>
    </div>
  )
}
