'use client'

import { useState } from 'react'

export default function DonateButton() {
  const [loading, setLoading] = useState(false)

  async function handleDonate() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDonate}
      disabled={loading}
      className="donate-btn"
    >
      {loading ? 'Redirecting…' : '☕ Buy me a coffee — $5'}
    </button>
  )
}
