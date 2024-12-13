import { FaRocket, FaBars } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black bg-opacity-50 text-white p-4 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center">
          <FaRocket className="mr-2 text-purple-400 animate-pulse" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
            CVisionary
          </span>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Templates</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">About</a></li>
          </ul>
        </nav>
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><a href="#" className="block py-2 px-4 hover:bg-purple-900 transition-colors">Home</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-purple-900 transition-colors">Templates</a></li>
            <li><a href="#" className="block py-2 px-4 hover:bg-purple-900 transition-colors">About</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

