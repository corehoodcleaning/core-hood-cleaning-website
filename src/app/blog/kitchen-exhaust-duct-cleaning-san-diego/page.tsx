import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kitchen Exhaust Duct Cleaning San Diego: What Happens Above the Hood | Core Hood Cleaning',
  description: 'The hood is the part you can see. NFPA 96 covers the whole system, including the duct run and the rooftop fan. Here is what kitchen exhaust duct cleaning involves in San Diego and how to tell whether yours was actually done.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/kitchen-exhaust-duct-cleaning-san-diego' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Kitchen Exhaust Duct Cleaning San Diego: What Happens Above the Hood',
      description: 'The hood is the part you can see. NFPA 96 covers the whole system, including the duct run and the rooftop fan. Here is what kitchen exhaust duct cleaning involves in San Diego and how to tell whether yours was actually done.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-09-17',
      dateModified: '2026-09-17',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/kitchen-exhaust-duct-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is kitchen exhaust duct cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'Kitchen exhaust duct cleaning is the removal of grease from the ductwork that carries smoke and vapor from your hood to the roof. It covers the horizontal runs, the vertical risers, and every elbow and transition in between. NFPA 96 treats the duct as part of the exhaust system that must be cleaned to bare metal, which means a service limited to the hood canopy and filters has not met the standard.' }
        },
        {
          '@type': 'Question',
          name: 'Is duct cleaning included in a normal hood cleaning?',
          acceptedAnswer: { '@type': 'Answer', text: 'It should be, but it often is not. A full system service includes the hood, the plenum, the filters, the entire duct run, and the rooftop exhaust fan. Many low bid services clean only what is reachable from the kitchen floor and leave the duct untouched. Always ask what the quoted price covers and ask for photos of the duct interior after the work is done.' }
        },
        {
          '@type': 'Question',
          name: 'How do I know if my ductwork was actually cleaned?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ask for after photos taken from inside the duct at the access panels and from the rooftop fan opening. Clean duct is bare metal with a dull gray finish. If your service report lists only the hood or your photos are all from the kitchen side of the filters, the duct was almost certainly skipped. Your service report should also name any section that could not be reached.' }
        },
        {
          '@type': 'Question',
          name: 'What are duct access panels and does my kitchen need them?',
          acceptedAnswer: { '@type': 'Answer', text: 'Access panels are openings cut into the ductwork so a technician can physically reach and clean the interior. NFPA 96 requires access at every change in direction and at intervals along horizontal runs. Many older San Diego kitchens were built without them, which means whole sections of duct have never been cleaned. Panels can be added during a service visit and become a permanent part of your system.' }
        },
        {
          '@type': 'Question',
          name: 'How often does kitchen exhaust ductwork need to be cleaned?',
          acceptedAnswer: { '@type': 'Answer', text: 'The interval is the same as the rest of your system and is set by cooking volume and fuel type under NFPA 96. Most San Diego restaurants fall on a semi annual schedule. High volume operations, charbroilers, and solid fuel cooking move to quarterly or monthly. The duct is never cleaned on a separate schedule from the hood, because grease travels through both on the same cycle.' }
        },
        {
          '@type': 'Question',
          name: 'What happens if the duct run is never cleaned?',
          acceptedAnswer: { '@type': 'Answer', text: 'Grease accumulates along the interior walls and at every elbow where airflow slows. That buildup is fuel sitting inside a sealed metal chase that runs through your ceiling and often through other tenant spaces. A flare up on the cook line can ignite it, and a duct fire spreads through the building envelope rather than staying in the kitchen. Airflow also drops, which pushes heat and smoke back into your kitchen.' }
        },
        {
          '@type': 'Question',
          name: 'Does the rooftop exhaust fan need to be cleaned too?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. The fan housing, the blades, and the curb beneath it collect some of the heaviest grease in the entire system. NFPA 96 requires the fan to be cleaned and returned to operating condition, with the belt and bearings checked. A service that never goes to the roof has not cleaned your system, and the rooftop fan is the single most common area we find neglected on kitchens switching to us.' }
        },
        {
          '@type': 'Question',
          name: 'What is grease containment and why does my landlord care?',
          acceptedAnswer: { '@type': 'Answer', text: 'Grease containment is the absorbent system installed at the rooftop fan to catch grease that drips out of the fan housing before it reaches the roof membrane. Without it, grease pools on the roof, degrades the membrane, and voids roof warranties. Most San Diego commercial leases make the tenant responsible for that damage, which is why landlords ask about containment during lease renewals.' }
        },
        {
          '@type': 'Question',
          name: 'Can Core Hood Cleaning service the duct run at my San Diego kitchen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every service we perform is a full system clean covering the hood, plenum, filters, the complete duct run, and the rooftop exhaust fan, documented with before and after photos of each area and an NFPA 96 certificate. If your ductwork lacks access panels we can install them. Call (858) 361-2570 for a walkthrough and a quote with no obligation.' }
        },
      ]
    }
  ]
}

