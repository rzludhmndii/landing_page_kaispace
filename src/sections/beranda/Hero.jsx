import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'

const AVATARS = [
  { src: '/landing-assets/images/avatar-1.svg', alt: 'Anggota tim KaiSpace' },
  { src: '/landing-assets/images/avatar-2.svg', alt: 'Anggota tim KaiSpace' },
  { src: '/landing-assets/images/avatar-3.svg', alt: 'Anggota tim KaiSpace' },
]

export default function Hero() {
  return (
    <section className="relative pt-20 pb-section-padding-mobile md:pb-section-padding-desktop px-gutter overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-high via-background to-background opacity-70" />

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* min-w-0: cegah intrinsic width gambar/teks melebarkan track grid di mobile */}
        <div className="lg:col-span-6 min-w-0 flex flex-col items-start gap-stack-lg z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-surface-dim text-primary font-label-bold text-label-bold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            Cara Baru Bekerja Bersama
          </div>

          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
            Hadir Bersama, <br />
            <span className="text-primary-container">Walau Berbeda Ruang.</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            KaiSpace menghadirkan kembali kehangatan kantor fisik ke dalam lingkungan kerja remote
            Anda. Ruang virtual 2D yang membuat kolaborasi tim terasa instan, natural, dan
            menyenangkan.
          </p>

          <div className="flex flex-wrap items-center gap-4 w-full">
            <Link
              className="font-label-bold text-label-bold bg-primary-container text-white px-8 py-4 rounded-lg hover:bg-primary-hover transition-all active:scale-95 duration-200 shadow-lg shadow-primary-container/30 flex items-center gap-2"
              to="/checkout?plan=pro"
            >
              Buat Space
              <Icon name="arrow_forward" className="text-sm" />
            </Link>
            <Link
              className="font-label-bold text-label-bold text-primary border-2 border-primary-container/20 px-8 py-4 rounded-lg hover:border-primary-container hover:bg-surface-container transition-all active:scale-95 duration-200"
              to="/fitur"
            >
              Lihat Fitur
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-surface-dim w-full max-w-md">
            <div className="flex -space-x-3">
              {AVATARS.map((avatar, index) => (
                // GANTI GAMBAR: avatar profesional, gaya modern, light mode.
                <img
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high object-cover"
                  src={avatar.src}
                  alt={avatar.alt}
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-surface bg-primary-container text-white flex items-center justify-center font-label-bold text-xs">
                +2k
              </div>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant">Tim telah bergabung.</p>
          </div>
        </div>

        <div className="lg:col-span-6 min-w-0 relative z-10">
          <div className="relative rounded-2xl overflow-hidden soft-shadow bg-surface border border-surface-dim aspect-video lg:aspect-square flex items-center justify-center">
            {/* GANTI GAMBAR: ilustrasi isometrik 2D kantor virtual, latar putih
                bersih, aksen ungu vibrant, aesthetic light-mode korporat. */}
            <img
              className="w-full h-full object-cover"
              src="/landing-assets/images/hero-virtual-office.svg"
              alt="Ilustrasi isometrik ruang kantor virtual KaiSpace"
            />

            {/* Floating UI element untuk mensimulasikan aplikasi */}
            <div className="absolute top-4 left-4 bg-white/90 glass-effect p-3 rounded-lg shadow-sm border border-surface-dim flex items-center gap-3 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-white">
                <Icon name="waving_hand" className="text-sm" />
              </div>
              <div className="text-sm font-label-bold">Budi menyapa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
