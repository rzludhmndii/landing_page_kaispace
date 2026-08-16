import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { getCheckoutSession } from '../services/billing.js'

const POLL_INTERVAL_MS = 3000
const POLL_TIMEOUT_MS = 3 * 60 * 1000
// Kegagalan jaringan sesekali diabaikan; baru menyerah setelah beruntun.
const MAX_CONSECUTIVE_ERRORS = 5

// Spek menyebut query param `checkoutSessionId`. Nama lain ikut dibaca supaya
// tetap jalan kalau provider mengembalikan penamaan yang berbeda.
const SESSION_PARAM_KEYS = ['checkoutSessionId', 'checkout_session_id', 'sessionId', 'session_id']

function readSessionId(searchParams) {
  for (const key of SESSION_PARAM_KEYS) {
    const value = searchParams.get(key)
    if (value) return value
  }
  return null
}

/** Hanya izinkan http/https — cegah `javascript:` dari respons yang disusupi. */
function isSafeRedirect(url) {
  try {
    const { protocol } = new URL(url, window.location.origin)
    return protocol === 'http:' || protocol === 'https:'
  } catch {
    return false
  }
}

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams()
  const checkoutSessionId = readSessionId(searchParams)

  // 'polling' | 'provisioned' | 'failed' | 'timeout' | 'error' | 'missing-id'
  const [phase, setPhase] = useState(checkoutSessionId ? 'polling' : 'missing-id')
  const [attempt, setAttempt] = useState(0)

  const stoppedRef = useRef(false)
  const timerRef = useRef(null)

  const startPolling = useCallback(() => {
    if (!checkoutSessionId) return undefined

    stoppedRef.current = false
    const startedAt = Date.now()
    let consecutiveErrors = 0

    const stop = () => {
      stoppedRef.current = true
      if (timerRef.current) clearTimeout(timerRef.current)
    }

    const tick = async () => {
      if (stoppedRef.current) return

      try {
        const result = await getCheckoutSession(checkoutSessionId)
        if (stoppedRef.current) return
        consecutiveErrors = 0

        if (result?.status === 'provisioned') {
          const { setupUrl } = result
          if (setupUrl && isSafeRedirect(setupUrl)) {
            stop()
            setPhase('provisioned')
            // Ganti riwayat: tombol back tidak boleh kembali ke halaman tunggu.
            window.location.replace(setupUrl)
            return
          }
          // provisioned tapi tanpa setupUrl yang dipakai — perlakukan sebagai gagal.
          stop()
          setPhase('failed')
          return
        }

        if (result?.status === 'failed') {
          stop()
          setPhase('failed')
          return
        }
        // status 'pending' (atau tak dikenal) → lanjut menunggu.
      } catch {
        if (stoppedRef.current) return
        consecutiveErrors += 1
        if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
          stop()
          setPhase('error')
          return
        }
      }

      if (stoppedRef.current) return

      if (Date.now() - startedAt >= POLL_TIMEOUT_MS) {
        stop()
        setPhase('timeout')
        return
      }

      setAttempt((n) => n + 1)
      timerRef.current = setTimeout(tick, POLL_INTERVAL_MS)
    }

    tick()
    return stop
  }, [checkoutSessionId])

  useEffect(() => {
    if (phase !== 'polling') return undefined
    const stop = startPolling()
    return () => stop?.()
  }, [phase, startPolling])

  const retry = () => {
    setAttempt(0)
    setPhase('polling')
  }

  return (
    <div className="pt-[120px] pb-section-padding-mobile md:pb-section-padding-desktop px-gutter">
      <div className="max-w-xl mx-auto">
        <div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-soft p-8 md:p-12 text-center">
          {phase === 'polling' && <Polling attempt={attempt} />}
          {phase === 'provisioned' && <Provisioned />}
          {phase === 'failed' && <Failed />}
          {phase === 'timeout' && <Timeout onRetry={retry} />}
          {phase === 'error' && <NetworkError onRetry={retry} />}
          {phase === 'missing-id' && <MissingId />}
        </div>
      </div>
    </div>
  )
}

