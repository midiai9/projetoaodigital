import {
  Activity,
  CalendarDays,
  Clock,
  Cpu,
  Database,
  Droplet,
  Edit3,
  Flag,
  Briefcase,
  Share2,
  Mail,
  MessageCircle,
  MessageSquare,
  Monitor,
  Quote,
  Settings,
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
      title="Composer AI OS"
      intro="A pesquisa não termina no relatório. Para os selecionados, ela abre a porta da camada estratégica de decisão da AlwaysOn."
      icon={Cpu}
    />
  )
}

/* 13 ───────── Composer — a ferramenta ───────── */
export function Composer() {
  const layers = [
    { n: '01', icon: Database, t: 'Data Flow', d: 'Dados unificados, governados e auditáveis em tempo real.' },
    { n: '02', icon: Activity, t: 'Insights', d: 'Diagnóstico, previsão probabilística e prescrição por impacto.' },
    { n: '03', icon: Users, t: 'CX', d: 'Orquestração da experiência em tempo real, omnichannel.' },
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
            <div className="card group h-full transition-transform duration-300 hover:-translate-y-1">
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
    { icon: Briefcase, t: 'Parceiros & ABEMD', d: 'Associações ampliam alcance e dão credibilidade.' },
  ]
  return (
    <Section id="campanha" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Campanha & canais"
          title="Convite executivo, multicanal, com a ABEMD como reforço"
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
            “Estamos conduzindo o Índice Nacional de Vazamento de Valor 2026, um estudo
            executivo sobre onde as empresas perdem receita, margem e produtividade. São
            7 perguntas e menos de 5 minutos. Em troca, você recebe o Relatório
            Executivo, o benchmark do seu setor e convite ao webinar com a ABEMD. Posso
            enviar o link?”
          </blockquote>
        </figure>
      </Reveal>
    </Section>
  )
}

/* 15 ───────── Webinar ABEMD ───────── */
export function Webinar() {
  const cards = [
    { icon: Clock, t: 'Formato', d: '45 min de apresentação + 15 min de perguntas.' },
    { icon: Target, t: 'Função no funil', d: 'Entrega do benchmark consolidado e convite às Sessões Executivas.' },
    { icon: Users, t: 'Sessão Executiva', d: 'Nome oficial: Sessão Executiva de Interpretação dos Resultados. Nunca “reunião”.' },
  ]
  return (
    <Section id="webinar" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="Fase 4 · Webinar ABEMD"
          title="O palco onde o índice vira autoridade pública"
        />
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-2xl bg-brand-gradient p-8 text-white shadow-glow">
            <CalendarDays size={28} className="text-white/80" />
            <p className="mt-4 text-6xl font-extrabold leading-none">06/10</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/80">
              Data da live
            </p>
            <p className="mt-6 text-base leading-relaxed text-white/90">
              “Os Gargalos que Mais Consomem Margem nas Empresas Brasileiras.”
            </p>
            <p className="mt-4 text-sm text-white/70">
              Em parceria com a ABEMD: credibilidade institucional para o lançamento
              dos dados.
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
    { n: '4', p: '06/10', t: 'Webinar ABEMD', d: 'Lançamento público dos dados nacionais.', hot: true },
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
                'relative h-full rounded-2xl p-6',
                f.hot
                  ? 'bg-brand-gradient text-white shadow-glow'
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
          Datas indicativas, ancoradas no webinar de 06/10, a confirmar com o cliente.
        </p>
      </Reveal>
    </Section>
  )
}

/* 17 ───────── Governança ───────── */
export function Governanca() {
  const cliente = [
    'Aprovação de naming, branding e mensagens',
    'Conteúdo técnico do índice e do relatório',
    'Relacionamento ABEMD e parceiros',
    'Operação comercial das Sessões e do Composer',
    'Acesso e regras do SharpSpring',
  ]
  const agencia = [
    'Planejamento e direção do projeto',
    'Branding, LPs e peças de mídia digital',
    'Configuração de captação no SharpSpring',
    'Campanha multicanal e produção de conteúdo',
    'Consolidação visual do Relatório Executivo',
  ]
  const Col = ({ icon: Icon, title, items, dark }: { icon: typeof Briefcase; title: string; items: string[]; dark?: boolean }) => (
    <div className={cn('h-full rounded-2xl p-7', dark ? 'bg-ink-900 text-white' : 'border border-ink-900/5 bg-white shadow-card')}>
      <div className="mb-5 flex items-center gap-3">
        <span className={cn('inline-flex h-11 w-11 items-center justify-center rounded-xl', dark ? 'bg-brand-gradient text-white' : 'bg-brand-soft text-brand-purple')}>
          <Icon size={20} />
        </span>
        <h3 className={cn('text-lg font-semibold', dark ? 'text-white' : 'text-ink-900')}>{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it} className={cn('flex items-start gap-2.5 text-sm', dark ? 'text-white/80' : 'text-ink-500')}>
            <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', dark ? 'bg-brand-blue' : 'bg-brand-purple')} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
  return (
    <Section id="governanca" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="Governança & responsabilidades"
          title="Quem faz o quê — AlwaysOn como cliente, i9 como agência"
        />
      </Reveal>
      <Stagger className="grid gap-5 lg:grid-cols-2">
        <StaggerItem><Col icon={Briefcase} title="AlwaysOn · cliente" items={cliente} dark /></StaggerItem>
        <StaggerItem><Col icon={Edit3} title="i9 Criações · agência" items={agencia} /></StaggerItem>
      </Stagger>
    </Section>
  )
}

/* 18 ───────── Próximos passos ───────── */
export function Proximos() {
  const steps = [
    { n: '01', icon: Flag, t: 'Decidir o nome', d: 'Validar “Vazamento de Valor” com assinatura, ou escolher alternativa.' },
    { n: '02', icon: Droplet, t: 'Fechar o branding', d: 'Resolver os 6 pontos do kick-off para liberar as peças.' },
    { n: '03', icon: Settings, t: 'Validar o motor no CRM', d: 'Confirmar campos, scoring e automações no SharpSpring.' },
    { n: '04', icon: Monitor, t: 'Aprovar as LPs', d: 'Hero da LP 1 com prova social e FAQ da LP 2, CTA único.' },
  ]
  return (
    <Section id="proximos" tone="dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-brand-blue/20 blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-purple/20 blur-[110px]" />
      </div>
      <Reveal>
        <SectionHeader
          dark
          eyebrow="Para destravar o projeto"
          title="Próximos passos"
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {steps.map((s) => (
          <StaggerItem key={s.n}>
            <div className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                <s.icon size={22} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-brand-blue">{s.n}</span>
                  <h3 className="font-semibold text-white">{s.t}</h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{s.d}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
