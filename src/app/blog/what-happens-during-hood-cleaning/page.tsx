import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: "What Actually Happens During a Commercial Hood Cleaning? | Core Hood Cleaning",
  description: 'A step-by-step breakdown of what a professional hood cleaning service includes   from protective sheeting to the rooftop fan and final compliance certificate.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/what-happens-during-hood-cleaning' }
}
export default function Post() {
  return (
    <>
      <Nav />
<article style={{paddingTop:'100px'}}>
        <div style={{background:'var(--true-blue)', padding:'60px 0 48px'}}><div className="container" style={{maxWidth:'760px'}}><Link href="/blog" style={{color:'rgba(238,239,226,0.5)', fontSize:'0.85rem', display:'inline-block', marginBottom:'24px'}}>← Blog</Link><span style={{fontFamily:'var(--font-display)', fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--rust)', background:'rgba(137,29,27,0.2)', padding:'4px 10px', borderRadius:'4px', marginBottom:'16px', display:'inline-block'}}>Education</span><h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:'1.1', marginBottom:'20px', marginTop:'12px'}}>What Actually Happens During a Commercial Hood Cleaning?</h1><p style={{color:'rgba(238,239,226,0.6)', fontSize:'1rem', lineHeight:'1.7'}}>Most restaurant owners schedule hood cleaning because they have to   not because they know what the service actually covers. Here&apos;s exactly what a professional NFPA 96 compliant cleaning involves from start to finish.</p></div></div>
        <div style={{background:'var(--white)', padding:'64px 0'}}><div className="container" style={{maxWidth:'760px'}}>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'16px'}}>Before the Cleaning Begins</h2>
          <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>A professional hood cleaning crew arrives after your kitchen closes   typically late at night or early morning. The first step is always protection. Every cooking surface, equipment piece, and exposed area near the hood is covered with heavy-duty poly plastic sheeting. This prevents degreaser and wash water from contaminating your equipment or food prep surfaces.</p>
          <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'32px'}}>A before photo is taken of every area that will be cleaned. This documentation is part of your compliance package and gives you a clear baseline to compare against once the job is complete.</p>
          <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'16px'}}>The Cleaning Sequence</h2>
          <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>A full NFPA 96 hood cleaning covers the entire exhaust path   from the cooking surface up through the hood, through the ductwork, and all the way to the exhaust fan on the roof. Here&apos;s how it progresses:</p>
          {[
            {t:'Filters Removed', d:'Grease filters are pulled from the hood and set aside for pressure washing separately. This gives direct access to the plenum chamber behind them.'},
            {t:'Degreaser Application', d:'Commercial-grade alkaline degreaser is applied to all interior hood surfaces, the plenum, and the accessible ductwork. The degreaser is given time to penetrate and break down accumulated grease before washing begins.'},
            {t:'Pressure Washing', d:'High-pressure hot water is used to blast all surfaces clean. A trained technician works methodically through the hood canopy, plenum, and duct interior, pushing grease toward collection points.'},
            {t:'Duct Cleaning', d:'The ductwork is cleaned from both ends when accessible   from inside the hood and from the rooftop. For long duct runs, technicians use flexible extensions to reach the full interior.'},
            {t:'Rooftop Fan Service', d:'On the rooftop, the exhaust fan is hinged open (or the housing is removed if applicable), and the fan blades, housing interior, and surrounding curb are cleaned. This is one of the most critical steps   a grease-packed fan is both a fire hazard and an efficiency problem.'},
            {t:'Grease Collection', d:'All wash water and displaced grease is collected and properly disposed of. A responsible company never leaves grease water to drain into the surrounding rooftop or building structure.'},
          ].map((s,i) => (
            <div key={s.t} style={{display:'flex', gap:'20px', padding:'20px 0', borderBottom:'1px solid var(--gray-light)'}}>
              <div style={{fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:900, color:'var(--rust)', flexShrink:0, width:'32px'}}>{String(i+1).padStart(2,'0')}</div>
              <div><h3 style={{fontFamily:'var(--font-display)', fontWeight:800, textTransform:'uppercase', fontSize:'1rem', color:'var(--black)', marginBottom:'6px'}}>{s.t}</h3><p style={{fontSize:'0.9rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{s.d}</p></div>
            </div>
          ))}
          <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', margin:'32px 0 16px'}}>After the Cleaning</h2>
          <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>Once the cleaning is complete, all protective plastic is removed and the kitchen is restored to its pre-service condition. After photos are taken of every area that was cleaned, and a final walk-through is conducted.</p>
          <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'32px'}}>You receive a service report documenting all areas cleaned, the technician&apos;s certification, and a compliance certificate with an NFPA 96 sticker applied to the hood. This package is what you present to your fire marshal, health inspector, or insurance carrier when asked for proof of compliance.</p>
          <div style={{borderTop:'1px solid var(--gray-light)', paddingTop:'40px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule a Cleaning</a>
          </div>
        </div></div>
      </article>
      <Footer />
    </>
  )
}
