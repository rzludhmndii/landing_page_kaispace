import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'

// `planId` harus cocok dengan id di src/data/plans.js — itu nilai yang dikirim
// ke Checkout API. Enterprise tidak lewat checkout mandiri, jadi diarahkan ke
// form kontak.
const PLANS = [
  {
    name: 'Gratis',
    planId: 'free',
    tagline: 'Untuk individu atau tim kecil yang baru memulai.',
    price: 'Rp 0',
    period: '/bulan',
    cta: 'Daftar Gratis',
    popular: false,
    features: [
      'Maksimal 5 anggota tim',
      'Fitur chat dasar',
      'Ruang kerja virtual 2D standar',
      'Dukungan komunitas',
    ],
  },
  {
    name: 'Tim',
    planId: 'pro',
    tagline: 'Kekuatan penuh untuk kolaborasi tim yang berkembang.',
    price: 'Rp 150k',
    period: '/pengguna/bulan',
    cta: 'Coba Gratis 14 Hari',
    popular: true,
    features: [
      'Anggota tim tidak terbatas',
      'Panggilan suara & video grup',
      'Kustomisasi ruang kerja 2D',
      'Integrasi alat produktivitas',
      'Dukungan prioritas email',
    ],
  },
  {
    name: 'Enterprise',
    planId: null,
    contactPath: '/solusi#kontak',
    tagline: 'Keamanan tingkat lanjut dan kontrol untuk organisasi besar.',
    price: 'Kustom',
    period: '',
    cta: 'Hubungi Penjualan',
    popular: false,
    features: [
      'Semua fitur di paket Tim',
      'Single Sign-On (SSO) SAML',
      'SLA uptime 99.9%',
      'Manajer Akun Khusus',
      'Audit log keamanan',
    ],
  },
]

/** Tujuan tombol CTA: checkout untuk paket mandiri, form kontak untuk Enterprise. */
function planHref(plan) {
  return plan.planId ? `/checkout?plan=${plan.planId}` : plan.contactPath
}

function PlanCard({ plan }) {
  if (plan.popular) {
    return (
      <div className="bg-primary-container rounded-xl p-stack-lg shadow-lg flex flex-col relative transform md:-translate-y-4">
        <div className="absolute top-0 right-0 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-bl-lg rounded-tr-xl font-label-bold text-label-bold text-sm">
          Populer
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-primary mb-stack-sm">
          {plan.name}
        </h3>
        <p className="font-body-md text-body-md text-primary-fixed-dim mb-stack-lg">
          {plan.tagline}
        </p>
        <div className="mb-stack-lg">
          <span className="font-headline-md text-headline-md text-on-primary">{plan.price}</span>
          {plan.period && (
            <span className="font-body-md text-body-md text-primary-fixed-dim">{plan.period}</span>
          )}
        </div>
        <Link
          to={planHref(plan)}
          className="w-full py-3 mb-stack-lg rounded bg-on-primary text-primary-container font-label-bold text-label-bold hover:bg-surface-bright transition-colors text-center block"
        >
          {plan.cta}
        </Link>
        <ul className="space-y-4 flex-grow">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center text-on-primary font-body-md text-body-md"
            >
              <Icon name="check" className="text-on-primary mr-2" /> {feature}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-stack-lg ambient-shadow flex flex-col">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-stack-sm">{plan.name}</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">{plan.tagline}</p>
      <div className="mb-stack-lg">
        <span className="font-headline-md text-headline-md text-on-surface">{plan.price}</span>
        {plan.period && (
          <span className="font-body-md text-body-md text-on-surface-variant">{plan.period}</span>
        )}
      </div>
      <Link
        to={planHref(plan)}
        className="w-full py-3 mb-stack-lg rounded border border-primary text-primary font-label-bold text-label-bold hover:bg-surface-dim transition-colors text-center block"
      >
        {plan.cta}
      </Link>
      <ul className="space-y-4 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center text-on-surface font-body-md text-body-md">
            <Icon name="check" className="text-primary mr-2" /> {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PricingCards() {
  return (
    <section className="px-gutter pb-section-padding-mobile md:pb-section-padding-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}
