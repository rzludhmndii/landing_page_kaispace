import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col overflow-x-hidden selection:bg-primary-container selection:text-white">
      <Header />
      {/* Tiap halaman membawa padding-top sendiri (mengikuti HTML Stitch asli)
          untuk mengimbangi header fixed. */}
      <div className="flex-grow flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
