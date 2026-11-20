import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Kitchen Cleaning in La Jolla CA: What Operators Need to Know | Core Hood Cleaning',
  description: 'Commercial kitchen cleaning in La Jolla CA: who inspects, why wash water matters next to a protected coastline, Village alley logistics, campus and hotel kitchens, and NFPA 96 intervals. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-cleaning-la-jolla-ca' },
}

const faqs = [
  {
    q: 'Who enforces fire code for restaurant kitchens in La Jolla?',
    a: 'La Jolla is a community inside the City of San Diego, not its own city. Fire code for La Jolla businesses runs through the San Diego Fire Rescue Department and its Fire Prevention Bureau. The California Fire Code points to NFPA 96 for commercial kitchen exhaust, so the inspector wants to see a clean system, a current service sticker, and records that show the hood, duct, and fan were all cleaned.',
  },
  {
    q: 'Does the County health department inspect La Jolla restaurants?',
    a: 'Yes. Food facility permits across San Diego County, La Jolla included, are issued and inspected by the County of San Diego Department of Environmental Health and Quality. They look at sanitation and food safety, which includes grease dripping from a hood, dirty filters, and residue above the cook line. Fire and health are separate visits with separate checklists.',
  },
  {
    q: 'Why does wash water containment matter so much in La Jolla?',
    a: 'Storm drains in San Diego carry water straight to the ocean with no treatment, and the water off La Jolla is a state protected marine area where waste discharges are prohibited. Grease water from a hood cleaning that gets rinsed into an alley drain ends up on that coastline. A proper crew wraps the hood, catches the rooftop runoff, and disposes of the grease water the right way.',
  },
  {
    q: 'How often does a La Jolla restaurant need hood cleaning?',
    a: 'NFPA 96 sets the interval by cooking type and volume. Kitchens cooking with wood or charcoal need monthly cleaning. High volume kitchens, including charbroilers, woks, and 24 hour operations, need quarterly. Moderate volume kitchens need semi annual service. Low volume kitchens can go annually. Set the interval for your busy summer season, not your slow months.',
  },
  {
    q: 'Can you clean a Village restaurant overnight without blocking the alley?',
    a: 'Yes. Most of our La Jolla Village work is scheduled after close. Tell us when you book where deliveries come in, where a truck can sit, and whether there are apartments or offices above the kitchen. With that, we plan the hose runs and equipment so the alley stays usable and the noise stays down.',
  },
  {
    q: 'Do you service hospital, university, and corporate cafeteria kitchens near UTC and Torrey Pines?',
    a: 'Yes. Campus kitchens usually need more coordination than a street front restaurant: badge access, an escort, a facilities contact, a certificate of insurance on file, and work windows set around meal service. We handle that paperwork up front so the night of service is just the cleaning.',
  },
  {
    q: 'Should my deep cleaning crew come before or after hood cleaning?',
    a: 'After. Hood cleaning pushes hot water and grease through the hood and duct, and even with good plastic some of it can land on the line. Schedule the exhaust cleaning first, then let the deep cleaning crew detail the equipment, walls, and floors once the system above them is clean.',
  },
  {
    q: 'Do you do general commercial kitchen deep cleaning in La Jolla?',
    a: 'Our work is the kitchen exhaust system: hood, filters, duct, and rooftop fan, plus grease filter exchange and NFPA 96 inspections. That is the part of the kitchen that needs a certified crew and a certificate. We are glad to coordinate timing with your deep cleaning vendor so both visits happen in the right order.',
  },
  {
    q: 'What paperwork should a La Jolla kitchen keep after a hood cleaning?',
    a: 'Keep the service report with before and after photos, the date, and a list of what was cleaned, including the duct and the fan. Keep a current sticker on the hood. If you are in a mall, hotel, or campus, send a copy to property management too, because many leases and brand standards require it.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Commercial Kitchen Cleaning in La Jolla CA: What Operators Need to Know',
      description: 'Commercial kitchen cleaning in La Jolla CA: who inspects, why wash water matters next to a protected coastline, Village alley logistics, campus and hotel kitchens, and NFPA 96 intervals.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-11-20',
      dateModified: '2026-11-20',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-cleaning-la-jolla-ca',
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
    id: 'why-la-jolla-is-different',
    title: 'Why La Jolla Kitchens Are Different',
    paras: [
      `La Jolla is not one kind of kitchen. Within a few miles you have fine dining rooms on Prospect Street and Girard Avenue, beach cafes in La Jolla Shores, chain restaurants and food courts at UTC, resort kitchens on the bluffs, and large institutional kitchens on the hospital, university, and research campuses near Torrey Pines. Each of those runs on a different schedule, answers to different people, and needs its exhaust system cleaned in a different way.`,
      `What ties them together is the address. La Jolla is a community inside the City of San Diego, so the same city fire code office, the same county health department, and the same city storm water rules apply across all of it. It also sits on one of the most protected stretches of coastline in the state, which changes how a hood cleaning crew has to handle its wash water.`,
      `The standard for clean does not change. NFPA 96 is the code for commercial kitchen exhaust everywhere in California. What changes in La Jolla is the planning: who signs off, where the truck parks, how the water is caught, and how often a kitchen with a wood fired oven or a busy summer season really needs service.`,
    ],
  },
  {
    id: 'what-cleaning-covers',
    title: 'What Commercial Kitchen Cleaning Covers',
    paras: [
      `When people search for commercial kitchen cleaning in La Jolla, they usually mean one of three things. It helps to separate them, because each one has a different owner and a different rulebook.`,
      `The first layer is daily and weekly cleaning by your own team: the line, the fryers, the floors, the walk in. The second layer is periodic deep cleaning, often by a janitorial or kitchen cleaning vendor, that reaches equipment, walls, ceilings, and the corners your staff never gets to. The third layer is the kitchen exhaust system, and that is the layer the fire code is written around.`,
      `The exhaust system is the hood canopy, the grease filters, the plenum behind the filters, the ductwork running up through the building, and the exhaust fan on the roof. NFPA 96 requires that whole path to be cleaned to bare metal on a schedule set by your cooking type, by a company that is trained, qualified, and certified. A deep cleaning crew wiping the outside of the hood does not meet that requirement.`,
      `Our guide to commercial kitchen cleaning in San Diego explains how the three layers fit together in more detail. This post sticks to what is specific to La Jolla.`,
    ],
  },
  {
    id: 'who-inspects',
    title: 'Who Inspects a La Jolla Kitchen',
    paras: [
      `Most La Jolla kitchens answer to at least three groups, and the bigger operations answer to a fourth.`,
      `The San Diego Fire Rescue Department handles fire code for businesses in La Jolla through its Fire Prevention Bureau. This is different from Coronado or Del Mar, which run their own fire departments. A city fire inspector wants to see a hood that is clean, filters seated with no gaps, a current service sticker, and a service record showing the full system was cleaned, not just the parts visible from the line.`,
      `The County of San Diego Department of Environmental Health and Quality permits and inspects food facilities countywide. Their focus is sanitation and food safety. Grease dripping from a hood, filters caked with buildup, or residue on surfaces above food prep can get written up on a health inspection even though the fire department owns the exhaust code.`,
      `Your insurance carrier is the third. Duct fires are one of the claims carriers watch most closely in restaurants. After a loss, the first thing an adjuster asks for is proof that the system was cleaned on schedule. A dated report with photos answers that question.`,
      `The fourth group is property management. Restaurants at UTC, in hotel buildings, and on hospital or university campuses usually have a landlord, an engineering team, or a facilities office that wants its own copy of every service report and a certificate of insurance from every vendor before the crew sets foot inside.`,
    ],
    list: [
      'City fire: full system cleaned, sticker current, filters seated, records on hand.',
      'County health: no grease dripping or pooling over food, clean filters and hood surfaces.',
      'Insurance: written proof of cleaning at the NFPA 96 interval for your cooking type.',
      'Property management: report copies, vendor insurance certificate, and approved work windows.',
    ],
  },
  {
    id: 'protected-coastline',
    title: 'Wash Water and a Protected Coastline',
    paras: [
      `This is the part of hood cleaning that matters more in La Jolla than almost anywhere else in the county. A hood cleaning produces a lot of hot water mixed with degreaser and the grease that comes off the hood, the duct, and the fan. Every gallon of it has to go somewhere.`,
      `Storm drains in the City of San Diego are not connected to a treatment plant. They carry water straight to the nearest creek, bay, or beach. In La Jolla that means the ocean, and the waters off La Jolla are a state designated Area of Special Biological Significance, a category where waste discharges are prohibited. It is the same water that draws divers to the Cove and kayakers to the sea caves.`,
      `The city also prohibits non storm water discharges to the storm drain system. Grease water hosed off a roof, dumped in an alley, or rinsed into a parking lot drain is exactly the kind of discharge those rules are written for, and the business whose name is on the building is the one who answers for it.`,
      `A proper crew sets up containment before any water touches the hood. Inside, the hood is wrapped in plastic that channels runoff into a container. On the roof, the fan area is set up so the wash water is caught instead of running across the roof and down the downspouts. The collected water is handled and disposed of the right way.`,
      `When you interview a hood cleaning company for La Jolla work, ask them to walk you through their containment in plain words, both inside and on the roof. If the answer is fuzzy, keep looking. Growing up working in restaurants, I saw what a careless crew leaves behind. Two blocks from the Cove, that is not something you want tied to your name.`,
    ],
  },
  {
    id: 'village-logistics',
    title: 'Village Logistics: Alleys, Parking, and Neighbors',
    paras: [
      `La Jolla Village packs a lot of kitchens into a small grid of streets. Many restaurants back up to narrow alleys that also serve deliveries, trash pickup, and the businesses next door. Street parking is tight at almost any hour, and plenty of buildings have apartments, condos, or offices above or beside the kitchen.`,
      `None of that stops a clean job, but it has to be planned. A hood cleaning truck carries the water, the pressure equipment, and the containment gear, and hoses have to run from the truck to the kitchen and up to the roof. The crew needs to know before the night of service where the truck can sit without blocking an alley, which door the hoses come through, and how the roof is reached.`,
      `Noise matters too. Overnight work in a mixed use building means keeping equipment placement and run times considerate of the people sleeping upstairs. That is a scheduling and setup question, and it is much easier to solve on the phone a week ahead than at midnight in the alley.`,
      `Older Village buildings can also hide surprises above the ceiling. Ductwork may take a longer or more crooked path than you would expect, with horizontal runs that collect grease and access panels that are missing or hard to reach. A first visit should include a walk through of the full duct path, and the report should say plainly if any section could not be reached and why.`,
    ],
  },
  {
    id: 'kitchen-types',
    title: 'Fine Dining, Beach Cafes, Hotels, and Campus Kitchens',
    paras: [
      `Because La Jolla mixes so many kitchen types, the right plan depends on which one you run.`,
      `Fine dining rooms in the Village often cook with wood fired ovens, wood grills, or heavy charbroiling. Solid fuel cooking puts the most grease and creosote into an exhaust system and carries the tightest NFPA 96 interval. These kitchens also run late, so service is almost always overnight with a hard finish before morning prep.`,
      `Beach and casual spots in La Jolla Shores tend to run fryers and flat tops hard all summer and slow down in winter. Their exhaust needs swing with the season, and the interval should be set for the busy months.`,
      `UTC restaurants and food court tenants usually work under mall property management. Expect approved vendor lists, insurance certificates, set work hours, and a copy of every report going to the landlord. Chain restaurants may also have brand standards that spell out the exhaust cleaning schedule.`,
      `Hotel and resort kitchens often run several cooking areas at once: a main kitchen, a banquet kitchen, a restaurant line, and sometimes a bar or pool grill. Each hood can have its own duct and fan. Our hotel guide covers how to schedule those without shutting down room service or a booked event.`,
      `Campus kitchens near Torrey Pines and UTC, on hospital, university, and research properties, usually feed people around the clock or on tight meal windows. They also come with security, badge access, escorts, and facilities teams that want everything documented. The cleaning is the same NFPA 96 work. The coordination is what takes planning, and it belongs in the first conversation, not the night of the job.`,
    ],
  },
  {
    id: 'intervals',
    title: 'How Often La Jolla Kitchens Need Service',
    paras: [
      `NFPA 96 sets the minimum interval for inspection and cleaning by the type and volume of cooking. The fire inspector and your insurance carrier both work from these numbers.`,
      `In La Jolla, the season matters. Summer crowds, holiday weeks, and event weekends can double what a kitchen cooks. Grease builds up based on how much you cook, not on the calendar, so set your schedule for your busiest stretch. If you are not sure, an inspection between cleanings will show how fast your system is loading up.`,
      `Grease filters sit between those two cleanings. Dirty filters let more grease into the duct and make every full cleaning harder. A filter exchange program swaps your filters for clean ones on a set schedule, which keeps the hood looking right for a health inspector and slows buildup in the duct.`,
    ],
    list: [
      'Solid fuel cooking (wood or charcoal): monthly.',
      'High volume cooking (charbroiling, woks, 24 hour operations): quarterly.',
      'Moderate volume cooking: semi annually.',
      'Low volume cooking (seasonal or light use kitchens): annually.',
    ],
  },
  {
    id: 'order-of-work',
    title: 'The Right Order of Work',
    paras: [
      `If you are booking both a deep cleaning and a hood cleaning, the order matters. Hood cleaning comes first. It moves a lot of hot water and loosened grease through the hood and duct, and even with good plastic some of it can find the line. Let the exhaust crew go first, then bring in the deep cleaning crew to detail the equipment, walls, and floors under a system that is already clean.`,
      `The same logic applies before an inspection. If you know a fire or health visit is coming, schedule exhaust service far enough ahead that the report and sticker are in hand, and leave time for your own team to reset the kitchen afterward. I know operators want fewer surprises, and getting the order right is one of the easiest ways to avoid them.`,
    ],
  },
  {
    id: 'checklist',
    title: 'A La Jolla Operator Checklist',
    paras: [
      `If you run a kitchen in La Jolla, this is the short list worth keeping in the office.`,
    ],
    list: [
      'Know your NFPA 96 interval and set it for your busiest season.',
      'Keep the latest service report with photos and a current sticker on the hood.',
      'Ask your hood cleaning company to explain wash water containment inside and on the roof.',
      'Make sure the duct and the rooftop fan appear on every report, not just the hood.',
      'Tell the crew about alley access, parking, roof access, and neighbors before the first visit.',
      'Send report copies to property management if you are in a mall, hotel, or campus.',
      'Keep filters on a regular exchange schedule between full cleanings.',
      'Book hood cleaning before your kitchen deep cleaning, not after.',
    ],
  },
]

