import { motion } from 'framer-motion';

export default function Narratives() {
  return (
    <section className="pt-48 pb-32 bg-brand-dark min-h-screen flex flex-col items-center border-t border-white/5">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Narratives</h1>
        <p className="text-brand-gold uppercase tracking-[0.2em] text-sm mb-12">Journal & Insights</p>
        <div className="w-24 h-px bg-brand-gold/30 mx-auto mb-12"></div>
        <p className="text-gray-400 font-light leading-relaxed">Explore the stories behind our masterpieces, deep-dives into luxury design trends, and exclusive market intelligence.</p>
      </motion.div>
    </section>
  );
}