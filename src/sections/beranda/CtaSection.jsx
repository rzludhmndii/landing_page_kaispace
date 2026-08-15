export default function CtaSection() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto relative rounded-3xl overflow-hidden bg-primary-container text-white py-16 px-8 md:px-16 text-center shadow-2xl">
        {/* Pola latar abstrak */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary-container rounded-full mix-blend-overlay filter blur-3xl opacity-40" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="font-headline-md text-headline-md mb-6">Siap Menyatukan Tim Anda?</h2>
          <p className="font-body-lg text-body-lg text-primary-fixed mb-10 opacity-90">
            Bergabunglah dengan ribuan tim yang telah menemukan cara kerja remote yang lebih
            menyenangkan dan produktif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              className="font-label-bold text-label-bold bg-white text-primary-container px-8 py-4 rounded-lg hover:bg-surface-container transition-colors active:scale-95 duration-200 text-center"
              href="#"
            >
              Mulai Gratis Sekarang
            </a>
            <a
              className="font-label-bold text-label-bold border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-colors active:scale-95 duration-200 text-center"
              href="#"
            >
              Jadwalkan Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
