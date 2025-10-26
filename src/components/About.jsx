import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ThreeScene from './ThreeScene'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-[#0f0f0f] text-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div ref={textRef}>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About this experience</h2>
          <p className="mt-5 text-[#cfcfcf] leading-relaxed">
            Designed to be minimal yet expressive. Motion guides your attention, while depth adds a quiet sense of wonder. Smooth scrolling, subtle parallax and gentle color accents make the journey feel effortless.
          </p>
          <ul className="mt-6 space-y-3 text-[#cfcfcf]">
            <li><span className="text-[#00ffe0]">•</span> Scroll-triggered reveals powered by GSAP</li>
            <li><span className="text-[#00ffe0]">•</span> 3D particles running in Three.js</li>
            <li><span className="text-[#00ffe0]">•</span> Lenis for buttery smooth scroll</li>
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-3">
          <div className="rounded-lg bg-[#0c0c0c]">
            <ThreeScene />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
