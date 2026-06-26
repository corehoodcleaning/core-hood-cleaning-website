import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to Choose a Hood Cleaning Company in San Diego | Core Hood Cleaning',
  description: 'What to look for when hiring a commercial hood cleaning company in San Diego. Certifications, red flags, what questions to ask, and why documentation matters for compliance.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/choosing-hood-cleaning-company-san-diego' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'How to Choose a Hood Cleaning Company in San Diego',
      description: 'What to look for when hiring a commercial hood cleaning company in San Diego — certifications, red flags, questions to ask, and why documentation matters for fire and health compliance.',
      image: 'https://www.corehoodcleaning.com/images/team-rooftop.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/choosing-hood-cleaning-company-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What certifications should a hood cleaning company have in California?',
          acceptedAnswer: { '@type': 'Answer', text: 'Look for IKECA (International Kitchen Exhaust Cleaning Association) certification, which is the industry standard for professional hood cleaning. Technicians should be able to provide their certification number on the service certificate. California does not require a state-issued license for hood cleaning specifically, but IKECA certification demonstrates training to NFPA 96 standards.' }
        },
        {
          '@type': 'Question',
          name: 'What should a hood cleaning service certificate include?',
          acceptedAnswer: { '@type': 'Answer', text: 'A compliant service certificate must include: the date of service, the name and certification number of the technician, the specific areas cleaned (hood, plenum, ductwork, fan), any areas not cleaned and the reason, before and after photos, and the company name and contact information. The NFPA 96 compliance sticker applied to the hood should match the date on the certificate.' }
        },
        {
          '@type': 'Question',
          name: 'How much does hood cleaning cost in San Diego?',
          acceptedAnswer: { '@type': 'Answer', text: 'Hood cleaning pricing in San Diego varies based on the size of your exhaust system, the number of hood sections, duct length, rooftop fan accessibility, and current grease load. Systems that have not been cleaned in a long time or that use solid fuel cooking typically require more labor. Get a site assessment rather than a phone quote for accurate pricing.' }
        },
        {
          '@type': 'Question',
          name: 'What are the red flags when hiring a hood cleaning company?',
          acceptedAnswer: { '@type': 'Answer', text: 'Red flags include: no physical address or only a PO box, unable to provide technician certification numbers, no before/after photos included in the service, significantly lower pricing than competitors (often means incomplete cleaning), no NFPA 96 sticker applied after service, and certificates that only reference the hood without mentioning ductwork and the rooftop fan.' }
        },
        {
          '@type': 'Question',
          name: 'Does the hood cleaning company need to clean the rooftop fan?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. NFPA 96 requires cleaning of the entire exhaust path from cooking surface to discharge point — which includes the rooftop exhaust fan. Any company that only cleans the hood interior and not the ductwork and fan is not providing a compliant service. Ask specifically whether the fan will be cleaned and confirm it appears in the service report.' }
        },
        {
          '@type': 'Question',
          name: 'How often should I schedule professional hood cleaning in San Diego?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 sets minimum cleaning frequencies by cooking type: monthly for solid fuel or high-volume operations, quarterly for most full-service restaurants, and semi-annually for low-volume or seasonal facilities. A reputable company will assess your operation and recommend the correct interval — not just quote the cheapest option.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if my hood cleaning company does not provide proper documentation?',
          acceptedAnswer: { '@type': 'Answer', text: 'Without a compliant service certificate and NFPA 96 sticker, you have no proof of compliance for San Diego fire inspectors or County Environmental Health inspectors. If an inspector cannot verify your system was professionally cleaned at the required interval, you can receive a citation — even if the cleaning actually happened. Documentation is as important as the cleaning itself.' }
        }
      ]
    }
  ]
}

