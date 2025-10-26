import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(titleRef.current, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.9 })
      .fromTo(subtitleRef.current, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.9 }, '-=0.5')
      .fromTo(ctaRef.current, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.8 }, '-=0.5')
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0A0A0A]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft accents that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.10),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(0,255,170,0.10),transparent_45%)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 ref={titleRef} className="text-white tracking-tight font-semibold leading-[1.06] text-4xl sm:text-5xl md:text-6xl">
            Hey, I’m Harsh Kharwar 👋
          </h1>
          <p ref={subtitleRef} className="mt-5 text-[#E0E0E0] text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Full Stack Developer · DevOps · Cloud Enthusiast. I build performant, production-ready systems and love optimizing everything.
          </p>
          <div ref={ctaRef} className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-[#0A0A0A] bg-[#00FFAA] font-medium transition-transform duration-300 hover:scale-[1.03]">
              View Projects
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/15 text-white/90 hover:text-white hover:border-white/35 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
