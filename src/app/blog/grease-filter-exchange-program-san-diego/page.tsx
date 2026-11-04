import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Grease Filter Exchange Program San Diego: How It Works for Restaurants | Core Hood Cleaning',
  description: 'How a grease filter exchange program works for San Diego restaurants: schedules, filter sizing, what is covered, what is not, and what records to keep. NFPA 96 certified. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/grease-filter-exchange-program-san-diego' },
}

const faqs = [
  {
    q: 'What is a grease filter exchange program?',
    a: 'A grease filter exchange program is a scheduled service where a technician removes your dirty hood filters, installs a clean set that is already sized for your hood, and takes the dirty ones away to be washed off site. Your staff never soaks, scrubs, or hauls a filter. The swap takes minutes and happens on a fixed schedule.',
  },
  {
    q: 'How often should grease filters be exchanged in a San Diego restaurant?',
    a: 'It depends on what you cook and how long the line runs. Kitchens with charbroilers, fryers, or wok stations running most of the shift usually need a weekly exchange. Moderate volume kitchens often do well every two weeks. Light volume kitchens can sometimes stretch to monthly. NFPA 96 says filters must be cleaned or replaced as needed, so the right interval is the one that keeps them from loading up with grease. We set the cadence after looking at your equipment and volume.',
  },
  {
    q: 'Does a filter exchange replace my semi annual or quarterly hood cleaning?',
    a: 'No. A filter exchange covers the filters only. The hood canopy, the ductwork, and the rooftop fan still collect grease and still need a full system cleaning on the interval NFPA 96 sets for your cooking type. The exchange keeps filters working between those visits. It does not replace them.',
  },
  {
    q: 'What size filters does my kitchen need?',
    a: 'Most commercial hoods use standard baffle filters in a handful of common sizes. When we start a program we measure your existing filters and confirm the dimensions and the count for each hood. If your hood uses a nonstandard size, we source matching filters before your first exchange so there are no gaps or loose fits.',
  },
  {
    q: 'Do I need to buy the filters myself?',
    a: 'We stock the filters used for the program and confirm the right fit during the first assessment. Ask about the specifics of your setup when you call so there are no surprises. We do not quote prices in articles, so call (858) 361-2570 or book online and we will go over your kitchen.',
  },
  {
    q: 'Will a filter exchange help me pass a fire marshal or health inspection?',
    a: 'It helps. Inspectors look at filters first because they are the part of the system they can see without a ladder. Clean, properly seated filters with no gaps and no heavy grease load are a good sign. We also keep a written record of every exchange visit, so you can show service dates if anyone asks. The filters alone do not make you compliant, but they make the rest of the inspection go smoother.',
  },
  {
    q: 'Can I bundle the exchange program with hood cleaning?',
    a: 'Yes, and most customers do. One provider handles the filters on a short cycle and the full system on the longer cycle. Your records sit in one place, and the technician doing the full cleaning already knows your hood, your access points, and your filter setup.',
  },
  {
    q: 'What happens if a filter is damaged or missing?',
    a: 'Bent, torn, or missing filters leave gaps that let grease go straight into the duct. We flag damaged filters during the swap and replace them so your hood is never running with a gap. Tell us right away if your crew notices a filter that does not seat right.',
  },
  {
    q: 'Do you offer filter exchange across San Diego County?',
    a: 'Yes. We run exchange routes across San Diego County, including Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Chula Vista, National City, Oceanside, Carlsbad, Encinitas, Escondido, El Cajon, and surrounding areas.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Grease Filter Exchange Program San Diego: How It Works for Restaurants',
      description: 'How a grease filter exchange program works for San Diego restaurants: schedules, filter sizing, what is covered, what is not, and what records to keep.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-11-04',
      dateModified: '2026-11-04',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/grease-filter-exchange-program-san-diego',
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
    id: 'what-a-program-is',
    title: 'What a Grease Filter Exchange Program Is',
    paras: [
      `A grease filter exchange program is a standing arrangement. On a set schedule, a technician arrives at your kitchen with a full set of clean filters, pulls the dirty set out of your hood, slides the clean set in, and leaves with the dirty ones. The dirty filters get washed somewhere else. You never see them again until they come back clean on the next visit.`,
      `That is the whole idea. It sounds small, and it is. But the filters are the first thing every drop of grease laden air touches in your exhaust system. When they are clean, they catch grease before it travels up the duct. When they are loaded, air slows down, grease slips past, and your ductwork and rooftop fan take the hit.`,
      `This is a program, not a one time job. The value comes from the schedule. A filter that is clean on Monday and caked by the following Monday is doing nothing for you. A schedule that matches how hard your line works is what keeps filters useful all month.`,
    ],
  },
  {
    id: 'how-it-works',
    title: 'How the Program Works Step by Step',
    paras: [
      `Every kitchen is a little different, so the first visit is about learning yours. After that, the routine is short and predictable. Here is how it runs.`,
    ],
    list: [
      `Assessment. We look at your cooking equipment, how many hours the line runs, and how many hoods you have. We count and measure the filters in each hood.`,
      `Sizing. We confirm the exact filter dimensions and the number of filters per hood. If something is a nonstandard size, we source matching filters before the first exchange.`,
      `Schedule. We set a cadence that fits your volume. Weekly, every two weeks, or monthly, depending on what you cook.`,
      `The swap. A technician removes the dirty filters, installs clean ones, checks that each one seats tight with no gaps, and takes the dirty set out of the building.`,
      `The wash. Dirty filters are cleaned off site. Your staff does not touch them, and the grease never goes down your drains.`,
      `The record. Every visit is logged, so you have written service dates for each hood.`,
    ],
  },
  {
    id: 'how-often',
    title: 'How Often Filters Should Be Exchanged',
    paras: [
      `NFPA 96 does not hand you one number for filters. It says grease filters have to be cleaned or replaced as needed to keep the system working and to keep grease from building up. That puts the call on the operator, and most operators guess. They wait until the filters look bad, and by then the damage is already moving up the duct.`,
      `A better way is to match the schedule to the cooking. Here is how it usually shakes out in San Diego kitchens.`,
    ],
    list: [
      `Weekly: charbroilers, fryers, wok stations, and any line running hard through lunch and dinner. Heavy grease production means filters load fast.`,
      `Every two weeks: general restaurant service with a mix of grilling, sauteing, and frying at moderate volume.`,
      `Monthly: lighter duty kitchens such as cafes, bakeries with limited cooking, and low volume prep spaces.`,
    ],
  },
  {
    id: 'what-it-covers',
    title: 'What the Program Covers and What It Does Not',
    paras: [
      `This is where operators get tripped up, so I will say it plainly. The exchange program covers your filters. It does not cover the hood canopy, the duct run, or the rooftop exhaust fan.`,
      `Grease still gets past even the cleanest filters. A small amount of vapor and fine grease makes it into the plenum and the duct on every shift. Over months it builds up. That buildup is what a full system cleaning removes, and it is what NFPA 96 sets the cleaning intervals around.`,
      `Think of it as two layers. The exchange is the short cycle that protects the system between visits. The full hood cleaning is the long cycle that resets the whole system. If you want the side by side breakdown, read our guide on filter exchange versus full hood cleaning. If you want to understand the standard behind all of it, start with our plain English NFPA 96 guide.`,
    ],
  },
  {
    id: 'why-not-in-house',
    title: 'Why Restaurants Stop Washing Filters In House',
    paras: [
      `Growing up working in restaurants, I saw how filter washing actually gets done. Somebody pulls them at close, hauls them to the dish pit, soaks them, scrubs them, and hangs them up. On a slow week, that works. On a busy week, it gets skipped. Then it gets skipped again.`,
      `There are real problems with doing it in house, beyond the labor.`,
    ],
    list: [
      `Grease in the drains. Filters are heavy with grease. Washing them in a three compartment sink or mop sink sends that grease into your plumbing and your grease trap.`,
      `Wet filters going back in. Filters that are not fully dry or not fully clean get hung right back in the hood because the line opens in an hour.`,
      `Bent and damaged filters. Rough handling warps baffles. A bent filter leaves a gap, and gaps let grease straight through.`,
      `Lost labor. Every hour a cook or dishwasher spends on filters is an hour not spent on the line.`,
      `No record. Nobody writes down that filters were cleaned on a given day, so when an inspector asks, you cannot prove it.`,
    ],
  },
  {
    id: 'filter-types-and-sizing',
    title: 'Filter Types and Sizing',
    paras: [
      `Most commercial hoods in San Diego use baffle filters, usually stainless steel, in a few common sizes. Baffle filters work by forcing air to change direction, which throws grease out of the airstream and into the channels of the filter. They are the standard for a reason.`,
      `Fit matters as much as cleanliness. A filter that is too small leaves a gap on the edge. A filter that is bent will not seat flat in the track. Either way, air takes the easy path around the filter instead of through it, and the grease goes with it.`,
      `That is why the first visit includes measuring. We check the size, the count, and the condition of the track in each hood. If a filter is dented, torn, or missing, we replace it so the hood is closed up tight. If your hood needs a size we do not already stock, we get it before you start the program, not after.`,
    ],
  },
  {
    id: 'records-and-inspections',
    title: 'Records Inspectors and Insurers Ask For',
    paras: [
      `Filters are the part of your system an inspector can see from the floor. A fire marshal or health inspector will often look at them before asking about anything else. Heavy grease on the face of the filter tells them a lot about how the rest of the system is likely doing.`,
      `Clean filters help. Paper helps more. Every exchange visit we do is logged, so you can show service dates for each hood when someone asks. That record sits next to your hood cleaning documentation, your NFPA 96 certificate, and the sticker on the hood.`,
      `Insurance carriers care too. After a grease fire, the first questions are about maintenance records. A clean log of filter service shows the kitchen was being looked after. For the full picture on what inspectors check, see our guide to kitchen exhaust inspections, and talk to us about our NFPA inspection service.`,
    ],
  },
  {
    id: 'signs-filters-overdue',
    title: 'Signs Your Filters Are Overdue',
    paras: [
      `You do not need a lab test to know when filters have gone too long. Your kitchen tells you. If you see any of these, your schedule is too loose or you are not on one at all.`,
    ],
    list: [
      `Grease dripping from the filter face or pooling in the hood trough and cup.`,
      `A thick, tacky layer on the baffles that you can feel with a gloved hand.`,
      `Smoke or grease vapor drifting out from under the hood instead of being pulled in.`,
      `Cooks complaining that the hood does not pull like it used to.`,
      `A strong rancid smell near the hood that lingers after close.`,
      `Filters that nobody can remember cleaning.`,
    ],
  },
  {
    id: 'a-typical-month',
    title: 'What a Typical Month Looks Like on the Program',
    paras: [
      `Say you run a mid size restaurant in Mission Valley with a charbroiler and two fryers. We set you up on a weekly exchange. Every week, a technician shows up at an agreed time, usually before open or after close. The swap takes minutes. The crew does not stop prep and nobody is pulled off the line.`,
      `Once a quarter or twice a year, depending on your cooking type, the full system cleaning lands on the calendar. That visit covers the hood, the duct run, and the rooftop fan, and ends with your NFPA 96 documentation. Because the filters were handled all along, the hood is in better shape when we start, and nothing about the schedule surprises anyone.`,
      `Compare that to the usual alternative. Filters get washed when somebody remembers. The hood cleaning gets booked when the sticker runs out. Nobody has a record of either. The program replaces that scramble with a calendar.`,
    ],
  },
  {
    id: 'questions-to-ask',
    title: 'Questions to Ask Any Filter Exchange Provider',
    paras: [
      `Not every provider runs the same program. Before you sign up with anyone, including us, ask these questions.`,
    ],
    list: [
      `Do you measure my hood and confirm filter sizes before the first swap?`,
      `What schedule do you recommend for my cooking, and why?`,
      `Where are the dirty filters washed, and how is the grease handled?`,
      `Do you replace damaged or missing filters, or do you just swap what is there?`,
      `Do I get a written record of every visit?`,
      `Can you also handle my full system hood cleaning, and are your technicians NFPA 96 certified?`,
    ],
  },
  {
    id: 'service-areas',
    title: 'San Diego Service Areas',
    paras: [
      `We run filter exchange routes across San Diego County. That includes Downtown San Diego, La Jolla, Pacific Beach, Mission Valley, Miramar, Rancho Bernardo, Poway, Santee, El Cajon, La Mesa, Chula Vista, National City, Coronado, Oceanside, Vista, San Marcos, Carlsbad, Encinitas, Del Mar, and Escondido. If your kitchen is in San Diego County, we can put you on a route.`,
      `Because we also handle the full system cleaning, you can keep everything with one NFPA 96 certified crew instead of juggling two vendors. Learn more about our grease filter exchange service or our full hood cleaning service.`,
    ],
  },
]

