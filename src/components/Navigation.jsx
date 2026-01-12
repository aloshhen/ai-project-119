import { useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItemsCount = useSelector(state => state.cart.items.length)

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className="fixed top-0 left-0 w-full bg-[#1E293B] z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#3B82F6]">Elegance</Link>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-[#F9FAFB] hover:text-[#3B82F6] transition">Главная</Link>
          <Link to="/catalog" className="text-[#F9FAFB] hover:text-[#3B82F6] transition">Каталог</Link>
          <Link to="/cart" className="flex items-center text-[#F9FAFB] hover:text-[#3B82F6] transition">
            <ShoppingBag className="mr-2" />
            {cartItemsCount > 0 && (
              <span className="bg-[#3B82F6] text-white rounded-full px-2 py-1 text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#F9FAFB]" /> : <Menu className="text-[#F9FAFB]" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#1E293B]"
        >
          <div className="px-4 py-4 space-y-4">
            <Link to="/" className="block text-[#F9FAFB] hover:text-[#3B82F6]">Главная</Link>
            <Link to="/catalog" className="block text-[#F9FAFB] hover:text-[#3B82F6]">Каталог</Link>
            <Link to="/cart" className="flex items-center text-[#F9FAFB] hover:text-[#3B82F6]">
              <ShoppingBag className="mr-2" />
              {cartItemsCount > 0 && (
                <span className="bg-[#3B82F6] text-white rounded-full px-2 py-1 text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation