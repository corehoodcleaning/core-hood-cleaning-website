import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { absolute: 'Hood Cleaning Service Areas in San Diego County | Core Hood Cleaning' },
  description: 'NFPA 96 certified commercial hood cleaning across San Diego County: La Jolla to Oceanside, Chula Vista to Escondido. Find your city. Call (858) 361-2570.',
  alternates: { canonical: 'https://www.corehoodcleaning.com/locations' },
}

const AREAS: { region: string; cities: { slug: string; name: string }[] }[] = [
  { region: 'North County', cities: [
    { slug: 'oceanside', name: 'Oceanside' }, { slug: 'carlsbad', name: 'Carlsbad' }, { slug: 'vista', name: 'Vista' },
    { slug: 'san-marcos', name: 'San Marcos' }, { slug: 'escondido', name: 'Escondido' }, { slug: 'encinitas', name: 'Encinitas' },
  ]},
  { region: 'San Diego Coastal & Central', cities: [
    { slug: 'del-mar', name: 'Del Mar' }, { slug: 'la-jolla', name: 'La Jolla' }, { slug: 'pacific-beach', name: 'Pacific Beach' },
    { slug: 'downtown-san-diego', name: 'Downtown San Diego' }, { slug: 'mission-valley', name: 'Mission Valley' },
    { slug: 'miramar', name: 'Miramar' }, { slug: 'rancho-bernardo', name: 'Rancho Bernardo' }, { slug: 'poway', name: 'Poway' },
  ]},
  { region: 'East County', cities: [
    { slug: 'el-cajon', name: 'El Cajon' }, { slug: 'la-mesa', name: 'La Mesa' }, { slug: 'santee', name: 'Santee' },
  ]},
  { region: 'South Bay', cities: [
    { slug: 'chula-vista', name: 'Chula Vista' }, { slug: 'national-city', name: 'National City' }, { slug: 'coronado', name: 'Coronado' },
  ]},
]

export default function LocationsIndexPage() {
  return (
    <>
      <Nav />
      <section style={{paddingTop:'140px', paddingBottom:'72px', background:'var(--black)'}}>
        <div className="container" style={{maxWidth:'800px'}}>
          <p className="section-label">Service Areas</p>
          <h1 className="section-title light" style={{fontSize:'clamp(2rem,5vw,3.5rem)', marginBottom:'20px'}}>Hood Cleaning Across San Diego County</h1>
          <p style={{color:'rgba(238,239,226,0.65)', fontSize:'1.05rem', lineHeight:'1.8', marginBottom:'32px'}}>
            Core Hood Cleaning provides NFPA 96 certified, full-system commercial kitchen exhaust cleaning throughout San Diego County, with photo documentation and a compliance certificate on every service. Find your city below.
          </p>
          <div style={{display:'flex', gap:'16px', flexWrap:'wrap'}}>
            <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary">Book a Free Quote</a>
            <a href="tel:8583612570" className="btn-secondary">(858) 361-2570</a>
          </div>
        </div>
      </section>
      <section style={{padding:'72px 0', background:'var(--white)'}}>
        <div className="container">
          {AREAS.map(a => (
            <div key={a.region} style={{marginBottom:'48px'}}>
              <h2 className="section-title" style={{marginBottom:'20px'}}>{a.region}</h2>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'14px'}}>
                {a.cities.map(c => (
                  <Link key={c.slug} href={`/locations/${c.slug}`} style={{display:'block', padding:'20px 24px', background:'var(--off-white)', border:'1px solid var(--gray-light)', borderTop:'4px solid var(--rust)', borderRadius:'8px', fontFamily:'var(--font-display)', fontWeight:800, textTransform:'uppercase', color:'var(--black)'}}>
                    Hood Cleaning {c.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
