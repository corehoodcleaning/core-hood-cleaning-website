import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Grease Filter Exchange Program San Diego | Core Hood Cleaning',
  description: 'Weekly & bi-weekly grease filter exchange programs for San Diego restaurants. Always-clean filters, flat monthly pricing, no hassle. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/services/filter-exchange' }
}

export default function FilterExchangePage() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/images/core-logo.png" alt="Core Services" width={120} height={40} className="nav-logo-img" />
            <div className="nav-logo-text">Core Hood Cleaning<span className="nav-logo-sub">San Diego, CA · NFPA 96 Certified</span></div>
          </Link>
          <ul className="nav-links">
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#gallery">Work</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:8583612570" className="nav-phone">📞 (858) 361-2570</a>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary" style={{padding:'10px 20px', fontSize:'0.85rem'}}>Book Now</a>
          </div>
        </div>
      </nav>

      <section style={{paddingTop:'130px', paddingBottom:'80px', background:'var(--true-blue)', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0, background:'radial-gradient(ellipse at 70% 50%, rgba(137,29,27,0.12) 0%, transparent 70%)'}} />
        <div className="container" style={{position:'relative', zIndex:2, maxWidth:'800px'}}>
          <p className="section-label">Our Services</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2.5rem,5vw,4rem)', marginBottom:'24px'}}>Grease Filter<br/>Exchange Program</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'40px', maxWidth:'600px'}}>
            Always-clean filters. No washing, no hassle. We swap in fresh, clean filters every visit on a schedule that fits your kitchen.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Quote</a>
            <a href="tel:8583612570" className="btn-secondary">📞 (858) 361-2570</a>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Simple. Reliable. Compliant.</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'24px'}}>
            {[
              {icon:'📋', t:'We Assess Your Kitchen', d:'We measure your filters and assess cooking volume to determine the right exchange schedule for your operation.'},
              {icon:'🔄', t:'We Stock Clean Filters', d:'A full set of clean, compliant filters is kept ready for your location. No delays, no waiting.'},
              {icon:'🚐', t:'We Show Up & Swap', d:'On your schedule — weekly or bi-weekly — we pull dirty filters and install clean ones. Takes minutes.'},
              {icon:'🧹', t:'We Handle the Cleaning', d:'Dirty filters come with us. We clean them at our facility so you never have to worry about it.'},
            ].map(s => (
              <div key={s.t} style={{background:'var(--white)', border:'1px solid var(--gray-light)', borderTop:'4px solid var(--rust)', borderRadius:'8px', padding:'32px', textAlign:'center'}}>
                <div style={{fontSize:'2.5rem', marginBottom:'16px'}}>{s.icon}</div>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'12px'}}>{s.t}</h3>
                <p style={{fontSize:'0.9rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Start Your Filter Exchange</h2>
          <p>Flat monthly pricing · No long-term contracts · San Diego County</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">📅 Get a Quote</a>
            <a href="tel:8583612570" className="btn-secondary">📞 (858) 361-2570</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-bottom" style={{paddingTop:'24px', justifyContent:'center', flexDirection:'column', gap:'8px', textAlign:'center'}}>
            <Link href="/" style={{color:'rgba(238,239,226,0.4)', fontSize:'0.85rem'}}>← Back to Home</Link>
            <p>© 2025 Core Hood Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
