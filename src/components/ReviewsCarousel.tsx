'use client'

const REVIEWS = [
  { name: 'Daniela D.', role: 'Head of Operations', text: 'Highly recommend Core Hood Cleaning! Their team is professional, thorough, and extremely reliable. They do an outstanding job and always leave the kitchen spotless.' },
  { name: 'Cory O.', role: 'Property Manager', text: "Chase was a breath of fresh air in an industry burdened with integrity issues. He went above and beyond to make sure we had all the information we needed. A no-pressure sales transaction is hard to find — real diamond in the rough." },
  { name: 'Dream P.', role: 'Multi-Unit Operator', text: "We hired Core to clean our kitchen hood and couldn't be happier. Professional, punctual, and thorough. Before-and-after photos showed the incredible difference. Chase is the best — 100/10." },
  { name: 'Chris T.', role: 'Head Chef', text: "Been dealing with many companies over the years and Core Hood has it done right. Very friendly, professional, and did a great job. We look forward to a long working relationship. Highly recommend if you're in San Diego." },
  { name: 'Crystal R.', role: 'Restaurant Owner', text: 'Genuine guys who know their business really well. They were very clear and concise and answered all our questions. Great communication from start to finish.' },
  { name: 'Sergio B.', role: 'General Manager', text: 'I manage a small restaurant in Coronado. We switched from a bigger company and the difference is night and day. Core cares about their clients and shows it in every service.' },
  { name: 'Marcus T.', role: 'Executive Chef', text: 'Core Hood Cleaning is the only company I trust for our kitchen. They show up on time, do a thorough job, and the documentation they provide makes health inspections a breeze.' },
  { name: 'Angela R.', role: 'Restaurant Owner', text: 'After a failed health inspection with our previous cleaning company, we switched to Core. They identified issues the other company had been missing for months. Incredible attention to detail.' },
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
      </div>
    </section>
  )
}
