import { Link } from 'react-router-dom'
import FeatureRow from '../sections/fitur/FeatureRow.jsx'
import KemampuanGrid from '../sections/fitur/KemampuanGrid.jsx'

// Deskripsi di bawah mengikuti kemampuan yang benar-benar berjalan di aplikasi
// KaiSpace (route server dan/atau komponen UI). Lihat catatan di README sebelum
// menambah entri baru.
const FEATURES = [
  {
    icon: 'group',
    iconClassName: 'bg-secondary-container/20 text-secondary-container',
    title: 'Kolaborasi Instan',
    description:
      'Dekati avatar rekan tim, dan suara langsung tersambung tanpa undangan maupun tautan meeting. Volume mengikuti jarak, persis seperti mendekati meja seseorang di kantor sungguhan.',
    bullets: [
      'Audio dan video aktif otomatis dalam radius tiga tile.',
      'Panggilan langsung antar-peserta, bukan lewat server perantara.',
      'Emote, angkat tangan, colek, dan ikuti rekan berjalan.',
      'Papan nama, status khusus, dan alasan saat sedang pergi.',
    ],
    image: '/landing-assets/images/fitur-kolaborasi-instan.svg',
    imageAlt: 'Avatar tim saling mendekat dan otomatis tersambung suara',
    reversed: false,
  },
  {
    icon: 'do_not_disturb_on',
    iconClassName: 'bg-primary/10 text-primary',
    title: 'Fokus & Kontrol Akses',
    description:
      'Zona kerja bisa dikunci per peran, lengkap dengan antrean dan pemesanan slot. Percakapan di dalam zona tidak bocor keluar, dan rapat tidak lagi disela orang lewat.',
    bullets: [
      'Zona berlabel: meeting, meja kerja, fokus, dan umum.',
      'Kunci zona serta pintu berdasarkan peran anggota.',
      'Antrean otomatis dan persetujuan sebelum seseorang masuk.',
      'Chat khusus zona, hanya sampai ke orang di ruangan yang sama.',
    ],
    image: '/landing-assets/images/fitur-minimalkan-distraksi.svg',
    imageAlt: 'Zona fokus terkunci dengan antrean masuk',
    reversed: true,
  },
  {
    icon: 'videocam',
    iconClassName: 'bg-tertiary-container/20 text-tertiary-container',
    title: 'Rapat Lengkap & Terekam',
    description:
      'Berbagi layar, rekam jalannya sesi, lalu simpan catatannya. Setiap pertemuan meninggalkan jejak yang bisa dibuka lagi, bukan hilang begitu peserta keluar.',
    bullets: [
      'Berbagi layar ke peserta yang sedang terhubung.',
      'Perekaman sesi dengan tautan unduh berbatas waktu.',
      'Catatan pertemuan tersimpan per rapat.',
      'Chat kanal, pesan langsung, dan lampiran berkas.',
    ],
    image: '/landing-assets/images/fitur-komunikasi-lengkap.svg',
    imageAlt: 'Rapat dengan berbagi layar dan perekaman berjalan',
    reversed: false,
  },
  {
    icon: 'dashboard_customize',
    iconClassName: 'bg-primary/10 text-primary',
    title: 'Ruang yang Anda Rancang Sendiri',
    description:
      'Cat lantainya, tata furniturnya, gambar zonanya. Denah kantor mengikuti cara tim Anda bekerja, bukan sebaliknya.',
    bullets: [
      'Editor ruang dengan palet furnitur berkategori.',
      'Portal antar-ruang dan titik teleport tersimpan.',
      'Duduk di kursi, klaim meja, dan tempel catatan.',
      'Minimap, kontrol zoom, dan mode ringkas.',
    ],
    image: '/landing-assets/images/fitur-kustomisasi-ruang.svg',
    imageAlt: 'Editor ruang dengan palet furnitur dan zona',
    reversed: true,
  },
  {
    icon: 'how_to_reg',
    iconClassName: 'bg-secondary-container/20 text-secondary-container',
    title: 'Kehadiran & Jam Kerja',
    description:
      'Absensi yang terikat lokasi dan jaringan kantor, dengan aturan shift yang Anda tentukan sendiri. Keterlambatan dan lembur terhitung otomatis, tanpa rekap manual.',
    bullets: [
      'Clock in/out dengan geofence dan pembatasan alamat IP.',
      'Shift, toleransi keterlambatan, dan jam istirahat.',
      'Perhitungan lembur mengikuti aturan organisasi.',
      'Pengajuan koreksi absensi dan cuti berjenjang.',
    ],
    image: '/landing-assets/images/fitur-kehadiran.svg',
    imageAlt: 'Panel absensi dengan geofence dan aturan shift',
    reversed: false,
  },
  {
    icon: 'event_available',
    iconClassName: 'bg-primary/10 text-primary',
    title: 'Kalender, Tugas & Analitik',
    description:
      'Jadwal, pekerjaan harian, dan kondisi tim berada di tempat yang sama dengan ruang kerjanya, jadi tidak perlu berpindah aplikasi untuk tahu apa yang sedang berjalan.',
    bullets: [
      'Acara berulang, pengingat, dan ekspor ke format ICS.',
      'Pemesanan ruang meeting yang tersambung ke ruang virtual.',
      'Daftar tugas harian per anggota.',
      'Ringkasan keterlibatan, waktu respons, dan penyelesaian tugas.',
    ],
    image: '/landing-assets/images/fitur-kalender-analitik.svg',
    imageAlt: 'Kalender tim, daftar tugas, dan ringkasan analitik',
    reversed: true,
  },
]

