import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PropertyViewer() {
  const [activeTab, setActiveTab] = useState('Living Room');
  const tabs = ['Living Room', 'Bedroom', 'Pool Area', 'Exterior'];
  
  const images = {
    'Living Room': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    'Bedroom': 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    'Pool Area': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    'Exterior': 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
  };

  return (
    <section className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white">The Virtual Experience</h2>
          <p className="mt-4 text-gray-400 font-light max-w-2xl mx-auto">Immerse yourself in our spotlight estate with an interactive visual tour.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-95 cursor-pointer ${activeTab === tab ? 'border-b-2 border-brand-gold text-brand-gold' : 'border-b-2 border-transparent text-gray-400 hover:text-white'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="overflow-hidden border border-white/10 h-[600px] relative">
          <img src={images[activeTab]} alt={activeTab} className="w-full h-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
        </motion.div>
      </div>
    </section>
  );
}