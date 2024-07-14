import { BackgroundBeams } from "./components/ui/background-beams"
import { CTA, Header , Hero , Skills , Projects , About , Contact, Footer} from "./components"
import { useDispatch, useSelector } from "react-redux"
import { getInfo } from "./store/infoSlice"
import {getUser } from "./store/userSlice"
import { useEffect } from "react"
import {Toaster} from "react-hot-toast"


function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.info)


  useEffect(() => {
    dispatch(getInfo()).then(res => {
      console.log(res)
    })

    dispatch(getUser())
  } ,[])

  console.log(data)

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
