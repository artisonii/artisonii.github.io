import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/HomeSection/Home'
import About from './components/AboutSection/About'
import Skill from './components/SkillSection/Skill'
import Project from './components/ProjectSection/Project'
import Contact from './components/ContactSection/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />

    </>
  )
}

export default App
