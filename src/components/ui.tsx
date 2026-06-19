import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from 'framer-motion'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

/* ---------- Reveal: aparece ao entrar na viewport ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Stagger: filhos entram em cascata ---------- */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}

/* ---------- Cabeçalho padrão de seção ---------- */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  dark = false,
  align = 'left',
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  dark?: boolean
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn('mb-10', align === 'center' && 'text-center')}>
      {eyebrow && (
        <span
          className={cn(
            'mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]',
            dark
              ? 'border border-white/20 bg-white/10 text-white/90'
              : 'border border-brand-purple/25 bg-brand-soft text-brand-purple',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl font-bold leading-tight sm:text-4xl',
          dark ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg leading-relaxed',
            align === 'center' && 'mx-auto',
            dark ? 'text-white/70' : 'text-ink-500',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/* ---------- Badge de ícone (círculo com gradiente da marca) ---------- */
export function IconBadge({
  icon: Icon,
  size = 'md',
  tone = 'gradient',
}: {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
  tone?: 'gradient' | 'soft' | 'glass'
}) {
  const dims = size === 'lg' ? 'h-14 w-14' : size === 'sm' ? 'h-9 w-9' : 'h-12 w-12'
  const istroke = size === 'lg' ? 26 : size === 'sm' ? 18 : 22
  const toneCls =
    tone === 'gradient'
      ? 'bg-brand-gradient text-white shadow-glow'
      : tone === 'glass'
        ? 'bg-white/10 text-white ring-1 ring-white/20'
        : 'bg-brand-soft text-brand-purple ring-1 ring-brand-purple/15'
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-xl',
        dims,
        toneCls,
      )}
    >
      <Icon size={istroke} strokeWidth={2} />
    </span>
  )
}

/* ---------- Contador animado ---------- */
export function CountUp({
  to,
  prefix = '',
  suffix = '',
  className,
}: {
  to: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { duration: 1400, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) mv.set(to)
  }, [inView, to, mv])

  useEffect(() => spring.on('change', (v) => setDisplay(Math.round(v))), [spring])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}
