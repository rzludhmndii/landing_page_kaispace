import SolusiBento from '../sections/solusi/SolusiBento.jsx'
import SolusiMasalah from '../sections/solusi/SolusiMasalah.jsx'
import ContactSection from '../sections/solusi/ContactSection.jsx'

export default function Solusi() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto relative">
        <div className="absolute inset-0 bg-surface-container-low opacity-50 rounded-3xl -z-10 blur-3xl transform -translate-y-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="min-w-0 space-y-stack-md">
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background">
              Ruang Digital
              <br />
              <span className="text-primary-container">Untuk Siapa Saja.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Dari percakapan sehari-hari sampai pertanggungjawaban jam kerja — KaiSpace menyatukan
              ruang kerja tim jarak jauh Anda dalam satu tempat yang hangat dan mudah diakses.
            </p>
          </div>
          <div className="relative min-w-0 h-[400px] w-full rounded-2xl overflow-hidden shadow-soft border border-outline-variant/30">
            {/* GANTI GAMBAR: ilustrasi digital avatar beragam berinteraksi di
                ruang kantor virtual modern, aksen ungu brand #3B1E54. */}
            <div
              className="bg-cover bg-center w-full h-full"
              role="img"
              aria-label="Avatar tim berinteraksi di ruang kantor virtual KaiSpace"
              style={{ backgroundImage: "url('/images/solusi-hero.svg')" }}
            />
          </div>
        </div>
      </section>

      <SolusiBento />
      <SolusiMasalah />
      <ContactSection />
    </div>
  )
}
