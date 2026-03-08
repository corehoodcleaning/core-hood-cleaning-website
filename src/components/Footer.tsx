import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/core-logo.png" alt="Core Services" width={100} height={100} style={{width:'100px', height:'auto'}} />
            <p>San Diego&apos;s NFPA 96 certified commercial hood cleaning company. Serving restaurants, hotels, schools, and commercial kitchens throughout San Diego County.</p>
            <span className="footer-tagline">+ At the Core of Every Job +</span>
            <div style={{marginTop:'16px'}}>
              <a href="https://www.instagram.com/coreservicesofficial" target="_blank" rel="noopener noreferrer" className="footer-instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                @coreservicesofficial
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services/hood-cleaning">Hood Cleaning</Link></li>
              <li><Link href="/services/filter-exchange">Filter Exchange</Link></li>
              <li><Link href="/services/nfpa-inspection">NFPA 96 Inspections</Link></li>
              <li><Link href="/blog">Blog &amp; Resources</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Locations</h4>
            <ul>
              {['La Jolla','Pacific Beach','Downtown San Diego','Chula Vista','Oceanside','Carlsbad','Escondido'].map(l => (
                <li key={l}><Link href={`/locations/${l.toLowerCase().replace(/ /g,'-')}`}>{l}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item"><a href="tel:8583612570">(858) 361-2570</a></div>
            <div className="footer-contact-item"><a href="mailto:chase@corehoodcleaning.com">chase@corehoodcleaning.com</a></div>
            <div className="footer-contact-item">5284 Eastgate Mall<br/>San Diego, CA 92121</div>
            <div className="footer-contact-item">24/7 Emergency Service</div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Core Hood Cleaning / Core Services. All rights reserved.</p>
          <div style={{display:'flex',gap:'24px'}}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
