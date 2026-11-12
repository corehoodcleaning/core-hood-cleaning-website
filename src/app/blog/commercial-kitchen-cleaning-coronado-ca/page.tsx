import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Kitchen Cleaning in Coronado CA: An Operator Guide to Exhaust Compliance | Core Hood Cleaning',
  description: 'Commercial kitchen cleaning in Coronado CA: who inspects, how wash water is handled next to the bay, the right order of work, and how to plan service on the island. NFPA 96 certified. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-cleaning-coronado-ca' },
}

const faqs = [
  {
    q: 'Who enforces fire code for restaurant kitchens in Coronado?',
    a: 'Coronado is its own city with its own fire department, so fire code questions for a Coronado kitchen go to the Coronado Fire Department, not the City of San Diego. The California Fire Code points to NFPA 96 for commercial kitchen exhaust, so the cleaning standard is the same one used across the county. What changes is the office that walks your kitchen and reads your paperwork.',
  },
  {
    q: 'Does the County health department still inspect Coronado restaurants?',
    a: 'Yes. Food facility permits across San Diego County, including Coronado, run through the County of San Diego Department of Environmental Health and Quality. Their inspector looks at sanitation, food handling, and the general condition of the kitchen, including grease on hoods, filters, and surfaces above the line. Fire and health are two separate visits with two separate checklists.',
  },
  {
    q: 'Where does the wash water go during a hood cleaning in Coronado?',
    a: 'It should be captured, not sent to the street. Coronado sits between the bay and the ocean, and storm drains carry water out to that water with no treatment. A proper crew wraps the hood to channel the runoff into containers, collects what comes off the roof, and disposes of the grease water the right way. Ask any company you hire exactly how they contain it.',
  },
  {
    q: 'Should my deep cleaning crew come before or after the hood cleaning?',
    a: 'After. Hood cleaning moves a lot of grease and water through the hood and duct, and some of it can land on the line even with good plastic. Book the exhaust cleaning first, then let the deep cleaning crew detail the equipment, walls, and floors once the system above them is clean.',
  },
  {
    q: 'How often does a Coronado restaurant need hood cleaning?',
    a: 'NFPA 96 sets the interval by cooking type and volume. High volume kitchens and anything running charbroilers or woks hard usually land on quarterly or tighter. Moderate volume restaurants are commonly quarterly. Light duty kitchens can be semi annual. Coronado kitchens with big summer and holiday swings should set the interval for their busy season, not their slow one.',
  },
  {
    q: 'Can you clean overnight in Coronado so we do not lose a service?',
    a: 'Yes. Most of our Coronado work is scheduled after close so the kitchen is ready for morning prep. If your building has apartments or rooms above or next to the kitchen, tell us when you book so we can plan where the equipment sits and keep noise down near neighbors.',
  },
  {
    q: 'Do you offer commercial kitchen deep cleaning or disinfection in Coronado?',
    a: 'Our work is the exhaust system: hood, filters, duct, and rooftop fan, plus filter exchange and NFPA 96 inspections. That is the part of the kitchen that needs a certified crew and a certificate. We are happy to coordinate timing with your deep cleaning vendor so the two visits happen in the right order.',
  },
  {
    q: 'What paperwork should I keep after a Coronado hood cleaning?',
    a: 'Keep the service report with before and after photos, the date, and what was cleaned, including the duct and the fan. Make sure a current service sticker is on the hood. Keep copies where a manager can pull them fast when the fire department, the County inspector, or your insurance carrier asks.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Commercial Kitchen Cleaning in Coronado CA: An Operator Guide to Exhaust Compliance',
      description: 'Commercial kitchen cleaning in Coronado CA: who inspects, how wash water is handled next to the bay, the right order of work, and how to plan service on the island.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-11-12',
      dateModified: '2026-11-12',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-cleaning-coronado-ca',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

const sections: { id: string; title: string; paras: string[]; list?: string[] }[] = [
  {
    id: 'why-coronado-is-different',
    title: 'Why Coronado Kitchens Are Different',
    paras: [
      `Coronado looks like part of San Diego from across the bay, but for a restaurant owner it is its own place. It is a separate city with its own city hall, its own municipal code, and its own fire department. When you open or run a kitchen on the island, the people who sign off on your fire safety are not the same people who inspect a restaurant in the Gaslamp or North Park.`,
      `The geography matters too. Water sits on almost every side of the island. Kitchens are packed into a small commercial core, many of them in older low rise buildings with homes and rooms close by. Tourism drives volume, so a kitchen that cruises along in February can be slammed in July and again over the holidays.`,
      `None of this changes what clean means. NFPA 96 is the standard for commercial kitchen exhaust everywhere in California. What changes is how you plan the work, who reads your paperwork, and what a crew has to do to keep grease and wash water where it belongs.`,
    ],
  },
  {
    id: 'what-cleaning-covers',
    title: 'What Commercial Kitchen Cleaning Covers in Coronado',
    paras: [
      `People search for commercial kitchen cleaning and mean a lot of different things. In practice the work splits into three layers, and each one has a different owner.`,
      `The first layer is daily and weekly cleaning by your own staff: wiping the line, cleaning fryers, scrubbing floors, and keeping the walk in in order. The second layer is periodic deep cleaning, usually by a janitorial or kitchen cleaning vendor, that hits equipment, walls, ceilings, and the corners staff never get to. The third layer is the kitchen exhaust system, and that is the one the fire code cares about most.`,
      `The exhaust system is the hood canopy, the grease filters, the plenum behind them, the ductwork that runs up through the building, and the exhaust fan on the roof. NFPA 96 requires that whole path to be cleaned to bare metal on a schedule set by your cooking volume, and it requires the work to be done by a trained, qualified, and certified company. A deep cleaning crew wiping the outside of the hood does not cover that requirement.`,
      `If you want the longer version of how those three layers fit together, our guide to commercial kitchen cleaning in San Diego walks through each one. The rest of this post focuses on what is specific to running a kitchen in Coronado.`,
    ],
  },
  {
    id: 'who-inspects',
    title: 'Who Inspects a Coronado Kitchen',
    paras: [
      `There are usually three groups looking at your kitchen, and they each want something a little different.`,
      `The Coronado Fire Department handles fire code for businesses in the city. The California Fire Code sends commercial kitchen exhaust questions to NFPA 96, so a fire inspector wants to see a hood that is clean, filters that are in place with no gaps, a current service sticker, and a service record that shows the full system was cleaned, not just the parts you can see from the line.`,
      `The County of San Diego Department of Environmental Health and Quality issues and inspects food facility permits across the county, Coronado included. Their focus is sanitation. Grease dripping from a hood, filters caked in buildup, or residue on the surfaces above food prep are things a health inspector will write up even though the fire department owns the exhaust code.`,
      `Your insurance carrier is the third. Kitchen fires that start in a dirty duct are one of the claims carriers watch closely. After a loss, the first thing an adjuster asks for is proof the system was cleaned on schedule. A service report with dated photos is what answers that question.`,
    ],
    list: [
      'Fire department: full system cleaned, sticker current, filters seated with no gaps, records on hand.',
      'County health: no grease dripping or pooling over food, filters and hood surfaces clean, general sanitation.',
      'Insurance: written proof the system was cleaned at the NFPA 96 interval for your cooking type.',
    ],
  },
  {
    id: 'wash-water',
    title: 'Wash Water and Grease Next to the Bay',
    paras: [
      `This is the part of hood cleaning that matters more in Coronado than almost anywhere else in the county. A hood cleaning produces a lot of hot water mixed with degreaser and the grease that comes off the hood, the duct, and the fan. All of that has to go somewhere.`,
      `Storm drains in Coronado lead out to the bay and the ocean. They are not connected to a treatment plant. Grease water that gets hosed off a roof, dumped in a gutter, or rinsed into a parking lot drain ends up in the water around the island. That is a problem for the bay and a real problem for the business whose name is on the building.`,
      `A proper crew plans containment before the first drop of water goes on the hood. Inside, the hood gets wrapped in plastic that channels runoff into a container. On the roof, the fan area is set up so the wash water is caught instead of running across the roof and down the downspouts. The collected water is handled and disposed of the right way, not poured into the nearest drain.`,
      `When you interview a company for Coronado work, ask them to explain their containment in plain words. If the answer is vague, keep looking. Growing up working in restaurants, I saw what a sloppy crew leaves behind on a roof. On an island, that mess does not stay on the roof.`,
    ],
  },
  {
    id: 'older-buildings',
    title: 'Older Buildings, Close Neighbors, and Rooftop Access',
    paras: [
      `A lot of Coronado restaurants operate in older buildings that were not designed around a modern commercial kitchen. Ductwork may run a longer or more crooked path than you would expect, sometimes with horizontal sections that collect grease. Access panels may be missing or hard to reach. Roof access can mean an interior hatch, a tight ladder, or a route across a shared roof.`,
      `None of that is a reason to skip part of the system. It is a reason to have the system looked at before the first cleaning so the crew shows up with the right ladders, the right tools, and enough time. If your duct has sections that cannot be reached, NFPA 96 expects access panels to be added so the duct can be cleaned. We will tell you plainly if that applies to your kitchen.`,
      `Neighbors matter too. Many kitchens on the island share walls with shops, rooms, or apartments. Overnight cleaning keeps you open for service, but it means pressure washers and equipment running when people nearby are trying to sleep. When we schedule a Coronado job, we plan where the equipment sits, how long the loud parts take, and which work can happen first so the night goes smoothly for everyone.`,
      `Salt air also works on rooftop fans, hinges, and fasteners faster here than inland. A fan that is cleaned and checked on every visit lasts longer and fails less often. That inspection is part of a full cleaning, not an extra.`,
    ],
  },
  {
    id: 'seasonal-volume',
    title: 'Planning Around Seasonal Volume',
    paras: [
      `NFPA 96 ties your cleaning interval to how hard the kitchen works. The standard calls for more frequent cleaning for high volume operations and anything running solid fuel, and less frequent cleaning for light duty kitchens. The catch in Coronado is that the same kitchen can be light duty in one season and high volume in the next.`,
      `The safe move is to set your interval for your busiest stretch. Summer, holiday weekends, and big local events push more grease through the hood in a few weeks than a slow month does in a quarter. If your last cleaning was right before Memorial Day, the duct is not the same duct by Labor Day.`,
      `A simple way to handle it is to book a full cleaning right before your busy season starts and another as it winds down, then fill in the rest of the year at your normal interval. A filter exchange program on top of that keeps the filters doing their job between full cleanings, which matters most when the line is running all day.`,
    ],
  },
  {
    id: 'order-of-work',
    title: 'The Right Order of Work',
    paras: [
      `When an operator books hood cleaning and kitchen deep cleaning in the same week, the order makes a difference.`,
      `Hood cleaning comes first. Even with good plastic and good containment, it moves a lot of water and grease through the hood above your line. Some of it can end up on equipment below. If the deep cleaning crew has already detailed the line, they end up doing part of the job twice.`,
      `Once the exhaust system is clean and the plastic is down, the deep cleaning crew can work top to bottom: equipment, walls, ceilings, and floors. The kitchen ends the week clean from the fan on the roof to the drain on the floor, and your staff starts the next service with nothing left over.`,
    ],
    list: [
      'Step one: full exhaust cleaning by an NFPA 96 certified company, hood to roof.',
      'Step two: fresh filters in place, or the first visit of a filter exchange program.',
      'Step three: kitchen deep cleaning of equipment, walls, ceilings, and floors.',
      'Step four: staff resumes daily cleaning on the newly clean baseline.',
    ],
  },
  {
    id: 'scheduling',
    title: 'Scheduling Service on the Island',
    paras: [
      `Most of our Coronado customers want the work done after close so the kitchen is ready when the morning crew walks in. That is how we schedule the large majority of island jobs.`,
      `Because every crew and every truck has to come over from the mainland, booking ahead helps. It lets us group Coronado jobs on the same night, plan the route, and make sure the right equipment is on the truck the first time. If you are facing an urgent problem, call anyway. Same day help is available, it just runs more smoothly with a little notice.`,
      `Before the first visit, it helps to have a few things ready: who will let the crew in, how the roof is reached, where the truck can park, whether there are residents close by, and when the first prep shift starts. With those answers, the job runs on time and you are not getting calls in the middle of the night.`,
    ],
  },
  {
    id: 'checklist',
    title: 'A Coronado Operator Checklist',
    paras: [
      `If you run a kitchen on the island, this is the short list we would want you to have on the wall in the office.`,
    ],
    list: [
      'Know your NFPA 96 interval and set it for your busiest season, not your slowest.',
      'Keep the latest service report with photos and a current sticker on the hood.',
      'Ask your hood cleaning company how they contain wash water inside and on the roof.',
      'Make sure the duct and the rooftop fan are listed on every service report, not just the hood.',
      'Schedule hood cleaning before your kitchen deep cleaning, not after.',
      'Tell the crew about neighbors, roof access, and parking before the first visit.',
      'Have the fan, hinges, and fasteners checked for salt air wear on every cleaning.',
      'Keep filters on a regular exchange or cleaning schedule between full cleanings.',
    ],
  },
]

const tocItems = [
  ...sections.map(s => ({ href: `#${s.id}`, label: s.title })),
  { href: '#faq', label: 'FAQ' },
]

const bodyP = { fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' } as const
const h2Style = { fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' } as const

export default function CommercialKitchenCleaningCoronadoCa() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Local Guide</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>November 2026 · 11 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Commercial Kitchen Cleaning in Coronado CA: An Operator Guide to Exhaust Compliance
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Coronado has its own fire department, water on every side, and kitchens that swing hard with the seasons. Here is who inspects, how wash water should be handled next to the bay, and the right order to clean a Coronado kitchen.
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
              {`Running a kitchen in Coronado is not the same as running one five miles away on the mainland. The rules for a clean exhaust system are the same, but the city, the inspectors, the buildings, and the water around you all change how the work should be planned.`}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {`This guide is for owners, general managers, and chefs on the island who want to get commercial kitchen cleaning right, especially the part the fire code cares about most: the hood, filters, duct, and rooftop fan. Core Hood Cleaning is NFPA 96 certified and works in Coronado kitchens every month. Our Coronado service page covers the neighborhoods we serve. This post covers how to plan the work.`}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              {`I know operators want straight answers and no runaround, so that is what you will find below.`}
            </p>

            {sections.map(s => (
              <div key={s.id} style={{ marginBottom: '16px' }}>
                <h2 id={s.id} style={h2Style}>{s.title}</h2>
                {s.paras.map(t => (
                  <p key={t.slice(0, 40)} style={bodyP}>{t}</p>
                ))}
                {s.list && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                    {s.list.map(item => (
                      <li key={item.slice(0, 40)} style={{ display: 'flex', gap: '10px', fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.7', marginBottom: '10px' }}>
                        <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div style={{ height: '24px' }} />
              </div>
            ))}

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              Ready to put your Coronado kitchen on a proper schedule? See our <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)', fontWeight: 600 }}>commercial hood cleaning service</Link>, our <Link href="/services/filter-exchange" style={{ color: 'var(--rust)', fontWeight: 600 }}>grease filter exchange program</Link>, and our <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)', fontWeight: 600 }}>NFPA 96 inspection service</Link>, or visit the <Link href="/locations/coronado" style={{ color: 'var(--rust)', fontWeight: 600 }}>Coronado service area page</Link>.
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Book Your Coronado Kitchen</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>Overnight service, full wash water containment, and a complete NFPA 96 certified service report on every job. Serving Coronado and all of San Diego County.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={h2Style}>Frequently Asked Questions</h2>
            {faqs.map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/services/hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Hood Cleaning Service</Link>
                <Link href="/services/filter-exchange" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Grease Filter Exchange Service</Link>
                <Link href="/services/nfpa-inspection" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ NFPA 96 Inspection Service</Link>
                <Link href="/blog/commercial-kitchen-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Kitchen Cleaning San Diego: What Gets Cleaned and What Your Exhaust System Needs</Link>
                <Link href="/blog/hotel-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hotel Hood Cleaning San Diego: NFPA 96 Compliance for Resort and Hotel Kitchens</Link>
                <Link href="/blog/after-hours-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ After Hours Hood Cleaning San Diego: Nighttime Service for Restaurants and Bars</Link>
                <Link href="/blog/exhaust-fan-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Exhaust Fan Cleaning San Diego: Rooftop Fan Service for Commercial Kitchens</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
