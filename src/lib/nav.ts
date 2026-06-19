export type NavItem = {
  id: string
  label: string
  group: string
}

// Cada item = uma seção da página (um "slide" do planejamento).
export const NAV: NavItem[] = [
  { id: 'inicio', label: 'Início', group: 'Abertura' },

  { id: 'documento', label: 'O documento', group: 'Parte 01 · Estratégia' },
  { id: 'visao', label: 'Visão estratégica', group: 'Parte 01 · Estratégia' },
  { id: 'leitura', label: 'Leitura honesta', group: 'Parte 01 · Estratégia' },
  { id: 'naming', label: 'Naming', group: 'Parte 01 · Estratégia' },
  { id: 'desafio', label: 'Desafio executivo', group: 'Parte 01 · Estratégia' },
  { id: 'publico', label: 'Público & metas', group: 'Parte 01 · Estratégia' },

  { id: 'workflow', label: 'Workflow', group: 'Parte 02 · O motor' },
  { id: 'questionario', label: 'Questionário', group: 'Parte 02 · O motor' },
  { id: 'crm', label: 'CRM SharpSpring', group: 'Parte 02 · O motor' },
  { id: 'qualificacao', label: 'Qualificação', group: 'Parte 02 · O motor' },
  { id: 'landing', label: 'Landing pages', group: 'Parte 02 · O motor' },
  { id: 'relatorio', label: 'Relatório', group: 'Parte 02 · O motor' },

  { id: 'composer', label: 'Composer AI OS', group: 'Parte 03 · Ativação' },
  { id: 'campanha', label: 'Campanha', group: 'Parte 03 · Ativação' },
  { id: 'webinar', label: 'Webinar ABEMD', group: 'Parte 03 · Ativação' },
  { id: 'cronograma', label: 'Cronograma', group: 'Parte 03 · Ativação' },
  { id: 'governanca', label: 'Governança', group: 'Parte 03 · Ativação' },
  { id: 'proximos', label: 'Próximos passos', group: 'Parte 03 · Ativação' },
]
