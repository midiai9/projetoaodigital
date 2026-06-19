import { motion } from 'framer-motion'
import { ChevronDown, Database, LineChart, Sparkles } from 'lucide-react'
import { Logo } from '../components/Logo'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 py-24 text-white"
    >
      {/* Fundo: malha de gradiente da marca */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-brand-blue/30 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-purple/30 blur-[120px]" />
        <img
          src="/brand/grad-ring.png"
          alt=""
          aria-hidden
          className="absolute right-[6%] top-[12%] hidden w-72 animate-float opacity-80 md:block"
        />
      </div>

      <div className="section-shell relative z-10 lg:pl-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo variant="white" className="mb-10 h-8" />
        </motion.div>

        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <Sparkles size={14} /> Planejamento de Projeto · 2026
        </motion.span>

        <motion.h1
          className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          Índice Nacional de{' '}
          <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-magenta bg-clip-text text-transparent">
            Vazamento de Valor
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Onde as empresas brasileiras perdem receita, margem e produtividade — e
          como transformar essa perda em agenda de board.
        </motion.p>

        <motion.div
          className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          {[
            { icon: Sparkles, label: 'Cliente', value: 'AlwaysOn' },
            { icon: Database, label: 'Agência', value: 'i9 Criações' },
            { icon: LineChart, label: 'Status', value: 'Versão de trabalho' },
          ].map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <m.icon size={18} className="text-brand-blue" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-white/50">
                  {m.label}
                </p>
                <p className="text-sm font-semibold text-white">{m.value}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() =>
          document.getElementById('documento')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Rolar para o conteúdo"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}
