import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Commercial Kitchen Cleaning San Diego: What Gets Cleaned and What Your Exhaust System Needs | Core Hood Cleaning",
  description: "Commercial kitchen cleaning in San Diego: what a deep clean covers, where the exhaust system fits, what NFPA 96 requires, and how to schedule both. Call (858) 361-2570.",
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-cleaning-san-diego' },
}

const faqs = [
  {
    "q": "What does commercial kitchen cleaning include in San Diego?",
    "a": "It depends on who you hire. A general kitchen cleaning crew handles floors, walls, drains, prep tables, and equipment exteriors. A certified exhaust cleaner handles the hood, filters, duct, and rooftop fan. A complete program needs both, because one does not replace the other."
  },
  {
    "q": "Is hood cleaning part of commercial kitchen cleaning?",
    "a": "Hood cleaning is part of keeping a kitchen clean and compliant, but it is a separate trade. NFPA 96 sets the rules for the exhaust system, and the work needs trained, certified people. Most janitorial and deep cleaning crews do not do it."
  },
  {
    "q": "How often should a commercial kitchen be deep cleaned?",
    "a": "Daily surfaces need cleaning every shift. A full deep clean of equipment, walls, and floors is commonly done monthly or quarterly depending on volume. The exhaust system follows its own NFPA 96 schedule, which runs from monthly to annually based on your cooking type."
  },
  {
    "q": "Does Core Hood Cleaning do floor and equipment deep cleaning?",
    "a": "No. We focus on the kitchen exhaust system: hood, filters, duct, and rooftop fan, plus filter exchange and NFPA 96 inspection. We can work around your deep cleaning crew so the two jobs do not collide."
  },
  {
    "q": "Should the hood be cleaned before or after a kitchen deep clean?",
    "a": "Before. The exhaust cleaning knocks grease and water down onto surfaces below the hood. If the deep clean comes first, the line gets dirty again. Have the exhaust crew finish, then let the deep cleaning crew do the final wipe down."
  },
  {
    "q": "What do San Diego health inspectors check in a commercial kitchen?",
    "a": "They look at food contact surfaces, floors, drains, storage, and temperature controls. They also look at the hood and filters for visible grease buildup. A hood that drips or a filter that is caked can cost you points even if the rest of the kitchen is spotless."
  },
  {
    "q": "Can a kitchen cleaning company clean my exhaust fan on the roof?",
    "a": "Only if they are trained and equipped for it. Rooftop work needs fall protection, grease containment, and knowledge of the fan itself. NFPA 96 expects qualified people on the exhaust system, so ask for proof of certification before anyone goes up."
  },
  {
    "q": "What paperwork should I keep after a kitchen cleaning?",
    "a": "Keep the service report, before and after photos, and the NFPA 96 certificate for the exhaust work, plus a dated sticker on the hood. For the general clean, keep the invoice and any checklist the crew signs. Your fire marshal, insurer, or landlord may ask for either set."
  }
]

const tocItems = [{"href": "#what-it-means", "label": "What Commercial Kitchen Cleaning Means"}, {"href": "#daily-weekly", "label": "Daily and Weekly Cleaning Your Staff Owns"}, {"href": "#deep-cleaning", "label": "What a Deep Cleaning Crew Covers"}, {"href": "#exhaust-system", "label": "The Part Most Kitchen Cleaning Skips"}, {"href": "#nfpa-96", "label": "What NFPA 96 Requires"}, {"href": "#health-vs-fire", "label": "Health Inspection vs Fire Inspection"}, {"href": "#order-of-work", "label": "The Right Order of Work"}, {"href": "#scheduling", "label": "Scheduling Without Losing a Service"}, {"href": "#hiring", "label": "How to Hire Each Trade"}, {"href": "#warning-signs", "label": "Signs Your Kitchen Program Has a Gap"}, {"href": "#faq", "label": "Frequently Asked Questions"}]

