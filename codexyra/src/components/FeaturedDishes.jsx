import { useRef, useEffect, useState } from 'react'

const dishes = [
  {
    name: 'Truffle Seared Wagyu',
    desc: 'A5 Wagyu beef with black truffle shavings, bone marrow jus & roasted vegetables',
    price: '₹4,800',
    tag: 'Chef\'s Special',
    emoji: '🥩',
    color: '#8b4513',
    gradient: 'from-amber-900/30 to-red-900/20',
  },
  {
    name: 'Lobster Thermidor',
    desc: 'Whole Maine lobster, cognac cream sauce, gruyère gratin, herb butter',
    price: '₹5,200',
    tag: 'Bestseller',
    emoji: '🦞',
    color: '#cc4400',
    gradient: 'from-red-900/30 to-orange-900/20',
  },
  {
    name: 'Foie Gras Royale',
    desc: 'Pan-seared duck foie gras, caramelized fig chutney, brioche toast, aged balsamic',
    price: '₹3,600',
    tag: 'Premium',
    emoji: '🍽️',
    color: '#c9a84c',
    gradient: 'from-yellow-900/30 to-amber-900/20',
  },
  {
    name: 'Black Ink Risotto',
    desc: 'Cuttlefish ink arborio, saffron seafood medley, aged parmesan, micro greens',
    price: '₹2,800',
    tag: 'Signature',
    emoji: '🦑',
    color: '#4a4a8a',
    gradient: 'from-indigo-900/30 to-purple-900/20',
  },
  {
    name: 'Gold Dusted Soufflé',
    desc: 'Dark 70% Valrhona chocolate soufflé, edible 24K gold, vanilla Chantilly cream',
    price: '₹1,600',
    tag: 'Dessert',
    emoji: '🍫',
    color: '#c9a84c',
    gradient: 'from-yellow-900/30 to-orange-900/20',
  },
  {
    name: 'Himalayan Salt Salmon',
    desc: 'Wild-caught Norwegian salmon, pink Himalayan crust, dill beurre blanc, caviar',
    price: '₹3,200',
    tag: 'Seasonal',
    emoji: '🐟',
    color: '#e06060',
    gradient: 'from-rose-900/30 to-pink-900/20',
  },
]

function DishCard({ dish, index }) {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -14, y: x * 14 })
  }

  return (
    <div
      ref={cardRef}
      className="tilt-card glass-card rounded-lg overflow-hidden cursor-pointer group"
      style={{
        transform: hovered ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.03)` : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
        transition: hovered ? 'transform 0.1s ease, box-shadow 0.3s ease' : 'transform 0.5s ease, box-shadow 0.3s ease',
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      onMouseMove={handleMove}
    >
      {/* Food visual */}
      <div className={`relative h-52 bg-gradient-to-br ${dish.gradient} overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 30% 30%, ${dish.color} 0%, transparent 60%)`
        }} />

        {/* Plate visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Plate */}
            <div className="w-36 h-36 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #2a2820, #0f0e0c)',
                boxShadow: `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${dish.color}20, inset 0 1px 0 rgba(201,168,76,0.1)`,
                border: '1px solid rgba(201,168,76,0.15)'
              }}>
              <span className="text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                {dish.emoji}
              </span>
            </div>
            {/* Shimmer ring on hover */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
              style={{
                boxShadow: `0 0 0 2px ${dish.color}40, 0 0 30px ${dish.color}20`,
              }} />
          </div>
        </div>

        {/* Tag */}
        <div className="absolute top-3 right-3">
          <span className="text-[9px] tracking-widest uppercase font-josefin px-2.5 py-1 rounded-sm"
            style={{background:`${dish.color}30`, color: dish.color, border:`1px solid ${dish.color}40`}}>
            {dish.tag}
          </span>
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          style={{background: `linear-gradient(to top, rgba(0,0,0,0.3), transparent)`}} />
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-cormorant font-bold text-lg text-cream group-hover:text-gold transition-colors duration-300 leading-tight">
            {dish.name}
          </h3>
          <span className="font-cormorant font-bold text-xl text-gold ml-3 flex-shrink-0">{dish.price}</span>
        </div>
        <p className="text-xs font-josefin text-cream/50 leading-relaxed mb-4 tracking-wide">{dish.desc}</p>

        <div className="flex items-center justify-between">
          <div className="deco-line" />
          <button className="text-[10px] tracking-widest text-gold/60 hover:text-gold font-josefin uppercase transition-colors duration-300 flex items-center gap-1.5">
            Order Now <span className="text-base">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedDishes() {
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
    <section id="menu" className="relative py-28 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #020202 0%, #0a0806 50%, #020202 100%)'
      }} />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(ellipse 100% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 100%)'
      }} />

      <div ref={sectionRef} className="section-reveal relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">
            <span className="text-gold/40 mr-3">——</span>
            Culinary Masterpieces
            <span className="text-gold/40 ml-3">——</span>
          </div>
          <h2 className="font-cormorant font-bold text-5xl lg:text-6xl text-cream mb-4">
            Featured <span className="italic text-gold-shimmer">Dishes</span>
          </h2>
          <p className="font-josefin text-xs tracking-widest text-cream/40 uppercase">
            Handpicked by our Master Chef
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((d, i) => <DishCard key={d.name} dish={d} index={i} />)}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button className="btn-outline-gold px-10 py-4 text-xs rounded-sm tracking-widest">
            View Full Menu ✦
          </button>
        </div>
      </div>
    </section>
  )
}
