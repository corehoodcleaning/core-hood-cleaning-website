import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Restaurant Fire Prevention San Diego: The Complete Grease Fire Safety Guide | Core Hood Cleaning',
  description: 'Grease fires are the #1 cause of restaurant fires in California. How to protect your San Diego restaurant with the right exhaust maintenance plan, fire suppression setup, and NFPA 96 compliance.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/restaurant-fire-prevention-san-diego' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Restaurant Fire Prevention San Diego: The Complete Grease Fire Safety Guide',
      description: 'Grease fires are the #1 cause of restaurant fires in California. A complete prevention guide for San Diego restaurant owners covering exhaust maintenance, fire suppression, and NFPA 96 compliance.',
      image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/restaurant-fire-prevention-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is the most common cause of restaurant fires in California?', acceptedAnswer: { '@type': 'Answer', text: 'Cooking equipment is the leading cause of commercial structure fires in California. Grease accumulation in the kitchen exhaust system is the most common specific cause — when grease builds up in the hood, ductwork, or exhaust fan, it creates a fuel path that can carry a fire from the cooking surface to the rooftop.' } },
        { '@type': 'Question', name: 'How does grease in the exhaust system start a fire?', acceptedAnswer: { '@type': 'Answer', text: 'Grease is flammable. Over time, airborne grease vapors coat the interior of the exhaust hood, ductwork, and fan. When a flare-up occurs at the cooking surface, flames can enter the hood and ignite the accumulated grease. Once burning inside the duct, the fire travels the full length of the duct run — often reaching the rooftop fan and the building structure — before the suppression system activates.' } },
        { '@type': 'Question', name: 'Does the automatic fire suppression system eliminate the need for hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'No. The suppression system is a response tool — it activates after a fire starts. Hood cleaning is a prevention measure that removes the fuel source so the fire does not have a path to spread. NFPA 96 requires both: regular suppression system inspections and regular hood cleaning. Neither substitutes for the other.' } },
        { '@type': 'Question', name: 'How often does a San Diego restaurant need hood cleaning for fire prevention?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 requires cleaning intervals based on cooking type: monthly for solid fuel and high-volume operations, quarterly for most full-service restaurants, semi-annually for low-volume institutional kitchens, and annually for non-grease cooking operations. A certified technician determines the correct interval based on your specific equipment and cooking volume.' } },
        { '@type': 'Question', name: 'What fire prevention steps can a restaurant owner take beyond hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'Key fire prevention steps include: keeping hood cleaning on schedule, having the fire suppression system inspected semi-annually per NFPA 96, ensuring filters are cleaned or replaced regularly, training staff on what to do if a cooking fire starts, keeping the area around cooking equipment clear of combustibles, and maintaining grease collection trays to prevent overflow.' } },
        { '@type': 'Question', name: 'How do I know if my exhaust system is a fire risk right now?', acceptedAnswer: { '@type': 'Answer', text: 'Warning signs of a fire risk in your exhaust system include: visible grease dripping from hood filters or the hood canopy during service, the NFPA 96 cleaning sticker showing a date past your required interval, grease odor or smoke coming from the ductwork, and grease buildup visible on the rooftop around the exhaust fan. If you see any of these, schedule service immediately — do not wait for the next scheduled date.' } },
        { '@type': 'Question', name: 'Can a grease fire in the ductwork be stopped by the kitchen fire suppression system?', acceptedAnswer: { '@type': 'Answer', text: 'The kitchen suppression system is designed to protect the hood and immediately adjacent cooking surfaces. A fire that enters the ductwork and travels beyond the hood area may not be fully suppressed by the kitchen system alone — it can spread beyond the suppression system\'s coverage zone and require the building fire suppression or fire department response.' } }
      ]
    }
  ]
}

