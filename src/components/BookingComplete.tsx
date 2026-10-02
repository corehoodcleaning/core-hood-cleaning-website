'use client'

import { useEffect } from 'react'

// Fires a GA4 "booking_complete" event once per browser session when the
// post-booking thank-you page loads (LeadConnector redirects here after a booking).
export default function BookingComplete() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem('booking_complete_sent')) return
      sessionStorage.setItem('booking_complete_sent', '1')
    } catch {
      // storage unavailable: fall through and send the event anyway
    }
    const w = window as unknown as { gtag?: (...args: unknown[]) => void }
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'booking_complete', { page_path: window.location.pathname })
    }
  }, [])
  return null
}
