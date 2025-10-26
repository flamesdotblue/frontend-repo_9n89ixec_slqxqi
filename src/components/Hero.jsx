import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(titleRef.current, { autoAlpha: 0, scale: 0.9 }, { autoAlpha: 1, scale: 1, duration: 1.2 })
      .fromTo(subtitleRef.current, { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, '-=0.6')
      .fromTo(ctaRef.current, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.8 }, '-=0.4')
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0f0f0f]" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* soft radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,224,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,0,170,0.12),transparent_40%)]" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 ref={titleRef} className="text-white tracking-tight font-semibold leading-[1.05] text-5xl sm:text-6xl md:text-7xl">
            Minimal. Futuristic. Immersive.
          </h1>
          <p ref={subtitleRef} className="mt-6 text-[#cfcfcf] text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Crafted with GSAP, Three.js and Lenis — an elegant playground of motion, depth and flow.
          </p>
          <div ref={ctaRef} className="mt-10 flex items-center justify-center gap-4">
            <a href="#about" className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#0f0f0f] bg-[#00ffe0] font-medium transition-transform duration-300 hover:scale-[1.03]">
              Explore
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition-colors">
              Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
