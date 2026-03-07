import type { Metadata } from 'next'
import Link from 'next/link'

const LOCATION_DATA: Record<string, {
  name: string
  county: string
  description: string
  neighborhoods: string[]
  restaurants: string
  blurb: string
}> = {
  'la-jolla': {
    name: 'La Jolla',
    county: 'San Diego County',
    description: "La Jolla's upscale dining scene demands the best — Core Hood Cleaning provides NFPA 96 certified hood cleaning for La Jolla's finest restaurants and commercial kitchens.",
    neighborhoods: ['Bird Rock', 'The Village', 'La Jolla Shores', 'Windansea'],
    restaurants: 'fine dining restaurants, seafood spots, hotel restaurants, and upscale cafes',
    blurb: "La Jolla's competitive restaurant scene means your kitchen has to be fire-safe and fully compliant at all times. From intimate bistros in The Village to large hotel kitchens on the shore, Core Hood Cleaning keeps every commercial kitchen in La Jolla meeting NFPA 96 standards."
  },
  'pacific-beach': {
    name: 'Pacific Beach',
    county: 'San Diego County',
    description: "Pacific Beach restaurants trust Core Hood Cleaning for fast, reliable NFPA 96 certified hood cleaning. Serving PB's bars, restaurants, and commercial kitchens.",
    neighborhoods: ['Mission Beach', 'Crown Point', 'Garnet Avenue', 'Boardwalk'],
    restaurants: 'beachside bars, casual restaurants, breweries, and food trucks',
    blurb: "Pacific Beach runs hot — literally. High-volume beach bars and restaurants need frequent hood cleaning to stay compliant and avoid fire hazards. Core Hood Cleaning serves PB's entire commercial kitchen community with fast turnaround and 24/7 emergency availability."
  },
  'mission-valley': {
    name: 'Mission Valley',
    county: 'San Diego County',
    description: "Mission Valley's restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified exhaust hood cleaning. Serving hotels, chain restaurants, and local spots.",
    neighborhoods: ['Fashion Valley', 'Hotel Circle', 'Hazard Center', 'Stadium District'],
    restaurants: 'hotel restaurants, chain dining, food courts, and local eateries',
    blurb: "Mission Valley's high density of hotels, shopping centers, and restaurants makes it one of San Diego's most active commercial kitchen zones. Core Hood Cleaning serves every commercial kitchen in Mission Valley with certified technicians and fast scheduling."
  },
  'downtown-san-diego': {
    name: 'Downtown San Diego',
    county: 'San Diego County',
    description: "Downtown San Diego restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving the Gaslamp Quarter, Little Italy, and surrounding areas.",
    neighborhoods: ['Gaslamp Quarter', 'Little Italy', 'East Village', 'Marina District'],
    restaurants: 'upscale restaurants, bars, event venues, hotel kitchens, and food halls',
    blurb: "Downtown San Diego's restaurant scene is one of the most vibrant in Southern California. From Gaslamp Quarter bars to Little Italy trattorias, every commercial kitchen needs regular hood cleaning to stay compliant with NFPA 96 and San Diego Fire Department requirements."
  },
  'chula-vista': {
    name: 'Chula Vista',
    county: 'San Diego County',
    description: "Chula Vista restaurants and commercial kitchens trust Core Hood Cleaning for affordable, NFPA 96 certified hood cleaning services throughout South San Diego.",
    neighborhoods: ['Eastlake', 'Otay Ranch', 'Downtown Chula Vista', 'Bonita'],
    restaurants: 'family restaurants, Mexican food establishments, fast casual, and commercial kitchens',
    blurb: "Chula Vista's growing restaurant community deserves professional hood cleaning service at competitive rates. Core Hood Cleaning brings the same NFPA 96 certified quality to South San Diego that we deliver throughout the county — with fast response times and transparent pricing."
  },
  'oceanside': {
    name: 'Oceanside',
    county: 'San Diego County',
    description: "Oceanside restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving North San Diego County's growing dining scene.",
    neighborhoods: ['Oceanside Pier', 'Downtown Oceanside', 'Fire Mountain', 'South Oceanside'],
    restaurants: 'beachfront restaurants, breweries, cafes, and military community dining',
    blurb: "Oceanside's booming food and brewery scene has made it one of North County's top dining destinations. Core Hood Cleaning provides reliable, certified hood cleaning to Oceanside's commercial kitchens — from beachfront establishments to the growing downtown dining corridor."
  },
  'carlsbad': {
    name: 'Carlsbad',
    county: 'San Diego County',
    description: "Carlsbad restaurants and hotels trust Core Hood Cleaning for NFPA 96 certified commercial kitchen exhaust cleaning. Serving Carlsbad Village, Bressi Ranch, and the entire Carlsbad area.",
    neighborhoods: ['Carlsbad Village', 'Bressi Ranch', 'La Costa', 'Carlsbad Highlands'],
    restaurants: 'resort restaurants, hotel kitchens, breweries, and family dining',
    blurb: "Carlsbad's resort hotels, premium restaurants, and thriving local dining scene require consistent, professional hood cleaning. Core Hood Cleaning serves all of Carlsbad with NFPA 96 compliance, same-day availability, and the documentation your fire marshal requires."
  },
  'escondido': {
    name: 'Escondido',
    county: 'San Diego County',
    description: "Escondido restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving downtown Escondido and all of North County Inland.",
    neighborhoods: ['Downtown Escondido', 'Hidden Valley', 'Del Dios', 'Felicita'],
    restaurants: 'family restaurants, Mexican cuisine, breweries, and commercial facilities',
    blurb: "Escondido's diverse restaurant community — from traditional Mexican eateries to modern craft breweries — deserves professional hood cleaning service. Core Hood Cleaning brings certified technicians and full NFPA 96 compliance to every commercial kitchen in Escondido."
  },
  'el-cajon': {
    name: 'El Cajon',
    county: 'San Diego County',
    description: "El Cajon restaurants and commercial kitchens trust Core Hood Cleaning for reliable, NFPA 96 certified hood cleaning services in East San Diego County.",
    neighborhoods: ['Downtown El Cajon', 'Rancho San Diego', 'Fletcher Hills', 'Bostonia'],
    restaurants: 'Middle Eastern cuisine, family restaurants, fast food, and commercial kitchens',
    blurb: "El Cajon's diverse culinary scene — with strong Middle Eastern, Mexican, and American dining — generates high-volume grease that demands regular hood cleaning. Core Hood Cleaning serves El Cajon's commercial kitchens with certified technicians and responsive service."
  },
  'vista': {
    name: 'Vista',
    county: 'San Diego County',
    description: "Vista restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving North County's breweries, restaurants, and food businesses.",
    neighborhoods: ['Downtown Vista', 'Shadowridge', 'Buena Vista', 'Gopher Canyon'],
    restaurants: 'breweries, casual dining, Mexican cuisine, and food manufacturing',
    blurb: "Vista has established itself as one of North County's craft brewery capitals, alongside a diverse restaurant scene. Core Hood Cleaning keeps Vista's commercial kitchens compliant and safe with NFPA 96 certified service and flexible scheduling."
  },
  'san-marcos': {
    name: 'San Marcos',
    county: 'San Diego County',
    description: "San Marcos restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving Twin Oaks Valley, Palomar College area, and all of San Marcos.",
    neighborhoods: ['Twin Oaks Valley', 'San Elijo Hills', 'Palomar College', 'Old California Restaurant Row'],
    restaurants: 'California Restaurant Row dining, university area eateries, and family restaurants',
    blurb: "San Marcos is home to famous California Restaurant Row and a growing dining scene around Cal State San Marcos. Core Hood Cleaning serves every commercial kitchen in San Marcos with professional NFPA 96 certified hood cleaning and same-day availability."
  },
  'national-city': {
    name: 'National City',
    county: 'San Diego County',
    description: "National City restaurants and commercial kitchens trust Core Hood Cleaning for affordable, NFPA 96 certified hood cleaning. Serving Mile of Cars corridor and all of National City.",
    neighborhoods: ['Downtown National City', 'Paradise Hills', 'Sweetwater', 'Mile of Cars'],
    restaurants: 'Mexican and Filipino cuisine, family restaurants, and commercial facilities',
    blurb: "National City's rich culinary culture — especially its Mexican and Filipino dining — requires frequent, reliable hood cleaning to stay compliant. Core Hood Cleaning delivers certified service to all National City commercial kitchens with competitive pricing and fast response."
  },
  'la-mesa': {
    name: 'La Mesa',
    county: 'San Diego County',
    description: "La Mesa restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving the Village of La Mesa and all of East San Diego County.",
    neighborhoods: ['La Mesa Village', 'Mount Helix', 'Grossmont', 'Casa de Oro'],
    restaurants: 'village restaurants, bistros, breweries, and family dining',
    blurb: "La Mesa Village's walkable restaurant scene and growing dining community need professional hood cleaning they can count on. Core Hood Cleaning serves La Mesa with certified technicians, full documentation, and the responsive service that local restaurants deserve."
  },
  'coronado': {
    name: 'Coronado',
    county: 'San Diego County',
    description: "Coronado restaurants and hotel kitchens trust Core Hood Cleaning for premium NFPA 96 certified hood cleaning. Serving Hotel del Coronado, Coronado Village, and the entire island.",
    neighborhoods: ['Coronado Village', 'Hotel del Coronado', 'Coronado Cays', 'Naval Air Station'],
    restaurants: 'luxury hotel kitchens, fine dining, beach restaurants, and resort facilities',
    blurb: "Coronado's world-class hotels, including the iconic Hotel del Coronado, demand the highest standard of commercial kitchen maintenance. Core Hood Cleaning provides premium NFPA 96 certified hood cleaning to Coronado's luxury hospitality establishments and restaurants."
  },
  'encinitas': {
    name: 'Encinitas',
    county: 'San Diego County',
    description: "Encinitas restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving Cardiff, Leucadia, and all of Encinitas.",
    neighborhoods: ['Downtown Encinitas', 'Cardiff-by-the-Sea', 'Leucadia', 'Olivenhain'],
    restaurants: 'health-conscious cafes, coastal restaurants, breweries, and yoga retreat kitchens',
    blurb: "Encinitas's vibrant coastal dining scene — from Cardiff's surf spots to Leucadia's eclectic eateries — requires dependable hood cleaning service. Core Hood Cleaning keeps every Encinitas commercial kitchen NFPA 96 compliant with certified service and full documentation."
  },
  'del-mar': {
    name: 'Del Mar',
    county: 'San Diego County',
    description: "Del Mar restaurants and event venues trust Core Hood Cleaning for premium NFPA 96 certified hood cleaning. Serving Del Mar Village, Del Mar Racetrack, and Torrey Pines area.",
    neighborhoods: ['Del Mar Village', 'Torrey Pines', 'Del Mar Heights', 'Fairgrounds Area'],
    restaurants: 'fine dining, wine bars, event venue kitchens, and upscale casual dining',
    blurb: "Del Mar's upscale dining scene and high-profile event venues require impeccable kitchen maintenance. Core Hood Cleaning provides premium NFPA 96 certified hood cleaning to Del Mar's finest restaurants and commercial kitchens with full documentation and reliable scheduling."
  },
  'miramar': {
    name: 'Miramar',
    county: 'San Diego County',
    description: "Miramar restaurants and commercial facilities trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving the Miramar industrial corridor and surrounding areas.",
    neighborhoods: ['Miramar Industrial', 'Scripps Ranch', 'Mira Mesa', 'Carroll Canyon'],
    restaurants: 'industrial commissaries, food manufacturing, breweries, and corporate cafeterias',
    blurb: "Miramar's industrial zone is home to many of San Diego's food manufacturers, commissary kitchens, and craft breweries. Core Hood Cleaning specializes in large-scale commercial kitchen exhaust cleaning for Miramar's high-volume food production facilities."
  },
  'rancho-bernardo': {
    name: 'Rancho Bernardo',
    county: 'San Diego County',
    description: "Rancho Bernardo restaurants and hotels trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving RB's upscale dining corridor and resort properties.",
    neighborhoods: ['Rancho Bernardo Village', 'The Vineyard', 'Bernardo Heights', 'West Bernardo'],
    restaurants: 'resort restaurants, upscale dining, chain restaurants, and hotel kitchens',
    blurb: "Rancho Bernardo's resort hotels and upscale dining corridor demand professional, reliable hood cleaning service. Core Hood Cleaning serves RB's commercial kitchens with NFPA 96 certified technicians and the comprehensive documentation required by fire marshals and insurance providers."
  },
  'poway': {
    name: 'Poway',
    county: 'San Diego County',
    description: "Poway restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving 'The City in the Country' and all surrounding areas.",
    neighborhoods: ['Old Poway', 'Poway Road Corridor', 'South Poway', 'Twin Peaks'],
    restaurants: 'family restaurants, BBQ spots, breweries, and commercial facilities',
    blurb: "Poway's family-friendly restaurant scene and growing commercial district need professional hood cleaning they can count on. Core Hood Cleaning delivers NFPA 96 certified service to every commercial kitchen in Poway with competitive pricing and fast turnaround."
  },
  'santee': {
    name: 'Santee',
    county: 'San Diego County',
    description: "Santee restaurants and commercial kitchens trust Core Hood Cleaning for NFPA 96 certified hood cleaning. Serving East San Diego County's growing dining community.",
    neighborhoods: ['Santee Town Center', 'Fanita Ranch', 'Carlton Hills', 'Riverview'],
    restaurants: 'family dining, fast casual, breweries, and commercial kitchens',
    blurb: "Santee's growing restaurant community deserves the same professional hood cleaning service as downtown San Diego. Core Hood Cleaning brings NFPA 96 certified technicians to Santee with responsive scheduling and the full documentation package every commercial kitchen needs."
  },
}

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return Object.keys(LOCATION_DATA).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const loc = LOCATION_DATA[params.slug]
  if (!loc) return { title: 'Location Not Found' }
  return {
    title: `Hood Cleaning ${loc.name} | NFPA 96 Certified | Core Hood Cleaning`,
    description: loc.description,
    alternates: { canonical: `https://www.corehoodcleaning.com/locations/${params.slug}` }
  }
}

