import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Kitchen Hood Cleaning San Diego: Complete NFPA 96 Guide | Core Hood Cleaning',
  description: 'Everything San Diego restaurant owners need to know about commercial kitchen hood cleaning — NFPA 96 requirements, cleaning frequency, what a full service covers, and how to pass fire marshal inspections.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide',
      description: 'Everything San Diego restaurant owners need to know about commercial kitchen hood cleaning — NFPA 96 requirements, cleaning frequency, what a full service covers, and how to pass fire marshal inspections.',
      image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-05-29',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How often should commercial kitchen hoods be cleaned in San Diego?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 sets cleaning frequency by cooking type and volume: monthly for high-volume and solid-fuel operations (wood-burning ovens, woks, 24-hour kitchens), quarterly for most full-service restaurants, and semi-annually for low-volume institutional kitchens. San Diego fire marshals enforce these frequencies during inspections.' } },
        { '@type': 'Question', name: 'What happens if I fail a fire inspection due to a dirty hood system?', acceptedAnswer: { '@type': 'Answer', text: 'A failed inspection can result in an immediate closure order, fines, and voided insurance coverage. You need to schedule emergency cleaning and pass a re-inspection before reopening. Core Hood Cleaning offers same-day emergency service throughout San Diego County — call (858) 361-2570.' } },
        { '@type': 'Question', name: 'What does a full commercial hood cleaning include?', acceptedAnswer: { '@type': 'Answer', text: 'A compliant NFPA 96 service covers the complete exhaust path: hood canopy, baffles, plenum chamber, all ductwork from kitchen to rooftop, the exhaust fan blades and housing, and grease containment and disposal. Every Core Hood Cleaning service includes before and after photos, a written service report, and an NFPA 96 compliance certificate.' } },
        { '@type': 'Question', name: 'Does hood cleaning include the rooftop exhaust fan?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — a fully compliant NFPA 96 cleaning must include the rooftop exhaust fan. Technicians access the roof, open the fan housing, and clean the blades, housing interior, and curb area. The rooftop fan accumulates heavy grease deposits and is one of the most significant fire hazards in the system. Any company that does not go to the roof is not providing a fully compliant service.' } },
        { '@type': 'Question', name: 'Can a failed fire inspection affect my insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Commercial kitchen insurance policies typically require the policyholder to maintain the exhaust system in compliance with NFPA 96. If a grease fire occurs and your cleaning records show an expired interval, the insurance carrier can deny the claim — even if the policy appeared valid at the time. Documented, on-schedule cleaning is a policy condition, not just a legal requirement.' } },
        { '@type': 'Question', name: 'What documentation do I receive after a hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'After each service you receive a written service report documenting all areas cleaned, before and after photos, a statement of NFPA 96 compliance, and an NFPA 96 sticker applied to the hood. This is the documentation fire marshals and health inspectors ask for, and what your insurance carrier requires as proof of compliant maintenance.' } },
        { '@type': 'Question', name: 'What areas of San Diego County do you serve?', acceptedAnswer: { '@type': 'Answer', text: 'Core Hood Cleaning serves all of San Diego County — La Jolla, Pacific Beach, Downtown San Diego, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' } }
      ]
    }
  ]
}

