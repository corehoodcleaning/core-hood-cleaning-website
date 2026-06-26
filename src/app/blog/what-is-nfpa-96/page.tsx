import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "What Is NFPA 96? A Restaurant Owner's Plain-English Guide | Core Hood Cleaning",
  description: 'NFPA 96 is the fire code standard every commercial kitchen must follow. Plain-English breakdown of what it requires, which sections affect restaurants, and how San Diego enforces it.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/what-is-nfpa-96' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: "What Is NFPA 96? A Restaurant Owner's Plain-English Guide",
      description: 'NFPA 96 is the national fire code standard governing commercial kitchen exhaust systems. Plain-English breakdown for San Diego restaurant owners.',
      image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/what-is-nfpa-96',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does NFPA stand for?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA stands for the National Fire Protection Association, a non-profit organization that publishes fire safety codes and standards used by fire marshals, building inspectors, and insurance carriers across the United States. NFPA 96 is their standard specifically covering commercial kitchen ventilation and fire protection.' } },
        { '@type': 'Question', name: 'Is NFPA 96 legally required in San Diego?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The California Fire Code adopts NFPA 96 by reference, and San Diego County fire marshals enforce it during restaurant inspections. Non-compliance can result in notices of violation, required corrective action, or closure orders for fire safety violations.' } },
        { '@type': 'Question', name: 'What does NFPA 96 actually require from restaurant owners?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 requires restaurant owners to maintain their commercial kitchen exhaust system — including hood, filters, ductwork, and rooftop fan — in a clean condition at intervals based on cooking type and volume. It also requires that cleaning be performed by or under the supervision of a certified technician, and that documentation be kept on file.' } },
        { '@type': 'Question', name: 'Which sections of NFPA 96 are most important for restaurant owners?', acceptedAnswer: { '@type': 'Answer', text: 'Chapter 11 of NFPA 96 covers inspection, testing, and maintenance of exhaust systems — this is the primary section affecting day-to-day restaurant operations. It defines cleaning frequency requirements, documentation standards, and what a compliant cleaning must include. Chapters 4 and 10 cover system design and fire suppression systems.' } },
        { '@type': 'Question', name: 'How does NFPA 96 affect my insurance?', acceptedAnswer: { '@type': 'Answer', text: 'Most commercial restaurant insurance policies require the policyholder to maintain the kitchen exhaust system in compliance with NFPA 96. If a grease fire occurs and the insurance carrier determines the system was not cleaned at the required interval, the claim can be denied — even if the policy appeared valid at the time of the fire.' } },
        { '@type': 'Question', name: 'Does NFPA 96 apply to food trucks?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. NFPA 96 applies to mobile food operations as well as fixed commercial kitchens. Food trucks and trailers with cooking equipment that produces grease-laden vapor are subject to the same exhaust system cleaning requirements.' } },
        { '@type': 'Question', name: 'What documentation does NFPA 96 require me to keep?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 requires that a written record of each cleaning service be maintained. The record should include the date of service, the name of the technician or company, the areas cleaned, and a statement that the work was performed to the NFPA 96 standard. Most certified companies provide a compliance certificate and apply an NFPA 96 sticker to the hood after each service.' } }
      ]
    }
  ]
}

const tocItems = [
  { href: '#what-is-nfpa-96', label: 'What Is NFPA 96?' },
  { href: '#what-it-covers', label: 'What the Standard Actually Covers' },
  { href: '#key-chapters', label: 'Key Chapters for Restaurant Owners' },
  { href: '#san-diego-enforcement', label: 'How San Diego Enforces It' },
  { href: '#cleaning-requirements', label: 'Cleaning Requirements Under NFPA 96' },
  { href: '#insurance-impact', label: 'How It Affects Your Insurance' },
  { href: '#documentation', label: 'Documentation You Must Keep' },
  { href: '#faq', label: 'FAQ' },
]

