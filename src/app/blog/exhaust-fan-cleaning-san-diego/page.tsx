import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Exhaust Fan Cleaning San Diego: Rooftop Fan Service for Commercial Kitchens | Core Hood Cleaning",
  description: "Exhaust fan cleaning in San Diego by an NFPA 96 certified crew. What fan cleaning includes, how often it is required, hinge kits, grease containment, and documentation. Call (858) 361-2570.",
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/exhaust-fan-cleaning-san-diego' },
}

const faqs = [
  {
    "q": "How often does a commercial kitchen exhaust fan need to be cleaned in San Diego?",
    "a": "It follows the same NFPA 96 schedule as the rest of the system. Monthly for solid fuel, quarterly for high volume cooking like charbroiling and wok, semiannually for moderate volume, and annually for low volume. A fan that is dripping or coated should be cleaned sooner."
  },
  {
    "q": "Is exhaust fan cleaning included in a regular hood cleaning?",
    "a": "It should be, but it depends on the vendor. A full NFPA 96 service covers the hood, filters, duct, and fan. Check your report for a separate fan line item and photos of the blades and housing. If they are missing, the roof was probably skipped."
  },
  {
    "q": "What is the difference between exhaust hood cleaning and exhaust fan cleaning?",
    "a": "Exhaust hood cleaning covers the canopy and filters over the cooking line. Exhaust fan cleaning covers the rooftop fan at the end of the duct, including the blades, housing, curb, and grease containment. Both are parts of one exhaust system and both fall under NFPA 96."
  },
  {
    "q": "Can you clean a fan that has no hinge kit?",
    "a": "Yes, in most cases, but it takes longer and carries more risk because the motor assembly has to be handled by hand. We recommend adding a hinge kit so every future cleaning is faster and safer, and so the fan meets the accessibility expectation in NFPA 96."
  },
  {
    "q": "Will fan cleaning damage my roof?",
    "a": "It should not. We lay roof protection, contain all runoff, and haul away the waste. The damage people see usually comes from vendors who wash the fan with no containment and let grease water run across the membrane."
  },
  {
    "q": "What happens if my exhaust fan is not cleaned?",
    "a": "Grease builds on the blades and housing, the fan loses airflow, bearings and belts wear out early, grease drips onto the roof, and a grease fire in the duct has more fuel at the roof line. It can also cause a failed inspection or a problem with your insurance carrier."
  },
  {
    "q": "Do you service exhaust fans across San Diego County?",
    "a": "Yes. We cover Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee."
  },
  {
    "q": "What documentation do I get after the fan is cleaned?",
    "a": "You receive a written service report, before and after photos including the fan interior and the roof, an NFPA 96 certificate, and a dated sticker on the hood. Keep it on site for the fire marshal or your insurer."
  }
]

const tocItems = [{"href": "#why-the-fan-matters", "label": "Why the Rooftop Fan Matters"}, {"href": "#what-grease-does", "label": "What Grease Does to a Fan"}, {"href": "#what-nfpa-96-says", "label": "What NFPA 96 Says About Exhaust Fans"}, {"href": "#how-we-clean", "label": "How a Proper Fan Cleaning Works"}, {"href": "#hinge-kits", "label": "Hinge Kits and Fan Access"}, {"href": "#grease-containment", "label": "Grease Containment and Your Roof"}, {"href": "#how-often", "label": "How Often the Fan Needs Cleaning"}, {"href": "#warning-signs", "label": "Warning Signs Your Fan Is Overdue"}, {"href": "#vendor-check", "label": "How to Check Your Last Vendor"}, {"href": "#what-you-receive", "label": "Documentation You Should Receive"}, {"href": "#faq", "label": "Frequently Asked Questions"}]

