import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hood Cleaning Cost San Diego 2025 | Pricing Guide | Core Hood Cleaning',
  description: 'How much does hood cleaning cost in San Diego? Pricing ranges from $150 to $500+ depending on system size and frequency. Transparent 2025 pricing breakdown.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/hood-cleaning-cost-san-diego' }
}

export default function HoodCleaningCostPost() {
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
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:8583612570" className="nav-phone">📞 (858) 361-2570</a>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary" style={{padding:'10px 20px', fontSize:'0.85rem'}}>Book Now</a>
          </div>
        </div>
      </nav>

      <article style={{paddingTop:'100px'}}>
        <div style={{background:'var(--true-blue)', padding:'60px 0 48px'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <Link href="/blog" style={{color:'rgba(238,239,226,0.5)', fontSize:'0.85rem', display:'inline-block', marginBottom:'24px'}}>← Blog</Link>
            <div style={{display:'flex', gap:'12px', marginBottom:'16px'}}>
              <span style={{fontFamily:'var(--font-display)', fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--rust)', background:'rgba(137,29,27,0.2)', padding:'4px 10px', borderRadius:'4px'}}>Pricing</span>
              <span style={{fontSize:'0.78rem', color:'rgba(238,239,226,0.5)'}}>December 2024</span>
            </div>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:'1.1', marginBottom:'20px'}}>How Much Does Hood Cleaning Cost in San Diego? (2025 Pricing Guide)</h1>
            <p style={{color:'rgba(238,239,226,0.6)', fontSize:'1rem', lineHeight:'1.7'}}>Transparent pricing breakdown from San Diego&apos;s own hood cleaning company. No hidden fees, no surprises.</p>
          </div>
        </div>

        <div style={{background:'var(--white)', padding:'64px 0'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'16px', marginBottom:'48px'}}>
              {[{range:'$150–$250',label:'Small System',desc:'Single hood, low volume'},{range:'$250–$400',label:'Standard System',desc:'1–2 hoods, restaurant'},{range:'$400–$700+',label:'Large System',desc:'Multiple hoods, high-volume'}].map(r => (
                <div key={r.label} style={{background:'var(--off-white)', border:'1px solid var(--gray-light)', borderTop:'3px solid var(--rust)', borderRadius:'8px', padding:'20px', textAlign:'center'}}>
                  <div style={{fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:900, color:'var(--rust)', marginBottom:'6px'}}>{r.range}</div>
                  <div style={{fontFamily:'var(--font-display)', fontWeight:800, textTransform:'uppercase', fontSize:'0.85rem', color:'var(--black)', marginBottom:'6px'}}>{r.label}</div>
                  <div style={{fontSize:'0.78rem', color:'var(--gray-text)'}}>{r.desc}</div>
                </div>
              ))}
            </div>

            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'16px'}}>What Affects Hood Cleaning Cost</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>Several factors influence the price of a hood cleaning service in San Diego. Here&apos;s what any legitimate company should explain upfront:</p>
            
            {[
              {t:'System Size', d:'Larger hood systems with longer ductwork take more time and chemicals. A small café with a single compact hood costs significantly less than a large restaurant with 20+ feet of ductwork running to the roof.'},
              {t:'Service Frequency', d:'Restaurants on monthly or quarterly programs receive lower per-service rates than one-time or annual cleanings. Consistent scheduling also keeps systems from becoming severely soiled.'},
              {t:'Level of Buildup', d:'A heavily neglected hood that hasn\'t been cleaned in over a year requires significantly more labor. Initial cleanings after long gaps cost more than ongoing maintenance services.'},
              {t:'Accessibility', d:'Difficult-to-access ductwork or rooftop fans require additional time and equipment. Multi-story buildings, complex routing, or non-standard access panels may add to the cost.'},
            ].map(i => (
              <div key={i.t} style={{padding:'20px 0', borderBottom:'1px solid var(--gray-light)'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontWeight:800, textTransform:'uppercase', fontSize:'1rem', color:'var(--black)', marginBottom:'8px'}}>{i.t}</h3>
                <p style={{fontSize:'0.9rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{i.d}</p>
              </div>
            ))}

            <div style={{background:'var(--off-white)', borderLeft:'4px solid var(--rust)', borderRadius:'8px', padding:'28px', margin:'40px 0'}}>
              <p style={{fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:800, textTransform:'uppercase', color:'var(--black)', marginBottom:'8px'}}>Always Get a Written Quote</p>
              <p style={{fontSize:'0.9rem', color:'var(--gray-text)', lineHeight:'1.7'}}>Any reputable hood cleaning company will give you a written quote before starting work. Be wary of unusually low prices — they often mean skipped steps, no documentation, or non-certified technicians.</p>
            </div>

            <div style={{borderTop:'1px solid var(--gray-light)', paddingTop:'40px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
              <a href="tel:8583612570" style={{display:'inline-flex', alignItems:'center', gap:'8px', fontFamily:'var(--font-display)', fontWeight:800, color:'var(--rust)', textTransform:'uppercase', fontSize:'1rem'}}>📞 (858) 361-2570</a>
            </div>
          </div>
        </div>
      </article>

      <footer>
        <div className="container">
          <div className="footer-bottom" style={{paddingTop:'24px', justifyContent:'center', flexDirection:'column', gap:'8px', textAlign:'center'}}>
            <Link href="/blog" style={{color:'rgba(238,239,226,0.4)', fontSize:'0.85rem'}}>← Back to Blog</Link>
            <p>© 2025 Core Hood Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
