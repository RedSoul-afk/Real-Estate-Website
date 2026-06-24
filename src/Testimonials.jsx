import { motion } from 'framer-motion';

const reviews = [
  { name: 'Alexander Sterling', role: 'Distinguished Client', text: '"Trya Estates redefined our expectations. The discretion, access, and flawless execution in acquiring our Malibu retreat was simply unmatched."' },
  { name: 'Eleanor Vance', role: 'Distinguished Client', text: '"An impeccably curated portfolio. They understood our vision for a legacy property and delivered an architectural masterpiece."' },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center">
          <h2 className="text-4xl font-serif text-white">Words of Distinction</h2>
          <p className="mt-4 text-brand-gold uppercase tracking-[0.2em] text-xs">From our Private Clientele</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 border border-white/10 bg-white/5 relative"
            >
              <div className="text-brand-gold text-4xl font-serif absolute top-6 left-6 opacity-30">"</div>
              <p className="text-gray-300 text-lg md:text-xl font-light italic mb-8 relative z-10 leading-relaxed">{review.text}</p>
              <div className="flex items-center">
                <div>
                  <div className="font-serif text-white text-lg">{review.name}</div>
                  <div className="text-xs uppercase tracking-widest text-brand-gold mt-1">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}