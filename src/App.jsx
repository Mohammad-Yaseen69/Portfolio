import { BackgroundBeams } from "./components/ui/background-beams"
import { Section, Header , Hero , Skills} from "./components"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <div className="h-screen"></div>
      <BackgroundBeams />
    </>
  )
}

export default App
