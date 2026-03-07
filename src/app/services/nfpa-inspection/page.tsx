import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NFPA 96 Inspection San Diego | Commercial Kitchen Compliance | Core Hood Cleaning',
  description: 'Certified NFPA 96 commercial kitchen exhaust inspections in San Diego. Compliance certificates, written reports, and re-inspections. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/services/nfpa-inspection' }
}

export default function NFPAInspectionPage() {
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
          <Image src="/images/tech-rooftop-palms.jpg" alt="Rooftop inspection San Diego" fill style={{objectFit:'cover', opacity:0.2}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.7) 100%)'}} />
        </div>
        <div className="container" style={{position:'relative', zIndex:2, maxWidth:'800px'}}>
          <p className="section-label">Our Services</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2.5rem,5vw,4rem)', marginBottom:'24px'}}>NFPA 96<br/>Compliance Inspections</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'40px', maxWidth:'600px'}}>
            Certified commercial kitchen exhaust inspections with written compliance reports. Required for health departments, fire marshals, and insurance carriers.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule Inspection</a>
            <a href="tel:8583612570" className="btn-secondary">📞 (858) 361-2570</a>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'start'}}>
            <div>
              <p className="section-label">What We Inspect</p>
              <h2 className="section-title" style={{marginBottom:'32px'}}>Full NFPA 96<br/>System Review</h2>
              <ul className="service-list" style={{marginBottom:'32px'}}>
                {['Hood canopy structure and integrity','Grease filter installation and type','Plenum chamber and access panels','Full ductwork inspection — interior','Exhaust fan operation and condition','Make-up air system (if applicable)','Fire suppression nozzle locations','Grease collection system','Access panel locations and clearances','Documentation of all deficiencies'].map(i => (
                  <li key={i} style={{padding:'10px 0'}}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="section-label">What You Receive</p>
              <h2 className="section-title" style={{marginBottom:'32px'}}>Your Compliance<br/>Package</h2>
              {[
                {icon:'📋', t:'Written Inspection Report', d:'Detailed written report documenting all components inspected, their condition, and any deficiencies found.'},
                {icon:'🏅', t:'Compliance Certificate', d:'Official NFPA 96 compliance certificate signed by a certified technician — accepted by fire marshals, health depts., and insurers.'},
                {icon:'📸', t:'Photo Documentation', d:'Photos of all inspected areas included with the report. Visual evidence of your system\'s condition.'},
                {icon:'🔄', t:'Re-Inspection if Needed', d:'If deficiencies are found, we can quote repairs and return for a follow-up inspection to get you fully compliant.'},
              ].map(i => (
                <div key={i.t} style={{display:'flex', gap:'16px', padding:'20px', background:'var(--white)', border:'1px solid var(--gray-light)', borderRadius:'8px', marginBottom:'12px'}}>
                  <span style={{fontSize:'1.5rem', flexShrink:0}}>{i.icon}</span>
                  <div>
                    <h4 style={{fontFamily:'var(--font-display)', fontWeight:800, textTransform:'uppercase', fontSize:'0.95rem', color:'var(--black)', marginBottom:'6px'}}>{i.t}</h4>
                    <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.6'}}>{i.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Schedule an Inspection</h2>
          <p>NFPA 96 certified · Written report included · San Diego County</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">📅 Book Inspection</a>
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