function Shell({ icon, iconClass, title, children }) {
  return (
    <>
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${iconClass}`}
      >
        <Icon name={icon} filled className="text-3xl" />
      </div>
      <h1 className="font-headline-sm text-headline-sm text-on-surface mb-4">{title}</h1>
      {children}
    </>
  )
}

function Polling({ attempt }) {
  return (
    <Shell icon="autorenew" iconClass="bg-primary/10 text-primary" title="Pembayaran berhasil">
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
        Workspace Anda sedang disiapkan. Mohon jangan tutup halaman ini.
      </p>
      <div
        className="h-1.5 w-full rounded-full bg-surface-container-highest overflow-hidden mb-4"
        role="progressbar"
        aria-label="Menyiapkan workspace"
      >
        <div className="h-full w-1/3 rounded-full bg-primary animate-pulse" />
      </div>
      <p className="font-body-md text-sm text-on-surface-variant">
        Memeriksa status… ({attempt + 1})
      </p>
    </Shell>
  )
}

function Provisioned() {
  return (
    <Shell
      icon="check_circle"
      iconClass="bg-primary/10 text-primary"
      title="Workspace Anda siap"
    >
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        Anda sedang dialihkan ke halaman penyiapan…
      </p>
    </Shell>
  )
}

function Failed() {
  return (
    <Shell
      icon="support_agent"
      iconClass="bg-error-container text-error"
      title="Workspace belum bisa disiapkan"
    >
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
        Pembayaran berhasil, tapi workspace belum bisa disiapkan otomatis. Hubungi support KaiSpace.
      </p>
      <a
        href="mailto:halo@kaispace.id"
        className="inline-flex items-center gap-2 font-label-bold text-label-bold bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors"
      >
        <Icon name="mail" className="text-sm" />
        Hubungi support
      </a>
    </Shell>
  )
}

function Timeout({ onRetry }) {
  return (
    <Shell
      icon="hourglass_empty"
      iconClass="bg-surface-container-highest text-on-surface-variant"
      title="Penyiapan memakan waktu lebih lama"
    >
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
        Pembayaran Anda aman. Penyiapan workspace masih berjalan di latar belakang — coba periksa
        lagi, atau hubungi support kalau tetap belum selesai.
      </p>
      <RetryActions onRetry={onRetry} />
    </Shell>
  )
}

function NetworkError({ onRetry }) {
  return (
    <Shell
      icon="wifi_off"
      iconClass="bg-error-container text-error"
      title="Gagal memeriksa status"
    >
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
        Kami tidak bisa menghubungi server. Pembayaran Anda tidak terpengaruh. Periksa koneksi
        Anda, lalu coba lagi.
      </p>
      <RetryActions onRetry={onRetry} />
    </Shell>
  )
}

function RetryActions({ onRetry }) {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button
        type="button"
        onClick={onRetry}
        className="font-label-bold text-label-bold bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors"
      >
        Coba lagi
      </button>
      <a
        href="mailto:halo@kaispace.id"
        className="font-label-bold text-label-bold border border-primary text-primary px-8 py-4 rounded-lg hover:bg-surface-container transition-colors"
      >
        Hubungi support
      </a>
    </div>
  )
}

function MissingId() {
  return (
    <Shell
      icon="help"
      iconClass="bg-surface-container-highest text-on-surface-variant"
      title="Sesi checkout tidak ditemukan"
    >
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
        Alamat halaman ini tidak memuat id sesi checkout, jadi statusnya tidak bisa diperiksa. Kalau
        Anda baru saja membayar, hubungi support dengan menyertakan bukti pembayaran.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/harga"
          className="font-label-bold text-label-bold bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors"
        >
          Lihat harga
        </Link>
        <a
          href="mailto:halo@kaispace.id"
          className="font-label-bold text-label-bold border border-primary text-primary px-8 py-4 rounded-lg hover:bg-surface-container transition-colors"
        >
          Hubungi support
        </a>
      </div>
    </Shell>
  )
}
