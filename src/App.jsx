import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Beranda from './pages/Beranda.jsx'
import Fitur from './pages/Fitur.jsx'
import Harga from './pages/Harga.jsx'
import Solusi from './pages/Solusi.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/solusi" element={<Solusi />} />
          {/* Rute tak dikenal jatuh ke Beranda */}
          <Route path="*" element={<Beranda />} />
        </Route>
      </Routes>
    </>
  )
}
