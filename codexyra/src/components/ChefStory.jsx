import { useRef, useEffect, useState } from 'react'

export default function ChefStory() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="chef" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #020202 0%, #0c0905 50%, #020202 100%)'
      }} />

      {/* Diagonal accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-10"
        style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 70%)',
          borderRight: '1px solid rgba(201,168,76,0.05)',
        }} />

      <div ref={sectionRef} className="section-reveal relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Chef portrait - Left */}
          <div className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            {/* Outer decorative frame */}
            <div className="relative mx-auto max-w-sm">
              {/* Corner decorations */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-gold/40" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t border-r border-gold/40" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b border-l border-gold/40" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-gold/40" />

              {/* Portrait */}
              <div className="relative rounded-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1a1612 0%, #0f0d0a 100%)',
                  border: '1px solid rgba(201,168,76,0.15)',
                }}>

                {/* Chef illustration via SVG */}
                <div className="relative h-96 flex items-center justify-center overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0"
                    style={{background: 'radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.08) 0%, transparent 60%)'}} />

                  <svg viewBox="0 0 280 380" className="w-64 h-72">
                    {/* Chef hat */}
                    <ellipse cx="140" cy="105" rx="55" ry="12" fill="#f0ece0" />
                    <rect x="90" y="55" width="100" height="55" rx="4" fill="#f5f0e8" />
                    <ellipse cx="140" cy="55" rx="50" ry="22" fill="#fff" />
                    <ellipse cx="140" cy="53" rx="48" ry="20" fill="#fafaf5" />

                    {/* Head */}
                    <ellipse cx="140" cy="135" rx="38" ry="42" fill="#d4956a" />
                    {/* Face features */}
                    <ellipse cx="128" cy="128" rx="5" ry="6" fill="#b07050" />
                    <ellipse cx="152" cy="128" rx="5" ry="6" fill="#b07050" />
                    <circle cx="128" cy="126" r="2.5" fill="#3a2010" />
                    <circle cx="152" cy="126" r="2.5" fill="#3a2010" />
                    <path d="M128 145 Q140 152 152 145" stroke="#a06040" strokeWidth="2" fill="none" strokeLinecap="round" />
                    {/* Mustache */}
                    <path d="M124 139 Q132 135 140 138 Q148 135 156 139" stroke="#5a3a20" strokeWidth="1.5" fill="none" />

                    {/* Neck */}
                    <rect x="128" y="172" width="24" height="18" fill="#c08060" />

                    {/* Chef coat */}
                    <path d="M85 190 L140 180 L195 190 L205 310 L75 310 Z" fill="#f5f0e8" />
                    {/* Coat lapels */}
                    <path d="M140 180 L125 215 L140 230" fill="#e8e0d0" />
                    <path d="M140 180 L155 215 L140 230" fill="#e8e0d0" />
                    {/* Buttons */}
                    <circle cx="140" cy="240" r="3" fill="#c9a84c" />
                    <circle cx="140" cy="258" r="3" fill="#c9a84c" />
                    <circle cx="140" cy="276" r="3" fill="#c9a84c" />
                    {/* Arms */}
                    <path d="M85 195 L60 260 L80 265 L100 205" fill="#f5f0e8" />
                    <path d="M195 195 L220 260 L200 265 L180 205" fill="#f5f0e8" />
                    {/* Hands */}
                    <ellipse cx="70" cy="268" rx="14" ry="10" fill="#d4956a" />
                    <ellipse cx="210" cy="268" rx="14" ry="10" fill="#d4956a" />

                    {/* Ladle in right hand */}
                    <rect x="214" y="245" width="4" height="40" rx="2" fill="#c0c0b0" transform="rotate(-20 214 265)" />
                    <circle cx="225" cy="278" r="10" fill="#b0b0a0" stroke="#909088" strokeWidth="1" />

                    {/* Gold accent on collar */}
                    <path d="M120 190 L140 200 L160 190" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>

                {/* Name plate */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center"
                  style={{background:'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'}}>
                  <div className="font-cormorant text-xl font-bold text-cream">Chef Arjun Kapoor</div>
                  <div className="section-label text-[10px] mt-1">Executive Head Chef</div>
                </div>
              </div>

              {/* Experience badge */}
              <div className="absolute -right-6 top-1/3 glass-card rounded-lg p-3 text-center animate-float"
                style={{border:'1px solid rgba(201,168,76,0.2)'}}>
                <div className="font-cormorant text-3xl font-bold text-gold">18</div>
                <div className="section-label text-[9px]">Years</div>
                <div className="section-label text-[9px]">Experience</div>
              </div>
            </div>
          </div>

          {/* Story - Right */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="section-label mb-4">
              <span className="text-gold/40 mr-3">——</span>
              The Culinary Mind
            </div>

            <h2 className="font-cormorant font-bold text-4xl lg:text-5xl text-cream mb-2 leading-tight">
              The Story Behind
            </h2>
            <h2 className="font-cormorant italic font-bold text-4xl lg:text-5xl text-gold-shimmer mb-8 leading-tight">
              Every Masterpiece
            </h2>

            <div className="space-y-5 font-cormorant text-lg text-cream/70 leading-relaxed">
              <p>
                Born in the ancient kitchens of Amritsar, Chef Arjun Kapoor discovered his passion for culinary arts at the age of eight, watching his grandmother transform humble ingredients into celebrations on every plate.
              </p>
              <p>
                After training at the prestigious <span className="text-gold">École Hôtelière de Lausanne</span> in Switzerland and honing his skills across Michelin-starred establishments in Paris, Tokyo, and New York, Chef Arjun returned to India with a vision: to marry global culinary techniques with the soul of Indian flavors.
              </p>
              <p>
                At <span className="text-gold italic">Codexyra</span>, every dish is a philosophy — a conversation between tradition and innovation, simplicity and extravagance, the known and the unexplored.
              </p>
            </div>

            {/* Awards */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: '🏆', award: 'Michelin Star', year: '2019' },
                { icon: '⭐', award: 'Best Chef', year: '2021' },
                { icon: '🥇', award: 'Gold Fork', year: '2023' },
              ].map(a => (
                <div key={a.award} className="glass-card rounded-lg p-3 text-center group hover:border-gold/30 transition-colors duration-300">
                  <div className="text-2xl mb-1.5 group-hover:scale-110 transition-transform duration-300">{a.icon}</div>
                  <div className="font-josefin text-[10px] text-cream/60 tracking-wider">{a.award}</div>
                  <div className="font-cormorant text-gold font-bold mt-0.5">{a.year}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="deco-line w-20" />
              <span className="font-cormorant italic text-cream/40 text-lg">"Food is love made visible"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
