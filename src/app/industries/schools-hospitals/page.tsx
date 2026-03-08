import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning for Schools & Hospitals in San Diego | Core Hood Cleaning',
  description: 'Certified, documented hood cleaning for institutional kitchens in San Diego. Schools, hospitals, and universities require compliance you can file. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/industries/schools-hospitals' }
}

export default function SchoolsHospitalsPage() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'68px'}}>

        <section style={{background:'var(--black)', padding:'96px 0 80px', position:'relative', overflow:'hidden'}}>
          <div style={{position:'absolute', inset:0, backgroundImage:'url(/images/serve-schools.jpg)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.25}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 100%)'}} />
          <div className="container" style={{position:'relative', zIndex:2}}>
            <p className="section-label" style={{color:'var(--rust)'}}>Who We Serve</p>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1.0, marginBottom:'24px', maxWidth:'700px'}}>
              Hood Cleaning for<br />Schools &amp; Hospitals
            </h1>
            <p style={{fontSize:'1.1rem', color:'rgba(238,239,226,0.7)', maxWidth:'560px', lineHeight:1.75, marginBottom:'40px'}}>
              Certified compliance for institutional kitchens that cannot afford downtime. Documentation that satisfies every inspector and accrediting body.
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
              <a href="tel:8583612570" className="btn-secondary">Call (858) 361-2570</a>
            </div>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--off-white)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">Institutional Standards</p>
            <h2 className="section-title" style={{marginBottom:'32px'}}>Compliance That Stands Up to Any Inspection</h2>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Institutional kitchens operate under some of the strictest compliance requirements in San Diego County. School cafeterias, hospital food service operations, and university dining halls serve vulnerable populations and face regular inspections from multiple agencies. They require documented proof of maintenance at all times, not just when an inspector shows up.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85, marginBottom:'24px'}}>
              Core Hood Cleaning provides the certified, documented service that institutional operators need. Every service includes a written compliance certificate, complete photo documentation, and a detailed service report you can file with facilities management, district administration, or your accrediting body.
            </p>
            <p style={{fontSize:'1.05rem', color:'var(--gray-text)', lineHeight:1.85}}>
              School districts and hospital systems often have corporate or district-level compliance requirements on top of standard NFPA 96 mandates. We understand that layered compliance landscape and deliver paperwork that satisfies all of it.
            </p>
          </div>
        </section>

        <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
          <div className="container" style={{maxWidth:'860px'}}>
            <p className="section-label">What We Handle</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Every Type of Institutional Kitchen</h2>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'12px'}}>
              {[
                'K-12 school cafeterias','University dining facilities','Hospital kitchens','Assisted living food service','Government facility kitchens','Military dining operations','Correctional facility kitchens','Healthcare campus dining'
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
            <p className="section-label">Documentation First</p>
            <h2 className="section-title light" style={{marginBottom:'40px'}}>Everything in Writing, Every Time</h2>
            {[
              { t:'NFPA 96 compliance certificate', d:'A signed compliance certificate issued after every service. Valid for fire marshals, health departments, and institutional accreditation bodies.' },
              { t:'Full photo documentation', d:'Before and after photos of every section of your system. Timestamped and organized for easy filing with facilities management or district administration.' },
              { t:'Detailed service report', d:'A written report covering every area cleaned, any deficiencies found, and recommended next service date. Everything you need to satisfy any inspector or administrator.' },
              { t:'Scheduling that fits operations', d:'We work around meal service schedules, maintenance windows, and district calendars. No disruption to students, patients, or staff.' },
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
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:1, marginBottom:'20px'}}>Get Your Facility Compliant</h2>
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
