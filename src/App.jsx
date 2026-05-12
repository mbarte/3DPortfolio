import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import {Home, About, Projects, Contacts} from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contacts/>} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
