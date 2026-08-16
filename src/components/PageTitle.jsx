import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SUFFIX = 'KaiSpace'

// Judul tab per rute. Tanpa ini semua halaman memakai <title> yang sama,
// sehingga tab dan hasil pencarian tidak bisa dibedakan.
const TITLES = {
  '/': 'KaiSpace — Ruang Kerja Virtual untuk Tim Modern',
  '/fitur': `Fitur — ${SUFFIX}`,
  '/harga': `Harga — ${SUFFIX}`,
  '/solusi': `Solusi — ${SUFFIX}`,
  '/checkout': `Buat Workspace — ${SUFFIX}`,
  '/checkout/success': `Menyiapkan Workspace — ${SUFFIX}`,
  '/checkout/cancel': `Pembayaran Dibatalkan — ${SUFFIX}`,
  '/terms': `Syarat Layanan — ${SUFFIX}`,
  '/privacy': `Kebijakan Privasi — ${SUFFIX}`,
}

const FALLBACK = `Halaman Tidak Ditemukan — ${SUFFIX}`

export default function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] || FALLBACK
  }, [pathname])

  return null
}
