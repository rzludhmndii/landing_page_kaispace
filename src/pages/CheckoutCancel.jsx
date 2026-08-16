import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function CheckoutCancel() {
  return (
    <div className="pt-[120px] pb-section-padding-mobile md:pb-section-padding-desktop px-gutter">
      <div className="max-w-xl mx-auto">
        <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-soft p-8 md:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center mx-auto mb-6">
            <Icon name="remove_shopping_cart" filled className="text-3xl" />
          </div>

          <h1 className="font-headline-sm text-headline-sm text-on-surface mb-4">
            Pembayaran dibatalkan
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Tidak ada biaya yang ditagihkan dan workspace belum dibuat. Anda bisa mengulang kapan
            saja — data yang tadi diisi tidak kami simpan.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/harga"
              className="font-label-bold text-label-bold bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors active:scale-[0.98] duration-200"
            >
              Kembali ke harga
            </Link>
            <Link
              to="/solusi#kontak"
              className="font-label-bold text-label-bold border border-primary text-primary px-8 py-4 rounded-lg hover:bg-surface-container transition-colors"
            >
              Bicara dengan kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
