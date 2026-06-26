import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Grease Trap vs Hood Cleaning: What\'s the Difference? | Core Hood Cleaning San Diego',
  description: 'Grease traps and hood cleaning serve different purposes, target different grease, and have separate compliance requirements. Here is what each does and which you need.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/grease-trap-vs-hood-cleaning' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: "Grease Trap vs Hood Cleaning: What's the Difference?",
      description: "Grease traps and hood cleaning serve different purposes, capture different types of grease, and have separate compliance requirements. Here is a clear breakdown of what each does and why both matter.",
      image: 'https://www.corehoodcleaning.com/images/tech-kitchen-cleaning.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/grease-trap-vs-hood-cleaning',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between a grease trap and hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'A grease trap (or grease interceptor) is a plumbing device installed in the wastewater line that captures fats, oils, and grease before they enter the sewer system. Hood cleaning is the cleaning of the kitchen exhaust system — the hood canopy, ductwork, and rooftop fan — to remove grease vapors that accumulate as a fire hazard. They address entirely different grease streams: one is liquid grease going down the drain, the other is airborne grease vapor going up the exhaust.' }
        },
        {
          '@type': 'Question',
          name: 'Do most San Diego restaurants need both a grease trap and regular hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most full-service restaurants in San Diego are required to maintain both. Grease trap pumping is regulated by the City of San Diego\'s Metropolitan Wastewater Department and the county sewer authority. Hood cleaning is required by NFPA 96 and enforced by San Diego Fire-Rescue and County Environmental Health. They are separate compliance requirements with separate inspection tracks.' }
        },
        {
          '@type': 'Question',
          name: 'How often does a grease trap need to be pumped in San Diego?',
          acceptedAnswer: { '@type': 'Answer', text: 'Grease trap pumping frequency in San Diego depends on the capacity of the interceptor and the volume of grease your operation generates. The general rule is to pump when the interceptor is 25% full of grease. Many San Diego restaurants pump every 1 to 3 months. Your grease trap service company can assess the right interval for your operation.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if I neglect my grease trap?',
          acceptedAnswer: { '@type': 'Answer', text: 'A full or neglected grease trap allows fats, oils, and grease to pass into the municipal sewer system, where they solidify and cause blockages. San Diego Stormwater and the Metropolitan Wastewater Department can issue fines and require corrective action. Repeated violations can result in significant penalties and operational disruption.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if I neglect hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Neglecting hood cleaning allows grease to accumulate in the exhaust system — creating a direct fire hazard. Grease in ductwork is the leading cause of commercial kitchen fires. Non-compliance with NFPA 96 cleaning requirements also puts your fire permit, insurance coverage, and health grade at risk.' }
        },
        {
          '@type': 'Question',
          name: 'Can the same company do both grease trap pumping and hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Some companies offer both services, but they require different equipment and certifications. Grease trap pumping is a plumbing/waste hauling service requiring a licensed contractor and proper disposal. Hood cleaning requires IKECA-certified technicians and NFPA 96 expertise. Evaluate each service independently based on credentials, not just convenience of bundling.' }
        },
        {
          '@type': 'Question',
          name: 'Which is more urgent to address: a dirty grease trap or a dirty hood?',
          acceptedAnswer: { '@type': 'Answer', text: 'Both represent serious compliance and safety risks, but they operate on different timelines. A heavily loaded grease trap may cause a sewer backup within days. A dirty hood builds fire risk over weeks and months. In practice, both should be maintained on schedule — letting either lapse creates compounding risk and potential for concurrent violations from different agencies.' }
        }
      ]
    }
  ]
}

const tocItems = [
  { href: '#what-each-does', label: 'What Each System Does' },
  { href: '#different-grease', label: 'Two Different Types of Grease' },
  { href: '#compliance-tracks', label: 'Separate Compliance Requirements' },
  { href: '#grease-trap-basics', label: 'Grease Trap Basics for San Diego Operators' },
  { href: '#hood-cleaning-basics', label: 'Hood Cleaning Basics' },
  { href: '#do-you-need-both', label: 'Do You Need Both?' },
  { href: '#faq', label: 'FAQ' },
]

