import type { ReactNode } from 'react'
import { cn } from './ui'

export function Section({
  id,
  children,
  tone = 'light',
  className,
}: {
  id: string
  children: ReactNode
  tone?: 'light' | 'muted' | 'dark'
  className?: string
}) {
  const toneCls =
    tone === 'dark'
      ? 'bg-ink-900 text-white'
      : tone === 'muted'
        ? 'bg-white'
        : 'bg-paper'
  return (
    <section
      id={id}
      className={cn(
        'relative scroll-mt-24 overflow-hidden py-20 sm:py-28 lg:py-32',
        toneCls,
        className,
      )}
    >
      <div className="section-shell relative z-10">{children}</div>
    </section>
  )
}
