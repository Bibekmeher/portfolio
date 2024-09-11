import { Stack } from '@mui/material'
import Hero from './Components/Home'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import GetInTouch from './Components/GetInTouch'
import Experience from './Components/Experience'

function App() {

  return (
    <>
      <Stack bgcolor={theme => theme.palette.background.default}>
        <Navbar/>
        <Hero/>
        <Work/>
        <Experience/>
        <Skills/>
        <GetInTouch/>
        <Footer/>
      </Stack>
    </>
  )
}

export default App
