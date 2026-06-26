import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'San Diego Restaurant Compliance Guide: Fire Code & Health Code | Core Hood Cleaning',
  description: 'The complete San Diego restaurant compliance guide. Covers NFPA 96 fire code, County Environmental Health requirements, what inspectors check, violations, and documentation.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/restaurant-compliance-san-diego-guide' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'San Diego Restaurant Compliance Guide: Fire Code & Health Code',
      description: 'The complete San Diego restaurant compliance guide covering NFPA 96 fire code, County Environmental Health requirements, what inspectors check, common violations, and documentation you must keep.',
      image: 'https://www.corehoodcleaning.com/images/tech-kitchen-cleaning.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/restaurant-compliance-san-diego-guide',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the two compliance tracks San Diego restaurants must navigate?',
          acceptedAnswer: { '@type': 'Answer', text: 'San Diego restaurants are regulated by two separate agencies: the San Diego Fire-Rescue Department (fire code compliance under NFPA 96 and California Title 19) and San Diego County Department of Environmental Health and Quality (food safety and sanitation). Both inspect independently, both can issue violations, and both can shut you down.' }
        },
        {
          '@type': 'Question',
          name: 'How often does the San Diego Fire Marshal inspect restaurants?',
          acceptedAnswer: { '@type': 'Answer', text: 'San Diego Fire-Rescue typically conducts annual fire inspections for most restaurant occupancies. However, inspections can be triggered at any time following a complaint, a fire incident, a permit change, or a change in cooking equipment.' }
        },
        {
          '@type': 'Question',
          name: 'What does a San Diego County health inspector look for in the kitchen exhaust system?',
          acceptedAnswer: { '@type': 'Answer', text: "County Environmental Health inspectors check that hood filters are clean and in place, that there is no visible grease accumulation on hood surfaces, and that the exhaust system is being maintained on schedule. They will ask to see your most recent hood cleaning certificate as proof of service." }
        },
        {
          '@type': 'Question',
          name: 'What is the penalty for a failed hood cleaning inspection in San Diego?',
          acceptedAnswer: { '@type': 'Answer', text: 'Penalties vary by agency. The Fire Marshal can issue a Notice of Violation requiring correction within a set timeframe, and repeated violations can result in permit suspension. County Environmental Health can issue a Grade Card deduction, a compliance order, or in cases of imminent health hazard, an immediate closure order. Insurance carriers can also deny claims if the exhaust system was not maintained to NFPA 96 standards.' }
        },
        {
          '@type': 'Question',
          name: 'Do I need a certified technician to clean my hood or can my staff do it?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 requires hood cleaning to be performed by properly trained, qualified, and certified personnel. San Diego fire and health inspectors expect a service certificate from a professional company — not a log entry from kitchen staff. Self-performed cleaning does not satisfy compliance requirements.' }
        },
        {
          '@type': 'Question',
          name: 'What documentation do I need to show a San Diego inspector?',
          acceptedAnswer: { '@type': 'Answer', text: 'You need: (1) your most recent hood cleaning service certificate showing the date, technician name, certification number, and areas cleaned; (2) the NFPA 96 compliance sticker applied to the hood itself; (3) fire suppression system inspection records; and (4) your current fire permit.' }
        },
        {
          '@type': 'Question',
          name: 'How does hood cleaning frequency affect my compliance standing?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 specifies minimum cleaning intervals by cooking type: monthly for solid fuel or high-volume operations, quarterly for most full-service restaurants, semi-annually for low-volume operations. Cleaning less frequently than your cooking type requires puts you out of compliance even between inspections.' }
        },
        {
          '@type': 'Question',
          name: 'Can a hood cleaning company handle all my compliance documentation?',
          acceptedAnswer: { '@type': 'Answer', text: 'A certified hood cleaning company handles the cleaning, provides the service report and NFPA 96 sticker, and delivers the documentation package inspectors want to see. You are responsible for keeping those records on-site, cleaning filters between visits, and maintaining your fire suppression system and permit separately.' }
        }
      ]
    }
  ]
}