const tocItems = [
  { href: '#why-it-matters', label: 'Why Who You Hire Matters' },
  { href: '#certifications', label: 'Certifications to Require' },
  { href: '#what-full-service-includes', label: 'What a Full-Service Cleaning Includes' },
  { href: '#red-flags', label: 'Red Flags to Avoid' },
  { href: '#questions-to-ask', label: '10 Questions to Ask Before Hiring' },
  { href: '#documentation', label: 'The Documentation You Should Receive' },
  { href: '#pricing', label: 'Understanding Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function ChoosingHoodCleaningCompanySanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Buying Guide</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 8 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              How to Choose a Hood Cleaning Company in San Diego: Certifications, Red Flags & Questions to Ask
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              Not all hood cleaning companies deliver what your fire marshal and health inspector need to see. Here is how to evaluate vendors, what documentation to demand, and what incomplete service looks like.
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

            <h2 id="why-it-matters" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Who You Hire Matters for Compliance</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Hood cleaning is not a commodity service where the cheapest vendor wins. The service certificate and NFPA 96 sticker your technician leaves behind are legal compliance documents reviewed by San Diego fire marshals and County Environmental Health inspectors. If those documents are missing, incomplete, or inaccurate — or if the cleaning itself was partial — you carry the risk.</p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>A non-compliant cleaning looks identical to a compliant one from the outside. The difference shows up when an inspector asks for your certificate, when a fire starts in a duct that was never cleaned, or when your insurance carrier investigates a claim and finds the cleaning records don't hold up.</p>

            <h2 id="certifications" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Certifications to Require</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>California does not issue a state license for hood cleaning, which means anyone can call themselves a hood cleaning company. The industry's accepted credential is <strong>IKECA certification</strong> — the International Kitchen Exhaust Cleaning Association trains and certifies technicians to NFPA 96 standards.</p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { cert: 'IKECA Certification', detail: 'The gold standard. Certifies that the technician has been trained to NFPA 96 standards. Ask for the technician\'s certification number — it should appear on your service certificate.' },
                { cert: 'NFPA 96 Knowledge', detail: 'Any credible company should be able to discuss the relevant code sections by number and explain how their service satisfies them. Vague answers about "meeting code" without specifics are a warning sign.' },
                { cert: 'Liability Insurance', detail: 'Ask for a certificate of insurance showing general liability coverage. A company cleaning your rooftop fan and running water through your ductwork without adequate insurance is a risk to your property.' },
                { cert: 'Business License', detail: 'Verify the company operates a legitimate San Diego area business with a physical address. A post office box and a truck are not sufficient.' },
              ].map((r, i) => (
                <div key={r.cert} style={{ display: 'flex', gap: '16px', padding: '14px 0', borderBottom: i < 3 ? '1px solid var(--gray-light)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, color: 'var(--true-blue)', fontSize: '1.1rem', flexShrink: 0, width: '28px', paddingTop: '2px' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{r.cert}</div><div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{r.detail}</div></div>
                </div>
              ))}
            </div>

            <h2 id="what-full-service-includes" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Full-Service NFPA 96 Cleaning Includes</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>NFPA 96 requires cleaning of the entire exhaust path — from the cooking surface to the point of discharge outside the building. Many low-cost operators clean only what is visible from the kitchen and skip the ductwork interior and rooftop fan. That is not a compliant cleaning.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { step: 'Kitchen Protection', detail: 'All cooking equipment, surfaces, and adjacent areas covered with heavy-duty plastic sheeting before any water is applied.' },
                { step: 'Before Photos', detail: 'Photographic documentation of hood, plenum, and fan condition before cleaning begins — required for a compliant service report.' },
                { step: 'Filter Removal', detail: 'Grease filters removed and pressure-washed separately, giving technicians direct access to the plenum chamber.' },
                { step: 'Hood & Plenum', detail: 'All interior hood surfaces and the plenum chamber degreased and pressure-washed.' },
                { step: 'Ductwork', detail: 'Accessible duct interior cleaned from the hood opening and from the rooftop fan access point using extensions as needed.' },
                { step: 'Rooftop Exhaust Fan', detail: 'Fan housing opened or removed, fan blades cleaned, interior housing washed, grease drip pan cleaned. The single most commonly skipped step by non-compliant operators.' },
                { step: 'Grease Disposal', detail: 'All wash water and displaced grease collected and properly disposed of — not drained onto your roof or down a storm drain.' },
                { step: 'After Photos + Certificate', detail: 'Post-cleaning photos of all areas. Signed service certificate with technician certification number. NFPA 96 sticker applied to the hood.' },
              ].map((s, i) => (
                <li key={s.step} style={{ display: 'flex', gap: '20px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: 'var(--rust)', flexShrink: 0, width: '32px' }}>{String(i + 1).padStart(2, '0')}</div>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{s.step}</div><div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{s.detail}</div></div>
                </li>
              ))}
            </ul>

            <h2 id="red-flags" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Red Flags to Avoid</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>These are the warning signs that a hood cleaning company is cutting corners — and putting your compliance at risk.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { flag: 'Quotes given by phone without a site visit', why: 'System size, duct length, and grease load vary dramatically. Any company quoting a flat price sight-unseen is not accounting for actual scope of work.' },
                { flag: 'Price significantly below other San Diego vendors', why: 'Legitimate NFPA 96-compliant cleaning takes time. Crews that are in and out in under an hour for a full kitchen are almost certainly skipping steps.' },
                { flag: 'Cannot provide technician certification numbers', why: 'IKECA-certified technicians have a verifiable credential. If the company cannot produce it, they are not certified.' },
                { flag: 'Service certificate does not mention ductwork or rooftop fan', why: 'A certificate that only says "hood cleaned" does not document full NFPA 96 compliance. Inspectors and insurance carriers look for complete system documentation.' },
                { flag: 'No before/after photos included', why: 'Reputable companies document the job photographically. No photos means no verifiable proof of what was actually cleaned.' },
                { flag: 'No NFPA 96 sticker applied to the hood', why: 'The sticker is required by NFPA 96 Section 11.6.3. If your company skips it, they are either unaware of the code or deliberately cutting steps.' },
                { flag: 'Pressure to sign a long-term contract immediately', why: 'Evaluate the quality of the first service before committing to an annual contract. A company confident in their work will not need to lock you in before you have seen what they deliver.' },
              ].map(r => (
                <li key={r.flag} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, marginTop: '1px' }}>✕</span>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{r.flag}</div><div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.why}</div></div>
                </li>
              ))}
            </ul>

            <h2 id="questions-to-ask" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>10 Questions to Ask Before Hiring</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Ask these before signing anything. A credible company answers all of them directly — evasiveness on any is a signal.</p>
            <ol style={{ paddingLeft: '20px', marginBottom: '40px' }}>
              {[
                'Are your technicians IKECA-certified? Can you provide their certification number on the service certificate?',
                'Does your cleaning include the full exhaust path — hood, plenum, ductwork, and rooftop exhaust fan?',
                'Do you provide before and after photos of every area cleaned?',
                'What does your service certificate document specifically?',
                'Do you apply an NFPA 96 compliance sticker to the hood after every service?',
                'How do you handle grease disposal on the rooftop?',
                'Can you provide a certificate of general liability insurance?',
                'Have you worked with San Diego County fire marshals or health inspectors before?',
                'What is your recommended cleaning frequency for my specific operation, and why?',
                'What areas might you not be able to clean, and how do you document those on the service report?',
              ].map(q => (
                <li key={q} style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.7', marginBottom: '10px' }}>{q}</li>
              ))}
            </ol>

            <h2 id="documentation" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Documentation You Should Receive After Every Service</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>When a professional hood cleaning is complete, you should receive a documentation package that satisfies both fire and health inspection requirements. If any of these items are missing, follow up before the technician leaves.</p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                'Service certificate with: date, technician name and IKECA certification number, areas cleaned, areas not cleaned and reason',
                'Before photos of hood, plenum, ductwork access points, and rooftop fan — taken before cleaning begins',
                'After photos of the same areas — taken after cleaning is complete',
                'NFPA 96 compliance sticker physically applied to the hood interior',
                'Written recommendation on cleaning frequency and any system issues observed',
              ].map(i => (
                <div key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>✓</span>{i}
                </div>
              ))}
            </div>

            <h2 id="pricing" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Understanding Hood Cleaning Pricing in San Diego</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Pricing varies based on factors that require an on-site assessment to evaluate accurately. Be cautious of flat-rate quotes given before anyone has seen your system.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
              {[
                { factor: 'Number of hood sections and linear feet of canopy', impact: 'More hood surface = more time degreasing and pressure washing' },
                { factor: 'Duct length and configuration', impact: 'Long runs or complex routing require more labor and equipment' },
                { factor: 'Rooftop fan accessibility', impact: 'Multi-story buildings or difficult roof access add time' },
                { factor: 'Current grease load', impact: 'Heavily loaded systems from infrequent cleaning take significantly longer' },
                { factor: 'Cooking type', impact: 'Solid fuel and high-volume operations produce more grease and require more thorough cleaning' },
              ].map(r => (
                <li key={r.factor} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <span style={{ color: 'var(--true-blue)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>→</span>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '2px' }}>{r.factor}</div><div style={{ fontSize: '0.83rem', color: 'var(--gray-text)' }}>{r.impact}</div></div>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>The lowest price in San Diego is rarely a good deal. The cost of a missed fire citation, an insurance claim denial, or a health grade deduction far exceeds the price difference between a compliant and a non-compliant service.</p>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>See What Certified Service Looks Like</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning provides IKECA-certified NFPA 96 cleaning with full documentation — every time. Request a site assessment and we will confirm the right scope and frequency for your operation.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Get a Free Assessment</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'What certifications should a hood cleaning company have in California?', a: 'Look for IKECA (International Kitchen Exhaust Cleaning Association) certification — the industry standard for professional hood cleaning. Technicians should be able to provide their certification number on the service certificate. California does not require a separate state license for hood cleaning, but IKECA certification demonstrates training to NFPA 96 standards.' },
              { q: 'What should a hood cleaning service certificate include?', a: 'A compliant service certificate must include: the date of service, technician name and certification number, specific areas cleaned (hood, plenum, ductwork, fan), any areas not cleaned and the reason, before and after photos, and company contact information. The NFPA 96 sticker on the hood should match the date on the certificate.' },
              { q: 'How much does hood cleaning cost in San Diego?', a: 'Pricing varies based on system size, duct length, rooftop fan accessibility, and current grease load. Get a site assessment rather than a phone quote for accurate pricing. Be cautious of prices significantly below the market rate — they typically indicate incomplete service.' },
              { q: 'What are the red flags when hiring a hood cleaning company?', a: 'Red flags include: no physical business address, inability to provide technician certification numbers, no before/after photos, significantly below-market pricing, no NFPA 96 sticker after service, and certificates that only mention the hood without documenting ductwork and the rooftop fan.' },
              { q: 'Does the hood cleaning company need to clean the rooftop fan?', a: 'Yes. NFPA 96 requires cleaning of the entire exhaust path from cooking surface to discharge point — including the rooftop exhaust fan. Any company that skips the fan is not providing a compliant service. Confirm it will appear in your service report before scheduling.' },
              { q: 'How often should I schedule professional hood cleaning in San Diego?', a: 'NFPA 96 sets minimum intervals by cooking type: monthly for solid fuel or high-volume operations, quarterly for most full-service restaurants, semi-annually for low-volume or seasonal facilities. A reputable company will assess your operation and recommend the correct frequency.' },
              { q: 'What happens if my hood cleaning company does not provide proper documentation?', a: 'Without a compliant service certificate and NFPA 96 sticker, you have no proof of compliance for fire marshals or health inspectors. You can receive a citation even if the cleaning actually occurred. Documentation is as important as the cleaning itself.' },
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
