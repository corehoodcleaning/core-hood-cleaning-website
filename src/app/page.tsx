import type { Metadata } from 'next'
import seoConfig from '../seo-config.json'
import Image from 'next/image'
import Link from 'next/link'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import GalleryCarousel from '@/components/GalleryCarousel'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export const metadata: Metadata = seoConfig.homepage

const LOCATIONS = [
  'Pacific Beach','La Jolla','Mission Valley','Downtown San Diego',
  'Chula Vista','Oceanside','Carlsbad','Escondido','El Cajon',
  'Vista','San Marcos','National City','La Mesa','Coronado','Encinitas',
  'Del Mar','Miramar','Rancho Bernardo','Poway','Santee'
]

const FAQS = [
  { q: 'How often should commercial hoods be cleaned?', a: 'NFPA 96 requires cleaning frequency based on cooking volume: monthly for high-volume or solid fuel cooking, quarterly for moderate volume, and semi-annually for low-volume use. We assess your kitchen and recommend the right schedule.' },
  { q: 'What is NFPA 96 and why does it matter?', a: 'NFPA 96 is the National Fire Protection Association standard for commercial cooking operations. Compliance is required by health inspectors and fire marshals and is essential for your insurance coverage.' },
  { q: 'Do you provide documentation after cleaning?', a: 'Yes. Every service includes before and after photos, a detailed service report, and a compliance certificate you can present to fire marshals, health inspectors, and your insurance company.' },
  { q: 'How long does a hood cleaning take?', a: 'Most standard hood cleanings take 2 to 4 hours. Larger systems or heavily soiled units may take longer. We work nights and weekends to minimize disruption to your operations.' },
  { q: 'What areas of San Diego do you serve?', a: "We serve all of San Diego County from Oceanside and Carlsbad in the north to Chula Vista and National City in the south, and everything in between including La Jolla, Mission Valley, and downtown." },
  { q: 'Do you offer emergency hood cleaning?', a: "Yes 24/7 emergency service is available. If you're facing a health inspection, fire marshal visit, or grease emergency, call us at (858) 361-2570 and we'll dispatch immediately." },
]

