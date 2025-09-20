// import React from 'react'
import About from './components/About'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <header>
        <Navbar/>
        <Intro/>
      </header>
      <main>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App