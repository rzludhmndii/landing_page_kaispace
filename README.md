# KaiSpace — Landing Page

Situs marketing statis KaiSpace, hasil konversi desain Stitch (4 halaman HTML) ke
React. **Project ini terpisah dari repo aplikasi KaiSpace/Kaitech.**

Stack: Vite + React 19 + React Router 7 + Tailwind CSS 3 (via PostCSS, bukan CDN).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output ke dist/
npm run preview  # cek hasil build
```

Butuh Node.js 18+ (disarankan 20 LTS): https://nodejs.org

## Rute

| Path | Halaman | Acuan desain |
|---|---|---|
| `/` | Beranda | `design-source/beranda.screen.png` |
| `/fitur` | Fitur | `design-source/fitur.screen.png` |
| `/harga` | Harga | `design-source/harga.screen.png` |
| `/solusi` | Solusi (+ form kontak `#kontak`) | `design-source/solusi.screen.png` |

File `code.html` dari Stitch sudah dihapus setelah konversi selesai. Yang tersisa
di `design-source/` hanya screenshot tiap halaman dan `DESIGN.md` — murni acuan,
tidak ikut ter-build.

## Struktur

```
landing_page_kaispace/
├── index.html                 # font Inter + Material Symbols (Google Fonts)
├── tailwind.config.js         # design tokens dari DESIGN.md
├── postcss.config.js
├── vite.config.js
├── PLACEHOLDER-IMAGES.md      # daftar aset yang harus diganti
├── design-source/             # DESIGN.md + screenshot Stitch (acuan saja)
├── public/
│   ├── favicon.svg
│   └── images/                # placeholder SVG lokal (GANTI GAMBAR)
└── src/
    ├── main.jsx               # entry + BrowserRouter
    ├── App.jsx                # definisi 4 rute
    ├── index.css              # @tailwind + utility kustom (soft-shadow, glass-effect, ...)
    ├── components/
    │   ├── Layout.jsx         # Header + <Outlet/> + Footer
    │   ├── Header.jsx         # fixed, backdrop-blur saat scroll, menu mobile
    │   ├── Footer.jsx
    │   ├── Icon.jsx           # wrapper Material Symbols
    │   └── ScrollToTop.jsx
    ├── pages/                 # Beranda, Fitur, Harga, Solusi
    └── sections/              # section per halaman (beranda/, fitur/, harga/, solusi/)
```

## Design tokens

Semua warna, tipografi, spacing, dan radius ada di `tailwind.config.js`. Kelas
seperti `text-display-lg`, `px-gutter`, `py-section-padding-desktop`,
`max-w-container-max`, `bg-primary` berasal dari sana. Jangan hardcode hex di JSX.

### Palet ungu: brand KaiSpace, bukan Stitch

`DESIGN.md` hasil Stitch memakai ungu cerah (#7C3AED / #630ED4). Itu **bukan**
warna brand KaiSpace dan sengaja tidak dipakai. Seluruh keluarga ungu diganti:

| Token | Nilai | Dipakai untuk |
|---|---|---|
| `primary` / `primary-container` | `#3B1E54` | isi tombol, aksen brand, banner CTA |
| `primary-hover` | `#4A1E6D` | state hover tombol brand |
| `on-primary` | `#FFFFFF` | teks di atas primary |
| `secondary-container` | `#693597` | badge, blob dekoratif, ikon fitur |
| `tertiary-container` | `#6E3091` | ikon fitur varian ketiga |
| `primary-fixed` / `primary-fixed-dim` | `#E9DEF2` / `#D5C0E7` | teks & aksen di atas latar gelap |

Turunan di atas diambil dari hue yang sama dengan #3B1E54 (±272°); hanya
saturasi dan lightness yang bergeser, jadi semuanya satu keluarga.

Sisanya — surface terang, `on-surface`, outline, tipografi Inter, spacing,
radius — disalin persis dari `design-source/DESIGN.md`.

## Ikon

Material Symbols Outlined dimuat lewat Google Fonts di `index.html`. Pakai
komponen `<Icon name="bolt" />`; tambahkan prop `filled` untuk varian `FILL 1`.
