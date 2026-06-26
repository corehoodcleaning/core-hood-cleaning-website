import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Restaurant Hood Cleaning San Diego: Costs, Schedules & What to Expect | Core Hood Cleaning',
  description: 'Everything San Diego restaurant owners need to know about hood cleaning — how often, what it costs, what the service covers, and how to stay compliant with fire marshals and health inspectors.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/restaurant-hood-cleaning-san-diego' },
}

const jsonLdBlogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Restaurant Hood Cleaning San Diego: Costs, Schedules & What to Expect',
  image: 'https://www.corehoodcleaning.com/images/serve-restaurants.jpg',
  author: {
    '@type': 'Person',
    name: 'Chase Mangini',
    url: 'https://www.corehoodcleaning.com/about'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Core Hood Cleaning',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.corehoodcleaning.com/images/core-logo-transparent.png'
    }
  },
  datePublished: '2026-06-25',
  dateModified: '2026-06-25',
  description: 'Everything San Diego restaurant owners need to know about hood cleaning — how often, what it costs, what the service covers, and how to stay compliant with fire marshals and health inspectors.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.corehoodcleaning.com/blog/restaurant-hood-cleaning-san-diego'
  }
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often does a restaurant hood need to be cleaned in San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NFPA 96 sets frequency by cooking volume and equipment type. Solid-fuel operations (wood-fired, charcoal) and kitchens running 12+ hours daily require monthly cleaning. Most full-service San Diego restaurants with charbroilers, fryers, or wok stations require quarterly cleaning. Moderate-volume kitchens qualify for semi-annual service. A certified technician confirms your category at the first visit.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does restaurant hood cleaning cost in San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Restaurant hood cleaning in San Diego varies based on kitchen size, number of hoods, duct run length, and grease buildup. Restaurants on regular maintenance schedules pay significantly less per service than those who let grease accumulate. Call Core Hood Cleaning at (858) 361-2570 for a free on-site quote — we price based on what we see, with no surprises.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does restaurant hood cleaning include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compliant restaurant hood cleaning covers the complete exhaust path: hood canopy, baffles, plenum chamber, all ductwork from kitchen to rooftop, the exhaust fan blades and housing, and grease containment and disposal. Every Core Hood Cleaning service includes before and after photos and an NFPA 96 compliance certificate.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens if my restaurant fails a fire inspection for a dirty hood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A failed hood inspection can result in an immediate closure order, fines, and voided commercial insurance coverage. You will need emergency cleaning and re-inspection before reopening. Core Hood Cleaning offers same-day emergency service throughout San Diego County — call (858) 361-2570.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you provide a compliance certificate after hood cleaning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Every restaurant hood cleaning from Core Hood Cleaning includes an NFPA 96 compliance certificate, written service report, and before and after photos. These are what San Diego fire marshals, health inspectors, and your insurance carrier require as proof of compliant cleaning.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does a passing health inspection mean I am compliant with fire code for my hood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. San Diego County Environmental Health inspections and San Diego Fire Marshal inspections operate on separate tracks with different requirements. A current health grade does not guarantee fire compliance. Your hood cleaning certification tag and service records are reviewed independently by fire inspectors — a clean A grade and an expired hood cleaning tag still means a fire code violation.'
      }
    },
    {
      '@type': 'Question',
      name: 'When should I get my hood cleaned before the scheduled date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NFPA 96 requires cleaning before the next scheduled date if visible grease appears on ductwork or filter surfaces, airflow seems reduced during service, you had a grease fire of any size, or you added high-grease equipment like a charbroiler or fryer. Schedule changes also trigger reclassification — if you started cooking more, your frequency category may change.'
      }
    }
  ]
}

