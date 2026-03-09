import { useRef, useEffect } from 'react'

export default function Location() {
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
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #020202 0%, #0c0a07 50%, #020202 100%)'
      }} />

      <div ref={sectionRef} className="section-reveal relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label mb-4">
            <span className="text-gold/40 mr-3">——</span>
            Find Us
            <span className="text-gold/40 ml-3">——</span>
          </div>
          <h2 className="font-cormorant font-bold text-5xl lg:text-6xl text-cream mb-4">
            Our <span className="italic text-gold-shimmer">Location</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden" style={{
            border: '1px solid rgba(201,168,76,0.15)',
            height: '420px',
          }}>
            {/* Styled map embed */}
            <iframe
              title="Codexyra Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.7794!3d30.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fedb6e6669a9f%3A0x8d9671b6bee7b9dc!2sSector+17%2C+Chandigarh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) saturate(0.5) brightness(0.8)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div className="glass-card rounded-lg p-6 animate-glow-pulse">
              <div className="text-3xl mb-3">📍</div>
              <div className="section-label text-[10px] mb-2">Address</div>
              <div className="font-cormorant text-xl text-cream mb-1">Codexyra Restaurant</div>
              <div className="font-josefin text-sm text-cream/60 leading-7 tracking-wide">
                Shop No. 12, Sector 17-C<br/>
                Chandigarh, Punjab<br/>
                India – 160 017
              </div>
            </div>

            <div className="glass-card rounded-lg p-6">
              <div className="text-3xl mb-3">🕐</div>
              <div className="section-label text-[10px] mb-3">Opening Hours</div>
              <div className="space-y-2">
                {[
                  {day:'Mon – Thu', time:'12:00 PM – 10:00 PM'},
                  {day:'Fri – Sat', time:'12:00 PM – 11:00 PM'},
                  {day:'Sunday', time:'01:00 PM – 10:00 PM'},
                ].map(h => (
                  <div key={h.day} className="flex justify-between items-center">
                    <span className="font-josefin text-xs text-cream/50 tracking-wide">{h.day}</span>
                    <span className="font-josefin text-xs text-gold tracking-wider">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-lg p-6">
              <div className="text-3xl mb-3">📞</div>
              <div className="section-label text-[10px] mb-2">Contact</div>
              <a href="tel:+916239520582" className="font-cormorant text-xl text-gold hover:text-orange transition-colors block mb-1">
                +91 62395 20582
              </a>
              <a href="mailto:codexyra.connect@gmail.com" className="font-josefin text-xs text-cream/50 hover:text-gold transition-colors tracking-wide">
                codexyra.connect@gmail.com
              </a>
            </div>

            <a
              href="https://maps.google.com/?q=Sector+17,+Chandigarh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold w-full py-3 text-xs rounded-sm tracking-widest block text-center"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