export default function WhatIsNFPA96() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              What Is NFPA 96? A Restaurant Owner&apos;s Plain-English Guide
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              NFPA 96 is the national fire safety standard that governs every commercial kitchen in California. Here is what it requires, how San Diego enforces it, and what non-compliance actually costs you.
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

            <h2 id="what-is-nfpa-96" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Is NFPA 96?</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the <em>Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations</em>, published by the National Fire Protection Association. It is the primary fire safety code governing commercial kitchen exhaust systems in the United States.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The standard exists because grease-laden vapor produced by commercial cooking is a significant fire hazard. As grease accumulates in hood canopies, ductwork, and rooftop exhaust fans, it becomes increasingly flammable. NFPA 96 establishes minimum requirements for how exhaust systems must be designed, installed, and — most importantly for restaurant owners — maintained and cleaned on an ongoing basis.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              The NFPA publishes hundreds of codes and standards covering fire safety across different industries and applications. NFPA 96 is specifically limited to commercial cooking — it is the standard that matters most for restaurants, food trucks, ghost kitchens, institutional cafeterias, and any other operation with commercial cooking equipment.
            </p>

            <h2 id="what-it-covers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What the Standard Actually Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>NFPA 96 is a comprehensive document covering the entire life cycle of a commercial kitchen exhaust system. The major areas it addresses:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { title: 'System Design & Installation', desc: 'Hood size and placement, ductwork dimensions, clearances, makeup air requirements, exhaust fan specifications' },
                { title: 'Cooking Equipment', desc: 'Which equipment requires a Type I hood (grease-producing), which requires only Type II, and listing requirements for appliances' },
                { title: 'Fire Suppression Systems', desc: 'Requirements for automatic fire suppression systems, nozzle placement, inspection schedules, and testing procedures' },
                { title: 'Inspection, Testing & Maintenance', desc: 'Cleaning frequency requirements, who can perform cleaning, documentation standards, and what constitutes a compliant service' },
                { title: 'Grease Removal Devices', desc: 'Filter specifications, grease collection tray requirements, and maintenance intervals for grease removal components' },
                { title: 'Operations & Management', desc: 'Restaurant owner responsibilities, training requirements, and what to do when cooking equipment changes' },
              ].map(item => (
                <div key={item.title} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="key-chapters" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Key Chapters for Restaurant Owners</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>NFPA 96 is organized into chapters. Most restaurant owners never read the full standard, but these are the chapters that directly affect your day-to-day operations:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { chapter: 'Chapter 4', title: 'General Requirements', desc: 'Who has authority to enforce the standard, what approvals are needed, and the general responsibilities of building owners and operators.' },
                { chapter: 'Chapter 11', title: 'Inspection, Testing & Maintenance', desc: 'This is the most operationally relevant chapter for restaurant owners. It defines cleaning frequency by cooking type, what a compliant cleaning must include, and the documentation required after each service.' },
                { chapter: 'Chapter 10', title: 'Fire-Extinguishing Equipment', desc: 'Requirements for the automatic fire suppression system inside your hood — inspection and testing intervals, what triggers a required service, and who is qualified to service the system.' },
                { chapter: 'Chapter 7', title: 'Grease Removal Devices', desc: 'Filter specifications, required grease collection below filters, and how often grease removal components must be serviced or replaced.' },
              ].map(item => (
                <li key={item.chapter} style={{ display: 'flex', gap: '16px', padding: '16px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--off-white)', background: 'var(--true-blue)', padding: '4px 10px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>{item.chapter}</div>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{item.title}</div><div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div></div>
                </li>
              ))}
            </ul>

            <h2 id="san-diego-enforcement" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How San Diego Enforces NFPA 96</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              California adopts NFPA 96 by reference through the California Fire Code. This means the standard carries the force of law in San Diego County — it is not optional, and fire marshals are authorized to enforce it during inspections.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              In San Diego, NFPA 96 compliance is primarily checked by two agencies:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              {[
                { agency: 'San Diego Fire-Rescue', role: 'Fire Marshal inspectors check cleaning documentation, verify the NFPA 96 sticker on the hood, assess visible grease accumulation, and inspect the fire suppression system. A violation can result in a notice to correct or, in serious cases, a temporary closure order.' },
                { agency: 'SD County Dept. of Environmental Health', role: 'Health inspectors check hood and exhaust cleanliness as part of restaurant health inspections. Grease accumulation in the hood is a deduction item and can contribute to a lower letter grade or a required follow-up inspection.' },
              ].map(item => (
                <div key={item.agency} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--true-blue)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', marginBottom: '8px' }}>{item.agency}</div>
                  <div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{item.role}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              The most common NFPA 96 violation seen during San Diego inspections is an expired service sticker — the cleaning date on the hood is past the required interval for the operation type. This is entirely preventable with a scheduled maintenance program.
            </p>

            <h2 id="cleaning-requirements" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cleaning Requirements Under NFPA 96</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Chapter 11 of NFPA 96 defines the cleaning requirements that directly affect restaurant operations. The key provisions:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Full system coverage', desc: 'A compliant cleaning must cover the entire exhaust path — hood canopy, filters, plenum, ductwork, and rooftop exhaust fan. Cleaning only the visible hood interior does not meet the standard.' },
                { label: 'Frequency by cooking type', desc: 'Monthly for solid fuel and high-volume operations, quarterly for moderate cooking volume, semi-annually for low-volume, and annually for non-grease cooking. The type of equipment you operate determines your required interval.' },
                { label: 'Qualified technician', desc: 'NFPA 96 requires cleaning to be performed by or under the supervision of a person trained in the requirements of the standard. In practice, this means a technician with recognized NFPA 96 or IKECA certification.' },
                { label: 'Documentation after each service', desc: 'A service report must be created after each cleaning identifying what was cleaned, who performed the work, and the date. The NFPA 96 sticker applied to the hood is your visible proof of compliance.' },
                { label: 'Grease accumulation standard', desc: 'NFPA 96 defines the acceptable grease accumulation level. A system that cannot be cleaned to this standard due to access limitations must be reported, and the access issue corrected.' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, lineHeight: '1.4' }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.desc}</span></div>
                </li>
              ))}
            </ul>

            <h2 id="insurance-impact" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How NFPA 96 Compliance Affects Your Insurance</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 compliance is not just a fire code requirement — it is a condition of most commercial restaurant insurance policies. Insurance carriers underwriting restaurant fire coverage routinely include a provision requiring the policyholder to maintain the kitchen exhaust system in compliance with NFPA 96.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '10px' }}>What happens if a fire occurs and you are not compliant?</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>If a grease fire occurs and the insurance carrier&apos;s investigation reveals that your exhaust system was not cleaned at the required NFPA 96 interval — or that cleaning records cannot be produced — the carrier can deny the claim. The policy coverage is void for that incident because a condition of the policy was not met. This is a real and documented outcome, not a hypothetical risk.</p>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Beyond fire claims, NFPA 96 compliance is also tied to your fire suppression system warranty. Most suppression system manufacturers specify that the warranty is only valid when the system is maintained in accordance with NFPA 96 — including the exhaust cleaning requirements that keep the suppression nozzles clear and accessible.
            </p>

            <h2 id="documentation" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Documentation You Must Keep</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>After each NFPA 96 cleaning, you should receive and retain:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                'Service report with date, technician name, and areas cleaned',
                'Statement confirming the work was performed to NFPA 96 standards',
                'Before and after photos of hood, ductwork access points, and rooftop fan',
                'NFPA 96 compliance sticker applied directly to the hood (visible to inspectors)',
                'Notation of any access limitations or areas that could not be reached',
                'Recommendation for next service date based on your cooking type',
              ].map(item => (
                <li key={item} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                </li>
              ))}
            </ul>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>NFPA 96 Compliant Cleaning in San Diego</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides certified NFPA 96 hood cleaning with full documentation, compliance stickers, and before/after photos on every service.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Certified Cleaning</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'What does NFPA stand for?', a: 'NFPA stands for the National Fire Protection Association, a non-profit that publishes fire safety codes and standards used by fire marshals, building inspectors, and insurance carriers across the United States. NFPA 96 is their standard covering commercial kitchen ventilation and fire protection.' },
              { q: 'Is NFPA 96 legally required in San Diego?', a: 'Yes. The California Fire Code adopts NFPA 96 by reference, and San Diego County fire marshals enforce it during restaurant inspections. Non-compliance can result in notices of violation, required corrective action, or closure orders.' },
              { q: 'What does NFPA 96 actually require from restaurant owners?', a: 'It requires restaurant owners to maintain their commercial kitchen exhaust system — hood, filters, ductwork, and rooftop fan — at cleaning intervals based on cooking type and volume. Cleaning must be performed by a certified technician, and documentation must be kept on file.' },
              { q: 'Which sections of NFPA 96 are most important for restaurant owners?', a: 'Chapter 11 covers inspection, testing, and maintenance — this is the primary section affecting day-to-day operations. It defines cleaning frequencies, documentation standards, and what a compliant cleaning must include. Chapters 4 and 10 cover system design and fire suppression systems.' },
              { q: 'How does NFPA 96 affect my insurance?', a: 'Most commercial restaurant insurance policies require NFPA 96 compliance as a policy condition. If a grease fire occurs and your cleaning records show the system was not maintained at the required interval, the claim can be denied.' },
              { q: 'Does NFPA 96 apply to food trucks?', a: 'Yes. NFPA 96 applies to mobile food operations with cooking equipment that produces grease-laden vapor — including food trucks and trailers — subject to the same exhaust system cleaning requirements as fixed locations.' },
              { q: 'What documentation does NFPA 96 require me to keep?', a: 'You must retain a written record of each cleaning service including date, technician or company name, areas cleaned, and a statement of NFPA 96 compliance. Most certified companies provide a compliance certificate and apply an NFPA 96 sticker to the hood after each service.' },
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
