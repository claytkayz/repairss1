import { useState } from 'react';
import { Menu, X, Wrench, Smartphone, Monitor, Laptop } from 'lucide-react';

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-48 md:h-72">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png?v=5" alt="iTG Global Tech" className="h-40 md:h-64 w-auto object-contain mix-blend-screen" />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white font-medium transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white font-medium transition-colors">How it Works</a>
            <a href="#why-us" className="text-gray-300 hover:text-white font-medium transition-colors">Why Us</a>
            <button onClick={onOpenModal} className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-900/20">
              Book Repair
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md">Services</a>
            <a href="#how-it-works" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md">How it Works</a>
            <a href="#why-us" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-slate-800 rounded-md">Why Us</a>
            <button onClick={() => { setIsOpen(false); onOpenModal(); }} className="block w-full text-left px-3 py-3 text-base font-medium text-blue-400 hover:bg-blue-500/10 rounded-md">Book Repair</button>
          </div>
        </div>
      )}
    </nav>
  );
}
