import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiYoutube, FiMail, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GiLeafSwirl } from 'react-icons/gi';
import { fadeUp, staggerContainer } from '../animations/variants';
import logo from '../assets/images/logo.png';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  'Our Products': [
    { label: 'Orange Moringa Soap', href: '#products' },
    { label: 'Neem Tulsi Soap', href: '#products' },
    { label: 'Charcoal Detox Soap', href: '#products' },
    { label: 'Haldi Glow Soap', href: '#products' },
  ],
  'Customer Care': [
    { label: 'FAQ', href: '#faq' },
    { label: 'Track Order', href: '#contact' },
    { label: 'Return Policy', href: '#faq' },
    { label: 'Bulk Orders', href: '#contact' },
  ],
};

const socials = [
  { Icon: FiInstagram, href: 'https://www.instagram.com/raas_ratna?igsh=anZpN3loZXVvY2N6', label: 'Instagram', color: 'hover:text-pink-500' },
  { Icon: FiFacebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
  { Icon: FaWhatsapp, href: 'https://wa.me/919243691417', label: 'WhatsApp', color: 'hover:text-green-400' },
  { Icon: FiYoutube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500' },
];

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #143D08 0%, #1E5A0D 50%, #2D5016 100%)' }}>
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-honey/50 to-transparent" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(212,160,23,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="mb-5">
                <img
                  src={logo}
                  alt="RAAS RATNA"
                  className="w-28 h-28 object-contain"
                />
              </div>

              <p className="text-sm text-cream-300/60 leading-relaxed mb-6 max-w-sm">
                <span className="text-honey font-semibold">Luxury Born from Nature.</span> Handcrafted Ayurvedic soaps rooted in ancient herbal wisdom — pure, clean, and full of love.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-cream-300/70 ${color} transition-all duration-200 hover:bg-white/15`}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-sm font-bold text-cream-200 mb-4 tracking-wider uppercase">{title}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        className="text-sm text-cream-300/55 hover:text-honey transition-colors duration-200 cursor-pointer flex items-center gap-1.5 group"
                      >
                        <span className="w-0 h-px bg-honey group-hover:w-3 transition-all duration-300 rounded-full" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-display text-lg font-semibold text-cream-200">Get exclusive offers & skincare tips</p>
            <p className="text-xs text-cream-300/50 mt-0.5">Join 5,000+ subscribers. No spam, just nature.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              id="newsletter-email"
              placeholder="Your email address"
              className="w-full sm:flex-1 md:w-60 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-sm text-cream-200 placeholder-cream-300/40 focus:outline-none focus:border-honey/50"
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-honey text-charcoal-dark font-semibold text-sm hover:bg-honey-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-300/40">
          <p>© 2024 Raas Ratna. All rights reserved. Made with 🌿 in India.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-honey transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-honey transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-honey transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
