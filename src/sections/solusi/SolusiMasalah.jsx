import Icon from '../../components/Icon.jsx'

/**
 * Pemetaan masalah kerja sehari-hari ke kemampuan yang benar-benar ada di
 * aplikasi KaiSpace. Setiap `fitur` di bawah punya padanan nyata di kode
 * (route server dan/atau komponen UI) — jangan tambahkan yang belum jalan.
 */
const SOLUSI = [
  {
    icon: 'record_voice_over',
    masalah: 'Rekan kerja terasa jauh, semua harus dijadwalkan',
    solusi:
      'Dekati avatar rekan tim dan suara langsung tersambung. Percakapan singkat kembali jadi murah, tanpa undangan meeting.',
    fitur: [
      'Audio & video otomatis dalam radius 3 tile',
      'Volume mengikuti jarak',
      'Panggilan langsung antar-peserta',
      'Emote, angkat tangan, colek, dan ikuti rekan',
    ],
  },
  {
    icon: 'meeting_room',
    masalah: 'Ruang meeting rebutan, rapat disela orang lewat',
    solusi:
      'Zona bisa dikunci per peran, dengan antrean dan pemesanan slot. Yang di luar zona tidak ikut mendengar.',
    fitur: [
      'Kunci zona & pintu berbasis peran',
      'Antrean otomatis saat zona penuh',
      'Pemesanan slot dengan durasi',
      'Persetujuan sebelum seseorang masuk',
    ],
  },
  {
    icon: 'how_to_reg',
    masalah: 'Kehadiran tim remote sulit dipertanggungjawabkan',
    solusi:
      'Absensi terikat lokasi dan jaringan kantor, lengkap dengan aturan shift. Lembur dan keterlambatan terhitung sendiri.',
    fitur: [
      'Clock in/out dengan geofence radius',
      'Pembatasan alamat IP',
      'Shift, toleransi telat, dan jam istirahat',
      'Pengajuan koreksi & cuti berjenjang',
    ],
  },
  {
    icon: 'summarize',
    masalah: 'Rapat selesai tanpa meninggalkan jejak',
    solusi:
      'Sesi bisa direkam dan tiap pertemuan punya catatan sendiri, tersambung ke kalender tim.',
    fitur: [
      'Rekaman sesi dengan tautan unduh kedaluwarsa',
      'Notulen per pertemuan',
      'Acara berulang & pengingat',
      'Ekspor kalender ke format ICS',
    ],
  },
  {
    icon: 'insights',
    masalah: 'Tidak ada gambaran kondisi tim selain tebakan',
    solusi:
      'Aktivitas harian dirangkum jadi angka: seberapa hidup ruangnya, seberapa cepat tim saling merespons, seberapa tuntas pekerjaannya.',
    fitur: [
      'Indikator keterlibatan harian',
      'Waktu respons antar rekan',
      'Penyelesaian tugas harian',
      'Riwayat status & koneksi',
    ],
  },
  {
    icon: 'verified_user',
    masalah: 'Tamu dan klien butuh akses, tapi tidak boleh bebas',
    solusi:
      'Undangan tamu berbatas dengan jejak audit, dan kebijakan yang dipegang di tingkat organisasi.',
    fitur: [
      'Tautan undangan tamu & organisasi',
      'Jejak audit tiap tindakan penting',
      'Pelaporan pengguna',
      'Kebijakan berbagi tingkat workspace',
    ],
  },
]

export default function SolusiMasalah() {
  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop px-gutter">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Dari Masalah Harian, Jadi Satu Alur Kerja
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Setiap hal di bawah ini berangkat dari keluhan yang nyata di tim jarak jauh — dan
            dijawab langsung oleh kemampuan yang sudah berjalan di KaiSpace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUSI.map(({ icon, masalah, solusi, fitur }) => (
            <article
              key={masalah}
              className="min-w-0 bg-surface rounded-2xl p-8 border border-outline-variant/30 shadow-soft hover:shadow-soft-lift transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary shrink-0">
                <Icon name={icon} filled />
              </div>

              <p className="font-label-bold text-label-bold text-on-surface-variant/80 mb-2">
                Masalah
              </p>
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-4">
                {masalah}
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant mb-6">{solusi}</p>

              <ul className="mt-auto space-y-3 pt-6 border-t border-outline-variant/30">
                {fitur.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Icon name="check_circle" className="text-primary text-sm mt-1 shrink-0" />
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
