import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const LOCATIONS: Record<string, {
  name: string
  title: string
  heroDesc: string
  intro: string
  whyUs: string
  neighborhoods: { name: string; desc: string }[]
  faqs: { q: string; a: string }[]
  heroImage: string
}> = {
  'pacific-beach': {
    name: 'Pacific Beach',
    title: 'Hood Cleaning Pacific Beach',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Pacific Beach, Mission Beach, and surrounding coastal areas. NFPA 96 certified, same-day emergency service available.',
    intro: "Core Hood Cleaning is Pacific Beach's trusted commercial kitchen exhaust cleaning company. We serve restaurants, bars, breweries, and beachfront kitchens throughout PB with full-system NFPA 96 certified hood cleaning. From the bustling Garnet Avenue restaurant row to beachfront establishments on Ocean Front Walk, PB restaurants rely on us to stay compliant and fire-safe year-round.",
    whyUs: "Pacific Beach's vibrant dining and nightlife scene demands reliable, professional hood cleaning. High cooking volumes during peak summer season, extended operating hours, and strict San Diego fire code enforcement in this dense commercial area make consistent maintenance critical. We offer late-night scheduling, same-day emergency service, and full photo documentation on every job.",
    neighborhoods: [
      { name: 'Garnet Avenue Restaurant District', desc: 'The heart of Pacific Beach dining. We serve the entire Garnet corridor all the restaurants, bars, breweries, and nightlife establishments that make this strip one of San Diego\'s busiest.' },
      { name: 'Ocean Front Walk & Boardwalk', desc: 'Beachfront restaurants, bars, and cafes with ocean views. We handle the unique challenges of salt air exposure, difficult rooftop access, and seasonal volume spikes.' },
      { name: 'Mission Beach', desc: 'Mission Boulevard restaurants, boardwalk concessions, and local kitchen operations. We navigate the access challenges and parking restrictions in this dense beachfront area.' },
      { name: 'North Pacific Beach', desc: 'Cass Street, Tourmaline Street, and residential neighborhood restaurants. Family-friendly dining spots, cafes, and local favorites throughout north PB.' },
    ],
    faqs: [
      { q: 'Do you offer same-day hood cleaning in Pacific Beach?', a: 'Yes. If you\'ve been red-tagged or have an urgent inspection, we offer same-day emergency service throughout Pacific Beach. Call (858) 361-2570.' },
      { q: 'How often do Pacific Beach restaurants need hood cleaning?', a: 'High-volume PB bars and restaurants typically need monthly cleaning. Most full-service restaurants need quarterly service. We\'ll assess your volume and recommend the right frequency.' },
      { q: 'Can you clean our hood after midnight?', a: 'Absolutely. Many Pacific Beach bars and late-night restaurants need service after 11 PM or midnight. We schedule around your operating hours.' },
      { q: 'Does salt air affect our exhaust system?', a: 'Yes, significantly. Beachfront locations experience accelerated corrosion on exhaust fans, access panels, and ductwork. We inspect for salt damage on every visit.' },
    ],
    heroImage: '/images/hero-commercial-kitchen.jpg',
  },
  'la-jolla': {
    name: 'La Jolla',
    title: 'Hood Cleaning La Jolla',
    heroDesc: 'Professional commercial kitchen hood cleaning serving La Jolla Village, La Jolla Shores, UTC, and surrounding areas. NFPA 96 certified service for fine dining, hotels, and resorts.',
    intro: "Core Hood Cleaning is La Jolla's premier commercial kitchen exhaust cleaning company. We serve upscale restaurants, luxury hotels, resort kitchens, and fine dining establishments throughout La Jolla with full-system NFPA 96 certified hood cleaning. From intimate bistros on Girard Avenue to spectacular oceanfront venues at La Jolla Cove, we provide the professional service La Jolla's dining scene demands.",
    whyUs: "La Jolla restaurants serve discerning clientele with high expectations. Hood cleaning must be professional, discreet, and completed without disrupting guest experience. We schedule service during closed hours, arrive in uniform, and treat every kitchen with the same care we'd want for our own. Every job includes full photo documentation and a compliance certificate valid for fire marshals, health departments, and insurance carriers.",
    neighborhoods: [
      { name: 'La Jolla Village & Downtown La Jolla', desc: 'The heart of La Jolla dining on Girard Avenue, Prospect Street, and surrounding streets. Fine dining establishments, bistros, wine bars, cafes, and upscale casual restaurants.' },
      { name: 'La Jolla Shores & Coastal', desc: 'Oceanfront dining along Avenida de la Playa and beachfront properties. We handle salt air exposure, coastal commission requirements, and difficult beach access.' },
      { name: 'University City (UTC)', desc: 'Westfield UTC mall restaurants, The Shops at La Jolla Village, and surrounding commercial dining. Experience with mall property management and chain restaurant standards.' },
      { name: 'Luxury Hotels & Resorts', desc: 'Lodge at Torrey Pines, Estancia La Jolla, La Valencia, and other luxury properties. We coordinate directly with executive chefs and engineering teams.' },
    ],
    faqs: [
      { q: 'Do you work overnight to avoid disrupting dinner service?', a: 'Yes. Most La Jolla fine dining establishments require service after 10 PM. We routinely schedule overnight service, completing before morning prep begins.' },
      { q: 'How do you handle oceanfront salt air corrosion?', a: 'We perform detailed corrosion inspections during every service, checking fans, hinges, access panels, and ductwork. We lubricate moving parts and document any issues found.' },
      { q: 'Do you work with luxury hotel brand standards?', a: 'Yes. We have experience with five-star hotel operations, documentation requirements, and coordination protocols with executive chefs and property management.' },
      { q: 'What areas of La Jolla do you serve?', a: 'All of La Jolla including La Jolla Village, La Jolla Shores, La Jolla Cove, Bird Rock, Windansea, UTC, Torrey Pines, and surrounding areas.' },
    ],
    heroImage: '/images/tech-hood-interior.jpg',
  },
  'downtown-san-diego': {
    name: 'Downtown San Diego',
    title: 'Hood Cleaning Downtown San Diego',
    heroDesc: 'Professional commercial kitchen exhaust cleaning serving Downtown San Diego, Gaslamp Quarter, Little Italy, East Village, and Marina District. NFPA 96 certified.',
    intro: "Core Hood Cleaning provides comprehensive commercial kitchen exhaust system cleaning throughout Downtown San Diego. We serve restaurants, hotels, bars, and commercial kitchens in the Gaslamp Quarter, Little Italy, East Village, Marina District, and all of downtown SD. Downtown restaurants operate on razor-thin margins with back-to-back service we schedule around your hours and work efficiently to keep your kitchen running.",
    whyUs: "Downtown San Diego's restaurant scene is one of the most competitive in California. High-volume operations, older historic buildings with complex ductwork, and frequent health inspections make consistent professional maintenance essential. We offer late-night and overnight scheduling, same-day emergency response, and full NFPA 96 documentation on every service.",
    neighborhoods: [
      { name: 'Gaslamp Quarter', desc: 'High-volume bars, nightclubs with kitchens, and late-night restaurants. We know the Gaslamp schedule and work around it.' },
      { name: 'Little Italy', desc: 'Upscale Italian restaurants, bistros, and wine bars. Experience with narrow streets, historic buildings, and limited access.' },
      { name: 'East Village', desc: 'Breweries, craft cocktail bars, and Petco Park area restaurants. Coordinating with event schedules and high-volume game day operations.' },
      { name: 'Marina District', desc: 'Waterfront restaurants, hotel kitchens, and convention center catering. Experience with large commercial kitchen systems and hotel brand requirements.' },
    ],
    faqs: [
      { q: 'Do you work late nights in the Gaslamp?', a: 'Yes we schedule most downtown cleanings between 11 PM and 6 AM to avoid disrupting your service. We can also coordinate with building management for freight elevator access.' },
      { q: 'How often should Gaslamp and Little Italy restaurants clean their hoods?', a: 'Most Gaslamp and Little Italy restaurants need monthly service due to cooking volume. We\'ll assess your specific operation and recommend the right frequency for full compliance.' },
      { q: 'Do you handle historic buildings with unusual ductwork?', a: 'Yes. Many downtown kitchens are in historic buildings with aging ductwork requiring specialized cleaning. Our team has extensive experience with these systems.' },
      { q: 'What if I get red-tagged by the health department?', a: 'Call us immediately at (858) 361-2570. We offer same-day emergency service in downtown San Diego and have helped dozens of restaurants resolve red tag violations within 24 hours.' },
    ],
    heroImage: '/images/tech-rooftop-palms.jpg',
  },
}

