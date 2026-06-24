import { motion } from 'framer-motion';
import { Bed, Bath, Square } from 'lucide-react';

const properties = [
  { id: 1, title: 'The Aurelia Mansion', location: 'Beverly Hills, CA', price: '$18,500,000', beds: 6, baths: 8, sqft: '12,400', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Skyline Penthouse', location: 'Manhattan, NY', price: '$12,100,000', beds: 4, baths: 5, sqft: '5,800', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Coastal Retreat', location: 'Malibu, CA', price: '$24,250,000', beds: 7, baths: 9, sqft: '14,500', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
];

export default function FeaturedEstates() {
  return (
    <section id="properties" className="py-32 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-serif text-white">Featured Estates</h2>
            <p className="mt-4 text-gray-400 font-light tracking-wide">A curated selection of the world's most prestigious residences.</p>
          </motion.div>
          <motion.button initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="hidden sm:block text-brand-gold text-sm tracking-[0.15em] uppercase hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark rounded px-3 py-2 active:scale-95 transition-all cursor-pointer">
            View Portfolio &rarr;
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((prop, i) => (
            <motion.a 
              href={`#property-${prop.id}`}
              key={prop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="block group bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-brand-gold/50 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6">
                  <div className="text-2xl font-serif text-white">{prop.price}</div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif text-white mb-1 truncate">{prop.title}</h4>
                <p className="text-brand-gold text-sm tracking-wide mb-6">{prop.location}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 border-t border-white/10 pt-4 font-light">
                  <span className="flex items-center gap-2"><Bed size={16} className="text-brand-gold"/> {prop.beds} Beds</span>
                  <span className="flex items-center gap-2"><Bath size={16} className="text-brand-gold"/> {prop.baths} Baths</span>
                  <span className="flex items-center gap-2"><Square size={16} className="text-brand-gold"/> {prop.sqft} Sqft</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}