const sections: { id: string; title: string; paras: string[]; items?: string[] }[] = [
  {
    "id": "what-it-means",
    "title": "What Commercial Kitchen Cleaning Means",
    "paras": [
      "Search for commercial kitchen cleaning in San Diego and you will find a mix of janitorial companies, deep cleaning crews, pressure washing outfits, and hood cleaners. They all use the same phrase. They do not all do the same job.",
      "A commercial kitchen is cleaned in layers. Your staff cleans the surfaces they touch every shift. A deep cleaning crew resets the floors, walls, drains, and equipment on a schedule. A certified exhaust cleaner handles the hood, filters, duct, and rooftop fan. Each layer has its own tools, its own training, and its own rules.",
      "Growing up working in restaurants, I watched owners pay for a deep clean and think the whole kitchen was handled. The floors shined. The prep tables were spotless. Meanwhile the hood was dripping and nobody had been on the roof in two years. The deep clean was done well. It just was not the whole picture.",
      "This guide lays out each layer, who should do it, and how they fit together. We are an NFPA 96 certified exhaust cleaning company, so we will be clear about where our work starts and where someone else's work begins."
    ]
  },
  {
    "id": "daily-weekly",
    "title": "Daily and Weekly Cleaning Your Staff Owns",
    "paras": [
      "The first layer belongs to your team. It is the routine that keeps the kitchen safe to cook in from one shift to the next. Nobody outside your building can do this for you, and no outside service makes up for skipping it.",
      "Daily tasks usually follow the close of service. Weekly tasks go deeper into the areas that collect grime between visits from a deep cleaning crew. Your own checklist will vary, but these are the common ones."
    ],
    "items": [
      "Wipe down prep tables, cutting boards, and food contact surfaces after every shift",
      "Sweep and mop floors, including under the line where grease and food scraps collect",
      "Clean and sanitize sinks, drains, and floor sinks",
      "Wipe the exterior of the cooking equipment and the visible parts of the hood",
      "Empty fryer oil on schedule and clean the fryer surrounds",
      "Pull and wash removable parts from slicers, mixers, and the flat top",
      "Check the grease cup on the rooftop fan if you have roof access and a safe way to reach it"
    ]
  },
  {
    "id": "deep-cleaning",
    "title": "What a Deep Cleaning Crew Covers",
    "paras": [
      "The second layer is the deep clean. This is the work that is too big, too messy, or too specialized for the closing crew. Most San Diego kitchens bring in outside help for it monthly, quarterly, or twice a year.",
      "A good deep cleaning crew degreases the walls and ceiling tiles near the line, scrubs the floors down to the grout, and cleans behind and under equipment that normally stays put. They tackle the drains, the walk in coolers, the dish pit, and the corners nobody gets to on a Friday night.",
      "The crew leaves the kitchen in the condition you would want to show a health inspector. For restaurants in busy areas like Downtown, La Jolla, and Pacific Beach, that reset often happens overnight so the doors can open on time.",
      "There is one thing a deep cleaning crew does not do. Unless they hold the right certification and equipment, they do not clean the inside of the exhaust system. They may wipe the front of the hood. That is not the same as cleaning the plenum, the duct, and the fan."
    ],
    "items": [
      "Degreasing walls, ceilings, and backsplash areas",
      "Floor scrubbing and grout cleaning",
      "Moving and cleaning behind and under equipment",
      "Cleaning walk in coolers, freezers, and dry storage",
      "Cleaning drains, floor sinks, and the dish area",
      "Detailing equipment exteriors and shelving"
    ]
  },
  {
    "id": "exhaust-system",
    "title": "The Part Most Kitchen Cleaning Skips",
    "paras": [
      "The third layer is the exhaust system. It is the hood over your cooking line, the filters inside it, the duct that carries air to the roof, and the fan that pushes it out. Every bit of grease laden vapor from your cooking passes through it.",
      "This is where grease collects out of sight. It builds in the hood plenum, coats the inside of the duct, and settles on the fan blades. A kitchen can look clean at table level and still have a heavy fuel load hidden above the ceiling.",
      "This is also the layer that matters most for fire. Most serious restaurant fires start at the cooking line and spread through grease in the exhaust path. The deep clean on your floors does nothing about that.",
      "Our work lives here. We clean the hood, the filters, the full length of the duct, and the rooftop fan. We follow NFPA 96, we document every step, and we leave the paperwork your inspector will ask for. Our services page for hood cleaning covers the full scope, and our filter exchange service keeps clean filters in your hood between full cleanings."
    ]
  },
  {
    "id": "nfpa-96",
    "title": "What NFPA 96 Requires",
    "paras": [
      "NFPA 96 is the fire code standard for commercial kitchen ventilation. It does not cover your floors or your prep tables. It covers the exhaust system, and it is the standard your fire marshal enforces in San Diego County.",
      "The standard ties cleaning frequency to the type of cooking you do. Monthly for solid fuel such as wood or charcoal. Quarterly for high volume cooking such as charbroiling, wok, and 24 hour kitchens. Semiannually for moderate volume cooking at most restaurants. Annually for low volume cooking such as day shifts and seasonal kitchens.",
      "It also expects the work to be done by trained, qualified people, and it expects proof. A dated sticker on the hood, a written report, and before and after photos are what most inspectors and insurers want to see.",
      "If you want the plain English version of the standard, read our guide to what NFPA 96 is. If you want to know what your inspector will check, our guide to kitchen exhaust inspections walks through it."
    ]
  },
  {
    "id": "health-vs-fire",
    "title": "Health Inspection vs Fire Inspection",
    "paras": [
      "Kitchen owners often blur two different inspections together. They are separate, they come from different offices, and they look at different things.",
      "The health inspection is about food safety. The inspector looks at temperatures, storage, hand washing, pest control, floors, drains, and food contact surfaces. They also look at the hood and filters for visible grease, because dripping grease is a sanitation problem as well as a fire problem.",
      "The fire inspection is about the exhaust path and the fire suppression system. The fire marshal checks that the hood has been cleaned to NFPA 96, that the sticker is current, that the suppression system has been serviced, and that the duct and fan are accessible.",
      "A deep clean helps with the health inspection. It does very little for the fire inspection. A certified exhaust cleaning does the opposite. You need both to be ready for either visit. Our health inspection checklist for San Diego kitchens covers the exhaust items an inspector looks at during a health visit."
    ]
  },
  {
    "id": "order-of-work",
    "title": "The Right Order of Work",
    "paras": [
      "When both crews are coming, the order matters. Get it wrong and one crew undoes the other's work.",
      "Exhaust cleaning is messy by nature. We remove heavy grease by hand, then use hot water pressure washing, and we protect the cooking line and the surrounding area. Even with careful containment, some grease and water end up on surfaces below the hood and on the floor around the line.",
      "That means the exhaust cleaning should come first. When we finish, the line is clean of grease from above. Then the deep cleaning crew does its detail work, wipes the equipment, scrubs the floor, and leaves the whole kitchen reset.",
      "If the deep clean comes first, the floors and equipment get dirty a second time. The deep cleaning crew gets blamed for a result they could not prevent. The owner pays twice for the same surfaces."
    ]
  },
  {
    "id": "scheduling",
    "title": "Scheduling Without Losing a Service",
    "paras": [
      "Every San Diego kitchen has the same problem. The work has to happen, and the kitchen cannot go dark to let it happen.",
      "The usual answer is to work after hours. Our crews can schedule exhaust cleaning around your closing time so the kitchen is ready when your morning staff arrives. Our after hours hood cleaning guide covers how that works in detail.",
      "If you are running a deep clean the same night, plan the sequence ahead of time. Tell both vendors what the other is doing. Give the exhaust crew the first window, and give the deep cleaning crew the second. Make sure there is a clear handoff so nobody is working on the same area at once.",
      "For multi location operators, align the schedules across sites. A consistent calendar makes it easier to track compliance, easier to budget, and easier to prove to an insurer that every location is covered."
    ]
  },
  {
    "id": "hiring",
    "title": "How to Hire Each Trade",
    "paras": [
      "Hire each layer on its own merits. A company that is excellent at floors may know nothing about exhaust systems, and the reverse is also true.",
      "For the deep cleaning crew, ask about references from other commercial kitchens, how they handle chemicals near food surfaces, whether they carry liability insurance, and how they protect your equipment. Ask how they schedule overnight work and how they leave the kitchen at the end of the shift.",
      "For the exhaust cleaner, ask for proof of NFPA 96 certification. Ask whether they clean the duct and the fan, not only the hood. Ask what documentation you receive. Ask whether they photograph the inside of the system. A confident answer to all four is a good sign.",
      "Our guide to choosing a hood cleaning company has the full list of questions. Keep it handy when you are comparing quotes."
    ]
  },
  {
    "id": "warning-signs",
    "title": "Signs Your Kitchen Program Has a Gap",
    "paras": [
      "You can often tell where a program is weak by what shows up between visits. These signs point to a gap in one of the layers.",
      "If you see any of them, figure out which layer is responsible and fix that layer. Throwing more deep cleaning at an exhaust problem does not help."
    ],
    "items": [
      "Grease dripping from the hood or collecting on the filters",
      "Smoke or heat that lingers in the kitchen after the hood is on",
      "A greasy film on walls and ceiling tiles above the line",
      "Grease stains on the roof near the exhaust fan",
      "An expired or missing sticker on the hood",
      "Health inspection notes about grease or sanitation",
      "A service report that mentions only the hood and the filters"
    ]
  }
]

