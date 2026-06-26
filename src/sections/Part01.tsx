import {
  Award,
  BarChart3,
  Building2,
  Cpu,
  Database,
  DollarSign,
  FileText,
  Grid3x3,
  ListChecks,
  Monitor,
  Settings,
  Share2,
  Tag,
  Target,
  Ticket,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Section } from '../components/Section'
import {
  CountUp,
  IconBadge,
  Reveal,
  SectionHeader,
  Stagger,
  StaggerItem,
  cn,
} from '../components/ui'

/* 1 ───────── O estudo ───────── */
export function Documento() {
  const items = [
    { n: '01', icon: Target, t: 'Estratégia & metas', d: 'Objetivo, públicos-alvo e o que define sucesso.' },
    { n: '02', icon: Tag, t: 'Marca & nome', d: 'Índice Always On de Vazamento de Valor — a assinatura do estudo.' },
    { n: '03', icon: Settings, t: 'O motor', d: 'Da LP às 7 perguntas, ao CRM e ao Relatório Executivo.' },
    { n: '04', icon: Database, t: 'SharpSpring & scoring', d: 'Operação no CRM, qualificação e seleção de leads.' },
    { n: '05', icon: Monitor, t: 'Landing pages', d: 'As duas abordagens e a recomendação de conversão.' },
    { n: '06', icon: Cpu, t: 'Composer & ativação', d: 'Quem é selecionado e como vira oportunidade.' },
  ]
  return (
    <Section id="documento" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="O que este estudo entrega"
          title="Da pesquisa de 7 perguntas à nova receita orquestrada"
          intro="Seis blocos que vão da estratégia ao motor de geração de oportunidades."
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <StaggerItem key={it.n}>
            <div className="card group h-full">
              <div className="mb-4 flex items-center justify-between">
                <IconBadge icon={it.icon} />
                <span className="text-2xl font-bold text-ink-300/70">{it.n}</span>
              </div>
              <h3 className="text-lg font-semibold text-ink-900">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{it.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

/* 2 ───────── Visão estratégica ───────── */
export function Visao() {
  const frentes = [
    { icon: TrendingUp, t: 'Mercado', d: 'Produzir um benchmark nacional inédito por setor e porte.' },
    { icon: Award, t: 'Marketing', d: 'Gerar autoridade e ativos editoriais para 12 meses.' },
    { icon: Share2, t: 'Comercial', d: 'Identificar e qualificar oportunidades reais de negócio.' },
    { icon: Cpu, t: 'Composer', d: 'Mapear casos de uso concretos para a ferramenta.' },
    { icon: FileText, t: 'Conteúdo', d: 'Abastecer webinar Bento & ABEMD, relatório e campanha.' },
  ]
  return (
    <Section id="visao" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Visão estratégica"
          title="Um índice de autoridade que alimenta o pipeline e o Composer"
        />
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mb-8 overflow-hidden rounded-2xl bg-brand-gradient bg-[length:200%_200%] p-[1.5px] shadow-glow animate-gradient-pan">
          <div className="rounded-2xl bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
              Objetivo central
            </p>
            <p className="mt-3 text-xl font-medium leading-relaxed text-ink-800">
              Mapear onde empresas brasileiras perdem valor em receita, margem e
              produtividade — dentro de Marketing, Vendas, CRM e Experiência do
              Cliente — e quais investimentos geram retorno.
            </p>
          </div>
        </div>
      </Reveal>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {frentes.map((f) => (
          <StaggerItem key={f.t}>
            <div className="card h-full text-center">
              <div className="mb-3 flex justify-center">
                <IconBadge icon={f.icon} tone="soft" />
              </div>
              <h3 className="font-semibold text-ink-900">{f.t}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-500">{f.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <p className="mt-8 border-l-2 border-brand-purple/40 pl-4 text-lg italic text-ink-500">
          O dado coletado não é só conteúdo: vira benchmark, vira pipeline e vira
          caso de uso real para o Composer.
        </p>
      </Reveal>
    </Section>
  )
}

/* 3 ───────── O que você recebe (WIIFM) ───────── */
export function Desafio() {
  const items = [
    { icon: BarChart3, t: 'Benchmark exclusivo', d: 'Como empresas do mesmo setor e porte enfrentam seus desafios.' },
    { icon: TrendingUp, t: 'Índice de Vazamento', d: 'Onde, de fato, as organizações estão perdendo dinheiro.' },
    { icon: DollarSign, t: 'Custo de oportunidade', d: 'Quanto custa ignorar cada gargalo específico.' },
    { icon: ListChecks, t: 'Mapa de prioridades', d: 'Em quais frentes o mercado está investindo agora.' },
    { icon: Users, t: 'Sessão Executiva', d: 'Interpretação dos resultados aplicada à sua realidade.' },
    { icon: Ticket, t: 'Acesso exclusivo ao evento', d: 'Pesquisa apresentada com autoridades no evento, exclusiva para quem se inscreve e é selecionado.' },
  ]
  return (
    <Section id="desafio" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="O que você recebe"
          title="5 minutos do seu tempo, valor de board de volta"
          intro="Você não responde para ajudar a Always On. Responde para receber, de volta, seis entregas concretas."
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <StaggerItem key={it.t}>
            <div className="card group flex h-full gap-4">
              <div className="flex flex-col items-center">
                <IconBadge icon={it.icon} />
                <span className="mt-2 text-xs font-bold text-ink-300">
                  0{i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">{it.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{it.d}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

/* 4 ───────── Público & metas ───────── */
export function Publico() {
  const metas = [
    { v: 150, t: 'Meta mínima', d: 'de empresas respondentes.' },
    { v: 250, t: 'Meta ideal', d: 'o índice ganha robustez estatística a partir daqui.' },
    { v: 500, t: 'Meta aspiracional', d: 'alcance nacional pleno.' },
  ]
  const dims = [
    { icon: Grid3x3, t: 'Setor', d: 'Varejo · Indústria · Financeiro · Telecom · Saúde · Educação · Turismo · Tecnologia · Mobilidade · Serviços.' },
    { icon: Building2, t: 'Porte (faturamento)', d: 'De até R$ 10MM a acima de R$ 5B — oito faixas que definem o perfil e a prioridade comercial.' },
    { icon: Users, t: 'Cargo', d: 'CEO · C-Level · VP · Diretor · Gerente · Coordenador · Especialista. Peso maior para a alta liderança.' },
  ]
  return (
    <Section id="publico" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Público, segmentação & metas"
          title="Liderança executiva, sem restrição de setor, qualificada na captura"
        />
      </Reveal>
      <Stagger className="mb-10 grid gap-5 sm:grid-cols-3">
        {metas.map((m, i) => (
          <StaggerItem key={m.t}>
            <div
              className={cn(
                'rounded-2xl p-7 text-center transition-transform duration-300 hover:-translate-y-1',
                i === 1
                  ? 'bg-brand-gradient bg-[length:200%_200%] text-white shadow-glow animate-gradient-pan'
                  : 'border border-ink-900/5 bg-white shadow-card',
              )}
            >
              <CountUp
                to={m.v}
                className={cn(
                  'text-5xl font-extrabold tracking-tight',
                  i === 1 ? 'text-white' : 'gradient-text',
                )}
              />
              <p className={cn('mt-3 font-semibold', i === 1 ? 'text-white' : 'text-ink-900')}>
                {m.t}
              </p>
              <p className={cn('mt-1 text-sm', i === 1 ? 'text-white/80' : 'text-ink-500')}>
                {m.d}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Stagger className="grid gap-5 lg:grid-cols-3">
        {dims.map((d) => (
          <StaggerItem key={d.t}>
            <div className="card h-full">
              <IconBadge icon={d.icon} tone="soft" />
              <h3 className="mt-4 font-semibold text-ink-900">{d.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{d.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
