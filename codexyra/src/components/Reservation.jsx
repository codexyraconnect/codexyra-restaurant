import { useState, useRef, useEffect } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({ name:'', email:'', date:'', time:'', guests:'2', occasion:'' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const Field = ({ label, children }) => (
    <div className="relative">
      <label className="block font-josefin text-[10px] tracking-widest text-gold/70 uppercase mb-2">
        {label}
      </label>
      {children}
    </div>
  )

  return (
    <section id="reservations" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, #020202 0%, #0e0b07 50%, #020202 100%)'
      }} />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

      {/* Corner decorative elements */}
      <div className="absolute top-20 right-10 opacity-20 animate-float-slow">
        <div className="w-24 h-24 border border-gold/30 rounded-full flex items-center justify-center">
          <div className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gold/10" />
          </div>
        </div>
      </div>

      <div ref={sectionRef} className="section-reveal relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-4">
            <span className="text-gold/40 mr-3">——</span>
            Secure Your Table
            <span className="text-gold/40 ml-3">——</span>
          </div>
          <h2 className="font-cormorant font-bold text-5xl lg:text-6xl text-cream mb-4">
            Reserve Your <span className="italic text-gold-shimmer">Experience</span>
          </h2>
          <p className="font-josefin text-xs tracking-widest text-cream/40">
            Complimentary amuse-bouche for all reservations this week
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 glass-card rounded-lg p-8 animate-glow-pulse">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 animate-float">🥂</div>
                <h3 className="font-cormorant text-3xl text-gold mb-3">Reservation Confirmed!</h3>
                <p className="font-josefin text-sm text-cream/60 tracking-wide">
                  Thank you, {form.name}. We'll send a confirmation to your email shortly.<br/>
                  We look forward to welcoming you.
                </p>
                <div className="mt-6 deco-line mx-auto" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Full Name">
                    <input
                      className="luxury-input w-full px-4 py-3 rounded-sm text-sm"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      required
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      type="email"
                      className="luxury-input w-full px-4 py-3 rounded-sm text-sm"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      required
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Date">
                    <input
                      type="date"
                      className="luxury-input w-full px-4 py-3 rounded-sm text-sm"
                      value={form.date}
                      onChange={e => setForm({...form, date: e.target.value})}
                      required
                      style={{colorScheme:'dark'}}
                    />
                  </Field>
                  <Field label="Time">
                    <select
                      className="luxury-input w-full px-4 py-3 rounded-sm text-sm appearance-none"
                      value={form.time}
                      onChange={e => setForm({...form, time: e.target.value})}
                      required
                      style={{colorScheme:'dark', background:'rgba(255,255,255,0.03)'}}
                    >
                      <option value="">Select time</option>
                      {['12:00 PM','12:30 PM','01:00 PM','01:30 PM','07:00 PM','07:30 PM','08:00 PM','08:30 PM','09:00 PM','09:30 PM'].map(t => (
                        <option key={t} value={t} style={{background:'#0f0f0f'}}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Number of Guests">
                    <select
                      className="luxury-input w-full px-4 py-3 rounded-sm text-sm appearance-none"
                      value={form.guests}
                      onChange={e => setForm({...form, guests: e.target.value})}
                      style={{colorScheme:'dark', background:'rgba(255,255,255,0.03)'}}
                    >
                      {[1,2,3,4,5,6,7,8,10,12].map(n => (
                        <option key={n} value={n} style={{background:'#0f0f0f'}}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Special Occasion">
                    <select
                      className="luxury-input w-full px-4 py-3 rounded-sm text-sm appearance-none"
                      value={form.occasion}
                      onChange={e => setForm({...form, occasion: e.target.value})}
                      style={{colorScheme:'dark', background:'rgba(255,255,255,0.03)'}}
                    >
                      <option value="">None</option>
                      {['Anniversary','Birthday','Business Dinner','Date Night','Celebration','Proposal'].map(o => (
                        <option key={o} style={{background:'#0f0f0f'}}>{o}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Special Requests (Optional)">
                  <textarea
                    className="luxury-input w-full px-4 py-3 rounded-sm text-sm resize-none"
                    placeholder="Dietary restrictions, allergies, special arrangement requests..."
                    rows={3}
                  />
                </Field>

                <button type="submit" className="btn-gold w-full py-4 text-xs rounded-sm tracking-widest font-semibold">
                  ✦ Confirm Reservation ✦
                </button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: '🕐', title: 'Opening Hours', lines: ['Mon – Thu: 12PM – 10PM', 'Fri – Sat: 12PM – 11PM', 'Sunday: 1PM – 10PM'] },
              { icon: '📞', title: 'Call Us', lines: ['+91 62395 20582'] },
              { icon: '✉️', title: 'Email', lines: ['codexyra.connect@gmail.com'] },
              { icon: '📍', title: 'Location', lines: ['Codexyra Fine Dining', 'Sector 17, Chandigarh', 'Punjab, India 160017'] },
            ].map(info => (
              <div key={info.title} className="glass-card rounded-lg p-5 hover:border-gold/25 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{info.icon}</span>
                  <div>
                    <div className="font-josefin text-[10px] text-gold tracking-widest uppercase mb-2">{info.title}</div>
                    {info.lines.map(l => (
                      <div key={l} className="font-josefin text-sm text-cream/70 tracking-wide leading-6">{l}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Dress code note */}
            <div className="glass-card rounded-lg p-5 border-gold/20"
              style={{borderColor:'rgba(201,168,76,0.2)'}}>
              <div className="section-label text-[9px] mb-2">Dress Code</div>
              <p className="font-josefin text-xs text-cream/50 leading-relaxed tracking-wide">
                Smart casual to formal attire. We kindly request guests maintain our elegant ambiance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
