import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { createCheckoutSession } from '../services/billing.js'
import { checkoutErrorMessage } from '../services/checkoutErrors.js'
import {
  BILLING_CYCLES,
  CHECKOUT_PLANS,
  resolveBillingCycle,
  resolvePlanId,
} from '../data/plans.js'

const inputClass =
  'w-full bg-surface-bright border border-outline-variant rounded-lg px-4 py-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-shadow'
const inputErrorClass = 'border-error focus:border-error focus:ring-error'

// Validasi dasar saja — backend tetap sumber kebenaran.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate({ orgName, adminName, adminEmail }) {
  const errors = {}
  const org = orgName.trim()
  const name = adminName.trim()
  const email = adminEmail.trim()

  if (!org) errors.orgName = 'Nama organisasi wajib diisi.'
  else if (org.length < 2) errors.orgName = 'Nama organisasi minimal 2 karakter.'
  else if (org.length > 60) errors.orgName = 'Nama organisasi maksimal 60 karakter.'

  if (!name) errors.adminName = 'Nama admin wajib diisi.'
  else if (name.length > 80) errors.adminName = 'Nama admin maksimal 80 karakter.'

  if (!email) errors.adminEmail = 'Email admin wajib diisi.'
  else if (!EMAIL_RE.test(email)) errors.adminEmail = 'Format email belum benar.'

  return errors
}

export default function Checkout() {
  const [searchParams] = useSearchParams()

  const [form, setForm] = useState({
    orgName: '',
    adminName: '',
    adminEmail: '',
    plan: resolvePlanId(searchParams.get('plan')),
    billingCycle: resolveBillingCycle(searchParams.get('billingCycle')),
  })
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitError, setSubmitError] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const update = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }))
    setFieldErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev))
    setSubmitError(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return

    const errors = validate(form)
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return

    setSubmitting(true)
    setSubmitError(null)

    try {
      const origin = window.location.origin
      const { checkoutUrl } = await createCheckoutSession({
        plan: form.plan,
        billingCycle: form.billingCycle,
        orgName: form.orgName.trim(),
        adminName: form.adminName.trim(),
        adminEmail: form.adminEmail.trim(),
        successUrl: `${origin}/checkout/success`,
        cancelUrl: `${origin}/checkout/cancel`,
      })

      if (!checkoutUrl) {
        setSubmitError(checkoutErrorMessage(null))
        setSubmitting(false)
        return
      }

      // Serahkan ke halaman pembayaran provider.
      window.location.assign(checkoutUrl)
    } catch (error) {
      setSubmitError(checkoutErrorMessage(error))
      setSubmitting(false)
    }
  }

  return (
    <div className="pt-[120px] pb-section-padding-mobile md:pb-section-padding-desktop px-gutter">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline-md text-headline-md text-on-surface mb-stack-md">
            Buat Workspace KaiSpace
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Isi data organisasi Anda. Setelah pembayaran, workspace disiapkan otomatis dan Anda
            langsung diarahkan ke halaman penyiapan.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-surface rounded-2xl border border-outline-variant/30 shadow-soft p-8 md:p-12 space-y-8"
        >
          <fieldset className="space-y-4">
            <legend className="font-label-bold text-label-bold text-on-surface mb-2">Paket</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CHECKOUT_PLANS.map((plan) => {
                const selected = form.plan === plan.id
                return (
                  <label
                    key={plan.id}
                    className={`cursor-pointer rounded-xl border p-5 transition-colors ${
                      selected
                        ? 'border-primary bg-primary/5'
                        : 'border-outline-variant hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selected}
                      onChange={(event) => update('plan', event.target.value)}
                      className="sr-only"
                    />
                    <span className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        {plan.name}
                      </span>
                      {selected && <Icon name="check_circle" className="text-primary text-sm" />}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant block">
                      {plan.blurb}
                    </span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-label-bold text-label-bold text-on-surface mb-2">
              Siklus tagihan
            </legend>
            <div className="flex flex-wrap gap-3">
              {BILLING_CYCLES.map((cycle) => {
                const selected = form.billingCycle === cycle.id
                return (
                  <label
                    key={cycle.id}
                    className={`cursor-pointer rounded-lg border px-5 py-3 font-label-bold text-label-bold transition-colors ${
                      selected
                        ? 'border-primary bg-primary text-on-primary'
                        : 'border-outline-variant text-on-surface-variant hover:border-primary/50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="billingCycle"
                      value={cycle.id}
                      checked={selected}
                      onChange={(event) => update('billingCycle', event.target.value)}
                      className="sr-only"
                    />
                    {cycle.label}
                    {cycle.hint && (
                      <span className={selected ? 'opacity-80' : 'text-primary'}> · {cycle.hint}</span>
                    )}
                  </label>
                )
              })}
            </div>
          </fieldset>

          <div className="space-y-6">
            <Field
              id="orgName"
              label="Nama organisasi"
              placeholder="PT Maju Bersama"
              value={form.orgName}
              error={fieldErrors.orgName}
              onChange={(value) => update('orgName', value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                id="adminName"
                label="Nama admin"
                placeholder="Budi Santoso"
                autoComplete="name"
                value={form.adminName}
                error={fieldErrors.adminName}
                onChange={(value) => update('adminName', value)}
              />
              <Field
                id="adminEmail"
                label="Email admin"
                type="email"
                placeholder="budi@perusahaan.com"
                autoComplete="email"
                value={form.adminEmail}
                error={fieldErrors.adminEmail}
                onChange={(value) => update('adminEmail', value)}
              />
            </div>
          </div>

          {submitError && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-lg border border-error/30 bg-error-container px-4 py-3"
            >
              <Icon name="error" className="text-error text-sm mt-1 shrink-0" />
              <p className="font-body-md text-body-md text-on-error-container">{submitError}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto font-label-bold text-label-bold bg-primary text-on-primary px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors active:scale-[0.98] duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {submitting ? 'Menyiapkan pembayaran…' : 'Lanjut ke pembayaran'}
              {!submitting && <Icon name="arrow_forward" className="text-sm" />}
            </button>
            <Link
              to="/harga"
              className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              Kembali ke harga
            </Link>
          </div>

          <p className="font-body-md text-sm text-on-surface-variant">
            Dengan melanjutkan, Anda menyetujui{' '}
            <Link to="/terms" className="text-primary hover:underline">
              Syarat Layanan
            </Link>{' '}
            dan{' '}
            <Link to="/privacy" className="text-primary hover:underline">
              Kebijakan Privasi
            </Link>{' '}
            KaiSpace.
          </p>
        </form>
      </div>
    </div>
  )
}

function Field({ id, label, error, value, onChange, type = 'text', ...rest }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="font-label-bold text-label-bold text-on-surface block">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputClass} ${error ? inputErrorClass : ''}`}
        {...rest}
      />
      {error && (
        <p id={`${id}-error`} className="font-body-md text-sm text-error">
          {error}
        </p>
      )}
    </div>
  )
}
