'use client'

const REVIEWS = [
  { name: 'Daniela D.', role: 'Head of Operations', text: 'Highly recommend Core Hood Cleaning! Their team is professional, thorough, and extremely reliable. They do an outstanding job and always leave the kitchen spotless.' },
  { name: 'Cory O.', role: 'Property Manager', text: "Chase was a breath of fresh air in an industry burdened with integrity issues. He went above and beyond to make sure we had all the information we needed. A no-pressure sales transaction is hard to find — real diamond in the rough." },
  { name: 'Dream P.', role: 'Multi-Unit Operator', text: "We hired Core to clean our kitchen hood and couldn't be happier. Professional, punctual, and thorough. Before-and-after photos showed the incredible difference. Chase is the best — 100/10." },
  { name: 'Chris T.', role: 'Head Chef', text: "Been dealing with many companies over the years and Core Hood has it done right. Very friendly, professional, and did a great job. We look forward to a long working relationship. Highly recommend if you're in San Diego." },
  { name: 'Crystal R.', role: 'Restaurant Owner', text: 'Genuine guys who know their business really well. They were very clear and concise and answered all our questions. Great communication from start to finish.' },
  { name: 'Sergio B.', role: 'General Manager', text: "I manage a small restaurant in Coronado. We switched from a bigger company and the difference is night and day. Core cares about their clients and shows it in every service." },
  { name: 'Cammy Mattia', role: 'Multi-Location Owner', text: "Chase is the man!!! I've been dealing with him for almost 3 years!! I now use him across 4 different locations! Fast and efficient work every single time. Definitely give him a call!!!" },
  { name: 'D.', role: 'Local Head Chef', text: "These guys are pros, top to bottom. The work speaks for itself, well done lads, highly recommend. Very professional and organized." },
]

export default function ReviewsCarousel() {
  const scroll = (dir: number) => {
    const el = document.getElementById('reviews-carousel')
    if (!el) return
    const slide = el.querySelector('.carousel-slide') as HTMLElement
    el.scrollBy({ left: dir * (slide?.offsetWidth + 24), behavior: 'smooth' })
  }

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <p className="section-label">Customer Reviews</p>
          <h2 className="section-title">What San Diego Restaurants Say</h2>
          <div className="stars" style={{marginTop:'16px', textAlign:'center'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p style={{textAlign:'center', color:'var(--gray-text)', marginTop:'8px', fontSize:'0.9rem'}}>Rated 5.0 on Google &middot; San Diego County</p>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel" id="reviews-carousel">
            {REVIEWS.map((r) => (
              <div key={r.name} className="carousel-slide review-card">
                <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <blockquote>&ldquo;{r.text}&rdquo;</blockquote>
                <div className="reviewer">
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={() => scroll(-1)}>&#8592;</button>
            <button className="carousel-btn" onClick={() => scroll(1)}>&#8594;</button>
          </div>
        </div>
        <div style={{textAlign:'center', marginTop:'36px'}}>
          <a
            href="https://www.google.com/maps/place/Core+Hood+Cleaning"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
            style={{display:'inline-flex', alignItems:'center', gap:'8px', padding:'14px 28px', border:'2px solid var(--rust)', color:'var(--rust)', borderRadius:'4px', fontFamily:'var(--font-display)', fontWeight:800, fontSize:'0.85rem', letterSpacing:'0.06em', textTransform:'uppercase', transition:'all 0.2s'}}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            View All 40+ Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