export default function GreaseTrapVsHoodCleaning() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 7 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Grease Trap vs Hood Cleaning: What Is the Difference and Do You Need Both?
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              Restaurant owners often confuse grease traps and hood cleaning — or assume they are related. They are not. They address entirely different grease streams, answer to different agencies, and have separate compliance requirements. Here is the clear breakdown.
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

            <h2 id="what-each-does" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Each System Does</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { name: 'Grease Trap', desc: 'A plumbing interceptor installed in the wastewater drain line. Captures fats, oils, and grease (FOG) from sinks, dishwashers, and floor drains before they enter the municipal sewer system. Prevents sewer blockages and fines from the water authority.', agency: 'City/County Water Authority', color: 'var(--true-blue)' },
                { name: 'Hood Cleaning', desc: 'The cleaning of the kitchen exhaust system — hood canopy, grease filters, plenum, ductwork, and rooftop exhaust fan. Removes grease vapor deposits that accumulate as a fire hazard. Required by NFPA 96 and enforced by fire and health inspectors.', agency: 'Fire Marshal + County Health', color: 'var(--rust)' },
              ].map(s => (
                <div key={s.name} style={{ background: 'var(--off-white)', border: `2px solid ${s.color}`, borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 900, textTransform: 'uppercase', color: s.color, marginBottom: '10px' }}>{s.name}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.6', marginBottom: '12px' }}>{s.desc}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: s.color }}>Regulated by: {s.agency}</div>
                </div>
              ))}
            </div>

            <h2 id="different-grease" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Two Different Types of Grease</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>The easiest way to understand why these are separate systems is to follow the grease from where it is produced.</p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { label: 'Liquid FOG (Fats, Oils & Grease)', path: 'Produced during cooking → goes into food scraps, pots, pans, and rinse water → flows down the drain → intercepted by the grease trap before it reaches the sewer', system: 'Grease Trap', color: 'var(--true-blue)' },
                { label: 'Airborne Grease Vapor', path: 'Produced during cooking → rises as vapor and smoke → enters the exhaust hood → condenses and deposits onto hood surfaces, ductwork interior, and exhaust fan → accumulates as flammable grease over time', system: 'Hood Cleaning', color: 'var(--rust)' },
              ].map(r => (
                <div key={r.label} style={{ padding: '16px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{r.label}</div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', color: r.color, background: r.color === 'var(--rust)' ? 'rgba(137,29,27,0.1)' : 'rgba(20,71,143,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginLeft: '12px' }}>{r.system}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{r.path}</div>
                </div>
              ))}
            </div>

            <h2 id="compliance-tracks" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Separate Compliance Requirements</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Grease traps and hood cleaning are regulated by entirely different agencies. Compliance with one does not affect the other — you can be current on your grease trap and still receive a fire citation for an uncleaned hood.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { system: 'Grease Trap', items: ['Regulated by the City of San Diego Metropolitan Wastewater Dept. and County sewer authority', 'Pumped by a licensed grease trap service company', 'Service records required — regulators may request manifests showing proper disposal', 'Violations result in fines from the water authority, not from fire or health inspectors'], color: 'var(--true-blue)' },
                { system: 'Hood Cleaning', items: ['Regulated by San Diego Fire-Rescue (NFPA 96) and County Environmental Health', 'Cleaned by IKECA-certified hood cleaning technicians', 'Service certificate and NFPA 96 sticker required as compliance documentation', 'Violations result in fire citations, health grade deductions, or closure orders'], color: 'var(--rust)' },
              ].map(col => (
                <div key={col.system} style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '20px', borderTop: `3px solid ${col.color}` }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: col.color, marginBottom: '12px' }}>{col.system}</div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {col.items.map(item => (
                      <li key={item} style={{ fontSize: '0.83rem', color: 'var(--charcoal)', padding: '6px 0', borderBottom: '1px solid var(--gray-light)', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                        <span style={{ color: col.color, fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 id="grease-trap-basics" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Grease Trap Basics for San Diego Operators</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Most full-service restaurants in San Diego are required to have a grease trap or grease interceptor. The specific requirements depend on your discharge volume and the city or county sewer authority that serves your location.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Pumping frequency', detail: 'Typically every 1–3 months depending on interceptor size and your operation\'s grease output. The standard rule is to pump when the trap is 25% full of grease and solids.' },
                { label: 'Who does it', detail: 'A licensed grease trap service company. They pump the contents, clean the trap, and provide a waste manifest documenting proper disposal at an approved facility.' },
                { label: 'Records required', detail: 'Keep service manifests on file. The City of San Diego\'s FOG (Fats, Oils, Grease) Program may request these during inspections.' },
                { label: 'Signs you are overdue', detail: 'Slow drains, sewer odors in the kitchen, or visible grease in floor drains are signs the trap may be full or failing.' },
              ].map((r, i) => (
                <li key={r.label} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', background: 'rgba(20,71,143,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{r.label}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.detail}</span>
                </li>
              ))}
            </ul>

            <h2 id="hood-cleaning-basics" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Hood Cleaning Basics</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Professional <Link href="/services/hood-cleaning" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>hood cleaning</Link> removes accumulated grease from the entire kitchen exhaust path — from the cooking surface through the ductwork and out the rooftop exhaust fan. NFPA 96 sets minimum cleaning frequencies based on your cooking type and volume.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Monthly', detail: 'Solid fuel cooking (wood, charcoal), high-volume operations, 24-hour restaurants' },
                { label: 'Quarterly', detail: 'Most full-service San Diego restaurants — moderate cooking volume, gas or electric equipment' },
                { label: 'Semi-annually', detail: 'Low-volume or seasonal operations — senior centers, churches, cafeterias with limited service hours' },
              ].map(r => (
                <li key={r.label} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{r.label}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.detail}</span>
                </li>
              ))}
            </ul>

            <h2 id="do-you-need-both" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Do You Need Both?</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>For almost all full-service restaurants in San Diego: yes. Both are required by separate regulatory bodies, and compliance with one does not satisfy the other.</p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '12px' }}>Quick Reference</p>
              {[
                { q: 'Do I need hood cleaning?', a: 'Yes, if you operate any commercial cooking equipment under an exhaust hood.' },
                { q: 'Do I need a grease trap?', a: 'Yes for most full-service restaurants. Confirm requirements with your local sewer authority.' },
                { q: 'Does cleaning my hood satisfy grease trap requirements?', a: 'No. They address different grease streams and are regulated by different agencies.' },
                { q: 'Does pumping my grease trap satisfy NFPA 96?', a: 'No. Hood cleaning must still be performed on the required schedule.' },
              ].map(r => (
                <div key={r.q} style={{ padding: '10px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{r.q}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.a}</div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Handle the Hood Cleaning Side</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning handles the NFPA 96 side of your compliance — certified cleaning with full documentation. Book a site assessment and we will confirm the right frequency for your operation.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule a Cleaning</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: "What is the difference between a grease trap and hood cleaning?", a: "A grease trap captures liquid fats, oils, and grease from drains before they reach the sewer. Hood cleaning removes grease vapor deposits from the kitchen exhaust system — the hood, ductwork, and rooftop fan. They address different grease streams, are regulated by different agencies, and have completely separate compliance requirements." },
              { q: "Do most San Diego restaurants need both a grease trap and regular hood cleaning?", a: "Yes. Most full-service restaurants in San Diego are required to maintain both. Grease trap pumping is regulated by the City's wastewater authority. Hood cleaning is required by NFPA 96 and enforced by San Diego Fire-Rescue and County Environmental Health." },
              { q: "How often does a grease trap need to be pumped in San Diego?", a: "Pumping frequency depends on interceptor capacity and your operation's grease output. The general rule is to pump when the trap is 25% full of grease. Many San Diego restaurants pump every 1–3 months." },
              { q: "What happens if I neglect my grease trap?", a: "A full grease trap allows FOG to pass into the municipal sewer, causing blockages. The City of San Diego can issue fines and require corrective action. Repeated violations result in significant penalties." },
              { q: "What happens if I neglect hood cleaning?", a: "Grease accumulates in the exhaust system, creating a direct fire hazard. Non-compliance with NFPA 96 also puts your fire permit, insurance coverage, and health grade at risk." },
              { q: "Can the same company do both grease trap pumping and hood cleaning?", a: "Some companies offer both, but they require different equipment and certifications. Grease trap pumping is a licensed waste hauling service. Hood cleaning requires IKECA-certified technicians. Evaluate each service on its own merits." },
              { q: "Which is more urgent: a dirty grease trap or a dirty hood?", a: "Both are serious compliance risks on different timelines. A full trap may cause a sewer backup within days. A dirty hood builds fire risk over weeks. Both should be maintained on schedule — neglecting either creates compounding risk and potential violations from different agencies simultaneously." },
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
