export default function Footer() {
  const navLinks = [
    { label: 'Menu', id: 'menu' },
    { label: 'Offers', id: 'offers' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Chef', id: 'chef' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Reserve', id: 'reservations' },
    { label: 'Contact', id: 'contact' },
  ]

  const socialLinks = [
    { icon: '📸', label: 'Instagram', href: '#' },
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' },
    { icon: '▶️', label: 'YouTube', href: '#' },
  ]

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #020202 0%, #050504 100%)'
      }} />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{background:'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 30%, rgba(201,168,76,0.8) 50%, rgba(201,168,76,0.4) 70%, transparent 100%)'}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 rounded-full border border-gold/30 animate-spin-slow" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/20 to-orange/10 flex items-center justify-center">
                  <span className="text-gold font-cormorant font-bold text-lg">C</span>
                </div>
              </div>
              <div>
                <div className="font-cormorant text-2xl font-bold tracking-widest text-cream">CODEXYRA</div>
                <div className="text-[9px] tracking-[0.3em] text-gold/50 -mt-0.5 uppercase">Restaurant</div>
              </div>
            </div>
            <p className="font-josefin text-xs text-cream/40 leading-relaxed tracking-wide mb-5">
              Where culinary artistry meets timeless elegance. Chandigarh's most prestigious fine dining destination since 2006.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-9 h-9 rounded-sm glass-card flex items-center justify-center text-sm hover:border-gold/30 hover:scale-110 transition-all duration-300"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="section-label text-[10px] mb-5">Navigation</div>
            <ul className="space-y-3">
              {navLinks.map(l => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="font-josefin text-xs text-cream/50 hover:text-gold transition-colors duration-300 tracking-wide flex items-center gap-2 group"
                  >
                    <span className="text-gold/30 group-hover:text-gold transition-colors duration-300">→</span>
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label text-[10px] mb-5">Contact</div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-gold/60 text-sm flex-shrink-0 mt-0.5">📍</span>
                <div className="font-josefin text-xs text-cream/50 leading-6 tracking-wide">
                  Sector 17-C, Chandigarh<br/>Punjab, India – 160 017
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold/60 text-sm flex-shrink-0">📞</span>
                <a href="tel:+916239520582" className="font-josefin text-xs text-cream/50 hover:text-gold transition-colors tracking-wide">
                  +91 62395 20582
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold/60 text-sm flex-shrink-0">✉️</span>
                <a href="mailto:codexyra.connect@gmail.com" className="font-josefin text-xs text-cream/50 hover:text-gold transition-colors tracking-wide break-all">
                  codexyra.connect@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours + Newsletter */}
          <div>
            <div className="section-label text-[10px] mb-5">Hours</div>
            <div className="space-y-2 mb-6">
              {[
                {d:'Mon–Thu', t:'12PM – 10PM'},
                {d:'Fri–Sat', t:'12PM – 11PM'},
                {d:'Sunday', t:'1PM – 10PM'},
              ].map(h => (
                <div key={h.d} className="flex justify-between">
                  <span className="font-josefin text-xs text-cream/40 tracking-wide">{h.d}</span>
                  <span className="font-josefin text-xs text-gold/70 tracking-wide">{h.t}</span>
                </div>
              ))}
            </div>

            <div className="section-label text-[10px] mb-3">Newsletter</div>
            <div className="flex gap-2">
              <input
                className="luxury-input flex-1 px-3 py-2 rounded-sm text-xs"
                placeholder="Your email"
              />
              <button className="btn-gold px-3 py-2 text-xs rounded-sm">→</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-josefin text-xs text-cream/30 tracking-wide text-center">
              © {new Date().getFullYear()} Codexyra Restaurant, Chandigarh. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Privacy Policy','Terms of Service','Cookie Policy'].map(l => (
                <button key={l} className="font-josefin text-xs text-cream/30 hover:text-gold/60 transition-colors tracking-wide">
                  {l}
                </button>
              ))}
            </div>
          </div>
          <p className="font-cormorant italic text-center text-sm text-gold/20 mt-4">
            "Where every plate is a masterpiece"
          </p>
        </div>
      </div>
    </footer>
  )
}