export default function RestaurantHoodCleaningSanDiego() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <Nav />

      <article style={{ paddingTop: '100px' }}>
        {/* HEADER */}
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Compliance</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>Restaurant Hood Cleaning San Diego: Costs, Schedules & What to Expect</h1>
            <p style={{ color: 'rgba(238,239,226,0.6)', fontSize: '1rem', lineHeight: '1.7' }}>How often San Diego restaurants need hood cleaning, what a full service actually covers, what it costs, and how the San Diego Fire Marshal and County Health Department enforce compliance separately.</p>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div style={{ background: 'var(--black)', maxHeight: '420px', overflow: 'hidden' }}>
          <div className="container" style={{ maxWidth: '760px', padding: '0' }}>
            <Image
              src="/images/serve-restaurants.jpg"
              alt="Core Hood Cleaning technician servicing restaurant exhaust hood in San Diego commercial kitchen"
              width={760}
              height={420}
              priority
              style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ background: 'var(--white)', padding: '64px 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>

            {/* TABLE OF CONTENTS */}
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '24px 28px', marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-text)', marginBottom: '12px' }}>In This Guide</p>
              {[
                ['#frequency', 'How Often San Diego Restaurants Need Hood Cleaning'],
                ['#your-category', 'How to Determine Your Category'],
                ['#early-cleaning', 'When to Clean Before Your Scheduled Date'],
                ['#what-it-includes', 'What Restaurant Hood Cleaning Actually Includes'],
                ['#san-diego-compliance', 'San Diego Fire Marshal vs. Health Inspector: Two Separate Tracks'],
                ['#cost', 'What Restaurant Hood Cleaning Costs in San Diego'],
                ['#documentation', 'Documentation Requirements'],
                ['#insurance', 'Hood Cleaning and Your Insurance'],
                ['#faq', 'Frequently Asked Questions'],
              ].map(([href, label]) => (
                <a key={href as string} href={href as string} style={{ display: 'block', fontSize: '0.88rem', color: 'var(--rust)', textDecoration: 'none', padding: '5px 0', borderBottom: '1px solid var(--gray-light)' }}>→ {label as string}</a>
              ))}
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              If you own or operate a restaurant in San Diego, hood cleaning is a legal requirement enforced by two separate agencies — the San Diego Fire Marshal and San Diego County Environmental Health — and it&apos;s directly tied to your commercial insurance coverage. A clean health inspection grade does not mean you&apos;re in compliance with fire code. They check different things, on different schedules, with different consequences.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              This guide covers everything San Diego restaurant owners need to know: how often cleaning is required for your specific kitchen, how to determine which frequency category you fall into, what a full-system cleaning actually covers, what it costs, and what both sets of inspectors are looking for.
            </p>

            {/* SECTION 1 */}
            <h2 id="frequency" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How Often San Diego Restaurants Need Hood Cleaning</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Cleaning frequency is set by <strong>NFPA 96</strong> — the national fire safety standard adopted by California through Title 19 of the California Code of Regulations (CCR) and enforced locally by the San Diego Fire Marshal. Frequency is based on your cooking equipment and operating hours, not how dirty your hood looks.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {[
                { freq: 'Monthly', desc: 'Solid fuel, 24/7 ops, 12+ hrs/day', color: 'var(--rust)' },
                { freq: 'Quarterly', desc: 'Most full-service restaurants', color: 'var(--true-blue)' },
                { freq: 'Semi-Annual', desc: 'Moderate-volume kitchens', color: '#555' },
                { freq: 'Annual', desc: 'Seasonal & low-volume operations', color: '#888' },
              ].map(r => (
                <div key={r.freq} style={{ background: 'var(--off-white)', border: `2px solid ${r.color}`, borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: r.color, marginBottom: '8px' }}>{r.freq}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-text)', lineHeight: '1.4' }}>{r.desc}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              When a kitchen has mixed equipment — say, a charbroiler alongside a standard gas range — the entire exhaust system is classified by the highest-frequency equipment. One charbroiler moves the whole kitchen to quarterly, not semi-annual. NFPA 96 Section 11.6.1 also adds a condition-based override: if visible grease appears anywhere in the system before the next scheduled service, cleaning is required before the next cooking period.
            </p>

            {/* SECTION 2 */}
            <h2 id="your-category" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How to Determine Your Category</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The classification is driven by your cooking equipment and hours — not your overall restaurant size or seat count. Here&apos;s how each tier breaks down:
            </p>

            {[
              {
                tier: 'Monthly',
                color: 'var(--rust)',
                bg: 'rgba(137,29,27,0.05)',
                items: ['Wood-fired ovens', 'Charcoal or mesquite grills', 'Solid fuel cooking of any kind', 'Kitchens operating 12+ hours per day', '24/7 operations']
              },
              {
                tier: 'Quarterly',
                color: 'var(--true-blue)',
                bg: 'rgba(26,58,95,0.05)',
                items: ['Charbroilers (any volume)', 'Wok stations', 'High-volume fryers', 'Fast-casual or fast-food operations', 'Steakhouses and burger concepts', 'Restaurants open 6–7 days per week with two meal services']
              },
              {
                tier: 'Semi-Annual',
                color: '#555',
                bg: 'rgba(0,0,0,0.04)',
                items: ['Gas ranges and convection ovens as primary equipment', 'Fine dining with limited frying', 'School cafeterias', 'Corporate cafeterias', 'Restaurants open 5 or fewer days per week']
              },
              {
                tier: 'Annual',
                color: '#888',
                bg: 'rgba(0,0,0,0.02)',
                items: ['Seasonal kitchens', 'Churches and community halls', 'Day camps', 'Very low-volume occasional-use facilities']
              },
            ].map(t => (
              <div key={t.tier} style={{ border: `1px solid var(--gray-light)`, borderLeft: `4px solid ${t.color}`, borderRadius: '8px', padding: '20px 24px', marginBottom: '16px', background: t.bg }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', color: t.color, marginBottom: '10px' }}>{t.tier}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {t.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: t.color, fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>·</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--charcoal)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginTop: '8px', marginBottom: '48px' }}>
              If you&apos;re not sure where your kitchen falls, the safest approach is to call for a free assessment. We&apos;ve seen plenty of restaurant owners surprised to learn they&apos;re in the monthly or quarterly category when they assumed they could go semi-annual.
            </p>

            {/* SECTION 3 */}
            <h2 id="early-cleaning" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>When to Clean Before Your Scheduled Date</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is clear on this: the schedule sets the <em>maximum</em> interval, not a target date. Several conditions require cleaning immediately regardless of where you are in the cycle:
            </p>
            {[
              'Visible grease on ductwork, filter surfaces, or inside the plenum — NFPA 96 requires cleaning before the next cooking period when this is found',
              'Reduced airflow during service — smoke not being captured, or kitchen odors filling the dining room during normal operation',
              'Any grease fire in the hood or duct, regardless of how small — the system must be inspected and cleaned before returning to service',
              'Adding high-grease equipment (charbroiler, fryer, wok station) that changes your classification tier',
              'Significant increase in operating hours or menu items that produce more grease',
              'A health inspection citation for hood ventilation — cleaning before re-inspection is the expected corrective action',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid var(--gray-light)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--rust)', flexShrink: 0, marginTop: '7px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{item}</span>
              </div>
            ))}

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginTop: '24px', marginBottom: '48px' }}>
              If you notice any of these, don&apos;t wait until the calendar date. Call Core Hood Cleaning at <a href="tel:8583612570" style={{ color: 'var(--rust)', fontWeight: 600 }}>(858) 361-2570</a> — we offer same-day service throughout San Diego County.
            </p>

            {/* SECTION 4 */}
            <h2 id="what-it-includes" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Restaurant Hood Cleaning Actually Includes</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Most restaurant owners assume hood cleaning means wiping down the filters and the canopy surface. That&apos;s not what NFPA 96 requires, and it&apos;s not what passes a fire inspection. The code mandates cleaning the <strong>entire exhaust path</strong> — from the hood canopy down through all ductwork to the rooftop exhaust fan. Grease accumulates in the ductwork and at the fan, not just in the visible hood — and that&apos;s where fires start.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Every Core Hood Cleaning service covers:</p>

            {[
              'Hood canopy — degreased inside and out',
              'Baffles and grease filters — removed, cleaned or exchanged, reinstalled',
              'Plenum chamber — full degreasing of the collection area',
              'All ductwork — the full run from plenum to rooftop, including access panels',
              'Rooftop exhaust fan — blades, housing, and curb assembly',
              'Grease containment — collected, contained, and properly disposed',
              'Before and after photos — time-stamped, provided to you after every service',
              'NFPA 96 compliance certificate — the document fire marshals, health inspectors, and insurers require',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--gray-light)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--rust)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>{item}</span>
              </div>
            ))}

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginTop: '24px', marginBottom: '48px' }}>
              The compliance certificate and photos matter as much as the cleaning itself when it comes to inspections. Without documentation, you can&apos;t prove the work was done — even if your hood is spotless.
            </p>

            {/* IMAGE BREAK */}
            <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '48px' }}>
              <Image
                src="/images/after-clean-hood.jpg"
                alt="Clean commercial kitchen exhaust hood after professional restaurant hood cleaning service in San Diego"
                width={760}
                height={400}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <p style={{ fontSize: '0.78rem', color: 'var(--gray-text)', textAlign: 'center', padding: '10px 0', fontStyle: 'italic' }}>After a full-system restaurant hood cleaning — hood to rooftop fan.</p>
            </div>

            {/* SECTION 5 */}
            <h2 id="san-diego-compliance" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>San Diego Fire Marshal vs. Health Inspector: Two Separate Tracks</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              This is one of the most common gaps we see in San Diego restaurants: owners assume that a good health inspection score means they&apos;re in compliance for their hood. They are not the same thing.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Two separate compliance tracks operate in San Diego County:
            </p>

            {[
              {
                label: 'San Diego County Environmental Health (DEH)',
                desc: 'Checks hood ventilation as part of routine restaurant inspections. They look for visible grease accumulation, inadequate airflow, and basic ventilation issues. Violations result in point deductions on your inspection score. A passing grade here does not confirm fire code compliance.',
                color: 'var(--true-blue)'
              },
              {
                label: 'San Diego Fire Marshal',
                desc: 'Checks your cleaning certification tag, service documentation, cleaning frequency relative to your cooking operation, and system condition. These inspections operate independently and on a completely separate schedule from health inspections. A current A grade from DEH will not satisfy a fire inspection.',
                color: 'var(--rust)'
              }
            ].map(t => (
              <div key={t.label} style={{ border: '1px solid var(--gray-light)', borderLeft: `4px solid ${t.color}`, borderRadius: '8px', padding: '20px 24px', marginBottom: '16px', background: 'var(--off-white)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase', color: t.color, marginBottom: '8px' }}>{t.label}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>{t.desc}</p>
              </div>
            ))}

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginTop: '8px', marginBottom: '20px' }}>
              California requires that hood cleaning contractors hold proper certifications to perform compliant service. When hiring a hood cleaning company in San Diego, ask for proof of technician certification and confirm they provide a signed, dated compliance certificate after every service — not just a receipt.
            </p>

            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '28px', marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>Red-Tagged or Upcoming Re-Inspection?</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>We offer same-day emergency service throughout San Diego County. We&apos;ve helped dozens of restaurants resolve fire marshal violations and pass re-inspections within 24 hours. Call <a href="tel:8583612570" style={{ color: 'var(--rust)', fontWeight: 600 }}>(858) 361-2570</a> and we&apos;ll get there.</p>
            </div>

            {/* SECTION 6 */}
            <h2 id="cost" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Restaurant Hood Cleaning Costs in San Diego</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Pricing for restaurant hood cleaning in San Diego varies based on several factors: the number of hoods and filters, duct run length from kitchen to rooftop, cooking volume and current grease buildup levels, and cleaning frequency.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The single biggest variable is how much grease has accumulated since the last service. Restaurants on regular maintenance schedules — quarterly or monthly — have significantly faster, easier cleans because grease hasn&apos;t had time to harden in the ductwork. A restaurant that calls us after 12 months instead of 3 will pay more, take longer, and require more equipment to get compliant. Staying on schedule is the most cost-effective approach over time.
            </p>

            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '28px', marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>Free On-Site Quotes — No Surprises</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>We quote based on what we actually see — your duct run, cooking volume, and current grease levels. Call <a href="tel:8583612570" style={{ color: 'var(--rust)', fontWeight: 600 }}>(858) 361-2570</a> or book online and we&apos;ll come out and give you a flat price before any work starts.</p>
            </div>

            {/* SECTION 7 */}
            <h2 id="documentation" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Documentation Requirements</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              After every professional cleaning, your contractor is required to post a certification tag on the hood showing the date, contractor name, technician certification, and areas cleaned. This tag is the primary evidence a fire inspector checks — it&apos;s what they look at first when they walk into your kitchen.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Beyond the tag, keep written service reports on file and accessible on-site. Most California fire inspectors expect at least two years of cleaning records to be available. A kitchen with a clean hood and an expired or missing tag still gets written up — the documentation is the proof.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              Every Core Hood Cleaning service includes a written service report, before and after photos, and the compliance certificate. We provide digital copies so you always have them accessible — no hunting through a filing cabinet when an inspector walks in.
            </p>

            {/* SECTION 8 */}
            <h2 id="insurance" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Hood Cleaning and Your Insurance</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Commercial kitchen insurance policies require documented proof of professional hood cleaning at NFPA 96-compliant frequency. This is not a fine-print suggestion — it&apos;s a coverage condition. If a grease fire occurs and you can&apos;t produce cleaning records showing correct frequency and scope of work, your insurer can and will deny the claim.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              The compliance certificate and service report we provide after every visit are exactly what your insurance carrier needs on file. Keep a copy after each cleaning — date, scope of work, technician name and certification. That paper trail is your protection if anything ever happens.
            </p>

            {/* FAQ SECTION */}
            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {[
                {
                  q: 'How often does a restaurant hood need to be cleaned in San Diego?',
                  a: 'NFPA 96 sets frequency by cooking equipment and operating hours. Solid-fuel operations and kitchens running 12+ hours daily require monthly cleaning. Most full-service restaurants with charbroilers, wok stations, or high-volume fryers require quarterly service. Moderate-volume kitchens may qualify for semi-annual. A certified technician confirms your category at the first visit.'
                },
                {
                  q: 'How much does restaurant hood cleaning cost in San Diego?',
                  a: 'Pricing varies based on kitchen size, duct run length, and current grease buildup. Restaurants on regular maintenance schedules pay significantly less per service than those who let grease accumulate. Call (858) 361-2570 for a free on-site quote — we price based on what we see, no surprises.'
                },
                {
                  q: 'What does restaurant hood cleaning include?',
                  a: 'A compliant cleaning covers the complete exhaust path: hood canopy, baffles, plenum, all ductwork from kitchen to rooftop, the exhaust fan, and grease containment. Every Core Hood Cleaning service includes before and after photos and an NFPA 96 compliance certificate.'
                },
                {
                  q: 'Does a passing health inspection mean I am compliant with fire code for my hood?',
                  a: 'No. San Diego County Environmental Health and the San Diego Fire Marshal operate on completely separate inspection tracks. A current A grade does not satisfy a fire code inspection. Your hood cleaning certification tag and service records are what fire inspectors check — independently from your health inspection score.'
                },
                {
                  q: 'When should I get my hood cleaned before the scheduled date?',
                  a: 'NFPA 96 requires early cleaning if you see visible grease on duct surfaces, notice reduced airflow during service, had a grease fire of any size, or added high-grease equipment like a charbroiler or fryer. Call (858) 361-2570 if any of these apply — we offer same-day service.'
                },
                {
                  q: 'What happens if my restaurant fails a fire inspection for a dirty hood?',
                  a: 'A failed inspection can result in an immediate closure order, fines, and voided commercial insurance coverage. You\'ll need emergency cleaning and re-inspection before reopening. Core Hood Cleaning offers same-day emergency service throughout San Diego County.'
                },
                {
                  q: 'Do you provide a compliance certificate after restaurant hood cleaning?',
                  a: 'Yes. Every service includes an NFPA 96 compliance certificate, written service report, and before and after photos. These are what San Diego fire marshals, health inspectors, and your insurance carrier require as proof of compliant cleaning.'
                }
              ].map(f => (
                <div key={f.q} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '28px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px' }}>{f.q}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{f.a}</p>
                </div>
              ))}
            </div>

            {/* RELATED LINKS */}
            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-mid)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/how-often-should-restaurant-hood-be-cleaned" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ How Often Should a Restaurant Hood Be Cleaned? (NFPA 96 Guide)</Link>
                <Link href="/blog/commercial-kitchen-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide</Link>
                <Link href="/blog/choosing-hood-cleaning-company-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ How to Choose a Hood Cleaning Company in San Diego</Link>
                <Link href="/blog/health-inspection-checklist-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ San Diego Restaurant Health Inspection Checklist: Kitchen Exhaust Edition</Link>
                <Link href="/services/hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Our Restaurant Hood Cleaning Service</Link>
              </div>
            </div>

            {/* CTA */}
            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
              <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--rust)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
