import type { Metadata } from 'next'
import seoConfig from '../../seo-config.json'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = seoConfig["hood-cleaning"]

export default function HoodCleaningPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{paddingTop:'0', minHeight:'60vh', background:'var(--black)', position:'relative', overflow:'hidden', display:'flex', alignItems:'center'}}>
        <div style={{position:'absolute', inset:0}}>
          <Image src="/images/tech-pressure-wash.jpg" alt="Hood cleaning technician at work" fill style={{objectFit:'cover', opacity:0.35, objectPosition:'center'}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.9) 45%, rgba(0,0,0,0.55) 100%)'}} />
        </div>
        <div className="container" style={{position:'relative', zIndex:2, paddingTop:'140px', paddingBottom:'80px', maxWidth:'800px'}}>
          <p className="section-label">Our Services</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2.5rem,5vw,4.5rem)', marginBottom:'24px'}}>Commercial Hood<br/>Cleaning San Diego</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'40px', maxWidth:'600px'}}>
            Full-system NFPA 96 certified exhaust cleaning from hood canopy to rooftop fan.
            Every job includes before and after photos and a compliance certificate accepted by
            fire marshals, health departments, and insurance carriers.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {['NFPA 96 Certified', 'Photo Documentation Included', '200+ Restaurants Served', '24/7 Emergency Service', 'Fully Licensed & Insured'].map(t => (
            <div key={t} className="trust-pill"><span className="dot" />{t}</div>
          ))}
        </div>
      </div>

      {/* WHAT IS HOOD CLEANING */}
      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'center'}}>
            <div>
              <p className="section-label">What It Is</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>More Than Just<br/>Cleaning the Hood</h2>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Most people think hood cleaning means wiping down the visible hood surface. In reality,
                NFPA 96 compliant hood cleaning covers the entire exhaust pathway from the cooking
                surface all the way to the exhaust fan on your rooftop.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Grease doesn't stop at the hood. It travels up through the ductwork and accumulates
                throughout the system. A cleaning that only addresses the visible hood leaves the most
                dangerous grease buildup untouched inside the duct and around the rooftop fan.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8'}}>
                Core Hood Cleaning services the complete system on every visit, exactly as NFPA 96
                requires. You get the full job, the full documentation, and a compliance certificate
                that holds up to any inspection.
              </p>
            </div>
            <div style={{borderRadius:'8px', overflow:'hidden'}}>
              <Image src="/images/before-after-1.jpg" alt="Duct cleaning before and after" width={600} height={480} style={{width:'100%', height:'480px', objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{padding:'88px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">Full System Service</p>
            <h2 className="section-title">Everything Covered<br/>On Every Visit</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'24px'}}>
            {[
              {title:'Hood Canopy & Baffles', desc:'The visible hood and all baffle filters are degreased and pressure washed. Every grease-contact surface is cleaned to bare metal.'},
              {title:'Plenum Chamber', desc:'The chamber directly above your filters is one of the highest grease accumulation points. We clean the plenum thoroughly on every visit.'},
              {title:'Grease Filters', desc:'All filters are removed, soaked, pressure washed, and reinstalled. We document filter condition and flag any that need replacement.'},
              {title:'Full Ductwork', desc:'We clean the complete duct run from the plenum to the rooftop. Not just the accessible sections. This is what separates a compliant cleaning from a partial one.'},
              {title:'Exhaust Fan & Housing', desc:'The rooftop exhaust fan is hinged open, and the fan blades, housing, and surrounding curb are cleaned and inspected. Fan condition is documented.'},
              {title:'Grease Containment', desc:'All grease and wash water is collected and properly disposed of. We never leave grease residue on your roof or drain it into the building.'},
              {title:'Before & After Photos', desc:'Photos are taken of every area before and after cleaning. You receive a full photo set with your service report as proof of work performed.'},
              {title:'Compliance Certificate', desc:'An NFPA 96 compliance sticker is applied to your hood, and a signed compliance certificate is issued, valid for fire marshals, health inspectors, and insurance.'},
            ].map(item => (
              <div key={item.title} style={{background:'var(--white)', border:'1px solid var(--gray-light)', borderTop:'4px solid var(--rust)', borderRadius:'8px', padding:'28px'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'10px'}}>{item.title}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{padding:'88px 0', background:'var(--true-blue)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">How We Work</p>
            <h2 className="section-title light">Our Cleaning Process</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px'}}>
            {[
              {n:'01', t:'Protection First', d:'All cooking equipment and surfaces near the hood are covered with heavy-duty poly plastic before any cleaning begins. Your kitchen is protected.'},
              {n:'02', t:'Before Photos', d:'We document the condition of every area before we start including the hood interior, duct access points, and rooftop fan. This is your baseline.'},
              {n:'03', t:'Degrease & Soak', d:'Commercial-grade alkaline degreaser is applied to all surfaces. We let it dwell to break down grease before washing, which means a more thorough clean.'},
              {n:'04', t:'Pressure Wash', d:'High-pressure hot water blasts every surface clean from the hood canopy through the duct to the rooftop fan. All grease is pushed to collection points.'},
              {n:'05', t:'Rooftop Service', d:'We access the roof, open the exhaust fan, and clean the blades, housing, and surrounding curb. All rooftop grease and water is collected and removed.'},
              {n:'06', t:'Documentation', d:'After photos are taken. Your compliance certificate is issued. The service report is delivered. Your kitchen is ready for any inspection.'},
            ].map(s => (
              <div key={s.n} style={{background:'rgba(0,0,0,0.2)', border:'1px solid rgba(238,239,226,0.08)', borderRadius:'8px', padding:'28px'}}>
                <div style={{fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:900, color:'var(--rust)', marginBottom:'12px'}}>{s.n}</div>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:800, textTransform:'uppercase', color:'var(--off-white)', marginBottom:'10px'}}>{s.t}</h3>
                <p style={{fontSize:'0.875rem', color:'rgba(238,239,226,0.55)', lineHeight:'1.6'}}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO NEEDS IT */}
      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'start'}}>
            <div>
              <p className="section-label">Who Needs It</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Required for Any<br/>Commercial Kitchen</h2>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                If your kitchen has a commercial cooking appliance with an exhaust hood requires
                regular professional cleaning under NFPA 96. This applies to restaurants, hotels,
                schools, hospitals, commissaries, food trucks, and any other commercial food
                service operation.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                The San Diego County Department of Environmental Health, the San Diego Fire Department,
                and commercial insurance carriers all require NFPA 96 compliance. A failed inspection
                or an uncleaned system that contributes to a fire creates significant liability.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8'}}>
                Core Hood Cleaning serves restaurants, hotels, schools, hospitals, bars, breweries,
                commissaries, and food trucks throughout San Diego County.
              </p>
            </div>
            <div>
              <p className="section-label">Cleaning Frequency</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>NFPA 96 Required<br/>Schedule</h2>
              {[
                {freq:'Monthly', type:'High-Volume & Solid Fuel', desc:'Operations using wood-burning ovens, charcoal grills, wok stations, or producing very high volumes of grease-laden air.', color:'var(--rust)'},
                {freq:'Quarterly', type:'Moderate Volume', desc:'Most full-service restaurants, fast casual operations, and school cafeterias. This is the most common cleaning frequency in San Diego.', color:'var(--true-blue)'},
                {freq:'Semi-Annually', type:'Low-Volume Operations', desc:'Facilities with limited cooking hours, low-heat cooking methods, or seasonal operations. A certified inspection determines eligibility.', color:'var(--suede)'},
              ].map(r => (
                <div key={r.freq} style={{display:'flex', gap:'20px', alignItems:'flex-start', padding:'20px', background:'var(--off-white)', borderRadius:'8px', marginBottom:'12px', borderLeft:`4px solid ${r.color}`}}>
                  <div style={{flexShrink:0}}>
                    <div style={{fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:900, color:r.color}}>{r.freq}</div>
                    <div style={{fontFamily:'var(--font-display)', fontSize:'0.75rem', fontWeight:800, textTransform:'uppercase', color:'var(--black)'}}>{r.type}</div>
                  </div>
                  <p style={{fontSize:'0.85rem', color:'var(--gray-text)', lineHeight:'1.6'}}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{padding:'88px 0', background:'var(--black)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'48px'}}>
            <p className="section-label" style={{color:'#d47c7b'}}>Results</p>
            <h2 className="section-title light">Before &amp; After</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
            {['/images/before-after-1.jpg', '/images/before-after-2.jpg', '/images/before-after-4.png', '/images/before-after-5.png'].map((src, i) => (
              <div key={src} style={{borderRadius:'8px', overflow:'hidden', aspectRatio:'4/3'}}>
                <Image src={src} alt={`Before and after ${i+1}`} width={600} height={450} style={{width:'100%', height:'100%', objectFit:'cover'}} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'88px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Schedule Hood Cleaning</h2>
          <p>Free quotes &middot; Same-day response &middot; NFPA 96 certified</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Book Online</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
