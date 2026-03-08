import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "What Is NFPA 96? A Restaurant Owner's Plain-English Guide | Core Hood Cleaning",
  description: 'NFPA 96 is the fire code standard every commercial kitchen in San Diego must follow. Plain-English guide covering what it requires and why it matters.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/what-is-nfpa-96' }
}

export default function WhatIsNFPA96() {
  return (
    <>
      <Nav />
<article style={{paddingTop:'100px'}}>
        <div style={{background:'var(--true-blue)', padding:'60px 0 48px'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <Link href="/blog" style={{color:'rgba(238,239,226,0.5)', fontSize:'0.85rem', display:'inline-block', marginBottom:'24px'}}>← Blog</Link>
            <span style={{fontFamily:'var(--font-display)', fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--rust)', background:'rgba(137,29,27,0.2)', padding:'4px 10px', borderRadius:'4px', marginBottom:'16px', display:'inline-block'}}>Compliance</span>
            <h1 style={{fontFamily:'var(--font-display)', fontSize:'clamp(1.8rem,4vw,2.8rem)', fontWeight:900, textTransform:'uppercase', color:'var(--off-white)', lineHeight:'1.1', marginBottom:'20px'}}>What Is NFPA 96? A Restaurant Owner&apos;s Plain-English Guide</h1>
          </div>
        </div>
        <div style={{background:'var(--white)', padding:'64px 0'}}>
          <div className="container" style={{maxWidth:'760px'}}>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>NFPA 96   the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations   is the primary fire code governing commercial kitchen exhaust systems in the United States. In San Diego, fire marshals and health departments both reference NFPA 96 when inspecting your kitchen.</p>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>The standard covers the design, installation, operation, inspection, and maintenance of commercial cooking exhaust systems. For restaurant owners, the most relevant part is the requirement for regular, documented hood cleaning by certified technicians.</p>
            <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', margin:'32px 0 16px'}}>Why It Matters for Your Restaurant</h2>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>Grease accumulation in commercial kitchen exhaust systems is the leading cause of restaurant fires. NFPA 96 exists to create a minimum maintenance standard that keeps your system safe and reduces fire risk.</p>
            <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'24px'}}>Beyond safety, compliance with NFPA 96 is required for your fire suppression system warranty, your commercial insurance policy, and your health and fire permits. A fire marshal can shut down a non-compliant kitchen.</p>
            <div style={{borderTop:'1px solid var(--gray-light)', paddingTop:'40px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Certified Cleaning</a>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
