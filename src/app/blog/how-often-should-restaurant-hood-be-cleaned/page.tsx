import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How Often Should a Restaurant Hood Be Cleaned? NFPA 96 Guide | Core Hood Cleaning',
  description: 'NFPA 96 sets hood cleaning frequency by cooking type: monthly for high-volume, quarterly for moderate, semi-annually for low-volume. Full guide for San Diego restaurants.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/how-often-should-restaurant-hood-be-cleaned' }
}

export default function BlogPost1() {
  return (
    <>
      <Nav />
<article style={{paddingTop:'100px'}}>
        <div style={{background:'var(--true-blue)', padding:'60px 0 48px'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <Link href="/blog" style={{color:'rgba(238,239,226,0.5)', fontSize:'0.85rem', display:'inline-block', marginBottom:'24px'}}>← Blog</Link>
            <div style={{display:'flex', gap:'12px', marginBottom:'16px'}}>
              <span style={{fontFamily:'var(--font-display)', fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--rust)', background:'rgba(137,29,27,0.2)', padding:'4px 10px', borderRadius:'4px'}}>Compliance</span>
              <span style={{fontSize:'0.78rem', color:'rgba(238,239,226,0.5)'}}>February 2025</span>
            </div>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:'1.1', marginBottom:'20px'}}>How Often Should a Restaurant Hood Be Cleaned? (NFPA 96 Guide)</h1>
            <p style={{color:'rgba(238,239,226,0.6)', fontSize:'1rem', lineHeight:'1.7'}}>The short answer: it depends on how and what you cook. NFPA 96 sets the minimum required frequency   and ignoring it puts your license, insurance, and safety at risk.</p>
          </div>
        </div>

        <div style={{background:'var(--white)', padding:'64px 0'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'16px', marginBottom:'48px'}}>
              {[{freq:'Monthly',type:'High-Volume / Solid Fuel',color:'var(--rust)'},{freq:'Quarterly',type:'Moderate Cooking Volume',color:'var(--true-blue)'},{freq:'Semi-Annually',type:'Low-Volume / Seasonal',color:'#555'}].map(r => (
                <div key={r.freq} style={{background:'var(--off-white)', border:`2px solid ${r.color}`, borderRadius:'8px', padding:'20px', textAlign:'center'}}>
                  <div style={{fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:900, textTransform:'uppercase', color:r.color, marginBottom:'8px'}}>{r.freq}</div>
                  <div style={{fontSize:'0.82rem', color:'var(--gray-text)', fontWeight:600}}>{r.type}</div>
                </div>
              ))}
            </div>

            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'16px'}}>What NFPA 96 Actually Says</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>NFPA 96   the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations   is the national standard adopted by fire marshals and health departments across California, including San Diego County.</p>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'32px'}}>The code specifies minimum cleaning frequencies based on the type and volume of cooking being performed. These aren&apos;t suggestions   they&apos;re requirements that affect your fire suppression system validity and insurance coverage.</p>

            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'16px'}}>Monthly Cleaning Required</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>Your kitchen requires monthly hood cleaning if you use any of the following:</p>
            <ul style={{listStyle:'none', marginBottom:'32px'}}>
              {['Solid fuel cooking (wood-burning ovens, charcoal grills)','High-volume cooking operations (high-production burger joints, large diners)','24-hour operations','Wok cooking or other high-grease output equipment'].map(i => (
                <li key={i} style={{padding:'8px 0', borderBottom:'1px solid var(--gray-light)', display:'flex', gap:'10px', fontSize:'0.9rem', color:'var(--charcoal)'}}><span style={{color:'var(--rust)', fontWeight:700}}>✓</span>{i}</li>
              ))}
            </ul>

            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'16px'}}>Quarterly Cleaning Required</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'32px'}}>Most San Diego restaurants fall into this category. Moderate cooking operations   full-service restaurants, fast casual operations, school cafeterias during the academic year   require cleaning every three months.</p>

            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'16px'}}>Semi-Annual or Annual Cleaning</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'32px'}}>Low-volume cooking operations   like churches, senior centers, or facilities that only cook a few hours per day   may qualify for semi-annual (every 6 months) or even annual cleaning. A certified inspection will determine the right frequency.</p>

            <div style={{background:'var(--off-white)', border:'1px solid var(--gray-light)', borderLeft:'4px solid var(--rust)', borderRadius:'8px', padding:'28px', marginBottom:'40px'}}>
              <p style={{fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:800, textTransform:'uppercase', color:'var(--black)', marginBottom:'8px'}}>Don&apos;t Guess   Get a Professional Assessment</p>
              <p style={{fontSize:'0.9rem', color:'var(--gray-text)', lineHeight:'1.7'}}>Cleaning frequency should be determined by a certified technician who can assess your cooking volume, equipment type, and grease output. Over-cleaning wastes money; under-cleaning creates liability.</p>
            </div>

            <div style={{borderTop:'1px solid var(--gray-light)', paddingTop:'40px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
              <a href="tel:8583612570" style={{display:'inline-flex', alignItems:'center', gap:'8px', fontFamily:'var(--font-display)', fontWeight:800, color:'var(--rust)', textTransform:'uppercase', fontSize:'1rem'}}>📞 (858) 361-2570</a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
