import { useState, useEffect, useRef } from 'react'

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Food Critic, The Tribune',
    review: 'An extraordinary culinary journey. Chef Arjun\'s truffle wagyu is the single best dish I\'ve tasted in Chandigarh — perhaps all of North India. The ambiance is cinematic, the service immaculate.',
    rating: 5,
    initials: 'PS',
    color: '#c9a84c',
  },
  {
    name: 'Rahul Mehra',
    role: 'CEO, TechVentures India',
    review: 'Codexyra is our default for all client dinners. The attention to detail, from the custom engraved menus to the personalized amuse-bouche, makes every guest feel like royalty. An unmissable experience.',
    rating: 5,
    initials: 'RM',
    color: '#e07020',
  },
  {
    name: 'Ananya Singh',
    role: 'Lifestyle Blogger',
    review: 'I\'ve dined at restaurants across 30 countries, and Codexyra ranks among the most memorable. The gold soufflé alone is worth the trip to Chandigarh. Absolutely phenomenal.',
    rating: 5,
    initials: 'AS',
    color: '#c9a84c',
  },
  {
    name: 'Vikram Bose',
    role: 'Architect & Design Enthusiast',
    review: 'Beyond the food — which is outstanding — the design of Codexyra is a masterpiece in itself. Dark elegance, golden accents, perfect acoustics. Dining here is an art installation you eat.',
    rating: 5,
    initials: 'VB',
    color: '#8888cc',
  },
  {
    name: 'Nisha Kapoor',
    role: 'Chartered Accountant',
    review: 'Celebrated our anniversary here and it exceeded every expectation. The reservation team arranged fresh orchids on the table and a custom dessert with our names. Pure magic.',
    rating: 5,
    initials: 'NK',
    color: '#e07020',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({length: 5}, (_, i) => (
        <span key={i} className={i < count ? 'star' : 'star-empty'} style={{fontSize:'14px'}}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef(null)
  const intervalRef = useRef(null)

  const goTo = (idx) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(idx)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const next = () => goTo((current + 1) % reviews.length)
  const prev = () => goTo((current - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000)
    return () => clearInterval(intervalRef.current)
  }, [current])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const r = reviews[current]

  return (
    <section id="reviews" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #020202 0%, #0c0a07 50%, #020202 100%)'
      }} />

      {/* Background quote mark */}
      <div className="absolute top-20 left-10 font-cormorant text-[20rem] text-gold/3 leading-none pointer-events-none select-none">
        "
      </div>

      <div ref={sectionRef} className="section-reveal relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">
            <span className="text-gold/40 mr-3">——</span>
            What Guests Say
            <span className="text-gold/40 ml-3">——</span>
          </div>
          <h2 className="font-cormorant font-bold text-5xl lg:text-6xl text-cream mb-4">
            Guest <span className="italic text-gold-shimmer">Reviews</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main card */}
          <div
            key={current}
            className="glass-card rounded-lg p-10 lg:p-14 text-center relative overflow-hidden"
            style={{
              borderColor: `${r.color}20`,
              animation: 'scaleIn 0.5s ease forwards',
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${r.color}06 0%, transparent 60%)`}} />

            {/* Stars */}
            <div className="flex justify-center mb-6">
              <Stars count={r.rating} />
            </div>

            {/* Review text */}
            <blockquote className="font-cormorant italic text-xl lg:text-2xl text-cream/85 leading-relaxed mb-8 max-w-2xl mx-auto">
              "{r.review}"
            </blockquote>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="deco-line flex-1 max-w-[60px]" />
              <span className="text-gold text-xs">✦</span>
              <div className="deco-line flex-1 max-w-[60px]" />
            </div>

            {/* Reviewer */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center font-cormorant font-bold text-lg flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${r.color}30, ${r.color}10)`,
                  border: `1px solid ${r.color}40`,
                  color: r.color,
                }}>
                {r.initials}
              </div>
              <div className="text-left">
                <div className="font-josefin text-sm font-semibold text-cream tracking-wider">{r.name}</div>
                <div className="font-josefin text-xs text-cream/40 tracking-wide mt-0.5">{r.role}</div>
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-10 h-10 rounded-full glass-card flex items-center justify-center text-gold hover:border-gold/40 hover:text-orange transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-10 h-10 rounded-full glass-card flex items-center justify-center text-gold hover:border-gold/40 hover:text-orange transition-all duration-300"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? '28px' : '8px',
                height: '8px',
                background: i === current ? '#c9a84c' : 'rgba(201,168,76,0.25)',
              }}
            />
          ))}
        </div>

        {/* All reviews summary */}
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { n: '4.9', l: 'Average Rating', icon: '⭐' },
            { n: '2.4K+', l: 'Happy Guests', icon: '😊' },
            { n: '98%', l: 'Recommend Us', icon: '❤️' },
          ].map(s => (
            <div key={s.l} className="glass-card rounded-lg p-5">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-cormorant text-3xl font-bold text-gold">{s.n}</div>
              <div className="font-josefin text-[10px] text-cream/50 tracking-widest mt-1 uppercase">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
