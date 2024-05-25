import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Profile from './components/Profile'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Achievements from './components/Achievements'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='app'>
      <Header/>
      <Profile/>
      <About/>
      <Expertise/>
      <Projects/>
      <Achievements/>
    </div>
  )
}

export default App