const tocItems = [
  { href: '#the-full-system', label: 'The Three Parts of a Kitchen Exhaust System' },
  { href: '#why-it-gets-skipped', label: 'Why the Duct Run Gets Skipped' },
  { href: '#what-nfpa-96-requires', label: 'What NFPA 96 Requires in the Duct' },
  { href: '#access-panels', label: 'Access Panels and Unreachable Duct' },
  { href: '#rooftop-fan', label: 'The Rooftop Exhaust Fan' },
  { href: '#grease-containment', label: 'Grease Containment and Roof Damage' },
  { href: '#how-to-tell', label: 'How to Tell If Your Duct Was Cleaned' },
  { href: '#our-service', label: 'What a Full System Service Covers' },
  { href: '#faq', label: 'FAQ' },
]

const faqs = [
  {
    q: 'What is kitchen exhaust duct cleaning?',
    a: 'Kitchen exhaust duct cleaning is the removal of grease from the ductwork that carries smoke and vapor from your hood to the roof. It covers the horizontal runs, the vertical risers, and every elbow and transition in between. NFPA 96 treats the duct as part of the exhaust system that must be cleaned to bare metal, which means a service limited to the hood canopy and filters has not met the standard.',
  },
  {
    q: 'Is duct cleaning included in a normal hood cleaning?',
    a: 'It should be, but it often is not. A full system service includes the hood, the plenum, the filters, the entire duct run, and the rooftop exhaust fan. Many low bid services clean only what is reachable from the kitchen floor and leave the duct untouched. Always ask what the quoted price covers and ask for photos of the duct interior after the work is done.',
  },
  {
    q: 'How do I know if my ductwork was actually cleaned?',
    a: 'Ask for after photos taken from inside the duct at the access panels and from the rooftop fan opening. Clean duct is bare metal with a dull gray finish. If your service report lists only the hood or your photos are all from the kitchen side of the filters, the duct was almost certainly skipped. Your service report should also name any section that could not be reached.',
  },
  {
    q: 'What are duct access panels and does my kitchen need them?',
    a: 'Access panels are openings cut into the ductwork so a technician can physically reach and clean the interior. NFPA 96 requires access at every change in direction and at intervals along horizontal runs. Many older San Diego kitchens were built without them, which means whole sections of duct have never been cleaned. Panels can be added during a service visit and become a permanent part of your system.',
  },
  {
    q: 'How often does kitchen exhaust ductwork need to be cleaned?',
    a: 'The interval is the same as the rest of your system and is set by cooking volume and fuel type under NFPA 96. Most San Diego restaurants fall on a semi annual schedule. High volume operations, charbroilers, and solid fuel cooking move to quarterly or monthly. The duct is never cleaned on a separate schedule from the hood, because grease travels through both on the same cycle.',
  },
  {
    q: 'What happens if the duct run is never cleaned?',
    a: 'Grease accumulates along the interior walls and at every elbow where airflow slows. That buildup is fuel sitting inside a sealed metal chase that runs through your ceiling and often through other tenant spaces. A flare up on the cook line can ignite it, and a duct fire spreads through the building envelope rather than staying in the kitchen. Airflow also drops, which pushes heat and smoke back into your kitchen.',
  },
  {
    q: 'Does the rooftop exhaust fan need to be cleaned too?',
    a: 'Yes. The fan housing, the blades, and the curb beneath it collect some of the heaviest grease in the entire system. NFPA 96 requires the fan to be cleaned and returned to operating condition, with the belt and bearings checked. A service that never goes to the roof has not cleaned your system, and the rooftop fan is the single most common area we find neglected on kitchens switching to us.',
  },
  {
    q: 'What is grease containment and why does my landlord care?',
    a: 'Grease containment is the absorbent system installed at the rooftop fan to catch grease that drips out of the fan housing before it reaches the roof membrane. Without it, grease pools on the roof, degrades the membrane, and voids roof warranties. Most San Diego commercial leases make the tenant responsible for that damage, which is why landlords ask about containment during lease renewals.',
  },
  {
    q: 'Can Core Hood Cleaning service the duct run at my San Diego kitchen?',
    a: 'Yes. Every service we perform is a full system clean covering the hood, plenum, filters, the complete duct run, and the rooftop exhaust fan, documented with before and after photos of each area and an NFPA 96 certificate. If your ductwork lacks access panels we can install them. Call (858) 361-2570 for a walkthrough and a quote with no obligation.',
  },
]

