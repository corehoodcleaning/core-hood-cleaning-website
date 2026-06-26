import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hood Cleaning Frequency by Cooking Type: NFPA 96 Equipment Guide | Core Hood Cleaning',
  description: 'NFPA 96 sets hood cleaning frequency by cooking type and equipment — not by calendar. Fryers, woks, grills, ovens, and solid fuel all require different intervals. Here is the complete breakdown.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/blog/hood-cleaning-frequency-cooking-type' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: 'Hood Cleaning Frequency by Cooking Type: The NFPA 96 Equipment Guide',
      description: 'NFPA 96 sets hood cleaning frequency by cooking type and equipment — not by calendar. A complete breakdown for fryers, woks, grills, solid fuel, ovens, and mixed kitchens.',
      image: 'https://www.corehoodcleaning.com/images/tech-hood-interior.jpg',
      author: { '@type': 'Organization', name: 'Core Hood Cleaning' },
      publisher: { '@type': 'Organization', name: 'Core Hood Cleaning', url: 'https://www.corehoodcleaning.com' },
      datePublished: '2026-06-26',
      dateModified: '2026-06-26',
      mainEntityOfPage: 'https://www.corehoodcleaning.com/blog/hood-cleaning-frequency-cooking-type',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'How does NFPA 96 determine hood cleaning frequency?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 bases cleaning frequency on the type of cooking and the volume of grease-producing operations, not on a fixed calendar interval. The standard defines four tiers: monthly for solid fuel or high-volume, quarterly for moderate volume, semi-annually for low volume, and annually for non-grease cooking operations. The equipment you operate determines which tier applies.' } },
        { '@type': 'Question', name: 'Do fryers require more frequent hood cleaning than ovens?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, significantly. Deep fryers are among the highest grease-producing pieces of equipment in a commercial kitchen. A kitchen operating fryers at high volume may require monthly cleaning. An operation using only convection ovens or steamers produces far less airborne grease and may qualify for semi-annual cleaning. Equipment type directly determines the cleaning interval under NFPA 96.' } },
        { '@type': 'Question', name: 'If I add a fryer to my kitchen, does my cleaning frequency change?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Adding high-grease-output equipment changes your NFPA 96 compliance category. If you add a fryer or any solid fuel equipment, you should have your exhaust system assessed by a certified technician to confirm the correct cleaning frequency. Operating at the old interval after adding high-output equipment puts you out of compliance.' } },
        { '@type': 'Question', name: 'What cooking types require monthly hood cleaning?', acceptedAnswer: { '@type': 'Answer', text: 'NFPA 96 requires monthly cleaning for: solid fuel cooking (wood-burning ovens, charcoal grills, mesquite grills), high-volume cooking operations (such as high-production burger concepts or large diners), 24-hour restaurant operations, and wok cooking at high volume.' } },
        { '@type': 'Question', name: 'Can a kitchen with mixed equipment have different cleaning intervals for different hood sections?', acceptedAnswer: { '@type': 'Answer', text: 'In practice, the entire exhaust system is typically cleaned on the interval required by the highest-output equipment present. If your kitchen has both a fryer (monthly) and a convection oven (semi-annual) under the same hood system, the monthly interval governs. Separate hood sections serving only low-output equipment can sometimes be scheduled differently with a certified assessment.' } },
        { '@type': 'Question', name: 'What happens if I clean less frequently than my cooking type requires?', acceptedAnswer: { '@type': 'Answer', text: 'You are out of compliance with NFPA 96 even if no inspection has caught it. If a fire occurs and your cleaning records show an interval shorter than required for your equipment, your insurance carrier can deny the claim. San Diego fire inspectors also check the sticker date against the required interval for your operation type.' } },
        { '@type': 'Question', name: 'How do I know what cleaning frequency is right for my restaurant?', acceptedAnswer: { '@type': 'Answer', text: 'A certified NFPA 96 technician should assess your kitchen — reviewing your specific cooking equipment, operating hours, and cooking volume — and recommend the correct interval. Core Hood Cleaning provides this assessment as part of the first service visit.' } }
      ]
    }
  ]
}

