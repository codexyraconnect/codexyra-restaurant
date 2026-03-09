import { useState, useRef, useEffect } from 'react'

const galleryItems = [
  { id:1, emoji:'🥩', label:'Truffle Wagyu', category:'Main Course', color:'from-amber-900/50 to-red-950/50', accent:'#c9a84c', height:'h-60' },
  { id:2, emoji:'🦞', label:'Lobster Bisque', category:'Seafood', color:'from-red-900/50 to-orange-950/50', accent:'#e07020', height:'h-44' },
  { id:3, emoji:'🍫', label:'Gold Soufflé', category:'Dessert', color:'from-yellow-900/50 to-amber-950/50', accent:'#c9a84c', height:'h-52' },
  { id:4, emoji:'🥗', label:'Garden Micro', category:'Salad', color:'from-green-900/50 to-emerald-950/50', accent:'#4a9a4a', height:'h-40' },
  { id:5, emoji:'🍝', label:'Black Ink Pasta', category:'Pasta', color:'from-indigo-900/50 to-purple-950/50', accent:'#8888cc', height:'h-56' },
  { id:6, emoji:'🦀', label:'Crab Royale', category:'Seafood', color:'from-orange-900/50 to-red-950/50', accent:'#e07020', height:'h-48' },
  { id:7, emoji:'🍷', label:'Reserve Malbec', category:'Wine', color:'from-red-950/50 to-purple-950/50', accent:'#9a3060', height:'h-44' },
  { id:8, emoji:'🧁', label:'Matcha Opera', category:'Dessert', color:'from-green-900/40 to-teal-950/50', accent:'#40a060', height:'h-52' },
  { id:9, emoji:'🫐', label:'Berry Panacotta', category:'Dessert', color:'from-purple-900/50 to-indigo-950/50', accent:'#8060c0', height:'h-40' },
]

function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="relative max-w-lg w-full mx-6 glass-card-dark rounded-lg overflow-hidden"
        onClick={e => e.stopPropagation()}
        style={{animation:'scaleIn 0.3s ease forwards'}}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full glass-card flex items-center justify-center text-gold hover:text-orange transition-colors"
        >
          ✕
        </button>

        {/* Visual */}
        <div className={`relative h-72 bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0"
            style={{backgroundImage: `radial-gradient(circle at 50% 50%, ${item.accent}20 0%, transparent 70%)`}} />
          <div className="relative z-10 w-40 h-40 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 35% 35%, #2a2820, #0f0e0c)',
              boxShadow: `0 30px 60px rgba(0,0,0,0.6), 0 0 40px ${item.accent}25`,
              border: `1px solid ${item.accent}20`,
            }}>
            <span className="text-7xl">{item.emoji}</span>
          </div>
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="section-label text-[10px] mb-2" style={{color: item.accent}}>{item.category}</div>
          <h3 className="font-cormorant font-bold text-3xl text-cream mb-3">{item.label}</h3>
          <p className="font-josefin text-xs text-cream/50 leading-relaxed tracking-wide mb-5">
            A signature creation by our head chef, crafted with the finest seasonal ingredients sourced locally and internationally. Each bite tells a story of passion and culinary artistry.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { onClose(); document.getElementById('reservations')?.scrollIntoView({behavior:'smooth'}) }}
              className="btn-gold px-6 py-2.5 text-xs rounded-sm tracking-widest flex-1"
            >
              Reserve to Taste
            </button>
            <button onClick={onClose} className="btn-outline-gold px-6 py-2.5 text-xs rounded-sm tracking-widest flex-1">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{background:'linear-gradient(180deg, #020202 0%, #0a0806 50%, #020202 100%)'}} />

      <div ref={sectionRef} className="section-reveal relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">
            <span className="text-gold/40 mr-3">——</span>
            Visual Feast
            <span className="text-gold/40 ml-3">——</span>
          </div>
          <h2 className="font-cormorant font-bold text-5xl lg:text-6xl text-cream mb-4">
            Food <span className="italic text-gold-shimmer">Gallery</span>
          </h2>
          <p className="font-josefin text-xs tracking-widest text-cream/40">
            Click any dish to explore
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`masonry-item relative overflow-hidden rounded-lg cursor-pointer group ${item.height}`}
              onClick={() => setSelected(item)}
              style={{minHeight: '10rem'}}
            >
              {/* BG */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-500 group-hover:scale-105`} />

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{background: `radial-gradient(circle at 50% 50%, ${item.accent}20 0%, transparent 70%)`}} />

              {/* Food */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.emoji}
                </span>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <div className="section-label text-[9px] mb-1" style={{color: item.accent}}>
                  {item.category}
                </div>
                <div className="font-cormorant text-lg font-bold text-cream">{item.label}</div>
                <div className="text-[9px] text-cream/60 font-josefin mt-1 tracking-widest">Click to explore →</div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-gold/25 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <LightboxModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
