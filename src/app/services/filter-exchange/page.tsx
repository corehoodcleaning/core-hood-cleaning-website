import type { Metadata } from 'next'
import seoConfig from '@/seo-config.json'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = seoConfig["filter-exchange"]

const faqs = [
  {
    q: 'How is a filter exchange program different from cleaning filters in-house?',
    a: 'With in-house cleaning, your kitchen staff soaks and scrubs filters on their own schedule — which often means it gets pushed back or skipped during busy periods. A filter exchange program removes that entirely. We bring professionally cleaned replacement filters on a fixed schedule, swap them out in minutes, and take the dirty ones with us. Your staff never has to think about it.',
  },
  {
    q: 'How often should commercial grease filters be exchanged?',
    a: 'NFPA 96 requires grease filters to be cleaned or replaced as needed to maintain proper exhaust performance. For high-volume kitchens — charbroilers, fryers running most of the shift — that typically means weekly or bi-weekly exchanges. Lower-volume operations may be fine on a monthly cycle. We assess your cooking equipment and volume to set the right cadence for your kitchen.',
  },
  {
    q: 'What types of grease filters does the exchange program cover?',
    a: 'We stock standard baffle filters in the most common commercial sizes. When we assess your kitchen before starting the program, we confirm the correct filter dimensions and quantity for your hood. If your hood uses a non-standard size, we source filters to match before your first exchange.',
  },
  {
    q: 'Does the filter exchange program count toward NFPA 96 compliance?',
    a: 'Yes. Clean, properly fitting grease filters are a required component of NFPA 96 compliance. We document every exchange visit, so you have a written record of filter service dates if a fire marshal, health inspector, or insurance adjuster ever asks for it.',
  },
  {
    q: 'Can I bundle the filter exchange program with hood cleaning service?',
    a: 'Yes, and most of our customers do. Bundling the exchange program with our semi-annual or quarterly hood cleaning keeps your entire exhaust system covered under one provider. It also reduces grease buildup in your ductwork between deep cleans, which can extend time between full service visits for lower-volume kitchens.',
  },
  {
    q: 'Do you service filter exchange customers throughout San Diego County?',
    a: 'Yes. We run filter exchange routes across San Diego County, including downtown, Mission Valley, Pacific Beach, La Jolla, Chula Vista, Oceanside, Carlsbad, El Cajon, Escondido, and surrounding areas. If your kitchen is in San Diego County, we can put you on a route.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

export default function FilterExchangePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <section style={{paddingTop:'0', minHeight:'55vh', background:'var(--black)', position:'relative', overflow:'hidden', display:'flex', alignItems:'center'}}>
        <div style={{position:'absolute', inset:0, backgroundImage:'url(/images/filter-exchange.webp)', backgroundSize:'cover', backgroundPosition:'center', opacity:0.35, filter:'blur(3px)', transform:'scale(1.05)'}} />
        <div style={{position:'absolute', inset:0, background:'linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 100%)'}} />
        <div className="container" style={{position:'relative', zIndex:2, paddingTop:'140px', paddingBottom:'80px', maxWidth:'800px'}}>
          <p className="section-label">Our Services</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2.5rem,5vw,4.5rem)', marginBottom:'24px'}}>Grease Filter<br/>Exchange Program</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.1rem', lineHeight:'1.8', marginBottom:'40px', maxWidth:'600px'}}>
            Always-clean filters on a scheduled basis. We pull dirty filters, install clean ones, and handle all the washing ourselves so your kitchen never has to deal with it.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Quote</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      <div className="trust-bar"><div className="trust-bar-inner">{['NFPA 96 Compliant Filters', 'Weekly & Bi-Weekly Programs', 'No Filter Washing For Your Staff', 'Multiple Filter Types Stocked', 'San Diego County'].map(t => <div key={t} className="trust-pill"><span className="dot" />{t}</div>)}</div></div>

      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'72px', alignItems:'start'}}>
            <div>
              <p className="section-label">Why It Matters</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Clean Filters Are<br/>Not Optional</h2>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Grease filters are the first line of defense in your exhaust system. When they become
                saturated, they stop capturing grease-laden air effectively which means more grease
                travels into your ductwork, increasing fire risk and reducing your exhaust system&apos;s
                performance.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                NFPA 96 requires that grease filters be cleaned or replaced as needed to maintain
                proper exhaust flow. For high-volume kitchens, that can mean weekly or even more
                frequent changes.
              </p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>
                Most restaurants rely on kitchen staff to clean filters in-house — a task that frequently
                gets delayed, done inconsistently, or skipped entirely during busy periods. Our
                exchange program removes that responsibility entirely.
              </p>
            </div>
            <div>
              <p className="section-label">How It Works</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Simple Swap,<br/>Every Visit</h2>
              {[
                {n:'01', t:'We Assess Your Kitchen', d:'We evaluate your cooking equipment, volume, and filter types to determine the right exchange frequency and filter specifications for your operation.'},
                {n:'02', t:'We Stock Clean Filters', d:'A full set of clean, compliant filters sized for your hood is kept ready. On each visit, we bring clean replacements — no waiting, no delays.'},
                {n:'03', t:'We Swap on Schedule', d:'On your chosen schedule — weekly or bi-weekly — we pull the dirty filters and install the clean set. The swap takes minutes, not hours.'},
                {n:'04', t:'We Handle the Cleaning', d:'Dirty filters come with us to be professionally cleaned at our facility. You never have to manage filter cleaning, disposal, or replacement sourcing.'},
              ].map(s => (
                <div key={s.n} style={{display:'flex', gap:'16px', padding:'16px 0', borderBottom:'1px solid var(--gray-light)'}}>
                  <div style={{fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:900, color:'var(--rust)', flexShrink:0, width:'32px'}}>{s.n}</div>
                  <div>
                    <h3 style={{fontFamily:'var(--font-display)', fontWeight:800, textTransform:'uppercase', fontSize:'0.95rem', color:'var(--black)', marginBottom:'6px'}}>{s.t}</h3>
                    <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.6'}}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{padding:'88px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">Program Benefits</p>
            <h2 className="section-title">What You Get With<br/>the Exchange Program</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px'}}>
            {[
              {title:'Consistent Compliance', desc:'Clean filters on a fixed schedule means you\'re never caught with saturated filters during a health inspection or fire marshal visit.'},
              {title:'Reduced Duct Buildup', desc:'Clean filters capture more grease before it enters the duct system — reducing buildup between hood cleanings and extending time between deep cleans.'},
              {title:'Staff Time Saved', desc:'Your kitchen team never has to soak, scrub, or deal with filters again. It\'s handled, every time, by trained professionals.'},
              {title:'Consistent Filter Quality', desc:'We use commercial-grade filters that meet or exceed NFPA 96 requirements. No mismatched replacements, no filters that don\'t fit properly.'},
              {title:'Documentation', desc:'Every exchange visit is logged. You have a record of filter service dates if ever needed for a compliance review or insurance claim.'},
              {title:'Flexible Scheduling', desc:'We schedule exchanges around your kitchen\'s hours — early morning or late night, on days that work for your operation.'},
            ].map(b => (
              <div key={b.title} style={{background:'var(--white)', border:'1px solid var(--gray-light)', borderRadius:'8px', padding:'28px'}}>
                <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'var(--rust)', marginBottom:'16px'}} />
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'10px'}}>{b.title}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container" style={{maxWidth:'800px'}}>
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">Who It&apos;s For</p>
            <h2 className="section-title">Built for High-Volume<br/>Commercial Kitchens</h2>
          </div>
          <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'32px', textAlign:'center', maxWidth:'620px', margin:'0 auto 40px'}}>
            The filter exchange program is designed for operations where consistent filter maintenance is too critical to leave to chance — or to a kitchen staff already stretched thin.
          </p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px'}}>
            {[
              {type:'Full-Service Restaurants', desc:'High heat, continuous cooking, multiple hood sections. Weekly or bi-weekly exchanges keep grease from hitting your ductwork.'},
              {type:'Bars & Breweries', desc:'Late-night cooking with limited cleanup windows. Exchanges happen on your schedule — even after close.'},
              {type:'Hotels & Catering Operations', desc:'Multiple kitchen spaces, banquet production, irregular volume. One provider handles filters across every hood.'},
              {type:'Institutional Kitchens', desc:'Schools, hospitals, and cafeterias with predictable volume and strict compliance requirements. Documentation included on every visit.'},
              {type:'Ghost Kitchens & Commissaries', desc:'High utilization with minimal staff for maintenance. Exchange programs fit the model — no staff time required.'},
              {type:'Food Trucks & Fast-Casual', desc:'Smaller systems with frequent use. We right-size the exchange frequency to match actual cooking volume.'},
            ].map(k => (
              <div key={k.type} style={{padding:'24px', border:'1px solid var(--gray-light)', borderRadius:'8px', borderLeft:'4px solid var(--rust)'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'0.95rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'8px'}}>{k.type}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.7', margin:0}}>{k.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding:'88px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Start Your Filter Exchange</h2>
          <p>Flat monthly program &middot; No hassle &middot; San Diego County</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Get a Quote</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      <section style={{padding:'88px 0', background:'var(--white)'}}>
        <div className="container" style={{maxWidth:'800px'}}>
          <div style={{textAlign:'center', marginBottom:'56px'}}>
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">Filter Exchange FAQ</h2>
          </div>
          <div>
            {faqs.map(faq => (
              <div key={faq.q} style={{borderBottom:'1px solid var(--gray-light)', padding:'24px 0'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'12px', lineHeight:'1.4'}}>{faq.q}</h3>
                <p style={{fontSize:'0.92rem', color:'var(--gray-text)', lineHeight:'1.8', margin:0}}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{borderTop:'1px solid var(--gray-light)', paddingTop:'32px', marginTop:'40px'}}>
            <p style={{fontFamily:'var(--font-display)', fontSize:'0.8rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--gray-text)', marginBottom:'16px'}}>Related Services</p>
            <div style={{display:'flex', flexDirection:'column', gap:'8px'}}>
              <Link href="/services/hood-cleaning" style={{fontSize:'0.9rem', color:'var(--rust)', textDecoration:'none'}}>→ Full-System Hood Cleaning</Link>
              <Link href="/services/nfpa-inspection" style={{fontSize:'0.9rem', color:'var(--rust)', textDecoration:'none'}}>→ NFPA 96 Compliance Inspections</Link>
              <Link href="/blog/how-often-should-restaurant-hood-be-cleaned" style={{fontSize:'0.9rem', color:'var(--rust)', textDecoration:'none'}}>→ How Often Should a Restaurant Hood Be Cleaned?</Link>
              <Link href="/blog/filter-exchange-vs-hood-cleaning-san-diego" style={{fontSize:'0.9rem', color:'var(--rust)', textDecoration:'none'}}>→ Filter Exchange vs. Hood Cleaning: What&apos;s the Difference?</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
