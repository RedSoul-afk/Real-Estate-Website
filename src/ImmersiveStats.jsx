import { motion } from 'framer-motion';

const stats = [
  { label: 'Masterpiece', value: '12,000 Sq Ft' },
  { label: 'Ocean Views', value: '270°' },
  { label: 'Ecosystem', value: 'AI Integrated' },
];

export default function ImmersiveStats() {
  return (
    <section className="py-24 bg-[#0f0f0f] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="py-6 md:py-0"
            >
              <div className="text-4xl md:text-5xl font-serif text-white mb-3">{stat.value}</div>
              <div className="text-brand-gold tracking-[0.2em] text-xs uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}