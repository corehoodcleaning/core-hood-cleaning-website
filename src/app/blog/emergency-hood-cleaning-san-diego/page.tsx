import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Emergency Hood Cleaning San Diego: Same-Day Service for Red Tags & Inspections | Core Hood Cleaning',
  description: 'Red-tagged by the fire marshal? Failed a health inspection? Core Hood Cleaning offers same-day emergency hood cleaning throughout San Diego County. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/emergency-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Emergency Hood Cleaning San Diego: Same-Day Service for Red Tags & Failed Inspections',
      description: 'Red-tagged by the fire marshal? Failed a health inspection? Core Hood Cleaning offers same-day emergency hood cleaning throughout San Diego County.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-07-01',
      dateModified: '2026-07-01',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/emergency-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How fast can you get to my restaurant for emergency hood cleaning in San Diego?',
          acceptedAnswer: { '@type': 'Answer', text: 'We offer same-day emergency service throughout San Diego County. Call (858) 361-2570 and we will confirm your availability window immediately. Most emergency calls are scheduled within hours, not days.' }
        },
        {
          '@type': 'Question',
          name: 'What is a red tag and what do I do if I get one?',
          acceptedAnswer: { '@type': 'Answer', text: 'A red tag is an order issued by the San Diego Fire Marshal or health department requiring you to cease operations until a specific violation is corrected. If the violation is a dirty or non-compliant exhaust system, you need emergency hood cleaning and a re-inspection before you can reopen. Call us immediately at (858) 361-2570 — we have helped San Diego restaurants resolve red tag violations and pass re-inspections the same day.' }
        },
        {
          '@type': 'Question',
          name: 'Can emergency hood cleaning help me pass a re-inspection the same day?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We clean the complete system to NFPA 96 standards and provide a compliance certificate and before/after photos immediately after service. This is the documentation fire marshals and health inspectors require to clear a violation and lift a closure order.' }
        },
        {
          '@type': 'Question',
          name: 'Do you do emergency hood cleaning after a grease fire?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. After a grease fire, your exhaust system must be professionally cleaned and inspected before the kitchen can be returned to service. We clean the full system including ductwork and rooftop fan, remove fire suppression chemical residue from the hood and filters, and provide the documentation your insurance carrier and fire marshal require.' }
        },
        {
          '@type': 'Question',
          name: 'What areas do you cover for emergency hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'We cover all of San Diego County for emergency service — Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' }
        },
        {
          '@type': 'Question',
          name: 'What documentation do I receive after emergency hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'After every emergency service you receive a written service report, before and after photos, an NFPA 96 compliance certificate, and an NFPA 96 sticker applied to the hood. This is exactly what fire marshals and health inspectors ask for to clear a violation and what your insurance carrier needs on file.' }
        },
        {
          '@type': 'Question',
          name: 'What should I have ready when I call for emergency service?',
          acceptedAnswer: { '@type': 'Answer', text: 'Have your restaurant address, the specific violation or situation (red tag, failed inspection, upcoming inspection, post-fire), and your best contact number. If you have a red tag or inspection notice, have it in front of you so we can confirm exactly what the inspector cited. We handle the rest.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#when-you-need-emergency-service', label: 'When You Need Emergency Service' },
  { href: '#red-tag-situations', label: 'Red Tags and Forced Closures' },
  { href: '#what-same-day-service-covers', label: 'What Same-Day Service Covers' },
  { href: '#after-a-grease-fire', label: 'After a Grease Fire' },
  { href: '#what-to-have-ready', label: 'What to Have Ready When You Call' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function EmergencyHoodCleaningSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--rust)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Emergency Service</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>July 2026 · 8 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Emergency Hood Cleaning San Diego: Same-Day Service for Red Tags and Failed Inspections
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Every hour your kitchen is shut down costs you money. Core Hood Cleaning offers same-day emergency service throughout San Diego County — call <a href="tel:8583612570" style={{ color: 'var(--off-white)', fontWeight: 700 }}>(858) 361-2570</a>.
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
              A red tag from the fire marshal. A failed health inspection with a re-inspection scheduled in 24 hours. A grease fire that shut down your line. These are not situations where you can wait a week for the next available appointment. They are situations where you need a certified technician at your restaurant today.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              Core Hood Cleaning offers same-day emergency hood cleaning throughout San Diego County. We have helped restaurants, bars, and commercial kitchens resolve fire marshal violations, clear health department closures, and pass re-inspections the same day we arrive. This guide covers exactly when you need emergency service, what it includes, and what to have ready when you call.
            </p>

            <h2 id="when-you-need-emergency-service" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>When You Need Emergency Service</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Not every situation requires emergency service — but these four do. If any of these describe your situation right now, stop reading and call <a href="tel:8583612570" style={{ color: 'var(--rust)', fontWeight: 600 }}>(858) 361-2570</a>.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Red Tag / Closure Order', desc: 'The fire marshal or health department has shut you down and cited your exhaust system. You cannot reopen until the violation is corrected and cleared at re-inspection.' },
                { num: '02', title: 'Failed Inspection', desc: 'You failed an inspection due to grease accumulation, an expired cleaning sticker, or a non-compliant system. Re-inspection is scheduled and you need to pass.' },
                { num: '03', title: 'Inspection Tomorrow', desc: 'Your regular cleaning is overdue and you just got notice of an inspection. You need full-system cleaning and NFPA 96 documentation before the inspector arrives.' },
                { num: '04', title: 'After a Grease Fire', desc: 'A grease fire occurred in your kitchen. Before you can reopen, the exhaust system must be professionally cleaned and cleared by the fire marshal.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="red-tag-situations" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Red Tags and Forced Closures</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A red tag is the most urgent situation a restaurant owner can face. It is a formal closure order — you are legally prohibited from operating until the cited violation is corrected and a re-inspection clears it. In San Diego, red tags related to kitchen exhaust systems are issued by the San Diego Fire Marshal and the Department of Environmental Health.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Every hour your restaurant is closed under a red tag is lost revenue — tables, tickets, staff labor you are still paying. The faster the system is cleaned and documented, the faster you can request your re-inspection and get back to service.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>What inspectors cite most often</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Expired NFPA 96 cleaning sticker — interval has passed with no documented service',
                  'Visible grease accumulation in hood, plenum, or accessible ductwork',
                  'No written service records — cleaning was done but not documented',
                  'Cleaning interval does not match cooking volume or equipment type',
                  'Rooftop exhaust fan not included in prior cleaning service',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              When you call us for a red tag situation, have your closure notice in front of you. The specific violation cited tells us exactly what the inspector is looking for at re-inspection. We clean to that standard, provide the compliance certificate and photos, and you have everything you need to request clearance.
            </p>

            <h2 id="what-same-day-service-covers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Same-Day Service Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Emergency service is not a shortcut — it is the same full NFPA 96 compliant cleaning on a faster schedule. Every emergency service call includes the complete exhaust path:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy, baffles, and plenum chamber', detail: 'Full interior cleaning, not just surface wipe-down' },
                { item: 'Grease filters — removed, pressure washed, reinstalled', detail: 'Allows full plenum access and meets filter maintenance requirements' },
                { item: 'Complete ductwork from plenum to rooftop', detail: 'Cleaned from both ends — the section inspectors check most' },
                { item: 'Rooftop exhaust fan — blades, housing, curb', detail: 'Every technician goes to the roof on every service call' },
                { item: 'Grease collection and proper disposal', detail: 'All wash water collected — no drain dumping' },
                { item: 'Before and after photo documentation', detail: 'Every area photographed — your proof of service' },
                { item: 'NFPA 96 compliance certificate', detail: 'The document fire marshals and health inspectors require' },
                { item: 'NFPA 96 sticker applied to hood', detail: 'Required for inspection clearance' },
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
              The compliance certificate and documentation package is handed to you at the end of every service. That is what you present to the fire marshal or health inspector to request clearance. Without it, cleaning happened — but as far as the inspector is concerned, you have no proof.
            </p>

            <h2 id="after-a-grease-fire" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>After a Grease Fire</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A grease fire in the kitchen is a different kind of emergency. Before your restaurant can return to service, three things need to happen: the exhaust system must be professionally cleaned, your fire suppression system must be inspected and reset by a licensed Ansul technician, and the fire marshal must clear the kitchen.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Our role in a post-fire situation covers the exhaust system. We clean the hood, ductwork, and rooftop fan, remove fire suppression chemical residue from the hood canopy and filters, and provide the documentation the fire marshal needs to assess the system before clearing you to operate.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '12px' }}>Post-fire sequence</p>
              {[
                { step: '1', action: 'Call Core Hood Cleaning', detail: 'We schedule same-day exhaust system cleaning' },
                { step: '2', action: 'Call your Ansul service provider', detail: 'Fire suppression system must be inspected and reset separately' },
                { step: '3', action: 'Call your insurance carrier', detail: 'Document the incident — our compliance certificate supports your claim' },
                { step: '4', action: 'Request fire marshal clearance', detail: 'Present our documentation and Ansul reset record to the inspector' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900, color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0 }}>{item.step}</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.88rem' }}>{item.action}: </span><span style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{item.detail}</span></div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Insurance carriers also require proof of compliant hood cleaning when processing fire claims. A kitchen with overdue or undocumented cleaning at the time of the fire gives the insurer grounds to reduce or deny the claim. Our documentation protects you on both the regulatory and insurance side.
            </p>

            <h2 id="what-to-have-ready" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What to Have Ready When You Call</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The faster we have the right information, the faster we can confirm your appointment window. When you call <a href="tel:8583612570" style={{ color: 'var(--rust)', fontWeight: 600 }}>(858) 361-2570</a>, have these ready:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Your restaurant address', detail: 'Including suite or unit number if applicable' },
                { label: 'The specific situation', detail: 'Red tag, failed inspection, upcoming inspection, or post-fire — and what was cited' },
                { label: 'Your re-inspection date and time', detail: 'If one is already scheduled, we will work backwards from that deadline' },
                { label: 'Your best contact number', detail: 'So we can confirm the technician arrival window' },
                { label: 'The violation notice or red tag', detail: 'Have it in front of you — it tells us exactly what the inspector will look for' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.detail}</span></div>
                </li>
              ))}
            </ul>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Emergency Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>We cover all of San Diego County for same-day emergency service:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['Downtown San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee', 'Kearny Mesa'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Need Emergency Hood Cleaning Today?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>Same-day service throughout San Diego County. NFPA 96 certified, full documentation, compliance certificate on every call.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'How fast can you get to my restaurant for emergency hood cleaning in San Diego?', a: 'We offer same-day emergency service throughout San Diego County. Call (858) 361-2570 and we will confirm your availability window immediately. Most emergency calls are scheduled within hours, not days.' },
              { q: 'What is a red tag and what do I do if I get one?', a: 'A red tag is an order issued by the San Diego Fire Marshal or health department requiring you to cease operations until a specific violation is corrected. If the violation is a dirty or non-compliant exhaust system, you need emergency hood cleaning and a re-inspection before you can reopen. Call us immediately — we have helped San Diego restaurants resolve red tag violations and pass re-inspections the same day.' },
              { q: 'Can emergency hood cleaning help me pass a re-inspection the same day?', a: 'Yes. We clean the complete system to NFPA 96 standards and provide a compliance certificate and before/after photos immediately after service. This is the documentation fire marshals and health inspectors require to clear a violation and lift a closure order.' },
              { q: 'Do you do emergency hood cleaning after a grease fire?', a: 'Yes. After a grease fire, your exhaust system must be professionally cleaned and inspected before the kitchen can be returned to service. We clean the full system, remove fire suppression chemical residue, and provide the documentation your insurance carrier and fire marshal require.' },
              { q: 'What areas do you cover for emergency hood cleaning?', a: 'We cover all of San Diego County — Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' },
              { q: 'What documentation do I receive after emergency hood cleaning?', a: 'After every emergency service you receive a written service report, before and after photos, an NFPA 96 compliance certificate, and an NFPA 96 sticker applied to the hood. This is exactly what fire marshals and health inspectors ask for to clear a violation.' },
              { q: 'What should I have ready when I call for emergency service?', a: 'Have your restaurant address, the specific situation (red tag, failed inspection, upcoming inspection, post-fire), and your best contact number. If you have a red tag or inspection notice, have it in front of you so we can confirm exactly what the inspector cited.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/commercial-kitchen-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide</Link>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Restaurant Owner&apos;s Plain-English Guide</Link>
                <Link href="/blog/restaurant-fire-prevention-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Restaurant Fire Prevention in San Diego: What Every Owner Needs to Know</Link>
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
