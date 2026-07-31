import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'School and Hospital Hood Cleaning San Diego: NFPA 96 for Institutional Kitchens | Core Hood Cleaning',
  description: 'Cafeterias, hospital kitchens, and commissaries all fall under NFPA 96. Core Hood Cleaning services institutional kitchens across San Diego County with scheduling built around your operating hours.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/school-hospital-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'School and Hospital Hood Cleaning San Diego: NFPA 96 Compliance for Institutional Kitchens',
      description: 'Cafeterias, hospital kitchens, and commissaries all fall under NFPA 96. Core Hood Cleaning services institutional kitchens across San Diego County with scheduling built around your operating hours.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-07-30',
      dateModified: '2026-07-30',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/school-hospital-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do school cafeterias really need NFPA 96 hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Any kitchen with a commercial cooking appliance under a Type 1 exhaust hood falls under NFPA 96, and that includes school district cafeterias and central kitchens. The fire marshal does not carve out an exception for schools. Cleaning frequency depends on cooking volume and grease output, same as a restaurant.' }
        },
        {
          '@type': 'Question',
          name: 'How do you clean a hood in a hospital kitchen without disrupting patient meal service?',
          acceptedAnswer: { '@type': 'Answer', text: 'We schedule around your kitchen production hours, not the other way around. Most hospital kitchens run meal prep in tight windows with almost no downtime, so we work overnight, early morning, or during the gap between lunch and dinner service depending on what your kitchen manager needs.' }
        },
        {
          '@type': 'Question',
          name: 'Can you work around summer break for a school district cleaning schedule?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes, and a lot of districts prefer it that way. We can batch multiple school sites during summer break or winter break when kitchens are dark, or clean on a rolling schedule during the school year if your district runs year round programs. Either way we build the schedule around your calendar.' }
        },
        {
          '@type': 'Question',
          name: 'Who is responsible for hood cleaning in a shared commissary kitchen?',
          acceptedAnswer: { '@type': 'Answer', text: 'That depends on the lease or membership agreement, but the exhaust system still needs to meet NFPA 96 regardless of who signs the check. We work directly with commissary operators to set a cleaning schedule that covers every tenant using the hood, and we document service for the whole facility.' }
        },
        {
          '@type': 'Question',
          name: 'What paperwork do we need for our district or hospital facilities file?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every service includes a written report, before and after photos, an NFPA 96 compliance certificate, and a dated sticker applied to the hood. For institutional accounts we can also provide a consolidated service log across multiple sites so your facilities department has one file instead of chasing paperwork from each kitchen.' }
        },
        {
          '@type': 'Question',
          name: 'Do hospital and school kitchens get inspected the same way restaurants do?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. The San Diego Fire Marshal and county health inspectors hold institutional kitchens to the same exhaust system standard as any restaurant. Hospitals also answer to accreditation surveyors who check life safety documentation, so an up to date NFPA 96 certificate matters even more.' }
        },
        {
          '@type': 'Question',
          name: 'How often does an institutional kitchen actually need cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 sets frequency by cooking volume and grease output, not by what kind of building the kitchen sits in. A high volume hospital or district central kitchen running solid fuel or high grease equipment may need service quarterly. A lower volume cafeteria doing mostly reheating might fall on a semi-annual schedule.' }
        },
        {
          '@type': 'Question',
          name: 'Can Core Hood Cleaning handle multiple school or hospital sites on one contract?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We regularly set up multi-site service agreements for districts and hospital systems with more than one kitchen. You get one point of contact, one consolidated schedule, and one set of documentation covering every location instead of managing separate vendors per site.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#why-different', label: 'Why Institutional Kitchens Are Different' },
  { href: '#nfpa-96-requirements', label: 'NFPA 96 Requirements for Schools and Hospitals' },
  { href: '#cleaning-frequency', label: 'Cleaning Frequency for Institutional Kitchens' },
  { href: '#scheduling', label: 'Scheduling Around Students, Patients, and Staff' },
  { href: '#what-service-covers', label: 'What Full-System Service Covers' },
  { href: '#inspections', label: 'Health Department, Fire Marshal, and Accreditation' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function SchoolHospitalHoodCleaningSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Industry</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>July 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              School and Hospital Hood Cleaning San Diego: NFPA 96 for Institutional Kitchens
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Cafeterias, hospital kitchens, and commissaries all run under the same fire code as any restaurant. Core Hood Cleaning services institutional kitchens across San Diego County on schedules built around your operating hours, not the other way around.
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
              Growing up working in restaurants, I got used to thinking of hood cleaning as a restaurant problem. It took working with a few school districts and hospital facilities teams to realize how many institutional kitchens are running on the same overdue schedule, the same grease buildup, and the same fire code exposure as any restaurant kitchen, just with nobody watching as closely.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              A school cafeteria making 800 lunches a day, a hospital kitchen running three meal services around the clock, and a shared commissary serving a dozen food trucks all have one thing in common. If there is a Type 1 exhaust hood over a cooking appliance, NFPA 96 applies. There is no exception for public buildings, no grace period for institutional operators, and no separate rulebook for a facility that happens to serve students or patients instead of paying customers. This guide covers what makes these kitchens different to service, what the code requires, and how we schedule around your building instead of asking your building to work around us.
            </p>

            <h2 id="why-different" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Institutional Kitchens Are Different</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              An institutional kitchen is not smaller or simpler than a restaurant kitchen. Usually it is bigger, runs longer hours, and has less flexibility to shut down for maintenance. School districts, hospitals, and shared commissaries each come with their own operational wrinkle:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'School Cafeterias', desc: 'High volume during the school year, completely dark over summer and winter break, and often part of a multi-site district contract.' },
                { num: '02', title: 'Hospital Kitchens', desc: 'Meal service runs around the clock across breakfast, lunch, dinner, and late trays, with almost no natural downtime window.' },
                { num: '03', title: 'Shared Commissaries', desc: 'Multiple tenants using the same hood on staggered schedules, which means service has to work around everyone, not just one operator.' },
                { num: '04', title: 'Stadium and Venue Kitchens', desc: 'Long stretches of dormancy between events followed by short bursts of high volume cooking that stress the exhaust system fast.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              None of that changes what the exhaust system needs. It changes when and how we get in to do the work. A hood cleaning crew that only knows how to work a typical restaurant closing shift is going to be a poor fit for a hospital kitchen that never fully closes, or a school district that wants ten sites done in one week over summer break.
            </p>

            <h2 id="nfpa-96-requirements" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 Requirements for Schools and Hospitals</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the national fire code standard for ventilation control and fire protection of commercial cooking operations. It applies based on what the kitchen is doing, not who owns the building. A district central kitchen frying and grilling for multiple school sites, a hospital kitchen running griddles and combi ovens, and a commissary with shared range tops are all commercial cooking operations under the code.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '20px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>What the code covers</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Hood, plenum, and filter cleaning frequency tied to cooking volume and grease output',
                  'Complete ductwork from the hood to the rooftop termination point',
                  'Rooftop exhaust fan condition and clearance from combustibles',
                  'Written, dated service records that inspectors can request at any time',
                  'A visible cleaning sticker or tag showing the last service date',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              For hospitals, there is an added layer. Beyond the fire marshal, accreditation surveyors reviewing life safety compliance will ask for the same documentation. A missing or expired hood cleaning record during a survey is exactly the kind of finding that turns into a corrective action plan nobody wants to write.
            </p>

            <h2 id="cleaning-frequency" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cleaning Frequency for Institutional Kitchens</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 sets frequency by grease output and cooking volume, not by building type. Here is generally how it breaks down for the institutional kitchens we service in San Diego County:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'High volume solid fuel cooking', detail: 'Monthly service, rare in institutional settings but possible in some commissaries' },
                { item: 'High volume griddles, fryers, woks', detail: 'Quarterly service for busy hospital or district central kitchens' },
                { item: 'Moderate volume cooking equipment', detail: 'Semi-annual service, the most common schedule for school cafeterias' },
                { item: 'Low volume reheat and steam equipment', detail: 'Annual service for lighter cafeteria or satellite kitchen operations' },
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
              A district running a central kitchen that supplies satellite cafeterias often needs a different frequency than the satellite sites themselves. We assess each kitchen on its own cooking profile rather than applying one blanket schedule across every location on a multi-site contract.
            </p>

            <h2 id="scheduling" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Scheduling Around Students, Patients, and Staff</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              This is where institutional kitchens really diverge from restaurants. A restaurant closes at 10pm and we work the overnight. A hospital kitchen might never fully close, and a school kitchen might be locked inside a campus with its own access rules. We build the schedule around what actually works for your operation:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'School districts', detail: 'Summer and winter break blitz scheduling across multiple sites, or rolling weekend service during the school year' },
                { label: 'Hospitals', detail: 'Overnight or early morning windows between meal services, coordinated with your kitchen manager and facilities team' },
                { label: 'Shared commissaries', detail: 'Off-peak blocks that avoid conflicting with any tenant currently using the hood' },
                { label: 'Stadiums and venues', detail: 'Service scheduled in the gap between events rather than fighting a live event calendar' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.detail}</span></div>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              For multi-site districts and hospital systems, we also handle badge access requirements, campus check-in procedures, and any site-specific rules your facilities department needs followed. Here is the thing, we know this only works if it does not become another thing your staff has to manage on service day.
            </p>

            <h2 id="what-service-covers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Full-System Service Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Institutional kitchens get the same complete NFPA 96 scope as any restaurant. No shortcuts because the building is public and no partial service because the site is large:
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy, baffles, and plenum chamber', detail: 'Full interior cleaning, not a surface wipe-down' },
                { item: 'Grease filters removed, washed, and reinstalled', detail: 'Standard on every service regardless of kitchen size' },
                { item: 'Complete ductwork from plenum to rooftop', detail: 'Cleaned from both ends, the section inspectors check most' },
                { item: 'Rooftop exhaust fan, blades, housing, curb', detail: 'Every technician goes to the roof on every service call' },
                { item: 'Grease collection and proper disposal', detail: 'No drain dumping, ever' },
                { item: 'Before and after photo documentation', detail: 'Your proof of service, site by site' },
                { item: 'NFPA 96 compliance certificate', detail: 'One per site, or one consolidated report for multi-site contracts' },
                { item: 'Dated cleaning sticker applied to the hood', detail: 'Required for fire marshal and surveyor clearance' },
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
              That is exactly why I started Core, to be a vendor that a facilities director or kitchen manager can hand a compliance requirement to and not have to think about it again until the next service date.
            </p>

            <h2 id="inspections" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Health Department, Fire Marshal, and Accreditation</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Institutional kitchens answer to the same San Diego Fire Marshal and Department of Environmental Health inspections as any restaurant, plus whatever oversight body applies to the institution itself. Hospitals face accreditation surveys that review life safety and kitchen sanitation documentation. School districts often face internal facilities audits on top of standard health inspections.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              What ties all of it together is documentation. An inspector or surveyor is not going to take your word for it that the hood was cleaned on schedule. They want the dated sticker on the hood, the written service report, and a certificate they can pull if there is ever an incident.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '12px' }}>Who checks what</p>
              {[
                { step: 'Fire Marshal', action: 'Verifies cleaning frequency, sticker date, and ductwork condition against NFPA 96' },
                { step: 'Health Dept', action: 'Reviews sanitation of the hood and filters as part of the broader kitchen inspection' },
                { step: 'Accreditation', action: 'For hospitals, reviews life safety documentation as part of a full facility survey' },
                { step: 'District Facilities', action: 'For schools, often maintains its own internal compliance file across every site' },
              ].map(item => (
                <div key={item.step} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900, color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0 }}>{item.step}</span>
                  <div><span style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{item.action}</span></div>
                </div>
              ))}
            </div>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>We service school districts, hospital systems, and commissaries throughout San Diego County:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['Downtown San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Running a School, Hospital, or Commissary Kitchen?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>We build the schedule around your operating hours, not the other way around. NFPA 96 certified, full documentation, multi-site contracts available.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Do school cafeterias really need NFPA 96 hood cleaning?', a: 'Yes. Any kitchen with a commercial cooking appliance under a Type 1 exhaust hood falls under NFPA 96, and that includes school district cafeterias and central kitchens. The fire marshal does not carve out an exception for schools. Cleaning frequency depends on cooking volume and grease output, same as a restaurant.' },
              { q: 'How do you clean a hood in a hospital kitchen without disrupting patient meal service?', a: 'We schedule around your kitchen production hours, not the other way around. Most hospital kitchens run meal prep in tight windows with almost no downtime, so we work overnight, early morning, or during the gap between lunch and dinner service depending on what your kitchen manager needs.' },
              { q: 'Can you work around summer break for a school district cleaning schedule?', a: 'Yes, and a lot of districts prefer it that way. We can batch multiple school sites during summer break or winter break when kitchens are dark, or clean on a rolling schedule during the school year if your district runs year round programs. Either way we build the schedule around your calendar.' },
              { q: 'Who is responsible for hood cleaning in a shared commissary kitchen?', a: 'That depends on the lease or membership agreement, but the exhaust system still needs to meet NFPA 96 regardless of who signs the check. We work directly with commissary operators to set a cleaning schedule that covers every tenant using the hood, and we document service for the whole facility.' },
              { q: 'What paperwork do we need for our district or hospital facilities file?', a: 'Every service includes a written report, before and after photos, an NFPA 96 compliance certificate, and a dated sticker applied to the hood. For institutional accounts we can also provide a consolidated service log across multiple sites so your facilities department has one file instead of chasing paperwork from each kitchen.' },
              { q: 'Do hospital and school kitchens get inspected the same way restaurants do?', a: 'Yes. The San Diego Fire Marshal and county health inspectors hold institutional kitchens to the same exhaust system standard as any restaurant. Hospitals also answer to accreditation surveyors who check life safety documentation, so an up to date NFPA 96 certificate matters even more.' },
              { q: 'How often does an institutional kitchen actually need cleaning?', a: 'NFPA 96 sets frequency by cooking volume and grease output, not by what kind of building the kitchen sits in. A high volume hospital or district central kitchen running solid fuel or high grease equipment may need service quarterly. A lower volume cafeteria doing mostly reheating might fall on a semi-annual schedule.' },
              { q: 'Can Core Hood Cleaning handle multiple school or hospital sites on one contract?', a: 'Yes. We regularly set up multi-site service agreements for districts and hospital systems with more than one kitchen. You get one point of contact, one consolidated schedule, and one set of documentation covering every location instead of managing separate vendors per site.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/commercial-kitchen-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide</Link>
                <Link href="/blog/hood-cleaning-frequency-cooking-type" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Frequency by Cooking Type: A Breakdown for San Diego Kitchens</Link>
                <Link href="/blog/restaurant-compliance-san-diego-guide" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ The Complete Guide to Restaurant Compliance in San Diego County</Link>
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