const tocItems = [
  { href: '#how-nfpa-sets-frequency', label: 'How NFPA 96 Sets Cleaning Frequency' },
  { href: '#monthly', label: 'Monthly: Solid Fuel & High-Volume' },
  { href: '#quarterly', label: 'Quarterly: Moderate Cooking Volume' },
  { href: '#semi-annual', label: 'Semi-Annual: Low-Volume Operations' },
  { href: '#annual', label: 'Annual: Non-Grease Cooking' },
  { href: '#equipment-guide', label: 'Equipment-by-Equipment Frequency Guide' },
  { href: '#mixed-kitchens', label: 'Mixed Kitchens: What Governs?' },
  { href: '#when-to-clean-early', label: 'When to Clean Before Your Schedule' },
  { href: '#faq', label: 'FAQ' },
]

export default function HoodCleaningFrequencyCookingType() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <article style={{ paddingTop: '100px' }}>
        <div style={{ background: 'var(--true-blue)', padding: '60px 0 48px' }}>
          <div className="container" style={{ maxWidth: '760px' }}>
            <Link href="/blog" style={{ color: 'rgba(238,239,226,0.5)', fontSize: '0.85rem', display: 'inline-block', marginBottom: '24px' }}>← Blog</Link>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rust)', background: 'rgba(137,29,27,0.2)', padding: '4px 10px', borderRadius: '4px' }}>Compliance</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(238,239,226,0.5)' }}>June 2026 · 8 min read</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', lineHeight: '1.1', marginBottom: '20px' }}>
              Hood Cleaning Frequency by Cooking Type: The Complete NFPA 96 Equipment Guide
            </h1>
            <p style={{ color: 'rgba(238,239,226,0.7)', fontSize: '1rem', lineHeight: '1.7' }}>
              NFPA 96 does not set a single cleaning interval for all restaurants. Frequency is determined by what you cook and how much grease your equipment produces. Here is how to find the right interval for every piece of equipment in your kitchen.
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

            <h2 id="how-nfpa-sets-frequency" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>How NFPA 96 Sets Cleaning Frequency</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>
              NFPA 96 — the national standard governing commercial kitchen exhaust systems — does not assign a single cleaning interval to all restaurants. Instead, it defines four frequency tiers based on the type and volume of cooking. The logic is simple: the more grease your equipment generates, the faster it accumulates in the exhaust system, and the more often cleaning is required to maintain a safe, compliant system.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', marginBottom: '40px' }}>
              {[
                { freq: 'Monthly', vol: 'Solid fuel / High-volume', color: '#8B1B1A' },
                { freq: 'Quarterly', vol: 'Moderate volume', color: 'var(--true-blue)' },
                { freq: 'Semi-Annual', vol: 'Low-volume / Seasonal', color: '#4a6741' },
                { freq: 'Annual', vol: 'Non-grease cooking', color: 'var(--gray-text)' },
              ].map(t => (
                <div key={t.freq} style={{ background: 'var(--off-white)', border: `2px solid ${t.color}`, borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', color: t.color, marginBottom: '6px' }}>{t.freq}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray-text)', lineHeight: '1.4' }}>{t.vol}</div>
                </div>
              ))}
            </div>

            <h2 id="monthly" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Monthly Cleaning: Solid Fuel & High-Volume Operations</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Monthly cleaning is the most frequent requirement and applies to the highest grease-generating operations. If your kitchen uses any of the following, you are in the monthly tier:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
              {[
                { equip: 'Wood-burning ovens', why: 'Combustion byproducts and wood grease accumulate rapidly — among the fastest grease loads in any commercial kitchen' },
                { equip: 'Charcoal and mesquite grills', why: 'Solid fuel cooking generates heavy particulate and grease vapor output' },
                { equip: 'High-volume fryer banks', why: 'Multiple fryers at continuous high output in a burger or fried chicken concept' },
                { equip: 'Wok cooking stations', why: 'Extremely high-temperature wok cooking releases dense grease clouds that coat ductwork rapidly' },
                { equip: '24-hour restaurant operations', why: 'Continuous operation with no overnight cooling period allows no recovery time — grease accumulates without break' },
                { equip: 'High-production operations', why: 'Any operation cooking at commercial scale for high seat counts or multiple service periods per day' },
              ].map(r => (
                <li key={r.equip} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#8B1B1A', background: 'rgba(139,27,26,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>Monthly</span>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '3px' }}>{r.equip}</div><div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.why}</div></div>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '40px' }}>Monthly cleaning may also be appropriate when visible grease accumulation is observed mid-cycle during a quarterly-scheduled service. A responsible technician will note this in the service report and recommend moving to monthly.</p>

            <h2 id="quarterly" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Quarterly Cleaning: Moderate Cooking Volume</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Quarterly (every 3 months) is the most common interval for San Diego full-service restaurants. It applies to moderate cooking volume operations using standard gas or electric cooking equipment:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { equip: 'Gas ranges and burners', why: 'Standard grease output for most full-service restaurant kitchens' },
                { equip: 'Flat-top griddles', why: 'Moderate grease production in typical diner, breakfast, or burger operations' },
                { equip: 'Standard charbroilers (gas)', why: 'Gas charbroilers produce significant grease output but generally fall in the quarterly range for moderate volume' },
                { equip: 'Single fryer operations', why: 'One or two fryers at normal production volume — not high-output continuous operations' },
                { equip: 'Full-service restaurant kitchens', why: 'The standard category for most San Diego sit-down restaurants with lunch and dinner service' },
                { equip: 'Fast casual concepts', why: 'Moderate cooking volume with standard gas or electric equipment' },
                { equip: 'Hotel kitchens and banquet operations', why: 'Variable volume but typically qualify for quarterly unless high-output events are frequent' },
              ].map(r => (
                <li key={r.equip} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--true-blue)', background: 'rgba(20,71,143,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>Quarterly</span>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '3px' }}>{r.equip}</div><div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.why}</div></div>
                </li>
              ))}
            </ul>

            <h2 id="semi-annual" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Semi-Annual Cleaning: Low-Volume Operations</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Every 6 months is appropriate for operations with genuinely low grease output and limited cooking hours. Misclassifying a moderate-volume kitchen as low-volume to extend intervals is a common compliance error.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                { equip: 'School and institutional cafeterias', why: 'Cooking occurs during limited hours (breakfast and lunch only), with reduced summer volume for seasonal facilities' },
                { equip: 'Senior centers and assisted living kitchens', why: 'Limited cooking hours and typically lower-grease menus' },
                { equip: 'Church and community center kitchens', why: 'Occasional use kitchens with low weekly cooking hours' },
                { equip: 'Low-volume pizza ovens', why: 'Deck ovens with primarily baked output and no high-grease frying operations' },
                { equip: 'Seasonal operations', why: 'Restaurants that close for part of the year — cleaning frequency applies to active operating periods' },
              ].map(r => (
                <li key={r.equip} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid var(--gray-light)', alignItems: 'flex-start' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: '#4a6741', background: 'rgba(74,103,65,0.1)', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }}>Semi-Annual</span>
                  <div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--black)', marginBottom: '3px' }}>{r.equip}</div><div style={{ fontSize: '0.83rem', color: 'var(--gray-text)', lineHeight: '1.5' }}>{r.why}</div></div>
                </li>
              ))}
            </ul>

            <h2 id="annual" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Annual Cleaning: Non-Grease Cooking Operations</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Annual cleaning is reserved for facilities that produce minimal or no grease-laden vapor. These are relatively uncommon in commercial food service and require a certified assessment to confirm the classification is appropriate.</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                'Facilities using only steamers, kettles, or high-temperature ovens without frying or grilling',
                'Operations where cooking is limited to reheating pre-cooked food with no open-flame or high-grease production',
                'Facilities that have undergone a professional assessment confirming minimal grease vapor output',
              ].map(i => (
                <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--gray-text)', fontWeight: 700, flexShrink: 0 }}>→</span>{i}
                </li>
              ))}
            </ul>

            <h2 id="equipment-guide" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Equipment-by-Equipment Frequency Reference</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Use this as a quick reference. When in doubt, the higher-frequency tier applies — under-cleaning is a compliance violation.</p>
            <div style={{ background: 'var(--off-white)', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', background: 'var(--true-blue)', padding: '10px 20px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--off-white)' }}>Equipment Type</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--off-white)' }}>Min. Frequency</span>
              </div>
              {[
                { equip: 'Wood-burning / charcoal / mesquite grill', freq: 'Monthly', color: '#8B1B1A' },
                { equip: 'Wok cooking station', freq: 'Monthly', color: '#8B1B1A' },
                { equip: '24-hour restaurant kitchen', freq: 'Monthly', color: '#8B1B1A' },
                { equip: 'High-volume fryer bank (multiple fryers, continuous)', freq: 'Monthly', color: '#8B1B1A' },
                { equip: 'Gas range / open burners', freq: 'Quarterly', color: 'var(--true-blue)' },
                { equip: 'Gas charbroiler (moderate volume)', freq: 'Quarterly', color: 'var(--true-blue)' },
                { equip: 'Flat-top griddle', freq: 'Quarterly', color: 'var(--true-blue)' },
                { equip: 'Single or dual fryer (normal volume)', freq: 'Quarterly', color: 'var(--true-blue)' },
                { equip: 'Combination oven (combi)', freq: 'Quarterly', color: 'var(--true-blue)' },
                { equip: 'Conveyor pizza oven (moderate volume)', freq: 'Quarterly', color: 'var(--true-blue)' },
                { equip: 'School / institutional kitchen (limited hours)', freq: 'Semi-Annual', color: '#4a6741' },
                { equip: 'Church or community center kitchen', freq: 'Semi-Annual', color: '#4a6741' },
                { equip: 'Seasonal restaurant (active months only)', freq: 'Semi-Annual', color: '#4a6741' },
                { equip: 'Steamer / kettle only kitchen', freq: 'Annual', color: 'var(--gray-text)' },
              ].map((r, i) => (
                <div key={r.equip} style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '12px 20px', borderBottom: '1px solid var(--gray-light)', background: i % 2 === 0 ? 'var(--off-white)' : 'var(--white)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--charcoal)' }}>{r.equip}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', color: r.color, textAlign: 'right' }}>{r.freq}</span>
                </div>
              ))}
            </div>

            <h2 id="mixed-kitchens" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>Mixed Kitchens: What Governs the Interval?</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '20px' }}>Most commercial kitchens run multiple types of equipment under the same hood system. The rule: the entire exhaust system is cleaned on the interval required by the highest-output equipment present.</p>
            <div style={{ background: 'var(--off-white)', border: '1px solid var(--gray-light)', borderLeft: '4px solid var(--rust)', borderRadius: '8px', padding: '24px', marginBottom: '40px' }}>
              {[
                { scenario: 'Kitchen with gas range + single fryer', result: 'Quarterly — fryer does not push this to monthly unless volume is high' },
                { scenario: 'Kitchen with gas range + wood-burning oven', result: 'Monthly — the wood-burning oven governs the entire system' },
                { scenario: 'Kitchen with gas range + wok station', result: 'Monthly — wok output governs, even if wok is used only for part of service' },
                { scenario: 'School cafeteria with gas range + steam kettle only', result: 'Semi-annual — low volume, limited hours, no high-grease equipment' },
              ].map(r => (
                <div key={r.scenario} style={{ padding: '12px 0', borderBottom: '1px solid var(--gray-light)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{r.scenario}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--gray-text)' }}>→ {r.result}</div>
                </div>
              ))}
            </div>

            <h2 id="when-to-clean-early" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '16px' }}>When to Clean Before Your Scheduled Date</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-text)', lineHeight: '1.8', marginBottom: '16px' }}>Your scheduled interval is a minimum. These conditions warrant cleaning before the next scheduled date:</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {[
                'Visible grease dripping from hood filters or canopy interior during service',
                'Grease found in the ductwork access areas between scheduled cleanings',
                'Fire suppression system technician notes grease accumulation on nozzle heads',
                'You added high-grease equipment (fryer, charbroiler, wok) since the last service',
                'Your cooking volume significantly increased — new service hours, larger events, expanded menu',
                'Fire marshal or health inspector notes grease accumulation during inspection',
              ].map(i => (
                <li key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: '1px solid var(--gray-light)', fontSize: '0.9rem', color: 'var(--charcoal)', lineHeight: '1.6' }}>
                  <span style={{ color: 'var(--rust)', fontWeight: 700, flexShrink: 0 }}>→</span>{i}
                </li>
              ))}
            </ul>

            <div style={{ background: 'var(--true-blue)', borderRadius: '8px', padding: '32px', marginBottom: '48px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--off-white)', marginBottom: '8px' }}>Get the Right Frequency for Your Kitchen</p>
              <p style={{ fontSize: '0.9rem', color: 'rgba(238,239,226,0.75)', lineHeight: '1.6', marginBottom: '24px' }}>Core Hood Cleaning assesses your specific equipment and cooking volume to determine the correct NFPA 96 cleaning interval — and puts it in writing on your service documentation.</p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Site Assessment</a>
                <a href="tel:8583612570" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--off-white)', textTransform: 'uppercase', fontSize: '1rem' }}>📞 (858) 361-2570</a>
              </div>
            </div>

            <h2 id="faq" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '24px' }}>Frequently Asked Questions</h2>
            {[
              { q: 'How does NFPA 96 determine hood cleaning frequency?', a: 'NFPA 96 bases frequency on cooking type and volume — not a fixed calendar. It defines four tiers: monthly for solid fuel or high-volume, quarterly for moderate volume, semi-annually for low-volume, and annually for non-grease operations. Your equipment determines which tier applies.' },
              { q: 'Do fryers require more frequent hood cleaning than ovens?', a: 'Yes. Deep fryers are among the highest grease-producing equipment in a commercial kitchen. A high-volume fryer operation may require monthly cleaning. An operation using only convection ovens may qualify for semi-annual. Equipment type directly determines the interval under NFPA 96.' },
              { q: 'If I add a fryer to my kitchen, does my cleaning frequency change?', a: 'Yes. Adding high-grease-output equipment changes your NFPA 96 category. Have your system assessed by a certified technician to confirm the correct interval after any equipment addition.' },
              { q: 'What cooking types require monthly hood cleaning?', a: 'Solid fuel cooking (wood-burning ovens, charcoal grills), high-volume cooking operations, 24-hour restaurants, and high-volume wok cooking all require monthly cleaning under NFPA 96.' },
              { q: 'Can a kitchen with mixed equipment have different cleaning intervals for different sections?', a: 'In practice, the entire system is cleaned on the interval required by the highest-output equipment. If a fryer (monthly) and a convection oven (semi-annual) share the same hood, monthly governs. Separate hood sections can sometimes be scheduled differently with a certified assessment.' },
              { q: 'What happens if I clean less frequently than my cooking type requires?', a: "You are out of compliance with NFPA 96 even if no inspection has caught it yet. If a fire occurs, your insurance carrier can deny the claim if cleaning records show an interval shorter than required for your equipment type." },
              { q: 'How do I know what cleaning frequency is right for my restaurant?', a: 'A certified NFPA 96 technician should assess your kitchen — reviewing your specific equipment, operating hours, and cooking volume — and confirm the correct interval in writing. Core Hood Cleaning provides this assessment as part of every first service visit.' },
            ].map(faq => (
              <div key={faq.q} style={{ borderBottom: '1px solid var(--gray-light)', padding: '20px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--black)', marginBottom: '10px', lineHeight: '1.4' }}>{faq.q}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--gray-text)', lineHeight: '1.8', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
