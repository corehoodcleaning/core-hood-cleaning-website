import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'San Diego Restaurant Health Inspection Checklist 2026 | Core Hood Cleaning',
  description: 'The complete San Diego County health inspection checklist for restaurants. What inspectors score, how the grading system works, common violations, and how to prepare your kitchen exhaust system.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/health-inspection-checklist-san-diego' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'San Diego Restaurant Health Inspection Checklist 2026',
      description: 'The complete San Diego County health inspection checklist for restaurants — what inspectors score, how grading works, common violations, and how to prepare your kitchen exhaust system.',
      image: 'https://www.corehoodcleaning.com/images/tech-kitchen-cleaning.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/health-inspection-checklist-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does the San Diego County restaurant grading system work?',
          acceptedAnswer: { '@type': 'Answer', text: 'San Diego County uses a letter grade system (A, B, C) based on points deducted for violations. An A grade requires 90 points or above. Major violations carry a higher point penalty than minor ones. Grades must be posted prominently at the restaurant entrance.' }
        },
        {
          '@type': 'Question',
          name: 'How often do San Diego County health inspectors visit restaurants?',
          acceptedAnswer: { '@type': 'Answer', text: 'Inspection frequency depends on the facility\'s risk category. High-risk facilities (full cooking, potentially hazardous food handling) are typically inspected one to four times per year. Lower-risk facilities may be inspected less frequently. Complaint-based inspections can occur at any time.' }
        },
        {
          '@type': 'Question',
          name: 'What is the most common reason restaurants fail health inspections in San Diego?',
          acceptedAnswer: { '@type': 'Answer', text: 'Temperature control violations are the most common major violation. However, equipment cleanliness — including grease filters and hood surfaces — is consistently cited. A hood with dripping grease filters or visible grease accumulation will generate major or minor violations that affect the grade.' }
        },
        {
          '@type': 'Question',
          name: 'Do health inspectors check the exhaust hood and ductwork?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Health inspectors check that grease filters are in place and not excessively loaded, that there is no visible grease dripping from the hood, and that the operator has a maintenance program in place. They may ask for the most recent professional hood cleaning certificate.' }
        },
        {
          '@type': 'Question',
          name: 'Can a restaurant be closed immediately during a San Diego health inspection?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. If an inspector determines there is an imminent health hazard — such as a sewage backup, no running water, pest infestation, or a serious food temperature violation — they can issue an immediate closure order. The restaurant cannot reopen until the hazard is corrected and a re-inspection is passed.' }
        },
        {
          '@type': 'Question',
          name: 'How does hood cleaning help me pass a San Diego health inspection?',
          acceptedAnswer: { '@type': 'Answer', text: 'Professional hood cleaning removes grease accumulation from the filters, canopy, and plenum — the items health inspectors visually check. A recent cleaning certificate also demonstrates to the inspector that your operation has a maintenance program, which can prevent violation write-ups even in borderline situations.' }
        },
        {
          '@type': 'Question',
          name: 'What should I have ready before a health inspection?',
          acceptedAnswer: { '@type': 'Answer', text: 'Key items to have ready: (1) current food handler certifications for all staff, (2) your most recent hood cleaning service certificate, (3) temperature logs for all refrigeration units, (4) pest control service records, (5) sanitizer test strips and a working test kit, and (6) a clean and organized dry storage area.' }
        }
      ]
    }
  ]
}

const tocItems = [
  { href: '#how-inspections-work', label: 'How San Diego Health Inspections Work' },
  { href: '#grading-system', label: 'The Grading System Explained' },
  { href: '#major-violations', label: 'Major Violations That Hurt Your Grade' },
  { href: '#hood-exhaust-checklist', label: 'Hood & Exhaust System Checklist' },
  { href: '#kitchen-equipment', label: 'Kitchen Equipment & Surfaces' },
  { href: '#food-safety', label: 'Food Safety & Temperature Control' },
  { href: '#documentation', label: 'Documentation Inspectors Ask For' },
  { href: '#prepare', label: 'How to Prepare Before an Inspection' },
  { href: '#faq', label: 'FAQ' },
]

