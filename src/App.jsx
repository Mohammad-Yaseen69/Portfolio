import { BackgroundBeams } from "./components/ui/background-beams"
import { CTA, Header , Hero , Skills , Projects , About , Contact, Footer} from "./components"

function App() {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Skills />
      <About />
      <CTA />
      <Projects />
      <Contact />
      <Footer />
      <BackgroundBeams />
    </div>
  )
}

export default App