const related = [
  {
    "href": "/blog/commercial-kitchen-hood-cleaning-san-diego",
    "label": "Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide"
  },
  {
    "href": "/blog/health-inspection-checklist-san-diego",
    "label": "San Diego Restaurant Health Inspection Checklist: Kitchen Exhaust Edition"
  },
  {
    "href": "/blog/after-hours-hood-cleaning-san-diego",
    "label": "After Hours Hood Cleaning San Diego: Nighttime Service for Restaurants and Bars"
  },
  {
    "href": "/blog/choosing-hood-cleaning-company-san-diego",
    "label": "How to Choose a Hood Cleaning Company in San Diego"
  },
  {
    "href": "/services/hood-cleaning",
    "label": "Our Hood Cleaning Service"
  },
  {
    "href": "/services/filter-exchange",
    "label": "Our Filter Exchange Service"
  },
  {
    "href": "/services/nfpa-inspection",
    "label": "Our NFPA 96 Inspection Service"
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: "Commercial Kitchen Cleaning San Diego: What Gets Cleaned and What Your Exhaust System Needs",
      description: "Commercial kitchen cleaning in San Diego covers more than floors and equipment. Here is what a full kitchen clean includes, where the exhaust system fits, what NFPA 96 requires, and how to schedule it all without losing a service.",
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-10-29',
      dateModified: '2026-10-29',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-cleaning-san-diego',
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
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>October 2026 · 11 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>Commercial Kitchen Cleaning San Diego: What Gets Cleaned and What Your Exhaust System Needs</h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>Commercial kitchen cleaning in San Diego covers more than floors and equipment. Here is what a full kitchen clean includes, where the exhaust system fits, what NFPA 96 requires, and how to schedule it all without losing a service.</p>
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
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Need Your Exhaust System Cleaned?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>NFPA 96 certified hood, duct, and fan cleaning across San Diego County. We work around your deep cleaning crew and your service hours, and you get a full report with photos and a compliance certificate.</p>
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
