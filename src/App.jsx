import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Profile from './components/Profile'
import Expertise from './components/Expertise'
// import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <Header/>
      <Profile/>
      <About/>
      <Expertise/>
      <Work/>
      {/* <Projects/> */}
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default App
