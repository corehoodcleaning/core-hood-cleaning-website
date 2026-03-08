import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning for Commercial Commissaries in San Diego | Core Hood Cleaning',
  description: 'High-frequency NFPA 96 certified hood cleaning for commercial commissaries and food production facilities in San Diego County. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/industries/commissaries' }
}

export default function CommissariesPage() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'68px'}}>

        <section style={{background:'var(--black)', padding:'96px 0 80px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, backgroundImage:'url(/images/serve-commissaries.jpg)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.25}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 100%)'}} />
          <div className="container" style={{position:'relative', zIndex:2}}>
            <p className="section-label" style={{color:'var(--rust)'}}>Who We Serve</p>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1.0, marginBottom:'24px', maxWidth:'700px'}}>
              Hood Cleaning for<br />Commercial Commissaries
            </h1>
            <p style={{fontSize:'1.1rem', color:'rgba(238,239,226,0.7)', maxWidth:'560px', lineHeight:1.75, marginBottom:'40px'}}>
              High-volume production kitchens need high-frequency compliance. We build cleaning schedules around your production calendar.
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
              <a href="tel:8583612570" className="btn-secondary">Call (858) 361-2570</a>
            </div>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--off-white)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">Production Scale Compliance</p>
            <h2 className="section-title" style={{marginBottom:'32px'}}>When One Location Feeds Many</h2>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Commercial commissaries and large-scale food production facilities operate at cooking volumes that can require monthly or more frequent hood cleaning under NFPA 96. These facilities run multiple shifts, produce large quantities of grease-laden cooking exhaust, and often supply food to multiple locations. A compliance shutdown does not just affect one kitchen. It has cascading consequences across your entire operation.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Commissary kitchens often have extensive ductwork runs and multiple hood systems. A cleaning that does not cover the full system is not NFPA 96 compliant and leaves your facility exposed. We clean every hood, every duct run, and every exhaust fan on every visit.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85}}>
              Core Hood Cleaning works with your production calendar to schedule service during downtime windows so your output never gets interrupted.
            </p>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">What We Handle</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>All Types of Production Facilities</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'12px'}}>
              {[
                'Food production commissaries','Catering facility kitchens','Shared commercial kitchen spaces','Meal prep operations','Food truck commissaries','Ghost kitchen facilities','Wholesale food production','Catering supply kitchens'
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
            <p className="section-label">Full System Coverage</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>No Shortcuts on High-Volume Systems</h2>
            {[
              { t:'Complete system cleaning every visit', d:'Every hood, every duct run to the rooftop, every exhaust fan. We do not skip sections or cut corners on large systems.' },
              { t:'Monthly and high-frequency schedules', d:'If your cooking volume requires monthly cleaning under NFPA 96, we build that schedule and stick to it. You will never fall out of compliance.' },
              { t:'Multi-hood coordination', d:'Commissaries with multiple hood systems get a single coordinated service visit that covers the entire facility.' },
              { t:'Production-calendar scheduling', d:'We schedule around your shifts and production windows so cleaning never interrupts output.' },
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
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1, marginBottom:'20px'}}>Get Your Commissary on Schedule</h2>
            <p style={{color:'rgba(238,239,226,0.82)', fontSize:'1.05rem', marginBottom:'40px'}}>Same-day response. Full system coverage. NFPA 96 certified service throughout San Diego County.</p>
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