export default function HealthInspectionChecklistSanDiego() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              San Diego Restaurant Health Inspection Checklist: What Inspectors Score & How to Prepare
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              San Diego County health inspectors use a point-deduction system that produces the letter grade posted on your door. Here is exactly what they check, how violations are scored, and what to do before an inspector walks in.
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
            <h2 id="how-inspections-work" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              How San Diego County Health Inspections Work
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              San Diego County Department of Environmental Health and Quality (DEHQ) conducts routine food facility inspections under California Retail Food Code (CalCode). Inspectors do not announce visits in advance — they arrive unannounced during normal business hours, typically when your kitchen is operating.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Inspection frequency depends on your facility's risk category. Full-service restaurants with high-risk food handling (cooking raw proteins, cooling, hot holding) are inspected one to four times per year. Lower-risk operations such as coffee shops or facilities serving only pre-packaged food are inspected less frequently. Complaint-based inspections can happen at any time regardless of category.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              At the conclusion of an inspection, the inspector scores the facility and posts the grade card. The result becomes publicly available on the county website within days — and is visible to any customer who searches your restaurant name.
            </p>

            {/* Section 2 */}
            <h2 id="grading-system" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              The San Diego County Grading System Explained
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              San Diego County uses a 100-point system. Every violation results in a point deduction — major violations carry heavier penalties than minor ones. The final score determines your letter grade.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '28px' }}>
              {[
                { grade: 'A', range: '90–100 points', desc: 'Excellent — no or minor violations only', color: 'var(--true-blue)' },
                { grade: 'B', range: '80–89 points', desc: 'Adequate — multiple minor or some major violations', color: '#7a6800' },
                { grade: 'C', range: '79 or below', desc: 'Needs improvement — serious violations present', color: 'var(--rust)' },
              ].map(g => (
                <div key={g.grade} style={{ background: 'var(--off-white)', border: `2px solid ${g.color}`, borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: g.color, marginBottom: '4px' }}>{g.grade}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, color: g.color, marginBottom: '8px' }}>{g.range}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{g.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Grades must be posted at the restaurant entrance where customers can see them before entering. A B or C grade is not just a compliance issue — it is a public-facing signal that affects customer decisions and reservation volume. Certain violations also trigger mandatory follow-up inspections within 14 to 30 days, which carry additional scrutiny and fees.
            </p>

            {/* Section 3 */}
            <h2 id="major-violations" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Major Violations That Hurt Your Grade
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Major violations (sometimes called "critical" violations) carry larger point deductions and represent conditions most likely to cause foodborne illness or fire. These are the items inspectors focus on first.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { item: 'Improper hot or cold holding temperatures for potentially hazardous foods', pts: '–4 pts' },
                { item: 'Inadequate cooking temperatures for raw proteins', pts: '–4 pts' },
                { item: 'Employee illness not managed — sick workers in food handling roles', pts: '–4 pts' },
                { item: 'No hand washing facility accessible, or hand washing station not stocked', pts: '–4 pts' },
                { item: 'Cross-contamination — raw proteins stored above ready-to-eat foods', pts: '–4 pts' },
                { item: 'Grease filters dripping, missing, or severely loaded with grease accumulation', pts: '–2 to –4 pts' },
                { item: 'Active pest evidence — rodent droppings, cockroach sightings, fruit flies in food storage', pts: '–4 pts' },
                { item: 'Food from unapproved or uninspected sources', pts: '–4 pts' },
              ].map(r => (
                <li key={r.item} style={{ display: 'flex', gap: '16px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, color: 'var(--rust)', flexShrink: 0, width: '52px', textAlign: 'right' }}>{r.pts}</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>{r.item}</span>
                </li>
              ))}
            </ul>

            {/* Section 4 — Hood Checklist */}
            <h2 id="hood-exhaust-checklist" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Hood & Exhaust System: What Inspectors Check
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The kitchen exhaust system is inspected under both equipment cleanliness and ventilation adequacy criteria. This is where hood cleaning directly affects your health inspection score. An inspector who sees dripping filters or heavy grease accumulation on the canopy will write it up — and may ask to see your service certificate on the spot.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '24px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '12px' }}>Hood & Exhaust Inspection Checklist</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Grease filters are present and in place during all cooking operations',
                  'Filters are not excessively loaded — no dripping grease, no visible heavy buildup',
                  'Hood canopy interior is free of grease accumulation on visible surfaces',
                  'No grease or condensation dripping from hood onto food-contact surfaces or food',
                  'Hood cleaning service certificate is available and dated within the required interval',
                  'Ventilation is adequate — no smoke or grease-laden vapor accumulating in the kitchen',
                  'Exhaust system is operating (fan is on during cooking operations)',
                ].map(i => (
                  <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>☐</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Professional <Link href="/services/hood-cleaning" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>hood cleaning</Link> is the most direct way to address every item on this list. A recent cleaning removes the grease accumulation, and the service certificate you receive satisfies the documentation requirement. A <Link href="/services/filter-exchange" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>filter exchange program</Link> keeps filters clean between professional services so they never become a violation during a routine inspection.
            </p>

            {/* Section 5 */}
            <h2 id="kitchen-equipment" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Kitchen Equipment & Surfaces Checklist
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              Beyond the exhaust system, inspectors evaluate the overall cleanliness and condition of cooking equipment, food-contact surfaces, and the physical facility.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                'All food-contact surfaces (cutting boards, prep tables, slicers) cleaned and sanitized',
                'Cooking equipment free of excessive grease and carbon buildup',
                'Refrigeration units maintaining temperature at or below 41°F — verified with a thermometer',
                'Hot holding equipment maintaining food at or above 135°F',
                'Dishwasher or three-compartment sink operating correctly with proper sanitizer concentration',
                'No cracks or chips on food-contact surfaces that cannot be adequately cleaned',
                'Can opener blades clean — one of the most commonly missed items',
                'Ice machine interior free of mold or slime buildup',
                'Wiping cloths stored in sanitizer solution between uses — not left on surfaces',
                'Handwashing station stocked: soap, paper towels, warm water, and a trash can within reach',
              ].map(i => (
                <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                  <span style={{ color: 'var(--true-blue)', fontWeight: 700, flexShrink: 0 }}>☐</span>{i}
                </li>
              ))}
            </ul>

            {/* Section 6 */}
            <h2 id="food-safety" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Food Safety & Temperature Control Checklist
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              Temperature violations account for the most major citations in San Diego. Inspectors will probe food with a calibrated thermometer — not just check display gauges.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                'Cold holding: all potentially hazardous foods at 41°F or below',
                'Hot holding: all hot foods at 135°F or above',
                'Cooling: foods cooled from 135°F to 70°F within 2 hours, then to 41°F within 4 more hours',
                'Cooking temperatures met for all proteins: poultry 165°F, ground beef 155°F, whole cuts 145°F',
                'Raw proteins stored below ready-to-eat foods in all refrigeration units',
                'Date labels on all ready-to-eat foods held more than 24 hours',
                'Thawing done correctly — not at room temperature on the counter',
                'Thermometers available and calibrated — one per food prep area',
              ].map(i => (
                <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>☐</span>{i}
                </li>
              ))}
            </ul>

            {/* Section 7 */}
            <h2 id="documentation" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              Documentation Inspectors Ask For
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>
              Health inspectors can ask for documentation at any point during the inspection. Have these on-site and accessible:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { doc: 'Food Handler Certifications', detail: 'All food handlers must hold a valid California Food Handler Card. Manager-level staff must hold a Food Safety Manager Certification (ServSafe or equivalent).' },
                { doc: 'Hood Cleaning Service Certificate', detail: 'From your most recent professional cleaning, showing the date, technician certification, and areas cleaned. Inspectors ask for this when the hood condition is borderline.' },
                { doc: 'Pest Control Service Records', detail: 'If you use a licensed pest control operator, having recent service records demonstrates proactive management — especially important if any pest evidence is found.' },
                { doc: 'Variance or Permits for Non-Standard Processes', detail: 'Required if you use specialized food preparation methods such as curing, smoking, or acidification.' },
                { doc: 'Temperature Logs', detail: 'Not required in all cases, but demonstrating that you take and log refrigeration temperatures daily can show a violation is isolated, not systemic.' },
              ].map((d, i) => (
                <div key={d.doc} style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: i < 4 ? '1px solid var(--gray-light)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--true-blue)', fontSize: '1.1rem', flexShrink: 0, width: '28px', paddingTop: '2px' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{d.doc}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{d.detail}</div>
                  </div>
                </div>
              ))}
            </ul>

            {/* Section 8 */}
            <h2 id="prepare" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>
              How to Prepare Before a Health Inspection
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Since inspections are unannounced, the only real preparation is maintaining standards every day. That said, a quarterly self-audit against this checklist catches issues before an inspector does. Here is a practical pre-inspection walkthrough:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { step: '1. Walk the hood', detail: 'Check filters — are they loaded with grease? Dripping? Missing? If yes, clean or swap them before they become a violation. Confirm your service certificate is on file and the cleaning date is within your required interval.' },
                { step: '2. Check all temperatures', detail: 'Probe products in every refrigeration unit with a calibrated thermometer. Check hot holding. If anything is out of range, correct it immediately and understand why.' },
                { step: '3. Audit cold storage', detail: 'Verify storage order from top to bottom: ready-to-eat on top, raw proteins below by cook temperature. Check date labels on all ready-to-eat items.' },
                { step: '4. Inspect handwash stations', detail: 'Every handwash station must have soap, paper towels, and warm running water. Trash cans must be within reach. This is one of the easiest violations to prevent.' },
                { step: '5. Review documentation', detail: 'Pull your compliance binder. Confirm food handler cards are current. Have the hood cleaning certificate available. Check that all required permits are posted.' },
                { step: '6. Communicate with staff', detail: 'Remind kitchen staff that inspectors may ask questions directly. Staff should know proper cooking temperatures, handwashing procedures, and who to notify if an inspector arrives.' },
              ].map(r => (
                <div key={r.step} style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--rust)', flexShrink: 0, width: '80px', paddingTop: '2px', lineHeight: '1.4' }}>{r.step}</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{r.detail}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Clean Hood = One Less Inspection Worry</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides certified NFPA 96 hood cleaning with service certificates and compliance stickers — the documentation San Diego health and fire inspectors ask to see. Schedule before your next inspection window.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Schedule a Cleaning</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            {/* FAQ */}
            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>
              Frequently Asked Questions
            </h2>
            {[
              { q: 'How does the San Diego County restaurant grading system work?', a: 'San Diego County uses a 100-point system with letter grades (A, B, C). An A grade requires 90 points or above. Major violations carry heavier point deductions than minor ones. Grades must be posted prominently at the restaurant entrance and are publicly visible on the county website.' },
              { q: 'How often do San Diego County health inspectors visit restaurants?', a: "Inspection frequency depends on your facility's risk category. High-risk facilities are typically inspected one to four times per year. Lower-risk operations may be inspected less frequently. Complaint-based inspections can occur at any time regardless of category." },
              { q: 'What is the most common reason restaurants fail health inspections in San Diego?', a: 'Temperature control violations are the most common major violation. However, equipment cleanliness — including grease filters and hood surfaces — is consistently cited. Dripping grease filters or visible grease accumulation on the hood canopy will generate violations that affect your grade.' },
              { q: 'Do health inspectors check the exhaust hood and ductwork?', a: 'Yes. Health inspectors check that grease filters are in place and not excessively loaded, that there is no visible grease dripping from the hood, and that the operator has a maintenance program in place. They may ask for the most recent professional hood cleaning certificate.' },
              { q: 'Can a restaurant be closed immediately during a San Diego health inspection?', a: 'Yes. If an inspector determines there is an imminent health hazard — such as a sewage backup, no running water, active pest infestation, or a serious food temperature violation — they can issue an immediate closure order. The restaurant cannot reopen until the hazard is corrected and a follow-up inspection is passed.' },
              { q: 'How does hood cleaning help me pass a San Diego health inspection?', a: 'Professional hood cleaning removes the grease accumulation from filters, canopy, and plenum that health inspectors visually evaluate. The service certificate you receive also demonstrates to the inspector that your operation has an active maintenance program, which can prevent write-ups in borderline situations.' },
              { q: 'What should I have ready before a health inspection?', a: 'Key items: (1) current food handler certifications for all staff, (2) your most recent hood cleaning service certificate, (3) temperature logs for refrigeration units, (4) pest control service records, and (5) a sanitizer test kit with fresh test strips.' },
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
