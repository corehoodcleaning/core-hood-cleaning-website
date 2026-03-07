import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Core Hood Cleaning | San Diego NFPA 96 Certified Team',
  description: 'Core Hood Cleaning is San Diego\'s locally-owned, NFPA 96 certified commercial hood cleaning company. Meet the team behind 200+ restaurant clients and 40+ five-star reviews.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/about' }
}

export default function AboutPage() {
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
          <Image src="/images/team-rooftop.jpg" alt="Core Hood Cleaning team" fill style={{objectFit:'cover', opacity:0.2, objectPosition:'center 40%'}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.6) 100%)'}} />
        </div>
        <div className="container" style={{position:'relative', zIndex:2, maxWidth:'700px'}}>
          <p className="section-label">Our Story</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2.5rem,5vw,4rem)', marginBottom:'24px'}}>At the Core<br/>of Every Job</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.1rem', lineHeight:'1.8'}}>
            San Diego&apos;s locally-owned, NFPA 96 certified commercial kitchen exhaust cleaning company.
          </p>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'80px', alignItems:'start'}}>
            <div>
              <div style={{borderRadius:'8px', overflow:'hidden', marginBottom:'24px'}}>
                <Image src="/images/chase-headshot.jpg" alt="Chase Mangini, Founder of Core Hood Cleaning" width={600} height={500} style={{width:'100%', objectFit:'cover'}} />
              </div>
              <div style={{background:'var(--off-white)', border:'1px solid var(--gray-light)', borderRadius:'8px', padding:'20px'}}>
                <p style={{fontFamily:'var(--font-display)', fontWeight:900, textTransform:'uppercase', fontSize:'1rem', color:'var(--black)', marginBottom:'4px'}}>Chase Mangini</p>
                <p style={{fontSize:'0.85rem', color:'var(--gray-text)', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.05em'}}>Founder & Owner</p>
              </div>
            </div>
            <div>
              <p className="section-label">Our Mission</p>
              <h2 className="section-title" style={{marginBottom:'32px'}}>Built on Blue-Collar<br/>Values</h2>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Core Hood Cleaning was founded by Chase Mangini, who grew up in the restaurant industry. 
                After spending years watching how commercial kitchen maintenance was treated as an afterthought 
                — or worse, outsourced to companies that cut corners — Chase built a different kind of company.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Core Services is built on four values: blue-collar work ethic, family, honesty, and 
                professionalism. These aren&apos;t marketing words — they&apos;re the reason we document every job 
                with before and after photos, why we show up on time, and why we don&apos;t upsell services 
                you don&apos;t need.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'40px'}}>
                Today, Core Hood Cleaning serves 200+ restaurants, hotels, schools, and commercial facilities 
                across San Diego County. Every technician on Team 360 is NFPA 96 certified and wears 
                the Core Services jacket with pride.
              </p>

              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px', marginBottom:'40px'}}>
                {[{n:'200+', l:'Restaurants Served'},{n:'40+', l:'5-Star Reviews'},{n:'NFPA 96', l:'Certified Team'},{n:'24/7', l:'Emergency Service'}].map(s => (
                  <div key={s.l} style={{background:'var(--off-white)', border:'1px solid var(--gray-light)', borderTop:'3px solid var(--rust)', borderRadius:'8px', padding:'20px', textAlign:'center'}}>
                    <div style={{fontFamily:'var(--font-display)', fontSize:'1.8rem', fontWeight:900, color:'var(--rust)', marginBottom:'4px'}}>{s.n}</div>
                    <div style={{fontSize:'0.78rem', color:'var(--gray-text)', textTransform:'uppercase', letterSpacing:'0.06em', fontWeight:600}}>{s.l}</div>
                  </div>
                ))}
              </div>

              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Service</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">The Crew</p>
            <h2 className="section-title light">Team 360</h2>
            <p style={{color:'rgba(238,239,226,0.55)', marginTop:'16px', fontSize:'1rem'}}>San Diego County&apos;s NFPA 96 certified exhaust cleaning team</p>
          </div>
          <div style={{borderRadius:'8px', overflow:'hidden', maxWidth:'800px', margin:'0 auto'}}>
            <Image src="/images/team-rooftop.jpg" alt="Core Hood Cleaning Team 360 on San Diego rooftop" width={800} height={500} style={{width:'100%', objectFit:'cover'}} />
          </div>
          <p style={{textAlign:'center', color:'rgba(238,239,226,0.45)', marginTop:'20px', fontSize:'0.85rem', fontFamily:'var(--font-display)', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase'}}>+ At the Core of Every Job +</p>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Work With Our Team</h2>
          <p>Free quotes · Same-day response · San Diego County</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">📅 Book a Quote</a>
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
