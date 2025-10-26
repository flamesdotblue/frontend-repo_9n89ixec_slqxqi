import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Server, Boxes, TerminalSquare, Cloud } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stack = [
  { label: 'Go', icon: TerminalSquare },
  { label: 'TypeScript', icon: TerminalSquare },
  { label: 'Node.js', icon: Server },
  { label: 'NestJS', icon: Boxes },
  { label: 'React', icon: Boxes },
  { label: 'MongoDB', icon: Server },
  { label: 'Docker', icon: Boxes },
  { label: 'Linux', icon: TerminalSquare },
  { label: 'GitHub Actions', icon: Cloud },
]

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
    <section ref={sectionRef} id="about" className="relative w-full bg-[#0A0A0A] text-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={textRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
            <p className="mt-5 text-[#E0E0E0] leading-relaxed">
              I’m a Full Stack Developer and DevOps enthusiast studying Mechatronics & Automation Engineering at IIIT Bhagalpur. I enjoy designing robust backends, cloud-native systems, and thoughtful developer experiences.
            </p>
            <p className="mt-4 text-[#E0E0E0]">
              Currently learning and building with Golang, NestJS, Docker, and cloud infrastructure — with a focus on reliability, performance, and clean automation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white/90">Tech Stack</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stack.map(({ label, icon: Icon }) => (
                <div key={label} className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-3 hover:border-[#00FFAA]/60 transition">
                  <Icon className="h-5 w-5 text-white/80 group-hover:text-[#00FFAA]" />
                  <span className="text-sm text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
