import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning for San Diego Stadiums & Sports Venues | Core Hood Cleaning',
  description: 'NFPA 96 certified hood cleaning for stadium concession kitchens and sports venue food service in San Diego. Event-calibrated cleaning schedules. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/industries/stadiums-sports-venues' }
}

export default function StadiumsPage() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'68px'}}>

        <section style={{background:'var(--black)', padding:'96px 0 80px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, backgroundImage:'url(/images/serve-stadiums.jpg)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.25}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 100%)'}} />
          <div className="container" style={{position:'relative', zIndex:2}}>
            <p className="section-label" style={{color:'var(--rust)'}}>Who We Serve</p>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1.0, marginBottom:'24px', maxWidth:'700px'}}>
              Hood Cleaning for<br />Stadiums &amp; Sports Venues
            </h1>
            <p style={{fontSize:'1.1rem', color:'rgba(238,239,226,0.7)', maxWidth:'560px', lineHeight:1.75, marginBottom:'40px'}}>
              High-volume concession kitchens that need to be ready on game day. We keep your kitchen compliant between events.
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
              <a href="tel:8583612570" className="btn-secondary">Call (858) 361-2570</a>
            </div>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--off-white)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">Event-Based Operations</p>
            <h2 className="section-title" style={{marginBottom:'32px'}}>Your Kitchen Goes from Zero to Full Capacity Fast</h2>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Stadiums, arenas, and sports venues operate some of the highest-volume commercial kitchens in San Diego County but only on event days. This creates a unique maintenance challenge. Your kitchen goes from idle to full capacity with little warning, and compliance cannot be an afterthought.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              High-volume cooking in short bursts creates rapid grease accumulation. A concession kitchen that runs hard for four hours during a game may accumulate more grease than a restaurant does in a full week. Event-based operations need a cleaning schedule calibrated to event frequency, not just calendar dates.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85}}>
              Core Hood Cleaning works with venue food service operators and catering companies to keep concession kitchens and suites compliant between events. We schedule around your event calendar and make sure your kitchen is always ready when it needs to be.
            </p>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">What We Handle</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Every Venue Kitchen Type</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'12px'}}>
              {[
                'Stadium concession kitchens','Arena food service operations','Sports venue catering kitchens','Luxury suite kitchens','Event center food service','Press box kitchens','Club level food service','Tailgate and outdoor event kitchens'
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
            <p className="section-label">Built for Event Operations</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Ready Before Game Day, Every Time</h2>
            {[
              { t:'Event-frequency cleaning schedules', d:'We calibrate your cleaning schedule to how many events you run per month, not just a standard quarterly calendar. High event frequency means more frequent cleaning.' },
              { t:'Between-event scheduling', d:'We schedule service in the windows between events so your kitchen is always compliant and ready to go.' },
              { t:'Multi-kitchen coordination', d:'Large venues with multiple concession kitchens get a coordinated service plan that covers the entire facility in a single maintenance window.' },
              { t:'Full documentation', d:'NFPA 96 compliance certificate and photo documentation after every service. Everything your insurance carrier and fire marshal need to see.' },
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
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1, marginBottom:'20px'}}>Get Your Venue on a Schedule</h2>
            <p style={{color:'rgba(238,239,226,0.82)', fontSize:'1.05rem', marginBottom:'40px'}}>Same-day response. Event-calibrated scheduling. NFPA 96 certified service throughout San Diego County.</p>
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