const tocItems = [
  { href: '#the-grease-fire-problem', label: 'The Grease Fire Problem in Commercial Kitchens' },
  { href: '#how-fires-spread', label: 'How Grease Fires Spread Through the Exhaust System' },
  { href: '#prevention-layers', label: 'The Three Layers of Fire Prevention' },
  { href: '#hood-cleaning-role', label: 'Hood Cleaning as Fire Prevention' },
  { href: '#suppression-system', label: 'Your Fire Suppression System' },
  { href: '#daily-practices', label: 'Daily & Weekly Prevention Practices' },
  { href: '#warning-signs', label: 'Warning Signs of Fire Risk Right Now' },
  { href: '#nfpa-compliance', label: 'NFPA 96 Compliance in San Diego' },
  { href: '#faq', label: 'FAQ' },
]

export default function FirePreventionPost() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 10 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Restaurant Fire Prevention in San Diego: The Complete Grease Fire Safety Guide
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              Cooking equipment is the leading cause of commercial building fires in California — and grease in the exhaust system is the most preventable version of this risk. Here is what San Diego restaurant owners need to know to protect their business.
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

            <h2 id="the-grease-fire-problem" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Grease Fire Problem in Commercial Kitchens</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Cooking equipment fires account for the majority of commercial structure fires in California each year. According to fire safety data, the dominant cause is grease accumulation in commercial kitchen exhaust systems — a condition that builds gradually and silently until it creates the conditions for a catastrophic fire.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Every commercial kitchen produces grease-laden vapor as a byproduct of cooking. This vapor is captured by the hood and carried through the exhaust system — but it leaves behind a film of grease on every interior surface it passes through. Over time, that film builds into a thick layer of accumulated grease that coats the hood canopy, the ductwork, and the rooftop exhaust fan.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              The critical problem: grease is highly flammable. Once grease accumulates beyond a certain threshold, a single flare-up at the cooking surface can ignite the entire exhaust system.
            </p>

            <h2 id="how-fires-spread" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How Grease Fires Spread Through the Exhaust System</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Understanding how grease fires spread helps explain why proper maintenance at every part of the exhaust system is required — not just the visible hood.</p>
            <div style={{ marginBottom: '40px' }}>
              {[
                { step: '01', title: 'Ignition at the cooking surface', desc: 'A flare-up from a fryer, grill, or range sends flames into the hood canopy. This is a normal event in most commercial kitchens — but in a clean system, it goes out quickly. In a grease-laden system, it is the trigger.' },
                { step: '02', title: 'Grease in the hood ignites', desc: 'The accumulated grease on the hood interior catches fire. The fire now has a fuel source that is larger and more persistent than the original cooking flare-up. The fire grows and draws air from the kitchen to sustain combustion.' },
                { step: '03', title: 'Fire enters the ductwork', desc: 'As grease burns off the hood interior, the fire travels into the ductwork — following the accumulated grease coating along the duct walls. Duct fires are essentially impossible to fight from the kitchen level.' },
                { step: '04', title: 'The fire travels to the rooftop', desc: 'A grease-coated duct acts as a fuel line. The fire can travel the full length of the duct run — sometimes 20 to 40 feet — and reach the rooftop exhaust fan and the surrounding building structure before the kitchen suppression system can stop it.' },
                { step: '05', title: 'Structural damage and building fire', desc: 'Once the fire reaches the rooftop fan housing and the building structure, it can penetrate into ceiling cavities and spread to neighboring spaces. What started as a cooking flare-up can become a total loss.' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', flexShrink: 0, width: '36px' }}>{s.step}</div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--black)', marginBottom: '6px' }}>{s.title}</h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 id="prevention-layers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Three Layers of Fire Prevention</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Effective restaurant fire prevention uses three distinct layers. Each one addresses a different part of the risk — none of them alone is sufficient.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Fuel Removal', desc: 'Regular hood cleaning removes accumulated grease from the exhaust system — eliminating the fuel source before fire can use it. This is the only preventive layer.', color: '#4a6741' },
                { num: '02', title: 'Fire Containment', desc: 'The automatic fire suppression system activates when a fire is detected, suppressing it at the source and limiting spread. This is a reactive containment layer.', color: 'var(--true-blue)' },
                { num: '03', title: 'Staff Response', desc: 'Trained kitchen staff who know what to do when a cooking fire starts — and when to evacuate — are the human layer of protection when equipment fails or fire spreads.', color: 'var(--rust)' },
              ].map(l => (
                <div key={l.num} style={{ background: 'var(--off-white)', border: `2px solid ${l.color}`, borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: l.color, marginBottom: '8px' }}>{l.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{l.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{l.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="hood-cleaning-role" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Hood Cleaning as Fire Prevention</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Hood cleaning is the only fire prevention measure that removes the fuel source itself. Every other measure assumes grease is present and tries to limit how far a fire can spread. A properly maintained, clean exhaust system reduces the available fuel and limits the conditions for a fire to grow beyond a small flare-up.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A compliant NFPA 96 hood cleaning covers the entire exhaust path — not just the visible hood filters. Cleaning only the hood canopy while leaving grease in the ductwork is a partial measure that still leaves significant fuel available if a fire reaches the duct. The cleaning must extend from the cooking surface all the way to the rooftop exhaust fan.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
              <div style={{ background: 'var(--true-blue)', padding: '12px 20px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--off-white)' }}>What a Full NFPA 96 Cleaning Covers</span>
              </div>
              {['Hood canopy and all interior surfaces', 'Grease filters (removed and pressure washed separately)', 'Plenum chamber behind filters', 'Ductwork — full interior length', 'Rooftop exhaust fan — blades, housing, curb area', 'Grease collection trays and drain points'].map((item, i) => (
                <div key={item} style={{ display: 'flex', gap: '12px', padding: '12px 20px', borderBottom: '1px solid var(--gray-light)', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)', fontSize: '0.88rem', color: 'var(--charcoal)' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>✓</span>{item}
                </div>
              ))}
            </div>

            <h2 id="suppression-system" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Your Fire Suppression System</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The automatic fire suppression system installed inside your hood is a required component of commercial kitchen fire protection. It activates when a fire is detected at the cooking surface and releases suppressing agent through nozzles positioned above the cooking equipment.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Under NFPA 96, fire suppression systems must be inspected semi-annually by a licensed suppression system contractor. The inspection covers nozzle integrity, agent quantity, fusible links, manual pull stations, and the fusible link connections. Grease accumulation on suppression nozzles is one of the most common inspection findings — and it is directly caused by inadequate hood cleaning.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '10px' }}>The suppression system does not replace hood cleaning</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>The suppression system activates after a fire starts. Hood cleaning prevents the fire from having fuel to grow and spread. NFPA 96 requires both — one does not substitute for the other. A suppression system that has never been tested, or that has grease-clogged nozzles, may not activate properly when you need it.</p>
            </div>

            <h2 id="daily-practices" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Daily & Weekly Fire Prevention Practices</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Scheduled hood cleaning is the foundation — but several daily and weekly practices keep fire risk low between professional services:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { freq: 'Daily', action: 'Wipe down the hood canopy and filter surfaces after service to remove surface grease accumulation. Check that grease collection trays are not overflowing.' },
                { freq: 'Weekly', action: 'Remove and wash grease filters per the manufacturer specification, or more frequently during high-volume cooking periods. Check grease drip trays and drain pathways.' },
                { freq: 'Monthly', action: 'Visually inspect the hood interior for visible grease buildup. If grease is noticeably accumulated before your next scheduled professional service, contact your hood cleaning company.' },
                { freq: 'Semi-Annually', action: 'Schedule your fire suppression system inspection per NFPA 96 requirements. This should coincide with (or be scheduled near) your hood cleaning date.' },
                { freq: 'Ongoing', action: 'Train kitchen staff on what to do when a flare-up occurs: keep a lid nearby to smother small pan fires, know how to use a fire extinguisher, know the manual pull station location, and know when to evacuate.' },
              ].map(item => (
                <li key={item.freq} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', background: 'rgba(20,71,143,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{item.freq}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.action}</span>
                </li>
              ))}
            </ul>

            <h2 id="warning-signs" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Warning Signs of Fire Risk Right Now</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>These conditions indicate elevated fire risk and warrant immediate action — do not wait for the next scheduled service date:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                'Visible grease dripping from filters or hood canopy during cooking service',
                'Grease odor coming from the ductwork or rooftop area',
                'NFPA 96 sticker shows a cleaning date past your required interval',
                'Grease accumulation visible inside the duct at access panels',
                'Grease pooling or overflowing from the grease collection tray',
                'Smoke coming from the hood or duct during normal cooking',
                'You recently added high-grease equipment without adjusting the cleaning schedule',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>⚠</span>{item}
                </li>
              ))}
            </ul>

            <h2 id="nfpa-compliance" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 Compliance in San Diego</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              San Diego County fire marshals enforce NFPA 96 — the national standard for commercial kitchen ventilation and fire protection — as part of fire inspection and permit renewal. The most common finding during inspections is an expired cleaning sticker: the hood shows a cleaning date that is past the interval required for that operation type.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Keeping a scheduled maintenance agreement with a certified hood cleaning company is the simplest way to stay ahead of compliance requirements. You receive a written service record, compliance certificate, and updated NFPA 96 sticker after each service — the documentation fire marshals and insurance carriers ask for.
            </p>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Schedule Your Fire Prevention Service</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides full NFPA 96 hood cleaning in San Diego — covering the entire exhaust path from cooking surface to rooftop fan, with full documentation on every service.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule Cleaning</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'What is the most common cause of restaurant fires in California?', a: 'Cooking equipment is the leading cause. Grease accumulation in the kitchen exhaust system is the most common specific cause — when grease builds up in the hood, ductwork, or exhaust fan, it creates a fuel path that can carry a fire from the cooking surface to the rooftop.' },
              { q: 'How does grease in the exhaust system start a fire?', a: 'Grease is flammable. Airborne grease vapors coat the exhaust system interior over time. When a flare-up occurs at the cooking surface, flames can enter the hood and ignite the accumulated grease. Once burning inside the duct, the fire travels the full length of the duct run before the suppression system can stop it.' },
              { q: 'Does the automatic fire suppression system eliminate the need for hood cleaning?', a: 'No. The suppression system responds after a fire starts. Hood cleaning removes the fuel source before a fire can spread. NFPA 96 requires both — neither substitutes for the other.' },
              { q: 'How often does a San Diego restaurant need hood cleaning for fire prevention?', a: 'NFPA 96 sets the interval by cooking type: monthly for solid fuel and high-volume operations, quarterly for most full-service restaurants, semi-annually for low-volume kitchens. A certified technician determines the correct interval for your equipment.' },
              { q: 'What fire prevention steps can a restaurant owner take beyond hood cleaning?', a: 'Semi-annual fire suppression system inspection, regular filter cleaning or replacement, staff training on fire response, keeping cooking areas clear of combustibles, and monitoring grease collection trays are all important practices between professional cleaning services.' },
              { q: 'How do I know if my exhaust system is a fire risk right now?', a: 'Warning signs include: visible grease dripping from the hood, an expired NFPA 96 sticker, grease odor from the ductwork, grease overflowing from collection trays, or smoke from the hood during normal cooking. Schedule immediate service if you see any of these.' },
              { q: 'Can a grease fire in the ductwork be stopped by the kitchen fire suppression system?', a: 'The kitchen suppression system protects the hood and immediately adjacent cooking surfaces. A fire that travels into the ductwork beyond the hood area can spread beyond the suppression system\'s coverage zone and require full fire department response.' },
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
