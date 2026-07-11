import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brewery Hood Cleaning San Diego: NFPA 96 Compliance for Craft Beer Kitchens',
  description: 'San Diego breweries and taprooms with commercial kitchens need NFPA 96 compliant hood cleaning. Core Hood Cleaning provides full-system service with documentation for fire marshal and health department inspections.',
  alternates: {
    canonical: 'https://www.corehoodcleaning.com/blog/brewery-hood-cleaning-san-diego',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Brewery Hood Cleaning San Diego: NFPA 96 Compliance for Craft Beer Kitchens',
      description: 'San Diego breweries and taprooms with commercial kitchens need NFPA 96 compliant hood cleaning. Core Hood Cleaning provides full-system service with documentation for fire marshal and health department inspections.',
      image: 'https://www.corehoodcleaning.com/images/tech-pressure-wash.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: {
        '@type': 'Organization',
        name: 'Core Hood Cleaning',
        url: 'https://www.corehoodcleaning.com',
      },
      datePublished: '2026-07-10',
      dateModified: '2026-07-10',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/brewery-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do San Diego breweries need commercial hood cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Any brewery or taproom operating a commercial kitchen is required under NFPA 96 to have its exhaust system cleaned on a schedule based on cooking type and volume. The beer side of your operation does not exempt the kitchen side from fire code.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often do brewery kitchens need hood cleaning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most San Diego taproom kitchens running grills, fryers, or flat tops fall into a 3 to 6 month cleaning schedule under NFPA 96 Table 11.4. High-volume or solid fuel cooking (wood-fired pizza, charbroilers) typically requires quarterly service. Low-volume or seasonal kitchens may qualify for annual cleaning.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in a brewery hood cleaning service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A full-system brewery hood clean covers the hood canopy, plenum chamber, grease filters, the full duct run from plenum to rooftop, and the rooftop exhaust fan blades, housing, and grease containment. You receive before and after photos and an NFPA 96 compliance certificate.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can grease fires happen in brewery kitchens?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Brewery kitchens are not immune to grease fires. Any commercial kitchen cooking with oil, butter, or fat builds up grease in the exhaust system over time. If that grease ignites and the ductwork has not been cleaned, the fire travels the entire duct run.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does a San Diego brewery need hood cleaning documentation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Both the San Diego County Department of Environmental Health and the San Diego Fire-Rescue Department may request proof of current hood cleaning during inspections. A dated compliance certificate from a qualified service provider is the standard documentation required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if a brewery kitchen is red-tagged by the fire marshal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A red tag from the San Diego Fire-Rescue Department means your kitchen must shut down until the violation is corrected and re-inspected. For a taproom, this can mean losing your food service and impacting your beer sales. Core Hood Cleaning offers same-day service to clear red tags fast.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Core Hood Cleaning service breweries across San Diego County?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We service breweries and taprooms throughout San Diego County including North Park, Miramar, Kearny Mesa, Escondido, Oceanside, Vista, Chula Vista, Downtown San Diego, and all surrounding areas.',
          },
        },
      ],
    },
  ],
}

export default function BreweryHoodCleaningSanDiegoPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section style={{ paddingTop: '120px', paddingBottom: '64px', background: 'var(--true-blue)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p className="section-label">Brewery Services</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, color: 'var(--off-white)', marginBottom: '24px' }}>
            Brewery Hood Cleaning San Diego
          </h1>
          <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '32px' }}>
            NFPA 96 compliance for craft beer kitchens and taprooms throughout San Diego County. Full-system cleaning, documentation for the fire marshal, and service scheduled around your hours.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-block', background: 'var(--rust)', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none' }}>Get a Free Quote</a>
            <a href="tel:8583612570" style={{ display: 'inline-block', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', border: '2px solid rgba(238,239,226,0.4)' }}>(858) 361-2570</a>
          </div>
        </div>
      </section>

      {/* TOC */}
      <section style={{ padding: '48px 0', background: 'var(--white)', borderBottom: '1px solid var(--gray-light)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rust)', marginBottom: '16px' }}>In This Guide</p>
          <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px 24px' }}>
            {[
              ['why-breweries', 'Why Brewery Kitchens Need Hood Cleaning'],
              ['nfpa-96', 'NFPA 96 Cleaning Frequency for Breweries'],
              ['what-we-clean', 'What a Full-System Brewery Hood Clean Covers'],
              ['violations', 'Common Violations Found in Taproom Kitchens'],
              ['filter-exchange', 'Filter Exchange for High-Volume Brewery Kitchens'],
              ['service-area', 'San Diego Brewery Service Area'],
              ['faqs', 'Frequently Asked Questions'],
            ].map(([anchor, label]) => (
              <li key={anchor} style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <a href={`#${anchor}`} style={{ color: 'var(--true-blue)', textDecoration: 'none', fontWeight: 600 }}>{label}</a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Article Body */}
      <article style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>

          {/* Intro */}
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '24px' }}>
            San Diego is one of the craft beer capitals of the country. With over 150 breweries operating across the county, a large number of those taprooms are also running full commercial kitchens. Burgers, tacos, flatbreads, wood-fired pizza, weekend brunch. The food programs at San Diego breweries have gotten serious.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '24px' }}>
            That kitchen operation comes with the same NFPA 96 compliance requirements as any restaurant. It does not matter that your primary product is beer. If you have a commercial range, a fryer, or a grill under an exhaust hood, the fire code applies to you.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '48px' }}>
            Core Hood Cleaning provides full-system hood cleaning for breweries and taprooms throughout San Diego County. We schedule after your closing so your kitchen keeps running, we clean everything from the hood canopy down to the rooftop exhaust fan, and we hand you documentation that holds up when an inspector walks through.
          </p>

          {/* Section 1 */}
          <h2 id="why-breweries" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px', paddingTop: '24px' }}>
            Why Brewery Kitchens Need Hood Cleaning
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '20px' }}>
            A lot of brewery operators do not realize their kitchen is subject to the same fire code as a standalone restaurant. NFPA 96, the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations, does not make an exception for taprooms. If you cook commercially, you comply.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '24px' }}>
            Here is what drives the requirement for brewery kitchens specifically:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              {
                title: 'Grease Builds Fast',
                body: 'Commercial fryers, flat tops, and charbroilers generate heavy grease vapor with every cook. That grease deposits in your ductwork above the filters. It accumulates whether or not you see it.',
              },
              {
                title: 'Weekend Volume Spikes',
                body: 'Brewery kitchens often run their highest volume on Friday and Saturday nights and Sunday brunch. The more cooking hours, the faster grease builds. Faster buildup means shorter cleaning intervals under NFPA 96.',
              },
              {
                title: 'Fire Suppression Requires Clean Ducts',
                body: 'Your Ansul or other suppression system can only suppress a fire it can reach. Grease in the ductwork above the suppression nozzle range means a fire can travel the entire duct run before it is stopped.',
              },
              {
                title: 'Insurance Coverage',
                body: 'Most commercial kitchen insurance policies require documented NFPA 96 cleaning within the required interval. A cleaning lapse does not just risk a citation. It can void your coverage in the event of a grease fire.',
              },
              {
                title: 'Health Department',
                body: 'San Diego County DEH inspects commercial kitchens in breweries the same as restaurants. Grease-saturated filters and visible buildup in the hood are citable violations.',
              },
              {
                title: 'Fire Marshal Red Tags',
                body: 'The San Diego Fire-Rescue Department can shut your kitchen down on the spot if your exhaust system does not meet code. A red tag means no food service until the violation is corrected and re-inspected.',
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: '6px', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--rust)', marginBottom: '8px' }}>{title}</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--gray-text)', margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '48px' }}>
            Growing up working in restaurants, I know how easy it is to put hood cleaning on the back burner when you are managing a kitchen, a taproom, events, and staff all at once. That is exactly why I built Core around showing up when we say we will, cleaning the full system every time, and making sure you have documentation that actually protects you. Not just a wipe-down and a sticker.
          </p>

          {/* Section 2 */}
          <h2 id="nfpa-96" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px', paddingTop: '24px' }}>
            NFPA 96 Cleaning Frequency for Brewery Kitchens
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '20px' }}>
            NFPA 96 Table 11.4 sets cleaning frequency based on cooking type and volume, not a calendar default. Here is how it typically maps to brewery kitchen setups:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '40px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: 'var(--true-blue)', color: 'var(--off-white)' }}>
                  {['Cooking Type', 'NFPA 96 Required Frequency', 'Common in Breweries?'].map((h) => (
                    <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.78rem' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Solid fuel — wood, charcoal, mesquite', 'Monthly', 'Yes, in BBQ and wood-fired pizza taprooms'],
                  ['High-volume fryers and charbroilers', 'Every 3 months', 'Yes, in high-volume taproom kitchens'],
                  ['Standard range, grill, flat top', 'Every 6 months', 'Yes, the most common taproom setup'],
                  ['Low-volume or seasonal cooking', 'Annually', 'Yes, limited or weekend-only menus'],
                ].map(([type, freq, common], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--off-white)', borderBottom: '1px solid var(--gray-light)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--gray-text)', lineHeight: 1.6 }}>{type}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--true-blue)', fontWeight: 700 }}>{freq}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--gray-text)' }}>{common}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '20px' }}>
            Most San Diego taprooms with a standard kitchen menu fall into the 6-month cleaning schedule. If you are running a wood-fired oven, a heavy charbroiler, or a bank of fryers running full shifts, you are likely looking at quarterly service.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '48px' }}>
            When we come out for a quote, we look at your actual equipment and your real cooking volume. We tell you what schedule the code requires for your setup. You should not pay for quarterly cleaning if your kitchen does not need it, and you should not be going 12 months if your fryers are running four nights a week.
          </p>

          {/* Section 3 */}
          <h2 id="what-we-clean" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px', paddingTop: '24px' }}>
            What a Full-System Brewery Hood Clean Covers
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '24px' }}>
            Every Core Hood Cleaning service is a full-system clean. We do not stop at the filters. Here is exactly what gets done on every brewery service call:
          </p>

          <div style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '32px', marginBottom: '40px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rust)', marginBottom: '20px' }}>Full-System Service Checklist</p>
            {[
              ['Hood Canopy', 'All interior and exterior grease-exposed surfaces, hood lip, and drip edges cleaned to bare metal'],
              ['Plenum Chamber', 'The grease collection chamber above your filters — where buildup concentrates most — pressure washed completely'],
              ['Grease Filters', 'Removed, pressure washed, dried, and reinstalled. Pair with the filter exchange program between full cleans for maximum protection.'],
              ['Full Duct Run', 'Every section of ductwork from the plenum to the rooftop exit, scraped and pressure washed to NFPA 96 standard'],
              ['Rooftop Exhaust Fan', 'Fan blades, fan housing, grease containment vessel, access point resealing, and hinge kit inspection'],
              ['Grease Collection Points', 'All grease drip trays and containment points checked and cleared'],
              ['Before and After Photos', 'Full photo documentation of the system condition before and after service'],
              ['NFPA 96 Compliance Certificate', 'Dated certificate with technician, service scope, and your property address — ready to hand to any inspector'],
            ].map(([item, desc], i) => (
              <div key={item} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', paddingBottom: '18px', marginBottom: '18px', borderBottom: i < 7 ? '1px solid var(--gray-light)' : 'none' }}>
                <div style={{ width: '22px', height: '22px', background: 'var(--rust)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '3px' }}>
                  <span style={{ color: 'var(--off-white)', fontSize: '11px', fontWeight: 900 }}>✓</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', margin: '0 0 4px' }}>{item}</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--gray-text)', margin: 0, lineHeight: 1.65 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '20px' }}>
            We protect your kitchen surfaces with plastic sheeting before we start and clean up completely before we leave. Most brewery services are scheduled after closing or early morning before kitchen prep begins. You tell us what window works and we work to it.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '48px' }}>
            See the full breakdown of what every service includes on our <Link href="/services/hood-cleaning" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>hood cleaning service page</Link>.
          </p>

          {/* Section 4 */}
          <h2 id="violations" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px', paddingTop: '24px' }}>
            Common Violations Found in Taproom Kitchens
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '24px' }}>
            When we first service a brewery that has not had consistent professional hood cleaning, these are the issues we find most often:
          </p>

          <div style={{ display: 'grid', gap: '12px', marginBottom: '40px' }}>
            {[
              {
                num: '01',
                title: 'Grease Exceeding 1/8 Inch in the Ductwork',
                body: 'NFPA 96 defines excessive grease accumulation as greater than 1/8 inch on duct surfaces. We find this regularly in brewery kitchens that have never had a full duct cleaning, even when the filters are being swapped or rinsed between services.',
              },
              {
                num: '02',
                title: 'Missing or Blocked Access Panels',
                body: 'NFPA 96 requires access panels at specific intervals along the duct run so the system can be inspected and cleaned. Kitchens built without proper access panels cannot be fully serviced and will fail a fire marshal inspection immediately.',
              },
              {
                num: '03',
                title: 'Grease Overflow at the Rooftop Fan',
                body: 'When the rooftop exhaust fan is not cleaned regularly, grease accumulates in the housing and can overflow onto the roof surface or down the exterior of the building. This is a fire hazard and a citation in San Diego.',
              },
              {
                num: '04',
                title: 'No Hinge Kit on the Rooftop Fan',
                body: 'NFPA 96 requires the rooftop fan to hinge open so the inside can be accessed and cleaned. A fan without a hinge kit cannot be properly serviced. We install them when needed and factor it into the first service.',
              },
              {
                num: '05',
                title: 'Expired or Missing Compliance Documentation',
                body: 'San Diego fire marshals and health inspectors ask for proof of cleaning. If you cannot produce a certificate dated within your required service interval, you are out of compliance regardless of what the hood looks like.',
              },
              {
                num: '06',
                title: 'Filter-Only Cleaning History',
                body: 'Some brewery kitchens have staff rinsing or swapping grease filters regularly, but have never had the full duct run and rooftop fan professionally cleaned. Clean filters with dirty ductwork above them is still a code violation and still a fire hazard.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ display: 'flex', gap: '20px', padding: '20px 24px', background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: '6px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, color: 'rgba(137,29,27,0.18)', margin: 0, flexShrink: 0, lineHeight: 1.1, paddingTop: '2px' }}>{num}</p>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--black)', margin: '0 0 6px' }}>{title}</p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--gray-text)', margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '48px' }}>
            If your brewery has not had a full-system cleaning in over 6 months, or has never had one since opening, the right call is to get a service on the calendar before an inspector shows up. We do not oversell. We tell you exactly what we find, what the code requires for your equipment, and what we recommend going forward.
          </p>

          {/* Section 5 */}
          <h2 id="filter-exchange" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px', paddingTop: '24px' }}>
            Filter Exchange for High-Volume Brewery Kitchens
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '20px' }}>
            If your taproom kitchen runs hard on weekends, event nights, or holiday weekends, your grease filters are taking the hit between full-system cleans. Clogged filters restrict airflow, drive grease deeper into the ductwork above, and accelerate the timeline toward your next NFPA 96 violation.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '24px' }}>
            Our filter exchange program manages this between full cleanings. We drop off clean filters and pick up the dirty ones on a schedule that matches your cooking volume:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
            {[
              { freq: 'Weekly Exchange', desc: 'For high-volume taproom kitchens running full cooking operations multiple evenings per week' },
              { freq: 'Bi-Weekly Exchange', desc: 'For moderate-volume operations with consistent but not daily high-heat cooking' },
              { freq: 'Monthly Exchange', desc: 'For lower-volume or seasonal brewery kitchens with limited cooking days' },
            ].map(({ freq, desc }) => (
              <div key={freq} style={{ background: 'var(--white)', border: '2px solid var(--true-blue)', borderRadius: '6px', padding: '20px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', marginBottom: '8px' }}>{freq}</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--gray-text)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '20px' }}>
            Your kitchen staff does not have to handle greasy filters. Your exhaust system runs at proper airflow between full cleanings. And the ductwork above stays cleaner longer, which means your full-system cleaning intervals stay on schedule instead of getting pushed up by excessive buildup.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '48px' }}>
            Full details on our <Link href="/services/filter-exchange" style={{ color: 'var(--true-blue)', fontWeight: 600 }}>filter exchange program page</Link>.
          </p>

          {/* Section 6 */}
          <h2 id="service-area" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px', paddingTop: '24px' }}>
            San Diego Brewery Service Area
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '24px' }}>
            We service breweries, taprooms, and craft beer kitchens across San Diego County. Wherever your operation is located, we can get there:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(155px, 1fr))', gap: '8px', marginBottom: '40px' }}>
            {[
              'North Park', 'South Park', 'Miramar', 'Kearny Mesa',
              'Mission Valley', 'Downtown San Diego', 'Chula Vista', 'National City',
              'La Mesa', 'El Cajon', 'Santee', 'Escondido',
              'San Marcos', 'Vista', 'Oceanside', 'Carlsbad',
              'Encinitas', 'Del Mar', 'La Jolla', 'Pacific Beach',
              'Rancho Bernardo', 'Poway', 'Coronado', 'Miramar',
            ].filter((v, i, a) => a.indexOf(v) === i).map((city) => (
              <div key={city} style={{ background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: '4px', padding: '10px 14px', fontSize: '0.85rem', color: 'var(--gray-text)', fontWeight: 500 }}>
                {city}
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--gray-text)', marginBottom: '48px' }}>
            If your brewery is in San Diego County and not on this list, call us. If we can get there, we service you.
          </p>

          {/* CTA Block */}
          <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '40px', marginBottom: '64px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '12px' }}>
              Ready to Get Your Brewery Kitchen on a Compliance Schedule?
            </h3>
            <p style={{ color: 'rgba(238,239,226,0.8)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '28px', maxWidth: '560px', margin: '0 auto 28px' }}>
              Free quote. Same-day response. Full-system service with NFPA 96 documentation you can hand to any inspector. No hidden fees.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-block', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none' }}>Get a Free Quote</a>
              <a href="tel:8583612570" style={{ display: 'inline-block', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '14px 28px', borderRadius: '4px', textDecoration: 'none', border: '2px solid rgba(238,239,226,0.6)' }}>(858) 361-2570</a>
            </div>
          </div>

          {/* FAQs */}
          <h2 id="faqs" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '32px', paddingTop: '24px' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ marginBottom: '64px' }}>
            {[
              {
                q: 'Do San Diego breweries need commercial hood cleaning?',
                a: 'Yes. Any brewery or taproom operating a commercial kitchen is required under NFPA 96 to have its exhaust system cleaned on a schedule based on cooking type and volume. The beer side of your operation does not exempt the kitchen side from fire code.',
              },
              {
                q: 'How often do brewery kitchens need hood cleaning?',
                a: 'Most San Diego taproom kitchens running grills, fryers, or flat tops fall into a 3 to 6 month cleaning schedule under NFPA 96 Table 11.4. High-volume or solid fuel cooking typically requires quarterly service. Low-volume or seasonal kitchens may qualify for annual cleaning.',
              },
              {
                q: 'What is included in a brewery hood cleaning service?',
                a: 'A full-system brewery hood clean covers the hood canopy, plenum chamber, grease filters, the full duct run from plenum to rooftop, and the rooftop exhaust fan blades, housing, and grease containment. You receive before and after photos and an NFPA 96 compliance certificate.',
              },
              {
                q: 'Can grease fires happen in brewery kitchens?',
                a: 'Yes. Brewery kitchens are not immune to grease fires. Any commercial kitchen cooking with oil, butter, or fat builds up grease in the exhaust system over time. If that grease ignites and the ductwork has not been cleaned, the fire travels the full duct run.',
              },
              {
                q: 'Does a San Diego brewery need hood cleaning documentation?',
                a: 'Yes. Both the San Diego County Department of Environmental Health and the San Diego Fire-Rescue Department may request proof of current hood cleaning during inspections. A dated compliance certificate from a qualified service provider is the standard documentation required.',
              },
              {
                q: 'What happens if a brewery kitchen is red-tagged by the fire marshal?',
                a: 'A red tag from the San Diego Fire-Rescue Department means your kitchen must shut down until the violation is corrected and re-inspected. For a taproom, this can mean losing food service and affecting your overall business. Core Hood Cleaning offers same-day service to clear red tags fast.',
              },
              {
                q: 'Does Core Hood Cleaning service breweries across San Diego County?',
                a: 'Yes. We service breweries and taprooms throughout San Diego County including North Park, Miramar, Kearny Mesa, Escondido, Oceanside, Vista, Chula Vista, Downtown San Diego, and all surrounding areas.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} style={{ paddingBottom: '24px', marginBottom: '24px', borderBottom: '1px solid var(--gray-light)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--black)', marginBottom: '10px' }}>{q}</h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--gray-text)', margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>

          {/* Related Reading */}
          <div style={{ borderTop: '2px solid var(--gray-light)', paddingTop: '40px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rust)', marginBottom: '16px' }}>Related Reading</p>
            <div style={{ display: 'grid', gap: '10px' }}>
              {[
                { href: '/blog/what-is-nfpa-96', label: 'What Is NFPA 96? A Restaurant Owner\'s Plain-English Guide' },
                { href: '/blog/hood-cleaning-frequency-cooking-type', label: 'Hood Cleaning Frequency by Cooking Type' },
                { href: '/blog/commercial-kitchen-fire-suppression', label: 'How Your Hood Cleaning Affects Your Fire Suppression System' },
                { href: '/blog/emergency-hood-cleaning-san-diego', label: 'Emergency Hood Cleaning San Diego: Same-Day Red Tag Response' },
                { href: '/services/nfpa-inspection', label: 'NFPA 96 Compliance Inspections' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', background: 'var(--white)', border: '1px solid var(--gray-light)', borderRadius: '6px', textDecoration: 'none', color: 'var(--true-blue)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--rust)', flexShrink: 0 }}>→</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>

      <Footer />
    </>
  )
}
