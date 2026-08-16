import Icon from '../../components/Icon.jsx'

export default function FeaturesBento() {
  return (
    <section
      className="py-section-padding-mobile md:py-section-padding-desktop px-gutter bg-surface-container-lowest"
      id="fitur"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
            Ruang Kerja yang Hidup
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Kembalikan spontanitas dan koneksi yang hilang di ruang kerja remote tradisional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[280px]">
          {/* Feature 1: Large Span */}
          <div className="md:col-span-2 bg-surface rounded-2xl p-8 border border-surface-dim soft-shadow hover-lift flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
                <Icon name="bolt" className="text-primary-container text-2xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Kolaborasi Instan
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Cukup berjalan ke avatar rekan tim Anda untuk memulai obrolan suara. Tanpa perlu
                menjadwalkan meeting atau mengirim link.
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
              {/* GANTI GAMBAR: render 3D abstrak gelembung chat & garis koneksi
                  bercahaya di latar putih, aksen ungu terang. */}
              <img
                className="w-full h-full object-contain"
                src="/images/feature-kolaborasi-instan.svg"
                alt=""
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-surface rounded-2xl p-8 border border-surface-dim soft-shadow hover-lift flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-6">
                <Icon name="headphones" className="text-secondary-container text-2xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Mode Fokus</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Masuk ke zona fokus yang bisa dikunci. Status Anda terlihat oleh tim, jadi kerja
              mendalam tidak terpotong sapaan.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-surface rounded-2xl p-8 border border-surface-dim soft-shadow hover-lift flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-container/10 flex items-center justify-center mb-6">
                <Icon name="forum" className="text-tertiary-container text-2xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Meeting + Chat
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Berbagi layar, rekam jalannya sesi, dan chat yang mengikuti zona tempat Anda berada.
            </p>
          </div>

          {/* Feature 4: Span 2 */}
          <div className="md:col-span-2 bg-surface rounded-2xl p-8 border border-surface-dim soft-shadow hover-lift flex flex-col md:flex-row gap-8 items-center overflow-hidden">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon name="dashboard_customize" className="text-primary text-2xl" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Kustomisasi Ruang
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Rancang kantor impian Anda. Dari ruang meeting formal hingga lounge santai,
                sesuaikan dengan budaya tim Anda.
              </p>
            </div>
            <div className="flex-1 w-full h-full min-h-[160px] bg-surface-container-high rounded-xl relative overflow-hidden">
              {/* GANTI GAMBAR: koleksi aset interior digital (meja minimalis,
                  karpet geometris, tanaman) di latar putih bersih. */}
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/feature-kustomisasi-ruang.svg"
                alt="Aset interior untuk kustomisasi ruang virtual"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
