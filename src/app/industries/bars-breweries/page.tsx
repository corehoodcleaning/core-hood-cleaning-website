import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning for San Diego Bars & Breweries | Core Hood Cleaning',
  description: 'NFPA 96 certified hood cleaning for bars and craft breweries in San Diego. After-hours and weekend service that works around your schedule. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/industries/bars-breweries' }
}

export default function BarBreweriesPage() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'68px'}}>

        <section style={{background:'var(--black)', padding:'96px 0 80px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, backgroundImage:'url(/images/serve-bars.jpg)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.25}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 100%)'}} />
          <div className="container" style={{position:'relative', zIndex:2}}>
            <p className="section-label" style={{color:'var(--rust)'}}>Who We Serve</p>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1.0, marginBottom:'24px', maxWidth:'700px'}}>
              Hood Cleaning for<br />San Diego Bars &amp; Breweries
            </h1>
            <p style={{fontSize:'1.1rem', color:'rgba(238,239,226,0.7)', maxWidth:'560px', lineHeight:1.75, marginBottom:'40px'}}>
              Late-night service for late-night kitchens. We work around your schedule so your operation never skips a beat.
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
              <a href="tel:8583612570" className="btn-secondary">Call (858) 361-2570</a>
            </div>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--off-white)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">San Diego Craft Beer Country</p>
            <h2 className="section-title" style={{marginBottom:'32px'}}>We Understand the Bar and Brewery Business</h2>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              San Diego has one of the most active craft brewery and bar scenes in the country. Bars and breweries with full kitchens face unique compliance challenges. Late operating hours, high grease output from bar food menus, and the complexity of coordinating maintenance around both brewing schedules and kitchen service require a vendor who can actually work with your operation.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Core Hood Cleaning specializes in after-hours service. We come in when your kitchen closes, whether that is 1 AM or 4 AM, and we are gone before your morning prep crew arrives.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85}}>
              Bar kitchens tend to get overlooked because they are secondary to the beverage operation. But your exhaust system does not care about your priority list. Grease buildup in a bar kitchen that runs until 2 AM every night accumulates just as fast as any restaurant.
            </p>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">What We Handle</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Every Type of Bar and Brewery Kitchen</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'12px'}}>
              {[
                'Sports bars','Craft breweries with kitchens','Brew pubs','Cocktail lounges','Nightclubs with food service','Beer gardens','Taprooms','Wine bars with kitchens'
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
            <p className="section-label">What Sets Us Apart</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Built for Late-Night Operations</h2>
            {[
              { t:'After-hours scheduling', d:'We come in when your kitchen closes. No disruption to your service, no lost revenue, no crew working around us.' },
              { t:'Photo documentation', d:'Before and after photos on every job. Proof of service you can file with your insurance carrier and show any inspector.' },
              { t:'NFPA 96 compliance certificate', d:'A compliance sticker on your hood and a signed certificate after every service. Valid for fire marshals, health inspectors, and your insurance policy.' },
              { t:'Emergency service available', d:'Unexpected inspection or red tag? Call (858) 361-2570 any time and we will get to you fast.' },
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
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1, marginBottom:'20px'}}>Ready to Schedule?</h2>
            <p style={{color:'rgba(238,239,226,0.82)', fontSize:'1.05rem', marginBottom:'40px'}}>Same-day response. After-hours service available. NFPA 96 certified throughout San Diego County.</p>
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
