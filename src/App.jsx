import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProductCatalog from './components/ProductCatalog'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0F172A] text-[#F9FAFB]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App