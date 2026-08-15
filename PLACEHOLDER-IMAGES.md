# GANTI GAMBAR — daftar aset placeholder

Semua gambar dari desain Stitch aslinya di-hotlink ke `lh3.googleusercontent.com`
(aset pihak ketiga). Link itu **tidak** dipakai di project ini. Sebagai gantinya
ada placeholder SVG lokal di `public/images/`.

Ganti file-file di bawah dengan aset final (SVG/PNG/WebP). Nama file boleh tetap
sama supaya tidak perlu mengubah kode; kalau nama diganti, update path di file
komponen yang tercantum.

| File placeholder | Dipakai di | Rasio / ukuran | Deskripsi aset yang diharapkan |
|---|---|---|---|
| `public/images/hero-virtual-office.svg` | `src/sections/beranda/Hero.jsx` | 1:1 desktop, 16:9 mobile | Ilustrasi 2D isometrik ruang kantor virtual di latar putih terang: meja bergaya, tanaman pot, avatar tim kecil yang berinteraksi. Palet putih bersih + abu lembut + aksen ungu vibrant. |
| `public/images/avatar-1.svg` | `src/sections/beranda/Hero.jsx` | 1:1 (min. 96px) | Avatar bulat, perempuan profesional, gaya modern, pencahayaan terang, light mode. |
| `public/images/avatar-2.svg` | `src/sections/beranda/Hero.jsx` | 1:1 (min. 96px) | Avatar bulat, pria profesional muda, gaya modern, light mode. |
| `public/images/avatar-3.svg` | `src/sections/beranda/Hero.jsx` | 1:1 (min. 96px) | Avatar bulat, orang berkacamata, gaya modern, light mode. |
| `public/images/feature-kolaborasi-instan.svg` | `src/sections/beranda/FeaturesBento.jsx` | bebas, transparan lebih baik | Render 3D abstrak gelembung chat saling terhubung dengan garis bercahaya di latar putih bersih; aksen ungu terang, ambient shadow lembut. |
| `public/images/feature-kustomisasi-ruang.svg` | `src/sections/beranda/FeaturesBento.jsx` | ±16:10 | Tata letak rapi aset interior digital: meja modern minimalis, karpet geometris warna-warni, tanaman indoor; latar putih, bayangan lembut. |
| `public/images/fitur-kolaborasi-instan.svg` | `src/pages/Fitur.jsx` | 4:3 | Antarmuka kantor virtual 2D isometrik terang. Avatar tim beragam berkumpul di area lounge (proximity chat). Lantai grid putih, aksen ungu. |
| `public/images/fitur-minimalkan-distraksi.svg` | `src/pages/Fitur.jsx` | 4:3 | UI mode 'Do Not Disturb' di ruang kerja virtual. Minimalis, latar putih lembut, avatar dengan glow ungu halus, banyak whitespace. |
| `public/images/fitur-komunikasi-lengkap.svg` | `src/pages/Fitur.jsx` | 4:3 | UI video conference di dalam layout kantor virtual: screen share grafik, feed video peserta, reaksi emoji melayang. Light mode, aksen ungu. |
| `public/images/fitur-kustomisasi-ruang.svg` | `src/pages/Fitur.jsx` | 4:3 | Split-screen builder ruang: satu sisi open-plan terang, satu sisi focus area gelap. Drag-and-drop, sudut membulat, highlight ungu. |
| `public/images/solusi-hero.svg` | `src/pages/Solusi.jsx` | ±4:3 (dipakai `bg-cover`, tinggi 400px) | Ilustrasi hangat: avatar beragam berinteraksi di ruang kantor virtual modern bergaya. Putih lembut, abu halus, aksen ungu brand `#3B1E54`. |

## Warna aset

Aset final harus memakai ungu brand KaiSpace **#3B1E54** (hover #4A1E6D), bukan
ungu cerah Stitch (#7C3AED). Latar tetap putih/abu terang sesuai token surface.

## Catatan

- `public/favicon.svg` juga placeholder (mark "hub" ungu) — ganti dengan logo KaiSpace final.
- Kalau aset final berupa PNG/WebP, cukup ganti ekstensi di path `src` komponen terkait.
- Pertahankan rasio pada tabel supaya layout tidak bergeser.
