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
            Dirancang untuk beradaptasi dengan cara Anda bekerja dan berinteraksi. KaiSpace
            menyediakan kanvas kosong untuk budaya unik Anda.
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
                  Kembalikan koneksi spontan antar rekan kerja. Bekerja bersama seolah berada di
                  ruangan yang sama, kurangi kelelahan video call, dan bangun budaya perusahaan yang
                  kuat dari mana saja.
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
                <Icon name="celebration" filled />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">
                Acara Virtual
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Ciptakan pengalaman acara yang tak terlupakan. Networking organik, presentasi
                interaktif, dan ruang khusus sponsor dalam satu platform.
              </p>
            </div>
          </div>

          {/* Communities */}
          <div className={`${CARD_BASE} p-6`}>
            <div>
              <div className="w-10 h-10 bg-tertiary-container/10 rounded-lg flex items-center justify-center mb-4 text-tertiary-container">
                <Icon name="forum" filled />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-2">
                Komunitas Online
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                Beri komunitas Anda tempat untuk &apos;nongkrong&apos;. Fasilitasi diskusi hangat
                dan kegiatan bersama di luar forum teks biasa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
