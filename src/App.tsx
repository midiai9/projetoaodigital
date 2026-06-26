import { ScrollProgress } from './components/ScrollProgress'
import { SideNav } from './components/SideNav'
import { Hero } from './sections/Hero'
import { Desafio, Documento, Publico, Visao } from './sections/Part01'
import {
  Crm,
  Landing,
  MotorDivider,
  Qualificacao,
  Questionario,
  Relatorio,
  Workflow,
} from './sections/Part02'
import {
  Campanha,
  Composer,
  ComposerDivider,
  Cronograma,
  Cta,
  Webinar,
} from './sections/Part03'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollProgress />
      <SideNav />
      <main className="pt-16 lg:pl-64 lg:pt-0">
        <Hero />

        {/* Parte 01 · Estratégia */}
        <Documento />
        <Visao />
        <Desafio />
        <Publico />

        {/* Parte 02 · O motor */}
        <MotorDivider />
        <Workflow />
        <Questionario />
        <Crm />
        <Qualificacao />
        <Landing />
        <Relatorio />

        {/* Parte 03 · Ativação */}
        <ComposerDivider />
        <Composer />
        <Campanha />
        <Webinar />
        <Cronograma />
        <Cta />

        <Footer />
      </main>
    </div>
  )
}

export default App