const tocItems = [
  ...sections.map(s => ({ href: `#${s.id}`, label: s.title })),
  { href: '#faq', label: 'FAQ' },
]

const bodyP = { fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' } as const
const h2Style = { fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' } as const

export default function CommercialKitchenCleaningLaJollaCa() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>November 2026 · 12 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Commercial Kitchen Cleaning in La Jolla CA: What Operators Need to Know
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              La Jolla mixes Village fine dining, beach cafes, resort kitchens, and big campus cafeterias, all next to a protected coastline. Here is who inspects, how wash water has to be handled, how to plan around tight alleys, and how often each kitchen type needs service.
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
              {`Running a commercial kitchen in La Jolla comes with a few things most of San Diego does not deal with all at once: a coastline protected by state law, tight Village alleys with neighbors upstairs, a summer rush that changes how much you cook, and a mix of kitchens that runs from a twelve table bistro to a hospital cafeteria.`}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {`This guide is for owners, general managers, chefs, and facilities managers in La Jolla who want commercial kitchen cleaning done right, especially the part the fire code cares about most: the hood, filters, duct, and rooftop fan. Core Hood Cleaning is NFPA 96 certified and services kitchens across La Jolla. Our La Jolla service page lists the neighborhoods we cover. This post is about how to plan the work.`}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              {`No fluff, just what you need to know to stay clean, stay compliant, and keep your kitchen open.`}
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
              Ready to put your La Jolla kitchen on a proper schedule? See our <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)', fontWeight: 600 }}>commercial hood cleaning service</Link>, our <Link href="/services/filter-exchange" style={{ color: 'var(--rust)', fontWeight: 600 }}>grease filter exchange program</Link>, and our <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)', fontWeight: 600 }}>NFPA 96 inspection service</Link>, or visit the <Link href="/locations/la-jolla" style={{ color: 'var(--rust)', fontWeight: 600 }}>La Jolla service area page</Link>.
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Book Your La Jolla Kitchen</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>Overnight service, full wash water containment, and an NFPA 96 certified service report on every job. Serving La Jolla and all of San Diego County.</p>
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
                <Link href="/blog/commercial-kitchen-cleaning-coronado-ca" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Kitchen Cleaning in Coronado CA: An Operator Guide to Exhaust Compliance</Link>
                <Link href="/blog/hotel-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hotel Hood Cleaning San Diego: NFPA 96 for Resort and Hotel Kitchens</Link>
                <Link href="/blog/school-hospital-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ School and Hospital Hood Cleaning San Diego: NFPA 96 for Institutional Kitchens</Link>
                <Link href="/blog/hood-cleaning-frequency-cooking-type" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Frequency by Cooking Type: A Breakdown for San Diego Kitchens</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
