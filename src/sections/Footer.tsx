import { ArrowUp } from 'lucide-react'
import { Logo } from '../components/Logo'

export function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-white py-12">
      <div className="section-shell flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <Logo variant="black" className="h-7" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
            Índice Always On de Vazamento de Valor · 2026
            <br />
            Onde as empresas brasileiras perdem valor — e como recuperá-lo.
          </p>
        </div>
        <div className="text-sm text-ink-400 sm:text-right">
          <p className="font-semibold text-ink-700">Always On</p>
          <p className="mt-1">Estudo Executivo Nacional · 2026</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-900/10 px-4 py-2 text-xs font-semibold text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand-purple/30 hover:bg-brand-soft hover:text-brand-purple"
          >
            <ArrowUp size={14} /> Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  )
}
