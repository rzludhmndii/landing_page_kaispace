import { ApiError } from './billing.js'

/**
 * Copy error checkout. Teks untuk kasus yang disebut di spek integrasi dipakai
 * apa adanya — jangan diparafrase tanpa menyepakatinya dengan tim dulu.
 */
export const CHECKOUT_ERRORS = {
  emailTaken:
    'Email ini sudah terdaftar di organisasi lain. Gunakan email lain atau login ke workspace yang sudah ada.',
  createFailed: 'Kami belum bisa membuat checkout sekarang. Coba lagi sebentar lagi.',
  orgNameInvalid: 'Nama organisasi tidak valid. Gunakan 2–60 karakter tanpa simbol berlebihan.',
  planUnavailable: 'Paket yang dipilih sedang tidak tersedia. Pilih paket lain atau hubungi kami.',
  network: 'Koneksi ke server terputus. Periksa jaringan Anda, lalu coba lagi.',
}

// Kode error backend belum terdokumentasi di spek, jadi pencocokannya dibuat
// longgar: kode apa pun yang mengandung salah satu kata kunci di bawah
// dianggap cocok. Kalau tim sudah memastikan daftar kodenya, ketatkan ini.
const CODE_PATTERNS = [
  { re: /email.*(exist|taken|registered|duplicate)|duplicate.*email/i, key: 'emailTaken' },
  { re: /org.*(name|slug).*(invalid|taken|exist)|invalid.*org/i, key: 'orgNameInvalid' },
  { re: /plan.*(invalid|unavailable|not.*found|unknown)/i, key: 'planUnavailable' },
]

/**
 * Ubah error dari `createCheckoutSession()` jadi pesan yang layak ditampilkan.
 * @param {unknown} error
 * @returns {string}
 */
export function checkoutErrorMessage(error) {
  if (!(error instanceof ApiError)) return CHECKOUT_ERRORS.createFailed
  if (error.isNetwork) return CHECKOUT_ERRORS.network

  const haystack = `${error.code || ''} ${error.message || ''}`
  for (const { re, key } of CODE_PATTERNS) {
    if (re.test(haystack)) return CHECKOUT_ERRORS[key]
  }

  // 409 tanpa kode yang dikenali paling sering berarti bentrok email.
  if (error.status === 409) return CHECKOUT_ERRORS.emailTaken

  return CHECKOUT_ERRORS.createFailed
}
