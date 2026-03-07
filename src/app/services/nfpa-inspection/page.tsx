import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NFPA 96 Inspection San Diego | Commercial Kitchen Compliance | Core Hood Cleaning',
  description: 'Certified NFPA 96 commercial kitchen exhaust inspections in San Diego. Compliance certificates, written reports, fire marshal ready. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/services/nfpa-inspection' }
}

export default function NFPAPage() {
  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/images/core-logo.png" alt="Core Services" width={110} height={38} className="nav-logo-img" />
            <div className="nav-logo-text">Core Hood Cleaning<span className="nav-logo-sub">San Diego, CA · NFPA 96 Certified</span></div>
          </Link>
          <ul className="nav-links">
            <li className="nav-dropdown"><span className="nav-dropdown-trigger">Services</span><div className="nav-dropdown-menu"><Link href="/services/hood-cleaning">Hood Cleaning</Link><Link href="/services/filter-exchange">Filter Exchange</Link><Link href="/services/nfpa-inspection">NFPA 96 Inspections</Link></div></li>
            <li><Link href="/about">About</Link></li><li><Link href="/blog">Blog</Link></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:8583612570" className="nav-phone">(858) 361-2570</a>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary nav-btn">Book Now</a>
          </div>
        </div>
      </nav>

      <section style={{paddingTop:'0', minHeight:'55vh', background:'var(--black)', position:'relative', overflow:'hidden', display:'flex', alignItems:'center'}}>
        <div style={{position:'absolute', inset:0}}>
          <Image src="/images/tech-rooftop-palms.jpg" alt="NFPA inspection San Diego" fill style={{objectFit:'cover', opacity:0.3, objectPosition:'center 30%'}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.92) 45%, rgba(0,0,0,0.6) 100%)'}} />
        </div>
        <div className="container" style={{position:'relative', zIndex:2, paddingTop:'140px', paddingBottom:'80px', maxWidth:'800px'}}>
          <p className="section-label">Our Services</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2.5rem,5vw,4.5rem)', marginBottom:'24px'}}>NFPA 96<br/>Compliance Inspections</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'40px', maxWidth:'600px'}}>
            Certified commercial kitchen exhaust inspections with written reports and compliance certificates.
            Required for health departments, fire marshals, and insurance carriers throughout San Diego County.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule Inspection</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      <div className="trust-bar"><div className="trust-bar-inner">{['NFPA 96 Certified Technicians', 'Written Compliance Report', 'Photo Documentation', 'Fire Marshal Ready', 'Insurance Accepted'].map(t => <div key={t} className="trust-pill"><span className="dot" />{t}</div>)}</div></div>

      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'start'}}>
            <div>
              <p className="section-label">What Is NFPA 96</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>The Fire Code Standard<br/>Every Kitchen Must Meet</h2>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                NFPA 96 — the Standard for Ventilation Control and Fire Protection of Commercial
                Cooking Operations — is the primary fire code governing commercial kitchen exhaust
                systems in the United States. In San Diego, fire marshals and health departments
                reference NFPA 96 directly when inspecting your kitchen.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                The standard covers the design, installation, operation, and maintenance of commercial
                cooking exhaust systems — including required cleaning frequencies, access panel
                placement, fire suppression system compatibility, and grease containment.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Non-compliance can result in failed health inspections, fire permit issues, voided
                fire suppression system warranties, and insurance claim denials. A documented,
                certified inspection provides the evidence that your system meets the standard.
              </p>
            </div>
            <div>
              <p className="section-label">What We Inspect</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Full System<br/>Review</h2>
              <ul className="service-list">
                {['Hood canopy structure and mounting integrity','Grease filter type, condition, and installation','Plenum chamber condition and access','Ductwork interior — full run inspection','Exhaust fan operation, condition, and clearances','Make-up air system (where applicable)','Fire suppression nozzle placement and coverage','Grease drip trays and containment system','Access panel locations and code compliance','Clearances from combustible materials','Documentation of all deficiencies found'].map(i => (
                  <li key={i} style={{padding:'10px 0'}}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'88px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">Your Compliance Package</p>
            <h2 className="section-title">What You Receive<br/>After Every Inspection</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'24px'}}>
            {[
              {title:'Written Inspection Report', desc:'A detailed written report documenting every component inspected, its condition, and any deficiencies found. This is your official record of the inspection.'},
              {title:'NFPA 96 Compliance Certificate', desc:'A signed compliance certificate issued by a certified technician. Accepted by San Diego fire marshals, health departments, and commercial insurance carriers.'},
              {title:'Photo Documentation', desc:'Photographs of all areas inspected are included with your report. Visual documentation of system condition for your records and any regulatory review.'},
              {title:'Deficiency Report', desc:'If any issues are found, they are clearly documented with description, location, and recommended corrective action — so you know exactly what needs to be addressed.'},
              {title:'NFPA 96 Sticker', desc:'An inspection sticker is applied to your hood noting the date of inspection and the next required service. Required by code and visible to inspectors.'},
              {title:'Re-Inspection Available', desc:'If deficiencies are identified, we can quote the corrective work and return for a follow-up inspection to bring your system into full compliance.'},
            ].map(item => (
              <div key={item.title} style={{background:'var(--white)', border:'1px solid var(--gray-light)', borderTop:'4px solid var(--rust)', borderRadius:'8px', padding:'28px'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'10px'}}>{item.title}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'88px 0', background:'var(--true-blue)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'start'}}>
            <div>
              <p className="section-label">When You Need It</p>
              <h2 className="section-title light" style={{marginBottom:'24px'}}>Common Reasons<br/>for an Inspection</h2>
              {[
                'Before a scheduled health inspection or fire marshal visit',
                'After a hood cleaning to confirm full compliance',
                'When opening or taking over a restaurant location',
                'After any modifications to your kitchen exhaust system',
                'For insurance documentation or renewal',
                'When a previous inspection identified deficiencies',
                'Annual documentation for your compliance records',
              ].map(r => (
                <div key={r} style={{display:'flex', gap:'12px', alignItems:'flex-start', padding:'12px 0', borderBottom:'1px solid rgba(238,239,226,0.1)'}}>
                  <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'var(--rust)', flexShrink:0, marginTop:'6px'}} />
                  <p style={{fontSize:'0.9rem', color:'rgba(238,239,226,0.7)', lineHeight:'1.6'}}>{r}</p>
                </div>
              ))}
            </div>
            <div style={{background:'rgba(0,0,0,0.2)', border:'1px solid rgba(238,239,226,0.1)', borderRadius:'8px', padding:'40px'}}>
              <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', marginBottom:'20px'}}>Schedule an Inspection</h3>
              <p style={{fontSize:'0.9rem', color:'rgba(238,239,226,0.6)', lineHeight:'1.7', marginBottom:'28px'}}>
                We respond same-day and can typically schedule inspections within 48 hours.
                Emergency inspections available for urgent compliance needs.
              </p>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary" style={{display:'inline-flex', width:'100%', justifyContent:'center', marginBottom:'12px'}}>Book Online</a>
              <a href="tel:8583612570" className="call-link">(858) 361-2570</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'88px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Schedule an Inspection</h2>
          <p>NFPA 96 certified &middot; Written report included &middot; San Diego County</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Book Inspection</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      <footer><div className="container"><div className="footer-bottom" style={{paddingTop:'24px', justifyContent:'center', flexDirection:'column', gap:'8px', textAlign:'center'}}><Link href="/" style={{color:'rgba(238,239,226,0.4)', fontSize:'0.85rem'}}>Back to Home</Link><p>&copy; 2025 Core Hood Cleaning.</p></div></div></footer>
    </>
  )
}
