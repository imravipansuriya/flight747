import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  )
}

export default App
