import Icon from '../../components/Icon.jsx'

/**
 * Daftar kemampuan yang sudah berjalan di aplikasi KaiSpace.
 * Aturan: sebuah item hanya boleh ada di sini kalau punya padanan nyata di
 * kode (route server dan/atau komponen UI client). Yang masih sebatas skema
 * database — mis. modul dokumen — sengaja belum dicantumkan.
 */
const KATEGORI = [
  {
    icon: 'dashboard_customize',
    judul: 'Ruang & Avatar',
    items: [
      'Editor ruang: cat lantai, tata furnitur, gambar zona',
      'Zona berlabel: meeting, meja kerja, fokus, umum',
      'Portal antar-ruang & titik teleport tersimpan',
      'Minimap, kontrol zoom, dan mode ringkas',
      'Duduk di kursi dengan kepemilikan meja',
      'Catatan tempel di meja kerja',
      'Avatar berlapis: badan, mata, pakaian, rambut, aksesori',
      'Papan nama & status khusus per orang',
    ],
  },
  {
    icon: 'forum',
    judul: 'Komunikasi',
    items: [
      'Audio & video jarak dekat antar-peserta',
      'Berbagi layar',
      'Perekaman sesi dengan tautan unduh terbatas',
      'Chat kanal, pesan langsung, dan chat khusus zona',
      'Lampiran berkas & pratinjau gambar',
      'Roda emote, angkat tangan, colek, ikuti rekan',
      'Papan suara & pemutar musik ruangan',
      'Kontrol sentuh untuk ponsel dan tablet',
    ],
  },
  {
    icon: 'event_available',
    judul: 'Kerja & Kehadiran',
    items: [
      'Clock in/out dengan geofence dan batasan IP',
      'Shift, toleransi keterlambatan, dan jam istirahat',
      'Perhitungan lembur otomatis',
      'Pengajuan koreksi absensi',
      'Cuti dengan alur persetujuan',
      'Daftar tugas harian',
      'Kalender: acara berulang, pengingat, ekspor ICS',
      'Pemesanan ruang meeting & notulen pertemuan',
    ],
  },
  {
    icon: 'admin_panel_settings',
    judul: 'Kontrol & Kepatuhan',
    items: [
      'Organisasi, departemen, dan undangan anggota',
      'Peran admin bertingkat per ruang',
      'Kunci zona & pintu berbasis peran',
      'Antrean dan persetujuan masuk zona',
      'Undangan tamu dengan jejak audit',
      'Pelaporan pengguna',
      'Kebijakan berbagi tingkat workspace',
      'Analitik keterlibatan & penyelesaian tugas',
    ],
  },
]

export default function KemampuanGrid() {
  return (
    // Putih penuh: sengaja beda dari `background` maupun `surface-container-low`
    // yang dipakai baris fitur di atas, supaya batas antar-section tetap terlihat
    // berapa pun jumlah baris fiturnya.
    <section className="px-gutter bg-surface-container-lowest py-section-padding-mobile md:py-section-padding-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Semua Kemampuan KaiSpace
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Bukan sekadar ruang mengobrol. KaiSpace menggabungkan kantor virtual, kehadiran, dan
            koordinasi tim dalam satu tempat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KATEGORI.map(({ icon, judul, items }) => (
            <div
              key={judul}
              className="min-w-0 bg-surface rounded-2xl p-8 border border-outline-variant/30 shadow-soft hover:shadow-soft-lift transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon name={icon} filled />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-background">{judul}</h3>
              </div>

              <ul className="grid grid-cols-1 gap-3">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="check_circle" className="text-primary text-sm mt-1 shrink-0" />
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
