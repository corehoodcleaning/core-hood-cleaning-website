import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning for San Diego Hotels & Resorts | Core Hood Cleaning',
  description: 'Professional hood cleaning for San Diego hotels and resorts. We coordinate with property management, meet brand standards, and deliver full NFPA 96 documentation. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/industries/hotels-resorts' }
}

export default function HotelsResortsPage() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'68px'}}>

        <section style={{background:'var(--black)', padding:'96px 0 80px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, backgroundImage:'url(/images/serve-hotels.jpg)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.25}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 100%)'}} />
          <div className="container" style={{position:'relative', zIndex:2}}>
            <p className="section-label" style={{color:'var(--rust)'}}>Who We Serve</p>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1.0, marginBottom:'24px', maxWidth:'700px'}}>
              Hood Cleaning for<br />San Diego Hotels &amp; Resorts
            </h1>
            <p style={{fontSize:'1.1rem', color:'rgba(238,239,226,0.7)', maxWidth:'560px', lineHeight:1.75, marginBottom:'40px'}}>
              Professional service for properties that demand it. We coordinate with your team, meet your brand standards, and deliver documentation your insurance requires.
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
              <a href="tel:8583612570" className="btn-secondary">Call (858) 361-2570</a>
            </div>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--off-white)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">Hospitality Standards</p>
            <h2 className="section-title" style={{marginBottom:'32px'}}>A Vendor That Matches Your Property Standards</h2>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              San Diego's hotel and resort industry sets a high bar for vendor standards. Hotel kitchens operate long hours, often run multiple hood systems across different food and beverage outlets, and require service that integrates seamlessly with property operations.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Core Hood Cleaning has experience coordinating with executive chefs, engineering departments, and property management teams to deliver compliant, professional service on your schedule.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85}}>
              Hotel brand standards and commercial property insurance both require documented kitchen exhaust maintenance. A compliance gap in a hotel kitchen is not just a fire risk. It is a liability exposure that can affect your insurance coverage and brand certification.
            </p>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">What We Handle</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Every Hotel and Resort Kitchen Outlet</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'12px'}}>
              {[
                'Full-service hotel restaurants','Resort dining rooms','Banquet and catering kitchens','Rooftop bars','Pool bar food service','Room service prep kitchens','Convention center kitchens','Lobby cafe kitchens'
              ].map(item => (
                <div key={item} style={{display:'flex', alignItems:'center', gap:'12px', padding:'14px 18px', background:'rgba(0,0,0,0.15)', border:'1px solid rgba(238,239,226,0.1)', borderRadius:'6px', fontSize:'0.9rem', fontWeight:600, color:'var(--off-white)'}}>
                  <span style={{width:'8px', height:'8px', borderRadius:'50%', background:'var(--rust)', flexShrink:0}} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--black)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">Property Management Friendly</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>We Work With Your Team</h2>
            {[
              { t:'Coordination with your engineering team', d:'We communicate directly with your facilities or engineering department to schedule service during approved maintenance windows.' },
              { t:'Multiple outlets, one vendor', d:'If your property has multiple kitchen outlets, we can service them all on a single visit or on staggered schedules that work for your operation.' },
              { t:'Brand-standard documentation', d:'Full photo documentation and a signed NFPA 96 compliance certificate after every service. Formatted for easy filing with your corporate compliance team.' },
              { t:'Professional crew, every time', d:'Uniformed technicians, clear communication, and a clean work area when we leave. Your guests never know we were there.' },
            ].map(d => (
              <div key={d.t} style={{display:'flex', gap:'20px', padding:'24px', background:'rgba(238,239,226,0.04)', border:'1px solid rgba(238,239,226,0.07)', borderRadius:'8px', marginBottom:'12px'}}>
                <span style={{width:'12px', height:'12px', borderRadius:'50%', background:'var(--rust)', flexShrink:0, marginTop:'6px'}} />
                <div>
                  <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em', color:'var(--off-white)', marginBottom:'8px'}}>{d.t}</h3>
                  <p style={{fontSize:'0.9rem', color:'rgba(238,239,226,0.5)', lineHeight:1.7}}>{d.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--rust)', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, background:'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.05) 40px, rgba(0,0,0,0.05) 80px)'}} />
          <div className="container" style={{position:'relative', textAlign:'center', maxWidth:'640px'}}>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1, marginBottom:'20px'}}>Let's Talk About Your Property</h2>
            <p style={{color:'rgba(238,239,226,0.82)', fontSize:'1.05rem', marginBottom:'40px'}}>Same-day response. Full documentation. NFPA 96 certified service throughout San Diego County.</p>
            <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Book Online</a>
              <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
