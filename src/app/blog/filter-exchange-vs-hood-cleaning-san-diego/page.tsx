import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Filter Exchange vs Hood Cleaning: What San Diego Kitchens Actually Need | Core Hood Cleaning',
  description: 'Filter exchange and full system hood cleaning are two different services and one does not replace the other. Here is what each covers, what NFPA 96 requires, and how they work together. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/filter-exchange-vs-hood-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Filter Exchange vs Hood Cleaning: What San Diego Kitchens Actually Need',
      description: 'Filter exchange and full system hood cleaning are two different services and one does not replace the other. Here is what each covers, what NFPA 96 requires, and how they work together.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-09-03',
      dateModified: '2026-09-03',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/filter-exchange-vs-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Does a filter exchange count as a hood cleaning for NFPA 96?',
          acceptedAnswer: { '@type': 'Answer', text: 'No. NFPA 96 requires the entire exhaust system to be cleaned to bare metal on a set schedule, which means the hood canopy, the plenum behind the filters, the full duct run, and the rooftop exhaust fan. A filter exchange only addresses the filters. It is valuable maintenance between cleanings, but it does not satisfy the code and it will not produce the compliance certificate a fire marshal or insurance carrier asks for.' }
        },
        {
          '@type': 'Question',
          name: 'What is a filter exchange program?',
          acceptedAnswer: { '@type': 'Answer', text: 'A filter exchange program is a recurring service where we arrive on a set rotation, pull your dirty baffle filters, and swap in clean ones from our stock. Your dirty filters leave with us and get cleaned offsite in a commercial degreasing setup. Nobody on your staff scrubs filters in a three compartment sink, and your kitchen never goes without a clean set.' }
        },
        {
          '@type': 'Question',
          name: 'How often should filters be exchanged?',
          acceptedAnswer: { '@type': 'Answer', text: 'It depends on fuel type and cooking volume. High volume fryer and char broiler operations often run weekly. Moderate volume kitchens usually land on bi weekly. Lower volume operations and lighter menus can run monthly. We look at your equipment, your daily covers, and your grease load to set the interval rather than guessing.' }
        },
        {
          '@type': 'Question',
          name: 'Can I just have my staff clean the filters instead?',
          acceptedAnswer: { '@type': 'Answer', text: 'You can, and plenty of kitchens do, but it rarely works out well over time. Filters soaked in a pot sink do not get degreased down to bare metal, they go back in the hood still loaded, and the grease that should have been trapped in the filter goes up the duct instead. It also burns labor hours your team could spend on prep and it puts wash water and grease into your drain line.' }
        },
        {
          '@type': 'Question',
          name: 'Does a filter exchange program reduce how often I need a full hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'It does not change the NFPA 96 interval your kitchen falls under, but it does change the condition of your system when we arrive. Clean filters catch more grease before it reaches the duct, so the duct run and rooftop fan load up more slowly. Kitchens on a consistent exchange program tend to have cleaner duct runs, fewer grease drip problems, and better airflow between full cleanings.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if my filters are missing or the wrong type?',
          acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 requires listed grease filters or baffle filters in place any time cooking equipment is in operation. Mesh filters, missing filters, or gaps in the filter bank are common inspection findings. Grease that bypasses a filter bank goes straight into the plenum and duct, which accelerates buildup and raises your fire risk. We check filter fit and coverage on every visit and flag anything that is missing or wrong for the hood.' }
        },
        {
          '@type': 'Question',
          name: 'Do I still get documentation with a filter exchange?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. We log every exchange visit with a service record so you can show a consistent maintenance history. That said, the NFPA 96 compliance certificate and the dated sticker come from a full system cleaning, not from a filter exchange. Health inspectors and fire marshals want to see both the certificate and a maintenance record behind it.' }
        },
        {
          '@type': 'Question',
          name: 'Which service should I start with?',
          acceptedAnswer: { '@type': 'Answer', text: 'Start with a full system hood cleaning so the system is at a known baseline and you have current documentation on file. Once the whole exhaust path is clean, a filter exchange program keeps it that way between scheduled cleanings. Starting with filters alone on a system that has never been cleaned properly just puts clean filters in front of a loaded duct run.' }
        },
        {
          '@type': 'Question',
          name: 'Do you offer both services on one account in San Diego?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most of our recurring customers run a full system cleaning on their NFPA 96 interval and a filter exchange rotation in between, all on one account and one schedule. We service kitchens throughout San Diego County including Downtown San Diego, Pacific Beach, La Jolla, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#the-short-answer', label: 'The Short Answer' },
  { href: '#what-a-filter-exchange-is', label: 'What a Filter Exchange Actually Is' },
  { href: '#what-a-hood-cleaning-is', label: 'What a Full Hood Cleaning Covers' },
  { href: '#side-by-side', label: 'Side by Side Comparison' },
  { href: '#what-nfpa-96-requires', label: 'What NFPA 96 Actually Requires' },
  { href: '#why-filters-matter', label: 'Why Filters Matter More Than Operators Think' },
  { href: '#staff-cleaning-filters', label: 'Why Staff Cleaning Filters Backfires' },
  { href: '#how-they-work-together', label: 'How the Two Work Together' },
  { href: '#choosing-your-interval', label: 'Choosing Your Exchange Interval' },
  { href: '#service-areas', label: 'San Diego Service Areas' },
  { href: '#faq', label: 'FAQ' },
]

export default function FilterExchangeVsHoodCleaningSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Education</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>September 2026 · 10 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Filter Exchange vs Hood Cleaning: What San Diego Kitchens Actually Need
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              These are two different services and one does not replace the other. Here is what each one covers, what NFPA 96 actually requires, and why the kitchens with the cleanest duct runs in San Diego County run both.
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
              This is one of the most common mixups I run into. An operator tells me they are covered because somebody comes by and swaps their filters every couple of weeks. Then the fire marshal walks through, asks for a compliance certificate, and there is nothing to hand over. The filters were getting handled. The rest of the system was not.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Growing up working in restaurants, I watched this exact confusion cost people money and time they did not have. So let me lay it out plainly. A filter exchange is maintenance. A full system hood cleaning is compliance. They solve different problems, they run on different schedules, and the kitchens that stay out of trouble in San Diego County run both.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              This guide covers what each service physically does, what NFPA 96 requires and does not require, why filters matter more than most operators realize, and how to decide what your kitchen actually needs.
            </p>

            <h2 id="the-short-answer" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Short Answer</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A filter exchange swaps your dirty baffle filters for clean ones on a recurring rotation. That is the whole scope. It happens often, it takes minutes, and it keeps the first line of grease defense working the way it was designed to.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A full system hood cleaning strips grease to bare metal across the entire exhaust path. Hood canopy, plenum, filter housing, the full duct run, and the rooftop exhaust fan. It happens on the NFPA 96 interval your cooking volume falls under, it takes hours, and it produces the compliance certificate and dated sticker that inspectors and insurance carriers ask to see.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>The one thing to remember</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--charcoal)', lineHeight: '1.7', margin: 0 }}>
                A filter exchange will never satisfy NFPA 96 on its own. If someone is selling you filter service as your compliance solution, you are exposed. Filters are maintenance between cleanings, not a substitute for one.
              </p>
            </div>

            <h2 id="what-a-filter-exchange-is" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Filter Exchange Actually Is</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Baffle filters sit in the hood directly above your cooking line. Their job is to force grease laden air through a series of tight turns so the grease condenses out and drains down into the grease cup instead of traveling up the duct. When they are clean they do that job well. When they are loaded they stop working and everything they should have caught goes into your system instead.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              On a filter exchange visit we arrive on your set rotation, pull the loaded filters out of the hood, and slot in clean ones from our stock. The dirty set leaves with us and gets degreased offsite in a commercial setup built for it. Your kitchen never goes a shift without a clean full filter bank, and nobody on your crew loses an hour scrubbing steel in the pot sink.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              We also check fit and coverage while we are in there. Gaps between filters, mesh filters that should not be in a commercial hood at all, filters that are the wrong size for the housing, or bent frames that no longer seat correctly. All of that lets grease bypass the bank entirely, and all of it is a common inspection finding.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '48px' }}>
              {[
                { item: 'Loaded filters removed', detail: 'Pulled from the hood and taken offsite with us' },
                { item: 'Clean filters installed', detail: 'A full matched set from our rotating stock, seated properly' },
                { item: 'Offsite commercial degreasing', detail: 'Cleaned in a setup built for it, not a pot sink' },
                { item: 'Fit and coverage check', detail: 'Gaps, wrong sizes, bent frames, and mesh filters flagged' },
                { item: 'Grease cup checked', detail: 'Emptied and reseated so drainage keeps working' },
                { item: 'Service record logged', detail: 'Your documented maintenance history between full cleanings' },
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

            <h2 id="what-a-hood-cleaning-is" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Full Hood Cleaning Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A full system cleaning is a different animal. We are not touching one component, we are working the entire path grease travels from the cook line to the roof. That means protective sheeting over your equipment, chemical application across the whole system, pressure washing to bare metal, and containment so wash water and grease never end up in your kitchen or on the roof.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The part most operators never see is the plenum, the chamber directly behind the filter bank. That is where grease that made it past the filters collects first, and it is the section a shortcut operator is most likely to skip because nobody looks there. Above that is the duct run, sometimes forty feet of it going through a ceiling and up a wall, and at the top is the rooftop exhaust fan with grease baked onto the blades and pooled in the housing.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Hood canopy interior and exterior', detail: 'Cleaned to bare metal, polished on the visible face' },
                { item: 'Filters removed and degreased', detail: 'Handled as part of the full service scope' },
                { item: 'Plenum behind the filter bank', detail: 'The chamber shortcut operators skip most often' },
                { item: 'Full duct run', detail: 'Horizontal and vertical runs cleaned end to end' },
                { item: 'Rooftop exhaust fan', detail: 'Blades, housing, and hinge kit cleaned and reseated' },
                { item: 'Access panels checked', detail: 'Missing or sealed panels flagged for correction' },
                { item: 'Before and after photos', detail: 'Your proof of what the system looked like both ways' },
                { item: 'NFPA 96 compliance certificate', detail: 'The document the fire marshal and your carrier ask for' },
                { item: 'Dated NFPA 96 sticker', detail: 'Applied to the hood and visible at inspection' },
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
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              That documentation piece is the part a filter exchange can never deliver. We hand you proof, not promises, and the certificate is the proof. Without it you have nothing to show a fire marshal, nothing for your insurance carrier at renewal, and nothing for a landlord or franchise auditor who asks.
            </p>

            <h2 id="side-by-side" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Side by Side Comparison</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Scope', desc: 'Filter exchange touches the filters only. Full cleaning covers hood, plenum, duct run, and rooftop fan.' },
                { num: '02', title: 'Frequency', desc: 'Filter exchange runs weekly, bi weekly, or monthly. Full cleaning runs on your NFPA 96 interval.' },
                { num: '03', title: 'Time On Site', desc: 'Filter exchange takes minutes and does not interrupt service. Full cleaning takes hours and runs after close.' },
                { num: '04', title: 'Documentation', desc: 'Filter exchange produces a service record. Full cleaning produces the NFPA 96 certificate and sticker.' },
                { num: '05', title: 'What It Prevents', desc: 'Filter exchange slows grease reaching the duct. Full cleaning removes what already got there.' },
                { num: '06', title: 'Compliance Value', desc: 'Filter exchange supports a maintenance history. Full cleaning is what actually satisfies the code.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="what-nfpa-96-requires" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What NFPA 96 Actually Requires</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the national standard for ventilation control and fire protection of commercial cooking operations, and it is what San Diego County fire authorities enforce. The standard requires that the entire exhaust system be inspected on a schedule and cleaned to bare metal wherever grease has accumulated. Not the filters. The system.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The interval is driven by cooking volume and fuel type. Solid fuel operations like wood fired ovens sit on the tightest schedule. High volume operations running fryers and char broilers hard every day come next. Moderate volume kitchens fall in the middle, and low volume operations get the longest interval. Our <Link href="/blog/hood-cleaning-frequency-cooking-type" style={{ color: 'var(--rust)', textDecoration: 'none' }}>frequency by cooking type breakdown</Link> walks through where each kind of kitchen lands.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 also has something to say about filters specifically. Listed grease filters or baffle filters must be in place any time the cooking equipment underneath is in operation. That is a continuous requirement, not a periodic one. A hood running with a missing filter, a gap in the bank, or a mesh filter that was never rated for commercial use is out of compliance the entire time it operates that way.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              So the honest framing is this. The full cleaning satisfies the periodic requirement. A filter exchange program helps you stay on the right side of the continuous one, because you always have a clean, correct, complete filter bank in the hood instead of whatever survived the last busy weekend.
            </p>

            <h2 id="why-filters-matter" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Filters Matter More Than Operators Think</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Most operators treat filters as a cosmetic thing. They are not. The filter bank is the only component in your entire exhaust system whose actual job is to stop grease from traveling. Everything downstream, the plenum, the duct, the fan, is just a path. When the filters stop catching, that path loads up fast.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Loaded filters cause three problems at once. First, grease bypasses into the duct run, which is exactly where a fire is hardest to reach and most likely to spread through a building. Second, airflow drops, because a filter caked with grease is a restriction. Your kitchen gets hotter, smoke hangs at the line, and your cooks feel it before anyone else does. Third, grease starts dripping back down out of a saturated filter onto the cooking surface below, which is both a food safety problem and a direct ignition risk over an open flame.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              I have pulled filters out of hoods that were so loaded they were structurally heavy, dripping before we got them to the sink. In every one of those kitchens, the duct run above was in far worse shape than it should have been for the time since its last cleaning. That is not a coincidence. Filters that stop working accelerate everything above them.
            </p>

            <h2 id="staff-cleaning-filters" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Staff Cleaning Filters Backfires</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Almost every kitchen starts out having a closer soak the filters in the three compartment sink. I understand the logic. It looks free. In practice it costs more than the exchange program does, and it does not produce a clean filter.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A pot sink does not hit the temperature or the chemical concentration needed to break baked grease off baffle steel. The filter comes out looking better, goes back in the hood still carrying a load, and the operator now believes the filter bank is clean when it is not. Meanwhile the grease that did come off went down your drain line, which is its own maintenance problem, and a closer spent forty five minutes on it at the end of a shift when labor is already tight.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              There is also the gap problem. Filters go into the sink, the kitchen opens the next morning, and somebody forgot to put them back or put back only part of the set. Now you are cooking under a hood with an incomplete filter bank, which is an inspection finding and a direct path for grease into your plenum. An exchange program removes that failure mode entirely, because the clean set goes in the same visit the dirty set comes out.
            </p>

            <h2 id="how-they-work-together" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How the Two Work Together</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Think of it as a baseline and a hold. The full system cleaning resets your entire exhaust path to bare metal and gives you documentation with a date on it. That is your baseline. The filter exchange program is what holds that condition between cleanings by keeping the one component designed to trap grease actually trapping grease.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Kitchens that run both look noticeably different when we come back for the next scheduled cleaning. The duct runs are lighter. There is less grease pooling in the fan housing. We are not fighting hardened buildup in the plenum. The system holds airflow better through the whole interval, which the kitchen staff notice even if the owner never does.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              To be clear about what this does not do, an exchange program does not extend your NFPA 96 interval. The code interval is driven by your cooking volume and fuel type, not by how well you maintain filters. What it changes is the condition of the system and your risk profile in between, plus you build a documented maintenance history that helps when an inspector or an insurance carrier wants to see that this kitchen is managed and not neglected.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              The order matters too. Start with the full cleaning. Putting clean filters in front of a duct run that has never been properly cleaned just means the grease already up there stays up there while you feel good about the filters. Get the system to a known baseline first, then hold it.
            </p>

            <h2 id="choosing-your-interval" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Choosing Your Exchange Interval</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              We set exchange frequency off two things, fuel type and cooking volume, the same two inputs that drive your NFPA 96 cleaning interval. Here is roughly how San Diego kitchens sort out.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Weekly rotation', detail: 'High volume fryers, char broilers, solid fuel, wok lines, and heavy late night operations' },
                { item: 'Bi weekly rotation', detail: 'Most full service restaurants, brewery kitchens, and hotel outlets running a normal cover count' },
                { item: 'Monthly rotation', detail: 'Lower volume kitchens, lighter menus, cafes, and seasonal or limited service operations' },
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
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              We do not guess at this. We look at your equipment lineup, your daily covers, and the actual condition of the filters we pull on the first few visits, then adjust. If we are pulling filters that are barely loaded on a weekly rotation, we will tell you to move to bi weekly rather than keep billing you for a visit you do not need. No hidden fees, no upselling you into a schedule your kitchen does not justify.
            </p>

            <h2 id="service-areas" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Service Areas</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>We run both full system cleanings and filter exchange rotations throughout San Diego County:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '40px' }}>
              {['Downtown San Diego', 'La Jolla', 'Pacific Beach', 'Mission Valley', 'Chula Vista', 'Oceanside', 'Carlsbad', 'Escondido', 'El Cajon', 'Vista', 'San Marcos', 'National City', 'La Mesa', 'Coronado', 'Encinitas', 'Del Mar', 'Miramar', 'Rancho Bernardo', 'Poway', 'Santee'].map(area => (
                <div key={area} style={{ fontSize: '0.82rem', color: 'var(--charcoal)', padding: '8px 12px', background: 'var(--off-white)', borderRadius: '4px', display: 'flex', gap: '6px' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700 }}>→</span>{area}
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Not Sure Which One Your Kitchen Needs</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>Tell us your equipment and your volume and we will tell you straight what the code requires and what is optional. NFPA 96 certified, no pressure, no obligation.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'Does a filter exchange count as a hood cleaning for NFPA 96?', a: 'No. NFPA 96 requires the entire exhaust system to be cleaned to bare metal on a set schedule, which means the hood canopy, the plenum behind the filters, the full duct run, and the rooftop exhaust fan. A filter exchange only addresses the filters. It is valuable maintenance between cleanings, but it does not satisfy the code and it will not produce the compliance certificate a fire marshal or insurance carrier asks for.' },
              { q: 'What is a filter exchange program?', a: 'A filter exchange program is a recurring service where we arrive on a set rotation, pull your dirty baffle filters, and swap in clean ones from our stock. Your dirty filters leave with us and get cleaned offsite in a commercial degreasing setup. Nobody on your staff scrubs filters in a three compartment sink, and your kitchen never goes without a clean set.' },
              { q: 'How often should filters be exchanged?', a: 'It depends on fuel type and cooking volume. High volume fryer and char broiler operations often run weekly. Moderate volume kitchens usually land on bi weekly. Lower volume operations and lighter menus can run monthly. We look at your equipment, your daily covers, and your grease load to set the interval rather than guessing.' },
              { q: 'Can I just have my staff clean the filters instead?', a: 'You can, and plenty of kitchens do, but it rarely works out well over time. Filters soaked in a pot sink do not get degreased down to bare metal, they go back in the hood still loaded, and the grease that should have been trapped in the filter goes up the duct instead. It also burns labor hours your team could spend on prep and it puts wash water and grease into your drain line.' },
              { q: 'Does a filter exchange program reduce how often I need a full hood cleaning?', a: 'It does not change the NFPA 96 interval your kitchen falls under, but it does change the condition of your system when we arrive. Clean filters catch more grease before it reaches the duct, so the duct run and rooftop fan load up more slowly. Kitchens on a consistent exchange program tend to have cleaner duct runs, fewer grease drip problems, and better airflow between full cleanings.' },
              { q: 'What happens if my filters are missing or the wrong type?', a: 'NFPA 96 requires listed grease filters or baffle filters in place any time cooking equipment is in operation. Mesh filters, missing filters, or gaps in the filter bank are common inspection findings. Grease that bypasses a filter bank goes straight into the plenum and duct, which accelerates buildup and raises your fire risk. We check filter fit and coverage on every visit and flag anything that is missing or wrong for the hood.' },
              { q: 'Do I still get documentation with a filter exchange?', a: 'Yes. We log every exchange visit with a service record so you can show a consistent maintenance history. That said, the NFPA 96 compliance certificate and the dated sticker come from a full system cleaning, not from a filter exchange. Health inspectors and fire marshals want to see both the certificate and a maintenance record behind it.' },
              { q: 'Which service should I start with?', a: 'Start with a full system hood cleaning so the system is at a known baseline and you have current documentation on file. Once the whole exhaust path is clean, a filter exchange program keeps it that way between scheduled cleanings. Starting with filters alone on a system that has never been cleaned properly just puts clean filters in front of a loaded duct run.' },
              { q: 'Do you offer both services on one account in San Diego?', a: 'Yes. Most of our recurring customers run a full system cleaning on their NFPA 96 interval and a filter exchange rotation in between, all on one account and one schedule. We service kitchens throughout San Diego County including Downtown San Diego, Pacific Beach, La Jolla, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/hood-cleaning-frequency-cooking-type" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Frequency by Cooking Type: A Breakdown for San Diego Kitchens</Link>
                <Link href="/blog/what-happens-during-hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Actually Happens During a Commercial Hood Cleaning?</Link>
                <Link href="/blog/grease-trap-vs-hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Grease Trap Cleaning vs. Hood Cleaning: What&apos;s the Difference?</Link>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Restaurant Owner&apos;s Plain-English Guide</Link>
                <Link href="/services/filter-exchange" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Our Filter Exchange Program</Link>
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
