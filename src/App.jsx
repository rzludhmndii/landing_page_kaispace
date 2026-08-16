import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PageTitle from './components/PageTitle.jsx'
import Beranda from './pages/Beranda.jsx'
import Fitur from './pages/Fitur.jsx'
import Harga from './pages/Harga.jsx'
import Solusi from './pages/Solusi.jsx'
import Checkout from './pages/Checkout.jsx'
import CheckoutSuccess from './pages/CheckoutSuccess.jsx'
import CheckoutCancel from './pages/CheckoutCancel.jsx'
import Terms from './pages/Terms.jsx'
import Privacy from './pages/Privacy.jsx'
import NotFound from './pages/NotFound.jsx'

/**
 * Rute milik LANDING saja.
 *
 * Jangan pernah menambahkan rute untuk `/login`, `/@*`, `/_platform`, `/api/*`,
 * atau `/socket.io/*` — semuanya milik aplikasi/backend dan diteruskan oleh
 * reverse proxy sebelum sampai ke sini. Catch-all di bawah sengaja merender
 * halaman 404, bukan Beranda, supaya landing tidak diam-diam mengklaim alamat
 * yang bukan miliknya kalau konfigurasi proxy meleset.
 */
export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/solusi" element={<Solusi />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/checkout/cancel" element={<CheckoutCancel />} />

          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
