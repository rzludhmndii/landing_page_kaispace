const FAQS = [
  {
    q: 'Apakah ada batasan fitur pada masa percobaan (trial)?',
    a: 'Tidak, selama masa percobaan 14 hari paket Tim, Anda mendapatkan akses penuh ke semua fitur tanpa batasan apa pun.',
  },
  {
    q: 'Bisakah saya membatalkan langganan kapan saja?',
    a: 'Ya, Anda dapat membatalkan langganan kapan saja melalui dashboard pengaturan akun Anda. Biaya akan berhenti pada periode penagihan berikutnya.',
  },
  {
    q: 'Apakah ada diskon untuk langganan tahunan?',
    a: 'Ya, kami menawarkan diskon 20% jika Anda memilih penagihan tahunan dibandingkan bulanan.',
  },
]

export default function Faq() {
  return (
    <section className="bg-surface-container-low py-section-padding-mobile md:py-section-padding-desktop px-gutter">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline-md text-headline-md text-center text-on-surface mb-stack-lg">
          Pertanyaan yang Sering Diajukan
        </h2>
        <div className="space-y-4">
          {FAQS.map(({ q, a }) => (
            <div key={q} className="bg-surface-container-lowest p-6 rounded-lg ambient-shadow">
              <h4 className="font-label-bold text-label-bold text-on-surface mb-2">{q}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
