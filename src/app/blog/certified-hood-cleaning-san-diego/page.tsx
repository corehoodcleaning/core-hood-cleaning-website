import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Certified Hood Cleaning San Diego: What Certified Really Means and How to Verify It | Core Hood Cleaning",
  description: "NFPA 96 calls for trained, qualified, and certified people to clean commercial kitchen exhaust systems. Here is what certified hood cleaning means in San Diego, how to verify a company, and what paperwork proves it.",
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/certified-hood-cleaning-san-diego' },
}

const faqs = [
  { q: "What does certified hood cleaning mean?", a: "It means the technicians cleaning your exhaust system are trained to the NFPA 96 standard, can show that training, and follow the standard on every job. A certified company also documents the work with a report, photos, a certificate, and a dated sticker." },
  { q: "Does NFPA 96 require a certified hood cleaner?", a: "NFPA 96 calls for exhaust system cleaning to be done by properly trained, qualified, and certified people who are acceptable to the authority having jurisdiction. That authority is usually the local fire marshal or fire department." },
  { q: "How do I check if a hood cleaning company is certified?", a: "Ask which standard they clean to, where their technicians were trained, whether the crew is employed by the company or subcontracted, and what paperwork you receive. Ask for proof of insurance in writing and ask for references from kitchens like yours." },
  { q: "What paperwork should a certified hood cleaner give me?", a: "You should receive a written report, before and after photos, a compliance certificate, and a dated sticker on the hood. Every Core Hood Cleaning service includes all four." },
  { q: "Can the fire marshal tell if my cleaner was not certified?", a: "Often yes. Inspectors look at the condition of the system, the sticker, and the records. A dirty duct, a missing sticker, or no report from a recognized vendor raises questions and can lead to a red tag until the system is cleaned and documented." },
  { q: "Will my insurance company care who cleans my hood?", a: "Yes. After a fire, carriers review whether the exhaust system was maintained to the standard. Records from an NFPA 96 certified company help support a claim, while missing or doubtful records can complicate it." },
  { q: "Is a cheaper uncertified hood cleaner worth the risk?", a: "Rarely. A partial or undocumented cleaning leaves the fire risk in place, can fail inspection, and may need to be redone. Paying for a certified cleaning once costs less than paying twice and risking a shutdown." },
  { q: "Do I need to hire a certified company for the rooftop fan too?", a: "Yes. The exhaust fan and rooftop grease containment are part of the system NFPA 96 covers. A certified company cleans the full path from the hood to the fan, not just the visible parts." },
  { q: "Do you provide a certificate for my landlord or franchisor?", a: "Yes. Each service includes an NFPA 96 compliance certificate and a written report. We can also provide consolidated records for operators with multiple hoods or multiple locations." },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: "Certified Hood Cleaning San Diego: What Certified Really Means and How to Verify It",
      description: "NFPA 96 calls for trained, qualified, and certified people to clean commercial kitchen exhaust systems. Here is what certified hood cleaning means in San Diego, how to verify a company, and what paperwork proves it.",
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-10-22',
      dateModified: '2026-10-22',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/certified-hood-cleaning-san-diego',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
}

const tocItems = [
  { href: '#what-certified-means', label: "What Certified Hood Cleaning Means" },
  { href: '#what-nfpa-96-requires', label: "What NFPA 96 Says About Who Cleans the System" },
  { href: '#where-certification-comes-from', label: "Where Hood Cleaning Certification Comes From" },
  { href: '#how-to-verify', label: "How to Verify a Hood Cleaning Company Before You Hire" },
  { href: '#paperwork', label: "The Paperwork That Proves the Job Was Done" },
  { href: '#insurance-and-licensing', label: "Insurance, Licensing, and Who Is Liable" },
  { href: '#red-flags', label: "Red Flags That Mean the Company Is Not Really Certified" },
  { href: '#why-it-matters', label: "Why Certified Cleaning Matters to Inspectors and Insurers" },
  { href: '#cleaning-frequency', label: "Certified Cleaning on the Right Schedule" },
  { href: '#what-to-expect', label: "What You Get When You Hire Core Hood Cleaning" },
  { href: '#faq', label: "FAQ" },
]