// Generate remaining locations with standard template
const STANDARD_LOCATIONS = [
  'mission-valley', 'chula-vista', 'oceanside', 'carlsbad', 'escondido',
  'el-cajon', 'vista', 'san-marcos', 'national-city', 'la-mesa',
  'coronado', 'encinitas', 'del-mar', 'miramar', 'rancho-bernardo', 'poway', 'santee'
]

function getLocationData(slug: string) {
  if (LOCATIONS[slug]) return LOCATIONS[slug]
  const name = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return {
    name,
    title: `Hood Cleaning ${name}`,
    heroDesc: `Professional commercial kitchen hood cleaning serving ${name} and surrounding San Diego County areas. NFPA 96 certified, same-day emergency service available.`,
    intro: `Core Hood Cleaning provides full-system NFPA 96 certified commercial kitchen exhaust cleaning throughout ${name}. We serve restaurants, hotels, schools, bars, and commercial kitchens with professional hood cleaning, filter exchange programs, and compliance inspections. Every service includes before and after photo documentation and a compliance certificate accepted by San Diego County health departments, fire marshals, and insurance carriers.`,
    whyUs: `${name} restaurants trust Core Hood Cleaning because we show up on time, do the complete job from hood canopy to rooftop fan and give you the documentation you need to stay compliant. We're NFPA 96 certified, fully insured, and available for same-day emergency service when you need us most.`,
    neighborhoods: [
      { name: `${name} Restaurants`, desc: `Full-service restaurants, fast casual operations, and cafes throughout ${name}. We serve all sizes and cuisine types.` },
      { name: 'Bars & Breweries', desc: `Craft breweries, sports bars, and cocktail lounges in ${name} requiring compliant kitchen exhaust maintenance.` },
      { name: 'Hotels & Institutions', desc: `Hotel kitchens, school cafeterias, and institutional food service operations in the ${name} area.` },
      { name: 'Commercial Kitchens', desc: `Commissaries, catering operations, and commercial food production facilities serving ${name} and surrounding areas.` },
    ],
    faqs: [
      { q: `Do you offer same-day service in ${name}?`, a: `Yes. We offer same-day emergency hood cleaning throughout ${name}. Call (858) 361-2570 and we\'ll get a technician dispatched.` },
      { q: `How often do ${name} restaurants need hood cleaning?`, a: 'Cleaning frequency depends on cooking volume and equipment type. Most full-service restaurants need quarterly service. High-volume operations may need monthly cleaning. We\'ll assess your kitchen and recommend the right schedule.' },
      { q: 'What documentation do you provide?', a: 'Every service includes before and after photos, a detailed service report, and an NFPA 96 compliance certificate accepted by San Diego County health departments, fire marshals, and insurance carriers.' },
      { q: 'Do you clean the full exhaust system?', a: 'Yes every service covers the complete exhaust path from hood canopy through ductwork to the rooftop exhaust fan. No partial cleanings.' },
    ],
    heroImage: '/images/tech-kitchen-cleaning.jpg',
  }
}

