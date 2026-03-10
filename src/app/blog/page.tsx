import type { Metadata } from 'next'
import seoConfig from '../seo-config.json'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = seoConfig.blog

const POSTS = [
  { slug: 'how-often-should-restaurant-hood-be-cleaned', title: 'How Often Should a Restaurant Hood Be Cleaned? (NFPA 96 Guide)', date: 'February 2025', excerpt: 'NFPA 96 sets the cleaning frequency based on your cooking type and volume. Here\'s exactly what the code requires and what it means for your San Diego restaurant.', img: '/images/before-after-1.jpg', category: 'Compliance' },
  { slug: 'what-is-nfpa-96', title: 'What Is NFPA 96? A Restaurant Owner\'s Plain-English Guide', date: 'January 2025', excerpt: 'NFPA 96 is the fire code standard every commercial kitchen must follow. This guide breaks down what it covers, why it matters, and what happens if you\'re not compliant.', img: '/images/tech-rooftop-palms.jpg', category: 'Compliance' },
  { slug: 'restaurant-fire-prevention-san-diego', title: 'Restaurant Fire Prevention in San Diego: What Every Owner Needs to Know', date: 'January 2025', excerpt: 'Grease fires are the #1 cause of restaurant fires in California. Here\'s how to protect your San Diego restaurant with proper exhaust maintenance and fire prevention.', img: '/images/before-after-2.jpg', category: 'Fire Safety' },
  { slug: 'what-happens-during-hood-cleaning', title: 'What Actually Happens During a Commercial Hood Cleaning?', date: 'March 2025', excerpt: 'A step-by-step look at what a professional hood cleaning service includes from protective plastic sheeting to the rooftop fan and the final compliance certificate.', img: '/images/tech-kitchen-cleaning.jpg', category: 'Education' },
  { slug: 'health-inspection-checklist-san-diego', title: 'San Diego Restaurant Health Inspection Checklist: Kitchen Exhaust Edition', date: 'March 2025', excerpt: 'What San Diego health inspectors look for in your kitchen exhaust system and how to make sure you\'re ready every time they walk through the door.', img: '/images/tech-hood-interior.jpg', category: 'Compliance' },
  { slug: 'grease-trap-vs-hood-cleaning', title: "Grease Trap Cleaning vs. Hood Cleaning: What's the Difference?", date: 'February 2025', excerpt: "Two essential services that restaurant owners often confuse. Here's what each one does, why both matter, and how they work together to keep your kitchen compliant.", img: '/images/tech-pressure-wash.jpg', category: 'Education' },
  { slug: 'commercial-kitchen-fire-suppression', title: 'How Your Hood Cleaning Affects Your Fire Suppression System', date: 'April 2025', excerpt: 'A dirty exhaust system can void your Ansul fire suppression system warranty and create serious liability. Here\'s the connection every restaurant owner should understand.', img: '/images/before-after-4.png', category: 'Fire Safety' },
  { slug: 'choosing-hood-cleaning-company-san-diego', title: 'How to Choose a Hood Cleaning Company in San Diego', date: 'April 2025', excerpt: 'Not all hood cleaning companies are equal. Here are the key questions to ask and red flags to avoid when hiring a commercial kitchen exhaust service in San Diego.', img: '/images/team-rooftop.jpg', category: 'Tips' },
  { slug: 'restaurant-compliance-san-diego-guide', title: 'The Complete Guide to Restaurant Compliance in San Diego County', date: 'May 2025', excerpt: 'A comprehensive overview of the permits, inspections, and maintenance requirements that San Diego County restaurants must meet to stay operational.', img: '/images/tech-core-jacket-rooftop.jpg', category: 'Compliance' },
  { slug: 'hood-cleaning-frequency-cooking-type', title: 'Hood Cleaning Frequency by Cooking Type: A Breakdown for San Diego Kitchens', date: 'May 2025', excerpt: 'Whether you\'re running a burger joint, a pizza oven, a wok station, or a low-volume café, here\'s how NFPA 96 cleaning frequency applies to your specific kitchen.', img: '/images/before-after-5.png', category: 'Compliance' },
]

export default function BlogPage() {
  return (
    <>
      <Nav />
<section style={{paddingTop:'120px', paddingBottom:'64px', background:'var(--true-blue)'}}>
        <div className="container" style={{maxWidth:'800px'}}>
          <p className="section-label">Resources</p>
          <h1 className="section-title light" style={{marginBottom:'16px'}}>Hood Cleaning Blog</h1>
          <p style={{color:'rgba(238,239,226,0.6)', fontSize:'1rem', lineHeight:'1.7'}}>Expert guidance on commercial kitchen compliance, grease fire prevention, and NFPA 96 standards for San Diego restaurants.</p>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:'28px'}}>
            {POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{display:'block', background:'var(--white)', borderRadius:'8px', overflow:'hidden', border:'1px solid var(--gray-light)', transition:'all 0.25s', color:'inherit'}}>
                <div style={{position:'relative', aspectRatio:'16/9', overflow:'hidden'}}>
                  <Image src={post.img} alt={post.title} fill style={{objectFit:'cover'}} sizes="400px" />
                </div>
                <div style={{padding:'28px'}}>
                  <div style={{display:'flex', gap:'12px', alignItems:'center', marginBottom:'14px'}}>
                    <span style={{fontFamily:'var(--font-display)', fontSize:'0.7rem', fontWeight:800, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--rust)', background:'rgba(137,29,27,0.1)', padding:'4px 10px', borderRadius:'4px'}}>{post.category}</span>
                    <span style={{fontSize:'0.78rem', color:'var(--gray-mid)'}}>{post.date}</span>
                  </div>
                  <h2 style={{fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:900, textTransform:'uppercase', lineHeight:'1.2', color:'var(--black)', marginBottom:'12px'}}>{post.title}</h2>
                  <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{post.excerpt}</p>
                  <div style={{marginTop:'20px', fontFamily:'var(--font-display)', fontSize:'0.85rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.06em', color:'var(--rust)'}}>Read More</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'80px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Need Hood Cleaning?</h2>
          <p>San Diego&apos;s NFPA 96 certified team free quotes, same-day response.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Book a Quote</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
