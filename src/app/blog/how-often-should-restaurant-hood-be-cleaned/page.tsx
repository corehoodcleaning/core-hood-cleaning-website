import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How Often Should a Restaurant Hood Be Cleaned? Complete NFPA 96 Schedule Guide | Core Hood Cleaning',
  description: 'NFPA 96 sets restaurant hood cleaning frequency: monthly for high-volume, quarterly for most restaurants, semi-annually for low-volume. Full guide with compliance consequences and San Diego enforcement.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/how-often-should-restaurant-hood-be-cleaned' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'How Often Should a Restaurant Hood Be Cleaned? Complete NFPA 96 Schedule Guide',
      description: 'NFPA 96 sets restaurant hood cleaning frequency by cooking type. Full guide for San Diego restaurant owners including compliance consequences and how inspectors verify your schedule.',
      image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/how-often-should-restaurant-hood-be-cleaned',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How often does NFPA 96 require restaurant hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 sets cleaning frequency based on cooking type and volume — not a fixed schedule. The four tiers are: monthly for solid fuel and high-volume operations; quarterly for moderate cooking operations (most San Diego restaurants); semi-annually for low-volume institutional kitchens; and annually for non-grease cooking operations.' } },
        { '@type': 'Question', name: 'Does every restaurant in San Diego need quarterly hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'Most full-service restaurants fall into the quarterly tier, but not all. Low-volume operations like churches, school kitchens, or senior centers may qualify for semi-annual cleaning. High-volume or solid fuel operations require monthly cleaning. The correct interval depends on your specific cooking equipment and volume, determined by a certified technician assessment.' } },
        { '@type': 'Question', name: 'What happens if a restaurant does not clean its hood often enough?', acceptedAnswer: { '@type': 'Answer', text: 'Under-cleaning creates fire risk and compliance violations. If fire inspectors find an expired service sticker, they can issue a violation notice. If an insurance carrier determines the system was not cleaned at the required interval and a fire occurs, the claim can be denied. The restaurant is legally non-compliant with NFPA 96 even if no inspection has caught it yet.' } },
        { '@type': 'Question', name: 'Can I clean my hood less frequently if I use it less?', acceptedAnswer: { '@type': 'Answer', text: 'Cooking volume and type are factors NFPA 96 already accounts for. If you genuinely have a low-volume, low-grease-output operation, you may qualify for a less frequent interval. However, this determination must be made by a certified technician — you cannot self-declare a less frequent interval without a formal assessment to support it.' } },
        { '@type': 'Question', name: 'How do San Diego fire inspectors verify my cleaning schedule?', acceptedAnswer: { '@type': 'Answer', text: 'Fire inspectors check the NFPA 96 sticker applied to your hood after each cleaning. The sticker shows the date of service and the company that performed it. They compare this date against the required interval for your operation type. If the sticker is expired, or if no sticker is present, you receive a violation. They may also ask to see your service documentation.' } },
        { '@type': 'Question', name: 'What is the right cleaning interval for a food truck in San Diego?', acceptedAnswer: { '@type': 'Answer', text: 'Food trucks are subject to the same NFPA 96 cleaning frequency requirements as fixed restaurant locations. Most food trucks fall into the quarterly tier, though high-volume or solid fuel food trucks may require monthly cleaning. San Diego County fire marshals include food trucks in their inspection coverage.' } },
        { '@type': 'Question', name: 'Do I need more frequent cleaning if I add a fryer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — adding high-grease-output equipment changes your NFPA 96 compliance category. Adding a fryer, charbroiler, or wok station can move you from quarterly to monthly depending on volume and overall operation type. Have a certified technician reassess your required interval when you add significant cooking equipment.' } }
      ]
    }
  ]
}

const tocItems = [
  { href: '#the-short-answer', label: 'The Short Answer' },
  { href: '#nfpa-frequency-tiers', label: 'NFPA 96 Cleaning Frequency Tiers' },
  { href: '#monthly', label: 'Monthly: When It\'s Required' },
  { href: '#quarterly', label: 'Quarterly: The Most Common Tier' },
  { href: '#semi-annual', label: 'Semi-Annual: Low-Volume Kitchens' },
  { href: '#consequences', label: 'Consequences of the Wrong Interval' },
  { href: '#how-inspectors-check', label: 'How San Diego Inspectors Verify Compliance' },
  { href: '#getting-assessed', label: 'Getting the Right Interval for Your Restaurant' },
  { href: '#faq', label: 'FAQ' },
]

