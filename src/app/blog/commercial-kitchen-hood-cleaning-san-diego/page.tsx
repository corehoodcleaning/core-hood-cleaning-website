import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Kitchen Hood Cleaning San Diego: Complete NFPA 96 Compliance Guide | Core Hood Cleaning',
  description: 'Everything San Diego restaurant owners need to know about commercial kitchen hood cleaning — NFPA 96 requirements, cleaning frequency, what a full service covers, and how to pass fire marshal inspections.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/commercial-kitchen-hood-cleaning-san-diego' },
}

const jsonLdBlogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Commercial Kitchen Hood Cleaning San Diego: Complete NFPA 96 Compliance Guide',
  image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
  author: {
    '@type': 'Person',
    name: 'Chase Mangini',
    url: 'https://www.corehoodcleaning.com/about'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Core Hood Cleaning',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.corehoodcleaning.com/images/core-logo-transparent.png'
    }
  },
  datePublished: '2026-05-29',
  dateModified: '2026-05-29',
  description: 'Everything San Diego restaurant owners need to know about commercial kitchen hood cleaning — NFPA 96 requirements, cleaning frequency, what a full service covers, and how to pass fire marshal inspections.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.corehoodcleaning.com/blog/commercial-kitchen-hood-cleaning-san-diego'
  }
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should commercial kitchen hoods be cleaned in San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NFPA 96 requires monthly cleaning for high-volume operations, quarterly for moderate-volume restaurants, and semi-annually for low-volume kitchens. San Diego fire marshals enforce these frequencies during inspections.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens if I fail a fire inspection due to a dirty hood system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A failed fire inspection can result in an immediate closure order, fines, and voided insurance coverage. You\'ll need to schedule emergency cleaning and a re-inspection before reopening.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does a full commercial hood cleaning include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compliant hood cleaning covers the full exhaust path: hood canopy, baffles, plenum chamber, all ductwork, the rooftop exhaust fan, and grease containment. Every service from Core Hood Cleaning includes before and after photos and an NFPA 96 compliance certificate.'
      }
    },
    {
      '@type': 'Question',
      name: 'What areas of San Diego County do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of San Diego County — La Jolla, Pacific Beach, Downtown San Diego, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.'
      }
    }
  ]
}

