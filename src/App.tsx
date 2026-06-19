import { SideNav } from './components/SideNav'
import { Hero } from './sections/Hero'
import {
  Desafio,
  Documento,
  Leitura,
  Naming,
  Publico,
  Visao,
} from './sections/Part01'
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
  Cronograma,
  Governanca,
  Maestro,
  MaestroDivider,
  Proximos,
  Webinar,
} from './sections/Part03'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <SideNav />
      <main className="pt-16 lg:pl-64 lg:pt-0">
        <Hero />

        {/* Parte 01 · Estratégia */}
        <Documento />
        <Visao />
        <Leitura />
        <Naming />
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
        <MaestroDivider />
        <Maestro />
        <Campanha />
        <Webinar />
        <Cronograma />
        <Governanca />
        <Proximos />

        <Footer />
      </main>
    </div>
  )
}

export default App
