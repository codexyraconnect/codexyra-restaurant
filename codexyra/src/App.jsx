import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedDishes from './components/FeaturedDishes'
import SpecialOffers from './components/SpecialOffers'
import Gallery from './components/Gallery'
import ChefStory from './components/ChefStory'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Location from './components/Location'
import Footer from './components/Footer'

// Custom cursor logic
function useCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursor-ring')
    if (!cursor || !ring) return

    let ringX = 0, ringY = 0
    let cursorX = 0, cursorY = 0

    const onMove = (e) => {
      cursorX = e.clientX
      cursorY = e.clientY
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
    }

    const animate = () => {
      ringX += (cursorX - ringX) * 0.12
      ringY += (cursorY - ringY) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => window.removeEventListener('mousemove', onMove)
  }, [])
}

// Scroll reveal
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.section-reveal')
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useCursor()
  useScrollReveal()

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <SpecialOffers />
      <Gallery />
      <ChefStory />
      <Testimonials />
      <Reservation />
      <Location />
      <Footer />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-sm glass-card-dark flex items-center justify-center text-gold hover:border-gold/40 hover:text-orange transition-all duration-300 text-lg hover:scale-110"
        title="Back to top"
      >
        ↑
      </button>
    </div>
  )
}
