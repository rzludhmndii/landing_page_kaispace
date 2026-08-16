/**
 * Klien untuk Checkout API KaiSpace v2.
 *
 * Landing HANYA memanggil dua endpoint di bawah. Pembuatan organization,
 * provisioning, dan pemilihan provider OAuth sepenuhnya urusan backend/webhook —
 * jangan tambahkan apa pun ke sini yang melampaui itu.
 */

// Kosong berarti satu origin dengan landing (produksi, di belakang reverse
// proxy). Trailing slash dibuang supaya penggabungan path tidak dobel.
const API_BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/+$/, '')

const CHECKOUT_PATH = '/api/billing/checkout-sessions'

/** Error dari API yang membawa status HTTP dan kode error backend. */
export class ApiError extends Error {
  constructor(message, { status = 0, code = null, isNetwork = false } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.code = code
    this.isNetwork = isNetwork
  }
}

async function request(path, options = {}) {
  let response
  try {
    response = await fetch(`${API_BASE}${path}`, {
      headers: { Accept: 'application/json', ...(options.headers || {}) },
      ...options,
    })
  } catch (cause) {
    // fetch hanya menolak untuk kegagalan jaringan/CORS, bukan status 4xx/5xx.
    throw new ApiError('Gagal menghubungi server.', { isNetwork: true, cause })
  }

  // Body boleh kosong atau bukan JSON (mis. halaman error dari proxy).
  let body = null
  const text = await response.text()
  if (text) {
    try {
      body = JSON.parse(text)
    } catch {
      body = null
    }
  }

  if (!response.ok) {
    throw new ApiError(body?.message || body?.error || `HTTP ${response.status}`, {
      status: response.status,
      code: body?.code || body?.error || null,
    })
  }

  return body
}

/**
 * POST /api/billing/checkout-sessions
 * @returns {Promise<{ checkoutSessionId: string, checkoutUrl: string }>}
 */
export function createCheckoutSession({
  plan,
  billingCycle,
  orgName,
  adminName,
  adminEmail,
  successUrl,
  cancelUrl,
}) {
  return request(CHECKOUT_PATH, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      plan,
      billingCycle,
      orgName,
      adminName,
      adminEmail,
      successUrl,
      cancelUrl,
    }),
  })
}

/**
 * GET /api/billing/checkout-sessions/:checkoutSessionId
 * @returns {Promise<{ status: 'pending' | 'provisioned' | 'failed',
 *                     organizationSlug?: string, setupUrl?: string }>}
 */
export function getCheckoutSession(checkoutSessionId) {
  return request(`${CHECKOUT_PATH}/${encodeURIComponent(checkoutSessionId)}`)
}
