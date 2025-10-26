import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Telemetry API Platform',
    tag: 'Go · MongoDB · Docker',
    description: 'High-throughput ingestion service with structured logging, tracing, and horizontal scaling.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Infra Dashboard',
    tag: 'React · NestJS · GraphQL',
    description: 'Real-time status and metrics dashboard with role-based access and granular permissions.',
    github: '#',
    demo: '#',
  },
  {
    title: 'CI/CD Templates',
    tag: 'GitHub Actions · Docker',
    description: 'Reusable pipelines with build caching, security scans, and zero-downtime deploys.',
    github: '#',
    demo: '#',
  },
  {
    title: 'Cloud Cost Watch',
    tag: 'TypeScript · Serverless',
    description: 'Event-driven cost analyzer with anomaly alerts and weekly spend digests.',
    github: '#',
    demo: '#',
  },
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
        const bg = card.querySelector('.card-bg')
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.03, duration: 0.3, ease: 'power3.out' })
          gsap.to(bg, { opacity: 0.16, duration: 0.3 })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.4, ease: 'power3.out' })
          gsap.to(bg, { opacity: 0.1, duration: 0.3 })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="bg-[#0A0A0A] text-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-3 text-[#E0E0E0]">Real systems with a focus on performance, clarity, and automation.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <div
              key={idx}
              ref={addCardRef}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition-transform"
            >
              <div className="card-bg absolute inset-0 opacity-10 transition-opacity bg-[radial-gradient(circle_at_30%_20%,#38BDF8_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#00FFAA_0%,transparent_35%)]" />
              <div className="relative z-10">
                <div className="text-sm text-[#00FFAA]">{p.tag}</div>
                <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm text-[#E0E0E0] line-clamp-3">{p.description}</p>
                <div className="mt-5 flex items-center gap-4 text-sm">
                  <a href={p.github} className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a href={p.demo} className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                    Live Demo →
                  </a>
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
