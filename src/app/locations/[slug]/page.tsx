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
  'mission-valley': {
    name: 'Mission Valley',
    title: 'Hood Cleaning Mission Valley',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Mission Valley, Fashion Valley, Hazard Center, Hotel Circle, and the I-8 corridor. NFPA 96 certified service for restaurants, hotel kitchens, and food courts.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Mission Valley — one of San Diego's highest-volume dining corridors. From Fashion Valley and Mission Valley Center food courts to the hotel kitchens lining Hotel Circle and the full-service restaurants along Friars Road, Mission Valley kitchens run hard. High daily covers, extended operating hours, and proximity to SDSU mean most operations here need cleaning at the top of the NFPA 96 frequency scale. We schedule around your service windows and complete full-system cleaning from hood canopy to rooftop fan on every visit.",
    whyUs: "Mission Valley's restaurant density and volume are among the highest in San Diego County. National chains, hotel food and beverage operations, and independently owned full-service restaurants all operate side by side — and health and fire inspections are frequent. We carry full NFPA 96 documentation on every job, coordinate with hotel engineering and property management teams, and work the late-night windows after last call so you're compliant before your morning prep crew arrives.",
    neighborhoods: [
      { name: 'Fashion Valley & Hotel Circle', desc: 'Hotel kitchens, upscale mall dining, and resort food and beverage operations along Hotel Circle Drive. We coordinate with hotel engineering teams and work to brand documentation standards.' },
      { name: 'Mission Valley Center & Hazard Center', desc: 'High-volume food court and inline restaurant operations. National chain standards, mall property management coordination, and consistent after-hours scheduling.' },
      { name: 'Friars Road Corridor', desc: 'Full-service restaurants, breweries, and sports bars along the I-8 corridor. Game day and event-night volume spikes drive demand for monthly service for many operators here.' },
      { name: 'SDSU Adjacent & College Area', desc: 'Casual dining, late-night restaurants, and high-volume fast casual operations catering to university traffic. Extended hours and student-driven volume put kitchens at the top of cleaning frequency requirements.' },
    ],
    faqs: [
      { q: 'Do you service hotel kitchens in the Hotel Circle area?', a: 'Yes. We regularly service hotel food and beverage kitchens throughout Mission Valley. We coordinate directly with engineering teams, work to hotel documentation standards, and complete service during agreed overnight windows.' },
      { q: 'How often do Mission Valley restaurants need hood cleaning?', a: 'Mission Valley is a high-volume dining corridor. Most full-service restaurants and hotel kitchens here need quarterly service at minimum. High-volume bars and restaurants with extended hours often qualify for monthly service under NFPA 96.' },
      { q: 'Can you service mall and food court kitchens?', a: 'Yes. We have experience with mall property management requirements, food court exhaust systems, and inline restaurant configurations at Fashion Valley, Mission Valley Center, and Hazard Center.' },
      { q: 'What if I need emergency service after a failed inspection?', a: 'Call (858) 361-2570. We offer same-day emergency hood cleaning throughout Mission Valley and can often dispatch the same evening. We\'ve resolved red tag situations for Mission Valley operators within 24 hours.' },
    ],
    heroImage: '/images/tech-kitchen-cleaning.jpg',
  },
  'chula-vista': {
    name: 'Chula Vista',
    title: 'Hood Cleaning Chula Vista',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Chula Vista, Eastlake, Otay Ranch, Third Avenue Village, and the South Bay corridor. NFPA 96 certified service for South Bay restaurants.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Chula Vista and the South Bay. Chula Vista is one of the fastest-growing cities in California, and its restaurant scene has grown with it. From the Third Avenue Village neighborhood dining district to the sprawling commercial corridors in Eastlake and Otay Ranch, Chula Vista kitchens range from family-owned taquerias to national chain operations to full-service hotel food and beverage. Every kitchen has the same NFPA 96 compliance obligation, and we service all of them with the same full-system cleaning from hood canopy to rooftop fan.",
    whyUs: "Chula Vista's growth means newer commercial kitchens and stricter code enforcement from both the City of Chula Vista Fire Department and San Diego County Health. NFPA 96 compliance certificates must be current and complete. We provide full photo documentation, a signed compliance certificate, and an NFPA 96 sticker on the hood on every job. We schedule after closing so your kitchen is clean and compliant before your crew arrives the next morning.",
    neighborhoods: [
      { name: 'Third Avenue Village', desc: 'Chula Vista\'s historic downtown dining district. Full-service restaurants, bars, and cafes in mixed-use buildings with varying access. We navigate the street access and scheduling constraints this area requires.' },
      { name: 'Eastlake & Otay Ranch', desc: 'The fastest-growing commercial corridors in Chula Vista. National chains, neighborhood restaurants, and food court operations in newer commercial centers with modern kitchen exhaust systems.' },
      { name: 'Palomar Street & Broadway Corridor', desc: 'High-density commercial strip with full-service restaurants, fast casual, and legacy South Bay operators. Heavy kitchen volume and consistent health department presence make NFPA 96 documentation essential.' },
      { name: 'South Bay & Olympic Training Center Area', desc: 'Restaurants and food service operations in the south Chula Vista commercial areas. We serve the full range of operators in the South Bay including catering operations and institutional food service.' },
    ],
    faqs: [
      { q: 'Do you serve all of Chula Vista including Eastlake and Otay Ranch?', a: 'Yes. We service the entire City of Chula Vista including Third Avenue, Eastlake, Otay Ranch, the Palomar Street corridor, and all surrounding commercial areas.' },
      { q: 'How does the City of Chula Vista enforce hood cleaning compliance?', a: 'Chula Vista Fire and San Diego County Health both inspect commercial kitchens. Fire marshals look for a current NFPA 96 compliance certificate and sticker on the hood. Health inspectors note overdue service as a violation. Our documentation satisfies both.' },
      { q: 'How often do Chula Vista restaurants need hood cleaning?', a: 'Cleaning frequency depends on cooking type and volume. Most full-service restaurants need quarterly service. High-volume operations and those using solid fuel or wok cooking may need monthly service. We assess your kitchen and recommend the correct NFPA 96 interval.' },
      { q: 'Do you offer emergency hood cleaning in South Bay?', a: 'Yes. Same-day emergency service is available throughout Chula Vista and the South Bay. Call (858) 361-2570 and we\'ll dispatch a technician to your location.' },
    ],
    heroImage: '/images/hero-commercial-kitchen.jpg',
  },
  'oceanside': {
    name: 'Oceanside',
    title: 'Hood Cleaning Oceanside',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Oceanside, Camp Pendleton corridor, Downtown Oceanside, and North County coast. NFPA 96 certified service for restaurants, bars, and institutional kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Oceanside and the North County coast. Oceanside's restaurant scene has expanded significantly with the revitalization of downtown Mission Avenue, a growing craft brewery presence, and strong demand from operators serving the Camp Pendleton corridor. From oceanfront restaurants at the Pier to high-volume sports bars and breweries in the redeveloping downtown to institutional food service near base, Oceanside kitchens run busy schedules that demand compliant, reliable hood cleaning. We serve all of them with full-system NFPA 96 cleaning on every visit.",
    whyUs: "Oceanside is at the northern edge of our San Diego County service area, but we run regular routes to North County and serve Oceanside operators on a consistent schedule. The City of Oceanside Fire Department and San Diego County Health enforce NFPA 96 compliance — our documentation package satisfies both. We schedule overnight and after-hours service so your kitchen is cleaned and compliant before morning prep, and we offer same-day emergency response for red tag situations throughout North County.",
    neighborhoods: [
      { name: 'Downtown Oceanside & Mission Avenue', desc: 'Oceanside\'s fastest-growing dining corridor. Craft breweries, farm-to-table restaurants, wine bars, and a growing nightlife scene. Late-night service windows and high cooking volume put most operators here on quarterly or monthly cleaning schedules.' },
      { name: 'Oceanside Pier & Coastal', desc: 'Oceanfront restaurants, beach bars, and waterfront dining. Salt air accelerates corrosion on exhaust fans and ductwork. We inspect for salt damage on every visit and document any issues found.' },
      { name: 'Camp Pendleton Corridor & El Camino Real', desc: 'Restaurants, fast casual, and full-service dining serving the military community along El Camino Real and adjacent commercial strips. High consistent volume and a demanding customer base that values reliability.' },
      { name: 'North County Institutional', desc: 'School cafeterias, healthcare facility kitchens, and institutional food service operations throughout North Oceanside. Institutional kitchens have specific compliance timelines and documentation requirements that we meet on every visit.' },
    ],
    faqs: [
      { q: 'Do you service breweries and taprooms in Oceanside?', a: 'Yes. Oceanside has a strong and growing craft brewery scene. We service brewery kitchens, taproom food programs, and restaurant operations with full NFPA 96 compliance documentation on every visit.' },
      { q: 'How does salt air affect exhaust systems in coastal Oceanside?', a: 'Significantly. Exhaust fans, access panels, ductwork joints, and hinged components corrode faster in the marine environment. We inspect for corrosion on every visit, lubricate moving parts, and document any concerns found for your maintenance records.' },
      { q: 'How often do Oceanside restaurants need hood cleaning?', a: 'Most Oceanside full-service restaurants need quarterly cleaning. High-volume operations, downtown breweries with busy kitchen programs, and restaurants open extended hours often need monthly service under NFPA 96.' },
      { q: 'Is Oceanside within your service area?', a: 'Yes. Oceanside is within our North County service corridor. We run regular routes to Oceanside and schedule service throughout North San Diego County. Call (858) 361-2570 for availability.' },
    ],
    heroImage: '/images/tech-rooftop-palms.jpg',
  },
}

// Generate remaining locations with standard template
const STANDARD_LOCATIONS = [
  'carlsbad', 'escondido',
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
          {['NFPA 96 Certified','Photo Documentation Included','Same-Day Emergency Service','Fully Licensed & Insured','4.9/5 on Google'].map(t => (
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