export default function LocationPage({ params }: Props) {
  const loc = LOCATION_DATA[params.slug]
  if (!loc) return <div>Location not found</div>

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Hood Cleaning ${loc.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Core Hood Cleaning",
      "telephone": "+18583612570",
      "url": "https://www.corehoodcleaning.com"
    },
    "areaServed": {
      "@type": "City",
      "name": loc.name,
      "containedIn": loc.county
    },
    "description": loc.description
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      <nav>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">CORE <span>HOOD</span> CLEANING</Link>
          <ul className="nav-links">
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#why-core">Why Core</Link></li>
            <li><Link href="/#locations">Locations</Link></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:8583612570" className="nav-phone">📞 (858) 361-2570</a>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary" style={{padding:'10px 20px', fontSize:'0.85rem'}}>Book Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        paddingTop:'140px', paddingBottom:'80px',
        background:'var(--black)',
        position:'relative', overflow:'hidden'
      }}>
        <div style={{
          position:'absolute', inset:0,
          background:'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)'
        }} />
        <div className="container" style={{position:'relative'}}>
          <div style={{maxWidth:'700px'}}>
            <div style={{marginBottom:'16px'}}>
              <Link href="/" style={{color:'rgba(255,255,255,0.5)', fontSize:'0.85rem'}}>Home</Link>
              <span style={{color:'rgba(255,255,255,0.3)', margin:'0 8px'}}>/</span>
              <span style={{color:'rgba(255,255,255,0.5)', fontSize:'0.85rem'}}>Locations</span>
              <span style={{color:'rgba(255,255,255,0.3)', margin:'0 8px'}}>/</span>
              <span style={{color:'var(--orange)', fontSize:'0.85rem'}}>{loc.name}</span>
            </div>
            <div className="section-label">Hood Cleaning {loc.name}</div>
            <h1 style={{
              fontFamily:'var(--font-display)', fontSize:'clamp(2.5rem, 5vw, 4rem)',
              fontWeight:900, color:'var(--white)', textTransform:'uppercase',
              lineHeight:1, marginBottom:'20px'
            }}>
              Commercial Hood Cleaning<br />
              <span style={{color:'var(--orange)'}}>{loc.name}</span>, CA
            </h1>
            <p style={{color:'rgba(255,255,255,0.65)', fontSize:'1.1rem', marginBottom:'36px', lineHeight:1.7}}>
              {loc.description}
            </p>
            <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">
                🗓 Book Free Quote in {loc.name}
              </a>
              <a href="tel:8583612570" className="btn-secondary">
                📞 (858) 361-2570
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:'64px', alignItems:'start'}}>
            <div>
              <h2 style={{
                fontFamily:'var(--font-display)', fontSize:'1.8rem', fontWeight:900,
                textTransform:'uppercase', marginBottom:'20px'
              }}>
                Hood Cleaning Services in {loc.name}
              </h2>
              <p style={{color:'var(--gray-text)', lineHeight:1.8, marginBottom:'20px'}}>
                {loc.blurb}
              </p>
              <p style={{color:'var(--gray-text)', lineHeight:1.8, marginBottom:'32px'}}>
                We serve {loc.restaurants} throughout {loc.name} and the surrounding {loc.county} area. All services are performed by NFPA 96 certified technicians with full before/after photo documentation and compliance certificates.
              </p>

              <h3 style={{
                fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:900,
                textTransform:'uppercase', marginBottom:'16px'
              }}>
                Neighborhoods We Serve in {loc.name}
              </h3>
              <div style={{display:'flex', flexWrap:'wrap', gap:'8px', marginBottom:'32px'}}>
                {loc.neighborhoods.map(n => (
                  <span key={n} style={{
                    padding:'6px 14px', background:'var(--white)', border:'1px solid var(--gray-light)',
                    borderRadius:'100px', fontSize:'0.875rem', fontWeight:600
                  }}>{n}</span>
                ))}
              </div>

              <h3 style={{
                fontFamily:'var(--font-display)', fontSize:'1.2rem', fontWeight:900,
                textTransform:'uppercase', marginBottom:'16px'
              }}>
                What&apos;s Included with Every {loc.name} Hood Cleaning
              </h3>
              <ul style={{listStyle:'none', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'32px'}}>
                {[
                  'Hood Interior & Exterior Cleaning',
                  'Grease Duct Cleaning',
                  'Exhaust Fan Service',
                  'Filter Degreasing',
                  'Before & After Photos',
                  'NFPA 96 Compliance Certificate',
                  'Service Report',
                  'Free Re-Service if Needed'
                ].map(item => (
                  <li key={item} style={{
                    padding:'10px 14px', background:'var(--white)', borderRadius:'4px',
                    fontSize:'0.875rem', display:'flex', alignItems:'center', gap:'8px',
                    border:'1px solid var(--gray-light)'
                  }}>
                    <span style={{color:'var(--orange)', fontWeight:700}}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SIDEBAR */}
            <div style={{position:'sticky', top:'90px'}}>
              <div style={{
                background:'var(--white)', borderRadius:'8px', padding:'36px',
                border:'1px solid var(--gray-light)', boxShadow:'var(--shadow)'
              }}>
                <h3 style={{
                  fontFamily:'var(--font-display)', fontSize:'1.3rem', fontWeight:900,
                  textTransform:'uppercase', marginBottom:'8px'
                }}>
                  Get a Free Quote in {loc.name}
                </h3>
                <p style={{fontSize:'0.875rem', color:'var(--gray-text)', marginBottom:'20px'}}>
                  Same-day estimates. NFPA 96 certified.
                </p>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning"
                  className="btn-primary" style={{width:'100%', justifyContent:'center', marginBottom:'12px', display:'flex'}}>
                  📅 Book Online
                </a>
                <a href="tel:8583612570" style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                  padding:'14px', border:'2px solid var(--gray-light)', borderRadius:'4px',
                  fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.1rem',
                  color:'var(--charcoal)', marginBottom:'20px', transition:'all 0.2s'
                }}>
                  📞 (858) 361-2570
                </a>
                <div style={{
                  paddingTop:'20px', borderTop:'1px solid var(--gray-light)',
                  display:'flex', flexDirection:'column', gap:'8px'
                }}>
                  {['⭐ 40+ Five-Star Google Reviews', '✅ NFPA 96 Certified Technicians', '🛡️ Licensed & Fully Insured', '📸 Before & After Photos', '⚡ 24/7 Emergency Service'].map(item => (
                    <div key={item} style={{fontSize:'0.8rem', color:'var(--gray-text)', fontWeight:600}}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Need Hood Cleaning in {loc.name}?</h2>
          <p>NFPA 96 certified service with same-day availability. Join 200+ San Diego County restaurants that trust Core.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">
              📅 Book Free Quote
            </a>
            <a href="tel:8583612570" className="btn-secondary">
              📞 (858) 361-2570
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div style={{
            paddingBottom:'32px', borderBottom:'1px solid rgba(255,255,255,0.06)',
            display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px'
          }}>
            <Link href="/" className="nav-logo">CORE <span style={{color:'var(--orange)'}}>HOOD</span> CLEANING</Link>
            <a href="tel:8583612570" style={{color:'var(--orange)', fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.2rem'}}>
              (858) 361-2570
            </a>
          </div>
          <div style={{paddingTop:'32px', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:'16px'}}>
            <p style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.3)'}}>
              © {new Date().getFullYear()} Core Hood Cleaning | Hood Cleaning {loc.name}, CA
            </p>
            <Link href="/" style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.3)'}}>← Back to Home</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
