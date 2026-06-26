import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Kitchen Fire Suppression Systems: What San Diego Restaurants Need to Know | Core Hood Cleaning',
  description: 'How commercial kitchen fire suppression systems work, NFPA 96 inspection requirements, the link between hood cleaning and suppression system effectiveness, and what San Diego inspectors check.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-fire-suppression' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Commercial Kitchen Fire Suppression Systems: What San Diego Restaurants Need to Know',
      description: 'How commercial kitchen fire suppression systems work, NFPA 96 requirements, the relationship between hood cleaning and suppression system effectiveness, and what San Diego fire inspectors check.',
      image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-fire-suppression',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How often does a commercial kitchen fire suppression system need to be inspected in California?',
          acceptedAnswer: { '@type': 'Answer', text: 'California Fire Code requires commercial kitchen fire suppression systems to be inspected and serviced by a licensed contractor every 6 months (semi-annually). The inspection tag on the pull station must reflect a current date within the last 6 months. San Diego fire inspectors verify this tag during routine inspections.' }
        },
        {
          '@type': 'Question',
          name: 'What is the relationship between hood cleaning and fire suppression systems?',
          acceptedAnswer: { '@type': 'Answer', text: 'A fire suppression system is designed to extinguish a grease fire that starts at the cooking surface. However, if the exhaust ductwork above the cooking equipment is coated with grease, a suppression system discharge may extinguish the initial fire while allowing a secondary duct fire to spread. Regular hood cleaning is essential for the suppression system to function as designed — the two systems work together.' }
        },
        {
          '@type': 'Question',
          name: 'What type of fire suppression system is required in commercial kitchens?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most commercial kitchens use wet chemical suppression systems (Class K agents) designed specifically for grease fires. Dry chemical systems are also used. The system must be listed for use with the cooking equipment present and installed per the manufacturer specifications and NFPA 96. Halon systems are no longer permitted in new installations.' }
        },
        {
          '@type': 'Question',
          name: 'Does grease buildup affect how a fire suppression system works?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, significantly. Excessive grease accumulation in the exhaust system can impede suppression agent distribution from nozzles located in the plenum. Grease-coated nozzle heads may not discharge properly. Additionally, a grease fire in a dirty duct can re-ignite after suppression discharge if the duct walls are heavily coated. This is why NFPA 96 links cleaning requirements directly to suppression system integrity.' }
        },
        {
          '@type': 'Question',
          name: 'Who can inspect a commercial kitchen fire suppression system in California?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fire suppression system inspection and service in California must be performed by a licensed contractor with a C-16 Fire Protection license. Do not allow your hood cleaning company or general maintenance staff to inspect or service the suppression system — this is a licensed specialty trade.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if my fire suppression system tag is expired during a San Diego inspection?',
          acceptedAnswer: { '@type': 'Answer', text: 'An expired suppression system tag is a fire code violation. San Diego Fire-Rescue can issue a Notice of Violation requiring correction within a set timeframe. If the system has not been serviced, your fire permit may be placed on hold. Operating a commercial kitchen without a current suppression system inspection is an unacceptable fire risk and a liability exposure.' }
        },
        {
          '@type': 'Question',
          name: 'Should hood cleaning and fire suppression inspection be scheduled at the same time?',
          acceptedAnswer: { '@type': 'Answer', text: 'They do not need to occur at the same time, but they should be coordinated so neither falls out of date between cycles. Many San Diego operators schedule suppression system inspection in the same month as a hood cleaning to keep both on a synchronized compliance calendar. Your hood cleaning company and suppression contractor are separate vendors, but both should be on your compliance schedule.' }
        }
      ]
    }
  ]
}

const tocItems = [
  { href: '#how-systems-work', label: 'How Kitchen Suppression Systems Work' },
  { href: '#types', label: 'Types of Systems Used in Commercial Kitchens' },
  { href: '#nfpa-requirements', label: 'NFPA 96 & California Inspection Requirements' },
  { href: '#hood-cleaning-link', label: 'Why Hood Cleaning & Suppression Are Linked' },
  { href: '#what-inspectors-check', label: 'What San Diego Fire Inspectors Check' },
  { href: '#maintenance-schedule', label: 'Coordinating Your Maintenance Schedule' },
  { href: '#faq', label: 'FAQ' },
]