const tocItems = [
  { href: '#two-tracks', label: 'The Two Compliance Tracks' },
  { href: '#fire-marshal', label: 'Fire Marshal Requirements' },
  { href: '#health-department', label: 'County Health Requirements' },
  { href: '#nfpa96-title19', label: 'NFPA 96 & California Title 19' },
  { href: '#what-inspectors-check', label: 'What Inspectors Actually Check' },
  { href: '#common-violations', label: 'Common Violations & Consequences' },
  { href: '#documentation', label: 'Documentation You Must Keep' },
  { href: '#hood-cleaning-role', label: 'How Hood Cleaning Fits In' },
  { href: '#compliance-calendar', label: 'Building a Compliance Calendar' },
  { href: '#faq', label: 'FAQ' },
]

export default function RestaurantComplianceSanDiegoGuide() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <article style={{ paddingTop: '100px' }}>

        {/* Header */}
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Compliance</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 10 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              San Diego Restaurant Compliance Guide: Fire Code, Health Code & What Inspectors Actually Check
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              San Diego restaurants answer to two separate agencies — the Fire Marshal and County Environmental Health — and they inspect on different schedules, check different things, and can each shut you down independently. Here is everything you need to stay compliant on both tracks.
            </p>
          </div>
        </div>

        <div style={{ background: 'var(--white)', padding: '64px 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>

            {/* Table of Contents */}
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

            {/* Section 1 */}
            <h2 id="two-tracks" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              The Two Compliance Tracks Every San Diego Restaurant Navigates
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Most restaurant owners treat compliance as one thing. In San Diego, it is two distinct regulatory tracks, each run by a different agency, each with its own inspection schedule, its own standards, and its own enforcement tools.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>
              {[
                { agency: 'San Diego Fire-Rescue Department', focus: 'Fire code compliance — NFPA 96, exhaust system maintenance, fire suppression systems, egress', color: 'var(--rust)' },
                { agency: 'County Environmental Health & Quality', focus: 'Food safety and sanitation — equipment cleanliness, temperature control, pest control, hood condition', color: 'var(--true-blue)' },
              ].map(t => (
                <div key={t.agency} style={{ background: 'var(--off-white)', border: `2px solid ${t.color}`, borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: t.color, marginBottom: '8px' }}>Track</div>
                  <div style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.88rem', marginBottom: '8px' }}>{t.agency}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{t.focus}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Both agencies can issue violations. Both can suspend your permit. Both can trigger a closure. Passing one inspection does not protect you from the other. A restaurant with a spotless health grade can still be cited by the Fire Marshal for grease buildup in the exhaust duct — and vice versa.
            </p>

            {/* Section 2 */}
            <h2 id="fire-marshal" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Fire Marshal Requirements for San Diego Restaurants
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The San Diego Fire-Rescue Department enforces the California Fire Code, which adopts NFPA 96 as the standard for commercial cooking operations. Fire inspections typically occur annually for restaurant occupancies but can be triggered at any time by a complaint, a permit change, new equipment installation, or any fire incident on the premises.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Core fire code requirements for San Diego commercial kitchens:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Exhaust Cleaning', item: 'Hood and exhaust system cleaned at NFPA 96-required intervals — monthly, quarterly, or semi-annually depending on cooking type and volume' },
                { label: 'Suppression System', item: 'Fire suppression system inspected and tagged by a licensed contractor every 6 months' },
                { label: 'Extinguishers', item: 'Fire extinguishers inspected annually; monthly visual inspections logged by staff' },
                { label: 'Filters', item: 'Grease filters in place and free of heavy accumulation during all service hours' },
                { label: 'Documentation', item: 'Hood cleaning certificate on-site showing date, technician certification number, and areas cleaned' },
                { label: 'Sticker', item: 'NFPA 96 compliance sticker affixed to the hood after each professional cleaning' },
                { label: 'Egress', item: 'Exit signs illuminated, exit paths unobstructed, doors functional' },
              ].map(r => (
                <li key={r.label} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{r.label}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.item}</span>
                </li>
              ))}
            </ul>

            {/* Section 3 */}
            <h2 id="health-department" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              San Diego County Environmental Health Requirements
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              San Diego County Department of Environmental Health and Quality (DEHQ) regulates food safety under California Retail Food Code (CalCode). Health inspectors conduct routine inspections — typically one to four times per year depending on your facility type and risk category — plus complaint-driven investigations that can happen any day.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>On the exhaust and ventilation side, health inspectors look for:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
              {[
                'Grease filters present and free of heavy accumulation — dripping filters are a major violation',
                'No visible grease buildup on hood canopy surfaces, baffles, or plenum interior',
                'Evidence that the exhaust system is being maintained on a documented cleaning schedule',
                'Hood cleaning service certificate available on request',
                'No condensation or grease dripping from the exhaust system onto food-contact surfaces or food',
                'Ventilation adequate to prevent smoke and grease from accumulating in the kitchen',
              ].map(i => (
                <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--true-blue)', fontWeight: 700, flexShrink: 0 }}>✓</span>{i}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Health inspection results are posted publicly as letter grades and are visible on the county website. A hood-related major violation can drop your grade below an A — which customers notice and which affects your business beyond the citation itself.
            </p>

            {/* Section 4 */}
            <h2 id="nfpa96-title19" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              NFPA 96 & California Title 19 — The Standards Behind the Inspections
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the national standard governing commercial kitchen exhaust systems. California adopts it through Title 19 of the California Code of Regulations, which San Diego Fire-Rescue enforces locally. When an inspector cites you for an exhaust system violation, the specific code section they reference comes from NFPA 96.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { section: 'Section 11.4', rule: 'Minimum cleaning frequencies by cooking type: monthly (solid fuel / high-volume), quarterly (moderate volume), semi-annually (low-volume / seasonal)' },
                { section: 'Section 11.6', rule: 'Cleaning must be performed by properly trained, qualified, and certified personnel — not kitchen staff' },
                { section: 'Section 11.6.2', rule: 'A written report is required after each cleaning showing date, scope of cleaning, and any areas not cleaned with explanation' },
                { section: 'Section 11.6.3', rule: 'An NFPA 96 inspection tag or sticker must be affixed to the hood after each service' },
                { section: 'Section 10.2', rule: 'Grease filters must be in place during all cooking operations and cleaned or replaced at regular intervals' },
              ].map((r, i) => (
                <div key={r.section} style={{ display: 'flex', gap: '16px', padding: '12px 0', borderBottom: i < 4 ? '1px solid var(--gray-light)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--rust)', fontSize: '0.8rem', flexShrink: 0, width: '95px', paddingTop: '2px' }}>{r.section}</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.rule}</span>
                </div>
              ))}
            </div>

            {/* Section 5 */}
            <h2 id="what-inspectors-check" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              What Inspectors Actually Check During a Kitchen Visit
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Inspectors from both agencies follow a similar physical sequence when evaluating your exhaust system. Knowing their process helps you stay ahead of citations rather than react to them.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              {[
                {
                  label: 'Fire Marshal Checks',
                  color: 'var(--rust)',
                  items: [
                    'NFPA 96 sticker on hood — checks date against required cleaning interval',
                    'Service certificate on file — verified against sticker date',
                    'Visible grease at ductwork access points',
                    'Fire suppression system tag and pull cable condition',
                    'Exhaust fan and grease drip pan condition on rooftop',
                    'Equipment clearances and cooking equipment placement',
                  ]
                },
                {
                  label: 'Health Inspector Checks',
                  color: 'var(--true-blue)',
                  items: [
                    'Grease filter condition — clogged or dripping filters are a major violation',
                    'Hood canopy interior for visible grease accumulation',
                    'Cleaning schedule and when last professional service occurred',
                    'Certificate availability — proof of professional cleaning on record',
                    'Condensation or grease dripping onto food preparation surfaces',
                    'General ventilation adequacy during cooking operations',
                  ]
                }
              ].map(col => (
                <div key={col.label} style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '20px', borderTop: `3px solid ${col.color}` }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: col.color, marginBottom: '12px' }}>{col.label}</div>
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

            {/* Section 6 */}
            <h2 id="common-violations" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Common Violations & Their Consequences
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              These are the exhaust-related violations San Diego inspectors cite most frequently — and what they cost you beyond the paperwork.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { v: 'No NFPA 96 sticker or sticker past due', c: 'Notice of Violation from Fire Marshal; re-inspection required; possible permit restriction', sev: 'HIGH' },
                { v: 'Missing or expired hood cleaning certificate', c: 'Fire or health violation; grade deduction; re-inspection required', sev: 'HIGH' },
                { v: 'Grease filters clogged, dripping, or missing during service', c: 'Health code major violation; immediate correction order possible', sev: 'HIGH' },
                { v: 'Visible grease accumulation in plenum or accessible ductwork', c: 'Fire Marshal Notice of Violation; may require emergency cleaning before reopening', sev: 'HIGH' },
                { v: 'Cleaning interval does not match cooking volume (under-cleaning)', c: 'Fire code violation; insurance coverage dispute if a fire occurs', sev: 'MED' },
                { v: 'Rooftop fan grease drip pan overflowing', c: 'Fire code citation; potential environmental violation for grease runoff', sev: 'MED' },
                { v: 'Fire suppression system not tagged within 6 months', c: 'Fire code violation; operating without valid fire suppression coverage', sev: 'HIGH' },
              ].map(r => (
                <li key={r.v} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.6rem', fontWeight: 800, textTransform: 'uppercase', color: r.sev === 'HIGH' ? 'var(--rust)' : 'var(--gray-text)', background: r.sev === 'HIGH' ? 'rgba(137,29,27,0.1)' : 'var(--gray-light)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{r.sev}</span>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{r.v}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.c}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Section 7 */}
            <h2 id="documentation" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Documentation You Must Keep On-Site
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              When an inspector walks in, you should be able to produce these documents within two minutes. Keep them in a dedicated binder at the manager station — not in an email inbox or saved on a technician's phone.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { doc: 'Hood Cleaning Service Certificate', detail: 'From your most recent professional cleaning. Must show: date of service, technician name and certification number, areas cleaned, and any areas not cleaned with explanation.' },
                { doc: 'NFPA 96 Compliance Sticker', detail: 'Physically affixed to the hood after each cleaning. Inspectors check this first — the date must align with your required cleaning interval.' },
                { doc: 'Fire Suppression System Tag', detail: 'Hung on the pull station by your licensed suppression contractor. Required every 6 months.' },
                { doc: 'Current Fire Permit', detail: 'Issued by San Diego Fire-Rescue. Must be posted in the facility at all times.' },
                { doc: 'Fire Extinguisher Tags', detail: 'Annual inspection by a licensed contractor. Monthly visual inspection log maintained by staff.' },
                { doc: 'Written Cleaning Schedule', detail: 'A simple document showing your hood cleaning frequency and filter maintenance intervals. Health inspectors may ask for this to confirm you have a documented program.' },
              ].map((d, i) => (
                <div key={d.doc} style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: i < 5 ? '1px solid var(--gray-light)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--true-blue)', fontSize: '1.2rem', flexShrink: 0, width: '28px', paddingTop: '2px' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{d.doc}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{d.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 8 */}
            <h2 id="hood-cleaning-role" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              How Hood Cleaning Fits Into Your Overall Compliance Picture
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Professional <Link href="/services/hood-cleaning" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>hood cleaning</Link> is the single maintenance action that satisfies both compliance tracks simultaneously. A properly executed cleaning — certified technicians, full duct-to-fan coverage, complete documentation — checks the box for both the Fire Marshal and County Environmental Health.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              What a certified <Link href="/services/nfpa-inspection" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>NFPA 96 cleaning</Link> from Core Hood Cleaning delivers for your compliance record:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
              {[
                'Full exhaust path cleaned — hood canopy, plenum, all accessible ductwork, and rooftop exhaust fan',
                'Before and after photos documenting the condition of every cleaned area',
                'Signed service certificate with technician certification number and cleaning date',
                'NFPA 96 compliance sticker applied to the hood — the first item fire inspectors verify',
                'Written notation of any areas not cleaned and the reason (blocked access, damaged panels, etc.)',
                'Recommendation on the correct cleaning frequency for your specific equipment and cooking volume',
              ].map(i => (
                <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>✓</span>{i}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Between professional cleanings, your staff should be cleaning or replacing grease filters weekly or bi-weekly. A <Link href="/services/filter-exchange" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>filter exchange program</Link> removes the management burden — clean filters are swapped in on a set schedule so you are never running a dirty filter into an inspection.
            </p>

            {/* Section 9 */}
            <h2 id="compliance-calendar" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Building a Compliance Calendar for Your San Diego Restaurant
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Compliance is significantly easier to manage when it is scheduled in advance rather than reacted to after a citation. Here is the framework for a typical San Diego full-service restaurant operating on a quarterly cleaning cycle:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { freq: 'Weekly', task: 'Inspect and clean grease filters. Check hood canopy interior for visible grease accumulation. Log in your written cleaning schedule.' },
                { freq: 'Quarterly', task: 'Professional NFPA 96 hood cleaning (monthly if you use solid fuel or run high-volume operations). Verify new sticker is applied and certificate is filed on-site.' },
                { freq: 'Every 6 Mo.', task: 'Fire suppression system inspection by licensed contractor. Verify the tag on the pull station is updated.' },
                { freq: 'Annually', task: 'Fire extinguisher professional inspection. Fire permit renewal. Review hood cleaning frequency against changes in cooking volume or equipment.' },
                { freq: 'Pre-Inspection', task: 'Locate and organize your compliance binder. Confirm NFPA sticker date is current. Verify suppression tag is within 6 months. Clean filters if overdue.' },
              ].map((r, i) => (
                <div key={r.freq} style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: i < 4 ? '1px solid var(--gray-light)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--true-blue)', flexShrink: 0, width: '80px', paddingTop: '2px', lineHeight: '1.4' }}>{r.freq}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.task}</div>
                </div>
              ))}
            </div>

            {/* CTA Block */}
            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Get Your Compliance Documentation in Order</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides certified NFPA 96 hood cleaning with full documentation — the service certificate, the compliance sticker, and the before/after photos fire marshals and health inspectors expect to see.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Certified Cleaning</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            {/* FAQ */}
            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'What are the two compliance tracks San Diego restaurants must navigate?', a: 'San Diego restaurants are regulated by two separate agencies: the San Diego Fire-Rescue Department (fire code compliance under NFPA 96 and California Title 19) and San Diego County Department of Environmental Health and Quality (food safety and sanitation). Both inspect independently, both can issue violations, and both can shut you down.' },
              { q: 'How often does the San Diego Fire Marshal inspect restaurants?', a: 'San Diego Fire-Rescue typically conducts annual fire inspections for most restaurant occupancies. However, inspections can be triggered at any time following a complaint, a fire incident, a permit change, or a change in cooking equipment.' },
              { q: 'What does a San Diego County health inspector look for in the kitchen exhaust system?', a: "County Environmental Health inspectors check that hood filters are clean and in place, that there is no visible grease accumulation on hood surfaces, and that the exhaust system is being maintained on schedule. They will ask to see your most recent hood cleaning certificate as proof of service." },
              { q: 'What is the penalty for a failed hood cleaning inspection in San Diego?', a: 'Penalties vary by agency. The Fire Marshal can issue a Notice of Violation requiring correction within a set timeframe, and repeated violations can result in permit suspension. County Environmental Health can issue a grade card deduction, a compliance order, or in cases of imminent health hazard, an immediate closure order. Insurance carriers can also deny claims if the exhaust system was not maintained to NFPA 96 standards.' },
              { q: 'Do I need a certified technician to clean my hood or can my staff do it?', a: 'NFPA 96 requires hood cleaning to be performed by properly trained, qualified, and certified personnel. San Diego fire and health inspectors expect a service certificate from a professional company — not a log entry from kitchen staff. Self-performed cleaning does not satisfy compliance requirements.' },
              { q: 'What documentation do I need to show a San Diego inspector?', a: 'You need: (1) your most recent hood cleaning service certificate showing the date, technician name, certification number, and areas cleaned; (2) the NFPA 96 compliance sticker affixed to the hood; (3) your fire suppression system inspection tag; and (4) your current fire permit.' },
              { q: 'How does hood cleaning frequency affect my compliance standing?', a: 'NFPA 96 specifies minimum cleaning intervals by cooking type: monthly for solid fuel or high-volume operations, quarterly for most full-service restaurants, semi-annually for low-volume operations. Cleaning less frequently than your cooking type requires puts you out of compliance even if no inspector has caught it yet.' },
              { q: 'Can a hood cleaning company handle all my compliance documentation?', a: 'A certified hood cleaning company handles the cleaning itself, provides the service report and NFPA 96 sticker, and delivers the documentation package inspectors want to see. Your responsibilities: keep those records on-site and accessible, clean or replace filters between professional visits, and maintain your fire suppression system and permit separately.' },
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
