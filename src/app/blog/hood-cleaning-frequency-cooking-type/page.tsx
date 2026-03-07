import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Blog | Core Hood Cleaning San Diego",
  alternates: { canonical: "https://www.corehoodcleaning.com/blog/hood-cleaning-frequency-cooking-type" }
}
export default function Post() {
  return (
    <>
      <nav><div className="nav-inner"><Link href="/" className="nav-logo"><Image src="/images/core-logo.png" alt="Core Services" width={110} height={38} className="nav-logo-img" /><div className="nav-logo-text">Core Hood Cleaning<span className="nav-logo-sub">San Diego, CA · NFPA 96 Certified</span></div></Link><ul className="nav-links"><li><Link href="/blog">Blog</Link></li></ul><div className="nav-cta"><a href="tel:8583612570" className="nav-phone">(858) 361-2570</a><a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary nav-btn">Book Now</a></div></div></nav>
      <div style={{paddingTop:'100px', minHeight:'60vh', background:'var(--white)', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{textAlign:'center', padding:'64px 24px'}}>
          <p className="section-label">Coming Soon</p>
          <h1 className="section-title" style={{marginBottom:'24px'}}>Article Coming Soon</h1>
          <p style={{color:'var(--gray-text)', marginBottom:'32px'}}>This article is being published shortly. In the meantime, browse our other resources or contact us directly.</p>
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap'}}>
            <Link href="/blog" className="btn-primary">Back to Blog</Link>
            <a href="tel:8583612570" className="btn-outline-dark">(858) 361-2570</a>
          </div>
        </div>
      </div>
      <footer><div className="container"><div className="footer-bottom" style={{paddingTop:'24px', justifyContent:'center', flexDirection:'column', gap:'8px', textAlign:'center'}}><Link href="/blog" style={{color:'rgba(238,239,226,0.4)', fontSize:'0.85rem'}}>Back to Blog</Link><p>&copy; 2025 Core Hood Cleaning.</p></div></div></footer>
    </>
  )
}
