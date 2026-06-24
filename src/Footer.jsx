export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="text-2xl font-serif text-white tracking-widest uppercase mb-6 block">Trya<span className="text-brand-gold">.</span></span>
            <p className="text-gray-400 max-w-sm font-light leading-relaxed">Built by TryaCreation. Delivering bespoke digital experiences for the world's most distinguished luxury brands.</p>
          </div>
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="#" className="hover:text-white focus:outline-none focus:text-brand-gold transition-colors">Premium Websites</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:text-brand-gold transition-colors">Real Estate Platforms</a></li>
              <li><a href="#" className="hover:text-white focus:outline-none focus:text-brand-gold transition-colors">Custom Web Development</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="mailto:concierge@tryaestates.com" className="hover:text-white focus:outline-none focus:text-brand-gold transition-colors">concierge@tryaestates.com</a></li>
              <li><a href="tel:+18008792589" className="hover:text-white focus:outline-none focus:text-brand-gold transition-colors">+1 (800) TRYA-LUX</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-xs tracking-widest uppercase text-gray-500">&copy; {new Date().getFullYear()} Trya Estates. All rights reserved.</div>
      </div>
    </footer>
  );
}