import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Core Hood Cleaning | San Diego NFPA 96 Certified Team',
  description: 'Core Hood Cleaning is San Diego\'s locally-owned, NFPA 96 certified commercial hood cleaning company. Meet the team behind 200+ restaurant clients and 40+ five-star reviews.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/about' }
}

export default function AboutPage() {
  return (
    <>
      <Nav />
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
                or worse, outsourced to companies that cut corners Chase built a different kind of company.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Core Services is built on four values: blue-collar work ethic, family, honesty, and 
                professionalism. These aren&apos;t marketing words they&apos;re the reason we document every job 
                with before and after photos, why we show up on time, and why we do the job right every single time.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'40px'}}>
                Today, Core Hood Cleaning serves 200+ restaurants, hotels, schools, and commercial facilities 
                across San Diego County. Every technician is NFPA 96 certified and wears the Core Services jacket with pride.
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
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'center'}}>
            <div style={{borderRadius:'8px', overflow:'hidden'}}>
              <Image src="/images/team-rooftop.jpg" alt="Core Hood Cleaning crew on San Diego rooftop" width={600} height={420} style={{width:'100%', objectFit:'cover', objectPosition:'center 30%'}} />
            </div>
            <div>
              <p className="section-label">The Crew</p>
              <h2 className="section-title light" style={{marginBottom:'28px'}}>Built Around<br/>Compliance and Trust</h2>
              <p style={{color:'rgba(238,239,226,0.7)', lineHeight:'1.85', marginBottom:'20px'}}>
                Every technician on the Core Hood Cleaning crew is NFPA 96 certified, uniformed, and fully trained before they step foot in any kitchen. We do not cut corners, and we do not send unqualified techs to your property.
              </p>
              <p style={{color:'rgba(238,239,226,0.7)', lineHeight:'1.85', marginBottom:'32px'}}>
                We are fully licensed and insured throughout San Diego County. Our crews operate with the same level of professionalism you expect from any contractor working in your facility.
              </p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
                {[
                  { t:'NFPA 96 Certified', d:'Every tech trained and certified to the national fire code standard.' },
                  { t:'Fully Licensed', d:'California licensed contractor operating throughout San Diego County.' },
                  { t:'Fully Insured', d:'General liability and workers comp coverage on every job.' },
                  { t:'Uniformed Crew', d:'Identifiable, professional, and respectful of your operation.' },
                ].map(item => (
                  <div key={item.t} style={{background:'rgba(0,0,0,0.2)', border:'1px solid rgba(238,239,226,0.1)', borderRadius:'8px', padding:'18px'}}>
                    <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px'}}>
                      <span style={{width:'8px', height:'8px', borderRadius:'50%', background:'var(--rust)', flexShrink:0}} />
                      <h3 style={{fontFamily:'var(--font-display)', fontSize:'0.95rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'var(--off-white)'}}>{item.t}</h3>
                    </div>
                    <p style={{fontSize:'0.82rem', color:'rgba(238,239,226,0.5)', lineHeight:'1.6'}}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Work With Our Team</h2>
          <p>Free quotes. Same-day response. San Diego County.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Book a Quote</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
