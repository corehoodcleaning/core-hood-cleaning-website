import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Stadium and Sports Venue Hood Cleaning San Diego: NFPA 96 for Concession Kitchens | Core Hood Cleaning',
  description: 'Concourse concessions, suite level kitchens, and clubhouse grills all fall under NFPA 96. Core Hood Cleaning services stadiums, arenas, and sports venues across San Diego County on schedules built around your event calendar.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/stadium-sports-venue-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Stadium and Sports Venue Hood Cleaning San Diego: NFPA 96 for Concession Kitchens',
      description: 'Concourse concessions, suite level kitchens, and clubhouse grills all fall under NFPA 96. Core Hood Cleaning services stadiums, arenas, and sports venues across San Diego County on schedules built around your event calendar.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-08-20',
      dateModified: '2026-08-20',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/stadium-sports-venue-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does every concession stand in a stadium need its own NFPA 96 service?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Any concession point running a Type 1 hood over a grill, fryer, or other grease producing appliance is its own system under NFPA 96. A venue running twenty concourse stands has twenty separate cleaning and documentation requirements, even if several stands sit right next to each other.' }
        },
        {
          '@type': 'Question',
          name: 'Can you clean concession kitchens without disrupting a game day or event schedule?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work around your event calendar, not the other way around. That usually means dark days between homestands, the morning after a concert before the next load-in, or early hours before gates open on an event day.' }
        },
        {
          '@type': 'Question',
          name: 'How do you handle a venue with dozens of concession points?',
          acceptedAnswer: { '@type': 'Answer', text: 'We build a rotation across the concourse so every hood gets serviced on its own frequency without pulling a full crew off other work for weeks at a time. High volume stands near the main gates or club level get cycled through more often than a seasonal specialty stand that only opens for certain events.' }
        },
        {
          '@type': 'Question',
          name: 'What is the cleaning frequency for a venue that only runs events seasonally?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 frequency is based on grease output and cooking volume, not a flat calendar, so a seasonal fairground kitchen or outdoor event stand that only runs a few months a year typically falls on a semi-annual schedule timed around the event season rather than a fixed quarterly cycle.' }
        },
        {
          '@type': 'Question',
          name: 'Do golf course grill rooms and clubhouse kitchens fall under the same code?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. If there is a Type 1 hood over a grease producing appliance in a clubhouse grill or turn shack, it answers to the same NFPA 96 requirements as a stadium concession stand, just typically on a lower volume schedule tied to tee sheet traffic instead of an event calendar.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if a concession kitchen fails inspection right before a big event?',
          acceptedAnswer: { '@type': 'Answer', text: 'A failed inspection can mean that stand stays closed until the system is cleaned and re-inspected, which is a real revenue hit on a sellout night. We offer emergency and same-day service specifically for this situation, with documentation ready in time for a re-inspection before doors open.' }
        },
        {
          '@type': 'Question',
          name: 'Can you set up one contract covering an entire venue or multiple venues under one ownership group?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We set up venue wide service agreements covering every hood on a property, and multi-venue contracts for ownership groups or management companies running more than one site in San Diego County. One point of contact, one consolidated schedule, one set of records.' }
        },
        {
          '@type': 'Question',
          name: 'What documentation does venue management need for insurance and risk audits?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every service includes a written report, before and after photos, an NFPA 96 compliance certificate, and a dated sticker on the hood. For venues with dozens of stands we provide one consolidated report covering the whole property so risk management and insurance carriers get a single file instead of chasing records stand by stand.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#why-different', label: 'Why Stadium Kitchens Are Different' },
  { href: '#nfpa-96-requirements', label: 'NFPA 96 Requirements for Concession Kitchens' },
  { href: '#cleaning-frequency', label: 'Cleaning Frequency for Event-Based Venues' },
  { href: '#scheduling', label: 'Scheduling Around Game Days and Events' },
  { href: '#what-service-covers', label: 'What Full-System Service Covers' },
  { href: '#inspections', label: 'Fire Marshal, Health Dept, and Risk Audits' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function StadiumSportsVenueHoodCleaningSanDiego() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>August 2026 · 11 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Stadium and Sports Venue Hood Cleaning San Diego: NFPA 96 for Concession Kitchens
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Concourse concession stands, suite level kitchens, and clubhouse grills all run under the same fire code as a standalone restaurant. Core Hood Cleaning services stadiums, arenas, and sports venues across San Diego County on schedules built around your event calendar, not the other way around.
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
              Growing up working in restaurants, I know how fast a dirty exhaust system turns into a real problem. A stadium or sports venue just multiplies that problem by every concession stand on the concourse. A single property can run a dozen or more separate Type 1 hoods between main concourse stands, suite level kitchens, club lounges, and a clubhouse grill, and every one of them answers to the same fire code as a standalone restaurant down the street.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              What makes sports venues different is not the code, it is everything wrapped around the code. A schedule driven by game days instead of daily hours, dozens of hoods spread across one property, seasons that go dark for months at a time, and a risk management or insurance audit that wants clean documentation across the whole site. This guide covers what NFPA 96 requires for a stadium, arena, or sports venue in San Diego County, how cleaning frequency works for event-based operations, and how we build a schedule that never gets in the way of a sellout crowd.
            </p>

            <h2 id="why-different" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Stadium Kitchens Are Different</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A stadium or sports venue is rarely just one kitchen. Most properties in San Diego run several types of cooking operations spread across the site, each with its own equipment, its own hood, and its own usage pattern tied to the event calendar. Here is how the operations typically break down:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Main Concourse Concessions', desc: 'The highest volume stands on the property, running full output during every home game or ticketed event and sitting dark in between.' },
                { num: '02', title: 'Suite & Club Level Kitchens', desc: 'Catering-style operations tied to premium seating, often running a different menu and volume than the concourse stands below.' },
                { num: '03', title: 'Fairgrounds & Outdoor Event Kitchens', desc: 'Seasonal or event-driven cooking equipment that runs hard for a stretch of the calendar, then sits idle for months.' },
                { num: '04', title: 'Golf & Country Club Grill Rooms', desc: 'Steadier, lower volume cooking tied to tee sheet traffic rather than a game day surge, but still under a Type 1 hood.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Each of those hoods is its own system under the fire code, with its own cleaning frequency based on how it is actually used. Treating an entire venue as one blanket schedule almost always means over servicing the seasonal stands and under servicing the high traffic ones near the main gates. A vendor that has only ever walked into a single kitchen restaurant is going to struggle to manage that across a concourse with two dozen stands.
            </p>

            <h2 id="nfpa-96-requirements" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 Requirements for Concession Kitchens</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the national fire code standard for ventilation control and fire protection of commercial cooking operations. It applies to any Type 1 exhaust hood over a grease producing cooking appliance, whether that hood sits above a grill in a restaurant kitchen or above a fryer in a concourse concession stand. There is no exception carved out because a stand only opens on game days, and no reduced standard because the kitchen is small.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>What the code covers</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Hood, plenum, and filter cleaning frequency tied to cooking volume and grease output per stand',
                  'Complete ductwork from each hood to its rooftop or exterior termination point',
                  'Rooftop or wall-mounted exhaust fan condition and clearance from combustibles',
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
              For a venue with a dozen or more concession points, this means keeping separate documentation for each stand rather than one blanket record for the whole property. If the fire marshal asks about stand fourteen on the upper concourse and all you can produce is a certificate for the main kitchen, that is still a compliance gap even though the venue has a hood cleaning history somewhere on file.
            </p>

            <h2 id="cleaning-frequency" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cleaning Frequency for Event-Based Venues</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 sets frequency by grease output and cooking volume, and on an event-based property that number depends heavily on how packed the calendar is. Here is generally how it breaks down for the venues we service in San Diego County:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'High volume concourse stands, full home schedule', detail: 'Quarterly service is common for stands near main gates and high traffic sections' },
                { item: 'Suite and club level catering kitchens', detail: 'Semi-annual service for most venues, adjusted around premium event bookings' },
                { item: 'Seasonal fairground or outdoor event stands', detail: 'Semi-annual, timed around the event season rather than a fixed quarterly cycle' },
                { item: 'Golf and country club grill rooms', detail: 'Semi-annual to annual depending on tee sheet volume and grease producing equipment' },
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
              We assess each hood on its own cooking profile rather than applying one blanket schedule across an entire venue. A concourse stand that ran a full slate of sellout games in one month needs a different look than the same stand coming off a bye week, and we build that into the plan instead of guessing at a calendar date.
            </p>

            <h2 id="scheduling" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Scheduling Around Game Days and Events</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              This is where sports venues diverge from a standalone restaurant. A restaurant closes every night and we work the overnight. A venue might sit dark for two weeks between homestands, then run three events in four days. We build the schedule around what actually works for your operations calendar:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Main concourse stands', detail: 'Dark days between homestands or the morning after the last event of a stretch, before the next load-in' },
                { label: 'Suite and club kitchens', detail: 'Scheduled around the premium events calendar rather than fighting a live catering booking' },
                { label: 'Fairgrounds and outdoor stands', detail: 'Timed for the off-season or the gap between annual events' },
                { label: 'Golf and country club grills', detail: 'Early morning before the first tee time, or during a scheduled course closure' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.detail}</span></div>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              For multi-stand properties we also work directly with your operations or facilities team on service entrance access, event day blackout windows, and any protocols specific to a shared ownership group running multiple sites. Here is the thing, none of that matters to a fan grabbing a hot dog on game night, and it should not have to. Our job is to keep every hood on the property compliant without anyone in the stands ever noticing we were there.
            </p>

            <h2 id="what-service-covers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Full-System Service Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Every kitchen on a sports venue gets the same complete NFPA 96 scope as a standalone restaurant. No shortcuts because the stand is small, and no partial service because the property runs dozens of them:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy, baffles, and plenum chamber', detail: 'Full interior cleaning for every stand, not a surface wipe-down' },
                { item: 'Grease filters removed, washed, and reinstalled', detail: 'Standard on every service regardless of stand size' },
                { item: 'Complete ductwork from plenum to termination point', detail: 'Cleaned from both ends, the section inspectors check most' },
                { item: 'Exhaust fan, blades, housing, curb or wall mount', detail: 'Every technician checks the fan on every service call' },
                { item: 'Grease collection and proper disposal', detail: 'No drain dumping, ever' },
                { item: 'Before and after photo documentation', detail: 'Your proof of service, stand by stand' },
                { item: 'NFPA 96 compliance certificate', detail: 'One per hood, or one consolidated report for the whole venue' },
                { item: 'Dated cleaning sticker applied to each hood', detail: 'Required for fire marshal clearance and insurance audits' },
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
              That is exactly why I started Core, to be a vendor a venue operations team can hand a property wide compliance requirement to and not have to chase down separate paperwork from twenty different concession stands.
            </p>

            <h2 id="inspections" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Fire Marshal, Health Dept, and Risk Audits</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Sports venues answer to the same San Diego Fire Marshal and Department of Environmental Health inspections as any restaurant, plus whatever risk management or insurance audit applies to a large public assembly property. Those audits often review kitchen exhaust condition and documentation as part of a much broader life safety inspection, and a missing or expired hood cleaning record can drag down a score that affects the whole venue, not just concessions.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              What ties all of it together is documentation. An inspector or risk auditor is not going to take your word for it that a stand was cleaned on schedule. They want the dated sticker on the hood, the written service report, and a certificate they can pull for every kitchen on the property.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '12px' }}>Who checks what</p>
              {[
                { step: 'Fire Marshal', action: 'Verifies cleaning frequency, sticker date, and ductwork condition against NFPA 96 for every hood on site' },
                { step: 'Health Dept', action: 'Reviews sanitation of the hood and filters as part of the broader concession stand inspection' },
                { step: 'Risk & Insurance', action: 'Reviews kitchen exhaust condition and documentation as part of a property wide life safety audit' },
                { step: 'Ownership Group', action: 'Often maintains its own internal compliance file across every venue in the portfolio' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900, color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0 }}>{item.step}</span>
                  <div><span style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{item.action}</span></div>
                </div>
              ))}
            </div>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>We service stadiums, arenas, and sports venues throughout San Diego County:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['Downtown San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Running Concessions at a Stadium or Sports Venue?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>We build the schedule around your event calendar, not the other way around. NFPA 96 certified, full documentation per stand, venue wide and multi-property contracts available.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Does every concession stand in a stadium need its own NFPA 96 service?', a: 'Yes. Any concession point running a Type 1 hood over a grill, fryer, or other grease producing appliance is its own system under NFPA 96. A venue running twenty concourse stands has twenty separate cleaning and documentation requirements, even if several stands sit right next to each other.' },
              { q: 'Can you clean concession kitchens without disrupting a game day or event schedule?', a: 'Yes. We work around your event calendar, not the other way around. That usually means dark days between homestands, the morning after a concert before the next load-in, or early hours before gates open on an event day.' },
              { q: 'How do you handle a venue with dozens of concession points?', a: 'We build a rotation across the concourse so every hood gets serviced on its own frequency without pulling a full crew off other work for weeks at a time. High volume stands near the main gates or club level get cycled through more often than a seasonal specialty stand that only opens for certain events.' },
              { q: 'What is the cleaning frequency for a venue that only runs events seasonally?', a: 'NFPA 96 frequency is based on grease output and cooking volume, not a flat calendar, so a seasonal fairground kitchen or outdoor event stand that only runs a few months a year typically falls on a semi-annual schedule timed around the event season rather than a fixed quarterly cycle.' },
              { q: 'Do golf course grill rooms and clubhouse kitchens fall under the same code?', a: 'Yes. If there is a Type 1 hood over a grease producing appliance in a clubhouse grill or turn shack, it answers to the same NFPA 96 requirements as a stadium concession stand, just typically on a lower volume schedule tied to tee sheet traffic instead of an event calendar.' },
              { q: 'What happens if a concession kitchen fails inspection right before a big event?', a: 'A failed inspection can mean that stand stays closed until the system is cleaned and re-inspected, which is a real revenue hit on a sellout night. We offer emergency and same-day service specifically for this situation, with documentation ready in time for a re-inspection before doors open.' },
              { q: 'Can you set up one contract covering an entire venue or multiple venues under one ownership group?', a: 'Yes. We set up venue wide service agreements covering every hood on a property, and multi-venue contracts for ownership groups or management companies running more than one site in San Diego County. One point of contact, one consolidated schedule, one set of records.' },
              { q: 'What documentation does venue management need for insurance and risk audits?', a: 'Every service includes a written report, before and after photos, an NFPA 96 compliance certificate, and a dated sticker on the hood. For venues with dozens of stands we provide one consolidated report covering the whole property so risk management and insurance carriers get a single file instead of chasing records stand by stand.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/hotel-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hotel Hood Cleaning San Diego: NFPA 96 for Resort and Hotel Kitchens</Link>
                <Link href="/blog/school-hospital-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ School and Hospital Hood Cleaning San Diego: NFPA 96 for Institutional Kitchens</Link>
                <Link href="/blog/emergency-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Emergency Hood Cleaning San Diego: Same-Day Service for Red Tags & Inspections</Link>
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
