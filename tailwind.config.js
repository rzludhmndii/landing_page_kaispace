/** @type {import('tailwindcss').Config} */

// Tipografi, spacing, radius, dan seluruh surface/neutral disalin persis dari
// design-source/DESIGN.md.
//
// PENGECUALIAN — PALET UNGU. DESIGN.md (hasil Stitch) memakai ungu cerah
// (#7C3AED / #630ED4). Itu BUKAN warna brand KaiSpace. Seluruh keluarga ungu
// di bawah diganti dengan ungu KaiSpace asli dari Figma:
//
//   primary        #3B1E54   (tombol & aksen brand)
//   primary-hover  #4A1E6D   (state hover)
//   on-primary     #FFFFFF
//
// Turunan lain (secondary/tertiary/fixed) diturunkan harmonis dari #3B1E54 —
// hue ±272°, hanya saturasi & lightness yang bergeser — supaya satu keluarga.
// Jangan pernah mengembalikan ungu cerah Stitch ke sini.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Surface & neutral — dari DESIGN.md, tidak diubah ───────────────
        surface: '#fcf8ff',
        'surface-dim': '#dad7f3',
        'surface-bright': '#fcf8ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f5f2ff',
        'surface-container': '#efecff',
        'surface-container-high': '#e8e5ff',
        'surface-container-highest': '#e2e0fc',
        'surface-variant': '#e2e0fc',
        background: '#fcf8ff',
        'on-surface': '#1a1a2e',
        'on-background': '#1a1a2e',
        'on-surface-variant': '#4a4455',
        'inverse-surface': '#2f2e43',
        'inverse-on-surface': '#f2efff',
        outline: '#7b7487',
        'outline-variant': '#ccc3d8',

        // ── Brand KaiSpace — override ungu Stitch ──────────────────────────
        // Warna isi tombol & aksen brand. `primary` dan `primary-container`
        // sengaja sama: di desain Stitch keduanya sama-sama dipakai sebagai
        // fill brand, jadi keduanya harus jadi #3B1E54.
        primary: '#3b1e54',
        'primary-container': '#3b1e54',
        'primary-hover': '#4a1e6d',
        'on-primary': '#ffffff',
        'on-primary-container': '#f0e9f7',
        'surface-tint': '#4a1e6d',

        // Aksen sekunder/tersier — turunan lebih terang dari #3B1E54,
        // dipakai untuk ikon fitur, badge, dan blob dekoratif.
        secondary: '#572c7d',
        'on-secondary': '#ffffff',
        'secondary-container': '#693597',
        'on-secondary-container': '#fffbff',
        tertiary: '#54256f',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#6e3091',
        'on-tertiary-container': '#f1e7f8',

        // Varian terang — dipakai sebagai teks/aksen di atas latar gelap
        // (footer, banner CTA, kartu harga "Tim").
        'inverse-primary': '#d5c0e7',
        'primary-fixed': '#e9def2',
        'primary-fixed-dim': '#d5c0e7',
        'on-primary-fixed': '#221230',
        'on-primary-fixed-variant': '#42225e',
        'secondary-fixed': '#f0e6f7',
        'secondary-fixed-dim': '#dcc6ea',
        'on-secondary-fixed': '#251536',
        'on-secondary-fixed-variant': '#4c2870',
        'tertiary-fixed': '#f0e6f7',
        'tertiary-fixed-dim': '#dcc6ea',
        'on-tertiary-fixed': '#251536',
        'on-tertiary-fixed-variant': '#4c2870',

        // ── Error — dari DESIGN.md, tidak diubah ───────────────────────────
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
      },

      // Skala radius mengikuti config Stitch (rounded-lg = 8px "small elements",
      // rounded-2xl = 16px "cards", rounded-3xl = 24px "large elements"),
      // sesuai maksud DESIGN.md > Shapes.
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },

      spacing: {
        gutter: '24px',
        'stack-sm': '8px',
        'stack-md': '16px',
        'stack-lg': '32px',
        'container-max': '1280px',
        'section-padding-desktop': '120px',
        'section-padding-mobile': '64px',
      },

      maxWidth: {
        'container-max': '1280px',
      },

      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display-lg': ['Inter', 'sans-serif'],
        'display-lg-mobile': ['Inter', 'sans-serif'],
        'headline-md': ['Inter', 'sans-serif'],
        'headline-sm': ['Inter', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'label-bold': ['Inter', 'sans-serif'],
      },

      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg-mobile': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-md': ['36px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-sm': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '300' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '300' }],
        'label-bold': ['14px', { lineHeight: '20px', fontWeight: '600' }],
      },

      // DESIGN.md > Elevation & Depth: ambient shadow yang sangat lembut.
      boxShadow: {
        soft: '0 10px 40px rgba(26, 26, 46, 0.05)',
        'soft-lift': '0 15px 50px rgba(26, 26, 46, 0.08)',
        // Glow di bawah blok CTA berwarna brand — rgba dari #3B1E54.
        brand: '0 20px 50px rgba(59, 30, 84, 0.25)',
      },
    },
  },
  plugins: [],
}
