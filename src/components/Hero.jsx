import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiStar } from 'react-icons/fi';
import { GiLeafSwirl, GiHoneyJar } from 'react-icons/gi';
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  floatAnimation,
  floatAnimationAlt,
  leafAnimation,
} from '../animations/variants';
import heroBg from '../assets/images/hero_bg.png';
import soapOrange from '../assets/images/soap_orange.png';
import soapNeem from '../assets/images/soap_neem.png';

// Floating leaf SVG component
const Leaf = ({ size = 24, color = '#2D5016', opacity = 0.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ opacity }}>
    <path
      d="M12 2C6 2 2 8 2 14c0 4 2.5 6.5 6 7.5C9 18 11 15 12 12c1 3 3 6 4 9.5 3.5-1 6-3.5 6-7.5 0-6-4-12-10-12z"
      fill={color}
    />
  </svg>
);

const LEAVES = [
  { delay: 0, x: '10%', size: 18, color: '#2D5016', opacity: 0.5 },
  { delay: 1.5, x: '25%', size: 24, color: '#5A9A42', opacity: 0.4 },
  { delay: 3, x: '45%', size: 14, color: '#D4A017', opacity: 0.5 },
  { delay: 0.8, x: '65%', size: 20, color: '#2D5016', opacity: 0.35 },
  { delay: 2.2, x: '80%', size: 16, color: '#8FB878', opacity: 0.45 },
  { delay: 4, x: '90%', size: 22, color: '#FF7043', opacity: 0.3 },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  const yBg = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, #FAF7F0 0%, #EDE0C8 25%, #C5D8B0 55%, #2D5016 100%)',
      }}
    >
      {/* Parallax BG Image */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </motion.div>

      {/* Radial overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cream-100/40 via-transparent to-forest-dark/50" />

      {/* Organic circles decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-honey/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-forest/15 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-peel/5 blur-3xl" />

      {/* Floating Leaves */}
      {LEAVES.map((leaf, i) => (
        <motion.div
          key={i}
          className="absolute top-0 pointer-events-none"
          style={{ left: leaf.x }}
          {...leafAnimation(leaf.delay)}
          initial={{ y: -30, opacity: 0, rotate: 0 }}
        >
          <Leaf size={leaf.size} color={leaf.color} opacity={leaf.opacity} />
        </motion.div>
      ))}

      {/* Floating Soap Images */}
      <motion.div
        {...floatAnimation}
        className="absolute top-24 right-4 md:right-16 lg:right-24 w-32 md:w-44 lg:w-52 z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-orange-peel/20 blur-2xl scale-110" />
          <img
            src={soapOrange}
            alt="Orange Peel Moringa Soap"
            className="relative w-full rounded-3xl shadow-orange"
            loading="eager"
          />
        </div>
      </motion.div>

      <motion.div
        {...floatAnimationAlt}
        className="absolute bottom-32 right-6 md:right-24 lg:right-32 w-28 md:w-36 lg:w-44 z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-forest/20 blur-2xl scale-110" />
          <img
            src={soapNeem}
            alt="Neem Aloe Tulsi Soap"
            className="relative w-full rounded-3xl shadow-forest"
            loading="eager"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Tag */}
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-0.5 bg-honey rounded-full" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-forest dark:text-honey">
              100% Natural Ayurvedic
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-forest dark:text-cream-100 mb-6"
          >
            Pure
            <span className="italic text-gradient-gold"> Nature.</span>
            <br />
            Pure{' '}
            <span className="relative inline-block">
              Skin.
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 bg-honey/60 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-charcoal/70 dark:text-cream-300 leading-relaxed mb-10 max-w-lg font-light"
          >
            Handcrafted Herbal Soaps made with{' '}
            <span className="font-medium text-forest dark:text-honey">Natural Ingredients</span>{' '}
            for Healthy & Glowing Skin. Rooted in Ayurvedic wisdom, crafted with love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <motion.button
              onClick={scrollToProducts}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary px-8 py-4 text-sm"
            >
              <span>Shop Now</span>
            </motion.button>
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-secondary px-8 py-4 text-sm"
            >
              Explore Collection
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
            {[
              { icon: <FiStar size={14} />, text: '5★ Rated Natural Soaps' },
              { icon: <GiLeafSwirl size={14} />, text: '100% Organic' },
              { icon: <GiHoneyJar size={14} />, text: 'No Chemicals' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-charcoal/60 dark:text-cream-300">
                <span className="text-honey">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-forest/60 dark:text-cream-300/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-9 rounded-full border-2 border-forest/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-forest/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
