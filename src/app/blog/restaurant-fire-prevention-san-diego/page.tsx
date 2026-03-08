import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Restaurant Fire Prevention San Diego | Grease Fire Safety | Core Hood Cleaning',
  description: 'Grease fires are the #1 cause of restaurant fires in California. How to protect your San Diego restaurant with proper exhaust maintenance and fire prevention.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/restaurant-fire-prevention-san-diego' }
}

export default function FirePreventionPost() {
  return (
    <>
      <Nav />
<article style={{paddingTop:'100px'}}>
        <div style={{background:'var(--true-blue)', padding:'60px 0 48px'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <Link href="/blog" style={{color:'rgba(238,239,226,0.5)', fontSize:'0.85rem', display:'inline-block', marginBottom:'24px'}}>← Blog</Link>
            <span style={{fontFamily:'var(--font-display)', fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--rust)', background:'rgba(137,29,27,0.2)', padding:'4px 10px', borderRadius:'4px', marginBottom:'16px', display:'inline-block'}}>Fire Safety</span>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:'1.1', marginBottom:'20px'}}>Restaurant Fire Prevention in San Diego: What Every Owner Needs to Know</h1>
          </div>
        </div>
        <div style={{background:'var(--white)', padding:'64px 0'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>Grease fires are the leading cause of restaurant fires in California. The California Department of Forestry and Fire Protection reports that cooking equipment is responsible for the majority of commercial structure fires   and most of them are preventable.</p>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>The primary culprit: grease buildup in the kitchen exhaust system. When grease accumulates in the hood, ductwork, and exhaust fan, it creates a direct path for fire to spread from the cooking surface to the roof.</p>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', margin:'32px 0 16px'}}>How Grease Fires Start in Commercial Kitchens</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>Grease is flammable. As it accumulates in your exhaust system, it only takes a small flame or excessive heat from the cooking surface to ignite it. Once ignited, grease fires in ductwork are extremely difficult to extinguish   they can travel the full length of the duct and ignite the roofing structure.</p>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', margin:'32px 0 16px'}}>Prevention Starts with Regular Hood Cleaning</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>The single most effective fire prevention measure for a commercial kitchen is keeping the exhaust system clean. Per NFPA 96, this means regular pressure washing of the entire system   from hood to rooftop fan   on a schedule based on your cooking volume.</p>
            <div style={{borderTop:'1px solid var(--gray-light)', paddingTop:'40px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule Cleaning</a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