export default function CommercialKitchenFireSuppression() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Fire Safety</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 8 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Commercial Kitchen Fire Suppression Systems: What San Diego Restaurants Need to Know
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              Your fire suppression system and your hood cleaning schedule are not separate compliance items — they are two parts of the same fire safety strategy. Here is how the systems connect and what San Diego fire inspectors check.
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

            <h2 id="how-systems-work" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How Commercial Kitchen Suppression Systems Work</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>A commercial kitchen fire suppression system is an automatic firefighting system integrated into the exhaust hood above cooking equipment. When a fire is detected — either by heat fusible links or by manual pull station activation — the system discharges a suppression agent through nozzles positioned to cover the cooking surfaces and the plenum chamber above them.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>The system also automatically shuts off the fuel supply to cooking equipment (gas or electric) at the moment of activation. This is critical — a grease fire that continues to receive fuel will reignite after suppression agent is depleted.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>After discharge, the kitchen must be inspected by a licensed suppression system contractor before the system can be reset and the kitchen returned to service. Suppression systems are single-use discharge devices — they cannot be reset without professional service.</p>

            <h2 id="types" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Types of Suppression Systems Used in Commercial Kitchens</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { type: 'Wet Chemical (Class K)', desc: 'The current standard for commercial cooking operations. Uses a potassium-based agent that reacts with cooking oils to form a soap-like foam, smothering and cooling the fire. Required for high-temperature cooking equipment including fryers, griddles, and woks.', color: 'var(--rust)' },
                { type: 'Dry Chemical', desc: 'An older system type still found in some kitchens. Uses sodium bicarbonate or monoammonium phosphate. Effective but leaves significant residue that requires thorough cleaning. Less common in new installations.', color: 'var(--true-blue)' },
              ].map(t => (
                <div key={t.type} style={{ background: 'var(--off-white)', border: `2px solid ${t.color}`, borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: t.color, marginBottom: '8px' }}>System Type</div>
                  <div style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem', marginBottom: '8px' }}>{t.type}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{t.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="nfpa-requirements" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 & California Inspection Requirements</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>NFPA 96 and California Fire Code establish the inspection and maintenance requirements for kitchen suppression systems. San Diego Fire-Rescue enforces these standards during routine and complaint-based inspections.</p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { req: 'Semi-annual inspection', detail: 'Every 6 months by a California C-16 licensed fire protection contractor. This is the minimum — some high-volume operations warrant more frequent inspection.' },
                { req: 'Inspection tag on pull station', detail: 'After each service, a tag documenting the inspection date and contractor information must be affixed to the pull station. This is what fire inspectors verify first.' },
                { req: 'Nozzle condition check', detail: 'Nozzles and fusible links must be inspected for blockage, corrosion, or grease accumulation that could impair discharge. This is one reason hood cleaning and suppression inspection are linked.' },
                { req: 'Fuel shutoff verification', detail: 'The automatic fuel shutoff must be tested to confirm it activates upon system discharge.' },
                { req: 'System pressure and agent levels', detail: 'For pressurized systems, agent quantity and tank pressure must be within specification. Low pressure or depleted agent must be recharged.' },
                { req: 'Recharge after any discharge', detail: 'Any system that has discharged — for any reason — must be professionally inspected and recharged before the kitchen reopens.' },
              ].map((r, i) => (
                <div key={r.req} style={{ display: 'flex', gap: '16px', padding: '12px 0', borderBottom: i < 5 ? '1px solid var(--gray-light)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--rust)', fontSize: '0.75rem', flexShrink: 0, width: '120px', paddingTop: '2px', lineHeight: '1.4', textTransform: 'uppercase' }}>{r.req}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.detail}</span>
                </div>
              ))}
            </div>

            <h2 id="hood-cleaning-link" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Hood Cleaning and Fire Suppression Are Directly Linked</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Most restaurant owners think of <Link href="/services/hood-cleaning" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>hood cleaning</Link> and fire suppression as two separate compliance requirements. They are not — they are two components of the same fire protection strategy, and the failure of one compromises the other.</p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '12px' }}>How They Interact</p>
              {[
                { point: 'Suppression nozzles in the plenum can be blocked by grease', detail: 'Nozzle orifices are small. Heavy grease accumulation on nozzle heads impairs or prevents proper discharge when the system activates.' },
                { point: 'Grease-coated ducts sustain fires after suppression discharge', detail: 'A suppression system is sized to extinguish a fire at the cooking surface. If the ductwork above is heavily grease-coated, a duct fire can sustain itself even after suppression agent is exhausted at the cooking surface.' },
                { point: 'Dirty exhaust systems trigger more frequent accidental discharges', detail: 'Heat from cooking can activate fusible links that are already partially melted from continuous heat cycling. This leads to costly accidental discharges that could be prevented with regular cleaning.' },
                { point: 'Insurance requirements link both systems', detail: 'Commercial property insurers require both NFPA 96-compliant cleaning and current suppression system inspection. A fire claim where either is out of compliance creates grounds for coverage denial.' },
              ].map(r => (
                <div key={r.point} style={{ padding: '10px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{r.point}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{r.detail}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>This is why NFPA 96 addresses both in the same standard. A suppression system in a kitchen with a dirty exhaust system is operating in a compromised environment. Regular <Link href="/services/nfpa-inspection" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>NFPA 96 inspections and cleaning</Link> protect both your suppression system's effectiveness and your compliance standing.</p>

            <h2 id="what-inspectors-check" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What San Diego Fire Inspectors Check on the Suppression System</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                'Inspection tag on the pull station — date must be within the last 6 months',
                'Visual condition of suppression nozzles — no blockage or heavy grease coating',
                'Pull station and manual activation handles accessible and unobstructed',
                'Fusible links in good condition — not corroded, melted, or missing',
                'System hazard placard present and current',
                'Automatic fuel shutoff connected and functional',
                'System not showing signs of accidental discharge (loose nozzles, agent residue)',
              ].map(i => (
                <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{i}
                </li>
              ))}
            </ul>

            <h2 id="maintenance-schedule" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Coordinating Your Hood Cleaning and Suppression Schedule</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>For most San Diego full-service restaurants on a quarterly hood cleaning schedule, here is a practical coordination framework:</p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { period: 'Every 3 months', task: 'Professional NFPA 96 hood cleaning (more frequently if cooking volume or equipment requires it). Certificate and sticker on file.' },
                { period: 'Every 6 months', task: 'Fire suppression system inspection by a California C-16 licensed contractor. Coordinate so this falls between hood cleanings — e.g., hood cleaning in January and July, suppression inspection in April and October.' },
                { period: 'After any discharge', task: 'Do not reset or reopen without a licensed contractor inspection. This is both a code requirement and a liability issue.' },
                { period: 'Before any equipment change', task: 'Adding or replacing cooking equipment may require suppression system modification by a licensed contractor. Do not add fryers or other high-heat equipment without confirming your suppression system is rated for the new configuration.' },
              ].map((r, i) => (
                <div key={r.period} style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: i < 3 ? '1px solid var(--gray-light)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--true-blue)', flexShrink: 0, width: '90px', paddingTop: '2px', lineHeight: '1.4' }}>{r.period}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.task}</div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Keep Your Exhaust System Suppression-Ready</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides NFPA 96-compliant hood cleaning that protects both your fire suppression system effectiveness and your compliance record with San Diego Fire-Rescue.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule a Cleaning</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'How often does a commercial kitchen fire suppression system need to be inspected in California?', a: 'California Fire Code requires commercial kitchen fire suppression systems to be inspected and serviced by a licensed contractor every 6 months. The inspection tag on the pull station must reflect a current date within the last 6 months. San Diego fire inspectors verify this during routine inspections.' },
              { q: 'What is the relationship between hood cleaning and fire suppression systems?', a: 'A fire suppression system is designed to extinguish a grease fire at the cooking surface. However, if the exhaust ductwork is coated with grease, a suppression discharge may extinguish the initial fire while a secondary duct fire spreads. Regular hood cleaning is essential for the suppression system to function as designed.' },
              { q: 'What type of fire suppression system is required in commercial kitchens?', a: 'Most commercial kitchens use wet chemical suppression systems (Class K agents) designed specifically for grease fires. The system must be listed for use with the cooking equipment present and installed per NFPA 96 requirements.' },
              { q: 'Does grease buildup affect how a fire suppression system works?', a: 'Yes. Excessive grease can block suppression nozzles in the plenum, impair discharge, and allow duct fires to sustain themselves after suppression discharge. This is why NFPA 96 links cleaning requirements directly to suppression system integrity.' },
              { q: 'Who can inspect a commercial kitchen fire suppression system in California?', a: 'Fire suppression system inspection and service in California must be performed by a licensed contractor with a C-16 Fire Protection license. Hood cleaning companies and general maintenance staff cannot perform this service.' },
              { q: 'What happens if my fire suppression system tag is expired during a San Diego inspection?', a: 'An expired suppression system tag is a fire code violation. San Diego Fire-Rescue can issue a Notice of Violation and your fire permit may be placed on hold. Operating without a current inspection creates liability exposure and may void your fire insurance.' },
              { q: 'Should hood cleaning and fire suppression inspection be scheduled at the same time?', a: 'They do not need to occur simultaneously, but both should be on a coordinated compliance calendar so neither falls out of date. Many operators schedule suppression inspection in the same month as a hood cleaning cycle to simplify compliance tracking.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
