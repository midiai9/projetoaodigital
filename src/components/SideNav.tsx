import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '../lib/nav'
import { Logo } from './Logo'
import { cn } from './ui'

/* Detecta a seção ativa observando todas no viewport */
function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

function NavList({ active, onPick }: { active: string; onPick: (id: string) => void }) {
  // Agrupa os itens por "group" preservando a ordem
  const groups = useMemo(() => {
    const out: { group: string; items: typeof NAV }[] = []
    for (const item of NAV) {
      const last = out[out.length - 1]
      if (last && last.group === item.group) last.items.push(item)
      else out.push({ group: item.group, items: [item] })
    }
    return out
  }, [])

  return (
    <nav className="space-y-6">
      {groups.map((g) => (
        <div key={g.group}>
          <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-300">
            {g.group}
          </p>
          <ul className="space-y-0.5">
            {g.items.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onPick(item.id)}
                    className={cn(
                      'group flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left text-sm transition-colors',
                      isActive
                        ? 'font-semibold text-ink-900'
                        : 'text-ink-400 hover:text-ink-700',
                    )}
                  >
                    <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
                      <span
                        className={cn(
                          'h-2 w-2 rounded-full transition-all',
                          isActive
                            ? 'scale-100 bg-brand-gradient'
                            : 'scale-75 bg-ink-300 group-hover:bg-brand-purple/50',
                        )}
                      />
                    </span>
                    <span className="truncate">{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export function SideNav() {
  const ids = useMemo(() => NAV.map((n) => n.id), [])
  const active = useScrollSpy(ids)
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <>
      {/* Desktop: rail fixo à esquerda */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-ink-900/5 bg-white/80 backdrop-blur-md lg:flex">
        <div className="px-6 pt-7">
          <button onClick={() => go('inicio')} aria-label="Voltar ao início">
            <Logo variant="black" className="h-7" />
          </button>
        </div>
        <div className="no-scrollbar mt-7 flex-1 overflow-y-auto px-5 pb-8">
          <NavList active={active} onPick={go} />
        </div>
        <div className="border-t border-ink-900/5 px-6 py-4 text-[11px] leading-snug text-ink-300">
          Índice Always On de
          <br />
          Vazamento de Valor · 2026
        </div>
      </aside>

      {/* Mobile: top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-ink-900/5 bg-white/85 px-5 backdrop-blur-md lg:hidden">
        <button onClick={() => go('inicio')} aria-label="Voltar ao início">
          <Logo variant="black" className="h-6" />
        </button>
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir navegação"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-900/5"
        >
          <Menu size={22} />
        </button>
      </header>

      {/* Mobile: drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-ink-900/50" onClick={() => setOpen(false)} />
            <motion.div
              className="absolute inset-y-0 right-0 flex w-80 max-w-[85%] flex-col bg-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between border-b border-ink-900/5 px-5 py-4">
                <Logo variant="black" className="h-6" />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fechar navegação"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-900/5"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="no-scrollbar flex-1 overflow-y-auto px-5 py-6">
                <NavList active={active} onPick={go} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