const tocItems = [
  { href: '#what-nfpa-96-requires', label: 'What NFPA 96 Requires' },
  { href: '#cleaning-frequency', label: 'Cleaning Frequency by Cooking Type' },
  { href: '#full-system-cleaning', label: 'What a Full-System Cleaning Covers' },
  { href: '#fire-marshal-inspection', label: 'What San Diego Fire Marshals Check' },
  { href: '#insurance', label: 'Why Insurance Requires Documented Cleaning' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function CommercialKitchenHoodCleaningSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Compliance</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>May 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              Everything San Diego restaurant owners need to know — cleaning frequency, what a full service actually covers, and exactly how to pass a fire marshal inspection.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--black)', maxHeight: '420px', overflow: 'hidden' }}>
          <div className="container" style={{ maxWidth: '760px', padding: '0' }}>
            <Image
              src="/images/tech-hood-interior.jpg"
              alt="NFPA 96 certified technician cleaning commercial kitchen hood interior in San Diego restaurant"
              width={760}
              height={420}
              priority
              style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }}
            />
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
              Your commercial kitchen exhaust system is your first line of defense against a grease fire. When buildup accumulates in the hood, ductwork, and rooftop fan, you&apos;re not just out of compliance — you&apos;re sitting on a fire hazard. San Diego fire marshals take NFPA 96 seriously, and a failed inspection means closure until you prove your kitchen is clean and safe.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              This guide covers what NFPA 96 actually requires, how cleaning frequency is determined, what a compliant service includes from hood canopy to rooftop fan, and what fire marshals look for when they walk through your kitchen.
            </p>

            <h2 id="what-nfpa-96-requires" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What NFPA 96 Requires</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 — the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations — is the national code adopted by San Diego County fire marshals and health departments. It sets the minimum cleaning frequency, defines what areas must be cleaned, and specifies what documentation is required after every service.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The code doesn&apos;t care how clean your hood <em>looks</em>. It cares about grease accumulation throughout the entire exhaust path — including ductwork and the rooftop fan that most restaurant owners never see. That&apos;s where fires start and where inspectors look.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { title: 'Cleaning Frequency', desc: 'Set by cooking type and volume — monthly, quarterly, semi-annual, or annual. Not a single universal interval.' },
                { title: 'Full System Coverage', desc: 'Hood, ductwork, and rooftop fan. Cleaning only the visible hood interior does not meet the standard.' },
                { title: 'Qualified Technician', desc: 'Must be performed by or supervised by a technician trained to NFPA 96 standards — IKECA certification recognized.' },
                { title: 'Written Documentation', desc: 'Service report, compliance certificate, and NFPA 96 sticker on the hood required after every service.' },
              ].map(item => (
                <div key={item.title} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="cleaning-frequency" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cleaning Frequency by Cooking Type</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', marginBottom: '28px' }}>
              {[
                { freq: 'Monthly', type: 'Solid Fuel / High-Volume', color: '#8B1B1A' },
                { freq: 'Quarterly', type: 'Moderate Cooking Volume', color: 'var(--true-blue)' },
                { freq: 'Semi-Annual', type: 'Low-Volume / Seasonal', color: '#4a6741' },
                { freq: 'Annual', type: 'Non-Grease Cooking', color: 'var(--gray-text)' },
              ].map(r => (
                <div key={r.freq} style={{ background: 'var(--off-white)', border: `2px solid ${r.color}`, borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', color: r.color, marginBottom: '6px' }}>{r.freq}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-text)', lineHeight: '1.4' }}>{r.type}</div>
                </div>
              ))}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { tier: 'Monthly', detail: 'Wood-burning ovens, charcoal grills, wok stations, 24-hour operations, and any high-volume frying operation. If your kitchen runs continuously or uses solid fuel, monthly is your interval.' },
                { tier: 'Quarterly', detail: 'Most San Diego full-service restaurants fall here — moderate frying, grilling, and standard cooking volumes with lunch and dinner service. This is the most common tier.' },
                { tier: 'Semi-Annual', detail: 'Low-volume operations — churches, senior centers, school cafeterias during limited hours, or seasonal operations. A certified technician must confirm this classification applies.' },
                { tier: 'Annual', detail: 'Non-grease cooking only — facilities using only steamers, kettles, or similar equipment with no open-flame or high-grease output. Rare in commercial food service.' },
              ].map(item => (
                <li key={item.tier} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', background: 'rgba(20,71,143,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{item.tier}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.detail}</span>
                </li>
              ))}
            </ul>

            <h2 id="full-system-cleaning" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Full-System Cleaning Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Surface cleaning fails inspections. NFPA 96 requires the complete exhaust path — not just what you can see from the kitchen floor. Here is what every compliant service from Core Hood Cleaning includes:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy, baffles, and plenum chamber', detail: 'All interior surfaces — not just the filters and canopy visible during service' },
                { item: 'Grease filters — removed, pressure washed, reinstalled', detail: 'Filters are cleaned separately to allow full access to the plenum behind them' },
                { item: 'Full ductwork run — plenum to rooftop', detail: 'Cleaned from both ends using extensions to reach the full interior length' },
                { item: 'Rooftop exhaust fan — blades, housing, curb', detail: 'Technicians access the roof and open the fan housing on every service' },
                { item: 'Grease collection and proper disposal', detail: 'All wash water is collected — never left to drain into rooftop or storm systems' },
                { item: 'Before and after photo documentation', detail: 'Every area cleaned is photographed before and after as part of your service record' },
                { item: 'NFPA 96 compliance certificate', detail: 'The document your fire marshal and insurance carrier ask to see' },
                { item: 'NFPA 96 sticker applied to hood', detail: 'Shows date of service — checked by inspectors during every kitchen inspection' },
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
              The compliance certificate and photo documentation are what fire marshals and health inspectors ask for. If your current cleaning company doesn&apos;t provide both after every service, you don&apos;t have proof of compliance — and neither does your insurance carrier.
            </p>

            <h2 id="fire-marshal-inspection" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What San Diego Fire Marshals Check</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              When a fire marshal walks into your kitchen, they are looking at three things: your cleaning documentation, your grease accumulation levels, and whether your cleaning frequency matches your cooking volume. They are not just glancing at the hood surface — they check accessible ductwork, the exhaust fan, and grease containment.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
              {[
                { check: 'NFPA 96 sticker date', what: 'The sticker on your hood shows the date of last service. Inspectors compare this against the required interval for your operation type. An expired sticker is an automatic violation.' },
                { check: 'Service documentation', what: 'The inspector may ask for your written service records — the report the cleaning company provides after each visit. Records must show date, areas cleaned, and technician certification.' },
                { check: 'Hood interior condition', what: 'Visible grease accumulation in the hood during an inspection can result in a violation even if the sticker is current — suggesting inadequate cleaning was performed.' },
                { check: 'Ductwork access points', what: 'Inspectors check accessible duct panels for grease accumulation inside the duct. Heavy deposits suggest the ductwork was not properly cleaned.' },
                { check: 'Cleaning interval vs. operation type', what: 'Experienced inspectors assess your cooking equipment and compare it against your documented cleaning interval. A quarterly sticker on a 24-hour wok kitchen will be questioned.' },
              ].map(item => (
                <li key={item.check} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, lineHeight: '1.4' }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.check}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.what}</span></div>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Restaurants without current documentation face violations regardless of how recently they were cleaned. If you cannot hand the inspector a compliance certificate with the date, areas cleaned, and technician certification, you do not have proof. That is the difference between passing on the spot and getting a violation notice.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>Red-Tagged? Call Us First.</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>If you have been red-tagged or have a fire marshal re-inspection coming up, we offer same-day emergency service throughout San Diego County. Call <a href="tel:8583612570" style={{ color: 'var(--rust)', fontWeight: 600 }}>(858) 361-2570</a>.</p>
            </div>

            <h2 id="insurance" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Insurance Requires Documented Cleaning</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Commercial kitchen insurance policies require documented proof of professional hood cleaning at the code-required frequency. When a grease fire occurs in a kitchen without proper records, insurers deny claims — leaving the restaurant owner personally liable for damages.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              The compliance certificate provided after every Core Hood Cleaning service is what your insurance carrier needs on file. It documents the date, scope of work, and technician certification. Keep a physical and digital copy — you will need it if you ever file a claim.
            </p>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Core Hood Cleaning serves commercial kitchens throughout all of San Diego County:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['La Jolla', 'Pacific Beach', 'Downtown San Diego', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee', 'Kearny Mesa'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Book a Certified Hood Cleaning</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides NFPA 96 certified hood cleaning throughout San Diego County — full documentation, before/after photos, and compliance certificate on every service.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'How often should commercial kitchen hoods be cleaned in San Diego?', a: 'NFPA 96 sets cleaning frequency by cooking type and volume: monthly for high-volume and solid-fuel operations, quarterly for most full-service restaurants, and semi-annually for low-volume institutional kitchens. San Diego fire marshals enforce these frequencies during inspections.' },
              { q: 'What happens if I fail a fire inspection due to a dirty hood system?', a: 'A failed inspection can result in an immediate closure order, fines, and voided insurance coverage. You need to schedule emergency cleaning and pass a re-inspection before reopening. Core Hood Cleaning offers same-day emergency service throughout San Diego County — call (858) 361-2570.' },
              { q: 'What does a full commercial hood cleaning include?', a: 'A compliant NFPA 96 service covers the complete exhaust path: hood canopy, baffles, plenum, all ductwork, the rooftop exhaust fan, and grease containment. Every Core Hood Cleaning service includes before and after photos, a written service report, and an NFPA 96 compliance certificate.' },
              { q: 'Does hood cleaning include the rooftop exhaust fan?', a: 'Yes — a fully compliant NFPA 96 cleaning must include the rooftop exhaust fan. Technicians access the roof, open the fan housing, and clean the blades, housing interior, and curb area. Any company that does not go to the roof is not providing a fully compliant service.' },
              { q: 'Can a failed fire inspection affect my insurance?', a: 'Yes. Commercial kitchen insurance policies require the policyholder to maintain the exhaust system in compliance with NFPA 96. If a grease fire occurs and cleaning records show an expired interval, the insurance carrier can deny the claim — even if the policy appeared valid at the time.' },
              { q: 'What documentation do I receive after a hood cleaning?', a: 'After each service you receive a written service report, before and after photos, a statement of NFPA 96 compliance, and an NFPA 96 sticker applied to the hood. This is the documentation fire marshals, health inspectors, and your insurance carrier require.' },
              { q: 'What areas of San Diego County do you serve?', a: 'Core Hood Cleaning serves all of San Diego County — La Jolla, Pacific Beach, Downtown San Diego, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/how-often-should-restaurant-hood-be-cleaned" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ How Often Should a Restaurant Hood Be Cleaned? (NFPA 96 Guide)</Link>
                <Link href="/blog/what-happens-during-hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Actually Happens During a Commercial Hood Cleaning?</Link>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Restaurant Owner&apos;s Plain-English Guide</Link>
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
