'use client'
import { useEffect } from 'react'

type GtagFn = (command: 'event', name: string, params: Record<string, unknown>) => void

// Maps a link's href to a GA4 event name. Anything else is ignored.
function eventFor(href: string): string | null {
  if (href.startsWith('tel:')) return 'phone_click'
  if (href.startsWith('mailto:')) return 'email_click'
  if (href.includes('leadconnectorhq.com/widget/bookings')) return 'booking_click'
  return null
}

// One site-wide click listener: reports phone, email, and booking link clicks to GA4.
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute('href') || ''
      const name = eventFor(href)
      if (!name) return
      const gtag = (window as unknown as { gtag?: GtagFn }).gtag
      if (typeof gtag !== 'function') return
      gtag('event', name, {
        link_url: href,
        link_text: (link.textContent || '').trim().slice(0, 80),
        page_path: window.location.pathname,
        transport_type: 'beacon',
      })
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])
  return null
}
