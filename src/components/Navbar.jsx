import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Menu', 'Offers', 'Gallery', 'Chef', 'Reviews', 'Reservations', 'Contact']

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3 glass-card-dark border-b border-gold/10' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border border-gold/40 animate-spin-slow" />
            <div className="absolute inset-1.5 rounded-full bg-gradient-to-br from-gold/30 to-orange/20 flex items-center justify-center">
              <span className="text-gold text-sm font-cormorant font-bold">C</span>
            </div>
          </div>
          <div>
            <div className="font-cormorant text-xl font-bold tracking-widest text-cream">CODEXYRA</div>
            <div className="text-[9px] tracking-[0.3em] text-gold/60 uppercase -mt-0.5">Restaurant</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="nav-link text-xs">
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => scrollTo('Reservations')}
            className="btn-gold px-5 py-2.5 text-xs rounded-sm"
          >
            Reserve Table
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-card-dark border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="nav-link text-left text-sm py-1">
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Reservations')}
            className="btn-gold px-5 py-2.5 text-xs rounded-sm mt-2 w-full"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </nav>
  )
}
