import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Clock, Gift, ListChecks, Sparkles } from 'lucide-react'
import { Logo } from '../components/Logo'

export function Hero() {
  const { scrollYProgress } = useScroll()
  // Parallax suave: o anel sobe e gira levemente enquanto rola.
  const ringY = useTransform(scrollYProgress, [0, 0.3], [0, -120])
  const ringRotate = useTransform(scrollYProgress, [0, 0.3], [0, 35])
  const ringOpacity = useTransform(scrollYProgress, [0, 0.25], [0.85, 0])

  const stats = [
    { icon: ListChecks, label: 'Diagnóstico', value: '7 perguntas' },
    { icon: Clock, label: 'Tempo', value: 'Menos de 5 min' },
    { icon: Gift, label: 'Acesso', value: '100% gratuito' },
  ]

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-900 py-24 text-white"
    >
      {/* Fundo: malha de gradiente da marca */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-[34rem] w-[34rem] animate-float rounded-full bg-brand-blue/30 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-brand-purple/30 blur-[120px]" />
        <motion.img
          src="/brand/grad-ring.png"
          alt=""
          aria-hidden
          style={{ y: ringY, rotate: ringRotate, opacity: ringOpacity }}
          className="absolute right-[6%] top-[12%] hidden w-72 md:block"
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
          <Sparkles size={14} /> Estudo Executivo Nacional · 2026
        </motion.span>

        <motion.h1
          className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          Índice Always On de{' '}
          <span className="gradient-text bg-[length:220%_220%]">
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
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
        >
          {stats.map((m) => (
            <motion.div
              key={m.label}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-colors hover:border-brand-blue/40 hover:bg-white/10"
            >
              <m.icon size={18} className="text-brand-blue" />
              <div>
                <p className="text-[11px] uppercase tracking-wide text-white/50">{m.label}</p>
                <p className="text-sm font-semibold text-white">{m.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <button
            onClick={() =>
              document.getElementById('participar')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient bg-[length:200%_200%] px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] animate-gradient-pan"
          >
            Iniciar Diagnóstico Corporativo
            <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </button>
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
