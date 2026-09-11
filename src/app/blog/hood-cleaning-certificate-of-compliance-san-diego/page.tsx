import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning Certificate of Compliance San Diego: What Inspectors Actually Ask For | Core Hood Cleaning',
  description: 'Your hood cleaning certificate is the proof fire marshals, health inspectors, and insurance carriers require. Here is what NFPA 96 says it must contain and how to keep yours current in San Diego.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/hood-cleaning-certificate-of-compliance-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Hood Cleaning Certificate of Compliance San Diego: What Inspectors Actually Ask For',
      description: 'Your hood cleaning certificate is the proof fire marshals, health inspectors, and insurance carriers require. Here is what NFPA 96 says it must contain and how to keep yours current in San Diego.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-09-11',
      dateModified: '2026-09-11',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/hood-cleaning-certificate-of-compliance-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a hood cleaning certificate of compliance?',
          acceptedAnswer: { '@type': 'Answer', text: 'A hood cleaning certificate of compliance is the written record a certified service company issues after cleaning your commercial kitchen exhaust system. It documents the date of service, the company and technician who performed it, the scope of what was cleaned, any areas that could not be reached, and the next service date. NFPA 96 requires this record to be kept on site and made available to the authority having jurisdiction on request.' }
        },
        {
          '@type': 'Question',
          name: 'What does NFPA 96 require the certificate to contain?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 requires the service report to record the date of inspection or cleaning, the name of the servicing company, the name of the technician, the scope of work performed, and specific notation of any areas of the system that were not cleaned or were found inaccessible. That last item is the one most operators never see on a competitor report, and it is the one inspectors read closest.' }
        },
        {
          '@type': 'Question',
          name: 'How long do I need to keep my hood cleaning certificates?',
          acceptedAnswer: { '@type': 'Answer', text: 'Keep a minimum of the last two service cycles on site at all times, which for most San Diego restaurants means the last 12 months of records. Many operators keep three full years because insurance carriers and fire marshals investigating a grease fire will ask for the service history, not just the most recent certificate. Digital copies are fine as long as you can produce them during an inspection.' }
        },
        {
          '@type': 'Question',
          name: 'Is the sticker on my hood the same thing as the certificate?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. The sticker is a quick visual reference showing the service date, the next due date, and the company that performed the work. The certificate is the full written record. An inspector will check the sticker first because it is visible in seconds, then ask for the certificate and photos if anything looks questionable. You need both.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if I cannot produce a certificate during an inspection?',
          acceptedAnswer: { '@type': 'Answer', text: 'From the inspector point of view, undocumented cleaning did not happen. Missing records are cited as a violation even when the system is visibly clean. Depending on the condition of the system and the jurisdiction, that can result in a correction notice with a deadline, a reinspection fee, or in the worst cases a closure order until compliant service is performed and documented.' }
        },
        {
          '@type': 'Question',
          name: 'Does my insurance carrier need my hood cleaning certificates?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most commercial property policies covering restaurants include a protective safeguards or maintenance condition that requires compliant exhaust cleaning at the code interval. If a grease fire occurs and you cannot produce records showing the system was serviced on schedule, the carrier has grounds to reduce or deny the claim. Your certificates are the evidence that you met the condition.' }
        },
        {
          '@type': 'Question',
          name: 'What should I look for on a certificate to know it is legitimate?',
          acceptedAnswer: { '@type': 'Answer', text: 'Look for the full scope broken out by component, specifically hood, plenum, filters, ductwork, and rooftop exhaust fan. Look for before and after photos of each area. Look for an honest notation of any inaccessible sections. A certificate that says only cleaned hood with no component detail and no photos is a red flag, and inspectors treat it that way.' }
        },
        {
          '@type': 'Question',
          name: 'Do I get a new certificate for every service?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every full system service produces its own certificate, service report, photo set, and a fresh sticker for the hood. Filter exchange visits are logged as maintenance and do not replace the full system certificate, because a filter swap does not clean the plenum, duct run, or rooftop fan.' }
        },
        {
          '@type': 'Question',
          name: 'Can Core Hood Cleaning send my certificates to my fire marshal or insurance carrier directly?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We keep a digital record of every service we perform and can send certificates, service reports, and photo documentation directly to your fire marshal, health inspector, insurance agent, or corporate compliance office. Call (858) 361-2570 and we will pull your service history.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#what-the-certificate-is', label: 'What the Certificate Actually Is' },
  { href: '#what-nfpa-96-requires', label: 'What NFPA 96 Requires On It' },
  { href: '#who-asks-for-it', label: 'Who Asks For It and Why' },
  { href: '#sticker-vs-certificate', label: 'Sticker vs Certificate vs Service Report' },
  { href: '#red-flags', label: 'Red Flags on a Weak Certificate' },
  { href: '#recordkeeping', label: 'How to Keep Your Records Inspection Ready' },
  { href: '#what-we-hand-you', label: 'What We Hand You After Every Service' },
  { href: '#faq', label: 'FAQ' },
]

export default function HoodCleaningCertificateOfComplianceSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Compliance</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>September 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Hood Cleaning Certificate of Compliance San Diego: What Inspectors Actually Ask For
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              A clean system is only half of compliance. The other half is the paper that proves it. Here is what your certificate must contain, who will ask to see it, and what happens when you cannot produce one.
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

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Growing up working in restaurants, I watched more than one operator get written up for something they had already paid to fix. The system was clean. The vendor had been out. But when the inspector asked for the record, nobody could find it, or the piece of paper they handed over said almost nothing. The cleaning happened. The compliance did not.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              That gap is the single most common compliance failure we see in San Diego kitchens, and it is completely avoidable. Your hood cleaning certificate of compliance is not a receipt. It is the legal record that your kitchen exhaust system was serviced to NFPA 96 standards, and it is the first thing a fire marshal, health inspector, or insurance adjuster will ask for when the question of your exhaust system comes up.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              This guide covers what the certificate is, what NFPA 96 requires it to contain, who asks for it in San Diego County, how it differs from the sticker on your hood, and how to keep your records in a state where any inspection is a nonevent.
            </p>

            <h2 id="what-the-certificate-is" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What the Certificate Actually Is</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A hood cleaning certificate of compliance is the written record a certified service company issues after cleaning your commercial kitchen exhaust system. It states what was cleaned, when, by whom, and to what standard. It is the document that converts work performed into compliance demonstrated.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The distinction matters because regulators do not evaluate your kitchen on good intentions. An inspector walking your line cannot know whether the duct run above the ceiling was cleaned three months ago or three years ago. The certificate is the only thing that answers that question, which is why NFPA 96 treats recordkeeping as a requirement of the standard and not an administrative nicety.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>The short version</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.7', margin: 0 }}>
                If you cannot produce the record, the cleaning did not happen. That is the operating assumption of every inspector and every claims adjuster, and arguing with it after the fact has never worked for anyone.
              </p>
            </div>

            <h2 id="what-nfpa-96-requires" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What NFPA 96 Requires On It</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is specific about what the service record has to capture. A certificate that leaves any of these out is incomplete, and an inspector who knows the standard will treat it that way.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Date of inspection or cleaning', detail: 'Establishes your interval and whether you are current' },
                { item: 'Name of the servicing company', detail: 'Identifies who is accountable for the work performed' },
                { item: 'Name of the technician', detail: 'Ties the service to a specific certified individual' },
                { item: 'Scope of work performed', detail: 'Broken out by component, not a single generic line' },
                { item: 'Areas not cleaned or inaccessible', detail: 'The line inspectors read closest and most reports omit' },
                { item: 'Next service date', detail: 'Documents the interval assigned to your cooking volume' },
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
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Pay attention to the inaccessible areas line. NFPA 96 requires the service company to disclose any section of the system that could not be reached, typically a duct run with no access panel, a concealed horizontal section, or a fan the technician could not safely reach. An honest report says so in writing and recommends the fix, usually installing an access door panel.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Here is why that matters to you as the operator. If a fire starts in a concealed duct section that was never cleaned, and your certificates never disclosed that the section was inaccessible, you have a documentation problem on top of a fire. If the reports did disclose it and you acted on the recommendation, you have a paper trail showing you addressed a known condition. Same fire, very different position.
            </p>

            <h2 id="who-asks-for-it" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Who Asks For It and Why</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Four different parties will ask to see your hood cleaning documentation, and each one is looking for something slightly different. Knowing what each wants tells you how to organize your records.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              {[
                { num: '01', title: 'Fire Marshal', desc: 'Confirming your cleaning interval matches your cooking volume and that the full system including ductwork and rooftop fan was serviced. Checks the sticker first, then asks for records.' },
                { num: '02', title: 'Health Inspector', desc: 'Looking for grease accumulation as a sanitation and pest concern, and for current documented service. Exhaust findings routinely appear on San Diego County health reports.' },
                { num: '03', title: 'Insurance Carrier', desc: 'Verifying you met the maintenance condition in your policy. Asks for service history at renewal, at underwriting, and immediately after any fire claim.' },
                { num: '04', title: 'Landlord or Corporate', desc: 'Most commercial leases and franchise agreements require proof of exhaust maintenance. Property managers request certificates annually or at lease renewal.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The insurance angle is the one operators underestimate. Commercial property policies covering restaurants commonly carry a protective safeguards condition requiring compliant exhaust cleaning at the code interval. It is boilerplate language most owners never read. It becomes the whole conversation the day a grease fire happens.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              When a carrier investigates a kitchen fire, the adjuster requests the exhaust service history. Not the most recent certificate. The history. If there are gaps, or if the records show a 12 month interval on a kitchen that should have been on a 3 month interval, the carrier has documented grounds to reduce or deny the claim. Your certificates are the evidence that you held up your end.
            </p>

            <h2 id="sticker-vs-certificate" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Sticker vs Certificate vs Service Report</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Operators use these three terms interchangeably. Inspectors do not. They are three separate pieces of the same documentation package and you need all three.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              {[
                { step: '1', action: 'The sticker', detail: 'A dated label applied to the hood showing service date, next due date, and servicing company. Visible in seconds. This is what an inspector checks first.' },
                { step: '2', action: 'The certificate of compliance', detail: 'The formal document stating the system was cleaned to NFPA 96 standards on a specific date by a specific certified company. This is what you hand over when asked for proof.' },
                { step: '3', action: 'The service report', detail: 'The detailed breakdown of what was cleaned component by component, what was found, what could not be reached, and what was recommended. This is the backup that supports the certificate.' },
                { step: '4', action: 'The photo set', detail: 'Before and after images of the hood, plenum, duct run, and rooftop fan. Not required by the standard, but it is the fastest way to end any dispute about scope.' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900, color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0 }}>{item.step}</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.88rem' }}>{item.action}: </span><span style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{item.detail}</span></div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              A common failure mode in San Diego kitchens is having a current sticker and nothing behind it. The vendor slapped a label on the hood and left. When the inspector asks for the certificate, there is nothing in the binder. A sticker with no supporting record is worth very little, and some inspectors treat an unsupported sticker as worse than no sticker at all, because it implies the service was superficial.
            </p>

            <h2 id="red-flags" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Red Flags on a Weak Certificate</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Pull out your most recent certificate and read it against this list. If more than one of these applies, your documentation will not hold up under a real inspection.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>Check your certificate for these</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Scope listed as a single generic line such as cleaned hood with no component breakdown',
                  'No mention of ductwork or the rooftop exhaust fan anywhere on the document',
                  'No technician name, only a company name or an illegible signature',
                  'No photos of any kind, before or after',
                  'No statement about inaccessible areas, even though your system has concealed duct runs',
                  'No next service date, or an interval that does not match your actual cooking volume',
                  'Handwritten on a generic invoice pad with no reference to NFPA 96',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The rooftop fan omission is the one worth flagging hardest. A large share of the vendors working San Diego County never go to the roof. They clean the hood canopy and the filters, hand over a certificate that says the system was serviced, and drive off. The duct run and the fan, which is where grease actually accumulates to dangerous depth, go untouched year after year.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              If your certificates never name the rooftop fan, you are paying for full system compliance and receiving a surface cleaning. You will find out on the day an inspector opens an access panel, or on the day you have a fire. Neither is a good day to discover it. More on how to evaluate a vendor in our guide to <Link href="/blog/choosing-hood-cleaning-company-san-diego" style={{ color: 'var(--rust)', fontWeight: 600, textDecoration: 'none' }}>choosing a hood cleaning company in San Diego</Link>.
            </p>

            <h2 id="recordkeeping" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How to Keep Your Records Inspection Ready</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The goal is simple. When an inspector asks, you produce the record in under a minute without calling anybody. Here is the system that works for the operators we service.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
              {[
                { label: 'Keep a physical binder on site', detail: 'A labeled binder in the office or near the manager station with the last three years of certificates in date order. Inspectors appreciate it and it signals a well run operation.' },
                { label: 'Keep a digital backup', detail: 'A shared cloud folder your managers can reach from a phone. Kitchens flood, binders walk, and the inspector standing in front of you does not care why.' },
                { label: 'Include the photo sets', detail: 'File the before and after images with the certificate they belong to. Photos settle scope disputes instantly.' },
                { label: 'Log filter exchange visits separately', detail: 'Maintenance visits are worth documenting but they belong in their own section so nobody mistakes a filter swap for a full system service.' },
                { label: 'Track your next due date on a calendar', detail: 'Do not rely on the sticker alone. Put the next service date in the same calendar you use for everything else and set a 30 day reminder.' },
                { label: 'Request records from your vendor annually', detail: 'Any reputable company keeps a digital service history. Ask for a full export once a year and confirm it matches what is in your binder.' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.detail}</span></div>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              One more note on intervals. NFPA 96 sets cleaning frequency by cooking volume and fuel type, not by calendar convenience. Solid fuel operations require monthly service. High volume operations require quarterly. Moderate volume operations require service every six months. Low volume operations such as churches, seasonal kitchens, and day camps require annual service.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Your certificate should state an interval consistent with your actual operation. A certificate assigning an annual interval to a kitchen running a 16 hour line with fryers and a charbroiler is a documented mismatch, and an inspector who catches it will cite the interval itself as the violation. We break this down further in our guide to <Link href="/blog/hood-cleaning-frequency-cooking-type" style={{ color: 'var(--rust)', fontWeight: 600, textDecoration: 'none' }}>hood cleaning frequency by cooking type</Link>.
            </p>

            <h2 id="what-we-hand-you" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What We Hand You After Every Service</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              We built our documentation around one idea. We hand you proof, not promises. Every full system service Core Hood Cleaning performs in San Diego County produces the complete package before we leave the property.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'NFPA 96 certificate of compliance', detail: 'Dated, signed, company and technician named' },
                { item: 'Written service report by component', detail: 'Hood, plenum, filters, duct run, rooftop fan listed individually' },
                { item: 'Before and after photo set', detail: 'Every area photographed including the roof' },
                { item: 'Inaccessible area disclosure', detail: 'Anything we could not reach is stated in writing with a recommendation' },
                { item: 'NFPA 96 sticker applied to the hood', detail: 'Service date, next due date, our company name' },
                { item: 'Next service date on your interval', detail: 'Set by your cooking volume and fuel type, not by our schedule' },
                { item: 'Digital copy retained on our end', detail: 'We can resend or forward your history any time you need it' },
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
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              We are NFPA 96 certified and every technician goes to the roof on every service call. The rooftop exhaust fan is part of the system, so it is part of the certificate. There is no version of our service where the fan is skipped and the paperwork says otherwise.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              If you need your service history sent somewhere, we send it. Fire marshal, health inspector, insurance agent, landlord, corporate compliance office. One call and it goes out. You can see the full scope on our <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)', fontWeight: 600, textDecoration: 'none' }}>hood cleaning service page</Link>, or read about our <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)', fontWeight: 600, textDecoration: 'none' }}>NFPA 96 inspection service</Link> if you need a system assessment before your next inspection.
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Not Sure Your Records Would Hold Up?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>Send us your last certificate and we will tell you straight whether it covers what an inspector will ask for. No pressure, no obligation. NFPA 96 certified service across all of San Diego County.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'What is a hood cleaning certificate of compliance?', a: 'A hood cleaning certificate of compliance is the written record a certified service company issues after cleaning your commercial kitchen exhaust system. It documents the date of service, the company and technician who performed it, the scope of what was cleaned, any areas that could not be reached, and the next service date. NFPA 96 requires this record to be kept on site and made available to the authority having jurisdiction on request.' },
              { q: 'What does NFPA 96 require the certificate to contain?', a: 'NFPA 96 requires the service report to record the date of inspection or cleaning, the name of the servicing company, the name of the technician, the scope of work performed, and specific notation of any areas of the system that were not cleaned or were found inaccessible. That last item is the one most operators never see on a competitor report, and it is the one inspectors read closest.' },
              { q: 'How long do I need to keep my hood cleaning certificates?', a: 'Keep a minimum of the last two service cycles on site at all times, which for most San Diego restaurants means the last 12 months of records. Many operators keep three full years because insurance carriers and fire marshals investigating a grease fire will ask for the service history, not just the most recent certificate. Digital copies are fine as long as you can produce them during an inspection.' },
              { q: 'Is the sticker on my hood the same thing as the certificate?', a: 'No. The sticker is a quick visual reference showing the service date, the next due date, and the company that performed the work. The certificate is the full written record. An inspector will check the sticker first because it is visible in seconds, then ask for the certificate and photos if anything looks questionable. You need both.' },
              { q: 'What happens if I cannot produce a certificate during an inspection?', a: 'From the inspector point of view, undocumented cleaning did not happen. Missing records are cited as a violation even when the system is visibly clean. Depending on the condition of the system and the jurisdiction, that can result in a correction notice with a deadline, a reinspection fee, or in the worst cases a closure order until compliant service is performed and documented.' },
              { q: 'Does my insurance carrier need my hood cleaning certificates?', a: 'Most commercial property policies covering restaurants include a protective safeguards or maintenance condition that requires compliant exhaust cleaning at the code interval. If a grease fire occurs and you cannot produce records showing the system was serviced on schedule, the carrier has grounds to reduce or deny the claim. Your certificates are the evidence that you met the condition.' },
              { q: 'What should I look for on a certificate to know it is legitimate?', a: 'Look for the full scope broken out by component, specifically hood, plenum, filters, ductwork, and rooftop exhaust fan. Look for before and after photos of each area. Look for an honest notation of any inaccessible sections. A certificate that says only cleaned hood with no component detail and no photos is a red flag, and inspectors treat it that way.' },
              { q: 'Do I get a new certificate for every service?', a: 'Yes. Every full system service produces its own certificate, service report, photo set, and a fresh sticker for the hood. Filter exchange visits are logged as maintenance and do not replace the full system certificate, because a filter swap does not clean the plenum, duct run, or rooftop fan.' },
              { q: 'Can Core Hood Cleaning send my certificates to my fire marshal or insurance carrier directly?', a: 'Yes. We keep a digital record of every service we perform and can send certificates, service reports, and photo documentation directly to your fire marshal, health inspector, insurance agent, or corporate compliance office. Call (858) 361-2570 and we will pull your service history.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Restaurant Owner&apos;s Plain-English Guide</Link>
                <Link href="/blog/health-inspection-checklist-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ San Diego Restaurant Health Inspection Checklist: Kitchen Exhaust Edition</Link>
                <Link href="/blog/choosing-hood-cleaning-company-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ How to Choose a Hood Cleaning Company in San Diego</Link>
                <Link href="/blog/what-happens-during-hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Actually Happens During a Commercial Hood Cleaning?</Link>
                <Link href="/services/nfpa-inspection" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Our NFPA 96 Inspection Service</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
