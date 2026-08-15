import { useState } from 'react'
import Icon from '../../components/Icon.jsx'

const inputClass =
  'w-full bg-surface-bright border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none transition-shadow'

const EMPTY_FORM = { nama: '', email: '', perusahaan: '', pesan: '' }

export default function ContactSection() {
  // State form hanya hidup di memori (tanpa localStorage/sessionStorage).
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // TODO: sambungkan ke endpoint/form service saat backend siap.
    setSubmitted(true)
    setForm(EMPTY_FORM)
  }

  return (
    /* id="kontak" jadi target nav "Kontak"; offset header fixed ditangani
       `scroll-padding-top` di index.css, jadi tidak perlu scroll-margin lagi. */
    <section
      id="kontak"
      className="py-section-padding-mobile md:py-section-padding-desktop px-gutter max-w-container-max mx-auto relative"
    >
      <div className="bg-surface rounded-3xl border border-outline-variant/30 shadow-soft overflow-hidden flex flex-col md:flex-row">
        {/* Left Info Panel */}
        <div className="md:w-5/12 bg-on-background p-10 md:p-16 text-surface-bright relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container rounded-full blur-3xl opacity-30" />
          <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
            <div>
              <h2 className="font-headline-md text-headline-md mb-4 text-white">
                Mulai Perjalanan Anda
              </h2>
              <p className="font-body-md text-body-md text-outline-variant opacity-90">
                Ceritakan kebutuhan ruang virtual Anda. Tim kami akan membantu merancang solusi
                KaiSpace yang paling sesuai untuk organisasi Anda.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Icon name="mail" className="text-primary-fixed-dim" />
                <span className="font-body-md text-body-md text-outline-variant">
                  halo@kaispace.id
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Icon name="location_on" className="text-primary-fixed-dim" />
                <span className="font-body-md text-body-md text-outline-variant">
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="md:w-7/12 p-10 md:p-16 bg-surface">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-bold text-label-bold text-on-background" htmlFor="nama">
                  Nama Lengkap
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  value={form.nama}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Budi Santoso"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  className="font-label-bold text-label-bold text-on-background"
                  htmlFor="email"
                >
                  Email Kerja
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="budi@perusahaan.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="font-label-bold text-label-bold text-on-background"
                htmlFor="perusahaan"
              >
                Nama Perusahaan / Organisasi
              </label>
              <input
                id="perusahaan"
                name="perusahaan"
                type="text"
                value={form.perusahaan}
                onChange={handleChange}
                className={inputClass}
                placeholder="PT Maju Bersama"
              />
            </div>

            <div className="space-y-2">
              <label className="font-label-bold text-label-bold text-on-background" htmlFor="pesan">
                Pesan / Kebutuhan (Opsional)
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="4"
                value={form.pesan}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Ceritakan sedikit tentang tim Anda..."
              />
            </div>

            <button
              type="submit"
              className="w-full font-label-bold text-label-bold bg-primary-container text-white px-8 py-4 rounded-xl hover:bg-primary-hover transition-colors active:scale-[0.98] duration-200 shadow-sm mt-4 flex justify-center items-center gap-2"
            >
              Buat Space
              <Icon name="arrow_forward" className="text-sm" />
            </button>

            {submitted && (
              <p
                role="status"
                className="font-body-md text-body-md text-primary text-center"
              >
                Terima kasih! Tim kami akan menghubungi Anda segera.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