export default function HowOftenHoodCleaned() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 8 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              How Often Should a Restaurant Hood Be Cleaned?
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              NFPA 96 answers this question with a framework based on what you cook and how much grease your equipment produces — not a single universal interval. Here is how to find the right schedule for your operation, and what happens if you get it wrong.
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

            <h2 id="the-short-answer" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Short Answer</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              It depends on what you cook and how much. NFPA 96 — the national standard that governs commercial kitchen exhaust systems — does not require the same cleaning interval for every restaurant. Instead, it defines four tiers based on cooking type and volume.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { freq: 'Monthly', ops: 'Solid fuel, wok, high-volume, 24-hr', color: '#8B1B1A' },
                { freq: 'Quarterly', ops: 'Most full-service restaurants', color: 'var(--true-blue)' },
                { freq: 'Semi-Annual', ops: 'Low-volume, institutional kitchens', color: '#4a6741' },
                { freq: 'Annual', ops: 'Non-grease cooking only', color: 'var(--gray-text)' },
              ].map(t => (
                <div key={t.freq} style={{ background: 'var(--off-white)', border: `2px solid ${t.color}`, borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: t.color, marginBottom: '8px' }}>{t.freq}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.4' }}>{t.ops}</div>
                </div>
              ))}
            </div>

            <h2 id="nfpa-frequency-tiers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 Cleaning Frequency: What the Standard Actually Says</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 — the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations — defines cleaning frequency in Chapter 11. The standard&apos;s logic is straightforward: the more grease-laden vapor your equipment generates, the faster grease accumulates in the exhaust system, and the more frequently cleaning is required to maintain a safe, compliant system.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              The frequency tiers are minimum requirements — not targets. If your system accumulates grease more rapidly than the standard interval accounts for (due to seasonal volume increases, equipment additions, or extended operating hours), cleaning should occur more frequently than the minimum.
            </p>

            <h2 id="monthly" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Monthly Cleaning: When It&apos;s Required</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Monthly cleaning is the highest-frequency tier and applies to operations that generate the greatest grease output. If your kitchen includes any of the following, monthly cleaning is required:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { type: 'Solid fuel cooking', detail: 'Wood-burning ovens, charcoal grills, mesquite grills — any cooking that uses solid combustible fuel' },
                { type: 'Wok cooking stations', detail: 'High-temperature wok cooking releases dense grease clouds that accumulate rapidly' },
                { type: '24-hour operations', detail: 'Continuous operation with no overnight cooling period — grease has no recovery time' },
                { type: 'High-volume operations', detail: 'High-production concepts such as large burger operations, high-seat-count diners, or catering commissaries running multiple service periods daily' },
                { type: 'High-volume fryer banks', detail: 'Multiple fryers operating at continuous high output — common in fried chicken concepts or fast food' },
              ].map(item => (
                <li key={item.type} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#8B1B1A', background: 'rgba(139,27,26,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>Monthly</span>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '3px' }}>{item.type}</div><div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{item.detail}</div></div>
                </li>
              ))}
            </ul>

            <h2 id="quarterly" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Quarterly Cleaning: The Most Common Tier</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Quarterly cleaning (every three months) is the most common interval for San Diego full-service restaurants. It applies to moderate cooking volume operations using standard gas or electric equipment. If you operate a typical sit-down restaurant with lunch and dinner service, quarterly is almost certainly your required interval.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
              <div style={{ background: 'var(--true-blue)', padding: '10px 20px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--off-white)' }}>Typically Quarterly — Common San Diego Operations</span>
              </div>
              {[
                'Full-service restaurant (lunch and dinner service)',
                'Fast casual concept with gas range and single fryer',
                'Hotel kitchen or banquet facility',
                'Bar kitchen or gastropub',
                'Bakery with gas deck ovens and some cooking equipment',
                'School cafeteria during active academic year (high volume)',
                'Hospital or medical facility kitchen',
              ].map((item, i) => (
                <div key={item} style={{ padding: '12px 20px', borderBottom: '1px solid var(--gray-light)', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)', fontSize: '0.88rem', color: 'var(--charcoal)', display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--true-blue)', fontWeight: 700 }}>✓</span>{item}
                </div>
              ))}
            </div>

            <h2 id="semi-annual" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Semi-Annual Cleaning: Low-Volume Operations</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Semi-annual cleaning (every six months) applies to operations with genuinely low cooking hours and low-grease output. This tier is appropriate for institutional kitchens that cook for limited hours, seasonal operations, and facilities where cooking is limited in both frequency and grease output.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '10px' }}>Do not self-classify as low-volume</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7', margin: 0 }}>Misclassifying a moderate-volume kitchen as low-volume to extend the cleaning interval is a common compliance error. The determination must be based on your actual cooking equipment and volume — not a preference for less frequent service. A certified technician&apos;s assessment is the proper way to confirm a semi-annual interval is appropriate.</p>
            </div>

            <h2 id="consequences" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Consequences of the Wrong Interval</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Operating at the wrong cleaning interval — whether under-cleaning or failing to recognize when your operation type changes — creates real business consequences:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Fire risk', desc: 'Under-cleaning allows grease to accumulate to dangerous levels. A fire that ignites in a grease-laden exhaust system can travel the full duct run and cause catastrophic damage before the suppression system controls it.' },
                { label: 'Insurance claim denial', desc: 'Most commercial kitchen insurance policies condition coverage on NFPA 96 compliance. A fire with an expired cleaning record can result in a denied claim — even if the policy appeared valid at the time of the incident.' },
                { label: 'Fire marshal violation', desc: 'San Diego fire inspectors check the NFPA 96 sticker on your hood during inspections. An expired sticker results in a violation notice and required correction. Repeated or serious violations can lead to closure orders.' },
                { label: 'Health inspection deductions', desc: 'San Diego County health inspectors check hood cleanliness as part of restaurant health inspections. Visible grease accumulation in the hood is a deduction item that can lower your letter grade or trigger a follow-up inspection.' },
                { label: 'Permit renewal complications', desc: 'Fire permits and health permits in San Diego County can be complicated by outstanding NFPA 96 compliance violations from prior inspections.' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, lineHeight: '1.4' }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.desc}</span></div>
                </li>
              ))}
            </ul>

            <h2 id="how-inspectors-check" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How San Diego Inspectors Verify Compliance</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              San Diego fire marshals and health inspectors use several methods to verify that your hood cleaning schedule is compliant:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { method: 'NFPA 96 sticker check', desc: 'Every certified hood cleaning leaves an NFPA 96 compliance sticker on the hood showing the date of service and the company that performed it. Inspectors check this sticker and compare the date against the required interval for your operation type.' },
                { method: 'Service record review', desc: 'Inspectors may request your written service records — the documentation the cleaning company provides after each service. Records showing the correct interval, areas cleaned, and technician credentials should be kept on file.' },
                { method: 'Visual inspection', desc: 'Inspectors look at the hood interior for visible grease accumulation. Excessive grease visible to the inspector — even if the sticker is current — can trigger a violation if it suggests the system was cleaned inadequately.' },
                { method: 'Equipment assessment', desc: 'Experienced inspectors know what cooking equipment generates which grease loads. If your sticker shows a quarterly interval but you are running a 24-hour operation with solid fuel equipment, the interval will be questioned.' },
              ].map(item => (
                <li key={item.method} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--true-blue)', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, lineHeight: '1.4' }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.method}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.desc}</span></div>
                </li>
              ))}
            </ul>

            <h2 id="getting-assessed" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Getting the Right Interval for Your Restaurant</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The correct cleaning interval for your restaurant should be determined by a certified NFPA 96 technician who assesses your specific kitchen — reviewing your cooking equipment, operating hours, and cooking volume — and documents the appropriate interval in writing.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Core Hood Cleaning provides this assessment as part of the first service visit at your location. After the assessment, you receive a service agreement that reflects the correct interval for your operation, documentation of the basis for that interval, and a scheduled service program so you never have to track it yourself.
            </p>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Find the Right Schedule for Your Kitchen</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning assesses your equipment and cooking type to confirm the correct NFPA 96 interval — and documents it in writing on your service record.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'How often does NFPA 96 require restaurant hood cleaning?', a: 'NFPA 96 sets frequency by cooking type and volume — not a single fixed interval. The four tiers are: monthly for solid fuel and high-volume operations; quarterly for most full-service restaurants; semi-annually for low-volume institutional kitchens; and annually for non-grease cooking operations.' },
              { q: 'Does every restaurant in San Diego need quarterly hood cleaning?', a: 'Most full-service restaurants fall into the quarterly tier, but not all. Low-volume operations may qualify for semi-annual. High-volume or solid fuel operations require monthly. The correct interval depends on your specific equipment and volume, confirmed by a certified technician.' },
              { q: 'What happens if a restaurant does not clean its hood often enough?', a: 'Under-cleaning creates fire risk and compliance violations. Fire inspectors can issue violation notices for an expired service sticker. If a fire occurs and records show under-cleaning, insurance claims can be denied. You are legally non-compliant with NFPA 96 even if no inspection has caught it yet.' },
              { q: 'Can I clean my hood less frequently if I use it less?', a: 'If you genuinely have a low-volume, low-grease-output operation, you may qualify for a less frequent interval. However, this must be determined by a certified technician — you cannot self-declare a less frequent interval without a formal assessment to support it.' },
              { q: 'How do San Diego fire inspectors verify my cleaning schedule?', a: 'Inspectors check the NFPA 96 sticker on your hood (showing service date and company), may review your written service records, conduct a visual inspection of the hood interior, and assess your cooking equipment against your documented interval.' },
              { q: 'What is the right cleaning interval for a food truck in San Diego?', a: 'Food trucks are subject to the same NFPA 96 cleaning frequency requirements as fixed restaurant locations. Most food trucks fall into the quarterly tier, though high-volume or solid fuel trucks may require monthly. San Diego County fire marshals inspect food trucks.' },
              { q: 'Do I need more frequent cleaning if I add a fryer?', a: 'Yes. Adding high-grease-output equipment changes your NFPA 96 category. Adding a fryer, charbroiler, or wok can move you from quarterly to monthly depending on volume. Have a certified technician reassess your required interval when you add significant cooking equipment.' },
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
