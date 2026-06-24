import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      className={`fixed w-full top-0 z-50 transition-all duration-700 border-b ${scrolled ? 'bg-[#131313]/95 backdrop-blur-2xl py-4 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'bg-black/20 backdrop-blur-md py-6 border-white/5'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif text-white tracking-widest uppercase block">Trya<span className="text-brand-gold">.</span></Link>
          </div>
          <nav className="hidden md:flex space-x-12">
            <Link to="/estates" className="text-xs tracking-[0.2em] text-gray-300 hover:text-brand-gold focus:outline-none focus:text-brand-gold transition-colors">ESTATES</Link>
            <Link to="/narratives" className="text-xs tracking-[0.2em] text-gray-300 hover:text-brand-gold focus:outline-none focus:text-brand-gold transition-colors">NARRATIVES</Link>
            <Link to="/concierge" className="text-xs tracking-[0.2em] text-gray-300 hover:text-brand-gold focus:outline-none focus:text-brand-gold transition-colors">CONCIERGE</Link>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="/#inquiry" className="bg-white/5 backdrop-blur-sm border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-95 cursor-pointer px-8 py-3 tracking-[0.15em] text-xs transition-all duration-500 uppercase shadow-[0_4px_20px_rgba(0,0,0,0.3)] block">Inquire</a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}