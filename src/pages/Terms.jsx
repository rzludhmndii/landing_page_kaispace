import LegalPage from './LegalPage.jsx'

export default function Terms() {
  return (
    <LegalPage
      title="Syarat Layanan"
      updatedAt="—"
      intro="Syarat ini mengatur penggunaan ruang kerja virtual KaiSpace oleh organisasi Anda beserta seluruh anggotanya."
      sections={[
        {
          heading: 'Akun dan organisasi',
          body: 'Satu langganan berlaku untuk satu organisasi. Admin yang mendaftar bertanggung jawab atas pengelolaan anggota di dalamnya.',
        },
        {
          heading: 'Langganan dan pembayaran',
          body: 'Tagihan berjalan sesuai siklus yang dipilih saat checkout. Pembatalan berlaku pada periode penagihan berikutnya.',
        },
        {
          heading: 'Penggunaan yang wajar',
          body: 'Layanan tidak boleh digunakan untuk aktivitas melanggar hukum atau yang mengganggu pengguna lain.',
        },
      ]}
    />
  )
}
