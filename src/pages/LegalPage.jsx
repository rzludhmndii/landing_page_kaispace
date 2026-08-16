import { Link } from 'react-router-dom'

/**
 * Kerangka halaman legal. Isi pasalnya BELUM final — teks di bawah adalah
 * penanda supaya alur checkout punya tautan yang hidup. Ganti dengan naskah
 * dari tim legal sebelum rilis.
 */
export default function LegalPage({ title, updatedAt, intro, sections }) {
  return (
    <div className="pt-[120px] pb-section-padding-mobile md:pb-section-padding-desktop px-gutter">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-headline-md text-headline-md text-on-surface mb-stack-sm">{title}</h1>
        <p className="font-body-md text-sm text-on-surface-variant mb-stack-lg">
          Terakhir diperbarui: {updatedAt}
        </p>

        <div
          role="note"
          className="rounded-lg border border-outline-variant bg-surface-container-low px-5 py-4 mb-stack-lg"
        >
          <p className="font-body-md text-body-md text-on-surface-variant">
            <strong className="font-bold text-on-surface">Naskah sementara.</strong> Halaman ini
            masih menunggu teks resmi dari tim legal KaiSpace dan belum bisa dijadikan acuan
            hukum.
          </p>
        </div>

        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">{intro}</p>

        <div className="space-y-stack-lg">
          {sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-stack-sm">
                {heading}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
            </section>
          ))}
        </div>

        <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant/40">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Ada pertanyaan?{' '}
            <Link to="/solusi#kontak" className="text-primary hover:underline">
              Hubungi kami
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  )
}
