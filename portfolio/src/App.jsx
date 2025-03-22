import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import "./index.css"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
     <Navbar />
      <div id="home">
        <Home />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
    </div>
  )
}

export default App
