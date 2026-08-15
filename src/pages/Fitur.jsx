import FeatureRow from '../sections/fitur/FeatureRow.jsx'

const FEATURES = [
  {
    icon: 'group',
    iconClassName: 'bg-secondary-container/20 text-secondary-container',
    title: 'Kolaborasi Instan',
    description:
      'Hilangkan batasan fisik dengan proximity chat. Dekati rekan tim Anda di ruang virtual untuk langsung mulai berbicara, persis seperti di kantor sungguhan. Bergabung dengan percakapan hanya dengan satu klik tanpa perlu menjadwalkan meeting formal.',
    bullets: ['Sistem audio spasial yang realistis.', 'Indikator ketersediaan real-time.'],
    image: '/images/fitur-kolaborasi-instan.svg',
    imageAlt: 'Kolaborasi Instan',
    reversed: false,
  },
  {
    icon: 'do_not_disturb_on',
    iconClassName: 'bg-primary/10 text-primary',
    title: 'Minimalkan Distraksi',
    description:
      "Jaga fokus tim dengan tampilan yang disederhanakan dan kontrol status ketersediaan yang jelas. Setel mode 'Sedang Fokus' untuk mencegah interupsi saat Anda mengerjakan tugas penting.",
    bullets: ['Filter notifikasi berbasis konteks.', "Ruang kerja pribadi ('Zen Mode')."],
    image: '/images/fitur-minimalkan-distraksi.svg',
    imageAlt: 'Minimalkan Distraksi',
    reversed: true,
  },
  {
    icon: 'forum',
    iconClassName: 'bg-tertiary-container/20 text-tertiary-container',
    title: 'Komunikasi Lengkap',
    description:
      'Lebih dari sekadar obrolan suara. Fasilitasi meeting yang efektif dengan fitur screen sharing resolusi tinggi, perekaman otomatis, reaksi emoji interaktif, dan chat terintegrasi yang tersinkronisasi.',
    bullets: ['Screen sharing multi-monitor.', 'Papan tulis digital kolaboratif.'],
    image: '/images/fitur-komunikasi-lengkap.svg',
    imageAlt: 'Komunikasi Lengkap',
    reversed: false,
  },
  {
    icon: 'dashboard_customize',
    iconClassName: 'bg-primary/10 text-primary',
    title: 'Kustomisasi Ruang',
    description:
      'Bangun kantor yang mencerminkan budaya perusahaan Anda. Gunakan template siap pakai atau rancang area tim spesifik dari awal. Dukungan penuh untuk mode terang dan gelap agar sesuai dengan preferensi tiap anggota tim.',
    bullets: ['Ratusan aset furnitur virtual.', 'Tema warna bermerek perusahaan.'],
    image: '/images/fitur-kustomisasi-ruang.svg',
    imageAlt: 'Kustomisasi Ruang',
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
            Ruang kerja virtual yang dirancang untuk produktivitas tim jarak jauh. Ciptakan koneksi,
            minimalkan friksi, dan bangun budaya kerja yang positif.
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
              <a
                className="font-label-bold text-label-bold bg-surface text-primary px-8 py-3 rounded-lg hover:bg-surface-bright transition-colors shadow-sm active:scale-95 duration-200"
                href="#"
              >
                Mulai Gratis Sekarang
              </a>
              <a
                className="font-label-bold text-label-bold border border-surface text-on-primary px-8 py-3 rounded-lg hover:bg-surface/10 transition-colors active:scale-95 duration-200"
                href="#"
              >
                Jadwalkan Demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
