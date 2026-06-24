import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Award, Globe } from 'lucide-react';

const features = [
  { title: 'Verified Prestige', desc: 'Every property undergoes a rigorous vetting process to ensure uncompromising luxury.', icon: ShieldCheck },
  { title: 'Curated Luxury', desc: 'Exclusive access to off-market masterpieces and architectural marvels.', icon: Gem },
  { title: 'Expert Concierge', desc: 'Our advisors provide bespoke guidance tailored to your legacy goals.', icon: Award },
  { title: 'Global Reach', desc: 'Connecting distinguished clientele across the most desirable international locales.', icon: Globe },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-4xl font-serif text-white">The Trya Standard</h2>
          <p className="mt-4 text-gray-400 font-light max-w-2xl mx-auto">Elevating the luxury real estate experience through uncompromising dedication to excellence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto border border-brand-gold/30 rounded-full flex items-center justify-center mb-6 bg-brand-gold/5">
                <feature.icon className="text-brand-gold" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-serif text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}