export default function KitchenExhaustDuctCleaningSanDiego() {
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
              Kitchen Exhaust Duct Cleaning San Diego: What Happens Above the Hood
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              The hood canopy is the part you can see and the part everyone cleans. The duct run and the rooftop fan are where the grease actually collects, and they are where most San Diego kitchens are quietly out of compliance.
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
              Growing up working in restaurants, I never once heard anybody talk about the ductwork. You looked at the hood. If the stainless was shiny and the filters came back clean, the job was done. Nobody climbed a ladder to check the elbow above the ceiling tile, and nobody walked the roof.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              That is exactly the blind spot the low bid services rely on. A hood canopy takes forty minutes. A full duct run and a rooftop fan take hours and require access panels, ladders, roof access, and containment. Charge for one and deliver the other and nobody notices, because the customer has no way to see the difference.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              This guide walks the whole system from the cook line to the roof. What the duct run actually is, what NFPA 96 requires inside it, why access panels decide whether your kitchen can be cleaned at all, what happens at the rooftop fan, and how to tell in about two minutes whether your last vendor did the work you paid for.
            </p>

            <h2 id="the-full-system" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Three Parts of a Kitchen Exhaust System</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Every commercial kitchen exhaust system in San Diego is built the same way, whether it sits over a taco shop flat top in Chula Vista or a hotel banquet line downtown. Three components, connected end to end, all carrying the same grease.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'The hood and plenum', detail: 'The canopy over your equipment and the chamber behind the filters where vapor first collects' },
                { item: 'The duct run', detail: 'The sealed metal chase carrying everything from the plenum up through the ceiling and out to the roof' },
                { item: 'The rooftop exhaust fan', detail: 'The motor, housing, and blades that pull the whole system and catch the heaviest residue' },
              ].map((row, i) => (
                <div key={row.item} style={{ display: 'flex', gap: '16px', padding: '16px 20px', borderTop: i === 0 ? 'none' : '1px solid var(--gray-light)' }}>
                  <div style={{ flex: '0 0 40%', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)' }}>{row.item}</div>
                  <div style={{ flex: 1, fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{row.detail}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Grease does not stop at the filters. Filters catch the heavy particulate, but vaporized fat passes straight through, cools as it travels, and condenses on whatever metal it touches next. That condensation happens along the entire duct run and it is worst at every point where airflow slows down, which means every elbow, every transition, and every horizontal section.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              By the time the air reaches the roof it has dropped most of its grease inside your building. The duct is not a pipe that stays clean because the hood is clean. It is the part of the system with the most surface area, the least visibility, and the highest fire load.
            </p>

            <h2 id="why-it-gets-skipped" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why the Duct Run Gets Skipped</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              When a kitchen calls us because their last service felt too cheap, the duct is where we find the answer. There are four reasons it gets left out, and only one of them is honest.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The first is time. Scraping and pressure washing a full duct run is the longest part of the job. A crew that wants three kitchens a night cannot do three full systems a night, so the duct is what gets cut.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The second is access. If the building has no duct access panels, there is no way to reach the interior without cutting new ones. Cutting panels takes skill and adds cost, so a vendor working a tight bid will simply report that the duct was inaccessible, or say nothing at all.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The third is the roof. Roof access requires keys, a ladder or hatch, sometimes property management coordination, and a willingness to work at height in the dark. Plenty of crews simply do not go up.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The fourth is that nobody checks. The hood is the only part of the system the operator ever looks at, so the hood is the only part that has to look right.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>The short version</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.7', margin: 0 }}>
                A price that seems too good is usually the price of a hood canopy, not a system. You are not saving money, you are buying a smaller job and a certificate that will not hold up.
              </p>
            </div>

            <h2 id="what-nfpa-96-requires" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What NFPA 96 Requires in the Duct</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 is the fire code standard governing commercial kitchen ventilation, and it does not treat the duct as optional. The standard requires that the entire exhaust system, from the hood through the duct to the fan discharge, be cleaned to bare metal at the interval set by your cooking volume and fuel type.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Bare metal is the operative phrase. The standard is not satisfied by reducing buildup or by wiping down what is reachable. If a measurable grease layer remains on the interior duct wall after service, the system has not been cleaned to code, regardless of how good the hood looks from the kitchen.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The standard also requires that any portion of the system that could not be reached be documented in writing on the service report. That requirement exists precisely because inaccessible duct is common, and because a fire marshal reviewing a fire needs to know whether the operator was told. A service report that never mentions an unreachable section is either a report on a fully cleaned system or an incomplete report, and inspectors read it that way.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              For a full breakdown of the standard itself, see our guide on <Link href="/blog/what-is-nfpa-96" style={{ color: 'var(--rust)', textDecoration: 'none', fontWeight: 600 }}>what NFPA 96 actually covers</Link>. For the documentation side, see our guide to the <Link href="/blog/hood-cleaning-certificate-of-compliance-san-diego" style={{ color: 'var(--rust)', textDecoration: 'none', fontWeight: 600 }}>certificate of compliance</Link>.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              One more point operators miss. The cleaning interval applies to the system, not to each component separately. You cannot run the hood quarterly and the duct annually to save money. Grease enters the duct on the same schedule it enters the hood, and the code sets one interval for the whole system.
            </p>

            <h2 id="access-panels" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Access Panels and Unreachable Duct</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              An access panel is a hinged or bolted opening cut into the side of the ductwork so a technician can physically get inside with a scraper, a brush, and a pressure washer. Without them, a duct run is a sealed metal tube with an opening at each end and no way to reach the middle.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 requires access at every change in direction and at regular intervals along horizontal runs. In practice that means a panel at each elbow, a panel where the duct turns from horizontal to vertical, and panels spaced along any long horizontal section above a ceiling.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Plenty of San Diego kitchens do not have them. Older buildings were fitted out before the requirement was enforced consistently, and tenant improvements done on a budget often reuse existing duct without adding access. We see it constantly in converted retail spaces and in strip center units that have cycled through three or four restaurant tenants.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              When a kitchen has no access panels, there are two honest paths. Install them, or document in writing that the duct interior could not be reached. The dishonest third path, which is to say nothing and hand over a certificate anyway, is the one that leaves an operator exposed when a claims adjuster starts asking questions.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Installing panels is a one time cost. They are cut, framed, gasketed, and sealed to hold up to the temperatures and the pressure washing, and once they exist your kitchen can be cleaned properly for as long as the building stands. If you are quoting hood cleaning and one bid is dramatically lower, ask both companies whether your duct even has access. The answer usually explains the gap.
            </p>

            <h2 id="rooftop-fan" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Rooftop Exhaust Fan</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              The rooftop fan is where the whole system terminates and it is the single most neglected component we find on kitchens switching over to us. When we lift a fan housing on a first clean, the grease underneath is frequently measured in inches rather than in film.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Servicing it properly means tilting or lifting the fan off the curb, cleaning the housing interior, cleaning each blade, cleaning the curb and the top of the duct riser beneath it, and setting the fan back down correctly with the belt tensioned and the bearings checked. A fan set back crooked will vibrate itself into a repair bill, so the reassembly matters as much as the cleaning.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A neglected fan costs you three ways. It loses airflow, which means heat and smoke back up into your kitchen and your line cooks work in a worse environment. It runs harder against the resistance, which shortens motor life. And it becomes the origin point for grease running down onto the roof.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              If your kitchen has been serviced for years and nobody ever asked you for roof access, your fan has never been cleaned. That is the fastest diagnostic there is, and operators are usually surprised by how obvious it becomes once they think about it.
            </p>

            <h2 id="grease-containment" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Grease Containment and Roof Damage</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Grease containment is the absorbent system installed at the base of the rooftop fan to catch what drips out of the housing before it reaches the roof surface. It is a small piece of equipment that prevents a very expensive problem.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Without containment, grease runs from the fan curb onto the roof membrane and spreads. Grease degrades most commercial roofing materials, and the staining alone is enough for a property manager to notice during an annual roof inspection. Once the membrane is compromised, you are looking at roof repair, and most roof warranties are explicitly voided by grease contamination.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              That bill lands on the tenant. Nearly every commercial lease in San Diego County makes the restaurant responsible for damage caused by its own equipment, and a grease stained roof is about as clearly attributable as damage gets. We have watched operators get handed five figure repair estimates at lease renewal over a containment system that would have cost a fraction of that.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Containment pads are replaced as part of routine service. If nobody has ever mentioned yours, either you do not have a system installed or nobody has been to your roof, and both are worth finding out about before your landlord does.
            </p>

            <h2 id="how-to-tell" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How to Tell If Your Duct Was Cleaned</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              You do not need to climb anything to audit your last service. Pull your most recent service report and run it against these five checks.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Component breakout', detail: 'The report names hood, plenum, filters, duct, and fan separately rather than saying cleaned hood' },
                { item: 'Duct interior photos', detail: 'After photos shot through an access panel showing bare metal, not photos taken from the kitchen' },
                { item: 'Rooftop photos', detail: 'The fan lifted off the curb, blades visible, containment in frame' },
                { item: 'Inaccessible notation', detail: 'Any section that could not be reached is named specifically, or the report confirms full access' },
                { item: 'Time on site', detail: 'A real full system service on a standard restaurant line is measured in hours, not in a single hour' },
              ].map((row, i) => (
                <div key={row.item} style={{ display: 'flex', gap: '16px', padding: '16px 20px', borderTop: i === 0 ? 'none' : '1px solid var(--gray-light)' }}>
                  <div style={{ flex: '0 0 40%', fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)' }}>{row.item}</div>
                  <div style={{ flex: 1, fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{row.detail}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              There is also a physical check anyone can do. Pull a filter out of the hood and look at the plenum behind it, then look up into the duct opening at the top of the plenum with a flashlight. If you see black buildup starting right where the duct begins, the duct was not touched. Clean duct at that opening looks dull gray and feels dry.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              One more signal worth naming. If your kitchen has gotten hotter over the last year, or smoke hangs on the line longer than it used to, that is usually airflow loss from accumulation somewhere above the hood. Operators tend to blame the fan motor. More often it is the duct restricting the air the fan can move.
            </p>

            <h2 id="our-service" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Full System Service Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Every job we run at Core is a full system clean. There is no hood only option and no partial scope, because a partial clean does not satisfy NFPA 96 and we are not going to hand you a certificate that says otherwise.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              We sheet and protect the cook line and the surrounding surfaces first. We pull and process the filters. We scrape and pressure wash the hood canopy and the plenum. We open every access panel on the duct run, scrape the heavy accumulation by hand, then pressure wash the interior to bare metal through the full run including the elbows and the vertical riser. We go to the roof, lift the fan, clean the housing, the blades, and the curb, service the containment, and set the fan back down with the belt and bearings checked.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Then we document it. Before and after photos of each component including the duct interior and the rooftop fan, an NFPA 96 certificate with full scope broken out, and a fresh sticker for the hood. If we find a section we could not reach, it goes on the report in writing and we tell you what it would take to fix it.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              If your ductwork has no access panels, we install them. If your rooftop fan has no hinge kit, we can add one so future service is faster and safer. Those are the two upgrades that convert a kitchen that cannot be properly cleaned into one that can be, permanently.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              We service restaurants, bars, breweries, hotels, schools, and institutional kitchens across San Diego County, from Oceanside and Carlsbad down through Mission Valley and Downtown to Chula Vista. Most of our work runs after close so nothing interrupts service. Learn more about our <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)', textDecoration: 'none', fontWeight: 600 }}>full system hood cleaning</Link>, our <Link href="/services/filter-exchange" style={{ color: 'var(--rust)', textDecoration: 'none', fontWeight: 600 }}>filter exchange program</Link>, and our <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)', textDecoration: 'none', fontWeight: 600 }}>NFPA 96 inspections</Link>.
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Not sure your duct run has ever been cleaned?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>We will walk your system, open the access panels, check the roof, and show you exactly what is up there. No pressure, no obligation, and you keep the photos either way.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>FAQ</h2>
            <div style={{ marginBottom: '8px' }}>
              {faqs.map(faq => (
                <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/what-happens-during-hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Actually Happens During a Commercial Hood Cleaning?</Link>
                <Link href="/blog/hood-cleaning-certificate-of-compliance-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Certificate of Compliance San Diego</Link>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Plain English Guide</Link>
                <Link href="/blog/choosing-hood-cleaning-company-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ How to Choose a Hood Cleaning Company in San Diego</Link>
                <Link href="/blog/filter-exchange-vs-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Filter Exchange vs Hood Cleaning</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
