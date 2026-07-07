import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiShoppingBag } from 'react-icons/fi';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { navbarVariants, drawerVariants, overlayVariants, fadeDown, staggerContainer } from '../animations/variants';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartCount] = useState(0);
  const { isScrolled, scrollProgress } = useScrollProgress();

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-0.5 z-[100] origin-left"
        style={{
          scaleX: scrollProgress / 100,
          background: 'linear-gradient(90deg, #2D5016, #D4A017, #FF7043)',
        }}
      />

      {/* Navbar */}
      <motion.nav
        variants={navbarVariants}
        animate={isScrolled ? 'solid' : 'transparent'}
        transition={{ duration: 0.4 }}
        className="fixed top-0.5 left-0 right-0 z-50 border-b"
        style={{ willChange: 'background-color, backdrop-filter' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex flex-col leading-none group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-display text-xl md:text-2xl font-bold text-forest tracking-wide dark:text-cream-200">
                RAAS RATNA
              </span>
              <span className="text-[9px] font-semibold tracking-[0.3em] uppercase text-honey dark:text-honey-300">
                Pure Nature. Pure Skin.
              </span>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group cursor-pointer
                    ${isScrolled
                      ? 'text-charcoal dark:text-cream-200 hover:text-forest dark:hover:text-honey'
                      : 'text-white/90 hover:text-white'}`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-honey group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={() => setDarkMode(!darkMode)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className={`p-2 rounded-full transition-colors duration-200 
                  ${isScrolled
                    ? 'text-charcoal dark:text-cream-200 hover:bg-forest/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>

              {/* Cart */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className={`relative p-2 rounded-full transition-colors duration-200
                  ${isScrolled
                    ? 'text-charcoal dark:text-cream-200 hover:bg-forest/10'
                    : 'text-white/90 hover:text-white hover:bg-white/10'}`}
                aria-label="Shopping cart"
              >
                <FiShoppingBag size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-honey text-charcoal-dark text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.button>

              {/* Shop Now - Desktop */}
              <motion.a
                href="#products"
                onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:inline-flex btn-primary py-2.5 px-5 text-xs"
              >
                <span>Shop Now</span>
              </motion.a>

              {/* Hamburger */}
              <motion.button
                onClick={() => setDrawerOpen(true)}
                whileTap={{ scale: 0.9 }}
                className={`lg:hidden p-2 rounded-full transition-colors
                  ${isScrolled
                    ? 'text-charcoal dark:text-cream-200'
                    : 'text-white'}`}
                aria-label="Open menu"
              >
                <FiMenu size={22} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-charcoal-dark/60 z-[60] lg:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-72 z-[70] glass-cream dark:glass-dark flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-honey/20">
                <div>
                  <p className="font-display text-lg font-bold text-forest dark:text-cream-200">RAAS RATNA</p>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-honey">Pure Nature. Pure Skin.</p>
                </div>
                <motion.button
                  onClick={() => setDrawerOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-forest/10 text-charcoal dark:text-cream-200"
                >
                  <FiX size={20} />
                </motion.button>
              </div>

              {/* Drawer Links */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-1 p-4 flex-1"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    variants={fadeDown}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-charcoal dark:text-cream-200 hover:bg-forest/10 hover:text-forest dark:hover:text-honey font-medium transition-colors cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-honey" />
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-honey/20">
                <a
                  href="#products"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#products'); }}
                  className="btn-primary w-full text-center py-3"
                >
                  <span>Shop Now</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
