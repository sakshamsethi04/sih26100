export function formatINR(value) {
  if (value >= 1e7) return `₹${(value / 1e7).toFixed(2)} Cr`
  if (value >= 1e5) return `₹${(value / 1e5).toFixed(2)} Lakh`
  return `₹${value.toLocaleString('en-IN')}`
}

export function nowStamp() {
  const d = new Date()
  const day = String(d.getDate()).padStart(2, '0')
  const mon = d.toLocaleString('en-GB', { month: 'short' })
  const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  return `${day} ${mon} ${d.getFullYear()} ${time}`
}

export function greeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

// Maps any status label used in the app to one of five visual tones.
const TONES = {
  ok: ['satisfied', 'verified', 'match', 'active', 'clear', 'completed', 'compliant', 'approved', 'confirmed', 'submitted', 'low', 'uploaded', 'ready for review', 'registration found', 'open for bids', 'all assessed'],
  warn: ['review required', 'under review', 'medium', 'under verification', 'under evaluation', 'pending', 'clarification requested', 'in progress', 'action required', 'pending organization verification', 'awaiting bids', 'awaiting deadline'],
  fail: ['not satisfied', 'missing', 'failed', 'high', 'non-compliant', 'rejected', 'expired', 'mismatch'],
  muted: ['not uploaded', 'not applicable', 'optional', 'draft', 'not started'],
}

export function toneOf(label = '') {
  const l = String(label).toLowerCase()
  if (TONES.fail.includes(l)) return 'fail'
  if (TONES.warn.includes(l)) return 'warn'
  if (TONES.ok.includes(l)) return 'ok'
  if (TONES.muted.includes(l)) return 'muted'
  return 'info'
}