const SERVE = [
  { title: 'Restaurants', desc: 'From Oceanside down to Coronado, all sizes and all cuisines across San Diego County.', img: '/images/serve-restaurants.jpg', slug: 'restaurants' },
  { title: 'Bars & Breweries', desc: 'Craft breweries and bars throughout San Diego that need compliant kitchen exhaust.', img: '/images/serve-bars.jpg', slug: 'bars-breweries' },
  { title: 'Schools & Hospitals', desc: 'Institutional kitchens that require certified, documented compliance services.', img: '/images/serve-schools.jpg', slug: 'schools-hospitals' },
  { title: 'Hotels & Resorts', desc: "San Diego's hospitality industry trusts Core for reliable kitchen maintenance.", img: '/images/serve-hotels.jpg', slug: 'hotels-resorts' },
  { title: 'Commercial Commissaries', desc: 'Large-scale food production facilities across San Diego County.', img: '/images/serve-commissaries.jpg', slug: 'commissaries' },
  { title: 'Stadiums & Sports Venues', desc: 'High-volume concession and catering kitchens at sports and entertainment venues.', img: '/images/serve-stadiums.jpg', slug: 'stadiums-sports-venues' },
]

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO clean commercial kitchen background */}
      <section className="hero">
        <div className="hero-bg-photo">
          <img
            src="/images/hero-commercial-kitchen.jpg"
            alt="Stainless steel commercial kitchen with hood"
          />
        </div>
        <div className="hero-bg-overlay" />
        <div className="hero-content">
          <div>
            <div className="hero-badge">
              <span>40+ Five-Star Reviews &middot; San Diego&apos;s #1 Rated</span>
            </div>
            <h1 className="hero-title">
              San Diego&apos;s<br />
              <span className="accent">Premier</span><br />
              Hood Cleaning
            </h1>
            <p className="hero-subtitle">
              NFPA 96 certified commercial kitchen exhaust cleaning.
              Trusted by 200+ restaurants across San Diego County.
              Same-day and emergency service available.
            </p>
            <div className="hero-actions">
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
              <a href="tel:8583612570" className="btn-secondary">Call Now</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><span className="num">200+</span><span className="label">Restaurants Served</span></div>
              <div className="trust-divider" />
              <div className="trust-item"><span className="num">40+</span><span className="label">5-Star Reviews</span></div>
              <div className="trust-divider" />
              <div className="trust-item"><span className="num">24/7</span><span className="label">Emergency Service</span></div>
            </div>
          </div>
          <div className="hero-card">
            <h3>Get a Free Quote</h3>
            <p>Same-day response &middot; No obligation &middot; NFPA 96 certified</p>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule Online</a>
            <a href="tel:8583612570" className="call-link">(858) 361-2570</a>
            <div className="card-trust">
              <div className="card-trust-item">NFPA 96<br/>Certified</div>
              <div className="card-trust-item">40+ Five<br/>Star Reviews</div>
              <div className="card-trust-item">Fully<br/>Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {['NFPA 96 Certified','Fully Licensed & Insured','Same-Day Emergency Service','200+ San Diego Restaurants Served','Photo Documentation on Every Job'].map(t => (
            <div key={t} className="trust-pill"><span className="dot" />{t}</div>
          ))}
        </div>
      </div>

      {/* REVIEWS CAROUSEL client component */}
      <ReviewsCarousel />

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Commercial Kitchen<br/>Exhaust Services</h2>
          </div>
          <div className="services-grid">
            {[
              { href:'/services/hood-cleaning', img:'/images/tech-kitchen-cleaning.jpg', imgAlt:'Hood cleaning technician at work', title:'Hood Cleaning', desc:'Full system pressure washing from hood to rooftop fan. NFPA 96 compliant with photo documentation and compliance certificate on every service.', items:['Hood canopy, filters & plenum','Ductwork full run to rooftop','Exhaust fan housing & blades','Grease containment & disposal','Before/after photos + certificate'], imgPos:'center 60%' },
              { href:'/services/filter-exchange', img:'/images/filter-exchange.webp', imgAlt:'Clean commercial hood filters', title:'Filter Exchange', desc:'Weekly or bi-weekly clean filter swap programs. Your kitchen always has clean, compliant filters without managing the cleaning yourself.', items:['Clean filters every service visit','Weekly or bi-weekly schedules','Multiple filter types stocked','No downtime swap and go','Flat monthly program'], imgPos:'center center' },
              { href:'/services/nfpa-inspection', img:'/images/NFPA-96-2.jpg', imgAlt:'NFPA 96 certified inspection', title:'NFPA 96 Inspections', desc:'Certified compliance inspections to ensure your kitchen meets fire code. Essential for health departments, insurance, and fire marshal visits.', items:['Full NFPA 96 system inspection','Written compliance report','Deficiency documentation','Inspection sticker & certificate','Re-inspection if needed'], imgPos:'center center' },
            ].map(s => (
              <div key={s.href} className="service-card">
                <div className="service-card-img">
                  <Image src={s.img} alt={s.imgAlt} width={400} height={260} style={{width:'100%',height:'260px',objectFit:'cover',objectPosition:s.imgPos}} />
                </div>
                <div className="service-card-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className="service-list">
                    {s.items.map(i => <li key={i}>{i}</li>)}
                  </ul>
                  <Link href={s.href} className="btn-primary" style={{fontSize:'0.9rem',padding:'12px 24px',display:'inline-flex',marginTop:'8px'}}>Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL client component */}
      <GalleryCarousel />

      {/* WHO WE SERVE */}
      <section className="serve-section" id="who-we-serve">
        <div className="container">
          <div className="serve-header">
            <p className="section-label">Who We Serve</p>
            <h2 className="section-title">Commercial Hood Cleaning<br/>Throughout San Diego County</h2>
          </div>
          <div className="serve-grid">
            {SERVE.map((item) => (
              <Link key={item.title} href={`/industries/${item.slug}`} className="serve-card">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="serve-card-overlay" />
                <div className="serve-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CORE */}
      <section className="why-section" id="why-core">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <p className="section-label">Why Core</p>
              <h2 className="section-title light">San Diego&apos;s Most<br/>Trusted Hood Crew</h2>
              <p style={{marginTop:'24px'}}>
                We grew up in the restaurant industry we know what it means to keep a kitchen running.
                Core Hood Cleaning isn&apos;t a franchise or a call center. It&apos;s a San Diego crew that shows
                up on time, does the job right, and gives you the documentation you need.
              </p>
              <p>
                Every technician is trained to NFPA 96 standards. Every job includes photo documentation
                and a compliance certificate. We do the work right the first time, every time.
              </p>
              <div className="why-stats">
                <div className="why-stat"><div className="big">200+</div><div className="small">Restaurants Served</div></div>
                <div className="why-stat"><div className="big">40+</div><div className="small">5-Star Reviews</div></div>
                <div className="why-stat"><div className="big">24/7</div><div className="small">Emergency Available</div></div>
                <div className="why-stat"><div className="big">100%</div><div className="small">Photo Documented</div></div>
              </div>
            </div>
            <div className="why-right">
              {[
                { title:'Photo Documentation', desc:'Before and after photos on every single job. We hand you proof, not promises.' },
                { title:'NFPA 96 Certified', desc:'Fully certified technicians. Your compliance certificate is valid for insurance, fire marshal, and health inspections.' },
                { title:'Night & Weekend Service', desc:'We work when your kitchen is closed no disruption to service, no lost revenue.' },
                { title:'Transparent Pricing', desc:'We assess your system and give you a clear, straightforward quote no surprises, no hidden fees, no pressure.' },
                { title:'Full Compliance Reports', desc:'Detailed service reports you can file with your insurance and show any inspector.' },
              ].map(d => (
                <div key={d.title} className="diff-item">
                  <div className="diff-dot" />
                  <div>
                    <h4>{d.title}</h4>
                    <p>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM / ABOUT */}
      <section className="team-section" id="about">
        <div className="container">
          <div className="team-grid">
            <div className="team-photo">
              <Image src="/images/team-rooftop.jpg" alt="Core Hood Cleaning team on San Diego rooftop" width={600} height={500} style={{objectFit:'cover',width:'100%',height:'100%'}} />
              <div className="team-photo-badge">San Diego, CA &middot; Est. 2024</div>
            </div>
            <div className="team-content">
              <p className="section-label">Our Story</p>
              <h2 className="section-title light">At the Core<br/>of Every Job</h2>
              <p style={{marginTop:'24px'}}>
                Core Hood Cleaning was founded by Chase Mangini, who grew up in the restaurant industry
                and saw firsthand how compliance gets treated like a checkbox instead of a commitment.
              </p>
              <p>
                We built Core Services on a different standard: blue-collar work ethic, honest service,
                and the kind of professionalism that makes restaurant operators actually look forward
                to their next service call.
              </p>
              <p>
                Our crew operates exclusively in San Diego County. Every technician is NFPA 96 certified,
                uniformed, and trained to treat your kitchen like their own.
              </p>
              <p className="team-tagline">+ At the Core of Every Job +</p>
              <div style={{marginTop:'32px',display:'flex',gap:'16px',flexWrap:'wrap'}}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Service</a>
                <Link href="/about" className="btn-secondary">Meet the Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations-section" id="locations">
        <div className="container">
          <div className="locations-header">
            <p className="section-label">Service Area</p>
            <h2 className="section-title">Serving All of San Diego County</h2>
            <p style={{color:'var(--gray-text)',marginTop:'16px',textAlign:'center'}}>Commercial hood cleaning in every neighborhood north county to the border</p>
          </div>
          <div className="locations-grid">
            {LOCATIONS.map(loc => (
              <Link key={loc} href={`/locations/${loc.toLowerCase().replace(/ /g,'-')}`} className="location-chip">{loc}</Link>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'24px'}}>
            <p style={{color:'var(--gray-text)',fontSize:'0.9rem'}}>Don&apos;t see your city? <a href="tel:8583612570" style={{color:'var(--rust)',fontWeight:700}}>Call us we likely serve your area.</a></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Schedule?</h2>
          <p>Get a free quote today. Same-day response, no obligation, NFPA 96 certified service.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Book Online</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq-header">
            <p className="section-label">Common Questions</p>
            <h2 className="section-title">Hood Cleaning FAQ</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map(f => (
              <div key={f.q} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  )
}
