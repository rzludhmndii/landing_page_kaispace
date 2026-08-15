import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Reset posisi scroll setiap pindah rute; hormati anchor (#kontak) bila ada.
 *
 * `key` ikut jadi dependency supaya navigasi ke URL yang sama (mis. klik
 * "Kontak" saat sudah di /solusi#kontak) tetap memicu scroll ulang.
 */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Halaman tujuan baru saja dipasang — coba lagi setelah frame berikutnya.
      const raf = requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [pathname, hash, key])

  return null
}