export default function CommercialKitchenHoodCleaningSanDiego() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <Nav />

      <article style={{ paddingTop: '100px' }}>
        {/* HEADER */}
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Compliance</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>May 2026</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>Commercial Kitchen Hood Cleaning San Diego: The Complete NFPA 96 Guide</h1>
            <p style={{ color: 'rgba(238,239,226,0.6)', fontSize: '1rem', lineHeight: '1.7' }}>Everything San Diego restaurant owners need to know — cleaning frequency, what a full service actually covers, and exactly how to pass a fire marshal inspection.</p>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div style={{ background: 'var(--black)', maxHeight: '420px', overflow: 'hidden' }}>
          <div className="container" style={{ maxWidth: '760px', padding: '0' }}>
            <Image
              src="/images/tech-hood-interior.jpg"
              alt="NFPA 96 certified technician cleaning commercial kitchen hood interior in San Diego restaurant"
              width={760}
              height={420}
              priority
              style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9 }}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div style={{ background: 'var(--white)', padding: '64px 0' }}>
          <div className="container" style={{ maxWidth: '760px' }}>

            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '24px' }}>
              Your commercial kitchen exhaust system is your first line of defense against a grease fire. When buildup accumulates in the hood, ductwork, and rooftop fan, you&apos;re not just out of compliance — you&apos;re sitting on a fire hazard. San Diego fire marshals take NFPA 96 seriously, and a failed inspection means closure until you prove your kitchen is clean and safe.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              This guide covers what NFPA 96 actually requires, how cleaning frequency is determined, what a compliant service includes from hood canopy to rooftop fan, and what fire marshals look for when they walk through your kitchen.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What NFPA 96 Requires</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 — the Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations — is the national code adopted by San Diego County fire marshals and health departments. It sets the minimum cleaning frequency, defines what areas must be cleaned, and specifies what documentation is required after every service.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '32px' }}>
              The code doesn&apos;t care how clean your hood <em>looks</em>. It cares about grease accumulation throughout the entire exhaust path — including ductwork and the rooftop fan that most restaurant owners never see. That&apos;s where fires start.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Cleaning Frequency by Cooking Type</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              {[
                { freq: 'Monthly', type: 'High-Volume / Solid Fuel', color: 'var(--rust)' },
                { freq: 'Quarterly', type: 'Moderate Cooking Volume', color: 'var(--true-blue)' },
                { freq: 'Semi-Annually', type: 'Low-Volume / Seasonal', color: '#555' }
              ].map(r => (
                <div key={r.freq} style={{ background: 'var(--off-white)', border: `2px solid ${r.color}`, borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 900, textTransform: 'uppercase', color: r.color, marginBottom: '8px' }}>{r.freq}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--gray-text)', fontWeight: 600 }}>{r.type}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              <strong>Monthly</strong> applies to wood-burning ovens, charcoal grills, 24-hour operations, wok stations, and any high-volume frying operation. Most busy San Diego bars and high-volume restaurants fall here.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              <strong>Quarterly</strong> covers most full-service restaurants — moderate frying, grilling, and standard cooking volumes. If you&apos;re a typical San Diego restaurant doing consistent dinner service, this is usually your category.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '32px' }}>
              <strong>Semi-annually or annually</strong> applies to low-volume operations — cafes, small bakeries, senior centers, churches. If you cook a few hours a day with minimal grease output, you may qualify. A certified technician determines the right frequency after assessing your equipment and volume.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What a Full-System Cleaning Covers</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Surface cleaning fails inspections. NFPA 96 requires the complete exhaust path — not just what you can see. Here&apos;s what every compliant service from Core Hood Cleaning includes:
            </p>
            {[
              'Hood canopy, baffles, and plenum chamber',
              'Grease filters — removed, cleaned or exchanged, and reinstalled',
              'Full ductwork run from plenum to rooftop',
              'Exhaust fan blades, housing, and curb',
              'Grease containment and proper disposal',
              'Before and after photo documentation',
              'NFPA 96 compliance certificate',
              'Written service report',
            ].map(item => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--gray-light)' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--rust)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--charcoal)' }}>{item}</span>
              </div>
            ))}
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginTop: '24px', marginBottom: '32px' }}>
              The compliance certificate and photo documentation are what fire marshals and health inspectors ask for. If your current cleaning company doesn&apos;t provide both, you don&apos;t have proof of compliance — and neither does your insurance carrier.
            </p>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>What San Diego Fire Marshals Check</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              When a fire marshal walks into your kitchen, they&apos;re looking at three things: your cleaning documentation, your grease accumulation levels, and whether your cleaning frequency matches your cooking volume. They&apos;re not just glancing at the hood surface — they&apos;re checking accessible ductwork, the exhaust fan, and grease containment.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '32px' }}>
              Restaurants without current documentation face violations regardless of how recently they were cleaned. If you can&apos;t hand the inspector a compliance certificate with the date, areas cleaned, and technician certification, you don&apos;t have proof. That&apos;s the difference between passing on the spot and getting a violation notice.
            </p>

            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '28px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '8px' }}>Red-Tagged? Call Us First.</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>If you&apos;ve been red-tagged or have a fire marshal re-inspection coming up, we offer same-day emergency service throughout San Diego County. We&apos;ve helped dozens of San Diego restaurants resolve violations within 24 hours. Call <a href="tel:8583612570" style={{ color: 'var(--rust)', fontWeight: 600 }}>(858) 361-2570</a>.</p>
            </div>

            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Why Insurance Requires Documented Cleaning</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              Commercial kitchen insurance policies require documented proof of professional hood cleaning at the code-required frequency. When a grease fire occurs in a kitchen without proper records, insurers deny claims — leaving the restaurant owner personally liable for damages that can run into six figures.
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>
              The compliance certificate we provide after every service is what your insurance carrier needs on file. It documents the date, scope of work, and technician certification. Keep a copy — you&apos;ll need it if you ever file a claim.
            </p>

            {/* FAQ SECTION */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
              {[
                {
                  q: 'How often should commercial kitchen hoods be cleaned in San Diego?',
                  a: 'NFPA 96 sets the frequency by cooking type and volume: monthly for high-volume and solid-fuel operations, quarterly for moderate-volume restaurants, and semi-annually for low-volume kitchens. San Diego fire marshals enforce these requirements. Most full-service restaurants fall into the quarterly category.'
                },
                {
                  q: 'What happens if I fail a fire inspection due to a dirty hood system?',
                  a: 'A failed inspection can result in an immediate closure order, fines, and voided insurance coverage. You\'ll need to schedule emergency cleaning and pass a re-inspection before you can reopen. Core Hood Cleaning offers same-day emergency service for exactly this situation — call (858) 361-2570.'
                },
                {
                  q: 'What does a full commercial hood cleaning include?',
                  a: 'A compliant service covers the complete exhaust path: hood canopy, baffles, plenum, all ductwork from kitchen to rooftop, the exhaust fan, and grease containment. Every Core Hood Cleaning service includes before and after photos and an NFPA 96 compliance certificate.'
                },
                {
                  q: 'What areas of San Diego County do you serve?',
                  a: 'All of San Diego County — La Jolla, Pacific Beach, Downtown San Diego, Mission Valley, Chula Vista, Oceanside, Carlsbad, Escondido, El Cajon, Vista, San Marcos, National City, La Mesa, Coronado, Encinitas, Del Mar, Miramar, Rancho Bernardo, Poway, and Santee.'
                }
              ].map(f => (
                <div key={f.q} style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderRadius: '8px', padding: '28px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px' }}>{f.q}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-text)', lineHeight: '1.7' }}>{f.a}</p>
                </div>
              ))}
            </div>

            {/* RELATED LINKS */}
            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '32px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gray-mid)', marginBottom: '16px' }}>Related Reading</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <Link href="/blog/how-often-should-restaurant-hood-be-cleaned" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ How Often Should a Restaurant Hood Be Cleaned? (NFPA 96 Guide)</Link>
                <Link href="/blog/what-happens-during-hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ What Actually Happens During a Commercial Hood Cleaning?</Link>
                <Link href="/services/hood-cleaning" style={{ fontSize: '0.9rem', color: 'var(--rust)', textDecoration: 'none' }}>→ Our Hood Cleaning Service</Link>
              </div>
            </div>

            {/* CTA */}
            <div style={{ borderTop: '1px solid var(--gray-light)', paddingTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
              <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--rust)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  )
}