export default function Fitur() {
  return (
    <>
      {/* Small Hero */}
      <header className="pt-[140px] pb-section-padding-mobile md:pb-section-padding-desktop px-gutter relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low to-transparent -z-10" />
        <div className="max-w-container-max mx-auto text-center">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-background mb-stack-md">
            Fitur KaiSpace
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Bukan sekadar ruang mengobrol. KaiSpace menyatukan kantor virtual, kehadiran, dan
            koordinasi tim jarak jauh dalam satu tempat yang sama.
          </p>
        </div>
      </header>

      <main className="space-y-section-padding-mobile md:space-y-section-padding-desktop pb-section-padding-desktop">
        {FEATURES.map((feature, index) => {
          // Baris genap tanpa background, baris ganjil dengan surface-container-low.
          const tinted = index % 2 === 1
          return (
            <section
              key={feature.title}
              className={
                tinted
                  ? 'px-gutter bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop'
                  : 'px-gutter'
              }
            >
              <FeatureRow {...feature} />
            </section>
          )
        })}

        <KemampuanGrid />

        {/* CTA Section */}
        <section className="px-gutter py-section-padding-mobile">
          <div className="max-w-4xl mx-auto bg-primary text-on-primary rounded-2xl p-8 md:p-16 text-center shadow-brand">
            <h2 className="font-headline-md text-headline-md mb-stack-md">
              Siap mengubah cara tim Anda bekerja?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/90 mb-stack-lg max-w-2xl mx-auto">
              Bergabunglah dengan ribuan tim yang telah menemukan kembali kegembiraan bekerja
              bersama, di mana pun mereka berada.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                className="font-label-bold text-label-bold bg-surface text-primary px-8 py-3 rounded-lg hover:bg-surface-bright transition-colors shadow-sm active:scale-95 duration-200"
                to="/checkout?plan=pro"
              >
                Mulai Gratis Sekarang
              </Link>
              <Link
                className="font-label-bold text-label-bold border border-surface text-on-primary px-8 py-3 rounded-lg hover:bg-surface/10 transition-colors active:scale-95 duration-200"
                to="/solusi#kontak"
              >
                Jadwalkan Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
