import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning for San Diego Restaurants | Core Hood Cleaning',
  description: 'NFPA 96 certified commercial hood cleaning for restaurants across San Diego County. From Oceanside down to Coronado, we serve all sizes and cuisines. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/industries/restaurants' }
}

export default function RestaurantsPage() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'68px'}}>

        {/* HERO */}
        <section style={{background:'var(--black)', padding:'96px 0 80px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, backgroundImage:'url(/images/serve-restaurants.jpg)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.25}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 100%)'}} />
          <div className="container" style={{position:'relative', zIndex:2}}>
            <p className="section-label" style={{color:'var(--rust)'}}>Who We Serve</p>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1.0, marginBottom:'24px', maxWidth:'700px'}}>
              Hood Cleaning for<br />San Diego Restaurants
            </h1>
            <p style={{fontSize:'1.1rem', color:'rgba(238,239,226,0.7)', maxWidth:'560px', lineHeight:1.75, marginBottom:'40px'}}>
              From Oceanside down to Coronado, we keep every kitchen compliant. All sizes, all cuisines, all of San Diego County.
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
              <a href="tel:8583612570" className="btn-secondary">Call (858) 361-2570</a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section style={{padding:'80px 0', background:'var(--off-white)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">The Restaurant Standard</p>
            <h2 className="section-title" style={{marginBottom:'32px'}}>We Know the Restaurant Business</h2>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Core Hood Cleaning was built by people who grew up in the restaurant industry. We understand what it means to keep a kitchen running, to work around a service schedule, and to deal with the real consequences of falling out of compliance.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              We serve restaurants of every size and cuisine type across San Diego County. Whether you run a 10-seat neighborhood spot in North Park or a 200-cover oceanfront property in La Jolla, your exhaust system requires the same NFPA 96 certified maintenance.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85}}>
              We schedule around your hours, document everything, and give you the compliance paperwork you need. No surprises, no missed appointments, no excuses.
            </p>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
          <div className="container">
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'start'}}>
              <div>
                <p className="section-label">Why It Matters</p>
                <h2 className="section-title light" style={{marginBottom:'28px'}}>Restaurants Are the Highest Risk Category</h2>
                <p style={{color:'rgba(238,239,226,0.7)', lineHeight:1.85, marginBottom:'20px'}}>
                  High cooking volumes, diverse fuel types, and back-to-back service mean grease accumulates faster than most operators realize. A cleaning schedule that works for a low-volume cafe can leave a high-volume charbroiler kitchen dangerously out of compliance within weeks.
                </p>
                <p style={{color:'rgba(238,239,226,0.7)', lineHeight:1.85, marginBottom:'20px'}}>
                  Grease fires in commercial kitchens are the leading cause of restaurant fires in California. NFPA 96 compliance is not just a box to check for your health inspector. It is the difference between a manageable situation and a total loss.
                </p>
                <p style={{color:'rgba(238,239,226,0.7)', lineHeight:1.85}}>
                  Your commercial insurance policy almost certainly requires documented hood cleaning maintenance. A fire with no service records is a policy that does not pay out.
                </p>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
                {[
                  { n:'200+', label:'Restaurants Served' },
                  { n:'40+', label:'5-Star Reviews' },
                  { n:'24/7', label:'Emergency Available' },
                  { n:'100%', label:'Photo Documented' },
                ].map(s => (
                  <div key={s.n} style={{background:'rgba(0,0,0,0.2)', border:'1px solid rgba(238,239,226,0.1)', borderRadius:'8px', padding:'28px 24px'}}>
                    <div style={{fontFamily:'var(--font-display)', fontSize:'2.5rem', fontWeight:900, color:'var(--rust)', lineHeight:1}}>{s.n}</div>
                    <div style={{fontSize:'0.78rem', color:'rgba(238,239,226,0.45)', textTransform:'uppercase', letterSpacing:'0.08em', marginTop:'6px'}}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE HANDLE */}
        <section style={{padding:'80px 0', background:'var(--off-white)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">What We Handle</p>
            <h2 className="section-title" style={{marginBottom:'40px'}}>Every Type of Restaurant Kitchen</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'12px'}}>
              {[
                'Full-service restaurants','Fast casual','Quick service','Fine dining','Cafes and bakeries','Ghost kitchens','Food halls','Pizza ovens','Wok stations','Charbroilers','Brunch spots','Taco shops'
              ].map(item => (
                <div key={item} style={{display:'flex', alignItems:'center', gap:'12px', padding:'14px 18px', background:'var(--white)', border:'1px solid var(--gray-light)', borderRadius:'6px', fontSize:'0.9rem', fontWeight:600, color:'var(--charcoal)'}}>
                  <span style={{width:'8px', height:'8px', borderRadius:'50%', background:'var(--rust)', flexShrink:0}} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section style={{padding:'80px 0', background:'var(--black)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">What Sets Us Apart</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Built for Restaurant Operations</h2>
            {[
              { t:'We schedule around your hours', d:'Nights, weekends, early morning before prep. We work when your kitchen is closed so your service never stops.' },
              { t:'Same-day emergency service', d:'Red tag from the fire marshal? Health inspection coming up? Call us at (858) 361-2570 and we dispatch immediately.' },
              { t:'Photo documentation on every job', d:'Before and after photos of every section of your system. Accepted by San Diego County health inspectors and your insurance carrier.' },
              { t:'Written compliance certificate', d:'An NFPA 96 compliance sticker goes on your hood and a signed certificate is issued after every service. File it, frame it, show it to anyone.' },
              { t:'No pressure, no upsells', d:'We assess your system, tell you what it needs, and do exactly that. Nothing more, nothing less.' },
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

        {/* CTA */}
        <section style={{padding:'80px 0', background:'var(--rust)', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, background:'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.05) 40px, rgba(0,0,0,0.05) 80px)'}} />
          <div className="container" style={{position:'relative', textAlign:'center', maxWidth:'640px'}}>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1, marginBottom:'20px'}}>Ready to Get Compliant?</h2>
            <p style={{color:'rgba(238,239,226,0.82)', fontSize:'1.05rem', marginBottom:'40px'}}>Same-day response. No obligation. NFPA 96 certified service throughout San Diego County.</p>
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