const sections: { id: string; title: string; paras: string[]; items?: string[] }[] = [
  {
    "id": "why-the-fan-matters",
    "title": "Why the Rooftop Fan Matters",
    "paras": [
      "Most kitchen owners know the hood. It sits over the line, it has the filters, and everyone can see it. The exhaust fan is different. It sits on the roof where nobody looks, and it does the hardest job in the whole system.",
      "The fan is what pulls air through the hood, through the filters, and up the duct. Every bit of grease laden vapor your cooking line makes passes through that fan housing before it leaves the building. Whatever the filters and the duct do not catch, the fan catches, or throws onto your roof.",
      "Growing up working in restaurants, I saw how rarely anyone went up to check the roof. The line cook worried about the hood. The manager worried about the health inspector. Nobody worried about the fan until it quit, started smoking, or dripped grease through the ceiling. By then the damage was done.",
      "Exhaust fan cleaning in San Diego is one of the most requested searches we see, and it is also the most commonly skipped part of a hood cleaning. This guide covers what a fan is exposed to, what NFPA 96 requires, what a correct cleaning includes, and how to tell whether your last vendor actually did it."
    ]
  },
  {
    "id": "what-grease-does",
    "title": "What Grease Does to a Fan",
    "paras": [
      "A rooftop exhaust fan is a motor, a belt or direct drive, a wheel with blades, a housing, and a curb that connects it to the duct. Grease sticks to all of it. Here is what builds up over time.",
      "Grease coats the fan blades unevenly. That throws the wheel out of balance. An unbalanced wheel vibrates, wears the bearings, and strains the motor. You hear it as a rumble or a squeal. You pay for it in a motor replacement that was avoidable.",
      "Grease also cuts airflow. A fan with caked blades moves less air than it was sized to move. The hood stops capturing smoke and heat the way it should. Cooks feel it first. The kitchen runs hotter, the dining room smells like the fryer, and the makeup air system fights a battle it cannot win.",
      "The biggest issue is fire. A fan full of grease sits at the end of a duct that can carry flame. If a grease fire starts under the hood and travels up the duct, a loaded fan gives it fuel at the roof line. That is how a kitchen fire becomes a building fire.",
      "Those are the reasons inspectors, insurance carriers, and landlords all ask about the roof."
    ],
    "items": [
      "Unbalanced blades that cause vibration and early bearing failure",
      "Reduced airflow that leaves smoke and heat in the kitchen",
      "Grease dripping from the housing onto the roof membrane",
      "Belts that slip or glaze when coated with grease",
      "Extra fuel at the end of the duct during a grease fire"
    ]
  },
  {
    "id": "what-nfpa-96-says",
    "title": "What NFPA 96 Says About Exhaust Fans",
    "paras": [
      "NFPA 96 is the fire code standard for commercial kitchen ventilation. It covers the whole exhaust path: hood, filters, duct, and fan. We are NFPA 96 certified, and every fan we clean is cleaned to that standard.",
      "The standard requires the exhaust system to be inspected on a schedule set by the type of cooking you do, and cleaned whenever grease buildup is found. The fan is part of that system. It is not optional and it is not a separate service you can skip while still being compliant.",
      "The standard also calls for upblast fans to be accessible for cleaning and inspection. In practice that means the fan has to be able to open or be removed so a technician can reach the inside of the housing and the full length of the blades. A fan bolted down tight to the curb with no access cannot be cleaned to standard, and an inspector can cite that on its own.",
      "Finally, NFPA 96 expects grease that escapes the fan to be contained rather than left to run across the roof. We cover that further down.",
      "Your local fire marshal enforces the standard in San Diego County. They can ask for proof that the full system, including the fan, was cleaned and by whom. A report that only mentions the hood and filters tells them the roof was skipped."
    ]
  },
  {
    "id": "how-we-clean",
    "title": "How a Proper Fan Cleaning Works",
    "paras": [
      "Here is how our crew handles a rooftop exhaust fan. The order matters, and so does the safety work before anything gets sprayed.",
      "First we power the fan down and lock it out. Nobody should be working near a wheel that can start spinning. We confirm the disconnect is off and tag it before touching the housing.",
      "Next we protect the roof. We lay down containment under and around the fan so the runoff stays out of the roofing and out of the drains. This is the step cheap vendors skip, and it is why some roofs end up stained and some end up leaking.",
      "Then we open or tilt the fan on its hinge, or remove the access panels if the model calls for it. We inspect the belt, the bearings, the motor, and the wheel before cleaning so any problem is documented as found.",
      "We then remove the heavy grease by hand scraping first. Hot water pressure washing comes after. Starting with hand scraping keeps thick grease from just turning into a slurry that spreads. We clean the blades on both sides, the inside of the housing, the shaft area, the curb, and the discharge opening.",
      "After the wash, we collect the water and grease. We do not let it run off the roof edge. Waste is bagged or pumped and hauled out.",
      "We close the fan back up, confirm the belt tension and the rotation direction, and restore power. We take photos before and after of every area we touched. Those photos go into your report."
    ],
    "items": [
      "Power off, lockout, and tag the disconnect",
      "Lay roof protection and containment",
      "Open or tilt the fan and inspect belt, bearings, and motor",
      "Hand scrape heavy grease, then hot water pressure wash",
      "Collect all runoff and haul out the waste",
      "Close up, check belt tension and rotation, document with photos"
    ]
  },
  {
    "id": "hinge-kits",
    "title": "Hinge Kits and Fan Access",
    "paras": [
      "One of the most common problems we find is a fan that cannot be opened. It was installed flat on the curb with no hinge and no service clearance. Nobody planned for it to be cleaned.",
      "A hinge kit fixes that. It lets the fan swing up on a pivot so the technician can reach the inside without lifting a heavy motor assembly by hand. It also makes the inspection faster and safer, which helps keep the job on schedule.",
      "If your fan has no hinge, ask us about adding one. It is a small upgrade compared to what it saves in labor and risk. It also removes the argument with an inspector about whether the fan is accessible.",
      "We also check that the electrical disconnect is within reach and in good condition, and that the roof access itself is safe. A fan that is hard to reach is a fan that does not get cleaned. We would rather solve the access problem once than work around it every visit."
    ]
  },
  {
    "id": "grease-containment",
    "title": "Grease Containment and Your Roof",
    "paras": [
      "Every fan sheds a little grease. Some are built with a drain or a catch trough and a grease cup that is supposed to collect it. When that cup is full, the grease goes over the edge and onto the roof.",
      "Grease on a roof membrane is bad for two reasons. It breaks down the roofing material, which leads to leaks. And it is a fire load sitting on a combustible surface right next to a heat source.",
      "We check the containment on every fan. We empty and clean the grease cup, clear the drain path, and flag any trough that is damaged or missing. If your fan has no containment at all, we tell you in the report so you can raise it with your landlord or roofer.",
      "Some property managers do not realize that roof damage from kitchen grease can fall back on the tenant. Keeping the containment working is cheap protection for your lease."
    ]
  },
  {
    "id": "how-often",
    "title": "How Often the Fan Needs Cleaning",
    "paras": [
      "NFPA 96 ties inspection and cleaning frequency to the type of cooking. The fan follows the same schedule as the rest of the system. The usual breakdown looks like this.",
      "That is the code baseline. In practice, the fan on a busy charbroil line can need attention sooner than the schedule says, because the fan is where the grease finally lands. If your fan is dripping, noisy, or visibly coated, do not wait for the next scheduled visit. Call us and we will look at it."
    ],
    "items": [
      "Monthly for solid fuel cooking such as wood or charcoal",
      "Quarterly for high volume cooking such as 24 hour kitchens, charbroiling, and wok cooking",
      "Semiannually for moderate volume cooking at most restaurants",
      "Annually for low volume cooking such as day shifts, churches, and seasonal kitchens"
    ]
  },
  {
    "id": "warning-signs",
    "title": "Warning Signs Your Fan Is Overdue",
    "paras": [
      "You do not have to climb up to know something is wrong. Watch for these signs from inside the building and from the parking lot.",
      "Any one of these is worth a call. Several together mean the fan is already in trouble."
    ],
    "items": [
      "Grease stains or streaks on the roof around the fan",
      "Smoke or heat that lingers in the kitchen after the hood is on",
      "A rumble, squeal, or rattle from the roof",
      "Grease dripping from the fan housing or the curb",
      "A burning smell when the fan starts",
      "A belt that is shredded, glazed, or missing",
      "An inspector note that mentions the rooftop or the fan"
    ]
  },
  {
    "id": "vendor-check",
    "title": "How to Check Your Last Vendor",
    "paras": [
      "Plenty of kitchens pay for hood cleaning and assume the fan is included. Sometimes it is. Sometimes the crew never goes to the roof. Here is how to check.",
      "Look at the last service report. It should list the fan as its own line item with before and after photos of the blades and the housing. If the photos only show the hood and the filters, the fan was not done.",
      "Go to the roof, or have someone you trust do it. Look at the underside of the blades if the fan is open, or at the housing exterior if it is not. Grease that is thick, dark, or dripping means the fan has not been cleaned recently.",
      "Check the sticker. A compliant service leaves a dated sticker on the hood. It does not prove the fan was cleaned, but a missing or expired sticker tells you the cycle has lapsed.",
      "Ask your vendor three questions. Do you open the fan? Do you contain the runoff? Do you photograph the inside of the housing? A confident yes to all three is a good sign. A vague answer is not.",
      "Switching vendors is common once an owner learns the fan was skipped. The roof is the most common area we find neglected on kitchens that come to us."
    ]
  },
  {
    "id": "what-you-receive",
    "title": "Documentation You Should Receive",
    "paras": [
      "After a full service including the fan, you should get a written service report, before and after photos of each area including the roof and the fan interior, an NFPA 96 certificate, and a sticker on the hood with the service date.",
      "Keep these on site and in your records. If the fire marshal, your insurance carrier, or your landlord asks, you hand them the paperwork and the conversation is short.",
      "For more on what an inspector will actually ask for, read our guides on the certificate of compliance and on kitchen exhaust inspections. For the duct run between the hood and the fan, see our duct cleaning guide."
    ]
  }
]

