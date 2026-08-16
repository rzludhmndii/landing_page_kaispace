import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Icon from './Icon.jsx'

const NAV_LINKS = [
  { label: 'Fitur', to: '/fitur' },
  { label: 'Harga', to: '/harga' },
  { label: 'Solusi', to: '/solusi' },
]

const KONTAK_TO = '/solusi#kontak'
const CHECKOUT_PATH = '/checkout?plan=pro'

// Milik aplikasi, bukan landing — reverse proxy yang meneruskannya.
// Harus dibuka lewat <a>, jangan lewat React Router.
const APP_LOGIN_PATH = '/login'

const linkBase =
  'font-label-bold text-label-bold transition-colors active:scale-95 duration-200 pb-1'
const linkIdle = 'text-on-surface-variant hover:text-primary border-b-2 border-transparent'
const linkActive = 'text-primary border-b-2 border-primary'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const kontakActive = pathname === '/solusi' && hash === '#kontak'

  // "Kontak" menunjuk ke sebuah section, bukan rute tersendiri. Kalau kita sudah
  // berada di /solusi#kontak, klik biasa tidak mengubah lokasi sehingga tidak
  // ada yang memicu scroll — jadi geser sendiri di sini.
  const handleKontakClick = (event) => {
    event.preventDefault()
    setMenuOpen(false)

    if (pathname !== '/solusi') {
      navigate(KONTAK_TO)
      return
    }

    if (hash !== '#kontak') navigate(KONTAK_TO, { replace: true })
    document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })
  }

  // DESIGN.md > Navigation Header: fixed, dengan backdrop-blur (glassmorphism)
  // begitu pengguna scroll melewati hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup menu mobile setiap pindah halaman.
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 glass-effect backdrop-blur-md shadow-md'
          : 'bg-surface shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 active:scale-95 transition-transform duration-200"
        >
          <Icon name="hub" filled className="text-primary text-3xl" />
          <span className="font-headline-sm text-headline-sm font-bold text-primary">KaiSpace</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to={KONTAK_TO}
            onClick={handleKontakClick}
            className={`${linkBase} ${kontakActive ? linkActive : linkIdle}`}
          >
            Kontak
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* `<a>` biasa, bukan <Link>: /login milik aplikasi dan dilayani
              reverse proxy, jadi navigasinya harus sampai ke server. */}
          <a
            className="font-label-bold text-label-bold text-primary border border-primary px-4 py-2 rounded-lg hover:bg-surface-container transition-colors active:scale-95 duration-200"
            href={APP_LOGIN_PATH}
          >
            Masuk
          </a>
          <Link
            className="font-label-bold text-label-bold bg-primary-container text-white px-5 py-2 rounded-lg hover:bg-primary-hover transition-colors active:scale-95 duration-200"
            to={CHECKOUT_PATH}
          >
            Mulai Gratis
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-on-surface p-2"
          aria-expanded={menuOpen}
          aria-label="Buka menu navigasi"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-surface-dim px-gutter py-6 flex flex-col gap-4 shadow-md">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-label-bold text-label-bold transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to={KONTAK_TO}
            onClick={handleKontakClick}
            className={`font-label-bold text-label-bold transition-colors ${
              kontakActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Kontak
          </Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-surface-dim">
            <a
              className="font-label-bold text-label-bold text-primary border border-primary px-4 py-2 rounded-lg text-center hover:bg-surface-container transition-colors"
              href={APP_LOGIN_PATH}
            >
              Masuk
            </a>
            <Link
              className="font-label-bold text-label-bold bg-primary-container text-white px-5 py-2 rounded-lg text-center hover:bg-primary-hover transition-colors"
              to={CHECKOUT_PATH}
            >
              Mulai Gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
