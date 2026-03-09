import { useEffect, useRef, useState } from 'react'

const FloatingFood = () => (
  <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex-shrink-0">
    {/* Outer ring */}
    <div className="absolute inset-0 rounded-full border border-gold/20 animate-spin-slow" />
    <div className="absolute inset-4 rounded-full border border-gold/10" style={{animation:'rotateSlow 12s linear infinite reverse'}} />

    {/* Glow */}
    <div className="absolute inset-0 rounded-full"
      style={{background:'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)'}} />

    {/* Plate base */}
    <div className="absolute inset-8 rounded-full animate-float"
      style={{
        background:'linear-gradient(135deg, #1a1612 0%, #0f0e0c 50%, #201c14 100%)',
        boxShadow:'0 30px 80px rgba(0,0,0,0.8), 0 0 40px rgba(201,168,76,0.15), inset 0 1px 0 rgba(201,168,76,0.1)',
        border:'1px solid rgba(201,168,76,0.2)'
      }}
    >
      {/* Food SVG - Decorative plate with food */}
      <div className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Plate */}
          <circle cx="100" cy="100" r="90" fill="url(#plateGrad)" />
          <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(201,168,76,0.3)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="72" fill="url(#innerPlate)" />

          {/* Steak/main dish */}
          <ellipse cx="100" cy="108" rx="42" ry="26" fill="url(#steakGrad)" />
          <ellipse cx="100" cy="105" rx="40" ry="24" fill="url(#steakTop)" />
          {/* Grill marks */}
          <path d="M75 100 Q85 95 95 100 Q105 105 115 100" stroke="rgba(0,0,0,0.5)" strokeWidth="2" fill="none" />
          <path d="M70 108 Q82 103 94 108 Q106 113 118 108" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" fill="none" />

          {/* Veggies */}
          <ellipse cx="78" cy="88" rx="12" ry="8" fill="#2d5a27" transform="rotate(-15 78 88)" />
          <ellipse cx="122" cy="88" rx="10" ry="7" fill="#e8b84a" transform="rotate(10 122 88)" />

          {/* Herb garnish */}
          <circle cx="100" cy="86" r="5" fill="#4a7c3f" />
          <circle cx="95" cy="83" r="3" fill="#5a9450" />
          <circle cx="105" cy="83" r="3" fill="#5a9450" />

          {/* Sauce drizzle */}
          <path d="M85 112 Q100 108 115 112" stroke="#c84c20" strokeWidth="2" fill="none" strokeLinecap="round" />

          <defs>
            <radialGradient id="plateGrad" cx="40%" cy="35%">
              <stop offset="0%" stopColor="#2a2820" />
              <stop offset="100%" stopColor="#0f0e0c" />
            </radialGradient>
            <radialGradient id="innerPlate" cx="40%" cy="35%">
              <stop offset="0%" stopColor="#1e1c14" />
              <stop offset="100%" stopColor="#0a0a08" />
            </radialGradient>
            <linearGradient id="steakGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b4513" />
              <stop offset="100%" stopColor="#5c2a08" />
            </linearGradient>
            <linearGradient id="steakTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a0522d" />
              <stop offset="50%" stopColor="#8b4513" />
              <stop offset="100%" stopColor="#6b3410" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    {/* Floating badges */}
    <div className="absolute top-4 right-2 glass-card rounded-full px-3 py-1.5 animate-float" style={{animationDelay:'1s'}}>
      <span className="text-gold text-xs font-josefin tracking-wider">⭐ Michelin</span>
    </div>
    <div className="absolute bottom-6 left-1 glass-card rounded-full px-3 py-1.5 animate-float" style={{animationDelay:'2.5s'}}>
      <span className="text-orange text-xs font-josefin">🔥 Chef's Choice</span>
    </div>
  </div>
)

const Particles = () => {
  const particles = Array.from({length: 20}, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 4,
    color: i % 3 === 0 ? '#c9a84c' : i % 3 === 1 ? '#e07020' : 'rgba(245,240,232,0.5)'
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size, height: p.size,
            left: `${p.x}%`, top: `${p.y}%`,
            background: p.color,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const bgRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 200)

    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div ref={bgRef} className="absolute inset-0 -top-20 parallax-bg">
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 z-10" style={{
          background: 'linear-gradient(135deg, rgba(2,2,2,0.92) 0%, rgba(15,10,5,0.82) 40%, rgba(2,2,2,0.88) 100%)'
        }} />
        {/* Textured BG via SVG pattern */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 20% 70%, rgba(224,112,32,0.04) 0%, transparent 50%),
            linear-gradient(180deg, #020202 0%, #0f0a06 50%, #020202 100%)
          `
        }} />
        {/* Food imagery using SVG background */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
          {/* Decorative food silhouettes */}
          <ellipse cx="900" cy="400" rx="300" ry="200" fill="url(#bgFood1)" />
          <ellipse cx="200" cy="600" rx="200" ry="150" fill="url(#bgFood2)" />
          <defs>
            <radialGradient id="bgFood1"><stop stopColor="#c9a84c" /><stop offset="1" stopColor="transparent" /></radialGradient>
            <radialGradient id="bgFood2"><stop stopColor="#e07020" /><stop offset="1" stopColor="transparent" /></radialGradient>
          </defs>
        </svg>
      </div>

      <Particles />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className={`section-label mb-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{transitionDelay:'0.2s'}}>
              <span className="mr-3 text-gold/40">——</span>
              Chandigarh's Finest Dining
              <span className="ml-3 text-gold/40">——</span>
            </div>

            <h1 className={`font-cormorant font-bold leading-none mb-6 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{transitionDelay:'0.4s'}}>
              <span className="block text-5xl lg:text-7xl xl:text-8xl text-cream tracking-tight">Experience</span>
              <span className="block text-5xl lg:text-7xl xl:text-8xl italic text-gold-shimmer tracking-tight">the Art of</span>
              <span className="block text-5xl lg:text-7xl xl:text-8xl text-cream tracking-tight">Fine Dining</span>
            </h1>

            <p className={`font-cormorant italic text-xl lg:text-2xl text-white-dim mb-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{transitionDelay:'0.7s'}}>
              "Luxury flavors crafted by master chefs"
            </p>

            <p className={`font-josefin text-xs tracking-widest text-cream/50 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{transitionDelay:'0.9s'}}>
              WHERE EVERY PLATE IS A MASTERPIECE
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{transitionDelay:'1.1s'}}>
              <button
                onClick={() => document.getElementById('menu')?.scrollIntoView({behavior:'smooth'})}
                className="btn-gold px-8 py-4 text-xs rounded-sm font-semibold tracking-widest"
              >
                ✦ Explore Menu
              </button>
              <button
                onClick={() => document.getElementById('reservations')?.scrollIntoView({behavior:'smooth'})}
                className="btn-outline-gold px-8 py-4 text-xs rounded-sm tracking-widest"
              >
                Reserve a Table
              </button>
            </div>

            {/* Stats */}
            <div className={`mt-14 flex gap-10 justify-center lg:justify-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{transitionDelay:'1.3s'}}>
              {[
                { n: '15+', l: 'Years' },
                { n: '200+', l: 'Dishes' },
                { n: '50K+', l: 'Guests' },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <div className="font-cormorant text-3xl font-bold text-gold">{s.n}</div>
                  <div className="section-label text-[10px] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Food element */}
          <div className={`transition-all duration-1000 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{transitionDelay:'0.6s'}}>
            <FloatingFood />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-float">
        <span className="section-label text-[9px]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{background:'linear-gradient(to bottom, transparent, #020202)'}} />
    </section>
  )
}
