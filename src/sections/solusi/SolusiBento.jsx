import Icon from '../../components/Icon.jsx'

const CARD_BASE =
  'bg-surface rounded-2xl border border-outline-variant/30 shadow-soft hover:shadow-soft-lift transition-all duration-300 flex flex-col justify-between'

export default function SolusiBento() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface-container-low">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Solusi Fleksibel untuk Kebutuhan Anda
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Satu ruang kerja yang menyesuaikan diri dengan cara tim Anda beroperasi — dari
            percakapan sehari-hari sampai kepatuhan jam kerja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
          {/* Remote Teams (Large Card) */}
          <div className="md:col-span-2 md:row-span-2 bg-surface rounded-2xl p-8 border border-outline-variant/30 shadow-soft hover:shadow-soft-lift transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary-container/10 transition-colors" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary-container/10 rounded-xl flex items-center justify-center mb-6 text-primary-container">
                  <Icon name="groups" filled />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-3">
                  Tim Remote &amp; Hybrid
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Kembalikan percakapan singkat yang hilang saat tim terpisah. Mendekat ke rekan
                  sudah cukup untuk mulai bicara, zona fokus menjaga kerja mendalam tetap tenang,
                  dan semua orang tahu siapa sedang ada di mana tanpa harus bertanya.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-primary-container font-label-bold text-label-bold cursor-pointer group-hover:gap-4 transition-all">
                <span>Pelajari lebih lanjut</span>
                <Icon name="arrow_forward" className="text-sm" />
              </div>
            </div>
          </div>

          {/* Events */}
          <div className={`${CARD_BASE} p-6`}>
            <div>
              <div className="w-10 h-10 bg-secondary-container/10 rounded-lg flex items-center justify-center mb-4 text-secondary-container">
                <Icon name="how_to_reg" filled />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">
                Operasional &amp; Kepatuhan
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Untuk organisasi yang harus mempertanggungjawabkan jam kerja. Absensi terikat lokasi
                dan jaringan, shift dan lembur terhitung sendiri, cuti lewat alur persetujuan.
              </p>
            </div>
          </div>

          {/* Communities */}
          <div className={`${CARD_BASE} p-6`}>
            <div>
              <div className="w-10 h-10 bg-tertiary-container/10 rounded-lg flex items-center justify-center mb-4 text-tertiary-container">
                <Icon name="diversity_3" filled />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">
                Kerja Lintas Organisasi
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Undang klien, vendor, atau tim mitra lewat tautan tamu berbatas. Setiap tindakan
                penting punya jejak audit, dan kebijakan berbagi dipegang di tingkat organisasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
