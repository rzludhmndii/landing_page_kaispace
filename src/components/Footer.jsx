import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const linkClass =
  'font-body-md text-body-md text-outline-variant hover:text-primary-fixed transition-colors opacity-80 hover:opacity-100'

const COLUMNS = [
  {
    title: 'Produk',
    links: [
      { label: 'Fitur Utama', to: '/fitur' },
      { label: 'Harga', to: '/harga' },
      { label: 'Solusi', to: '/solusi' },
      { label: 'Keamanan', href: '#' },
    ],
  },
  {
    title: 'Sumber Daya',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Panduan Remote Work', href: '#' },
      { label: 'Pusat Bantuan', href: '#' },
    ],
  },
  {
    title: 'Perusahaan',
    links: [
      { label: 'Tentang Kami', href: '#' },
      { label: 'Karier', href: '#' },
      { label: 'Kontak', to: '/solusi#kontak' },
      { label: 'Syarat Layanan', to: '/terms' },
      { label: 'Kebijakan Privasi', to: '/privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-on-background mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-gutter py-section-padding-mobile md:py-section-padding-desktop max-w-container-max mx-auto">
        <div className="col-span-1 flex flex-col gap-4">
          <div className="font-headline-sm text-headline-sm font-bold text-surface-bright">
            KaiSpace
          </div>
          <p className="font-body-md text-body-md text-outline-variant opacity-80">
            Membawa kehangatan kantor ke ruang kerja jarak jauh Anda.
          </p>
          <p className="font-body-md text-body-md text-outline-variant opacity-80">
            © {new Date().getFullYear()} KaiSpace. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              className="text-outline-variant hover:text-primary-fixed transition-colors"
              href="#"
              aria-label="Bagikan KaiSpace"
            >
              <Icon name="share" />
            </a>
            <a
              className="text-outline-variant hover:text-primary-fixed transition-colors"
              href="#"
              aria-label="Kirim email ke KaiSpace"
            >
              <Icon name="mail" />
            </a>
          </div>
        </div>

        {COLUMNS.map(({ title, links }) => (
          <div key={title} className="col-span-1 flex flex-col gap-4">
            <h4 className="font-label-bold text-label-bold text-surface-bright font-bold">
              {title}
            </h4>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link className={linkClass} to={link.to}>
                      {link.label}
                    </Link>
                  ) : (
                    <a className={linkClass} href={link.href}>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
