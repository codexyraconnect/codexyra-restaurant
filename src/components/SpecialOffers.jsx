import { useRef, useEffect } from 'react'

const offers = [
  {
    icon: '👨‍🍳',
    tag: 'Every Weekend',
    title: 'Weekend Chef Special',
    desc: 'A 5-course tasting menu curated personally by our Head Chef. New creations every Friday–Sunday.',
    highlight: '5-Course Experience',
    cta: 'Book Now',
    accent: '#c9a84c',
    glowColor: 'rgba(201,168,76,0.25)',
    badge: 'LIMITED SEATS',
  },
  {
    icon: '🍕',
    tag: 'This Month Only',
    title: 'Buy 1 Pizza Get 1 Free',
    desc: 'Enjoy two artisan wood-fired pizzas for the price of one. Crafted with imported Italian ingredients.',
    highlight: '50% OFF Second Pizza',
    cta: 'Claim Offer',
    accent: '#e07020',
    glowColor: 'rgba(224,112,32,0.25)',
    badge: 'HOT DEAL',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    tag: 'Family Nights',
    title: '20% Off Family Dinner',
    desc: 'Tables of 4 or more get 20% off the total bill. Perfect for celebrations & family get-togethers.',
    highlight: '20% Discount',
    cta: 'Reserve Table',
    accent: '#c9a84c',
    glowColor: 'rgba(201,168,76,0.2)',
    badge: 'POPULAR',
  },
]

export default function SpecialOffers() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="offers" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{background:'linear-gradient(180deg, #020202 0%, #0d0a05 50%, #020202 100%)'}} />

      {/* Decorative lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-px"
        style={{background:'linear-gradient(90deg, transparent, rgba(201,168,76,0.15))'}} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-px"
        style={{background:'linear-gradient(270deg, transparent, rgba(201,168,76,0.15))'}} />

      <div ref={sectionRef} className="section-reveal relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">
            <span className="text-gold/40 mr-3">——</span>
            Exclusive Promotions
            <span className="text-gold/40 ml-3">——</span>
          </div>
          <h2 className="font-cormorant font-bold text-5xl lg:text-6xl text-cream mb-4">
            Special <span className="italic text-gold-shimmer">Offers</span>
          </h2>
        </div>

        {/* Offers grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <div
              key={offer.title}
              className="relative glass-card rounded-lg overflow-hidden group cursor-pointer"
              style={{
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* Animated glow border */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-pulse"
                style={{
                  background: `linear-gradient(135deg, ${offer.glowColor} 0%, transparent 60%)`,
                  filter: 'blur(1px)',
                }} />
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-gold/30 transition-all duration-500" />

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="text-[8px] tracking-widest font-josefin px-2.5 py-1 rounded-sm font-semibold"
                  style={{background: offer.accent, color: '#020202'}}>
                  {offer.badge}
                </span>
              </div>

              <div className="relative p-7 z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${offer.glowColor}`,
                    border: `1px solid ${offer.accent}30`,
                  }}>
                  <span className="text-3xl">{offer.icon}</span>
                </div>

                {/* Tag */}
                <div className="section-label text-[10px] mb-2" style={{color: offer.accent}}>
                  {offer.tag}
                </div>

                {/* Title */}
                <h3 className="font-cormorant font-bold text-2xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {offer.title}
                </h3>

                {/* Highlight */}
                <div className="inline-block px-3 py-1.5 rounded-sm mb-4"
                  style={{background: `${offer.accent}15`, border: `1px solid ${offer.accent}30`}}>
                  <span className="font-josefin text-xs tracking-wider" style={{color: offer.accent}}>
                    ✦ {offer.highlight}
                  </span>
                </div>

                {/* Desc */}
                <p className="font-josefin text-xs text-cream/50 leading-relaxed tracking-wide mb-6">
                  {offer.desc}
                </p>

                {/* CTA */}
                <button
                  onClick={() => document.getElementById('reservations')?.scrollIntoView({behavior:'smooth'})}
                  className="w-full py-3 text-xs tracking-widest font-josefin font-semibold rounded-sm transition-all duration-300 uppercase group-hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${offer.accent}, ${offer.accent}aa)`,
                    color: '#020202',
                  }}
                  onMouseEnter={e => e.target.style.boxShadow = `0 0 25px ${offer.glowColor}`}
                  onMouseLeave={e => e.target.style.boxShadow = 'none'}
                >
                  {offer.cta} →
                </button>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{background: `linear-gradient(90deg, transparent, ${offer.accent}, transparent)`}} />
            </div>
          ))}
        </div>

        {/* Countdown strip */}
        <div className="mt-12 glass-card rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4 animate-glow-pulse">
          <div className="flex items-center gap-4">
            <span className="text-3xl">⏳</span>
            <div>
              <div className="section-label text-[10px] mb-1">Limited Time Offer</div>
              <div className="font-cormorant text-xl text-cream">Complimentary Dessert with Any Reservation This Week</div>
            </div>
          </div>
          <button
            onClick={() => document.getElementById('reservations')?.scrollIntoView({behavior:'smooth'})}
            className="btn-gold px-8 py-3 text-xs rounded-sm flex-shrink-0 tracking-widest"
          >
            Claim Now
          </button>
        </div>
      </div>
    </section>
  )
}
