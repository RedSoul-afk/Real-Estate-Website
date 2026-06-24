import { motion } from 'framer-motion';
import { useState } from 'react';

export default function InquiryForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate a network request
    setTimeout(() => {
      setStatus('success');
      e.target.reset();
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="inquiry" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-brand-dark border border-brand-gold/20 p-8 md:p-16 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50"></div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-white">Secure Your Legacy</h2>
            <p className="mt-4 text-gray-400 font-light">Commence a confidential dialogue with our luxury real estate advisors.</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Full Name</label>
                <input required type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all font-light" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Email Address</label>
                <input required type="email" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all font-light" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Property Interest</label>
                <input required type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all font-light" placeholder="e.g. Skyline Penthouse" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Estimated Budget</label>
                <input required type="text" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all font-light" placeholder="$10M+" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-brand-gold mb-2">Your Inquiry</label>
              <textarea required rows="4" className="w-full px-4 py-4 bg-white/5 border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all font-light" placeholder="Details of your request..."></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full bg-brand-gold hover:bg-white disabled:bg-brand-gold/50 disabled:cursor-not-allowed text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-95 cursor-pointer uppercase tracking-widest text-sm py-5 transition-all duration-300 mt-4"
            >
              {status === 'submitting' ? 'Sending Inquiry...' : status === 'success' ? 'Inquiry Sent Successfully' : 'Submit Inquiry'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}