const related = [
  {
    "href": "/blog/kitchen-exhaust-duct-cleaning-san-diego",
    "label": "Kitchen Exhaust Duct Cleaning San Diego: What Happens Above the Hood"
  },
  {
    "href": "/blog/hood-cleaning-certificate-of-compliance-san-diego",
    "label": "Hood Cleaning Certificate of Compliance San Diego: What Inspectors Actually Ask For"
  },
  {
    "href": "/blog/kitchen-exhaust-inspection-san-diego",
    "label": "Kitchen Exhaust Inspection San Diego: What Inspectors Check and How to Pass"
  },
  {
    "href": "/blog/what-is-nfpa-96",
    "label": "What Is NFPA 96? A Restaurant Owner's Plain-English Guide"
  },
  {
    "href": "/services/hood-cleaning",
    "label": "Our Hood Cleaning Service"
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: "Exhaust Fan Cleaning San Diego: Rooftop Fan Service for Commercial Kitchens",
      description: "The rooftop exhaust fan pulls every pound of grease out of your kitchen and holds a lot of it. Here is what NFPA 96 requires, what proper fan cleaning includes, and how to tell if yours was done right.",
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-10-15',
      dateModified: '2026-10-15',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/exhaust-fan-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
}

export default function Page() {
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>October 2026 · 10 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>Exhaust Fan Cleaning San Diego: Rooftop Fan Service for Commercial Kitchens</h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>The rooftop exhaust fan pulls every pound of grease out of your kitchen and holds a lot of it. Here is what NFPA 96 requires, what proper fan cleaning includes, and how to tell if yours was done right.</p>
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

            {sections.map(sec => (
              <div key={sec.id} style={{ marginBottom: '40px' }}>
                <h2 id={sec.id} style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>{sec.title}</h2>
                {sec.paras.map((para, i) => (
                  <p key={i} style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>{para}</p>
                ))}
                {sec.items && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                    {sec.items.map(item => (
                      <li key={item} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--rust)', fontWeight: 900, flexShrink: 0 }}>→</span>
                        <span style={{ fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Need Your Exhaust Fan Cleaned?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>NFPA 96 certified rooftop fan service across San Diego County. Roof protection, full containment, photos of every area, and a compliance certificate.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {faqs.map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {related.map(r => (
                  <Link key={r.href} href={r.href} style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ {r.label}</Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
