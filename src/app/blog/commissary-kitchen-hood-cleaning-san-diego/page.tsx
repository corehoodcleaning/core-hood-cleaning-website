import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commissary Kitchen Hood Cleaning San Diego: NFPA 96 for Shared Use Kitchens | Core Hood Cleaning',
  description: 'Ghost kitchens, food truck commissaries, and shared use facilities all fall under NFPA 96. Core Hood Cleaning services commissary kitchens across San Diego County with documentation built for every tenant. Call (858) 361 2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/commissary-kitchen-hood-cleaning-san-diego' },
}

const faqs = [
  {
    q: 'What is a commissary kitchen and does it need hood cleaning?',
    a: 'A commissary kitchen is a licensed commercial kitchen facility that multiple food businesses share, including food truck operators, caterers, ghost kitchen brands, and pop up vendors. Any commissary running cooking equipment under a hood, whether it serves one tenant or twenty, falls under NFPA 96 and needs the same scheduled hood cleaning as a standalone restaurant.',
  },
  {
    q: 'How is a commissary kitchen different from a single restaurant kitchen for compliance purposes?',
    a: 'A single restaurant has one operator, one set of equipment, and one party responsible for the exhaust system. A commissary can have several tenants running different cooking equipment under the same hood or under multiple hoods in the same building, often on staggered schedules. That means more grease volume, more equipment types feeding the same duct run, and more people who need to see proof that the system is clean.',
  },
  {
    q: 'Who is responsible for hood cleaning in a shared commissary, the operator or each tenant?',
    a: 'In almost every case it is the commissary operator, since they hold the health permit and the lease on the building and its fixed exhaust equipment. That said, tenant agreements should spell out cleaning responsibility clearly, and every tenant should know the cleaning schedule and be able to produce documentation if their own permit is inspected separately.',
  },
  {
    q: 'Does NFPA 96 apply to ghost kitchens and cloud kitchens?',
    a: 'Yes. A ghost kitchen or cloud kitchen is a commercial kitchen built to serve delivery only orders, and it runs the same fryers, ranges, and flat tops as any restaurant kitchen. NFPA 96 does not care whether customers ever walk through the door. If there is a hood over cooking equipment, the fire code applies.',
  },
  {
    q: 'What does San Diego County require for a commissary permit?',
    a: 'Mobile food facilities such as food trucks and carts are required to operate from an approved base of operations, commonly called a commissary, under California retail food code. The commissary itself needs its own health permit and fire code compliance, including a documented hood cleaning schedule for any cooking equipment on site. Requirements can vary by facility type, so confirm current specifics with San Diego County Environmental Health and the local fire marshal.',
  },
  {
    q: 'How often should a commissary hood be cleaned with multiple tenants using it?',
    a: 'NFPA 96 sets cleaning frequency by cooking volume and equipment type, not by tenant count, but a shared facility with several tenants cooking on staggered shifts often accumulates grease faster than a single restaurant running the same hours. Many commissaries end up on a quarterly or even monthly schedule once real volume across all tenants is accounted for.',
  },
  {
    q: 'Can food truck operators use my commissary as proof of compliance?',
    a: 'A mobile food facility operator typically needs a signed commissary agreement plus proof that the commissary itself is properly permitted and maintained, including current hood cleaning documentation if the commissary has cooking equipment under a hood. As the commissary operator, keeping your certificate current protects every truck and cart that lists your address as their base.',
  },
  {
    q: 'What documentation does a commissary operator need on file for the fire marshal?',
    a: 'The same package any commercial kitchen needs: a written service report for each cleaning, before and after photos, a current NFPA 96 compliance certificate, and a sticker on the hood showing the last service date. With multiple tenants and possibly multiple hoods, keep records organized by hood or by zone so an inspector can match documentation to the exact equipment they are looking at.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Commissary Kitchen Hood Cleaning San Diego: NFPA 96 Compliance for Shared Use and Ghost Kitchens',
      description: 'Ghost kitchens, food truck commissaries, and shared use facilities all fall under NFPA 96. Core Hood Cleaning services commissary kitchens across San Diego County with documentation built for every tenant.',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-09-25',
      dateModified: '2026-09-25',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/commissary-kitchen-hood-cleaning-san-diego',
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
  { href: '#what-is-a-commissary-kitchen', label: 'What a Commissary Kitchen Is' },
  { href: '#extra-compliance-pressure', label: 'Why Commissaries Face Extra Compliance Pressure' },
  { href: '#nfpa-96-shared-facility', label: 'NFPA 96 in a Shared Facility' },
  { href: '#operator-vs-tenant', label: 'Who Is Responsible: Operator or Tenant' },
  { href: '#ghost-kitchens', label: 'Ghost Kitchens and Cloud Kitchens' },
  { href: '#what-service-covers', label: 'What Commissary Hood Cleaning Covers' },
  { href: '#choosing-a-partner', label: 'Choosing a Hood Cleaning Partner for a Shared Kitchen' },
  { href: '#faq', label: 'FAQ' },
]

export default function CommissaryKitchenHoodCleaningSanDiego() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--off-white)', background: 'rgba(238,239,226,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Industry</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>September 2026 · 9 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Commissary Kitchen Hood Cleaning San Diego: NFPA 96 for Shared Use and Ghost Kitchens
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              Food truck commissaries, ghost kitchens, and caterer share kitchens all run cooking equipment under a hood, which means all of them fall under NFPA 96. Core Hood Cleaning services commissary facilities across San Diego County with documentation built for every tenant on the lease.
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
              A commissary kitchen looks like nothing and everything at once. From the street it might just be a warehouse with a loading dock and a few trucks parked outside. Inside, it can be running six or eight cooking operations at once, each one belonging to a different business, each one legally responsible for a share of the same exhaust system.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '48px' }}>
              Growing up working in restaurants, I never worked a commissary myself, but I have serviced enough of them to know they get overlooked. Fire marshals and health inspectors do not overlook them. A commissary that skips scheduled hood cleaning is not putting one restaurant at risk, it is putting every tenant that lists that address as their base of operations at risk. This guide covers what makes commissary compliance different, who is actually responsible for the hood, and what a proper cleaning service for a shared facility looks like.
            </p>

            <h2 id="what-is-a-commissary-kitchen" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Commissary Kitchen Is</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A commissary kitchen is a licensed commercial kitchen facility that more than one food business shares. In San Diego County, the term covers a wide range of setups: a warehouse where a dozen food trucks park overnight and prep before their routes, a shared use kitchen that rents time blocks to caterers and small food brands, and increasingly, delivery only ghost kitchen buildings where several restaurant brands cook out of the same address without a public dining room.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              What ties all of these together is the same thing that ties any restaurant to the fire code: cooking equipment running under a hood, producing grease laden vapor that has to travel through ductwork and out a rooftop fan. The business model on paper does not matter to NFPA 96. The hood does.
            </p>

            <h2 id="extra-compliance-pressure" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Commissaries Face Extra Compliance Pressure</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A single restaurant runs one kitchen on one schedule. A commissary can have several tenants cooking on staggered shifts, sometimes back to back for eighteen or twenty hours a day. Every one of those cook cycles adds grease to the same duct run. A hood that would need quarterly service in a low volume restaurant can easily need it more often once you account for four or five tenants sharing the same exhaust path.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
              {[
                { num: '01', title: 'Higher Grease Volume', desc: 'Multiple tenants running fryers and flat tops on staggered shifts push far more grease through the same hood than a single restaurant would over the same hours.' },
                { num: '02', title: 'Mixed Equipment Types', desc: 'A commissary might have a tenant deep frying next to a tenant running a wok station next to a tenant baking. Different equipment produces different grease loads on the same system.' },
                { num: '03', title: 'More Eyes on the Building', desc: 'Health inspectors, the fire marshal, and every tenant relying on the address for their own permit all have a reason to check whether the hood is documented.' },
                { num: '04', title: 'Harder to Track Ownership', desc: 'Without a clear written schedule, it is easy for tenants to assume someone else is handling the hood cleaning until an inspector proves otherwise.' },
              ].map(item => (
                <div key={item.num} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--rust)', opacity: 0.4, marginBottom: '6px' }}>{item.num}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', lineHeight: '1.6' }}>{item.desc}</div>
                </div>
              ))}
            </div>

            <h2 id="nfpa-96-shared-facility" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>NFPA 96 in a Shared Facility</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 does not write a separate chapter for commissaries. It applies to the hood, the filters, the ductwork, and the rooftop fan the same way it would in any commercial kitchen. What changes in a shared facility is the scale and the record keeping. A commissary with three hoods serving different zones of the building needs each hood tracked on its own service schedule, with its own certificate and its own sticker, because an inspector walking the building will check each one individually.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Cleaning frequency still follows the same NFPA 96 table based on cooking volume and equipment type, but volume in a commissary has to be calculated across every tenant using that hood, not just the operator running the building. A commissary that treats itself like a low volume kitchen because no single tenant cooks that much, while several tenants combined cook constantly, is setting itself up to fail an inspection.
            </p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--rust)', marginBottom: '8px' }}>What we check on a commissary walkthrough</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'How many hoods are in the building and which tenants feed into each one',
                  'Combined cooking hours across all tenants sharing a single duct run',
                  'Whether the rooftop fan and duct access panels are reachable given the building layout',
                  'Whether any prior cleaning skipped the ductwork or the fan to save time',
                  'Whether documentation exists for every hood, or just the one the operator remembered',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.85rem', color: 'var(--charcoal)', lineHeight: '1.5' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 id="operator-vs-tenant" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Who Is Responsible: Operator or Tenant</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              In nearly every commissary we have worked in, the building operator holds the health permit and the lease on the fixed exhaust equipment, which puts hood cleaning responsibility on them, not on individual tenants. That said, we tell every operator the same thing: put it in writing. A tenant agreement that spells out who schedules and pays for hood cleaning, how often it happens, and where the documentation is kept saves everyone a headache the day an inspector shows up asking questions.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Tenants are not off the hook either. A food truck operator whose commissary agreement lists an address with a lapsed cleaning certificate can have their own mobile food facility permit questioned, even though they do not own the hood. If you rent commissary space, ask to see the current certificate. It protects your business as much as it protects the building.
            </p>

            <h2 id="ghost-kitchens" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Ghost Kitchens and Cloud Kitchens</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Ghost kitchens and cloud kitchens are commercial kitchens built to fill delivery orders, with no dining room and sometimes no public facing storefront at all. San Diego has seen a steady rise in these facilities, often with several restaurant brands, sometimes run by the same operator, cooking out of the same address behind different delivery app listings.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              None of that changes NFPA 96. A fryer is a fryer whether the food leaves through a front door or a delivery driver's insulated bag. We have found that ghost kitchen operators sometimes assume less foot traffic means less fire code scrutiny. It is the opposite in our experience. A building running multiple brands out of one kitchen tends to run equipment nearly around the clock, which pushes cleaning intervals shorter, not longer.
            </p>

            <h2 id="what-service-covers" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Commissary Hood Cleaning Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              A proper commissary service is the same full NFPA 96 scope you would want in a standalone restaurant, applied to every hood in the building. For a multiple tenant facility, we also organize the paperwork by hood and by zone so the operator can hand an inspector exactly the record they ask for, not a stack of unsorted receipts.
            </p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
              {[
                { item: 'Every hood canopy, baffle, and plenum in the building', detail: 'Cleaned and documented individually, not as one combined job' },
                { item: 'Grease filters removed, washed, and reinstalled per hood', detail: 'Matched to the tenant or zone that hood serves' },
                { item: 'Full ductwork from each plenum to its rooftop termination', detail: 'Traced separately when hoods feed different duct runs' },
                { item: 'Every rooftop fan serving the building', detail: 'Checked and cleaned on every visit, no exceptions' },
                { item: 'Grease collection and proper disposal for the whole facility', detail: 'No wash water down a floor drain, ever' },
                { item: 'Before and after photos organized by hood', detail: 'So the operator can show any single hood full service history on request' },
                { item: 'One NFPA 96 certificate per hood', detail: 'Not one blanket certificate for a building that has several' },
                { item: 'A sticker applied to each hood showing its own last service date', detail: 'Matches what an inspector checks hood by hood' },
              ].map((r, i) => (
                <div key={r.item} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '14px 20px', borderBottom: '1px solid var(--gray-light)', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--black)' }}>{r.item}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.detail}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              This is also where a <Link href="/services/filter-exchange" style={{ color: 'var(--rust)', fontWeight: 600 }}>filter exchange program</Link> earns its place in a commissary. With several tenants running equipment daily, filters load up with grease far faster than in a single restaurant, and a filter exchange between full cleanings keeps airflow where it needs to be without waiting for the next scheduled service.
            </p>

            <h2 id="choosing-a-partner" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Choosing a Hood Cleaning Partner for a Shared Kitchen</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Not every hood cleaning company wants to take on a commissary. Multiple hoods, tenants coming and going on different leases, and paperwork that has to satisfy more than one permit is more coordination than a single restaurant job. I know operators want a partner who shows up on a schedule that works around the building, not one that treats a twelve hood commissary the same as a single hood taco shop and rushes through it.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Ask any company bidding on your commissary how they document multiple hoods, whether they schedule around your busiest tenant hours, and whether they have serviced a shared facility before. If a company cannot answer clearly, that is a sign they will treat your commissary like a one off job rather than a recurring account that needs consistent recordkeeping.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              Our <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)', fontWeight: 600 }}>full hood cleaning service</Link> and <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)', fontWeight: 600 }}>NFPA 96 inspection support</Link> both scale to multiple hood buildings, and we schedule commissary work around your tenants' hours rather than forcing a shutdown during peak prep time.
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Running a Commissary or Shared Kitchen?</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>We service multiple hood facilities across San Diego County with documentation organized by hood, scheduled around your tenants, and built for the inspectors who will actually check it.</p>
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
                <Link href="/blog/food-truck-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Food Truck Hood Cleaning San Diego: NFPA 96 Compliance for Mobile Kitchens</Link>
                <Link href="/blog/school-hospital-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ School and Hospital Hood Cleaning San Diego: NFPA 96 for Institutional Kitchens</Link>
                <Link href="/blog/filter-exchange-vs-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Filter Exchange vs Hood Cleaning: What San Diego Kitchens Actually Need</Link>
                <Link href="/services/hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Our Hood Cleaning Service</Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
