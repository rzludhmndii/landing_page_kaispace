/**
 * Satu-satunya sumber id paket & siklus tagihan yang dikirim ke Checkout API.
 *
 * PERLU DIKONFIRMASI KE TIM BACKEND: spek integrasi hanya mencontohkan
 * `"plan": "pro"`, tanpa daftar lengkap id yang diterima. Id di bawah adalah
 * dugaan yang mengikuti nama paket di halaman Harga. Kalau backend menolak,
 * pengguna akan melihat pesan "paket tidak tersedia" — ganti `id` di sini saja,
 * tidak perlu menyentuh komponen mana pun.
 */

export const BILLING_CYCLES = [
  { id: 'monthly', label: 'Bulanan', hint: null },
  { id: 'annual', label: 'Tahunan', hint: 'Hemat 20%' },
]

export const DEFAULT_BILLING_CYCLE = 'monthly'

export const PLANS = [
  {
    id: 'free',
    name: 'Gratis',
    blurb: 'Untuk individu atau tim kecil yang baru memulai.',
    checkout: true,
  },
  {
    id: 'pro',
    name: 'Tim',
    blurb: 'Kekuatan penuh untuk kolaborasi tim yang berkembang.',
    checkout: true,
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'Keamanan tingkat lanjut dan kontrol untuk organisasi besar.',
    // Enterprise lewat tim penjualan, bukan checkout mandiri.
    checkout: false,
    contactPath: '/solusi#kontak',
  },
]

export const DEFAULT_PLAN = 'pro'

/** Paket yang boleh masuk alur checkout. */
export const CHECKOUT_PLANS = PLANS.filter((plan) => plan.checkout)

export function findPlan(id) {
  return PLANS.find((plan) => plan.id === id) || null
}

/** Normalisasi nilai dari query param supaya tidak ada id asing yang lolos. */
export function resolvePlanId(raw) {
  return CHECKOUT_PLANS.some((plan) => plan.id === raw) ? raw : DEFAULT_PLAN
}

export function resolveBillingCycle(raw) {
  return BILLING_CYCLES.some((cycle) => cycle.id === raw) ? raw : DEFAULT_BILLING_CYCLE
}
