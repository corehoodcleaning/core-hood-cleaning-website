import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BookingComplete from '@/components/BookingComplete'

export const metadata: Metadata = {
  title: { absolute: 'Thank You | Core Hood Cleaning' },
  description: 'Thank you for booking with Core Hood Cleaning.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <BookingComplete />
      <Nav />
      <section style={{paddingTop:'150px', paddingBottom:'80px', background:'var(--black)'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          <p className="section-label">Booking Received</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2rem,5vw,3.5rem)', marginBottom:'24px'}}>Thank You for Booking</h1>
          <p style={{color:'rgba(238,239,226,0.7)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'16px'}}>
            Your appointment request is in. We will contact you shortly to confirm the details.
          </p>
          <p style={{color:'rgba(238,239,226,0.7)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'36px'}}>
            Need to reach us sooner or have a question before your visit? Call us any time.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="tel:8583612570" className="btn-primary">Call (858) 361-2570</a>
            <Link href="/" className="btn-secondary">Back to Home</Link>
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--white)'}}>
        <div className="container" style={{maxWidth:'900px'}}>
          <div style={{textAlign:'center', marginBottom:'48px'}}>
            <p className="section-label">What to Expect</p>
            <h2 className="section-title">What Happens Next</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'20px'}}>
            {[
              { title: 'We Confirm', desc: 'Our team reaches out to confirm your appointment and answer any questions.' },
              { title: 'We Inspect', desc: 'We take a look at your exhaust system and talk through what your kitchen needs to stay NFPA 96 compliant.' },
              { title: 'You Stay Compliant', desc: 'Full-system cleaning with before and after photos and a compliance certificate on every service.' },
            ].map(s => (
              <div key={s.title} style={{background:'var(--off-white)', border:'1px solid var(--gray-light)', borderTop:'4px solid var(--rust)', borderRadius:'8px', padding:'28px'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'10px'}}>{s.title}</h3>
                <p style={{fontSize:'0.9rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'48px', display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="/services/hood-cleaning" className="btn-secondary" style={{color:'var(--black)', borderColor:'var(--gray-light)'}}>Our Hood Cleaning Service</Link>
            <Link href="/blog" className="btn-secondary" style={{color:'var(--black)', borderColor:'var(--gray-light)'}}>Hood Cleaning Guides</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
