import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'What Happens During a Commercial Hood Cleaning? Step-by-Step Guide | Core Hood Cleaning',
  description: 'What does a professional hood cleaning actually cover? Step-by-step breakdown of the full NFPA 96 process — from protective setup to rooftop fan service and compliance documentation.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/what-happens-during-hood-cleaning' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'What Happens During a Commercial Hood Cleaning? Step-by-Step Guide',
      description: 'A step-by-step breakdown of what a professional NFPA 96 hood cleaning includes — from setup through rooftop fan service and compliance documentation.',
      image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/what-happens-during-hood-cleaning',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does a commercial hood cleaning include?', acceptedAnswer: { '@type': 'Answer', text: 'A full NFPA 96 compliant hood cleaning covers the entire exhaust path: hood canopy and interior surfaces, grease filters (removed and pressure washed separately), the plenum chamber, all ductwork, and the rooftop exhaust fan including blades and housing. It also includes protective setup before cleaning, before and after photos, and a compliance certificate with NFPA 96 sticker.' } },
        { '@type': 'Question', name: 'How long does a commercial hood cleaning take?', acceptedAnswer: { '@type': 'Answer', text: 'Most commercial hood cleanings take between 2 and 5 hours depending on the size of the system, the number of hoods, duct run length, and the level of grease accumulation. Kitchens that are cleaned on schedule take less time than kitchens that have been neglected. The service is performed after the kitchen closes — typically late night or early morning — so it does not interrupt operations.' } },
        { '@type': 'Question', name: 'Does the hood cleaning cover the rooftop?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — a full NFPA 96 compliant cleaning must include the rooftop exhaust fan. Technicians access the rooftop, open or hinge the fan housing, clean the fan blades and housing interior, and clean the surrounding curb area. Grease accumulation in the fan is one of the most significant fire hazards in the entire system. Any cleaning company that does not go to the rooftop is not providing a fully compliant service.' } },
        { '@type': 'Question', name: 'What documentation do I receive after a hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'After each service you should receive: a service report documenting what was cleaned, when, and by whom; before and after photos; a statement of NFPA 96 compliance; and an NFPA 96 compliance sticker applied to the hood. This documentation is what fire marshals and health inspectors ask to see, and what your insurance carrier requires as proof of compliance.' } },
        { '@type': 'Question', name: 'What is the difference between a full hood cleaning and just changing the filters?', acceptedAnswer: { '@type': 'Answer', text: 'Filter replacement or cleaning addresses only the grease filters at the hood opening. A full NFPA 96 cleaning covers everything behind and above the filters — the plenum, all ductwork, and the rooftop fan. Most of the grease accumulation in an exhaust system is in the ductwork and fan, not the filters. Filter-only service does not constitute an NFPA 96 compliant cleaning.' } },
        { '@type': 'Question', name: 'What is the degreaser used during hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'Professional hood cleaning uses commercial-grade alkaline degreaser — a caustic chemical agent that breaks down and emulsifies accumulated grease. It is much stronger than consumer cleaning products and requires trained application. The degreaser is applied to all interior surfaces, allowed to penetrate and break down grease, then pressure washed off with hot water. Proper disposal of the resulting wash water is required.' } },
        { '@type': 'Question', name: 'Can I stay in the restaurant during a hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'Hood cleaning is performed after the kitchen closes — typically late at night or before opening in the morning. The cleaning process uses strong chemical degreasers and high-pressure hot water, and produces fumes that make the kitchen uncomfortable and unsafe to occupy during service. The restaurant can typically open normally after the cleaning crew has finished and the kitchen has been restored.' } }
      ]
    }
  ]
}

