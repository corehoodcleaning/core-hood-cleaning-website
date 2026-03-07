import type { Metadata } from 'next'
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

export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-logo">CORE <span>HOOD</span> CLEANING</div>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#why-core">Why Core</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:8583612570" className="nav-phone">📞 (858) 361-2570</a>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary" style={{padding:'10px 20px', fontSize:'0.85rem'}}>Book Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
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
            <p>No pressure. Same-day estimates available.</p>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">
              📅 Book Online Now
            </a>
            <a href="tel:8583612570" className="call-link">
              📞 (858) 361-2570
            </a>
            <div className="card-trust">
              <div className="card-trust-item">
                <span className="icon">✅</span>NFPA 96<br/>Certified
              </div>
              <div className="card-trust-item">
                <span className="icon">🛡️</span>Licensed &<br/>Insured
              </div>
              <div className="card-trust-item">
                <span className="icon">📸</span>Before/After<br/>Photos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-pill"><span className="dot" />NFPA 96 Certified</div>
          <div className="trust-pill"><span className="dot" />Fully Licensed & Insured</div>
          <div className="trust-pill"><span className="dot" />Same-Day Service Available</div>
          <div className="trust-pill"><span className="dot" />Before & After Photo Documentation</div>
          <div className="trust-pill"><span className="dot" />100% Satisfaction Guarantee</div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Complete Hood Cleaning Services</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔥</div>
              <h3>Professional Hood Cleaning</h3>
              <p>Full-service commercial kitchen exhaust system cleaning throughout San Diego County. We clean every component to NFPA 96 standards.</p>
              <ul className="service-list">
                <li>Hood Interior & Exterior Cleaning</li>
                <li>Plenum & Grease Duct Cleaning</li>
                <li>Exhaust Fan Cleaning & Service</li>
                <li>Interior & Exterior Hood Polish</li>
                <li>Hood Filter Degreasing & Cleaning</li>
                <li>Before & After Photo Documentation</li>
                <li>Compliance Certificate Provided</li>
                <li>Customer Portal Access</li>
              </ul>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Request a Quote</a>
            </div>

            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Filter Exchange Program</h3>
              <p>Grease filters are your first line of defense — and one of the most neglected. Our rotating exchange program keeps you compliant and running efficiently.</p>
              <ul className="service-list">
                <li>Clean Filters Delivered on Schedule</li>
                <li>Weekly, Bi-Weekly, or Monthly</li>
                <li>Fire Safety Compliance Maintained</li>
                <li>Covering Pacific Beach, Mission Valley, Del Mar & more</li>
                <li>No Contract Required</li>
                <li>Automated Service Reminders</li>
              </ul>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Start Exchange Program</a>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Emergency & Same-Day Service</h3>
              <p>Facing a surprise inspection or urgent compliance issue? We dispatch same-day or 24/7 for emergencies anywhere in San Diego County.</p>
              <ul className="service-list">
                <li>24/7 Emergency Dispatch</li>
                <li>Same-Day Availability</li>
                <li>Fire Marshal Inspection Prep</li>
                <li>Health Inspector Compliance</li>
                <li>Urgent Compliance Certificates</li>
                <li>All San Diego County Locations</li>
              </ul>
              <a href="tel:8583612570" className="btn-primary">📞 Call Now — (858) 361-2570</a>
            </div>

            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>NFPA 96 Compliance Inspection</h3>
              <p>Full compliance inspection and certification to ensure your kitchen meets NFPA 96 standards. Required documentation for insurance and fire marshal visits.</p>
              <ul className="service-list">
                <li>Full NFPA 96 Compliance Audit</li>
                <li>Written Compliance Report</li>
                <li>Certificate for Fire Marshal</li>
                <li>Insurance Documentation</li>
                <li>Health Code Compliance Review</li>
                <li>Free Re-Inspection if Needed</li>
              </ul>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book Inspection</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CORE */}
      <section className="why-section" id="why-core">
        <div className="container">
          <div className="why-grid">
            <div className="why-left">
              <div className="section-label">Why Core</div>
              <h2 className="section-title light" style={{marginBottom:'24px'}}>Built on Work Ethic. Backed by Execution.</h2>
              <p>We&apos;re not just hood cleaners — we&apos;re San Diego&apos;s trusted partners in keeping your kitchen safe, fire-code compliant, and running at full capacity.</p>
              <p>We started Core after growing up in the restaurant business. We built our service around what we always wanted as operators: honest pricing, real documentation, and technicians who treat your kitchen like their own.</p>
              <div className="why-stats">
                <div className="why-stat">
                  <div className="big">200+</div>
                  <div className="small">Restaurants Served</div>
                </div>
                <div className="why-stat">
                  <div className="big">5.0★</div>
                  <div className="small">Google Rating</div>
                </div>
                <div className="why-stat">
                  <div className="big">24/7</div>
                  <div className="small">Emergency Service</div>
                </div>
                <div className="why-stat">
                  <div className="big">100%</div>
                  <div className="small">Satisfaction Guarantee</div>
                </div>
              </div>
            </div>

            <div className="why-right">
              {[
                { icon: '📸', title: 'Before & After Documentation', desc: 'Every service includes photo documentation. Proof of work you can show your fire marshal, health inspector, and insurance company.' },
                { icon: '🔐', title: 'Digital Compliance Portal', desc: 'Access your service history, certificates, and photos anytime from your customer portal. Never scramble for paperwork again.' },
                { icon: '🔔', title: 'Automated Service Reminders', desc: 'We track your cleaning schedule and send reminders before you fall out of compliance. Stay protected without the admin.' },
                { icon: '🤝', title: 'Restaurant Industry Roots', desc: "We grew up in the restaurant business. We know what's at stake when a kitchen goes down — and we treat your operation accordingly." },
                { icon: '⭐', title: 'No-Pressure, Transparent Pricing', desc: 'Flat-rate quotes, no hidden fees. We tell you what it costs upfront and we stand behind the price we quote.' },
              ].map((item) => (
                <div className="diff-item" key={item.title}>
                  <div className="diff-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{padding:'96px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'64px'}}>
            <div className="section-label">Who We Serve</div>
            <h2 className="section-title">Every Commercial Kitchen in San Diego</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'16px'}}>
            {[
              { icon: '🍽️', label: 'Restaurants', desc: 'Fine dining to fast casual' },
              { icon: '🍺', label: 'Bars & Breweries', desc: 'Craft beer & cocktail venues' },
              { icon: '🏨', label: 'Hotels & Resorts', desc: "San Diego's hospitality industry" },
              { icon: '🏫', label: 'Schools & Hospitals', desc: 'Institutional kitchens' },
              { icon: '🚚', label: 'Food Trucks', desc: 'Mobile food vendors' },
              { icon: '🏭', label: 'Commissaries', desc: 'Large-scale food production' },
            ].map((item) => (
              <div key={item.label} style={{
                padding:'28px', background:'var(--off-white)', borderRadius:'8px',
                border:'1px solid var(--gray-light)', textAlign:'center'
              }}>
                <div style={{fontSize:'2rem', marginBottom:'12px'}}>{item.icon}</div>
                <div style={{fontFamily:'var(--font-display)', fontWeight:900, fontSize:'1.1rem', textTransform:'uppercase', marginBottom:'4px'}}>{item.label}</div>
                <div style={{fontSize:'0.8rem', color:'var(--gray-text)'}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section" id="reviews">
        <div className="container">
          <div className="reviews-header">
            <div className="section-label">What Clients Say</div>
            <h2 className="section-title">40+ Five-Star Reviews</h2>
            <div className="stars" style={{fontSize:'1.4rem', marginTop:'12px'}}>★★★★★</div>
          </div>
          <div className="reviews-grid">
            {REVIEWS.map((r) => (
              <div className="review-card" key={r.name}>
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                <div className="reviewer">
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:'40px'}}>
            <a href="https://www.google.com/maps/place/Core+Hood+Cleaning" className="btn-outline-dark" target="_blank" rel="noopener noreferrer">
              View All Reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="locations-section" id="locations">
        <div className="container">
          <div className="locations-header">
            <div className="section-label">Service Area</div>
            <h2 className="section-title">Hood Cleaning Throughout San Diego County</h2>
            <p style={{color:'var(--gray-text)', marginTop:'16px', maxWidth:'560px', margin:'16px auto 0'}}>
              We provide NFPA 96 certified commercial hood cleaning to restaurants and commercial kitchens across all of San Diego County.
            </p>
          </div>
          <div className="locations-grid">
            {LOCATIONS.map((loc) => {
              const slug = loc.toLowerCase().replace(/ /g, '-')
              return (
                <Link href={`/locations/${slug}`} className="location-chip" key={loc}>
                  {loc}
                </Link>
              )
            })}
          </div>
          <p style={{textAlign:'center', color:'var(--gray-text)', fontSize:'0.9rem'}}>
            Don&apos;t see your area? <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{color:'var(--orange)', fontWeight:600}}>Contact us</a> — we serve all of San Diego County.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq-header">
            <div className="section-label">Common Questions</div>
            <h2 className="section-title">Hood Cleaning FAQ</h2>
          </div>
          <div className="faq-grid">
            {FAQS.map((faq) => (
              <div className="faq-item" key={faq.q}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Ready to Get Compliant?</h2>
          <p>Join 200+ San Diego restaurants that trust Core for their hood cleaning. Free estimates, same-day availability, NFPA 96 certified.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">
              📅 Book a Free Quote
            </a>
            <a href="tel:8583612570" className="btn-secondary">
              📞 (858) 361-2570
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo">CORE <span style={{color:'var(--orange)'}}>HOOD</span> CLEANING</div>
              <p>San Diego&apos;s premier NFPA 96 certified commercial kitchen hood cleaning company. Trusted by 200+ restaurants across San Diego County.</p>
              <a href="tel:8583612570" style={{color:'var(--orange)', fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.2rem'}}>
                (858) 361-2570
              </a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Hood Cleaning</a></li>
                <li><a href="#services">Filter Exchange</a></li>
                <li><a href="#services">Emergency Service</a></li>
                <li><a href="#services">NFPA 96 Inspection</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Locations</h4>
              <ul>
                {['La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad'].map(l => (
                  <li key={l}><Link href={`/locations/${l.toLowerCase().replace(/ /g,'-')}`}>{l}</Link></li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <div className="footer-contact-item">📍 5284 Eastgate Mall, San Diego, CA 92121</div>
              <div className="footer-contact-item">📞 <a href="tel:8583612570">(858) 361-2570</a></div>
              <div className="footer-contact-item">✉️ <a href="mailto:chase@corehoodcleaning.com">chase@corehoodcleaning.com</a></div>
              <div className="footer-contact-item">🕐 Mon–Sun 8AM–10PM · 24/7 Emergency</div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Core Hood Cleaning. All rights reserved. | <a href="/privacy">Privacy Policy</a></p>
            <p>NFPA 96 Certified · Licensed & Insured · Serving All of San Diego County</p>
          </div>
        </div>
      </footer>
    </>
  )
}