export default function CertifiedHoodCleaningSanDiego() {
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
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Certified Hood Cleaning San Diego: What Certified Means
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.75)', fontSize: '1rem', lineHeight: '1.7' }}>
              NFPA 96 calls for trained, qualified, and certified people to clean commercial kitchen exhaust systems. Here is what certified hood cleaning means in San Diego, how to verify a company, and what paperwork proves it.
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
              {"Growing up working in restaurants, I saw how many operators hired a hood cleaner the same way they hired a plumber in an emergency: whoever picked up the phone. Then the fire marshal asked who did the work, and nobody could say what that company was certified to do. This guide explains what certified hood cleaning means, what the fire code says about it, and how to check a San Diego company before you let a crew into your kitchen."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"The word certified gets used loosely in this trade. Some companies use it to mean they took a class once. Others use it to mean they follow NFPA 96 on every job and can prove it. Knowing the difference protects your kitchen, your insurance coverage, and your standing with the fire marshal."}
            </p>

            <h2 id="what-certified-means" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What Certified Hood Cleaning Means</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Certified hood cleaning means the people cleaning your exhaust system have been trained to clean it to the NFPA 96 standard, can show that training, and follow the standard on every job. It is not a sticker a company buys. It is a record of training, a method of work, and paperwork that proves the job was done."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"A certified crew knows what the standard requires for each part of the system: the hood, the filters, the plenum, the full duct run, the exhaust fan, and the rooftop grease containment. It knows how to reach areas through access panels, how to protect your cooking equipment and your building during the work, how to handle the grease that comes out, and how to document the result so an inspector can read it."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"When we say Core Hood Cleaning is NFPA 96 certified, we mean our crews are trained to that standard and our work is documented to it. We say it plainly because it is the first thing a fire marshal, an insurance carrier, or a landlord wants to know."}
            </p>

            <h2 id="what-nfpa-96-requires" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What NFPA 96 Says About Who Cleans the System</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"NFPA 96 is the national standard for ventilation control and fire protection of commercial cooking operations. Among other things, it says exhaust systems must be inspected and cleaned, and it says the cleaning must be done by properly trained, qualified, and certified people who are acceptable to the authority having jurisdiction."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"That last phrase matters. The authority having jurisdiction is the local body that enforces the code, usually the fire marshal or fire department. In practice, that means the person who decides whether your cleaning company is acceptable is the person who can red tag your cooking line. The standard does not name one single credential that settles the question everywhere, which is why it pays to know what your local fire official expects."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Our plain English guide on what NFPA 96 is covers the full standard. For this topic, the key point is that hiring a certified company is not a nice extra. It is what the standard asks of you as the operator."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              See <Link href="/services/hood-cleaning" style={{ color: 'var(--rust)' }}>our hood cleaning service</Link> for what a full system cleaning includes.
            </p>

            <h2 id="where-certification-comes-from" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Where Hood Cleaning Certification Comes From</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"There is no single license that makes a company certified. Certification in this trade comes from a few places, and a solid company can usually point to more than one."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"The first is formal industry training. Trade associations and training programs teach exhaust cleaning methods, fire safety principles, and the requirements of the standard, and they test whether technicians understand them. The second is manufacturer and equipment training, which covers the proper handling of fans, hinge kits, and filter systems. The third is in house training, where a company teaches its crews its own method, supervises their first jobs, and checks their work."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"The fourth is acceptance by the local authority. A company that has done work in your area and has had it pass inspection has a record of being acceptable. That record is worth asking about, because the fire marshal who reviews your system has seen which vendors leave clean ducts and which do not."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Ask any company you are considering to tell you where their training came from. A confident answer is a good sign. A vague one is not."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Between full cleanings, our <Link href="/services/filter-exchange" style={{ color: 'var(--rust)' }}>filter exchange service</Link> keeps clean filters in your hood.
            </p>

            <h2 id="how-to-verify" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How to Verify a Hood Cleaning Company Before You Hire</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"You do not have to take anyone's word for it. A few direct questions will tell you most of what you need to know, and a good company will answer them without being pushed."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Ask what standard they clean to. The answer should be NFPA 96, stated without hesitation. Ask what training their technicians have and who provided it. Ask whether the crew that shows up is the crew that was trained, or whether work is handed to a subcontractor. Ask what the cleaning covers, and whether it includes the full duct run and the fan. Ask what paperwork you receive at the end. Ask for proof of insurance, and ask for it in writing."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Then ask for references from kitchens like yours. A restaurant operator, a hotel, or a school that has used the company for a while can tell you whether the crew showed up on time, left the kitchen clean, and handed over the records. If a company cannot name a single customer you can call, treat that as an answer."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"You can also ask your fire marshal or your insurance agent whether they have a preferred or approved list. Not every jurisdiction keeps one, but when one exists it saves you the guesswork."}
            </p>

            <h2 id="paperwork" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>The Paperwork That Proves the Job Was Done</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Certification is a promise. Paperwork is the proof. After every cleaning, a certified company should leave you with a complete record that you can hand to an inspector without explaining anything."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Every Core Hood Cleaning service includes a written report, before and after photos, an NFPA 96 compliance certificate, and a dated sticker on the hood. The report lists what was cleaned and what was not reachable. The photos show the condition of the system before and after the work. The certificate states the standard the work followed. The sticker tells the next inspector when the system was last cleaned."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Keep these records in one place and keep them current. Fire marshals ask for them. Insurance carriers ask for them after a loss. Landlords ask for them at lease renewal. Our post on the hood cleaning certificate of compliance explains what each document means and who asks for it."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"If a company finishes the job and hands you only an invoice, they have not finished the job. An invoice proves you paid. It does not prove the system is clean."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              To confirm your system meets code, our <Link href="/services/nfpa-inspection" style={{ color: 'var(--rust)' }}>NFPA 96 inspection service</Link> checks it against the standard.
            </p>

            <h2 id="insurance-and-licensing" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Insurance, Licensing, and Who Is Liable</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Certification covers the work. Insurance covers the risk. A crew working with water, chemicals, ladders, and rooftop equipment inside your building can cause damage or get hurt, and you want to be sure who pays when something goes wrong."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Ask for a certificate of insurance showing general liability coverage and, if the company has employees, workers compensation coverage. Ask to be named as an additional insured if your landlord requires it. Check that the policy is current and that the company name on it matches the company on your contract."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Also confirm that the company holds a valid business license for the city where you operate. A company that is certified but uninsured, or insured but unlicensed, leaves a gap that ends up on your side of the table. If a rooftop fire spreads after a bad cleaning, the question of who was responsible and who was covered will matter a great deal."}
            </p>

            <h2 id="red-flags" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Red Flags That Mean the Company Is Not Really Certified</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Some warning signs show up fast. A company that cannot say which standard it follows is not working to one. A company that says certification is not needed in California is giving you bad advice, because the standard asks for it and the fire official enforces it."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"A company that quotes a price over the phone without asking about your system is not planning to look at it closely. A company that does not clean to the fan, or says the duct does not need cleaning, is skipping the part of the system where fires travel. A company that gives no written report, no photos, and no certificate cannot prove what it did."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"A company that subcontracts the work and cannot tell you who will be in your kitchen is passing risk to you. And a company that pressures you to sign today or pay in cash for a discount is not a company you want holding your records."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"None of these means you cannot work with a smaller company. Plenty of small crews do excellent work. The test is the same for everyone: can they show training, follow the standard, carry insurance, and hand over the paperwork."}
            </p>

            <h2 id="why-it-matters" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Certified Cleaning Matters to Inspectors and Insurers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"A fire marshal who reviews your system wants to see that the cleaning was done to the standard by someone acceptable. A dated sticker and a current report from a certified company answers that in seconds. A missing record, or a record from a company the inspector does not recognize, starts a longer conversation."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Insurance carriers care for a different reason. After a kitchen fire, the carrier looks at whether the exhaust system was maintained. If the cleaning was done by an uncertified vendor, or there are no records, the carrier has grounds to question the claim. That is the worst time to find out your hood cleaner did not meet the standard."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Landlords and franchisors add a third layer. Many leases and brand agreements require proof of NFPA 96 compliant cleaning on a set schedule. Meeting that requirement with a certified vendor, and keeping the documents, protects your lease and your brand standing. Our guide to kitchen exhaust inspection covers what inspectors check and how to be ready."}
            </p>

            <h2 id="cleaning-frequency" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Certified Cleaning on the Right Schedule</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Certification is only half the picture. The other half is frequency. NFPA 96 sets how often the system must be inspected and cleaned based on your cooking type and volume. High volume operations such as charbroiling, wok cooking, and 24 hour kitchens need service more often than a low volume kitchen."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"A certified company sets your schedule against the standard, not against its own calendar. We look at what you cook, how many hours you run, and how fast grease builds up in your system, and we set an interval that keeps you compliant. Our guide on how often a restaurant hood should be cleaned shows how the intervals work."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"If your last cleaning was done by a company you cannot verify, the safest move is a full system cleaning from a certified crew, with a fresh report and sticker, so your records start clean."}
            </p>

            <h2 id="what-to-expect" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What You Get When You Hire Core Hood Cleaning</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"Our crews clean to NFPA 96 on every job, and we document each one. You get a clear scope before we start, a crew that arrives when we said it would, and a kitchen left clean and ready for service. You get the written report, the before and after photos, the compliance certificate, and the dated sticker."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"We service restaurants, hotels, schools, hospitals, breweries, commissaries, food trucks, and stadiums across San Diego County. Whether you run one hood or a dozen, you get one point of contact and one set of records you can hand to anyone who asks."}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              {"If you want to confirm that your current system meets the standard, our NFPA 96 inspection service checks it and tells you what, if anything, needs attention."}
            </p>

            <div style={{ background: 'var(--rust)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Book a Certified NFPA 96 Cleaning</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.8)', lineHeight: '1.6', marginBottom: '24px' }}>An NFPA 96 certified crew, a clear scope, and full paperwork when we finish.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--off-white)', color: 'var(--rust)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none' }}>📞 (858) 361-2570</a>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'var(--off-white)', fontFamily: 'var(--font-display)', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.9rem', padding: '12px 24px', borderRadius: '4px', border: '2px solid rgba(238,239,226,0.5)', textDecoration: 'none' }}>Book Online</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>FAQ</h2>
            {faqs.map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}

            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginTop: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-text)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/choosing-hood-cleaning-company-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ How to Choose a Hood Cleaning Company in San Diego</Link>
                <Link href="/blog/what-is-nfpa-96" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Is NFPA 96</Link>
                <Link href="/blog/hood-cleaning-certificate-of-compliance-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Hood Cleaning Certificate of Compliance San Diego</Link>
                <Link href="/blog/kitchen-exhaust-inspection-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Kitchen Exhaust Inspection San Diego</Link>
                <Link href="/blog/restaurant-hood-cleaning-san-diego" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Restaurant Hood Cleaning San Diego</Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
