import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Fire Code Hood Cleaning San Diego: What the Fire Code Requires and How to Stay Compliant | Core Hood Cleaning",
  description: "What the California Fire Code and NFPA 96 require for hood cleaning in San Diego: cleaning intervals, who enforces, documentation, and what happens when a kitchen falls short. Call (858) 361-2570.",
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/fire-code-hood-cleaning-san-diego' },
}

const faqs = [
  {
    q: "What does the fire code require for hood cleaning in San Diego?",
    a: "The California Fire Code adopts NFPA 96, which requires commercial cooking exhaust systems to be inspected on a schedule and cleaned at set intervals based on cooking type and volume. The whole system has to be cleaned, including the hood, filters, duct, and rooftop fan, and access must exist to reach it. Your local fire authority enforces it, so confirm specifics for your address.",
  },
  {
    q: "How often does the fire code require hood cleaning?",
    a: "NFPA 96 sets monthly cleaning for solid fuel cooking, quarterly for high volume cooking such as charbroiling, wok cooking, and twenty four hour operations, semiannual for moderate volume cooking, and annual for low volume cooking. Those are maximum gaps. If grease builds up past the allowed point sooner, the system needs cleaning sooner.",
  },
  {
    q: "Who enforces the fire code for kitchen exhaust in San Diego?",
    a: "The fire department or fire protection district that covers your address. In the city of San Diego that is San Diego Fire Rescue. Other cities and districts in the county have their own fire authorities, and some amend the state code, so rules can differ from one city to the next.",
  },
  {
    q: "Is the fire code the same as the health code?",
    a: "No. The fire code is enforced by the fire authority and focuses on fire prevention, including grease buildup, access, clearances, and suppression systems. The health code is enforced by County environmental health and focuses on food safety and sanitation. A kitchen has to satisfy both, and passing one does not satisfy the other.",
  },
  {
    q: "What do I need to show a fire inspector?",
    a: "Have your latest hood cleaning service report, the certificate of compliance from your cleaning company, a current service sticker on the hood, and a fire suppression system tag dated within the last six months. Reports that name each component cleaned and note any areas that could not be reached carry the most weight.",
  },
  {
    q: "Can a fire inspector shut down my kitchen over a dirty hood?",
    a: "Yes, in serious cases. A fire authority can red tag a kitchen when it finds a hazard such as heavy grease buildup or a non working suppression system, and cooking can be stopped until the problem is corrected. Minor findings usually bring a correction notice and a follow up visit. Outcomes depend on the jurisdiction and the severity.",
  },
  {
    q: "Does a filter exchange satisfy the fire code?",
    a: "Not by itself. A filter exchange replaces the grease filters on a schedule and is good maintenance, but the fire code expects the entire exhaust system to be cleaned, including the plenum, duct, and fan. Most kitchens use a filter exchange between full cleanings, not in place of them.",
  },
  {
    q: "What if my landlord or insurance company asks for proof of fire code compliance?",
    a: "Give them your latest service report and certificate of compliance. Check your lease and your insurance policy for the exact requirements, because many require the system to be maintained to NFPA 96 and documented. Core Hood Cleaning provides a written report, a certificate, and a hood sticker with every visit.",
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: "Fire Code Hood Cleaning San Diego: What the Fire Code Requires and How to Stay Compliant",
      description: "What the California Fire Code and NFPA 96 require for hood cleaning in San Diego: cleaning intervals, who enforces, documentation, and what happens when a kitchen falls short. Call (858) 361-2570.",
      datePublished: '2026-10-09',
      dateModified: '2026-10-09',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/fire-code-hood-cleaning-san-diego',
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

const tocItems = [
  { href: '#why-fire-code', label: "Why Hood Cleaning Falls Under the Fire Code" },
  { href: '#what-the-code-says', label: "What the Fire Code Actually Says" },
  { href: '#who-enforces', label: "Who Enforces the Fire Code in San Diego" },
  { href: '#cleaning-intervals', label: "Cleaning Intervals the Fire Code Sets" },
  { href: '#what-clean-means', label: "What Clean Means Under the Fire Code" },
  { href: '#documentation', label: "The Paperwork Inspectors Ask For" },
  { href: '#suppression', label: "Fire Suppression Is Part of the Same Picture" },
  { href: '#violations', label: "How Kitchens Fall Out of Compliance" },
  { href: '#consequences', label: "What Happens When You Do Not Comply" },
  { href: '#staying-compliant', label: "How to Stay Compliant Without Thinking About It" },
  { href: '#how-core-helps', label: "How Core Hood Cleaning Handles Fire Code Work" },
  { href: '#faq', label: 'FAQ' },
]

export default function FireCodeHoodCleaningSanDiego() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>October 2026 · 11 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Fire Code Hood Cleaning San Diego: What the Fire Code Requires and How to Stay Compliant
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              The fire code is the reason your hood gets cleaned, and it is the reason a fire inspector can shut you down. Here is what the fire code actually requires for hood cleaning in San Diego, who enforces it, and how to keep your kitchen on the right side of it.
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

            <h2 id="why-fire-code" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Hood Cleaning Falls Under the Fire Code</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Most restaurant owners think of hood cleaning as a housekeeping chore. The fire code treats it as fire prevention. That difference matters, because housekeeping gets done when there is time and fire prevention gets done on a schedule that someone can check.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Cooking with oil, fat, and animal products puts grease vapor into the air. The hood pulls that vapor into the filters, the plenum, the duct, and the rooftop fan. Every hour of cooking leaves a little more behind. Grease is fuel. If a flare up on the line reaches a greasy hood, the fire has somewhere to go, and it can travel through the duct into the roof and the ceiling space before anyone gets an extinguisher off the wall.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              That is why fire codes regulate this. The rules are not about how the hood looks. They are about how much fuel is sitting in a path that can carry flame through your building. Growing up working in restaurants, I saw kitchens where the hood looked fine from the floor and the duct above it was coated. The fire code is written for that second kitchen.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Core Hood Cleaning is NFPA 96 certified, and this guide lays out how the fire code applies to a San Diego commercial kitchen in plain terms. It is general information, not legal advice. Your local fire authority has the final word on how it applies to your building.
            </p>

            <h2 id="what-the-code-says" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What the Fire Code Actually Says</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              There are two layers. The first is the California Fire Code, which is the state version of the model fire code and is adopted and sometimes amended by each city and fire district. The commercial kitchen hood and duct section of that code, commonly cited as Section 609, covers how exhaust systems for cooking operations must be built, maintained, and cleaned.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The second layer is NFPA 96, the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations. The fire code points to NFPA 96 for the detailed requirements. When an inspector cites you, they are usually citing the fire code section that adopts NFPA 96, and the substance they check comes straight from the standard.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Here is what that adds up to for a working kitchen. The exhaust system must be inspected on a schedule. Hoods, grease removal devices, ducts, and fans must be cleaned to bare metal when grease builds up past the allowed point or on the set interval. Access must exist so the whole system can be reached. Clearances to combustible material must be kept. And the fire suppression system tied to the hood must be serviced and tagged.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              If you want the standard itself explained in detail, read our guide to <Link href="/blog/what-is-nfpa-96" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>what NFPA 96 is</Link>. This page is about the fire code side: who enforces it, how often it applies, and what you need to show.
            </p>

            <h2 id="who-enforces" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Who Enforces the Fire Code in San Diego</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The city or district fire department that covers your address is the enforcement authority. In the city of San Diego that is San Diego Fire Rescue. Other cities in the county, such as Carlsbad, Oceanside, Escondido, Chula Vista, and El Cajon, have their own fire departments or fire marshals, and some areas are served by a fire protection district. Which one applies to you depends on where the kitchen sits, not on where your company is based.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              That matters because local rules differ at the edges. A city can amend the state fire code, set its own inspection cycle, or require a specific form of documentation. One jurisdiction may want a copy of the service report on file. Another may only ask for it when they walk in. Do not assume the rules in the next city over match yours.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              What stays the same is the standard they measure against. Whether the inspector is from San Diego Fire Rescue or a smaller district, they are looking at grease buildup, access, clearances, the service sticker on the hood, and your suppression system tag. We walk through what each party looks at in <Link href="/blog/kitchen-exhaust-inspection-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>our kitchen exhaust inspection guide</Link>.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              County environmental health is a separate agency with a separate job. They look at food safety and sanitation, not the fire code. A greasy hood can still show up in their notes, but a fire code citation comes from the fire authority. We cover the health side in our <Link href="/blog/health-inspection-checklist-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>health inspection checklist</Link>.
            </p>

            <h2 id="cleaning-intervals" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cleaning Intervals the Fire Code Sets</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              NFPA 96 ties the cleaning schedule to what you cook and how much of it you cook. The fire code adopts that table. The inspection frequency for the exhaust system follows the same logic. Here is how it breaks down.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Monthly cleaning applies to systems serving solid fuel cooking, such as wood or charcoal. Solid fuel makes heavy, sticky residue and the standard treats it as the highest risk.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Quarterly cleaning applies to systems serving high volume cooking. That means twenty four hour operations, charbroiling, and wok cooking. If your line runs hard all day and the grill is the center of it, this is usually your bucket.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Semiannual cleaning applies to systems serving moderate volume cooking. This is the interval most full service restaurants end up on.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Annual cleaning applies to systems serving low volume cooking, such as day camps, seasonal businesses, and churches. Few restaurants qualify.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Those are the maximum gaps between cleanings. They are not a target. If an inspector finds grease past the allowed buildup point before the interval is up, the system needs cleaning anyway. A busy kitchen that fries all day on a semiannual schedule can fail an inspection three months in. We break the intervals down by cooking type in <Link href="/blog/hood-cleaning-frequency-cooking-type" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>our hood cleaning frequency guide</Link>, and in <Link href="/blog/how-often-should-restaurant-hood-be-cleaned" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>how often a restaurant hood should be cleaned</Link>.
            </p>

            <h2 id="what-clean-means" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Clean Means Under the Fire Code</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The standard does not say clean enough to look good. It says the hood, filters, duct, and fan must be cleaned to remove grease and the system must not be left with deposits above the limit. In practice, a qualified cleaner works to bare metal on the surfaces they can reach and documents what they could not.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              A proper job covers the whole path. The hood canopy and the plenum behind the filters. The filters themselves. The horizontal and vertical duct run. The rooftop exhaust fan, its housing, and the grease containment. Wiping the front of the hood and swapping filters is a filter exchange, not a full cleaning. Both have a place, and we explain where the line is in <Link href="/blog/filter-exchange-vs-hood-cleaning-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>filter exchange versus hood cleaning</Link> and on our <Link href="/services/filter-exchange" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>filter exchange service page</Link>.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              This is where a lot of kitchens get caught. They have a vendor who cleans what is visible from the floor and never goes to the roof. The fire code does not care how the kitchen looks from the dining room. It cares about the duct, and the duct is where fires spread. Our guide to <Link href="/blog/kitchen-exhaust-duct-cleaning-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>kitchen exhaust duct cleaning</Link> shows what happens above the hood and why access panels decide whether a duct can be cleaned at all.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              When the work is done, the cleaner should place a service sticker on the hood showing the date and the next due date, and give you a written report. That sticker and that report are what an inspector looks for first.
            </p>

            <h2 id="documentation" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Paperwork Inspectors Ask For</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The fire code is easy to follow when you can prove it. When you cannot prove it, you are arguing with an inspector from a weak spot. Keep these on hand.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              A service report from your last cleaning, with the date, the scope, the areas cleaned, and any areas that could not be reached. A certificate of compliance, or equivalent written statement, from the company that did the work. The hood sticker, current and readable. Your fire suppression system service tag, dated within the last six months. And any notes about deficiencies that were found and how they were fixed.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Reports that say only that the hood was cleaned are weak. A good report names each component. If the fan was not touched, it says so, and it says why. We lay out what a strong report and certificate contain in <Link href="/blog/hood-cleaning-certificate-of-compliance-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>our certificate of compliance guide</Link>.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Keep records for as long as your fire authority and your insurance carrier require. If you do not know how long that is, ask both. Many operators keep several years in a binder at the kitchen and a digital copy somewhere else.
            </p>

            <h2 id="suppression" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Fire Suppression Is Part of the Same Picture</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The fire code does not look at your hood in isolation. The wet chemical suppression system that sits behind the hood is part of the same inspection. It is serviced on its own schedule, usually every six months by a licensed fire protection company, and it gets a tag.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The two systems affect each other. Grease on the nozzles and in the piping paths can keep a suppression system from discharging the way it was designed to. A dirty duct also means more fuel for a fire that gets past the suppression system. Cleaning and suppression service are different trades, and you need both current.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              One practical point. Some suppression companies will ask that the hood be cleaned before they service the system, and some cleaners will ask that the system be tagged before they sign off. Plan the order. We cover the relationship in <Link href="/blog/commercial-kitchen-fire-suppression" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>how hood cleaning affects your fire suppression system</Link>.
            </p>

            <h2 id="violations" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How Kitchens Fall Out of Compliance</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              After walking a lot of kitchens, the same few problems come up again and again.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Overdue cleaning. The sticker date has passed, or the interval was set for a lower volume than the kitchen actually runs. This is the most common citation because it is the easiest one for an inspector to see.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Grease past the allowed level. The cleaning is current on paper, but the duct or fan has built up faster than the schedule assumed. Heavy fryer use, a new menu, or added hours can do it.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              No access. Duct access panels are missing, painted shut, or blocked by equipment or ceiling work. If the duct cannot be reached, it cannot be cleaned, and it cannot be inspected.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Clearance problems. Shelving, storage, or construction has put combustible material too close to the duct or hood.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Missing or expired suppression tag. This one can bring a kitchen to a stop quickly, because many fire authorities will not allow cooking without a working suppression system.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Missing documents. The work was done, but the inspector asks for the report and nobody can find it. That turns a clean kitchen into a paperwork problem.
            </p>

            <h2 id="consequences" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Happens When You Do Not Comply</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Consequences vary by jurisdiction and by how serious the finding is. A minor issue may bring a correction notice and a follow up visit. A serious one can bring a red tag, which stops cooking until the problem is fixed. Fire authorities can also require work within a set time, and repeat problems can lead to more scrutiny of the whole building.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Insurance is the quieter risk. Many policies require the cooking exhaust system to be maintained to NFPA 96. If a fire happens and the system was overdue, the carrier may question the claim. We are not insurance advisors, so read your own policy and ask your agent. But we have seen operators surprised by how specific the language is.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Landlords and franchisors add pressure of their own. Leases often require the tenant to keep the exhaust system compliant and to provide proof. A missed cleaning can be a lease default, not just a fire code issue.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              If you are already red tagged or facing a deadline, we handle that kind of work every week. See <Link href="/blog/emergency-hood-cleaning-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>emergency hood cleaning in San Diego</Link> for how same day jobs work.
            </p>

            <h2 id="staying-compliant" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How to Stay Compliant Without Thinking About It</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Compliance is a system, not a one time job. Kitchens that never have trouble tend to do the same handful of things.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Set the schedule by your real cooking volume, not by what the last vendor assumed. If your menu or hours change, revisit it. Put the next due date on a calendar and on the sticker. Keep one binder, or one shared folder, with every service report, certificate, and suppression tag. Walk the roof, or have your cleaner walk it, so you know the fan and containment are in shape. Keep access panels clear. Keep storage away from the duct and the hood.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Choose a vendor who goes to the roof, writes a real report, and answers the phone when something comes up. Our guide to <Link href="/blog/choosing-hood-cleaning-company-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>choosing a hood cleaning company in San Diego</Link> has the questions to ask.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              If your kitchen is a restaurant, you can see the broader picture in our <Link href="/blog/restaurant-compliance-san-diego-guide" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>restaurant compliance guide</Link>. For the full service, read our <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>hood cleaning service page</Link>. For a documented check of the whole system, see our <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>NFPA inspection service</Link>.
            </p>

            <h2 id="how-core-helps" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How Core Hood Cleaning Handles Fire Code Work</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              I know operators want two things: for the inspector to leave without a write up, and to not lose a day of sales to get there. That is how we plan the work. We schedule around your hours, including after hours, and we clean the full system from the hood to the rooftop fan.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Every visit ends with a written report, a service sticker on the hood, and a certificate you can hand to an inspector, an insurance agent, or a landlord. If we find something we cannot fix in a cleaning, such as a missing access panel or a clearance issue, we tell you in writing so it does not catch you off guard later.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              We are NFPA 96 certified and we serve restaurants, bars, hotels, schools, commissaries, and food trucks across San Diego County. If you are not sure where your kitchen stands, we can start with an inspection and a plain list of what needs attention.
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Need Fire Code Compliant Hood Cleaning?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning is NFPA 96 certified and serves restaurants across San Diego County. Written report, compliance certificate, and hood sticker with every visit.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>FAQ</h2>
            <div style={{ marginBottom: '48px' }}>
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
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Restaurant Owner&apos;s Plain English Guide</Link>
                <Link href="/blog/kitchen-exhaust-inspection-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Kitchen Exhaust Inspection San Diego: What Inspectors Check and How to Pass</Link>
                <Link href="/blog/hood-cleaning-certificate-of-compliance-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Certificate of Compliance San Diego</Link>
                <Link href="/blog/restaurant-compliance-san-diego-guide" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ The Complete Guide to Restaurant Compliance in San Diego County</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
