import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hotel Hood Cleaning San Diego: NFPA 96 Compliance for Resort and Hotel Kitchens | Core Hood Cleaning',
  description: 'Banquet kitchens, restaurant outlets, room service, and pool bars all fall under NFPA 96. Core Hood Cleaning services hotels and resorts across San Diego County on schedules built around guests and events.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/hotel-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Hotel Hood Cleaning San Diego: NFPA 96 Compliance for Resort and Hotel Kitchens',
      description: 'Banquet kitchens, restaurant outlets, room service, and pool bars all fall under NFPA 96. Core Hood Cleaning services hotels and resorts across San Diego County on schedules built around guests and events.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-08-06',
      dateModified: '2026-08-06',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/hotel-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does a hotel with multiple food and beverage outlets need separate NFPA 96 service for each kitchen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every Type 1 exhaust hood over a commercial cooking appliance falls under NFPA 96, so a property running a main restaurant, a banquet kitchen, and a pool bar grill has three separate systems that each need their own cleaning schedule and documentation.' }
        },
        {
          '@type': 'Question',
          name: 'Can you clean a hotel kitchen without disrupting guest service or banquet events?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We schedule around your property, not the other way around. That usually means overnight work after the last banquet breaks down, early morning before breakfast service starts, or a coordinated window between events for a ballroom kitchen that only runs a few days a week.' }
        },
        {
          '@type': 'Question',
          name: 'Do brand standard inspections check for the same things as the fire marshal?',
          acceptedAnswer: { '@type': 'Answer', text: 'They overlap but are not identical. The fire marshal checks NFPA 96 compliance specifically. Brand standard audits from a franchisor often review kitchen exhaust condition and documentation as part of a broader property inspection, and a missing hood cleaning record can affect your score on both.' }
        },
        {
          '@type': 'Question',
          name: 'How often does a hotel banquet kitchen need hood cleaning if it only runs a few events a month?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 frequency is based on grease output and cooking volume, not a flat calendar. A banquet kitchen with lower and irregular volume may fall on a semi-annual or annual schedule, while the main restaurant kitchen running daily service will likely need quarterly or semi-annual service. We assess each hood on a property separately.' }
        },
        {
          '@type': 'Question',
          name: 'Can you handle multiple hotel properties under one management group on a single contract?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We set up multi-property service agreements for hotel groups and management companies with more than one San Diego location. You get one point of contact, one consolidated schedule, and one set of documentation across every property instead of coordinating separate vendors per site.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if a hotel kitchen fails a fire marshal inspection over exhaust system condition?',
          acceptedAnswer: { '@type': 'Answer', text: 'A failed inspection can mean a red tag on the cooking line until the system is cleaned and re-inspected, which is a real problem for a hotel that cannot just close the restaurant for a few days. We offer emergency and same-day service specifically for this situation, with full documentation ready for the re-inspection.' }
        },
        {
          '@type': 'Question',
          name: 'Do pool bars and outdoor cooking stations fall under the same code as an indoor kitchen?',
          acceptedAnswer: { '@type': 'Answer', text: 'If there is a Type 1 hood over a grill, fryer, or other grease producing appliance, it falls under NFPA 96 regardless of whether the station is indoors or on a pool deck. Outdoor stations are also exposed to more debris and wind driven grime, so they sometimes need more frequent attention than an equivalent indoor line.' }
        },
        {
          '@type': 'Question',
          name: 'What documentation should we keep on file for corporate or ownership group audits?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every service includes a written report, before and after photos, an NFPA 96 compliance certificate, and a dated sticker on the hood. For multi-outlet properties we can provide one consolidated report covering every kitchen so your general manager or ownership group has a single file instead of piecing together records from separate vendors.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#why-different', label: 'Why Hotel Kitchens Are Different' },
  { href: '#nfpa-96-requirements', label: 'NFPA 96 Requirements for Hotel Kitchens' },
  { href: '#cleaning-frequency', label: 'Cleaning Frequency by Outlet' },
  { href: '#scheduling', label: 'Scheduling Around Guests and Events' },
  { href: '#what-service-covers', label: 'What Full-System Service Covers' },
  { href: '#inspections', label: 'Fire Marshal, Health Dept, and Brand Standards' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function HotelHoodCleaningSanDiego() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>August 2026 · 10 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Hotel Hood Cleaning San Diego: NFPA 96 for Resort and Hotel Kitchens
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Banquet kitchens, restaurant outlets, room service lines, and pool bars all run under the same fire code as a standalone restaurant. Core Hood Cleaning services hotels and resorts across San Diego County on schedules built around your guests and events, not the other way around.
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
              Growing up working in restaurants, I know how one dirty exhaust system can put an operation at risk. A hotel or resort just has more of them. A single property can run a main restaurant, a banquet kitchen for weddings and conferences, room service, and a pool bar grill, and every one of those hoods answers to the same fire code as a standalone restaurant down the street.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              What makes hospitality properties different is not the code, it is everything around the code. Guests staying on site, banquets booked months out, brand standard audits from a franchisor, and multiple kitchens running on different schedules under one roof. This guide covers what NFPA 96 requires for a hotel or resort in San Diego County, how cleaning frequency works across different food and beverage outlets, and how we build a schedule that never gets in the way of a guest's stay or a client's event.
            </p>

            <h2 id="why-different" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Hotel Kitchens Are Different</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A hotel is rarely just one kitchen. Most full service properties in San Diego run several food and beverage outlets, each with its own cooking equipment, its own exhaust hood, and its own usage pattern. Here is how the outlets typically break down:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Signature Restaurant', desc: 'Daily breakfast, lunch, and dinner service running the highest and most consistent grease output on the property.' },
                { num: '02', title: 'Banquet & Event Kitchen', desc: 'Irregular volume tied to the events calendar, quiet for stretches then running full output for a wedding or conference.' },
                { num: '03', title: 'Room Service & Pantry', desc: 'Lower volume but still commercial cooking equipment under a Type 1 hood in most full service properties.' },
                { num: '04', title: 'Pool Bar & Outdoor Grill', desc: 'Seasonal or weather dependent usage, often exposed to more airborne debris than an indoor kitchen.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Each of those hoods is its own system under the fire code, with its own cleaning frequency based on how it is actually used. Treating a whole property as one blanket schedule almost always means over servicing the low volume outlets and under servicing the busy ones. A vendor that only knows how to walk into a single kitchen restaurant is going to struggle to manage that across an entire property.
            </p>

            <h2 id="nfpa-96-requirements" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 Requirements for Hotel Kitchens</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the national fire code standard for ventilation control and fire protection of commercial cooking operations. It applies to any Type 1 exhaust hood over a grease producing cooking appliance, whether that hood sits in a five star restaurant kitchen, a banquet hall, or a pool deck grill station. There is no exception carved out for hospitality properties and no reduced standard because a kitchen serves hotel guests instead of walk in customers.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>What the code covers</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Hood, plenum, and filter cleaning frequency tied to cooking volume and grease output per outlet',
                  'Complete ductwork from each hood to its rooftop termination point',
                  'Rooftop exhaust fan condition and clearance from combustibles',
                  'Written, dated service records for every kitchen on the property, available for inspectors on request',
                  'A visible cleaning sticker or tag showing the last service date for each hood',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              For a hotel, this means keeping separate documentation for each cooking outlet rather than a single blanket record. If the fire marshal asks about the banquet kitchen and all you can produce is a certificate for the main restaurant, that is still a compliance gap even though the property has a hood cleaning history.
            </p>

            <h2 id="cleaning-frequency" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cleaning Frequency by Outlet</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 sets frequency by grease output and cooking volume, and on a hotel property that number is different for every outlet. Here is generally how it breaks down for the properties we service in San Diego County:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'High volume main restaurant, daily service', detail: 'Quarterly service is common for a busy signature restaurant kitchen' },
                { item: 'Banquet and event kitchen, irregular volume', detail: 'Semi-annual service for most properties, adjusted around a heavy event calendar' },
                { item: 'Room service and pantry kitchens', detail: 'Semi-annual to annual depending on grease producing equipment used' },
                { item: 'Pool bar and outdoor grill stations', detail: 'Semi-annual, sometimes more frequent due to outdoor debris exposure' },
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
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              We assess each hood on its own cooking profile rather than applying one blanket schedule across the whole property. A banquet kitchen that ran three back to back conferences in one month needs a different look than the same kitchen after a slow season, and we build that into the plan instead of guessing.
            </p>

            <h2 id="scheduling" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Scheduling Around Guests and Events</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              This is where hospitality properties diverge from a standalone restaurant. A restaurant closes and we work the overnight. A hotel never fully closes, and a banquet kitchen might be booked solid one week and dark the next. We build the schedule around what actually works for your operation:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Main restaurant', detail: 'Overnight service after close, coordinated with your executive chef so morning prep is never disrupted' },
                { label: 'Banquet kitchen', detail: 'Scheduled in the gap between events rather than fighting a live catering calendar' },
                { label: 'Room service and pantry', detail: 'Off-peak windows that avoid breakfast and dinner order rushes' },
                { label: 'Pool bar and outdoor grill', detail: 'Early morning before the pool deck opens, or scheduled around seasonal closures' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.detail}</span></div>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              For multi-outlet properties we also work directly with your director of engineering or facilities team on service entrance access, noise considerations near guest rooms, and any brand specific protocols your property follows. Here is the thing, none of that matters to a guest checking in for a weekend, and it should not have to. Our job is to keep the exhaust system compliant without anyone upstairs ever noticing we were there.
            </p>

            <h2 id="what-service-covers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Full-System Service Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Every kitchen on a hotel property gets the same complete NFPA 96 scope as a standalone restaurant. No shortcuts because the outlet is smaller, and no partial service because the property is large:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy, baffles, and plenum chamber', detail: 'Full interior cleaning for every outlet, not a surface wipe-down' },
                { item: 'Grease filters removed, washed, and reinstalled', detail: 'Standard on every service regardless of kitchen size' },
                { item: 'Complete ductwork from plenum to rooftop', detail: 'Cleaned from both ends, the section inspectors check most' },
                { item: 'Rooftop exhaust fan, blades, housing, curb', detail: 'Every technician goes to the roof on every service call' },
                { item: 'Grease collection and proper disposal', detail: 'No drain dumping, ever' },
                { item: 'Before and after photo documentation', detail: 'Your proof of service, outlet by outlet' },
                { item: 'NFPA 96 compliance certificate', detail: 'One per hood, or one consolidated report for multi-outlet properties' },
                { item: 'Dated cleaning sticker applied to each hood', detail: 'Required for fire marshal clearance and brand standard audits' },
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
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              That is exactly why I started Core, to be a vendor a director of engineering can hand a property wide compliance requirement to and not have to chase down separate paperwork from four different kitchens.
            </p>

            <h2 id="inspections" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Fire Marshal, Health Dept, and Brand Standards</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Hotel kitchens answer to the same San Diego Fire Marshal and Department of Environmental Health inspections as any restaurant, plus whatever brand standard audit applies if the property operates under a franchise flag. Those audits often review kitchen exhaust condition and documentation as part of a much broader property inspection, and a missing or expired hood cleaning record can drag down a score that affects the whole hotel, not just food and beverage.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              What ties all of it together is documentation. An inspector or auditor is not going to take your word for it that the hood was cleaned on schedule. They want the dated sticker on the hood, the written service report, and a certificate they can pull for every outlet on the property.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '12px' }}>Who checks what</p>
              {[
                { step: 'Fire Marshal', action: 'Verifies cleaning frequency, sticker date, and ductwork condition against NFPA 96 for every hood on site' },
                { step: 'Health Dept', action: 'Reviews sanitation of the hood and filters as part of the broader kitchen inspection' },
                { step: 'Brand Standards', action: 'For franchised properties, reviews kitchen condition and documentation as part of a property wide audit' },
                { step: 'Ownership Group', action: 'Often maintains its own internal compliance file across every property in the portfolio' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900, color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0 }}>{item.step}</span>
                  <div><span style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{item.action}</span></div>
                </div>
              ))}
            </div>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>We service hotels and resorts throughout San Diego County:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['Downtown San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Running a Hotel or Resort Kitchen?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>We build the schedule around your guests and events, not the other way around. NFPA 96 certified, full documentation per outlet, multi-property contracts available.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Does a hotel with multiple food and beverage outlets need separate NFPA 96 service for each kitchen?', a: 'Yes. Every Type 1 exhaust hood over a commercial cooking appliance falls under NFPA 96, so a property running a main restaurant, a banquet kitchen, and a pool bar grill has three separate systems that each need their own cleaning schedule and documentation.' },
              { q: 'Can you clean a hotel kitchen without disrupting guest service or banquet events?', a: 'Yes. We schedule around your property, not the other way around. That usually means overnight work after the last banquet breaks down, early morning before breakfast service starts, or a coordinated window between events for a ballroom kitchen that only runs a few days a week.' },
              { q: 'Do brand standard inspections check for the same things as the fire marshal?', a: 'They overlap but are not identical. The fire marshal checks NFPA 96 compliance specifically. Brand standard audits from a franchisor often review kitchen exhaust condition and documentation as part of a broader property inspection, and a missing hood cleaning record can affect your score on both.' },
              { q: 'How often does a hotel banquet kitchen need hood cleaning if it only runs a few events a month?', a: 'NFPA 96 frequency is based on grease output and cooking volume, not a flat calendar. A banquet kitchen with lower and irregular volume may fall on a semi-annual or annual schedule, while the main restaurant kitchen running daily service will likely need quarterly or semi-annual service. We assess each hood on a property separately.' },
              { q: 'Can you handle multiple hotel properties under one management group on a single contract?', a: 'Yes. We set up multi-property service agreements for hotel groups and management companies with more than one San Diego location. You get one point of contact, one consolidated schedule, and one set of documentation across every property instead of coordinating separate vendors per site.' },
              { q: 'What happens if a hotel kitchen fails a fire marshal inspection over exhaust system condition?', a: 'A failed inspection can mean a red tag on the cooking line until the system is cleaned and re-inspected, which is a real problem for a hotel that cannot just close the restaurant for a few days. We offer emergency and same-day service specifically for this situation, with full documentation ready for the re-inspection.' },
              { q: 'Do pool bars and outdoor cooking stations fall under the same code as an indoor kitchen?', a: 'If there is a Type 1 hood over a grill, fryer, or other grease producing appliance, it falls under NFPA 96 regardless of whether the station is indoors or on a pool deck. Outdoor stations are also exposed to more debris and wind driven grime, so they sometimes need more frequent attention than an equivalent indoor line.' },
              { q: 'What documentation should we keep on file for corporate or ownership group audits?', a: 'Every service includes a written report, before and after photos, an NFPA 96 compliance certificate, and a dated sticker on the hood. For multi-outlet properties we can provide one consolidated report covering every kitchen so your general manager or ownership group has a single file instead of piecing together records from separate vendors.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/school-hospital-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ School and Hospital Hood Cleaning San Diego: NFPA 96 for Institutional Kitchens</Link>
                <Link href="/blog/emergency-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Emergency Hood Cleaning San Diego: Same-Day Service for Red Tags & Inspections</Link>
                <Link href="/blog/commercial-kitchen-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide</Link>
                <Link href="/services/nfpa-inspection" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Our NFPA 96 Inspection Service</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
