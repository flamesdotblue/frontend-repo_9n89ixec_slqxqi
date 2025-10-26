import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, Twitter, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const inputsRef = useRef([])
  inputsRef.current = []

  const addInputRef = (el) => {
    if (el && !inputsRef.current.includes(el)) inputsRef.current.push(el)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(inputsRef.current, {
        y: 16,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="bg-[#0f0f0f] text-white py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Say hello</h2>
        <p className="mt-3 text-[#cfcfcf]">Got an idea? Let’s create something delightful.</p>

        <form className="mt-10 space-y-4">
          <input ref={addInputRef} type="text" placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffe0]/60 placeholder:text-[#888888]" />
          <input ref={addInputRef} type="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffe0]/60 placeholder:text-[#888888]" />
          <textarea ref={addInputRef} placeholder="Message" rows="5" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffe0]/60 placeholder:text-[#888888]"></textarea>
          <button ref={addInputRef} type="button" className="w-full rounded-lg bg-[#00ffe0] text-[#0f0f0f] font-medium py-3 hover:brightness-110 transition">
            Send message
          </button>
        </form>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a href="#" aria-label="GitHub" className="group rounded-full p-3 border border-white/10 hover:border-[#00ffe0]/60 transition">
            <Github className="h-5 w-5 text-white group-hover:text-[#00ffe0]" />
          </a>
          <a href="#" aria-label="Twitter" className="group rounded-full p-3 border border-white/10 hover:border-[#00ffe0]/60 transition">
            <Twitter className="h-5 w-5 text-white group-hover:text-[#00ffe0]" />
          </a>
          <a href="#" aria-label="Email" className="group rounded-full p-3 border border-white/10 hover:border-[#00ffe0]/60 transition">
            <Mail className="h-5 w-5 text-white group-hover:text-[#00ffe0]" />
          </a>
        </div>

        <p className="mt-10 text-center text-[#888888]">© {new Date().getFullYear()} — Crafted with care.</p>
      </div>
    </section>
  )
}

export default Contact
