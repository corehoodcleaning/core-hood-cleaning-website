import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: "Blog | Core Hood Cleaning San Diego",
  alternates: { canonical: "https://www.corehoodcleaning.com/blog/choosing-hood-cleaning-company-san-diego" }
}
export default function Post() {
  return (
    <>
      <Nav />
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
      <Footer />
    </>
  )
}
