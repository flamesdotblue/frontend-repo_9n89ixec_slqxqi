import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cardsData = [
  { title: 'Neon Flow', tag: 'GSAP + Lenis' },
  { title: 'Particle Field', tag: 'Three.js' },
  { title: 'Magnetic Buttons', tag: 'GSAP Hover' },
  { title: 'Scroll Parallax', tag: 'ScrollTrigger' },
  { title: 'Reactive Grid', tag: 'Framer Motion' },
  { title: 'Ambient Waves', tag: 'Shader' },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  cardsRef.current = []

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })

      cardsRef.current.forEach((card) => {
        const image = card.querySelector('.card-bg')
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.03, duration: 0.3, ease: 'power3.out' })
          gsap.to(image, { opacity: 0.18, duration: 0.3 })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.4, ease: 'power3.out' })
          gsap.to(image, { opacity: 0.1, duration: 0.3 })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="bg-[#0f0f0f] text-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected builds</h2>
          <p className="mt-3 text-[#cfcfcf]">A showcase of motion experiments and interactive surfaces.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, idx) => (
            <div
              key={idx}
              ref={addCardRef}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition-transform"
            >
              <div className="card-bg absolute inset-0 opacity-10 transition-opacity bg-[radial-gradient(circle_at_30%_20%,#00ffe0_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#ff00aa_0%,transparent_35%)]" />
              <div className="relative z-10">
                <div className="text-sm text-[#00ffe0]">{card.tag}</div>
                <h3 className="mt-2 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-[#cfcfcf] line-clamp-3">
                  Exploring subtle depth, tactile motion and playful color in responsive layouts.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[#cfcfcf]">
                  <span>View</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
