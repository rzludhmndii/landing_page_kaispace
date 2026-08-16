import LegalPage from './LegalPage.jsx'

export default function Privacy() {
  return (
    <LegalPage
      title="Kebijakan Privasi"
      updatedAt="—"
      intro="Kebijakan ini menjelaskan data apa yang KaiSpace kumpulkan saat Anda membuat workspace dan menggunakan layanannya."
      sections={[
        {
          heading: 'Data yang dikumpulkan',
          body: 'Saat checkout kami menerima nama organisasi, nama admin, dan email admin. Data pembayaran diproses oleh penyedia pembayaran, bukan disimpan di sistem kami.',
        },
        {
          heading: 'Data lokasi kehadiran',
          body: 'Jika organisasi Anda mengaktifkan absensi berbasis lokasi, titik koordinat saat clock in/out disimpan dan dihapus sesuai kebijakan retensi organisasi.',
        },
        {
          heading: 'Hak Anda',
          body: 'Admin organisasi dapat meminta ekspor atau penghapusan data organisasinya melalui kanal dukungan KaiSpace.',
        },
      ]}
    />
  )
}
