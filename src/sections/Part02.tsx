import {
  Activity,
  Building2,
  CheckCircle2,
  Compass,
  Cpu,
  Database,
  DollarSign,
  Eye,
  FileText,
  Filter,
  Grid3x3,
  Layers,
  Mail,
  Monitor,
  Send,
  Settings,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react'
import { Section } from '../components/Section'
import { PartDivider } from '../components/PartDivider'
import {
  CountUp,
  IconBadge,
  Reveal,
  SectionHeader,
  Stagger,
  StaggerItem,
  cn,
} from '../components/ui'

export function MotorDivider() {
  return (
    <PartDivider
      part="Parte 02"
      title="O motor do projeto"
      intro="Da pergunta à decisão: como cada resposta vira lead qualificado, relatório e, para os selecionados, uma oportunidade Composer."
      icon={Settings}
    />
  )
}

/* 7 ───────── Workflow ponta a ponta ───────── */
export function Workflow() {
  const steps = [
    { icon: Send, t: 'Convite', d: 'LinkedIn, WhatsApp, e-mail e parceiros levam à LP.' },
    { icon: Monitor, t: 'Landing page', d: 'Diagnóstico em 7 perguntas, baixa fricção, menos de 5 min.' },
    { icon: UserPlus, t: 'Captura', d: 'Nome, e-mail, telefone e opt-in entram no SharpSpring.' },
    { icon: Filter, t: 'Qualificação', d: 'Lead scoring por porte, cargo e impacto em A, B ou C.' },
    { icon: Mail, t: 'Raio-X imediato', d: 'Retorno automático e nutrição até o webinar.' },
    { icon: FileText, t: 'Consolidação', d: 'Relatório Executivo Nacional e Webinar ABEMD.' },
    { icon: Cpu, t: 'Seleção Composer', d: 'Leads A viram Sessão Executiva e POV do Composer.' },
  ]
  return (
    <Section id="workflow" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="Workflow ponta a ponta"
          title="Da captação à seleção para o Composer"
        />
      </Reveal>
      <div className="relative">
        <div className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-brand-blue via-brand-violet to-brand-magenta sm:block" />
        <Stagger className="space-y-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.t}>
              <div className="flex items-start gap-5">
                <div className="relative z-10 flex flex-col items-center">
                  <IconBadge icon={s.icon} />
                </div>
                <div className="card flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold gradient-text">0{i + 1}</span>
                    <h3 className="font-semibold text-ink-900">{s.t}</h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{s.d}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <Reveal delay={0.1}>
        <div className="mt-6 flex items-start gap-3 rounded-xl bg-brand-soft p-4 text-sm text-ink-700">
          <Eye size={18} className="mt-0.5 shrink-0 text-brand-purple" />
          <span>
            Anônimo por padrão; identificado quando o executivo solicita a Sessão
            Executiva — o que protege a taxa de início.
          </span>
        </div>
      </Reveal>
    </Section>
  )
}

/* 8 ───────── Questionário ───────── */
export function Questionario() {
  const qs = [
    { t: 'Desafio crítico (90 dias)', d: 'Qual desafio geraria maior impacto financeiro se resolvido? (aberto)' },
    { t: 'Onde afeta', d: 'Receita · Margem · Produtividade · UX · Crescimento · Risco.' },
    { t: 'Consequência estratégica', d: 'Crescimento abaixo do potencial, perda de margem, churn, escala…' },
    { t: 'Ordem de grandeza', d: 'Impacto anual: de até R$ 500 mil a acima de R$ 50 milhões.' },
    { t: 'Setor', d: 'Varejo, indústria, financeiro, telecom, educação, tecnologia…' },
    { t: 'Faturamento anual', d: 'Oito faixas, de até R$ 10MM a acima de R$ 5B.' },
    { t: 'Papel na organização', d: 'De CEO/Presidente a Especialista. Define o peso do respondente.' },
  ]
  return (
    <Section id="questionario" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="O questionário"
          title="Sete perguntas, menos de 5 minutos"
        />
      </Reveal>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {qs.map((q, i) => (
          <StaggerItem key={q.t}>
            <div className="card group h-full">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
                {i + 1}
              </div>
              <h3 className="font-semibold text-ink-900">{q.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{q.d}</p>
            </div>
          </StaggerItem>
        ))}
        <StaggerItem>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-brand-purple/30 bg-brand-soft p-6">
            <IconBadge icon={UserPlus} tone="soft" />
            <h3 className="mt-3 font-semibold text-ink-900">Captura de lead</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
              Após a P7: nome, e-mail, telefone e opt-in para o Relatório e a Sessão.
            </p>
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  )
}

/* 9 ───────── CRM SharpSpring ───────── */
export function Crm() {
  const blocks = [
    { icon: Database, t: 'Captura integrada', d: 'LP conectada via formulário nativo e tracking do SharpSpring. Cada conclusão cria ou atualiza o contato e registra a origem (UTM/canal).' },
    { icon: Grid3x3, t: 'Campos personalizados', d: 'Setor, faixa de faturamento, cargo e área de impacto; desafio (texto), consequência, ordem de grandeza e opt-in da Sessão.' },
    { icon: Zap, t: 'Automação & nurture', d: 'E-mail automático com o raio-X preliminar; trilha de nutrição até o webinar; alerta ao comercial nos leads A.' },
    { icon: Filter, t: 'Listas & pipeline', d: 'Listas dinâmicas por setor e porte para o benchmark; pipeline de oportunidade dedicado às Sessões Executivas.' },
  ]
  return (
    <Section id="crm" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="Operação no CRM · SharpSpring"
          title="O CRM do cliente como espinha dorsal da captação"
        />
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {blocks.map((b) => (
          <StaggerItem key={b.t}>
            <div className="card flex h-full gap-4">
              <IconBadge icon={b.icon} />
              <div>
                <h3 className="font-semibold text-ink-900">{b.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{b.d}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}

/* 10 ───────── Qualificação & seleção ───────── */
export function Qualificacao() {
  const tiers = [
    { k: 'A', t: 'Prioridade máxima', d: 'C-level ou Diretor, faturamento ≥ R$ 101MM, impacto ≥ R$ 2MM e opt-in “Sim”.', hot: true },
    { k: 'B', t: 'Nutrir', d: 'Porte ou cargo relevantes, mas sem todos os critérios de A.' },
    { k: 'C', t: 'Base de benchmark', d: 'Compõem o índice; entram em conteúdo e relacionamento.' },
  ]
  return (
    <Section id="qualificacao" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Qualificação & seleção"
          title="Nem todo respondente é um lead Composer — e tudo bem"
        />
      </Reveal>
      <Stagger className="grid gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <StaggerItem key={t.k}>
            <div
              className={cn(
                'relative h-full overflow-hidden rounded-2xl p-7',
                t.hot
                  ? 'bg-brand-gradient text-white shadow-glow'
                  : 'border border-ink-900/5 bg-white shadow-card',
              )}
            >
              <span
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold',
                  t.hot ? 'bg-white/15 text-white' : 'bg-brand-soft text-brand-purple',
                )}
              >
                {t.k}
              </span>
              <h3 className={cn('mt-4 text-lg font-semibold', t.hot ? 'text-white' : 'text-ink-900')}>
                {t.t}
              </h3>
              <p className={cn('mt-2 text-sm leading-relaxed', t.hot ? 'text-white/85' : 'text-ink-500')}>
                {t.d}
              </p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <div className="mt-6 flex items-start gap-4 rounded-2xl border border-brand-purple/20 bg-white p-6 shadow-card">
          <IconBadge icon={Cpu} />
          <p className="text-sm leading-relaxed text-ink-700">
            <strong className="text-ink-900">Critério de entrada no Composer:</strong>{' '}
            leads A em setores prioritários (varejo, financeiro, telecom, indústria)
            viram Sessão Executiva de Interpretação e, na sequência, um POV
            “Decision Team First” do Composer (6 a 8 semanas).
          </p>
        </div>
      </Reveal>
    </Section>
  )
}

/* 11 ───────── Landing pages ───────── */
export function Landing() {
  const lp1 = ['Hero direto ao diagnóstico, menos atrito.', 'Início imediato do diagnóstico.', 'Selos: 7 perguntas, < 5 min, 100% gratuito.', 'Foco em conversão.']
  const lp2 = ['Aquece com contexto antes do CTA.', 'Prova social: 250+ empresas.', 'Selos: confidencial, sem compromisso.', 'Seção de FAQ.']
  return (
    <Section id="landing" tone="light">
      <Reveal>
        <SectionHeader
          eyebrow="As duas landing pages"
          title="Diagnóstico-first + prova social: o melhor das duas"
        />
      </Reveal>
      <Stagger className="grid gap-5 lg:grid-cols-2">
        <StaggerItem>
          <div className="card h-full">
            <div className="mb-4 flex items-center gap-3">
              <IconBadge icon={Monitor} tone="soft" />
              <h3 className="font-semibold text-ink-900">LP 1 · Diagnóstico Corporativo</h3>
            </div>
            <ul className="space-y-2.5">
              {lp1.map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-ink-500">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-blue" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="card h-full">
            <div className="mb-4 flex items-center gap-3">
              <IconBadge icon={Eye} tone="soft" />
              <h3 className="font-semibold text-ink-900">LP 2 · Estudo Exclusivo</h3>
            </div>
            <ul className="space-y-2.5">
              {lp2.map((l) => (
                <li key={l} className="flex items-start gap-2 text-sm text-ink-500">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-purple" />
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </Stagger>
      <Reveal delay={0.1}>
        <div className="mt-6 flex items-start gap-4 rounded-2xl bg-brand-gradient p-[1.5px] shadow-glow">
          <div className="flex w-full items-start gap-4 rounded-2xl bg-white p-6">
            <IconBadge icon={CheckCircle2} />
            <p className="text-sm leading-relaxed text-ink-700">
              <strong className="gradient-text">Recomendação:</strong> Hero da LP 1
              (diagnóstico-first) com a prova social e o FAQ da LP 2. CTA único{' '}
              <strong className="text-ink-900">“Iniciar Diagnóstico Corporativo”.</strong>{' '}
              Campos obrigatórios só na etapa final.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

/* 12 ───────── Relatório Executivo ───────── */
export function Relatorio() {
  const items = [
    { icon: Grid3x3, t: 'Ranking por setor', d: 'Onde cada indústria mais perde valor.' },
    { icon: Building2, t: 'Ranking por porte', d: 'O vazamento muda com o tamanho da empresa.' },
    { icon: Users, t: 'Ranking por cargo', d: 'A leitura da liderança vs. a operação.' },
    { icon: DollarSign, t: 'Impacto financeiro', d: 'Ordem de grandeza agregada das perdas.' },
    { icon: Activity, t: 'Índice de Vazamento', d: 'O número-síntese, comparável e citável.' },
    { icon: Compass, t: 'Insights & prioridades', d: 'Para onde o mercado está investindo.' },
  ]
  return (
    <Section id="relatorio" tone="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Fase 3 · Relatório Executivo"
          title="O ativo de autoridade que justifica cada resposta dada"
        />
      </Reveal>
      <Reveal delay={0.05}>
        <div className="mb-8 flex flex-wrap items-center gap-6 rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card">
          <div className="flex items-baseline gap-2">
            <CountUp to={20} className="text-4xl font-extrabold gradient-text" />
            <span className="text-2xl font-bold text-ink-300">–</span>
            <CountUp to={30} suffix="" className="text-4xl font-extrabold gradient-text" />
            <span className="ml-2 text-sm font-medium text-ink-500">páginas, consolidadas após a captação</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-semibold text-brand-purple">
            <FileText size={14} /> Gratuito a todos os participantes
          </div>
        </div>
      </Reveal>
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <StaggerItem key={it.t}>
            <div className="card flex h-full gap-4">
              <IconBadge icon={it.icon} tone="soft" />
              <div>
                <h3 className="font-semibold text-ink-900">{it.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-500">{it.d}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <p className="mt-6 flex items-center gap-2 text-sm text-ink-500">
          <Layers size={16} className="text-brand-purple" />É a porta de entrada para a Sessão Executiva.
        </p>
      </Reveal>
    </Section>
  )
}
