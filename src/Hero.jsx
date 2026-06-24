import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-brand-dark flex items-center justify-center">
      <motion.div style={{ y, scale: 1.05 }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2850&q=80" 
          alt="Modern House" 
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#131313]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_60%)]" />
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
        >
          Luxury Living <br className="hidden md:block" /> <span className="text-brand-gold italic drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">Reimagined</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 font-light tracking-[0.05em] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
        >
          Discover exceptional properties crafted for modern lifestyles.
        </motion.p>
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="/#properties" className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-95 cursor-pointer px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.4)] inline-block text-center">View Properties</a>
          <a href="/#inquiry" className="bg-black/20 backdrop-blur-md border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-95 cursor-pointer px-10 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.4)] inline-block text-center">Schedule Consultation</a>
        </motion.div>
      </div>
    </section>
  );
}