const tocItems = [
  ...sections.map(s => ({ href: `#${s.id}`, label: s.title })),
  { href: '#faq', label: 'FAQ' },
]

const bodyP = { fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' } as const
const h2Style = { fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' } as const

export default function GreaseFilterExchangeProgramSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Filter Exchange</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>November 2026 · 11 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Grease Filter Exchange Program San Diego: How It Works for Restaurants
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Clean filters on a schedule, no scrubbing, no grease in your drains. Here is how a filter exchange program runs, how often you need one, what it covers, and what it does not.
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
              Ask a restaurant owner who cleans their hood filters and you get a long pause. Usually it is whoever has a free minute. Sometimes it is nobody. I know operators want to run the kitchen, not manage a filter soaking schedule, and that is exactly why a grease filter exchange program exists.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Filters are the first line of defense in your exhaust system. When they are clean, they catch grease before it reaches the duct. When they are loaded, they do the opposite. This guide walks through how a filter exchange program works in a San Diego kitchen, how often you need one, what it covers, and where it stops. Core Hood Cleaning is NFPA 96 certified, and everything here follows that standard.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              If you are already sure you want a program, you can skip to the bottom and call. If you want to understand it first, keep reading.
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

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Put Your Filters on a Schedule</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>Tell us about your kitchen and we will set the right exchange cadence. NFPA 96 certified, serving all of San Diego County.</p>
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
                <Link href="/services/filter-exchange" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Grease Filter Exchange Service</Link>
                <Link href="/services/hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Commercial Hood Cleaning Service</Link>
                <Link href="/services/nfpa-inspection" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ NFPA 96 Inspection Service</Link>
                <Link href="/blog/filter-exchange-vs-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Filter Exchange vs Hood Cleaning: What San Diego Kitchens Actually Need</Link>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96? A Restaurant Owner&apos;s Plain English Guide</Link>
                <Link href="/blog/hood-cleaning-frequency-cooking-type" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Frequency by Cooking Type</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
