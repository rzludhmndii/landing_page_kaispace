import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <div className="pt-[120px] pb-section-padding-mobile md:pb-section-padding-desktop px-gutter">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center mx-auto mb-6">
          <Icon name="explore_off" filled className="text-3xl" />
        </div>
        <h1 className="font-headline-md text-headline-md text-on-surface mb-stack-md">
          Halaman tidak ditemukan
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
          Alamat yang Anda buka tidak ada di situs KaiSpace.
        </p>
        <Link
          to="/"
          className="inline-block font-label-bold text-label-bold bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors"
        >
          Kembali ke beranda
        </Link>
      </div>
    </div>
  )
}
