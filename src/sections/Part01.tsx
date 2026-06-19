import {
  AlertTriangle,
  Award,
  BarChart3,
  Building2,
  Cpu,
  Database,
  DollarSign,
  Droplet,
  FileText,
  Grid3x3,
  ListChecks,
  Monitor,
  Settings,
  Share2,
  Tag,
  Target,
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

/* 1 ───────── O documento ───────── */
export function Documento() {
  const items = [
    { n: '01', icon: Target, t: 'Estratégia & metas', d: 'Objetivo, públicos-alvo e o que define sucesso.' },
    { n: '02', icon: Tag, t: 'Naming & marca', d: 'Risco do nome atual e alternativas para decisão.' },
    { n: '03', icon: Settings, t: 'O motor', d: 'Da LP às 7 perguntas, ao CRM e ao Relatório Executivo.' },
    { n: '04', icon: Database, t: 'SharpSpring & scoring', d: 'Operação no CRM, qualificação e seleção de leads.' },
    { n: '05', icon: Monitor, t: 'Landing pages', d: 'As duas abordagens e a recomendação de conversão.' },
    { n: '06', icon: Cpu, t: 'Maestro & ativação', d: 'Quem é selecionado e como vira oportunidade.' },
  ]
  return (
    <Section id="documento" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="O que este documento define"
          title="Da pesquisa de 6 perguntas à nova receita orquestrada"
          intro="Seis blocos que vão da estratégia ao motor de geração de oportunidades."
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <StaggerItem key={it.n}>
            <div className="card group h-full transition-transform duration-300 hover:-translate-y-1">
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
    { icon: Cpu, t: 'Maestro', d: 'Mapear casos de uso concretos para a ferramenta.' },
    { icon: FileText, t: 'Conteúdo', d: 'Abastecer webinar ABEMD, relatório e campanha.' },
  ]
  return (
    <Section id="visao" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Visão estratégica"
          title="Um índice de autoridade que alimenta o pipeline e o Maestro"
        />
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mb-8 overflow-hidden rounded-2xl bg-brand-gradient p-[1.5px] shadow-glow">
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
          caso de uso real para o Maestro.
        </p>
      </Reveal>
    </Section>
  )
}

/* 3 ───────── Leitura honesta ───────── */
export function Leitura() {
  const items = [
    {
      icon: Tag,
      t: 'O nome carrega um risco',
      d: '“Vazamento” colide com “vazamento de dados” — associação infeliz para uma empresa de dados, e um enquadramento negativo. O conceito é forte; a palavra precisa de decisão consciente.',
    },
    {
      icon: Droplet,
      t: 'A marca não está validada',
      d: 'O kick-off de branding tem 6 pontos em aberto: crença, tipografia Omnes, paleta e tom de voz. Este material assume a paleta azul e roxo como hipótese, não como verdade aprovada.',
    },
    {
      icon: Settings,
      t: 'O motor não estava definido',
      d: 'Como as 7 respostas viram CRM, relatório e seleção para o Maestro não existia em nenhum documento. Foi desenhado aqui e precisa de validação operacional no SharpSpring.',
    },
  ]
  return (
    <Section id="leitura" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="Antes de executar"
          title="Três decisões em aberto que precisam ser fechadas"
          intro="Leitura honesta: o que ainda não está decidido — e por quê isso importa."
        />
      </Reveal>
      <Stagger className="grid gap-5 lg:grid-cols-3">
        {items.map((it, i) => (
          <StaggerItem key={it.t}>
            <div className="card relative h-full border-amber-300/40 bg-amber-50/40">
              <span className="absolute right-5 top-5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-600">
                {i + 1}
              </span>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/20 text-amber-600">
                <it.icon size={22} />
              </div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-ink-900">
                {it.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{it.d}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-100/50 p-4 text-sm text-amber-800">
          <AlertTriangle size={18} className="mt-0.5 shrink-0" />
          <span>O conceito é sólido — o que falta é decisão. Fechá-las destrava a execução.</span>
        </div>
      </Reveal>
    </Section>
  )
}

/* 4 ───────── Naming ───────── */
export function Naming() {
  const rows = [
    { n: 'Índice Nacional de Vazamento de Valor', a: 'Visceral; conceito de consultoria; autoridade.', r: '“Vazamento” = data breach; tom negativo.', tag: 'Atual' },
    { n: 'Índice AlwaysOn de Vazamento de Valor', a: 'Conceito + assinatura proprietária (efeito “FIPE”).', r: 'Mais longo; ainda usa “vazamento”.', tag: 'Recomendado' },
    { n: 'Mapa Nacional dos Gargalos de Receita', a: 'Usa a palavra do próprio webinar (“gargalos”).', r: 'Menos ideia de “índice/série”.' },
    { n: 'Índice Brasileiro de Perda de Receita', a: 'Claro e direto; evita colisão com dados.', r: '“Perda” ainda é negativo.' },
    { n: 'Barômetro Nacional de Margem & Crescimento', a: 'Sugere recorrência anual; tom positivo.', r: 'Menos impacto emocional imediato.' },
    { n: 'Índice de Valor Não Capturado', a: 'Sofisticado; alinha com “custo de oportunidade”.', r: 'Abstrato para parte do público.' },
  ]
  return (
    <Section id="naming" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Naming · decisão do cliente"
          title="O conceito é forte. A palavra “vazamento” é a decisão."
        />
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mb-8 flex items-start gap-4 rounded-2xl bg-brand-soft p-6">
          <IconBadge icon={Award} />
          <p className="text-base leading-relaxed text-ink-700">
            <strong className="text-ink-900">Recomendação:</strong> manter “Vazamento
            de Valor” como conceito público (visceral, remete a <em>value leakage</em>,
            termo de board), blindando o risco com assinatura proprietária —{' '}
            <strong className="gradient-text">“Índice AlwaysOn de Vazamento de Valor”.</strong>
          </p>
        </div>
      </Reveal>
      <Stagger className="space-y-3">
        {rows.map((r) => {
          const rec = r.tag === 'Recomendado'
          return (
            <StaggerItem key={r.n}>
              <div
                className={cn(
                  'grid items-center gap-4 rounded-xl border p-4 sm:grid-cols-[1.3fr_1fr_1fr]',
                  rec
                    ? 'border-brand-purple/30 bg-white shadow-glow'
                    : 'border-ink-900/5 bg-white shadow-card',
                )}
              >
                <div className="flex items-center gap-3">
                  {rec && <span className="h-2 w-2 shrink-0 rounded-full bg-brand-gradient" />}
                  <div>
                    <p className={cn('font-semibold', rec ? 'gradient-text' : 'text-ink-900')}>
                      {r.n}
                    </p>
                    {r.tag && (
                      <span
                        className={cn(
                          'mt-1 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide',
                          rec ? 'bg-brand-gradient text-white' : 'bg-ink-900/5 text-ink-400',
                        )}
                      >
                        {r.tag}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-ink-500">
                  <span className="font-medium text-ink-400">Ângulo · </span>
                  {r.a}
                </p>
                <p className="text-sm text-ink-500">
                  <span className="font-medium text-ink-400">Risco · </span>
                  {r.r}
                </p>
              </div>
            </StaggerItem>
          )
        })}
      </Stagger>
    </Section>
  )
}

/* 5 ───────── Desafio executivo (WIIFM) ───────── */
export function Desafio() {
  const items = [
    { icon: BarChart3, t: 'Benchmark exclusivo', d: 'Como empresas do mesmo setor e porte enfrentam seus desafios.' },
    { icon: TrendingUp, t: 'Índice de Vazamento', d: 'Onde, de fato, as organizações estão perdendo dinheiro.' },
    { icon: DollarSign, t: 'Custo de oportunidade', d: 'Quanto custa ignorar cada gargalo específico.' },
    { icon: ListChecks, t: 'Mapa de prioridades', d: 'Em quais frentes o mercado está investindo agora.' },
    { icon: Users, t: 'Sessão Executiva', d: 'Interpretação dos resultados aplicada à sua realidade.' },
  ]
  return (
    <Section id="desafio" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="O desafio executivo · WIIFM"
          title="Conquistar 5 minutos do executivo entregando valor antes de pedir"
          intro="O executivo não responde para ajudar a AlwaysOn. Responde para receber, de volta, cinco entregas concretas."
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <StaggerItem key={it.t}>
            <div className="card group flex h-full gap-4 transition-transform duration-300 hover:-translate-y-1">
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

/* 6 ───────── Público & metas ───────── */
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
                'rounded-2xl p-7 text-center',
                i === 1
                  ? 'bg-brand-gradient text-white shadow-glow'
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
