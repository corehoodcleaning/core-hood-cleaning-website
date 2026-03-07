import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '#1 Hood Cleaning San Diego | NFPA 96 Certified | Core Hood Cleaning',
  description: "San Diego's top-rated commercial hood cleaning company. NFPA 96 certified, 40+ 5-star reviews, same-day emergency service. Serving all of San Diego County. Free estimates. Call (858) 361-2570.",
  alternates: { canonical: 'https://www.corehoodcleaning.com' }
}

const REVIEWS = [
  { name: 'Daniela D.', role: 'Head of Operations', text: 'Highly recommend Core Hood Cleaning! Their team is professional, thorough, and extremely reliable. They do an outstanding job and always leave the kitchen spotless.' },
  { name: 'Cory O.', role: 'Property Manager', text: "Chase was a breath of fresh air in an industry burdened with integrity issues. He went above and beyond to make sure we had all the information we needed. A no-pressure sales transaction is hard to find — real diamond in the rough." },
  { name: 'Dream P.', role: 'Multi-Unit Operator', text: "We hired Core to clean our kitchen hood and couldn't be happier. Professional, punctual, and thorough. Before-and-after photos showed the incredible difference. Pricing was fair for the quality. Chase is the best — 100/10." },
  { name: 'Chris T.', role: 'Head Chef', text: "Been dealing with many companies over the years and Core Hood has it done right. Very friendly, professional, and did a great job. We look forward to a long working relationship. Highly recommend if you're in San Diego." },
  { name: 'Crystal R.', role: 'Restaurant Owner', text: 'Genuine guys who know their business really well. They were very clear and concise and answered all our questions. Great communication from start to finish.' },
  { name: 'Sergio B.', role: 'General Manager', text: 'I manage a small restaurant in Coronado. We switched from a bigger company and the difference is night and day. Core cares about their clients and shows it in every service.' },
]

const LOCATIONS = [
  'Pacific Beach', 'La Jolla', 'Mission Valley', 'Downtown San Diego',
  'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon',
  'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas',
  'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee'
]

const FAQS = [
  { q: 'How often should commercial hoods be cleaned?', a: 'NFPA 96 requires cleaning frequency based on cooking volume: monthly for high-volume/solid fuel, quarterly for moderate cooking, and semi-annually for low-volume use. We assess your kitchen and recommend the right schedule.' },
  { q: 'What is NFPA 96 and why does it matter?', a: 'NFPA 96 is the National Fire Protection Association standard for commercial cooking operations. Compliance is required by health inspectors and fire marshals — and is essential for your insurance coverage.' },
  { q: 'Do you provide documentation after cleaning?', a: 'Yes. Every service includes before/after photos, a detailed service report, and a compliance certificate you can present to fire marshals, health inspectors, and your insurance company.' },
  { q: 'How long does a hood cleaning take?', a: 'Most standard hood cleanings take 2–4 hours. Larger systems or heavily soiled units may take longer. We work nights and weekends to minimize disruption to your operations.' },
  { q: 'What areas of San Diego do you serve?', a: 'We serve all of San Diego County — from Oceanside and Carlsbad in the north to Chula Vista and National City in the south, and everything in between including La Jolla, Mission Valley, and downtown.' },
  { q: 'Do you offer emergency hood cleaning?', a: "Yes — 24/7 emergency service is available. If you're facing a health inspection, fire marshal visit, or grease emergency, call us at (858) 361-2570 and we'll dispatch immediately." },
]

const GALLERY = [
  { src: '/images/before-after-1.jpg', label: 'Exhaust Duct — Before & After' },
  { src: '/images/before-after-2.jpg', label: 'Hood Interior — Before & After' },
  { src: '/images/before-after-3.jpg', label: 'Hood Seams — Before & After' },
  { src: '/images/before-after-4.png', label: 'Exhaust Fan — Before & After' },
  { src: '/images/before-after-5.png', label: 'Fan Housing — Before & After' },
  { src: '/images/after-clean-hood.jpg', label: 'Completed Clean — Hood Interior' },
]

