import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Hood Cleaning San Diego | NFPA 96 Certified | Core Hood Cleaning',
  description: 'Professional commercial kitchen exhaust hood cleaning in San Diego. NFPA 96 certified, photo documentation included. Serving restaurants, hotels & schools. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/services/hood-cleaning' }
}

export default function HoodCleaningPage() {
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

      <section style={{paddingTop:'130px', paddingBottom:'80px', background:'var(--black)', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', inset:0}}>
          <Image src="/images/tech-pressure-wash.jpg" alt="Hood cleaning in progress" fill style={{objectFit:'cover', opacity:0.25}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.6) 100%)'}} />
        </div>
        <div className="container" style={{position:'relative', zIndex:2, maxWidth:'800px'}}>
          <p className="section-label">Our Services</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2.5rem,5vw,4rem)', marginBottom:'24px'}}>Commercial Hood<br/>Cleaning San Diego</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'40px', maxWidth:'600px'}}>
            Full-system NFPA 96 certified exhaust cleaning from hood canopy to rooftop fan. Every job includes before/after photos and a compliance certificate.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
            <a href="tel:8583612570" className="btn-secondary">📞 (858) 361-2570</a>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'center'}}>
            <div>
              <p className="section-label">What's Included</p>
              <h2 className="section-title" style={{marginBottom:'32px'}}>Full System<br/>Exhaust Cleaning</h2>
              <ul className="service-list" style={{marginBottom:'0'}}>
                {['Hood canopy, baffles & plenum chamber','Grease filters removed & pressure washed','Full ductwork from plenum to rooftop','Exhaust fan housing, blades & motor cover','Grease drip trays & containment bags','All grease collected & properly disposed','Before & after photos — every job','Compliance certificate & service report','NFPA 96 inspection sticker applied'].map(i => (
                  <li key={i} style={{padding:'10px 0'}}>{i}</li>
                ))}
              </ul>
            </div>
            <div style={{borderRadius:'8px', overflow:'hidden'}}>
              <Image src="/images/before-after-1.jpg" alt="Duct before and after cleaning" width={600} height={450} style={{width:'100%', height:'auto', objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">Our Process</p>
            <h2 className="section-title light">How We Clean</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'24px'}}>
            {[
              {n:'01', t:'Protection First', d:'We cover all cooking equipment and surfaces with protective poly plastic before any cleaning begins.'},
              {n:'02', t:'Degrease & Soak', d:'Commercial-grade degreaser is applied to all hood surfaces, filters, and ductwork. We let it work.'},
              {n:'03', t:'Pressure Wash', d:'High-pressure hot water system blasts every surface — hood to fan. Grease is contained and collected.'},
              {n:'04', t:'Rooftop Fan', d:'We access the rooftop, clean the exhaust fan housing, blades, and surrounding area per NFPA 96.'},
              {n:'05', t:'Cleanup & Inspection', d:'All grease and water is cleaned up. We do a final walk-through inspection of the entire system.'},
              {n:'06', t:'Documentation', d:'Before and after photos captured, compliance certificate issued, service report delivered.'},
            ].map(s => (
              <div key={s.n} style={{background:'rgba(0,0,0,0.2)', border:'1px solid rgba(238,239,226,0.08)', borderRadius:'8px', padding:'28px'}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:900, color:'var(--rust)', marginBottom:'12px'}}>{s.n}</div>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'var(--off-white)', marginBottom:'10px'}}>{s.t}</h3>
                <p style={{fontSize:'0.875rem', color:'rgba(238,239,226,0.55)', lineHeight:'1.6'}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Schedule Hood Cleaning</h2>
          <p>Free quotes · Same-day response · NFPA 96 certified</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">📅 Book Online</a>
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
