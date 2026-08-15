import PricingCards from '../sections/harga/PricingCards.jsx'
import Faq from '../sections/harga/Faq.jsx'

export default function Harga() {
  return (
    <div className="pt-[80px] font-body-md text-body-md">
      {/* Header / Title */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter text-center max-w-container-max mx-auto">
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md">
          Harga Fleksibel untuk Setiap Tim
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan kolaborasi dan produktivitas tim Anda. Tanpa
          biaya tersembunyi, batalkan kapan saja.
        </p>
      </section>

      <PricingCards />
      <Faq />

      {/* CTA Section */}
      <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter text-center max-w-container-max mx-auto">
        <div className="bg-surface-container-highest p-stack-lg md:p-16 rounded-xl ambient-shadow">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md">
            Siap mengubah cara tim Anda bekerja?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Bergabunglah dengan ribuan tim yang telah beralih ke KaiSpace.
          </p>
          <button
            type="button"
            className="px-8 py-4 rounded-lg bg-primary-container text-on-primary font-label-bold text-label-bold hover:bg-primary-hover transition-colors shadow-lg"
          >
            Mulai Uji Coba Gratis
          </button>
        </div>
      </section>
    </div>
  )
}
