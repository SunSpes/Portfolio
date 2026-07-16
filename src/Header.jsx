import { useState } from 'react'
import { useTheme } from './useTheme'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import Montage from './montage.jsx'
import MotionDesign from './motiondesign.jsx'

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const goTo = (path) => {
    navigate(path)
    setMenuOpen(false)
  }

  return (
    <div className={`${isHome ? 'bg-transparent' : 'bg-white dark:bg-stone-900'} 
    z-50 px-6 md:px-12 py-6 transition-colors duration-300 ease-in-out md:py-8 text-white font-bricolage font-semibold flex flex-row justify-center items-center gap-4 relative`}
    >
      
      {!isHome && (
        <button
          onClick={() => navigate('/')}
          className="absolute text-black left-6 md:left-12 flex items-center md:text-gray-200 md:dark:text-gray-500 md:hover:text-stone-900 dark:hover:text-gray-100 transition-colors duration-300 text-sm md:text-xl"
        >
          RETOUR / BACK
        </button>
      )}

      <section className="hidden md:flex text-transparent font-black text-2xl flex-row gap-10">
        <button
          onClick={() => goTo('/montage')}
          className={`${isHome ? 'text-white drop-shadow-lg' : 'text-gray-200'} hover:text-pink-400 py-1 px-8 transition-all duration-300 ease-in-out hover:scale-110`}
        >
          MONTAGE
        </button>
        <button
          onClick={() => goTo('/motion-design')}
          className={`${isHome ? 'text-white drop-shadow-lg' : 'text-gray-200'} hover:text-pink-400 py-1 px-8 transition-all duration-400 ease-in-out hover:scale-110`}
        >
          MOTION DESIGN
        </button>
        <button
  onClick={toggleTheme}
  aria-label="Changer de thème"
  className={`absolute right-6 md:right-12 flex h-8 scale-75 w-16 items-center rounded-full p-1 transition-colors duration-300 ${
    theme === "light" ? "bg-stone-700" : "bg-gray-300"
  }`}
>
  <div
    className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
      theme === "light" ? "translate-x-8" : "translate-x-0"
    }`}
  >
    {theme === "light" ? "🌙" : "☀️"}
  </div>
</button>
      </section>

      {/* Bouton burger (mobile uniquement) */}
      <button
        className="md:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-8 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Menu mobile plein écran */}
      <div
        className={`md:hidden fixed inset-0 z-[100] bg-stone-900/50 backdrop-blur-md flex flex-col items-center justify-center gap-24 text-5xl text-transparent ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="border bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 bg-text backdrop-blur-md rounded-full pb-2 pt-1  px-8"
          onClick={() => goTo('/montage')}
        >
          Montage
        </button>
        <button
          className="border bg-clip-text bg-gradient-to-r from-pink-500 to-pink-300 bg-text backdrop-blur-md rounded-full pb-2 pt-1 px-8"
          onClick={() => goTo('/motion-design')}
        >
          Motion Design
        </button>
        <p className="hidden md:block text-white text-lg mt-4">SUNSPES</p>
      </div>
    </div>
  )
}

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className={isHome ? "h-screen flex flex-col" : "min-h-screen flex flex-col"}>
      <Header />
      <div className={isHome ? "flex-1 overflow-y-auto" : "flex-1"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/montage" element={<Montage />} />
          <Route path="/motion-design" element={<MotionDesign />} />
        </Routes>
      </div>
    </div>
  )
}

export default App