const tocItems = [
  { href: '#before-cleaning-begins', label: 'Before the Cleaning Begins: Setup & Protection' },
  { href: '#the-cleaning-sequence', label: 'The Cleaning Sequence: Step by Step' },
  { href: '#hood-and-filters', label: 'Step 1–2: Hood Canopy and Filter Removal' },
  { href: '#degreaser-pressure-wash', label: 'Step 3–4: Degreaser and Pressure Washing' },
  { href: '#ductwork', label: 'Step 5: Ductwork Cleaning' },
  { href: '#rooftop-fan', label: 'Step 6: Rooftop Fan Service' },
  { href: '#grease-disposal', label: 'Step 7: Grease Collection and Disposal' },
  { href: '#after-cleaning', label: 'After the Cleaning: Documentation and Compliance' },
  { href: '#what-to-expect', label: 'What to Expect on Service Day' },
  { href: '#faq', label: 'FAQ' },
]

export default function WhatHappensDuringHoodCleaning() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Education</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              What Actually Happens During a Commercial Hood Cleaning?
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              Most restaurant owners schedule hood cleaning because they have to — not because they know what the service actually covers. Here is exactly what a full NFPA 96 compliant cleaning involves from setup to compliance certificate.
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

            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px', marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', marginBottom: '12px' }}>What a Full NFPA 96 Cleaning Covers</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {['Hood canopy — all interior surfaces', 'Grease filters — removed and pressure washed', 'Plenum chamber behind filters', 'Ductwork — full interior length', 'Rooftop exhaust fan — blades and housing', 'Grease collection trays and drain points'].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '8px', fontSize: '0.85rem', color: 'var(--charcoal)' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                  </div>
                ))}
              </div>
            </div>

            <h2 id="before-cleaning-begins" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Before the Cleaning Begins: Setup & Protection</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A professional hood cleaning crew arrives after your kitchen closes — typically late at night or early morning. Before any cleaning chemistry touches your kitchen, the crew&apos;s first priority is protection and documentation.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { step: 'Kitchen protection', desc: 'Every cooking surface, piece of equipment, and exposed area near the hood is covered with heavy-duty poly plastic sheeting. This prevents degreaser and hot wash water from contaminating your equipment, food prep surfaces, or stored food.' },
                { step: 'Utilities staged', desc: 'Hot water supply is connected (from your kitchen utility or the truck tank), and drainage collection is set up to capture all wash water and displaced grease. A compliant company never lets contaminated water drain into your restaurant\'s systems or onto the rooftop.' },
                { step: 'Before photos taken', desc: 'Before any cleaning begins, before photos are taken of every area that will be cleaned — hood interior, duct access points, rooftop fan. These photos are part of your service documentation and show baseline grease levels.' },
                { step: 'Access verification', desc: 'The technician confirms access to all parts of the system: duct access panels, rooftop access, and any areas that may have been installed without adequate cleaning access. Limited-access areas are documented in the service report.' },
              ].map(item => (
                <li key={item.step} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--true-blue)', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, lineHeight: '1.4' }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.step}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.desc}</span></div>
                </li>
              ))}
            </ul>

            <h2 id="the-cleaning-sequence" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Cleaning Sequence: Step by Step</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              An NFPA 96 compliant hood cleaning follows a specific sequence — from the cooking surface up through the system to the rooftop. Each component is addressed in turn so displaced grease moves toward collection points, not back into areas already cleaned.
            </p>

            <h2 id="hood-and-filters" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Step 1–2: Hood Canopy and Filter Removal</h2>
            <div style={{ marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Grease filter removal', desc: 'Grease filters are removed from the hood opening and set aside. Removing them gives direct access to the plenum chamber and allows the filters to be pressure washed separately — cleaning them in place leaves the surrounding surfaces contaminated.' },
                { num: '02', title: 'Hood canopy surface cleaning', desc: 'The exterior and interior surfaces of the hood canopy are cleaned. With filters removed, the full interior is accessible. Commercial-grade degreaser is applied to all surfaces and allowed to penetrate before washing. The canopy interior and surrounding hood shell are pressure washed and wiped down.' },
              ].map(s => (
                <div key={s.num} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', flexShrink: 0, width: '36px' }}>{s.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--black)', marginBottom: '6px' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="degreaser-pressure-wash" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Step 3–4: Degreaser Application and Pressure Washing</h2>
            <div style={{ marginBottom: '40px' }}>
              {[
                { num: '03', title: 'Degreaser application to all surfaces', desc: 'Commercial-grade alkaline degreaser is applied to all interior hood surfaces, the plenum chamber, and the accessible ductwork. The chemistry requires contact time to emulsify accumulated grease — the technician applies it and allows it to penetrate before washing begins. Rushing this step produces incomplete results.' },
                { num: '04', title: 'Hot-water pressure washing', desc: 'High-pressure hot water is used to wash all surfaces clean. A trained technician works methodically through the hood canopy, plenum, and duct interior — pushing displaced grease toward collection points at the bottom of the system. Hot water activates the degreaser chemistry and carries grease out of the system.' },
              ].map(s => (
                <div key={s.num} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', flexShrink: 0, width: '36px' }}>{s.num}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--black)', marginBottom: '6px' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="ductwork" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Step 5: Ductwork Cleaning</h2>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--gray-light)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', flexShrink: 0, width: '36px' }}>05</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--black)', marginBottom: '6px' }}>Full duct interior cleaning</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', marginBottom: '12px' }}>The ductwork is cleaned from both ends when accessible — from inside the hood at the bottom and from the rooftop at the top. For long duct runs, technicians use flexible pressure washing extensions to reach the full interior length.</p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>This is the most critical and most commonly skipped step by non-compliant operators. The ductwork contains more accumulated grease than the visible hood in most commercial kitchens, and a fire that reaches an uncleaned duct can travel to the rooftop before the suppression system stops it. NFPA 96 specifically requires the full duct interior — not just the accessible portions.</p>
                </div>
              </div>
              <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '20px', marginTop: '20px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>How to tell if your ductwork is actually being cleaned</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>Any service that does not include rooftop access is not cleaning the ductwork to the standard. Ask your technician for photos of the duct interior from the access points and the rooftop fan housing. If they cannot provide these, they did not access those areas.</p>
              </div>
            </div>

            <h2 id="rooftop-fan" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Step 6: Rooftop Exhaust Fan Service</h2>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--gray-light)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', flexShrink: 0, width: '36px' }}>06</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--black)', marginBottom: '6px' }}>Rooftop fan and housing</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>On the rooftop, technicians access the exhaust fan — which is hinged on a UL-listed upblast fan, or removed on other configurations — and clean the fan blades, fan housing interior, and surrounding curb area. The rooftop fan accumulates grease from the full exhaust path and is one of the most significant fire hazards in the system. A grease-packed fan is both a fire risk and an efficiency problem: clogged fan blades reduce exhaust airflow and drive up cooking temperatures and energy costs.</p>
                </div>
              </div>
            </div>

            <h2 id="grease-disposal" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Step 7: Grease Collection and Proper Disposal</h2>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--gray-light)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', flexShrink: 0, width: '36px' }}>07</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--black)', marginBottom: '6px' }}>Grease water collection and disposal</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>All wash water — heavily contaminated with displaced grease and cleaning chemistry — must be collected and properly disposed of. A responsible company never lets contaminated water drain into the rooftop surface, building downspouts, or storm drains. The collected waste is transported and disposed of at an approved facility. This is an environmental compliance requirement as well as a professional standard.</p>
                </div>
              </div>
            </div>

            <h2 id="after-cleaning" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>After the Cleaning: Documentation and Compliance</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Once the cleaning is complete, the protective plastic is removed and the kitchen is restored to its pre-service condition. The final phase of every compliant service is documentation.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { item: 'After photos', desc: 'After photos are taken of every area that was cleaned — matching the before photos — so you have visual confirmation of the work performed and a clear before/after comparison.' },
                { item: 'Final walkthrough', desc: 'The lead technician conducts a final walkthrough with the on-site contact to confirm all areas were addressed, protective sheeting has been removed, and the kitchen is ready for the next service.' },
                { item: 'NFPA 96 compliance sticker', desc: 'An NFPA 96 sticker is applied to the hood documenting the date of service and the company that performed it. This is the primary compliance indicator that fire marshals and health inspectors look for.' },
                { item: 'Service report', desc: 'You receive a written service report documenting all areas cleaned, the technician\'s certification, the date of service, and any access limitations or areas that could not be fully cleaned.' },
                { item: 'Compliance certificate', desc: 'A compliance certificate is provided confirming the service was performed to NFPA 96 standards. This is the document your insurance carrier and fire marshal ask to see as proof of compliant maintenance.' },
              ].map(item => (
                <li key={item.item} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.item}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.desc}</span></div>
                </li>
              ))}
            </ul>

            <h2 id="what-to-expect" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What to Expect on Service Day</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>A few things to prepare for and expect when your service is scheduled:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { label: 'Timing', desc: 'Most services are scheduled to start after closing — typically 10 PM to 2 AM, depending on your close time and the crew\'s schedule. Expect 2–5 hours depending on system size.' },
                { label: 'Access needed', desc: 'Technicians need access to the kitchen, roof access hatch or exterior stairway, and hot water utility. Confirm these access points are available the morning of service.' },
                { label: 'Kitchen condition', desc: 'The crew will set up their own protective sheeting, but a clean and organized kitchen makes the job faster and more thorough. Empty grease traps before the service if possible.' },
                { label: 'What you receive', desc: 'Service report, before/after photos, NFPA 96 sticker on hood, compliance certificate. File the documents and confirm the next scheduled date with the company.' },
              ].map(item => (
                <div key={item.label} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '18px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', marginBottom: '8px' }}>{item.label}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Schedule Your NFPA 96 Cleaning</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides full NFPA 96 service for San Diego restaurants — covering the entire exhaust path with before/after photos and full compliance documentation on every visit.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule a Cleaning</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'What does a commercial hood cleaning include?', a: 'A full NFPA 96 compliant cleaning covers the entire exhaust path: hood canopy, grease filters (removed and washed separately), plenum chamber, all ductwork, and the rooftop exhaust fan. It also includes setup protection, before and after photos, and a compliance certificate with NFPA 96 sticker.' },
              { q: 'How long does a commercial hood cleaning take?', a: 'Most cleanings take 2–5 hours depending on system size, number of hoods, duct run length, and grease accumulation level. Systems on a regular cleaning schedule take less time than neglected systems. Service is performed after closing to avoid interrupting operations.' },
              { q: 'Does the hood cleaning cover the rooftop?', a: 'Yes — a full NFPA 96 compliant cleaning must include the rooftop exhaust fan. Technicians clean the fan blades, housing interior, and surrounding curb area. Any service that does not include rooftop access is not providing a fully compliant cleaning.' },
              { q: 'What documentation do I receive after a hood cleaning?', a: 'After each service you receive: a service report, before and after photos, a statement of NFPA 96 compliance, and an NFPA 96 compliance sticker on the hood. This is the documentation fire marshals and health inspectors ask for.' },
              { q: 'What is the difference between a full hood cleaning and just changing the filters?', a: 'Filter replacement only addresses the grease filters at the hood opening. A full NFPA 96 cleaning covers everything behind and above the filters — the plenum, all ductwork, and the rooftop fan. Filter-only service is not an NFPA 96 compliant cleaning.' },
              { q: 'What is the degreaser used during hood cleaning?', a: 'Professional hood cleaning uses commercial-grade alkaline degreaser — much stronger than consumer products. It is applied to all interior surfaces, allowed to penetrate, then pressure washed off with hot water. All resulting wash water must be collected and properly disposed of.' },
              { q: 'Can I stay in the restaurant during a hood cleaning?', a: 'No — hood cleaning uses strong chemical degreasers and high-pressure hot water that produce fumes making the kitchen unsafe to occupy during service. The restaurant can open normally after the crew finishes and the kitchen is restored.' },
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
