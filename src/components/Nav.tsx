'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <Image src="/images/core-logo.png" alt="Core Services" width={110} height={52} className="nav-logo-img" />
          <div className="nav-logo-text">
            Core Hood Cleaning
            <span className="nav-logo-sub">San Diego, CA &middot; NFPA 96 Certified</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="nav-links">
          <li className="nav-dropdown">
            <span className="nav-dropdown-trigger">Services</span>
            <div className="nav-dropdown-menu">
              <Link href="/services/hood-cleaning">Hood Cleaning</Link>
              <Link href="/services/filter-exchange">Filter Exchange</Link>
              <Link href="/services/nfpa-inspection">NFPA 96 Inspections</Link>
            </div>
          </li>
          <li><a href="/#gallery">Our Work</a></li>
          <li><Link href="/about">About</Link></li>
          <li><a href="/#locations">Locations</a></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>

        <div className="nav-cta">
          <a href="tel:8583612570" className="nav-phone">(858) 361-2570</a>
          <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary nav-btn">Book Now</a>
          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <Link href="/services/hood-cleaning" onClick={() => setMenuOpen(false)}>Hood Cleaning</Link>
          <Link href="/services/filter-exchange" onClick={() => setMenuOpen(false)}>Filter Exchange</Link>
          <Link href="/services/nfpa-inspection" onClick={() => setMenuOpen(false)}>NFPA 96 Inspections</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <a href="/#locations" onClick={() => setMenuOpen(false)}>Locations</a>
          <a href="tel:8583612570" className="nav-mobile-phone">(858) 361-2570</a>
          <a href="https://api.leadconnectorhq.com/widget/bookings/corehoodcleaning" className="btn-primary" onClick={() => setMenuOpen(false)} style={{marginTop:'8px', textAlign:'center', justifyContent:'center'}}>Book Now</a>
        </div>
      )}
    </nav>
  )
}
