'use client'

import { useState } from 'react'

export default function DonateButton() {
  const [loading, setLoading] = useState(false)

  async function handleDonate() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setLoading(false)
      }
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
      {loading ? 'Redirecting…' : (
        <>
          <span className="donate-btn__full">☕ Buy me a coffee — $5</span>
          <span className="donate-btn__short">☕ $5</span>
        </>
      )}
    </button>
  )
}