export async function generateStaticParams() {
  const allSlugs = [
    ...Object.keys(LOCATIONS),
    ...STANDARD_LOCATIONS
  ]
  return allSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const loc = getLocationData(params.slug)
  return {
    title: `${loc.title} | NFPA 96 Certified | Core Hood Cleaning`,
    description: loc.heroDesc,
    alternates: { canonical: `https://www.corehoodcleaning.com/locations/${params.slug}` }
  }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = getLocationData(params.slug)

  return (
    <>
      <Nav />
{/* HERO */}
      <section style={{paddingTop:'0', minHeight:'55vh', background:'var(--black)', position:'relative', overflow:'hidden', display:'flex', alignItems:'center'}}>
        <div style={{position:'absolute', inset:0}}>
          <img src={loc.heroImage} alt={`Hood cleaning ${loc.name}`} style={{width:'100%', height:'100%', objectFit:'cover', opacity:0.35}} />
          <div style={{position:'absolute', inset:0, background:'linear-gradient(to right, rgba(0,0,0,0.92) 45%, rgba(0,0,0,0.55) 100%)'}} />
        </div>
        <div className="container" style={{position:'relative', zIndex:2, paddingTop:'140px', paddingBottom:'80px', maxWidth:'800px'}}>
          <Link href="/locations" style={{color:'rgba(238,239,226,0.45)', fontSize:'0.8rem', display:'inline-block', marginBottom:'20px', letterSpacing:'0.06em', textTransform:'uppercase', fontFamily:'var(--font-display)', fontWeight:700}}>All Locations</Link>
          <p className="section-label">{loc.name}, San Diego County</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2rem,5vw,4rem)', marginBottom:'24px'}}>{loc.title}</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.05rem', lineHeight:'1.8', marginBottom:'40px', maxWidth:'600px'}}>{loc.heroDesc}</p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          {['NFPA 96 Certified','Photo Documentation Included','Same-Day Emergency Service','Fully Licensed & Insured','40+ Five-Star Reviews'].map(t => (
            <div key={t} className="trust-pill"><span className="dot" />{t}</div>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section style={{padding:'80px 0', background:'var(--white)'}}>
        <div className="container">
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'64px', alignItems:'start'}}>
            <div>
              <p className="section-label">About Our Service</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>NFPA 96 Certified Hood Cleaning in {loc.name}</h2>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8', marginBottom:'20px'}}>{loc.intro}</p>
              <p style={{fontSize:'0.95rem', color:'var(--gray-text)', lineHeight:'1.8'}}>{loc.whyUs}</p>
              <div style={{marginTop:'32px', display:'flex', gap:'16px', flexWrap:'wrap'}}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Quote</a>
                <a href="tel:8583612570" className="btn-secondary">Call Now</a>
              </div>
            </div>
            <div>
              <p className="section-label">What's Included</p>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Full System Service on Every Visit</h2>
              {[
                'Hood canopy, baffles, and plenum chamber',
                'Grease filters removed, cleaned, and reinstalled',
                'Full ductwork run from plenum to rooftop',
                'Exhaust fan blades, housing, and curb',
                'Grease containment and proper disposal',
                'Before and after photo documentation',
                'NFPA 96 compliance certificate',
                'Written service report',
              ].map(item => (
                <div key={item} style={{display:'flex', gap:'12px', alignItems:'center', padding:'10px 0', borderBottom:'1px solid var(--gray-light)'}}>
                  <div style={{width:'8px', height:'8px', borderRadius:'50%', background:'var(--rust)', flexShrink:0}} />
                  <span style={{fontSize:'0.9rem', color:'var(--gray-text)'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{padding:'80px 0', background:'var(--off-white)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'48px'}}>
            <p className="section-label">Service Coverage</p>
            <h2 className="section-title">Areas We Serve in {loc.name}</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'20px'}}>
            {loc.neighborhoods.map(n => (
              <div key={n.name} style={{background:'var(--white)', border:'1px solid var(--gray-light)', borderTop:'4px solid var(--rust)', borderRadius:'8px', padding:'28px'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:900, textTransform:'uppercase', color:'var(--black)', marginBottom:'10px'}}>{n.name}</h3>
                <p style={{fontSize:'0.875rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CORE */}
      <section style={{padding:'80px 0', background:'var(--true-blue)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'48px'}}>
            <p className="section-label">Why Core</p>
            <h2 className="section-title light">Why {loc.name} Kitchens Choose Core</h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'20px'}}>
            {[
              { title:'NFPA 96 Certified', desc:'Every technician is certified to NFPA 96 standards. Your compliance certificate is valid for fire marshals, health departments, and insurance carriers.' },
              { title:'Photo Documentation', desc:'Before and after photos on every job no exceptions. You have visual proof of every service we perform.' },
              { title:'Night & Weekend Service', desc:'We work when your kitchen is closed. No disruption to your service, no lost revenue.' },
              { title:'Same-Day Emergency', desc:'Red-tagged? Urgent inspection? Call (858) 361-2570. We\'ll dispatch to your location as fast as possible.' },
            ].map(d => (
              <div key={d.title} style={{background:'rgba(0,0,0,0.2)', border:'1px solid rgba(238,239,226,0.08)', borderRadius:'8px', padding:'28px'}}>
                <div style={{width:'10px', height:'10px', borderRadius:'50%', background:'var(--rust)', marginBottom:'14px'}} />
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:800, textTransform:'uppercase', color:'var(--off-white)', marginBottom:'8px'}}>{d.title}</h3>
                <p style={{fontSize:'0.875rem', color:'rgba(238,239,226,0.55)', lineHeight:'1.6'}}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{padding:'80px 0', background:'var(--white)'}}>
        <div className="container" style={{maxWidth:'760px'}}>
          <div style={{textAlign:'center', marginBottom:'48px'}}>
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Common Questions from {loc.name} Restaurants</h2>
          </div>
          <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            {loc.faqs.map(f => (
              <div key={f.q} style={{background:'var(--off-white)', border:'1px solid var(--gray-light)', borderRadius:'8px', padding:'28px'}}>
                <h3 style={{fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:800, textTransform:'uppercase', color:'var(--black)', marginBottom:'10px'}}>{f.q}</h3>
                <p style={{fontSize:'0.9rem', color:'var(--gray-text)', lineHeight:'1.7'}}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'80px 0', background:'var(--rust)'}}>
        <div className="cta-inner">
          <h2>Schedule Hood Cleaning in {loc.name}</h2>
          <p>Free quote, same-day response, NFPA 96 certified serving all of San Diego County.</p>
          <div className="cta-actions">
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-white">Book Online</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
