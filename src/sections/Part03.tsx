import { motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  Briefcase,
  CalendarDays,
  Clock,
  Cpu,
  Database,
  Gift,
  ListChecks,
  Mail,
  MessageCircle,
  MessageSquare,
  Quote,
  Share2,
  Target,
  Users,
} from 'lucide-react'
import { Section } from '../components/Section'
import { PartDivider } from '../components/PartDivider'
import {
  IconBadge,
  Reveal,
  SectionHeader,
  Stagger,
  StaggerItem,
  cn,
} from '../components/ui'

export function ComposerDivider() {
  return (
    <PartDivider
      part="Parte 03"
      title="Composer"
      intro="A pesquisa não termina no relatório. Para os selecionados, ela abre a porta da camada estratégica de decisão da Always On."
      icon={Cpu}
    />
  )
}

/* 13 ───────── Composer — a ferramenta ───────── */
export function Composer() {
  const layers = [
    { n: '01', icon: Database, t: 'Data Flow', d: 'Dados unificados, governados e auditáveis em tempo real.' },
    { n: '02', icon: Activity, t: 'Insights', d: 'Diagnóstico, previsão probabilística e prescrição por impacto.' },
    { n: '03', icon: Users, t: 'Composer', d: 'Orquestração da experiência em tempo real, omnichannel.' },
    { n: '04', icon: Cpu, t: 'Decision Teams', d: 'Times digitais que decidem e executam por domínio.' },
  ]
  return (
    <Section id="composer" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="Composer · a ferramenta"
          title="Quatro camadas que transformam dado em decisão operada"
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {layers.map((l) => (
          <StaggerItem key={l.n}>
            <div className="card group h-full">
              <div className="mb-4 flex items-center justify-between">
                <IconBadge icon={l.icon} />
                <span className="text-xl font-bold text-ink-300/70">{l.n}</span>
              </div>
              <h3 className="font-semibold text-ink-900">{l.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{l.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <div className="mt-6 flex items-start gap-4 rounded-2xl bg-brand-soft p-6">
          <IconBadge icon={Target} />
          <p className="text-sm leading-relaxed text-ink-700">
            <strong className="text-ink-900">Por que conecta ao projeto:</strong> cada
            desafio que o executivo declara nas 7 perguntas é, na prática, um caso de
            uso para um Composer Team (Sales, Marketing, Customer, Trade, Planning). A
            pesquisa vira o mapa de demanda do produto.
          </p>
        </div>
      </Reveal>
    </Section>
  )
}

/* 14 ───────── Campanha & canais ───────── */
export function Campanha() {
  const canais = [
    { icon: Share2, t: 'LinkedIn', d: 'Mensagem direta de liderança e posts de autoridade.' },
    { icon: MessageCircle, t: 'WhatsApp', d: 'Convite pessoal, curto, com a promessa das 7 perguntas.' },
    { icon: Mail, t: 'E-mail', d: 'Disparo assinado pelo CEO, foco no benchmark exclusivo.' },
    { icon: Briefcase, t: 'Parceiros, Bento & ABEMD', d: 'Associações ampliam alcance e dão credibilidade.' },
  ]
  return (
    <Section id="campanha" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Campanha & canais"
          title="Convite executivo, multicanal, com a Bento e a ABEMD como reforço"
        />
      </Reveal>
      <Stagger className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {canais.map((c) => (
          <StaggerItem key={c.t}>
            <div className="card h-full text-center">
              <div className="mb-3 flex justify-center">
                <IconBadge icon={c.icon} tone="soft" />
              </div>
              <h3 className="font-semibold text-ink-900">{c.t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-500">{c.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.05}>
        <figure className="relative overflow-hidden rounded-2xl bg-ink-900 p-8 text-white">
          <Quote size={64} className="absolute -right-2 -top-3 text-white/5" />
          <figcaption className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
            <MessageSquare size={14} /> Mensagem-convite (núcleo)
          </figcaption>
          <blockquote className="max-w-3xl text-lg leading-relaxed text-white/90">
            “Estamos conduzindo o Índice Always On de Vazamento de Valor 2026, um estudo
            executivo sobre onde as empresas perdem receita, margem e produtividade. São
            7 perguntas e menos de 5 minutos. Em troca, você recebe o Relatório
            Executivo, o benchmark do seu setor e convite ao webinar com a Bento e a
            ABEMD. Posso enviar o link?”
          </blockquote>
        </figure>
      </Reveal>
    </Section>
  )
}

/* 15 ───────── Webinar Bento & ABEMD ───────── */
export function Webinar() {
  const cards = [
    { icon: Clock, t: 'Formato', d: '45 min de apresentação + 15 min de perguntas.' },
    { icon: Target, t: 'Função no funil', d: 'Entrega do benchmark consolidado e convite às Sessões Executivas.' },
    { icon: Users, t: 'Sessão Executiva', d: 'Nome oficial: Sessão Executiva de Interpretação dos Resultados. Nunca “reunião” nem “diagnóstico”.' },
  ]
  return (
    <Section id="webinar" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="Fase 4 · Webinar Bento & ABEMD"
          title="O palco onde o índice vira autoridade pública"
        />
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-2xl bg-brand-gradient bg-[length:200%_200%] p-8 text-white shadow-glow animate-gradient-pan">
            <CalendarDays size={28} className="text-white/80" />
            <p className="mt-4 text-6xl font-extrabold leading-none">06/10</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80">
              Data da live
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/90">
              “Os Gargalos que Mais Consomem Margem nas Empresas Brasileiras.”
            </p>
            <p className="mt-4 text-sm text-white/70">
              Em parceria com a Bento e a ABEMD: credibilidade institucional para o
              lançamento dos dados.
            </p>
          </div>
        </Reveal>
        <Stagger className="grid gap-4">
          {cards.map((c) => (
            <StaggerItem key={c.t}>
              <div className="card flex h-full items-start gap-4">
                <IconBadge icon={c.icon} tone="soft" />
                <div>
                  <h3 className="font-semibold text-ink-900">{c.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{c.d}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  )
}

/* 16 ───────── Cronograma ───────── */
export function Cronograma() {
  const fases = [
    { n: '1', p: 'Jun–Jul', t: 'Construção', d: 'Naming, branding, LP e integração SharpSpring.' },
    { n: '2', p: 'Jul–Set', t: 'Campanha', d: 'Convite multicanal; captação rumo a 250+.' },
    { n: '3', p: 'Set', t: 'Relatório', d: 'Consolidação do Índice e do Relatório Executivo.' },
    { n: '4', p: '06/10', t: 'Webinar Bento & ABEMD', d: 'Lançamento público dos dados nacionais.', hot: true },
    { n: '5', p: 'Out+', t: 'Sessões & Composer', d: 'Sessões Executivas e POVs com leads A.' },
  ]
  return (
    <Section id="cronograma" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Cronograma · 5 fases"
          title="Da construção ao webinar de 06/10 e às Sessões Executivas"
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {fases.map((f) => (
          <StaggerItem key={f.n}>
            <div
              className={cn(
                'relative h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1',
                f.hot
                  ? 'bg-brand-gradient bg-[length:200%_200%] text-white shadow-glow animate-gradient-pan'
                  : 'border border-ink-900/5 bg-white shadow-card',
              )}
            >
              <span
                className={cn(
                  'flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold',
                  f.hot ? 'bg-white/15 text-white' : 'bg-brand-soft text-brand-purple',
                )}
              >
                {f.n}
              </span>
              <p className={cn('mt-4 text-xs font-semibold uppercase tracking-wide', f.hot ? 'text-white/80' : 'text-brand-purple')}>
                {f.p}
              </p>
              <h3 className={cn('mt-1 font-semibold', f.hot ? 'text-white' : 'text-ink-900')}>
                {f.t}
              </h3>
              <p className={cn('mt-2 text-xs leading-relaxed', f.hot ? 'text-white/85' : 'text-ink-500')}>
                {f.d}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <p className="mt-6 text-sm italic text-ink-400">
          Datas indicativas, ancoradas no webinar de 06/10.
        </p>
      </Reveal>
    </Section>
  )
}

/* 17 ───────── CTA · Participar ───────── */
export function Cta() {
  const props = [
    { icon: ListChecks, t: '7 perguntas' },
    { icon: Clock, t: 'Menos de 5 minutos' },
    { icon: Gift, t: '100% gratuito' },
  ]
  return (
    <Section id="participar" tone="dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 animate-float rounded-full bg-brand-blue/25 blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-purple/25 blur-[110px]" />
      </div>
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            Participe do estudo
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
            Descubra onde a sua empresa{' '}
            <span className="gradient-text bg-[length:220%_220%]">vaza valor</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Responda ao diagnóstico do Índice Always On de Vazamento de Valor e receba
            o Relatório Executivo, o benchmark do seu setor e o convite ao webinar.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {props.map((p) => (
            <span
              key={p.t}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 backdrop-blur-sm"
            >
              <p.icon size={16} className="text-brand-blue" />
              {p.t}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.getElementById('questionario')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient bg-[length:200%_200%] px-8 py-4 text-base font-semibold text-white shadow-glow animate-gradient-pan"
          >
            Iniciar Diagnóstico Corporativo
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </Reveal>
    </Section>
  )
}
