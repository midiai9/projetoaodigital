export type NavItem = {
  id: string
  label: string
  group: string
}

// Cada item = uma seção da página.
export const NAV: NavItem[] = [
  { id: 'inicio', label: 'Início', group: 'Abertura' },

  { id: 'documento', label: 'O estudo', group: 'Parte 01 · Estratégia' },
  { id: 'visao', label: 'Visão estratégica', group: 'Parte 01 · Estratégia' },
  { id: 'desafio', label: 'O que você recebe', group: 'Parte 01 · Estratégia' },
  { id: 'publico', label: 'Público & metas', group: 'Parte 01 · Estratégia' },

  { id: 'workflow', label: 'Workflow', group: 'Parte 02 · O motor' },
  { id: 'questionario', label: 'Questionário', group: 'Parte 02 · O motor' },
  { id: 'crm', label: 'CRM SharpSpring', group: 'Parte 02 · O motor' },
  { id: 'qualificacao', label: 'Qualificação', group: 'Parte 02 · O motor' },
  { id: 'landing', label: 'Landing pages', group: 'Parte 02 · O motor' },
  { id: 'relatorio', label: 'Relatório', group: 'Parte 02 · O motor' },

  { id: 'composer', label: 'Composer', group: 'Parte 03 · Ativação' },
  { id: 'campanha', label: 'Campanha', group: 'Parte 03 · Ativação' },
  { id: 'webinar', label: 'Webinar Bento & ABEMD', group: 'Parte 03 · Ativação' },
  { id: 'cronograma', label: 'Cronograma', group: 'Parte 03 · Ativação' },
  { id: 'participar', label: 'Participar', group: 'Parte 03 · Ativação' },
]
