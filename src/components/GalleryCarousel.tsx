'use client'
import { useState } from 'react'

const GALLERY = [
  '/images/before-after-1.jpg',
  '/images/before-after-2.jpg',
  '/images/before-after-3.jpg',
  '/images/before-after-4.png',
  '/images/before-after-5.png',
]

export default function GalleryCarousel() {
  const [active, setActive] = useState(0)

  const go = (idx: number) => {
    const next = Math.max(0, Math.min(GALLERY.length - 1, idx))
    setActive(next)
    const el = document.getElementById('gallery-carousel')
    if (!el) return
    const slide = el.querySelector('.gallery-carousel-slide') as HTMLElement
    el.scrollTo({ left: next * slide?.offsetWidth, behavior: 'smooth' })
  }

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="gallery-header">
          <p className="section-label" style={{color:'#d47c7b'}}>Our Work</p>
          <h2 className="section-title light">Before &amp; After</h2>
          <p style={{color:'rgba(238,239,226,0.5)', marginTop:'16px', fontSize:'1rem'}}>Real results from real San Diego kitchens</p>
        </div>
        <div className="gallery-carousel-wrapper">
          <div className="gallery-carousel" id="gallery-carousel">
            {GALLERY.map((src, i) => (
              <div key={src} className="gallery-carousel-slide">
                <img src={src} alt={`Before and after hood cleaning ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
            ))}
          </div>
          <button className="gallery-btn gallery-btn-prev" onClick={() => go(active - 1)}>&#8592;</button>
          <button className="gallery-btn gallery-btn-next" onClick={() => go(active + 1)}>&#8594;</button>
        </div>
        <div className="gallery-dots">
          {GALLERY.map((_, i) => (
            <button key={i} className={`gallery-dot${i === active ? ' active' : ''}`} onClick={() => go(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
