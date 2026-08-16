import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  // Saat dev, kalau VITE_DEV_API_PROXY diisi (mis. URL backend sandbox),
  // permintaan /api diteruskan ke sana supaya tidak kena CORS. Di produksi
  // landing berada di belakang reverse proxy yang sama dengan backend, jadi
  // VITE_API_BASE dibiarkan kosong dan /api sudah satu origin.
  const devApiProxy = env.VITE_DEV_API_PROXY

  const proxy = devApiProxy
    ? { '/api': { target: devApiProxy, changeOrigin: true, secure: false } }
    : undefined

  return {
    plugins: [react()],

    build: {
      // Spek reverse proxy: aset landing harus di /landing-assets/*, karena
      // /assets/* sudah dipakai aplikasi KaiSpace.
      assetsDir: 'landing-assets',
    },

    server: { port: 5173, proxy },
    // `preview` ikut memakai proxy yang sama supaya hasil build bisa diuji
    // terhadap backend sandbox, bukan hanya mode dev.
    preview: { port: 4173, proxy },
  }
})
