import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

export function PartDivider({
  part,
  title,
  intro,
  icon: Icon,
}: {
  part: string
  title: string
  intro: string
  icon: LucideIcon
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-28 text-white sm:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/20 blur-[120px]" />
        <img
          src="/brand/grad-ring.png"
          alt=""
          aria-hidden
          className="absolute -right-16 top-1/2 w-80 -translate-y-1/2 animate-float opacity-40"
        />
      </div>
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            {part}
          </span>
          <div className="mt-6 flex items-start gap-5">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient shadow-glow sm:inline-flex">
              <Icon size={30} />
            </span>
            <div>
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
                {intro}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
