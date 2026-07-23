import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'After Hours Hood Cleaning San Diego: Nighttime Service for Restaurants & Bars | Core Hood Cleaning',
  description: 'Core Hood Cleaning offers after hours and overnight hood cleaning throughout San Diego County so your kitchen stays open during business hours. NFPA 96 certified. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/after-hours-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'After Hours Hood Cleaning San Diego: Nighttime Service for Restaurants and Bars',
      description: 'Core Hood Cleaning offers after hours and overnight hood cleaning throughout San Diego County so your kitchen stays open during business hours.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-07-23',
      dateModified: '2026-07-23',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/after-hours-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What counts as after hours hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'After hours hood cleaning is any full system service scheduled outside your normal operating hours, typically late at night or overnight once your kitchen has closed for the day. It covers the exact same NFPA 96 scope as a daytime cleaning, hood canopy through the rooftop fan, just timed so it never touches your service window.' }
        },
        {
          '@type': 'Question',
          name: 'Why do some restaurants need cleaning done at night?',
          acceptedAnswer: { '@type': 'Answer', text: 'High volume kitchens, bars, breweries, and 24 hour operations often cannot afford to shut down equipment during the day. A hood cleaning takes the exhaust system offline while crews work, so any restaurant that cannot lose a lunch or dinner service to a maintenance crew is a good candidate for after hours scheduling.' }
        },
        {
          '@type': 'Question',
          name: 'Does after hours service cost more than a daytime appointment?',
          acceptedAnswer: { '@type': 'Answer', text: 'Pricing depends on your system size, cooking volume, and access requirements, the same factors that determine any hood cleaning quote. We will give you a straight number before we book anything. Reach out at (858) 361-2570 for a free quote.' }
        },
        {
          '@type': 'Question',
          name: 'Do you clean bars and breweries after close?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Bars, breweries, and taprooms with commercial kitchens are some of the most common after hours jobs we run. We coordinate around your last call and closing procedures so our crew is only on site once the kitchen and bar are clear.' }
        },
        {
          '@type': 'Question',
          name: 'How long does an after hours cleaning take?',
          acceptedAnswer: { '@type': 'Answer', text: 'Most full system cleanings run two to five hours depending on hood size, duct run length, and how far the rooftop fan is from the kitchen. We schedule the crew with enough time to finish before your opening prep starts the next morning.' }
        },
        {
          '@type': 'Question',
          name: 'Will after hours cleaning disrupt my morning opening?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. That is the entire point of scheduling overnight. Our crew clears out, wipes down the work area, and leaves the kitchen ready for your opening staff. You walk in to a clean, compliant system with no lost prep time.' }
        },
        {
          '@type': 'Question',
          name: 'Do you provide the same documentation for after hours jobs as daytime jobs?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every after hours service includes the same paperwork as a standard appointment: before and after photos, a written service report, an NFPA 96 compliance certificate, and a dated sticker applied to the hood. Timing changes, documentation does not.' }
        },
        {
          '@type': 'Question',
          name: 'What areas do you cover for after hours hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'We cover all of San Diego County for after hours and overnight scheduling, including Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#why-after-hours', label: 'Why Restaurants Choose After Hours Service' },
  { href: '#how-it-works', label: 'How After Hours Scheduling Works' },
  { href: '#whats-included', label: 'What Is Included' },
  { href: '#after-hours-vs-daytime', label: 'After Hours vs Daytime Service' },
  { href: '#security-and-access', label: 'Security and Access During Overnight Service' },
  { href: '#who-benefits', label: 'Which Kitchens Benefit Most' },
  { href: '#cost-and-scheduling', label: 'Cost and Scheduling Considerations' },
  { href: '#scheduling', label: 'How to Book After Hours Service' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function AfterHoursHoodCleaningSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Scheduling</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>July 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              After Hours Hood Cleaning San Diego: Nighttime Service for Restaurants and Bars
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Some kitchens cannot afford to lose a service to maintenance. Core Hood Cleaning schedules full system cleaning after close throughout San Diego County so your equipment stays offline only while nobody needs it.
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
              Growing up working in restaurants, I watched owners turn away good vendors simply because those vendors could only work during the lunch rush or right before dinner service. A hood cleaning crew standing on ladders in your kitchen during a Friday night rush is not a workable arrangement for most operators, and it should never have to be.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Core Hood Cleaning runs after hours and overnight appointments throughout San Diego County for exactly this reason. The scope of the job never changes. The only thing that moves is the clock. This guide covers when after hours scheduling makes sense, what it includes, how it compares to a daytime visit, how we handle security and access while your building is empty, and how to book it.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              I know operators want a vendor who understands the rhythm of a restaurant, not one who treats every account the same way regardless of how the business actually runs. A quick service café with a dead afternoon and a 24 hour diner with no closed hours at all need two very different approaches to the same NFPA 96 requirement. After hours scheduling is how we adapt to that instead of asking every kitchen to work around us.
            </p>

            <h2 id="why-after-hours" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Restaurants Choose After Hours Service</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A full system hood cleaning takes your exhaust system offline while crews work the hood, ductwork, and rooftop fan. For a low volume kitchen with a slow midweek window, that is not a big deal. For a busy operator, taking the exhaust offline during service means shutting down cooking equipment, which means lost revenue and a frustrated kitchen team.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'No Lost Cooking Time', desc: 'Your line never has to shut down mid shift. Equipment stays available for every scheduled meal period.' },
                { num: '02', title: 'No Guest Disruption', desc: 'Ladders, drop cloths, and pressure washing equipment stay out of sight while you have guests in the dining room.' },
                { num: '03', title: 'No Staff Scheduling Conflicts', desc: 'Your kitchen crew is not working around a maintenance team, and your maintenance team is not waiting on your crew.' },
                { num: '04', title: 'Consistent Compliance Timing', desc: 'You keep your cleaning interval on schedule without ever having to reshuffle a service to fit it in.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="how-it-works" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How After Hours Scheduling Works</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              After hours does not mean a rushed job squeezed in whenever a technician is free. It means we plan the appointment around your actual closing time, not a generic evening slot.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { step: '1', action: 'You give us your real closing time', detail: 'Kitchen close, last call, and any prep staff arrival the next morning' },
                { step: '2', action: 'We confirm an arrival window', detail: 'Crew arrives once your kitchen is clear and equipment has cooled down' },
                { step: '3', action: 'We clean the full system', detail: 'Hood, filters, ductwork, and rooftop fan, same as a daytime service' },
                { step: '4', action: 'We leave before your morning prep', detail: 'Work area wiped down, documentation left for your team' },
              ].map((r) => (
                <div key={r.step} style={{ display: 'flex', gap: '16px', padding: '14px 20px', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 900, color: 'var(--rust)', background: 'rgba(137,29,27,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0 }}>{r.step}</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.88rem' }}>{r.action}: </span><span style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>{r.detail}</span></div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Most restaurants that switch to after hours scheduling stay on it permanently. Once your cleaning interval is set, we lock in the same overnight window every time so you are not renegotiating the schedule every six months.
            </p>

            <h2 id="whats-included" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Is Included</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              An after hours appointment is not a stripped down version of the service. Every job, day or night, covers the full NFPA 96 scope from the hood canopy to the rooftop exhaust fan.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy, baffles, and plenum chamber', detail: 'Full interior cleaning, not a surface wipe down' },
                { item: 'Grease filters removed, pressure washed, reinstalled', detail: 'Same filter maintenance standard as a daytime job' },
                { item: 'Complete ductwork from plenum to rooftop', detail: 'Cleaned from both ends, the section inspectors check most closely' },
                { item: 'Rooftop exhaust fan, blades, housing, and curb', detail: 'Every technician goes to the roof on every service call' },
                { item: 'Grease collection and proper disposal', detail: 'All wash water collected, nothing goes down a drain' },
                { item: 'Before and after photo documentation', detail: 'Left with your management team the same morning' },
                { item: 'NFPA 96 compliance certificate', detail: 'The document fire marshals and health inspectors require' },
                { item: 'NFPA 96 sticker applied to the hood', detail: 'Dated and visible for the next inspection' },
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
              We hand you proof, not promises. Every technician photographs the hood, ductwork, and fan before and after the job regardless of what time the work happens. That documentation is what protects you at your next fire marshal walkthrough or insurance review.
            </p>

            <h2 id="after-hours-vs-daytime" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>After Hours vs Daytime Service</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Operators often ask what actually changes when they move a cleaning from a daytime slot to an overnight one. The honest answer is not much on our end, but it removes real friction on yours.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>What stays the same</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0' }}>
                {[
                  'Full NFPA 96 scope, hood through rooftop fan',
                  'Same technicians, same equipment, same standards',
                  'Same documentation package handed over at completion',
                  'Same pricing structure based on system size and cooking volume',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px', marginTop: '20px' }}>What changes</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Crew arrival window shifts to after your close instead of a daytime slot',
                  'Access coordination, keys, alarm codes, and building access get set up in advance',
                  'Noise from pressure washing equipment happens when nobody is dining',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="security-and-access" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Security and Access During Overnight Service</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Handing a vendor access to your building while nobody is on site is a fair thing to think twice about. Here is the thing, most of our after hours clients feel more comfortable with the arrangement once they see how it actually runs, not less.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Our technicians are the same crew every visit once a recurring schedule is set, not a rotating pool of strangers. You decide how access works, a key held by our office, a lockbox code shared only with the assigned crew lead, an alarm code you change after each visit, or a manager who stays until the crew arrives and locks up behind them. Whatever method you choose, it gets documented so there is never confusion about who has access and when.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '12px' }}>How we protect your building overnight</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'The same assigned crew services your account every visit, not a different technician each time',
                  'Alarm and access codes are used only by the crew lead and are never shared beyond the job',
                  'Every door used for entry and exit is confirmed locked before the crew leaves',
                  'A time stamped service report shows exactly when the crew arrived and departed',
                  'Any equipment issue or building concern found on site is reported to you immediately, not buried in a routine note',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="who-benefits" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Which Kitchens Benefit Most</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Any restaurant can request after hours scheduling, but some operations get the most value out of it. If your kitchen matches one of the profiles below, an overnight or early morning window is probably a better fit than trying to squeeze a cleaning into an already tight daytime schedule.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { title: 'Bars and Breweries', desc: 'Kitchens attached to a taproom or bar where the space stays busy well into the evening. Cleaning after last call keeps the crew out of the way entirely.' },
                { title: 'High Volume Restaurants', desc: 'Kitchens running back to back meal periods with little to no downtime between lunch and dinner service.' },
                { title: 'Hotels and Resorts', desc: 'Properties with multiple dining outlets and room service that rarely have a true closed window during the day.' },
                { title: '24 Hour Operations', desc: 'Diners, drive throughs, and commissaries that never fully close still need a low activity window, which is almost always overnight.' },
              ].map(item => (
                <div key={item.title} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              I know operators want a vendor who fits their business, not the other way around. If your kitchen never has a true quiet window during the day, after hours is not a special request. It is the right way to run your account from day one.
            </p>

            <h2 id="cost-and-scheduling" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cost and Scheduling Considerations</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              After hours pricing follows the same logic as daytime pricing. Your quote is built around hood size, cooking volume, fuel type, and how far the ductwork runs to the rooftop fan, not the hour on the clock. We do not charge a blanket overnight premium just because the appointment happens after your kitchen closes.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Where scheduling does matter is your cleaning interval under NFPA 96. Fryers and solid fuel cooking generally require more frequent service than a low volume grill operation, and your interval stays the same whether the crew arrives at noon or midnight. What after hours scheduling changes is when that recurring appointment lands, not how often it happens.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Most operators find the easiest way to plan is to set the interval first, quarterly or semi annual depending on your kitchen, and then lock in the same overnight night of the week every cycle. That way your manager never has to remember to call, the appointment is already sitting on the calendar, and your books stay ready for the next fire marshal walkthrough without any last minute scrambling.
            </p>

            <h2 id="scheduling" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How to Book After Hours Service</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Booking an overnight appointment takes the same first step as booking a daytime one. Call or request a quote, and tell us your closing time is what you need to work around.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { label: 'Your kitchen close and last call time', detail: 'The window we build the appointment around' },
                { label: 'Building access details', detail: 'Keys, alarm codes, or a manager who can let the crew in' },
                { label: 'Your cleaning interval', detail: 'Monthly, quarterly, semi annual, or based on your cooking volume under NFPA 96' },
                { label: 'Whether this is a one time request or a standing schedule', detail: 'Most operators lock in the same overnight window on a recurring basis' },
              ].map(item => (
                <li key={item.label} style={{ display: 'flex', gap: '14px', padding: '14px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 900, flexShrink: 0 }}>→</span>
                  <div><span style={{ fontWeight: 700, color: 'var(--black)', fontSize: '0.9rem' }}>{item.label}: </span><span style={{ fontSize: '0.88rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item.detail}</span></div>
                </li>
              ))}
            </ul>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>We run after hours and overnight appointments throughout San Diego County:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['Downtown San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Need Hood Cleaning That Fits Your Hours?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>After hours and overnight scheduling throughout San Diego County. NFPA 96 certified, full documentation, no lost service time.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'What counts as after hours hood cleaning?', a: 'After hours hood cleaning is any full system service scheduled outside your normal operating hours, typically late at night or overnight once your kitchen has closed for the day. It covers the exact same NFPA 96 scope as a daytime cleaning, hood canopy through the rooftop fan, just timed so it never touches your service window.' },
              { q: 'Why do some restaurants need cleaning done at night?', a: 'High volume kitchens, bars, breweries, and 24 hour operations often cannot afford to shut down equipment during the day. A hood cleaning takes the exhaust system offline while crews work, so any restaurant that cannot lose a lunch or dinner service to a maintenance crew is a good candidate for after hours scheduling.' },
              { q: 'Does after hours service cost more than a daytime appointment?', a: 'Pricing depends on your system size, cooking volume, and access requirements, the same factors that determine any hood cleaning quote. We will give you a straight number before we book anything. Reach out for a free quote.' },
              { q: 'Do you clean bars and breweries after close?', a: 'Yes. Bars, breweries, and taprooms with commercial kitchens are some of the most common after hours jobs we run. We coordinate around your last call and closing procedures so our crew is only on site once the kitchen and bar are clear.' },
              { q: 'How long does an after hours cleaning take?', a: 'Most full system cleanings run two to five hours depending on hood size, duct run length, and how far the rooftop fan is from the kitchen. We schedule the crew with enough time to finish before your opening prep starts the next morning.' },
              { q: 'Will after hours cleaning disrupt my morning opening?', a: 'No. That is the entire point of scheduling overnight. Our crew clears out, wipes down the work area, and leaves the kitchen ready for your opening staff. You walk in to a clean, compliant system with no lost prep time.' },
              { q: 'Do you provide the same documentation for after hours jobs as daytime jobs?', a: 'Every after hours service includes the same paperwork as a standard appointment: before and after photos, a written service report, an NFPA 96 compliance certificate, and a dated sticker applied to the hood. Timing changes, documentation does not.' },
              { q: 'What areas do you cover for after hours hood cleaning?', a: 'We cover all of San Diego County for after hours and overnight scheduling, including Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/emergency-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Emergency Hood Cleaning San Diego: Same Day Service for Red Tags and Inspections</Link>
                <Link href="/blog/restaurant-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Restaurant Hood Cleaning San Diego: Costs, Schedules and What to Expect</Link>
                <Link href="/blog/brewery-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Brewery Hood Cleaning San Diego: NFPA 96 Compliance for Craft Beer Kitchens</Link>
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