const SERVE = [
  {
    title: 'Restaurants',
    desc: 'From downtown to Oceanside — all sizes, all cuisines across San Diego County.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
  },
  {
    title: 'Bars & Breweries',
    desc: 'Craft breweries and bars throughout San Diego that need compliant kitchen exhaust.',
    img: 'https://images.unsplash.com/photo-1559329255-be90b7ad9c76?w=800&q=80',
  },
  {
    title: 'Schools & Hospitals',
    desc: 'Institutional kitchens that require certified, documented compliance services.',
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80',
  },
  {
    title: 'Hotels & Resorts',
    desc: "San Diego's hospitality industry trusts Core for reliable kitchen maintenance.",
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  },
  {
    title: 'Commercial Commissaries',
    desc: 'Large-scale food production facilities across San Diego County.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    title: 'Food Trucks',
    desc: 'Mobile food vendors operating throughout San Diego — we keep you compliant.',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
  },
]

export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/images/core-logo.png" alt="Core Services" width={120} height={40} className="nav-logo-img" />
            <div className="nav-logo-text">
              Core Hood Cleaning
              <span className="nav-logo-sub">San Diego, CA · NFPA 96 Certified</span>
            </div>
          </Link>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:8583612570" className="nav-phone">📞 (858) 361-2570</a>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary" style={{padding:'10px 20px', fontSize:'0.85rem'}}>Book Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-photo">
          <Image src="/images/tech-rooftop-palms.jpg" alt="Core Services technician on San Diego rooftop" fill style={{objectFit:'cover',objectPosition:'center 30%'}} priority />
        </div>
        <div className="hero-bg-overlay" />
        <div className="hero-content">
          <div>
            <div className="hero-badge">
              <span>⭐ 40+ Five-Star Reviews · San Diego&apos;s #1 Rated</span>
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
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">
                🗓 Book a Free Quote
              </a>
              <a href="tel:8583612570" className="btn-secondary">
                📞 Call Now
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="num">200+</span>
                <span className="label">Restaurants Served</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="num">40+</span>
                <span className="label">5-Star Reviews</span>
              </div>
              <div className="trust-divider" />
              <div className="trust-item">
                <span className="num">24/7</span>
                <span className="label">Emergency Service</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <h3>Get a Free Quote</h3>
            <p>Same-day response · No obligation · NFPA 96 certified</p>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">
              📅 Schedule Online
            </a>
            <a href="tel:8583612570" className="call-link">
              📞 (858) 361-2570
            </a>
            <div className="card-trust">
              <div className="card-trust-item"><span className="icon">🏅</span>NFPA 96<br/>Certified</div>
              <div className="card-trust-item"><span className="icon">⭐</span>40+ Five<br/>Star Reviews</div>
              <div className="card-trust-item"><span className="icon">🛡️</span>Fully<br/>Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {['NFPA 96 Certified', 'Fully Licensed & Insured', 'Same-Day Emergency Service', '200+ San Diego Restaurants Served', 'Photo Documentation Included'].map(t => (
            <div key={t} className="trust-pill"><span className="dot" />{t}</div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Commercial Kitchen<br/>Exhaust Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔥</div>
              <h3>Hood Cleaning</h3>
              <p>Full system pressure washing from hood to rooftop fan. NFPA 96 compliant with photo documentation and compliance certificate included on every service.</p>
              <ul className="service-list">
                <li>Hood canopy, filters & plenum</li>
                <li>Ductwork — full run to rooftop</li>
                <li>Exhaust fan housing & blades</li>
                <li>Grease containment & disposal</li>
                <li>Before/after photos + certificate</li>
              </ul>
              <Link href="/services/hood-cleaning" className="btn-primary" style={{fontSize:'0.9rem',padding:'12px 24px'}}>Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Filter Exchange</h3>
              <p>Weekly or bi-weekly clean filter swap programs. Your kitchen always has clean, compliant filters without managing the cleaning yourself.</p>
              <ul className="service-list">
                <li>Clean filters every service visit</li>
                <li>Weekly or bi-weekly schedules</li>
                <li>Multiple filter types stocked</li>
                <li>No downtime — swap & go</li>
                <li>Flat monthly pricing</li>
              </ul>
              <Link href="/services/filter-exchange" className="btn-primary" style={{fontSize:'0.9rem',padding:'12px 24px'}}>Learn More →</Link>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>NFPA 96 Inspections</h3>
              <p>Certified compliance inspections to ensure your kitchen meets fire code. Essential for health department visits, insurance, and fire marshal compliance.</p>
              <ul className="service-list">
                <li>Full NFPA 96 system inspection</li>
                <li>Written compliance report</li>
                <li>Deficiency documentation</li>
                <li>Inspection sticker & certificate</li>
                <li>Re-inspection if needed</li>
              </ul>
              <Link href="/services/nfpa-inspection" className="btn-primary" style={{fontSize:'0.9rem',padding:'12px 24px'}}>Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER GALLERY */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <div className="gallery-header">
            <p className="section-label" style={{color:'#d47c7b'}}>Our Work</p>
            <h2 className="section-title light">Before &amp; After</h2>
            <p style={{color:'rgba(238,239,226,0.5)', marginTop:'16px', fontSize:'1rem'}}>Real results from real San Diego kitchens</p>
          </div>
          <div className="gallery-grid">
            {GALLERY.map((item) => (
              <div key={item.src} className="gallery-item">
                <Image src={item.src} alt={item.label} fill style={{objectFit:'cover'}} sizes="(max-width:768px) 100vw, 50vw" />
                <div className="gallery-item-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="serve-section" id="who-we-serve">
        <div className="container">
          <div className="serve-header">
            <p className="section-label">Who We Serve</p>
            <h2 className="section-title">Commercial Hood Cleaning<br/>Throughout San Diego County</h2>
          </div>
          <div className="serve-grid">
            {SERVE.map((item) => (
              <div key={item.title} className="serve-card">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="serve-card-overlay" />
                <div className="serve-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
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
                We grew up in the restaurant industry — we know what it means to keep a kitchen running. 
                Core Hood Cleaning isn&apos;t a franchise or a call center. It&apos;s a San Diego crew that shows 
                up on time, does the job right, and gives you the documentation you need.
              </p>
              <p>
                Every technician is trained to NFPA 96 standards. Every job includes photo documentation 
                and a compliance certificate. No shortcuts, no upsells you don&apos;t need.
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
                { icon: '📸', title: 'Photo Documentation', desc: 'Before and after photos on every single job. We hand you proof, not promises.' },
                { icon: '🏅', title: 'NFPA 96 Certified', desc: 'Fully certified technicians. Your compliance certificate is valid for insurance, fire marshal, and health inspections.' },
                { icon: '🌙', title: 'Night & Weekend Service', desc: 'We work when your kitchen is closed — no disruption to service, no lost revenue.' },
                { icon: '🤝', title: 'No Long-Term Contracts', desc: 'Month-to-month service. We earn your business every visit, not just once.' },
                { icon: '📋', title: 'Full Compliance Reports', desc: 'Detailed service reports you can file with your insurance and show any inspector.' },
              ].map(d => (
                <div key={d.title} className="diff-item">
                  <div className="diff-icon">{d.icon}</div>
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
              <Image src="/images/team-rooftop.jpg" alt="Core Hood Cleaning team on San Diego rooftop" width={600} height={500} style={{objectFit:'cover', width:'100%', height:'100%'}} />
              <div className="team-photo-badge">San Diego, CA · Est. 2022</div>
            </div>
            <div className="team-content">
              <p className="section-label">Our Story</p>
              <h2 className="section-title light">At the Core<br/>of Every Job</h2>
              <p style={{marginTop:'24px'}}>
                Core Hood Cleaning was founded by Chase Mangini, who grew up in the restaurant industry 
                and saw firsthand how compliance gets treated like a checkbox instead of a commitment.
              </p>
              <p>
                We built Core Services on a different standard: blue-collar work ethic, honest pricing, 
                and the kind of professionalism that makes restaurant operators actually look forward 
                to their next service call.
              </p>
              <p>
                Our crew — Team 360 — operates exclusively in San Diego County. Every technician 
                is NFPA 96 certified, uniformed, and trained to treat your kitchen like their own.
              </p>
              <p className="team-tagline">+ At the Core of Every Job +</p>
              <div style={{marginTop:'32px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Service</a>
                <Link href="/about" className="btn-secondary">Meet the Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="container">
          <div className="reviews-header">
            <p className="section-label">Customer Reviews</p>
            <h2 className="section-title">40+ Five-Star Reviews</h2>
            <div className="stars" style={{marginTop:'16px', textAlign:'center'}}>★★★★★</div>
            <p style={{textAlign:'center', color:'var(--gray-text)', marginTop:'8px', fontSize:'0.9rem'}}>Rated 5.0 on Google · San Diego County</p>
          </div>
          <div className="reviews-grid">
            {REVIEWS.map(r => (
              <div key={r.name} className="review-card">
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                <div className="reviewer">
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations-section" id="locations">
        <div className="container">
          <div className="locations-header">
            <p className="section-label">Service Area</p>
            <h2 className="section-title">Serving All of San Diego County</h2>
            <p style={{color:'var(--gray-text)', marginTop:'16px', textAlign:'center'}}>Commercial hood cleaning in every neighborhood — north county to the border</p>
          </div>
          <div className="locations-grid">
            {LOCATIONS.map(loc => (
              <Link key={loc} href={`/locations/${loc.toLowerCase().replace(/ /g,'-')}`} className="location-chip">{loc}</Link>
            ))}
          </div>
          <div style={{textAlign:'center'}}>
            <p style={{color:'var(--gray-text)', fontSize:'0.9rem'}}>Don&apos;t see your city? <a href="tel:8583612570" style={{color:'var(--rust)', fontWeight:700}}>Call us — we likely serve your area.</a></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Schedule?</h2>
          <p>Get a free quote today. Same-day response, no obligation, NFPA 96 certified service.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">📅 Book Online</a>
            <a href="tel:8583612570" className="btn-secondary">📞 (858) 361-2570</a>
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
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Image src="/images/core-logo.png" alt="Core Services" width={100} height={34} style={{filter:'brightness(0) invert(0.8)'}} />
              <p>San Diego&apos;s NFPA 96 certified commercial hood cleaning company. Serving restaurants, hotels, schools, and commercial kitchens throughout San Diego County.</p>
              <span className="footer-tagline">+ At the Core of Every Job +</span>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services/hood-cleaning">Hood Cleaning</Link></li>
                <li><Link href="/services/filter-exchange">Filter Exchange</Link></li>
                <li><Link href="/services/nfpa-inspection">NFPA 96 Inspections</Link></li>
                <li><Link href="/blog">Blog & Resources</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Locations</h4>
              <ul>
                {['La Jolla','Pacific Beach','Downtown San Diego','Chula Vista','Oceanside','Carlsbad','Escondido'].map(l => (
                  <li key={l}><Link href={`/locations/${l.toLowerCase().replace(/ /g,'-')}`}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-contact-item">📞 <a href="tel:8583612570">(858) 361-2570</a></div>
              <div className="footer-contact-item">✉️ <a href="mailto:chase@corehoodcleaning.com">chase@corehoodcleaning.com</a></div>
              <div className="footer-contact-item">📍 5284 Eastgate Mall<br/>San Diego, CA 92121</div>
              <div className="footer-contact-item">🕐 24/7 Emergency Service</div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Core Hood Cleaning / Core Services. All rights reserved.</p>
            <div style={{display:'flex', gap:'24px'}}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
