import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Food Truck Hood Cleaning San Diego: NFPA 96 Compliance for Mobile Kitchens | Core Hood Cleaning',
  description: 'Food trucks with grills, fryers, or flat tops need NFPA 96 compliant hood cleaning too. Core Hood Cleaning services mobile kitchens across San Diego County. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/food-truck-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Food Truck Hood Cleaning San Diego: NFPA 96 Compliance for Mobile Kitchens',
      description: 'Food trucks with grills, fryers, or flat tops need NFPA 96 compliant hood cleaning too. Core Hood Cleaning services mobile kitchens across San Diego County.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-08-27',
      dateModified: '2026-08-27',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/food-truck-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do food trucks really need hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Any food truck with a canopy hood over grease producing equipment, meaning grills, fryers, flat tops, or char broilers, falls under NFPA 96 the same as a brick and mortar restaurant kitchen. If your truck has a hood and a fire suppression system tied to it, that system needs regular professional cleaning and documentation.' }
        },
        {
          '@type': 'Question',
          name: 'How often does a food truck hood need to be cleaned?',
          acceptedAnswer: { '@type': 'Answer', text: 'Frequency follows the same NFPA 96 schedule used for stationary kitchens, based on cooking volume and equipment type. High volume solid fuel or wok operations may need monthly service, while a lower volume truck might fall on a quarterly or semi annual schedule. We evaluate your menu and daily service hours to set the right interval.' }
        },
        {
          '@type': 'Question',
          name: 'Will my commissary require proof of hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most San Diego commissaries require trucks to keep a current hood cleaning certificate on file as a condition of the commissary agreement. We provide a written compliance certificate and an NFPA 96 sticker after every service so you have documentation ready whenever your commissary or health inspector asks.' }
        },
        {
          '@type': 'Question',
          name: 'Can you clean a hood while my truck is parked at an event or festival?',
          acceptedAnswer: { '@type': 'Answer', text: 'We typically schedule service at your commissary lot, storage yard, or home base rather than mid event, since we need stable access and time to work the full system properly. Tell us your route and event schedule and we will build a cleaning date around it.' }
        },
        {
          '@type': 'Question',
          name: 'What is different about cleaning a mobile kitchen hood versus a restaurant hood?',
          acceptedAnswer: { '@type': 'Answer', text: 'The core process is the same, hood canopy, filters, ductwork, and exhaust fan. The difference is space and access. Mobile units run shorter duct runs, tighter clearances, and roof mounted or sidewall exhaust fans instead of a full rooftop curb, so our technicians adjust equipment and technique for the footprint of your truck.' }
        },
        {
          '@type': 'Question',
          name: 'Do you service multiple trucks under one fleet at the same time?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. If you operate more than one truck out of the same commissary or lot, we can schedule the whole fleet in one visit and keep every unit on the same recurring interval, which keeps your paperwork simple and your renewal dates aligned.' }
        },
        {
          '@type': 'Question',
          name: 'What areas do you service for food truck hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'We service food trucks and mobile kitchens throughout San Diego County, including Downtown San Diego, Pacific Beach, La Jolla, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' }
        },
        {
          '@type': 'Question',
          name: 'What documentation do I get after my food truck hood is cleaned?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every service includes a written service report, before and after photos, an NFPA 96 compliance certificate, and an NFPA 96 sticker applied to the hood. That is the documentation your commissary, health inspector, or event organizer will ask to see.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#do-food-trucks-need-hood-cleaning', label: 'Do Food Trucks Need Hood Cleaning' },
  { href: '#nfpa-96-and-mobile-kitchens', label: 'NFPA 96 and Mobile Kitchens' },
  { href: '#what-triggers-inspection', label: 'What Triggers a Food Truck Inspection' },
  { href: '#service-is-different', label: 'Why Mobile Kitchen Service Is Different' },
  { href: '#what-a-cleaning-covers', label: 'What a Food Truck Hood Cleaning Covers' },
  { href: '#commissary-requirements', label: 'Commissary Requirements' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function FoodTruckHoodCleaningSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Industry</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>August 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Food Truck Hood Cleaning San Diego: NFPA 96 Compliance for Mobile Kitchens
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Grills, fryers, and flat tops on wheels still fall under NFPA 96. Core Hood Cleaning services food trucks and mobile kitchens across San Diego County, scheduled around your route and your commissary lot.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--white)', padding: '64px 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>

            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '28px 32px', marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rust)', marginBottom: '16px' }}>In This Guide</p>
              <ol style={{ margin: 0, paddingLeft: '20px' }}>
                {tocItems.map(item => (
                  <li key={item.href} style={{ marginBottom: '8px' }}>
                    <a href={item.href} style={{ color: 'var(--true-blue)', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none' }}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Growing up working in restaurants, I saw plenty of operators assume that if a kitchen is not bolted to a building, the fire code somehow does not apply to it. That is not how it works. If your truck has a canopy hood over a grill, fryer, flat top, or char broiler, San Diego County treats that hood the same way it treats a hood in a full service restaurant. NFPA 96 does not care whether your kitchen has wheels.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              I built my company to help operators keep their kitchens compliant without the runaround, and that includes mobile kitchens. This guide covers when a food truck actually needs professional hood cleaning, what the NFPA 96 code requires, what your commissary is likely asking for, and what a service call for a truck actually looks like.
            </p>

            <h2 id="do-food-trucks-need-hood-cleaning" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Do Food Trucks Need Hood Cleaning</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The short answer is yes, if your truck cooks with equipment that produces grease laden vapors and vents that vapor through a canopy hood. That covers most trucks serving burgers, tacos, fried food, wok stations, and barbecue. It generally does not apply to a coffee cart or a truck that only reheats prepackaged food with no open grease cooking, since there is no grease producing equipment triggering the code in the first place.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>Equipment that triggers the requirement</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Griddles and flat tops',
                  'Deep fryers',
                  'Char broilers and grills',
                  'Wok and solid fuel cooking stations',
                  'Any equipment tied into an onboard fire suppression system',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="nfpa-96-and-mobile-kitchens" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 and Mobile Kitchens</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the national fire code standard for ventilation control and fire protection of commercial cooking operations. It does not distinguish between a fixed kitchen and a mobile one. Any hood, filter, duct run, and exhaust fan pulling grease laden air off cooking equipment falls under the same inspection and cleaning schedule requirements, and any onboard fire suppression system tied to that hood needs to stay compatible with a clean, code compliant exhaust path.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              San Diego County Department of Environmental Health and local fire authorities both look at mobile food facilities under the same lens. A truck that shows up to a permitted vending location, a farmers market, a brewery lot, or a stadium concourse with an overdue or undocumented hood is exposed the same way a restaurant with an expired sticker is exposed, plus the added risk of losing a vending permit or being turned away at an event.
            </p>

            <h2 id="what-triggers-inspection" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Triggers a Food Truck Inspection</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Food trucks get checked more often than most operators expect, and from more than one direction at once.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Permit Renewal', desc: 'San Diego County health permits for mobile food facilities require the exhaust system to be current and documented at renewal time.' },
                { num: '02', title: 'Commissary Agreement', desc: 'Most commissaries require a current hood cleaning certificate on file before they will let a truck park or restock overnight.' },
                { num: '03', title: 'Event and Festival Vetting', desc: 'Large events, breweries, and stadium concourses often ask vendors for proof of fire code compliance before granting a vending spot.' },
                { num: '04', title: 'Insurance Requirements', desc: 'Commercial auto and general liability carriers covering food trucks may require documented fire code compliance to keep coverage in force.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="service-is-different" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Mobile Kitchen Service Is Different</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A truck is not just a smaller restaurant. The kitchen sits in a tighter footprint, the duct run from hood to exhaust point is usually short, and the exhaust fan is often roof mounted or sidewall mounted instead of sitting on a rooftop curb the way it does at a fixed location. Grease can build up faster relative to the size of the system simply because there is less volume of ductwork to spread it across, and less clearance for our technicians to work in.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Scheduling is different too. We are not walking into a dining room during off hours the way we do at a restaurant. Most trucks need service at a commissary lot, a storage yard, or a home base, timed around when the truck is actually parked and not out working a lunch route or an evening event. Tell us your schedule and we build the appointment around it, not the other way around.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              If you run more than one truck out of the same lot, we can also group your whole fleet into a single visit, which keeps every unit on the same interval and every renewal date lined up on one calendar instead of five different ones.
            </p>

            <h2 id="what-a-cleaning-covers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Food Truck Hood Cleaning Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The scope is the full exhaust path, sized to your truck. Nothing gets skipped just because the system is smaller.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy and filters', detail: 'Removed, degreased, and reinstalled before we leave' },
                { item: 'Duct run from hood to exterior vent', detail: 'Cleaned end to end, sized for a short mobile run' },
                { item: 'Roof or sidewall exhaust fan', detail: 'Blades and housing cleaned, checked for grease bypass' },
                { item: 'Grease containment and disposal', detail: 'All wash water and grease collected, nothing dumped on the lot' },
                { item: 'Before and after photo documentation', detail: 'Your proof of service for the commissary or inspector' },
                { item: 'NFPA 96 compliance certificate', detail: 'The document your commissary or event organizer will ask for' },
                { item: 'NFPA 96 sticker applied to the hood', detail: 'Dated and visible at inspection' },
              ].map((r, i) => (
                <div key={r.item} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '14px 20px', borderBottom: '1px solid var(--gray-light)', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--black)' }}>{r.item}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.detail}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              We hand you proof, not promises. The certificate and photos go to you at the end of the visit, so you have the paperwork ready the moment your commissary, health inspector, or event organizer asks for it. No hidden fees, no chasing us down for a copy later.
            </p>

            <h2 id="commissary-requirements" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Commissary Requirements</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              San Diego commissaries generally will not let a truck park, restock, or dump wastewater on site without proof that the exhaust system is current. That requirement protects the commissary as much as it protects you, since a fire that starts on one truck in a shared lot puts every other operator parked there at risk too.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              We work directly with commissary operators and fleet owners to keep documentation current for every truck on the lot, so renewal season does not turn into a scramble. If your commissary has a specific paperwork format they want, tell us and we will make sure our certificate matches what they are asking for.
            </p>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>We service food trucks and mobile kitchens throughout San Diego County, wherever your commissary or home base is located:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['Downtown San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Need Your Food Truck Hood Cleaned</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>NFPA 96 certified service scheduled around your route and your commissary lot, anywhere in San Diego County.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Do food trucks really need hood cleaning?', a: 'Any food truck with a canopy hood over grease producing equipment, meaning grills, fryers, flat tops, or char broilers, falls under NFPA 96 the same as a brick and mortar restaurant kitchen. If your truck has a hood and a fire suppression system tied to it, that system needs regular professional cleaning and documentation.' },
              { q: 'How often does a food truck hood need to be cleaned?', a: 'Frequency follows the same NFPA 96 schedule used for stationary kitchens, based on cooking volume and equipment type. High volume solid fuel or wok operations may need monthly service, while a lower volume truck might fall on a quarterly or semi annual schedule. We evaluate your menu and daily service hours to set the right interval.' },
              { q: 'Will my commissary require proof of hood cleaning?', a: 'Most San Diego commissaries require trucks to keep a current hood cleaning certificate on file as a condition of the commissary agreement. We provide a written compliance certificate and an NFPA 96 sticker after every service so you have documentation ready whenever your commissary or health inspector asks.' },
              { q: 'Can you clean a hood while my truck is parked at an event or festival?', a: 'We typically schedule service at your commissary lot, storage yard, or home base rather than mid event, since we need stable access and time to work the full system properly. Tell us your route and event schedule and we will build a cleaning date around it.' },
              { q: 'What is different about cleaning a mobile kitchen hood versus a restaurant hood?', a: 'The core process is the same, hood canopy, filters, ductwork, and exhaust fan. The difference is space and access. Mobile units run shorter duct runs, tighter clearances, and roof mounted or sidewall exhaust fans instead of a full rooftop curb, so our technicians adjust equipment and technique for the footprint of your truck.' },
              { q: 'Do you service multiple trucks under one fleet at the same time?', a: 'Yes. If you operate more than one truck out of the same commissary or lot, we can schedule the whole fleet in one visit and keep every unit on the same recurring interval, which keeps your paperwork simple and your renewal dates aligned.' },
              { q: 'What areas do you service for food truck hood cleaning?', a: 'We service food trucks and mobile kitchens throughout San Diego County, including Downtown San Diego, Pacific Beach, La Jolla, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' },
              { q: 'What documentation do I get after my food truck hood is cleaned?', a: 'Every service includes a written service report, before and after photos, an NFPA 96 compliance certificate, and an NFPA 96 sticker applied to the hood. That is the documentation your commissary, health inspector, or event organizer will ask to see.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Restaurant Owner&apos;s Plain-English Guide</Link>
                <Link href="/blog/commercial-kitchen-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide</Link>
                <Link href="/blog/emergency-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Emergency Hood Cleaning San Diego: Same-Day Service for Red Tags and Failed Inspections</Link>
                <Link href="/services/hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Our Hood Cleaning Service</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
