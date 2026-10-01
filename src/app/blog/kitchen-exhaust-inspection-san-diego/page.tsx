import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kitchen Exhaust Inspection San Diego: What Inspectors Check and How to Pass | Core Hood Cleaning',
  description: 'A kitchen exhaust inspection checks the hood, filters, duct, rooftop fan, access panels, and clearances against NFPA 96. Here is who inspects, what they look for, and how to pass. Call (858) 361 2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/kitchen-exhaust-inspection-san-diego' },
}

const faqs = [
  {
    q: 'What is a kitchen exhaust inspection?',
    a: 'A kitchen exhaust inspection is a documented check of the full exhaust system over your cooking line: the hood canopy, grease filters, plenum, ductwork, access panels, rooftop fan, grease containment, and the clearances around all of it. It compares what is actually installed and how dirty it is against NFPA 96, the standard that fire marshals and insurers use. The output is a written report listing what passes and what needs correction.',
  },
  {
    q: 'Who inspects commercial kitchen exhaust systems in San Diego?',
    a: 'Several parties can. Your local fire authority checks exhaust systems as part of fire code enforcement, the County of San Diego environmental health office looks at sanitation and cleanliness during food facility inspections, and insurance carriers can send their own loss control reviewers. Landlords and franchisors also ask for proof. A certified third party such as Core Hood Cleaning can inspect and document your system between those visits. Enforcement details vary by jurisdiction, so confirm specifics with your local fire authority.',
  },
  {
    q: 'How often does a kitchen exhaust system need to be inspected?',
    a: 'NFPA 96 ties inspection frequency to cooking volume and fuel type, using the same schedule as cleaning. Solid fuel cooking is monthly. High volume operations such as 24 hour kitchens, charbroilers, and woks are quarterly. Typical restaurant cooking is semiannual. Low volume operations such as churches, day camps, and seasonal businesses are annual. If your system is dirtier than your schedule assumes, the schedule is wrong and needs to move up.',
  },
  {
    q: 'What is the difference between a hood cleaning and a kitchen exhaust inspection?',
    a: 'A hood cleaning removes grease from the system. An inspection judges the condition and compliance of the whole system, including parts a cleaning does not fix, such as missing access panels, damaged duct sections, poor fan clearance, and missing grease containment. You need both. Cleaning without inspection leaves problems undocumented, and inspection without cleaning just records a dirty system.',
  },
  {
    q: 'What happens if my kitchen fails a kitchen exhaust inspection?',
    a: 'A failed finding is usually written up as a correction notice with a deadline. Minor items such as a missing filter or an expired service sticker can often be fixed the same day. Heavy grease buildup, missing access, or a damaged duct section take longer. Repeated failures can lead to re inspection fees, permit problems, or an insurance carrier raising questions about your coverage. The fastest path is to fix the cause, get it documented, and send the paperwork to the inspector.',
  },
  {
    q: 'Does a kitchen exhaust inspection include the fire suppression system?',
    a: 'The fire suppression system has its own separate inspection, usually every six months, performed by a licensed fire protection company under a different standard. A kitchen exhaust inspection by Core Hood Cleaning documents what we can see at the hood, such as nozzle placement relative to the appliances and whether the suppression tag looks current, but it does not replace the licensed suppression service. Keep both sets of paperwork.',
  },
  {
    q: 'What should I have ready when an inspector arrives?',
    a: 'Keep your most recent hood cleaning service report, your compliance certificate, before and after photos, the date sticker on the hood, your suppression system service tag, and a record of filter exchanges. Make sure every access panel is reachable and the roof hatch or fan access is clear. Organized paperwork changes the tone of an inspection immediately.',
  },
  {
    q: 'Can I get an inspection without a cleaning?',
    a: 'Yes. A standalone inspection is useful before a scheduled fire marshal visit, when you open or take over a location, after equipment changes, or when an insurer asks for documentation. If the inspection finds heavy grease, we can schedule the cleaning right away so the report ends with a clean system and a certificate.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Kitchen Exhaust Inspection San Diego: What Inspectors Check and How to Pass',
      description: 'A kitchen exhaust inspection checks the hood, filters, duct, rooftop fan, access panels, and clearances against NFPA 96. Here is who inspects, what they look for, and how to pass. Call (858) 361 2570.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-10-01',
      dateModified: '2026-10-01',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/kitchen-exhaust-inspection-san-diego',
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
  { href: '#what-an-inspection-is', label: 'What a Kitchen Exhaust Inspection Is' },
  { href: '#who-inspects', label: 'Who Inspects Your Kitchen Exhaust in San Diego' },
  { href: '#what-inspectors-check', label: 'What Inspectors Actually Check' },
  { href: '#inspection-vs-cleaning', label: 'Inspection Versus Cleaning' },
  { href: '#how-often', label: 'How Often a Kitchen Exhaust System Gets Inspected' },
  { href: '#common-failures', label: 'Why Kitchens Get Written Up' },
  { href: '#how-to-prepare', label: 'How to Prepare Before an Inspector Walks In' },
  { href: '#after-a-failed-inspection', label: 'What to Do After a Failed Inspection' },
  { href: '#choosing-an-inspector', label: 'Choosing Who Inspects Your System' },
  { href: '#faq', label: 'FAQ' },
]

export default function KitchenExhaustInspectionSanDiego() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>October 2026 · 10 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Kitchen Exhaust Inspection San Diego: What Inspectors Check and How to Pass
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Fire marshals, health inspectors, insurance carriers, and landlords all ask about your kitchen exhaust system. Here is what a kitchen exhaust inspection covers in San Diego, who is doing the looking, and how to walk in ready.
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
              Growing up working in restaurants, I learned that nobody thinks about the exhaust system until someone with a clipboard asks about it. Then it is the only thing that matters. A kitchen exhaust inspection is the moment that clipboard meets your hood, your duct, and your paperwork.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              This guide explains what a kitchen exhaust inspection actually covers in San Diego, who is doing the inspecting, what gets kitchens written up, and how to prepare so the visit is boring. Boring is the goal. Core Hood Cleaning is NFPA 96 certified, and everything below is how we look at a system when we walk it.
            </p>

            <h2 id="what-an-inspection-is" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Kitchen Exhaust Inspection Is</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              A kitchen exhaust inspection is a structured check of every part of the system that pulls smoke, heat, and grease laden vapor away from your cooking line. That means the hood canopy over the equipment, the grease filters in the hood, the plenum behind them, the horizontal and vertical duct run, the rooftop exhaust fan, and the make up air that replaces what the fan removes.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The reference point is NFPA 96, the national standard for ventilation control and fire protection of commercial cooking operations. Fire marshals, insurance carriers, and most commercial landlords use it as the yardstick. When an inspector says your system is compliant, they mean it meets NFPA 96 as it applies to your equipment and cooking volume.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              An inspection is not the same thing as a cleaning, and it is not the same thing as a health department walkthrough. It is a documented assessment. The useful version ends with a written report that lists each component, what condition it was in, and what needs to change, signed by someone who is qualified to say so.
            </p>

            <h2 id="who-inspects" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Who Inspects Your Kitchen Exhaust in San Diego</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Operators are often surprised by how many different people care about the same hood. Each one looks for something a little different, and passing one does not automatically satisfy the others.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The fire authority for your city is the first one most operators think of. Fire inspectors enforce the fire code, which adopts NFPA 96, and they look at grease buildup, access, clearances, the date sticker on the hood, and whether your suppression system tag is current. Some visits are routine and some follow a complaint, a permit change, or an incident nearby.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              County environmental health inspectors focus on food safety and sanitation. They are not running a fire code inspection, but a greasy hood, dripping grease, or filters that are clearly overdue show up in their notes. A kitchen that looks neglected above the line gets a harder look everywhere else.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Your insurance carrier is the quiet third party. Many carriers ask for proof of hood cleaning and inspection at renewal, and nearly all of them ask for it after a fire claim. Landlords and franchisors add a fourth layer, often through lease language that requires current certificates on file.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Then there is the independent inspection. This is a certified third party such as Core Hood Cleaning documenting your system on your schedule, before any official visit. It gives you a clean record, catches problems while they are cheap, and produces the paperwork every other party eventually asks for. Enforcement details differ between jurisdictions, so confirm specifics with your local fire authority.
            </p>

            <h2 id="what-inspectors-check" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Inspectors Actually Check</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Walk the system from the cooking line to the roof and you have the inspection checklist. Here is what gets attention at each stop.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The hood canopy. Inspectors look at the interior surfaces for grease film, drips, and damage. They check that the hood is the right size for the equipment under it and that the edges, seams, and mounting are intact. Grease that has pooled or dripped outside the hood is an instant flag.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The grease filters. Filters should be the correct type for the hood, installed in the proper position, undamaged, and clean enough to do their job. Missing filters, bent filters, and filters with blocked baffles all get written up. This is where a regular filter exchange program earns its keep, because it keeps this part of the system clean all month. Our filter exchange service is built for exactly that.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The plenum and duct run. This is the part nobody sees and the part that matters most for fire spread. Inspectors want to know whether grease has built up inside the plenum and along the duct, and whether the duct has been cleaned back to bare metal, which is the working standard in the industry. If the duct cannot be reached, it cannot be cleaned or inspected, which brings us to the next item.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Access panels. NFPA 96 expects access to the duct so it can be cleaned and checked. Missing panels, panels that were painted shut, panels blocked by ceiling tile or equipment, and long duct runs with no access at the turns all get cited. We cover how access decides whether a kitchen can be cleaned at all in <Link href="/blog/kitchen-exhaust-duct-cleaning-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>our guide to kitchen exhaust duct cleaning in San Diego</Link>.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              The rooftop fan. Inspectors check the fan for grease overflow, a working hinge kit so it can be tilted for cleaning, a grease containment system that actually contains grease, and a roof surface that is not stained or soaked. A fan with grease running down the roof is one of the most common reasons a kitchen gets a correction notice.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Clearances. Ductwork has to keep a safe distance from combustible material unless it is a listed, rated assembly. As a general rule that distance is measured in inches, not feet, and it is checked where the duct passes through walls, ceilings, and the roof. Renovations are the usual cause of problems here, because someone built something near the duct after the original install.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Make up air and balance. A system that cannot pull enough air will smoke out the line and push grease onto surfaces it should never touch. Inspectors may note obvious airflow problems, missing make up air, or a fan that is clearly underperforming.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Documentation and signage. The date sticker on the hood, the service report, the compliance certificate, and the suppression tag all count. A clean system with no paperwork is still a hard conversation. A system with paperwork that does not match what the inspector sees is a harder one.
            </p>

            <h2 id="inspection-vs-cleaning" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Inspection Versus Cleaning</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              People ask whether they need an inspection if they already pay for hood cleaning. The short answer is that they do different jobs.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              A cleaning removes grease. An inspection tells you whether the system is built, maintained, and documented the way NFPA 96 expects. Our full system hood cleaning includes a compliance certificate and a date sticker on the hood, which covers the paperwork for the cleaning itself. A standalone NFPA 96 inspection goes further and looks at the system as a whole, including components a cleaning does not touch.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Most kitchens do both on a schedule. The cleaning keeps grease below the level that causes fires. The inspection keeps the rest of the system honest. You can read the full scope of each on our <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>hood cleaning service page</Link> and our <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>NFPA inspection service page</Link>.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              One more reason to separate them: a cleaning company grading its own work is not the same as an independent inspection. When the stakes are an insurance claim or a failed fire inspection, independent documentation carries more weight.
            </p>

            <h2 id="how-often" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How Often a Kitchen Exhaust System Gets Inspected</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              NFPA 96 sets inspection frequency by what you cook and how much of it you cook, and it uses the same schedule as cleaning. Solid fuel cooking is monthly. High volume operations such as 24 hour kitchens, charbroilers, and woks are quarterly. Typical restaurant cooking is semiannual. Low volume operations such as churches, day camps, and seasonal businesses are annual.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Those are minimums. A busy taqueria with two charbroilers does not belong on the same schedule as a coffee shop with a panini press, even if both technically fall in the same category on paper. If the system is visibly dirty before your next scheduled visit, the schedule is wrong, not the system.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Certain events also trigger an inspection no matter where you are on the calendar. Opening a new location, taking over an existing kitchen, changing equipment under the hood, modifying the duct, or having a fire or near miss should all be followed by an inspection before you carry on as normal.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              If you are unsure where your kitchen sits, <Link href="/blog/how-often-should-restaurant-hood-be-cleaned" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>our guide on how often a restaurant hood should be cleaned</Link> walks through the volume categories in detail.
            </p>

            <h2 id="common-failures" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Kitchens Get Written Up</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              After enough inspections, the same findings show up again and again. Almost none of them are surprises. They are the result of a system that was not looked at often enough.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Heavy grease buildup in the duct is the number one cause. It usually comes from a cleaning that stopped at the part of the system that was easy to reach. Grease that sits in an unreachable duct run does not go away. It just gets thicker.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Missing or blocked access panels are next. Kitchens remodel, ceilings go up, and nobody remembers that the duct needed a door. Inspectors do not care how it happened. If the duct cannot be reached, it fails.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Rooftop grease is the third. A fan with no containment, a full or leaking catch tray, or grease flowing across the roof are all visible from the roof hatch, and an inspector will go look.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Expired or missing documentation rounds it out. An out of date sticker, no service report, or a suppression tag from last year turns a passing system into a failing visit. This is the easiest category to fix and the most painful to get wrong.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Finally, clearance problems and unlisted modifications show up in older buildings and after remodels. These are rarely cheap to fix, which is why catching them in a friendly inspection beats catching them in an official one.
            </p>

            <h2 id="how-to-prepare" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How to Prepare Before an Inspector Walks In</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Preparation is mostly paperwork and access. Neither takes long if you do it before the day.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Pull your most recent service report and compliance certificate and put them where the manager on duty can find them in under a minute. Check the date sticker on the hood. Confirm your suppression system tag is current and that the service company left a record.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Walk the line and look up. Are the filters all there and seated correctly? Is there grease dripping from the hood edge? Are the access panels reachable, or has something been stacked in front of them? Is the roof hatch clear and the fan area free of stored items?
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Climb to the roof if you can do it safely, or ask your cleaning provider to send photos. Look at the fan, the containment, and the roof surface under it. If you see grease where it does not belong, call before the inspector does.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Make sure your staff knows the basics. The person who greets the inspector should know where the paperwork is, who the service company is, and when the system was last cleaned. A confident answer changes how the rest of the visit goes.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              If you are not sure the system will pass, schedule an independent inspection first. It costs less than a correction notice and it gives you time to fix what it finds.
            </p>

            <h2 id="after-a-failed-inspection" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What to Do After a Failed Inspection</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              A failed finding is not a catastrophe if you handle it in the right order. Start by reading the notice carefully and writing down the deadline. Most correction notices give a window, and the clock starts when the inspector signs.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Next, separate the findings into two groups. Maintenance items such as heavy grease, dirty filters, and an expired sticker can usually be solved with a cleaning and fresh documentation. Structural items such as missing access panels, damaged duct, or clearance violations need a contractor, and may need permits.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Get the maintenance work done first and document it with before and after photos and a signed service report. Then send the paperwork to the inspector before the deadline rather than waiting for the re inspection. Showing up with proof tends to shorten the process.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              For structural items, get the right trade involved quickly. We document what we find and advise on next steps, but we are a cleaning and inspection company, so duct repairs and suppression work go to the proper licensed contractor. Ask for written confirmation when the work is done so your file shows the whole story.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              If you are in the middle of a failed inspection right now and need a fast turnaround, read <Link href="/blog/emergency-hood-cleaning-san-diego" style={{ color: 'var(--rust)', textDecoration: 'underline' }}>our guide on emergency hood cleaning in San Diego</Link> and call us.
            </p>

            <h2 id="choosing-an-inspector" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Choosing Who Inspects Your System</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Not every provider who offers an inspection is doing the same thing. A few questions separate the real ones from the rest.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Ask whether the technicians are NFPA 96 certified, and ask to see it. Ask what the written report looks like and whether it lists findings by component with photos. Ask whether the compliance certificate and sticker are accepted by local fire authorities and carriers. Ask what happens when a deficiency is found, and whether they will tell you plainly when something is outside their scope.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Be wary of a provider who inspects the parts they can see from the floor and signs off. A real inspection means going to the roof, opening the access panels, and putting eyes on the duct. If a vendor cannot tell you how many access panels your system has, they have not looked.
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              We built our process around the way fire marshals actually look at a kitchen. Every inspection ends with a written report, a compliance certificate, and a sticker on the hood, and if we find something we cannot fix, we tell you straight. I know operators want a clear answer and a clean record, and that is what a good inspection should deliver.
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Need a Kitchen Exhaust Inspection?</p>
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
                <Link href="/blog/hood-cleaning-certificate-of-compliance-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Certificate of Compliance San Diego: What Inspectors Actually Ask For</Link>
                <Link href="/blog/kitchen-exhaust-duct-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Kitchen Exhaust Duct Cleaning San Diego: What Happens Above the Hood</Link>
                <Link href="/blog/health-inspection-checklist-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ San Diego Restaurant Health Inspection Checklist</Link>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96?</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
