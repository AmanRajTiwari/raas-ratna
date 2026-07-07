import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { GiLeafSwirl } from 'react-icons/gi';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { useScrollProgress } from './hooks/useScrollProgress';
import { useMouseGlow } from './hooks/useMouseGlow';
import './index.css';

// Loading Screen Component
function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(145deg, #143D08, #2D5016, #1E5A0D)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Leaf particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 11}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [-10, 10, -5, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
        >
          <GiLeafSwirl size={12 + i * 3} color="rgba(212,160,23,0.4)" />
        </motion.div>
      ))}

      {/* Logo */}
      <motion.div
        className="text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div
          className="flex items-center justify-center gap-3 mb-3"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <GiLeafSwirl size={40} className="text-honey" />
        </motion.div>
        <motion.p
          className="font-display text-4xl font-bold text-cream-100 tracking-wider mb-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          RAAS RATNA
        </motion.p>
        <motion.p
          className="text-xs tracking-[0.4em] uppercase text-honey font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Pure Nature. Pure Skin.
        </motion.p>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-honey to-orange-peel rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            style={{ originX: 0 }}
            transition={{ duration: 1.8, delay: 0.4, ease: 'easeInOut', onComplete: onComplete }}
            onAnimationComplete={onComplete}
          />
        </div>
        <p className="text-center text-[10px] text-cream-300/40 mt-2 tracking-widest">Loading...</p>
      </motion.div>
    </motion.div>
  );
}

// Back to Top Button
function BackToTop() {
  const { isScrolled } = useScrollProgress();
  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-28 right-5 md:right-8 z-40 w-11 h-11 rounded-full bg-forest text-cream-100 flex items-center justify-center shadow-forest hover:bg-forest-dark transition-colors duration-200"
          aria-label="Back to top"
          id="back-to-top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hello! I'm interested in Raas Ratna herbal soaps."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: 'spring' }}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-5 md:right-8 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
      aria-label="Chat on WhatsApp"
      id="whatsapp-button"
    >
      <FaWhatsapp size={28} />
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
    </motion.a>
  );
}

// Cursor Glow
function CursorGlow() {
  const glowRef = useMouseGlow();
  return (
    <div
      ref={glowRef}
      className="cursor-glow hidden md:block"
      style={{ opacity: 0 }}
    />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loading" onComplete={() => setTimeout(() => setLoading(false), 200)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Cursor Glow (desktop only) */}
          <CursorGlow />

          {/* Navbar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main Content */}
          <Home />

          {/* Floating Extras */}
          <WhatsAppButton />
          <BackToTop />

          {/* Toast Notifications */}
          <Toaster position="bottom-right" />
        </>
      )}
    </div>
  );
}
