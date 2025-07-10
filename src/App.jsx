import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Bar from './pages/Shop'
import Lounge from './pages/Lounge'
import ProductDetails from './pages/ProductDetails'
import Shop from './pages/Shop'
import Liqueur from './pages/Liqueur'
import LinkTree from './pages/LinkTree'
import Product from './pages/Product'
import BarPage from './pages/BarPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/lounge" element={<Lounge />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bar-page" element={<BarPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/liqueur" element={<Liqueur />} />
        
        <Route path="/shop/:id" element={<Shop />} />
      </Route>
      <Route path="/sticker" element={<LinkTree />} />
    </Routes>
  )
}

export default App
