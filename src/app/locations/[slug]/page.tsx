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

// Fully customized additional location data
const EXTRA_LOCATIONS: typeof LOCATIONS = {
  'carlsbad': {
    name: 'Carlsbad',
    title: 'Hood Cleaning Carlsbad',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Carlsbad Village, Bressi Ranch, The Forum, and the Carlsbad coast. NFPA 96 certified service for restaurants, breweries, and resort kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Carlsbad, from the restaurants lining Carlsbad Village Drive to the chain and independent operators filling Bressi Ranch and The Forum at Carlsbad. Carlsbad's dining scene has grown substantially with the city's population, and so has the scrutiny from San Diego County Fire and Health. Whether you're running a busy coastal restaurant, a taproom kitchen, or a resort food and beverage operation, NFPA 96 compliance has to be current. We provide full-system cleaning from hood canopy to rooftop fan on every visit, with photo documentation and a compliance certificate on every job.",
    whyUs: "Carlsbad sits in our North County corridor and we run consistent routes through the area. The city attracts a mix of local regulars and tourist traffic that drives high cooking volume, especially in summer. We schedule service during your closed hours and provide the NFPA 96 documentation that satisfies San Diego County Health and Carlsbad Fire. No surprise fees, no partial cleanings.",
    neighborhoods: [
      { name: 'Carlsbad Village', desc: 'The historic downtown dining district along Carlsbad Village Drive and State Street. Independent restaurants, wine bars, cafes, and gastropubs with a mix of older buildings and newer commercial spaces.' },
      { name: 'Bressi Ranch & The Forum', desc: 'High-traffic retail and dining destinations in east Carlsbad. National chains, fast casual, and local restaurant operators in newer commercial developments with modern kitchen exhaust systems.' },
      { name: 'Carlsbad Coast & Carlsbad Boulevard', desc: 'Oceanfront restaurants, resort dining, and beachside cafes. Salt air exposure accelerates corrosion on exhaust fans and ductwork. We inspect and document on every service.' },
      { name: 'Palomar Airport Road Corridor', desc: 'Business park restaurants, hotel food and beverage, and commercial kitchens serving the industrial and tech sectors. Consistent volume from corporate lunch and catering operations.' },
    ],
    faqs: [
      { q: 'Do you service brewery kitchens in Carlsbad?', a: 'Yes. Carlsbad has a growing brewery and taproom scene. We service all brewery kitchen exhaust systems with full NFPA 96 documentation on every visit.' },
      { q: 'How often do Carlsbad restaurants need hood cleaning?', a: 'Most full-service restaurants in Carlsbad need quarterly service. High-volume operations, coastal restaurants with extended summer hours, and breweries with busy kitchen programs often need monthly cleaning under NFPA 96.' },
      { q: 'Do you serve Bressi Ranch and The Forum restaurants?', a: 'Yes. We service all commercial kitchen operators in Carlsbad including those in Bressi Ranch, The Forum, and surrounding commercial centers. Call (858) 361-2570 for scheduling.' },
      { q: 'What happens if we get red-tagged by Carlsbad Fire?', a: 'Call us immediately at (858) 361-2570. We offer same-day emergency hood cleaning in Carlsbad and can typically dispatch the same day or next morning. We provide the documentation Carlsbad Fire needs to clear the red tag.' },
    ],
    heroImage: '/images/tech-kitchen-cleaning.jpg',
  },
  'escondido': {
    name: 'Escondido',
    title: 'Hood Cleaning Escondido',
    heroDesc: 'Professional commercial kitchen hood cleaning serving downtown Escondido, Grand Avenue, the Highway 78 corridor, and surrounding North County inland areas. NFPA 96 certified.',
    intro: "Core Hood Cleaning provides full-system NFPA 96 certified hood cleaning throughout Escondido, North County's largest inland city. Downtown Escondido's Grand Avenue revitalization has brought new restaurants and breweries into older buildings with complex ductwork that demands thorough cleaning. The Highway 78 commercial corridor runs some of the highest restaurant volume in North County, with national chains and full-service independents running back-to-back service daily. We schedule around your hours and complete the full system from hood canopy to rooftop fan on every visit.",
    whyUs: "Escondido's location inland means extreme summer heat that accelerates grease buildup and puts kitchen exhaust systems under significant stress. Combined with active San Diego County Health and Escondido Fire enforcement, operators here cannot afford to let service dates slip. We provide same-day emergency response for red tag situations and carry complete NFPA 96 documentation on every scheduled service.",
    neighborhoods: [
      { name: 'Downtown Escondido & Grand Avenue', desc: 'The heart of Escondido\'s dining revival. Craft breweries, farm-to-table restaurants, and neighborhood bistros in historic buildings. Complex older ductwork requires experienced cleaning crews.' },
      { name: 'Highway 78 Corridor', desc: 'The highest-volume commercial dining stretch in North County inland. National chains, family dining, and fast casual operations running high daily covers. Most operators here qualify for monthly or quarterly NFPA 96 cleaning.' },
      { name: 'Stone Brewing World Bistro Area', desc: 'The Liberty Station of North County, anchored by one of San Diego\'s most well-known brewery operations. Surrounding restaurants and food and beverage businesses in a revitalized industrial setting.' },
      { name: 'Westfield North County & Centre City Pkwy', desc: 'Food court and inline restaurant operations in the mall commercial zone. National chain kitchen standards, property management coordination, and consistent after-hours scheduling.' },
    ],
    faqs: [
      { q: 'Does the summer heat in Escondido affect how often we need cleaning?', a: 'Yes. Inland heat accelerates grease breakdown and buildup in ductwork. Many Escondido operators need more frequent service than coastal kitchens with similar cooking volume. We assess your system and recommend the correct NFPA 96 interval.' },
      { q: 'Do you service craft breweries and taprooms in Escondido?', a: 'Yes. We service brewery kitchen exhaust systems throughout Escondido. Full-system cleaning, NFPA 96 compliance documentation, and photo proof on every visit.' },
      { q: 'How often do Highway 78 restaurants need hood cleaning?', a: 'High-volume operations along the 78 corridor typically need quarterly service at minimum. Many qualify for monthly cleaning under NFPA 96 based on cooking volume and extended operating hours.' },
      { q: 'Do you offer same-day emergency service in Escondido?', a: 'Yes. Call (858) 361-2570. We offer same-day emergency hood cleaning throughout Escondido and all of North County inland. We\'ve resolved red tag violations for Escondido restaurants within 24 hours.' },
    ],
    heroImage: '/images/tech-hood-interior.jpg',
  },
  'el-cajon': {
    name: 'El Cajon',
    title: 'Hood Cleaning El Cajon',
    heroDesc: 'Professional commercial kitchen hood cleaning serving El Cajon, Fletcher Hills, Rancho San Diego, and the East County corridor. NFPA 96 certified service for restaurants and commercial kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout El Cajon and the broader East County. El Cajon is one of San Diego's largest cities and its commercial dining corridors along Main Street, Magnolia Avenue, and Mission Gorge Road run significant volume. The city's diverse restaurant scene includes a thriving Middle Eastern and Mediterranean dining district, growing craft brewery presence, and high-volume fast casual and full-service operators. Every kitchen in El Cajon has the same NFPA 96 obligation, and we service all of them with full-system cleaning from hood to rooftop fan.",
    whyUs: "El Cajon's East County inland climate means high summer temperatures that stress kitchen exhaust systems and accelerate grease buildup. San Diego County Health and El Cajon Fire both inspect commercial kitchens and look for current NFPA 96 compliance documentation. We provide the full compliance package on every job and offer same-day emergency response for red tag situations throughout East County.",
    neighborhoods: [
      { name: 'Downtown El Cajon & Main Street', desc: 'El Cajon\'s commercial core. A diverse dining scene including Middle Eastern, Mediterranean, and American cuisine alongside bars, cafes, and quick-service operations. High foot traffic and active health inspection presence.' },
      { name: 'Magnolia Avenue Corridor', desc: 'One of El Cajon\'s primary commercial strips with full-service restaurants, fast casual, and neighborhood dining. Consistent kitchen volume and a broad mix of cooking equipment types.' },
      { name: 'Rancho San Diego & Fletcher Hills', desc: 'Growing residential and commercial areas with newer restaurant developments and strip mall dining. Shopping center kitchen operators on national and regional chain standards.' },
      { name: 'Mission Gorge Road & East County Breweries', desc: 'Mission Gorge has become a destination for East County\'s growing craft brewery scene alongside established full-service restaurants and commercial kitchen operations.' },
    ],
    faqs: [
      { q: 'Do you serve restaurants across all of El Cajon?', a: 'Yes. We service commercial kitchens throughout El Cajon including downtown, Magnolia Avenue, Rancho San Diego, Fletcher Hills, and all surrounding areas.' },
      { q: 'How often do El Cajon restaurants need hood cleaning?', a: 'Cleaning frequency depends on cooking type and volume. Most full-service restaurants need quarterly service. High-volume operations and those using wok cooking or charbroilers often need monthly cleaning under NFPA 96.' },
      { q: 'Do you service Middle Eastern and ethnic restaurants?', a: 'Yes. El Cajon has a thriving and diverse restaurant community. We service all cuisine types including Middle Eastern, Mediterranean, and international restaurants with the same full-system NFPA 96 service.' },
      { q: 'What documentation do we get after service?', a: 'Every service includes before and after photos of the full system, a detailed written service report, and an NFPA 96 compliance certificate accepted by San Diego County Health, El Cajon Fire, and your insurance carrier.' },
    ],
    heroImage: '/images/hero-commercial-kitchen.jpg',
  },
  'vista': {
    name: 'Vista',
    title: 'Hood Cleaning Vista',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Vista, Shadowridge, the downtown brewery district, and surrounding North County areas. NFPA 96 certified service for restaurants and taprooms.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Vista, one of North County's most active dining and brewing communities. Vista's downtown Eucalyptus Avenue corridor has become a destination for craft breweries, taprooms, and restaurants that draw traffic from across the region. Shadowridge and the surrounding commercial areas add significant volume from neighborhood restaurants, chain operations, and commercial kitchens. We provide full-system NFPA 96 cleaning from hood canopy to rooftop fan on every visit, with complete photo documentation and compliance certificates on every job.",
    whyUs: "Vista's growing brewery and restaurant scene operates in a mix of older downtown buildings and newer commercial developments, each presenting different cleaning challenges. San Diego County Health and Vista Fire both actively inspect commercial kitchens. We run regular routes through Vista and North County and can service your kitchen on a consistent schedule. Same-day emergency response is available for red tag situations.",
    neighborhoods: [
      { name: 'Downtown Vista & Eucalyptus Avenue', desc: 'Vista\'s craft brewery and dining hub. Multiple taprooms, restaurants, and food destinations that have turned downtown Vista into a North County destination. Older commercial buildings with varied exhaust system configurations.' },
      { name: 'Shadowridge & North Vista', desc: 'Residential and commercial growth areas with a mix of chain and independent restaurant operators in newer strip malls and commercial centers. Consistent cooking volume and standard exhaust systems.' },
      { name: 'Vista Village & South Santa Fe Avenue', desc: 'The historic commercial core of Vista with full-service restaurants, cafes, and long-established dining operations. A mix of building ages and exhaust system types.' },
      { name: 'Highway 78 & Business Park Corridor', desc: 'Commercial and industrial kitchens, corporate catering, and restaurant operators along the 78 corridor. Business lunch and catering volume drives consistent kitchen output.' },
    ],
    faqs: [
      { q: 'Do you service Vista\'s brewery and taproom kitchens?', a: 'Yes. Vista has one of North County\'s most active craft brewery scenes. We service all brewery kitchen exhaust systems with full NFPA 96 documentation including photo proof on every visit.' },
      { q: 'How often do Vista restaurants need hood cleaning?', a: 'Most Vista full-service restaurants need quarterly service. High-volume operations, busy brewery kitchens, and restaurants with extended hours often qualify for monthly cleaning under NFPA 96. We assess your operation and recommend the correct interval.' },
      { q: 'Do you work with older downtown Vista buildings?', a: 'Yes. Downtown Vista has a mix of older commercial buildings with aging ductwork and varied exhaust system configurations. We have experience cleaning complex and non-standard systems.' },
      { q: 'Is Vista within your regular service area?', a: 'Yes. Vista is within our North County service corridor and we run regular scheduled routes through the area. Call (858) 361-2570 to get on our schedule.' },
    ],
    heroImage: '/images/tech-rooftop-palms.jpg',
  },
  'san-marcos': {
    name: 'San Marcos',
    title: 'Hood Cleaning San Marcos',
    heroDesc: 'Professional commercial kitchen hood cleaning serving San Marcos, Cal State San Marcos, San Elijo Hills, and the Highway 78 corridor. NFPA 96 certified for restaurants and institutional kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout San Marcos, a city whose restaurant scene has grown in step with its rapid population expansion. The Cal State San Marcos campus generates consistent demand from restaurant operators on and near campus. San Elijo Hills and Twin Oaks Valley Road commercial corridors have brought dozens of new restaurant operations to the area in recent years. We serve them all with full-system NFPA 96 cleaning on every visit, complete with photo documentation and compliance certificates.",
    whyUs: "San Marcos is in our North County service corridor and we schedule consistent routes through the area. The student and residential base here drives high kitchen volume at competitive price points, meaning operators run equipment hard. Consistent NFPA 96 compliance maintenance protects your license, your insurance, and your kitchen. We offer same-day emergency response for red tag situations and schedule overnight service so your morning crew arrives to a clean, compliant system.",
    neighborhoods: [
      { name: 'Cal State San Marcos Area & Discovery Street', desc: 'University-adjacent restaurants, fast casual, and dining operations that run high volume during the academic year. Student traffic drives extended hours and heavy kitchen output.' },
      { name: 'San Elijo Hills Town Center', desc: 'San Marcos\'s newest and fastest-growing commercial dining district. Modern restaurant operations in a planned community commercial center with newer kitchen exhaust systems.' },
      { name: 'Twin Oaks Valley Road & Highway 78 Corridor', desc: 'High-traffic commercial strip with national chains, neighborhood restaurants, and full-service dining. One of the busiest commercial kitchen concentrations in North County.' },
      { name: 'Richmar Industrial Area', desc: 'Commissaries, catering operations, and commercial food production facilities in San Marcos\'s industrial zone. Large-scale kitchen exhaust systems with significant cleaning needs.' },
    ],
    faqs: [
      { q: 'Do you service restaurant kitchens near Cal State San Marcos?', a: 'Yes. We service all commercial kitchens in the San Marcos area including those near the CSUSM campus. University-adjacent restaurants often have extended hours and high volume that drives more frequent cleaning needs.' },
      { q: 'How often do San Marcos restaurants need hood cleaning?', a: 'Frequency depends on cooking volume and equipment type. Most full-service restaurants need quarterly service. High-volume operations and those near the university often need monthly cleaning under NFPA 96.' },
      { q: 'Do you serve newer commercial developments in San Elijo Hills?', a: 'Yes. San Elijo Hills and all San Marcos commercial areas are within our service corridor. Newer developments have modern exhaust systems that are straightforward to maintain on a compliant schedule.' },
      { q: 'What documentation do San Marcos fire and health inspectors accept?', a: 'San Diego County Health and San Marcos Fire Department accept our NFPA 96 compliance certificates. Every service includes the certificate, a full written service report, and before and after photo documentation.' },
    ],
    heroImage: '/images/tech-kitchen-cleaning.jpg',
  },
  'national-city': {
    name: 'National City',
    title: 'Hood Cleaning National City',
    heroDesc: 'Professional commercial kitchen hood cleaning serving National City, the Mile of Cars corridor, Highland Avenue, and the South Bay. NFPA 96 certified service for restaurants and commercial kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout National City and the South Bay. National City's dining scene spans Highland Avenue's established neighborhood restaurants, the Sweetwater Crossing commercial area, and a growing number of independent operators serving the city's diverse population. National City Fire and San Diego County Health actively inspect commercial kitchens and require current NFPA 96 compliance documentation. We provide full-system cleaning from hood canopy to rooftop fan on every visit and give you the documentation that keeps your kitchen compliant.",
    whyUs: "National City is a densely commercial city with a high concentration of independent restaurant operators. Many of these kitchens run extended hours, high cooking volumes, and equipment that demands consistent maintenance. We schedule service during your closed hours and respond same-day for emergency situations. Our full NFPA 96 documentation package satisfies both National City Fire and San Diego County Health inspectors.",
    neighborhoods: [
      { name: 'Highland Avenue Corridor', desc: 'National City\'s primary dining street with established neighborhood restaurants, taquerias, and full-service operations. High cooking volume and active health inspection presence.' },
      { name: 'Sweetwater Crossing & Plaza Bonita Area', desc: 'Commercial shopping and dining destination with national chains, food court operations, and inline restaurant tenants. Mall property management standards and consistent kitchen volume.' },
      { name: 'National City Mile of Cars & Bay Front', desc: 'Commercial and industrial areas with restaurant operators serving workers and families. Catering operations, quick service, and neighborhood dining along the bay front corridor.' },
      { name: 'Westside & 8th Street Corridor', desc: 'Neighborhood restaurants, bakeries, and independent operators serving National City\'s residential communities. A diverse mix of cuisine types with high community-driven volume.' },
    ],
    faqs: [
      { q: 'Do you service South Bay restaurants in National City?', a: 'Yes. National City is within our South Bay service area. We run regular routes through National City and surrounding South Bay communities. Call (858) 361-2570 to schedule.' },
      { q: 'How often do National City restaurants need hood cleaning?', a: 'Cleaning frequency depends on cooking type and volume. Most full-service restaurants in National City need quarterly service. Operations with high cooking volume, wok stations, or charbroilers may need monthly service under NFPA 96.' },
      { q: 'Does National City Fire accept your compliance certificate?', a: 'Yes. Our NFPA 96 compliance certificate is accepted by National City Fire Department and San Diego County Health. Every certificate includes the date of service, technician information, and a summary of work completed.' },
      { q: 'Do you offer same-day emergency hood cleaning in National City?', a: 'Yes. Call (858) 361-2570 for same-day emergency service. We\'ve helped National City restaurants resolve red tag violations and pass emergency inspections within 24 hours.' },
    ],
    heroImage: '/images/hero-commercial-kitchen.jpg',
  },
  'la-mesa': {
    name: 'La Mesa',
    title: 'Hood Cleaning La Mesa',
    heroDesc: 'Professional commercial kitchen hood cleaning serving La Mesa Village, Spring Street, and the East County corridor. NFPA 96 certified for restaurants, bars, and commercial kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout La Mesa, including the revitalized La Mesa Village dining district, the Spring Street commercial corridor, and neighborhood restaurants throughout the city. La Mesa Village has attracted new restaurants, wine bars, and craft operations to its walkable downtown, while El Cajon Boulevard and Spring Street continue to host established full-service restaurants and bars. We provide full-system NFPA 96 cleaning on every visit, with before and after photo documentation and a compliance certificate that satisfies San Diego County Health and La Mesa Fire.",
    whyUs: "La Mesa's restaurant scene serves a mix of longtime local regulars and a newer dining population drawn to the village scene. Kitchens run consistent volume year-round. San Diego County Health and La Mesa Fire inspect commercial kitchens and require up-to-date NFPA 96 compliance. We schedule service during your closed hours, complete the full system from hood canopy to rooftop fan, and leave you with documentation ready for any inspector.",
    neighborhoods: [
      { name: 'La Mesa Village Downtown', desc: 'La Mesa\'s revitalized historic downtown with restaurants, wine bars, gastropubs, and neighborhood cafes. A mix of older commercial buildings and new tenant buildouts.' },
      { name: 'Spring Street & El Cajon Boulevard', desc: 'La Mesa\'s primary commercial corridors with full-service restaurants, bars, and established neighborhood dining. Consistent kitchen volume and a broad range of cooking equipment types.' },
      { name: 'Grossmont Center Area', desc: 'Shopping center and inline restaurant operators near Grossmont Center. National chains and regional restaurant brands with standard commercial kitchen exhaust configurations.' },
      { name: 'La Mesa Neighborhoods & Mt. Helix', desc: 'Neighborhood restaurants, cafes, and local eateries serving La Mesa\'s residential communities throughout the city including the Mt. Helix and Fletcher Hills areas.' },
    ],
    faqs: [
      { q: 'Do you service La Mesa Village restaurants?', a: 'Yes. La Mesa Village is within our East County service area. We service all commercial kitchens in the village and throughout La Mesa on a consistent schedule.' },
      { q: 'How often do La Mesa restaurants need hood cleaning?', a: 'Most La Mesa full-service restaurants need quarterly service. Bars and restaurants with extended hours or high cooking volume may need monthly cleaning under NFPA 96. We assess your kitchen and recommend the right frequency.' },
      { q: 'Does San Diego County Health accept your documentation in La Mesa?', a: 'Yes. Our NFPA 96 compliance certificates are accepted by San Diego County Health and La Mesa Fire Department. Every service includes the certificate, full written report, and before and after photos.' },
      { q: 'Do you offer same-day emergency service in La Mesa?', a: 'Yes. Call (858) 361-2570. We offer same-day emergency hood cleaning throughout La Mesa and East County.' },
    ],
    heroImage: '/images/tech-kitchen-cleaning.jpg',
  },
  'coronado': {
    name: 'Coronado',
    title: 'Hood Cleaning Coronado',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Coronado, Hotel del Coronado, Orange Avenue restaurants, and the Ferry Landing. NFPA 96 certified service for resort and restaurant kitchens.',
    intro: "Core Hood Cleaning provides full-system NFPA 96 certified hood cleaning throughout Coronado, including the resort kitchens at Hotel del Coronado, the restaurant row along Orange Avenue, and commercial kitchen operations at the Ferry Landing. Coronado's dining scene is driven by tourism, resort food and beverage, and a tight-knit community of local operators. Hotel del Coronado alone operates multiple kitchen venues requiring consistent compliance maintenance. We schedule service during closed hours, coordinate with hotel engineering teams, and provide the documentation package that hotel brand standards and San Diego County inspectors require.",
    whyUs: "Coronado's island location and salt air environment accelerate corrosion on exhaust fans, access panels, and ductwork. We inspect for salt damage on every visit, lubricate moving parts, and document any concerns found. Resort and hotel kitchen operations on Coronado have strict brand documentation requirements that we meet on every job. Same-day emergency response is available, though the bridge and ferry access make advance scheduling particularly valuable for Coronado operators.",
    neighborhoods: [
      { name: 'Hotel del Coronado & Resort Row', desc: 'Multiple restaurant and banquet kitchen venues across the historic resort property. Executive chef coordination, hotel brand documentation standards, and service during closed dining periods.' },
      { name: 'Orange Avenue Restaurant District', desc: 'Coronado\'s main commercial dining street with restaurants, cafes, wine bars, and local favorites. Year-round tourist and community traffic drives consistent kitchen volume.' },
      { name: 'Ferry Landing Marketplace', desc: 'Waterfront dining and commercial kitchen operations at the Ferry Landing. Bay-facing exposure and tourist traffic. Salt air corrosion is a consistent issue for kitchen exhaust systems here.' },
      { name: 'North Island & Coronado Cays', desc: 'Restaurant and food service operations serving the military community and residential areas of North Island and Coronado Cays. Institutional and residential-scale commercial kitchen operations.' },
    ],
    faqs: [
      { q: 'Do you service Hotel del Coronado kitchen operations?', a: 'Yes. We service resort and hotel kitchen exhaust systems throughout Coronado including large multi-venue properties. We coordinate with engineering teams and meet hotel brand documentation requirements.' },
      { q: 'How does Coronado\'s salt air affect our kitchen exhaust system?', a: 'Significantly. Coronado\'s bayside and oceanfront location accelerates corrosion on exhaust fans, hinges, access panels, and ductwork. We inspect for salt damage on every service and document any issues found for your maintenance records.' },
      { q: 'How do you schedule service given Coronado\'s island access?', a: 'We plan Coronado routes with the bridge crossing built in. We recommend scheduling in advance to ensure access during your preferred service window. Same-day emergency service is available by calling (858) 361-2570.' },
      { q: 'How often do Coronado hotels and restaurants need hood cleaning?', a: 'Hotel kitchens running multiple dining venues typically need monthly to quarterly service depending on volume. Orange Avenue restaurants usually need quarterly service. We assess your specific operation and recommend the NFPA 96 compliant interval.' },
    ],
    heroImage: '/images/tech-hood-interior.jpg',
  },
  'encinitas': {
    name: 'Encinitas',
    title: 'Hood Cleaning Encinitas',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Encinitas, Leucadia, Old Encinitas, Cardiff, and Moonlight Beach. NFPA 96 certified for coastal restaurants, cafes, and commercial kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Encinitas, from the coastal cafes and juice bars of Leucadia to the full-service restaurants in Old Encinitas and Cardiff-by-the-Sea. Encinitas has a unique dining culture driven by health-conscious cuisine, surf lifestyle, and a loyal local base that supports independent operators. The stretch along Coast Highway 101 from Leucadia through Cardiff is one of the most concentrated independent restaurant corridors in North County. We provide full-system NFPA 96 cleaning on every visit with photo documentation and a compliance certificate on every job.",
    whyUs: "Encinitas restaurants operate in a coastal environment where salt air accelerates corrosion on kitchen exhaust systems. Combined with San Diego County Health and San Diego County Fire enforcement, staying current on NFPA 96 service dates is not optional. We schedule service during your closed hours, work efficiently to minimize disruption, and provide the complete documentation package your inspectors need.",
    neighborhoods: [
      { name: 'Leucadia & North Coast Highway 101', desc: 'Eclectic cafes, surf-adjacent restaurants, and neighborhood dining spots along the 101 corridor. Independent operators with strong local followings and varied kitchen configurations.' },
      { name: 'Old Encinitas & Downtown', desc: 'The commercial heart of Encinitas with full-service restaurants, wine bars, and casual dining on and around South El Camino Real and Encinitas Boulevard. A mix of established operators and newer entrants.' },
      { name: 'Cardiff-by-the-Sea', desc: 'Beachside restaurants, cafes, and community dining spots along San Elijo Lagoon and the Cardiff coast. Salt air exposure and a devoted local customer base that drives consistent year-round volume.' },
      { name: 'Encinitas Ranch & El Camino Real', desc: 'East Encinitas commercial corridor with shopping center restaurants, national chains, and local operators serving the residential communities east of I-5.' },
    ],
    faqs: [
      { q: 'Do you service restaurants along the 101 in Leucadia and Encinitas?', a: 'Yes. The Coast Highway 101 corridor from Leucadia through Cardiff is within our regular North County route. We service all commercial kitchen operators along this stretch.' },
      { q: 'How does coastal salt air affect kitchen exhaust systems in Encinitas?', a: 'Salt air corrodes exhaust fan components, access panels, ductwork joints, and hinges faster than inland locations. We inspect for corrosion on every visit and document any issues found for your records.' },
      { q: 'How often do Encinitas restaurants need hood cleaning?', a: 'Most Encinitas full-service restaurants need quarterly service. High-volume operations and restaurants with extended summer hours may need monthly cleaning under NFPA 96. We assess and recommend the right schedule for your kitchen.' },
      { q: 'Do you offer same-day emergency service in Encinitas?', a: 'Yes. Same-day emergency hood cleaning is available throughout Encinitas and North County. Call (858) 361-2570 and we\'ll dispatch as quickly as possible.' },
    ],
    heroImage: '/images/tech-rooftop-palms.jpg',
  },
  'del-mar': {
    name: 'Del Mar',
    title: 'Hood Cleaning Del Mar',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Del Mar Village, Del Mar Highlands, Carmel Valley, and the Del Mar Racetrack area. NFPA 96 certified for upscale restaurants and seasonal operations.',
    intro: "Core Hood Cleaning provides NFPA 96 certified hood cleaning for commercial kitchens throughout Del Mar, including the upscale restaurants of Del Mar Village, the growing dining scene in Carmel Valley, and the high-volume catering and event operations that ramp up dramatically during racing season at the Del Mar Racetrack. Del Mar's dining scene skews toward fine dining, high-end casual, and oceanfront experiences that attract clientele with high expectations. We schedule service discreetly during closed hours and provide the full-system cleaning and documentation package that premium operations require.",
    whyUs: "Del Mar's seasonal volume swings demand a reliable service provider who can adapt. Racing season brings a surge of kitchen activity across Del Mar and Carmel Valley that puts exhaust systems under heavy stress. We proactively schedule service before and after peak periods and respond same-day for emergency situations. Salt air from the coast accelerates system corrosion, which we inspect for on every visit. Every job includes complete NFPA 96 documentation.",
    neighborhoods: [
      { name: 'Del Mar Village & Camino del Mar', desc: 'Upscale dining, oceanfront restaurants, and boutique cafes in Del Mar\'s walkable village center. High-expectation clientele and premium operations that require professional, discreet service.' },
      { name: 'Del Mar Racetrack & Fairgrounds', desc: 'Large-scale catering, concession, and event kitchen operations that ramp up significantly during racing and fair season. High-volume exhaust systems that need proactive compliance maintenance.' },
      { name: 'Carmel Valley & Del Mar Highlands', desc: 'Rapidly growing dining corridor with upscale casual, fine dining, and established chains in newer commercial developments east of I-5. High residential density driving consistent lunch and dinner volume.' },
      { name: 'One Paseo & Torrey Hills', desc: 'Mixed-use development bringing new restaurants and food and beverage concepts to the area. Modern kitchen configurations with standard commercial exhaust systems.' },
    ],
    faqs: [
      { q: 'How does racing season affect hood cleaning scheduling in Del Mar?', a: 'Racing season significantly increases kitchen volume at Del Mar restaurants and catering operations. We recommend scheduling service before the season starts and again after to handle the elevated grease load. Call ahead to secure your spot.' },
      { q: 'Do you service upscale Del Mar restaurants?', a: 'Yes. Del Mar\'s fine dining and upscale casual restaurants are within our regular service area. We schedule service discreetly during closed hours and operate professionally in all kitchen environments.' },
      { q: 'How often do Del Mar restaurants need hood cleaning?', a: 'Most Del Mar full-service restaurants need quarterly service. Operations that see significant volume increases during racing season may need more frequent service. We assess your kitchen and recommend the right NFPA 96 interval.' },
      { q: 'Do you service Carmel Valley restaurants?', a: 'Yes. Carmel Valley is within our service area. We service all commercial kitchens in Del Mar, Carmel Valley, Del Mar Highlands, and surrounding North Coastal communities.' },
    ],
    heroImage: '/images/tech-kitchen-cleaning.jpg',
  },
  'miramar': {
    name: 'Miramar',
    title: 'Hood Cleaning Miramar',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Miramar, Miramar Road, MCAS Miramar, and the Miramar craft brewery district. NFPA 96 certified for restaurants, breweries, and commercial kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout the Miramar area, including the restaurants lining Miramar Road, the craft brewery kitchens that have made Miramar one of San Diego's most recognized beer destinations, and commercial and institutional kitchen operations near MCAS Miramar. The Miramar Road commercial corridor runs some of the highest restaurant density in the region, including major national chain locations, hotel food and beverage, and established full-service independents. We provide full-system NFPA 96 cleaning on every visit with complete photo documentation.",
    whyUs: "Miramar's commercial kitchen concentration means active San Diego County Health and Fire enforcement. The brewery district in particular operates kitchens under high continuous volume. We schedule service during closed hours, complete the full system from hood canopy to rooftop exhaust fan, and provide the NFPA 96 documentation package that satisfies both county and military-adjacent compliance requirements. Same-day emergency response is available throughout Miramar.",
    neighborhoods: [
      { name: 'Miramar Craft Brewery District', desc: 'San Diego\'s most concentrated craft brewery zone, including major production breweries with substantial kitchen operations. High and continuous cooking volume demands consistent NFPA 96 maintenance.' },
      { name: 'Miramar Road Commercial Corridor', desc: 'One of San Diego\'s longest and busiest commercial strips with national chains, hotel food and beverage, and full-service restaurants. High daily covers and extended operating hours.' },
      { name: 'MCAS Miramar Adjacent', desc: 'Restaurants and food service operations serving the military community and commercial areas adjacent to the base. Consistent institutional and community-driven kitchen volume.' },
      { name: 'Miramar Industrial & Business Parks', desc: 'Commissaries, catering operations, and commercial food production facilities in Miramar\'s industrial zones. Large kitchen exhaust systems with significant cleaning requirements.' },
    ],
    faqs: [
      { q: 'Do you service brewery kitchens in the Miramar brewery district?', a: 'Yes. The Miramar brewery district is within our regular service area. We service all craft brewery kitchen exhaust systems with full NFPA 96 documentation on every visit.' },
      { q: 'How often do Miramar restaurants need hood cleaning?', a: 'Miramar Road is a high-volume commercial corridor. Most full-service restaurants here need quarterly service. Brewery kitchens and operations with extended hours often need monthly cleaning under NFPA 96.' },
      { q: 'Do you service hotel kitchens on Miramar Road?', a: 'Yes. We service hotel food and beverage operations throughout Miramar. We coordinate with hotel engineering teams and provide documentation that meets both county requirements and hotel brand standards.' },
      { q: 'Do you offer same-day emergency service in Miramar?', a: 'Yes. Call (858) 361-2570. Same-day emergency hood cleaning is available throughout the Miramar area. We\'ve helped Miramar operators resolve red tag violations within 24 hours.' },
    ],
    heroImage: '/images/hero-commercial-kitchen.jpg',
  },
  'rancho-bernardo': {
    name: 'Rancho Bernardo',
    title: 'Hood Cleaning Rancho Bernardo',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Rancho Bernardo, Bernardo Center Drive, Rancho Peñasquitos, and surrounding North County communities. NFPA 96 certified.',
    intro: "Core Hood Cleaning provides full-system NFPA 96 certified hood cleaning throughout Rancho Bernardo and surrounding North County communities. Rancho Bernardo's dining scene is centered along Bernardo Center Drive and the Westwood commercial corridors, serving a substantial residential base and significant business park and corporate campus population. The area also has an established senior living community with institutional kitchen operations that require consistent compliance maintenance. We service all of them with full-system cleaning and complete documentation on every visit.",
    whyUs: "Rancho Bernardo's inland location means high summer temperatures that accelerate grease accumulation in kitchen exhaust systems. San Diego County Health and Fire inspect commercial kitchens regularly throughout the area. We schedule service during closed hours, complete the full system on every visit, and provide NFPA 96 documentation that satisfies all inspectors. Our North County routes serve Rancho Bernardo on a consistent schedule.",
    neighborhoods: [
      { name: 'Bernardo Center Drive & Westwood', desc: 'Rancho Bernardo\'s primary dining corridor with national chains, neighborhood restaurants, and full-service operations serving the area\'s substantial residential and business population.' },
      { name: 'Rancho Bernardo Business Park', desc: 'Corporate campus cafeterias, catering operations, and employee dining facilities in one of San Diego\'s largest business park concentrations. Institutional kitchen standards and consistent weekday volume.' },
      { name: 'Senior Living Communities', desc: 'Institutional kitchen operations at the area\'s senior living and continuing care communities. Regular NFPA 96 compliance maintenance with documentation appropriate for institutional licensing.' },
      { name: 'Pomerado Road & East Bernardo', desc: 'Neighborhood restaurants, strip mall dining, and local operators serving the residential communities along Pomerado Road and east Rancho Bernardo.' },
    ],
    faqs: [
      { q: 'Do you service corporate campus cafeterias in Rancho Bernardo?', a: 'Yes. We service institutional and corporate kitchen exhaust systems in Rancho Bernardo\'s business park area. We coordinate with facilities teams and provide the documentation required for institutional compliance.' },
      { q: 'How often do Rancho Bernardo restaurants need hood cleaning?', a: 'Most Rancho Bernardo full-service restaurants need quarterly service. Corporate cafeterias and high-volume operations may need more frequent cleaning. We assess your kitchen and recommend the correct NFPA 96 interval.' },
      { q: 'Does summer heat in Rancho Bernardo affect our cleaning schedule?', a: 'Yes. Inland heat increases the rate at which grease accumulates in ductwork and on fans. Some operations that would be on a quarterly schedule in coastal areas need monthly service in the inland heat. We account for this in our assessment.' },
      { q: 'Is Rancho Bernardo within your service area?', a: 'Yes. Rancho Bernardo is within our North County service corridor. We run regular routes through the area and can get your kitchen on a consistent NFPA 96 maintenance schedule.' },
    ],
    heroImage: '/images/tech-hood-interior.jpg',
  },
  'poway': {
    name: 'Poway',
    title: 'Hood Cleaning Poway',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Poway, Community Road, Poway Road, and surrounding East North County. NFPA 96 certified for restaurants and commercial kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Poway, a growing community whose restaurant scene has expanded along Poway Road, Community Road, and the surrounding commercial corridors. Poway's family-oriented dining culture supports a strong base of independent restaurants, sports bars, and neighborhood eateries alongside national chain operations. We provide full-system NFPA 96 cleaning from hood canopy to rooftop fan on every visit, with photo documentation and a compliance certificate accepted by San Diego County Health and Poway Fire.",
    whyUs: "Poway's inland East County location means high summer heat that accelerates grease accumulation in exhaust systems. San Diego County Health and Poway Fire inspect commercial kitchens and require current NFPA 96 documentation. We schedule service during your closed hours, complete the full exhaust path on every visit, and leave you with documentation ready for any inspector. Same-day emergency response is available for red tag situations throughout East North County.",
    neighborhoods: [
      { name: 'Poway Road Corridor', desc: 'Poway\'s main commercial strip with full-service restaurants, fast casual, sports bars, and neighborhood dining. Consistent traffic from the residential communities north and south of the corridor.' },
      { name: 'Community Road & Midland Road', desc: 'Neighborhood commercial areas with local restaurants, cafes, and dining operations serving Poway\'s residential communities. A mix of independent operators and regional chain locations.' },
      { name: 'Old Poway Park Area', desc: 'The historic commercial and community hub near Old Poway Park with local restaurants and community-focused dining. Weekend and event traffic drives volume spikes.' },
      { name: 'Poway Business Park & Industrial', desc: 'Corporate cafeterias, catering operations, and commercial kitchen facilities in Poway\'s industrial and business park zones. Consistent institutional and employee dining volume.' },
    ],
    faqs: [
      { q: 'Do you service Poway Road restaurants?', a: 'Yes. Poway Road and all Poway commercial corridors are within our service area. We run regular routes through Poway and East North County.' },
      { q: 'How often do Poway restaurants need hood cleaning?', a: 'Most Poway full-service restaurants need quarterly service. Poway\'s hot inland summers can accelerate grease buildup, meaning some operations need more frequent cleaning than comparable kitchens in coastal areas.' },
      { q: 'What documentation do you provide in Poway?', a: 'Every service includes before and after photos of the full system, a written service report, and an NFPA 96 compliance certificate accepted by San Diego County Health and Poway Fire Department.' },
      { q: 'Do you offer same-day emergency hood cleaning in Poway?', a: 'Yes. Call (858) 361-2570 for same-day emergency service. We serve Poway and all of East North County and can typically dispatch the same day or next morning.' },
    ],
    heroImage: '/images/tech-rooftop-palms.jpg',
  },
  'santee': {
    name: 'Santee',
    title: 'Hood Cleaning Santee',
    heroDesc: 'Professional commercial kitchen hood cleaning serving Santee, Santee Town Center, Mission Gorge Road, and the East County corridor. NFPA 96 certified service for restaurants and commercial kitchens.',
    intro: "Core Hood Cleaning serves commercial kitchens throughout Santee, one of East County's fastest-growing cities. Santee Town Center, Mission Gorge Road, and the Cuyamaca Street commercial area host a growing roster of restaurants, sports bars, breweries, and quick-service operations serving Santee's substantial and expanding residential base. We provide full-system NFPA 96 cleaning from hood canopy to rooftop exhaust fan on every visit, with photo documentation and a compliance certificate on every job.",
    whyUs: "Santee's East County location means hot summers that accelerate grease buildup in kitchen exhaust systems. San Diego County Health and Santee Fire actively inspect commercial kitchens and require current NFPA 96 compliance documentation. We schedule service during your closed hours, respond same-day for red tag emergencies, and give you the complete documentation package your inspectors need. Our East County routes serve Santee on a consistent schedule.",
    neighborhoods: [
      { name: 'Santee Town Center & Mission Gorge Road', desc: 'Santee\'s primary commercial hub with national chains, neighborhood restaurants, and growing local operators. High foot traffic from the surrounding residential communities drives consistent daily volume.' },
      { name: 'Cuyamaca Street Corridor', desc: 'Santee\'s second major commercial strip with full-service restaurants, sports bars, and fast casual operations. Consistent residential traffic and a strong local dining community.' },
      { name: 'Magnolia Avenue & North Santee', desc: 'Neighborhood commercial areas serving North Santee residential communities. Local restaurants, cafes, and community dining spots with consistent neighborhood-driven volume.' },
      { name: 'Santee Business Park & Industrial', desc: 'Commercial and industrial kitchen operations including catering, commissaries, and corporate food service in Santee\'s growing business park area.' },
    ],
    faqs: [
      { q: 'Do you service Santee Town Center restaurants?', a: 'Yes. Santee Town Center and all Santee commercial areas are within our East County service corridor. We run regular routes through Santee and can get your kitchen on a consistent NFPA 96 schedule.' },
      { q: 'How often do Santee restaurants need hood cleaning?', a: 'Most Santee full-service restaurants need quarterly service. East County summer heat can increase cleaning frequency needs for high-volume operations. We assess your kitchen and recommend the correct interval under NFPA 96.' },
      { q: 'Do you service breweries and sports bars in Santee?', a: 'Yes. Santee\'s growing craft brewery and sports bar scene is within our service area. We service all commercial kitchen exhaust systems with full NFPA 96 documentation on every visit.' },
      { q: 'Do you offer same-day emergency hood cleaning in Santee?', a: 'Yes. Call (858) 361-2570. We offer same-day emergency service throughout Santee and East County. We\'ve helped East County operators resolve red tag violations within 24 hours.' },
    ],
    heroImage: '/images/hero-commercial-kitchen.jpg',
  },
}

// Merge all location data
const ALL_LOCATIONS = { ...LOCATIONS, ...EXTRA_LOCATIONS }

// Generate remaining locations with standard template (safety net for any unlisted slugs)
const STANDARD_LOCATIONS: string[] = []

function getLocationData(slug: string) {
  if (ALL_LOCATIONS[slug]) return ALL_LOCATIONS[slug]
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
  const allSlugs = Object.keys(ALL_LOCATIONS)
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
