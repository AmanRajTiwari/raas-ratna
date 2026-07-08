import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import ProductCard from './ProductCard';

// ─── Real Product Images ──────────────────────────────────────────────────────
// Place your product photos in src/assets/images/ with these exact filenames:
import pNeem      from '../assets/images/p_neem.png';
import pCharcoal  from '../assets/images/p_charcoal.png';
import pHaldi     from '../assets/images/p_haldi.png';
import pUbtan     from '../assets/images/p_ubtan.png';
import pOrange    from '../assets/images/p_orange.png';
import pMedicated from '../assets/images/p_medicated.png';

// ─── Product Data ─────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'Neem Aloevera With Tulsi',
    tagline: 'Natural Antibacterial Care',
    description:
      'A refreshing herbal soap enriched with Neem, Aloe Vera and Tulsi that gently cleanses the skin while helping reduce acne, nourish deeply and maintain healthy skin.',
    image: pNeem,
    badge: 'Best Seller',
    benefits: ['Moisturizes Skin', 'Helps Reduce Acne', 'Tones & Nourishes', 'Antibacterial'],
    theme: {
      primary:      '#4E8B45',
      primaryDark:  '#2D5A27',
      gradientFrom: '#EAF7E5',
      borderColor:  'rgba(78,139,69,0.18)',
      shadow:       'rgba(78,139,69,0.28)',
      shadowLight:  'rgba(78,139,69,0.10)',
      chipBg:       'rgba(78,139,69,0.10)',
      chipText:     '#2D5A27',
      toastBg:      '#4E8B45',
    },
  },
  {
    id: 2,
    name: 'Charcoal Aloevera With Honey',
    tagline: 'Deep Detox Formula',
    description:
      'Activated charcoal combined with Aloe Vera and Honey deeply cleanses pores, removes excess oil and leaves skin fresh and purified.',
    image: pCharcoal,
    badge: null,
    benefits: ['Removes Dirt', 'Deep Detox', 'Purifies Skin', 'Controls Oil'],
    theme: {
      primary:      '#2F2F2F',
      primaryDark:  '#111111',
      gradientFrom: '#F0F0F0',
      borderColor:  'rgba(47,47,47,0.15)',
      shadow:       'rgba(47,47,47,0.22)',
      shadowLight:  'rgba(47,47,47,0.08)',
      chipBg:       'rgba(47,47,47,0.08)',
      chipText:     '#2F2F2F',
      toastBg:      '#2F2F2F',
    },
  },
  {
    id: 3,
    name: 'Haldi Chandan With Honey',
    tagline: 'Glow Naturally',
    description:
      'A traditional Ayurvedic soap made with Haldi, Chandan and Honey to brighten skin and restore its natural glow.',
    image: pHaldi,
    badge: null,
    benefits: ['Removes Dead Skin', 'Refreshes Skin', 'Clears Pores', 'Natural Glow'],
    theme: {
      primary:      '#D9A300',
      primaryDark:  '#A67C00',
      gradientFrom: '#FFF8DC',
      borderColor:  'rgba(217,163,0,0.22)',
      shadow:       'rgba(217,163,0,0.30)',
      shadowLight:  'rgba(217,163,0,0.10)',
      chipBg:       'rgba(217,163,0,0.12)',
      chipText:     '#A67C00',
      toastBg:      '#D9A300',
    },
  },
  {
    id: 4,
    name: 'Ubtan With Herbs',
    tagline: 'Natural De-Tan Care',
    description:
      'Traditional herbal ubtan soap crafted to remove tanning while improving skin texture and youthful appearance.',
    image: pUbtan,
    badge: null,
    benefits: ['De-Tan Care', 'Anti-Aging', 'Improves Texture', 'Youthful Glow'],
    theme: {
      primary:      '#B8865B',
      primaryDark:  '#8A6040',
      gradientFrom: '#F9F4EC',
      borderColor:  'rgba(184,134,91,0.20)',
      shadow:       'rgba(184,134,91,0.28)',
      shadowLight:  'rgba(184,134,91,0.10)',
      chipBg:       'rgba(184,134,91,0.12)',
      chipText:     '#7A4F2F',
      toastBg:      '#B8865B',
    },
  },
  {
    id: 5,
    name: 'Orange Peel, Moringa With Honey',
    tagline: 'Vitamin-C Skin Boost',
    description:
      'Rich in Vitamin C with Orange Peel, Moringa and Honey to improve skin texture and brighten dull skin naturally.',
    image: pOrange,
    badge: null,
    benefits: ['Rich in Vitamin C', 'Helps Reduce Acne', 'Improves Texture', 'Nourishes Skin'],
    theme: {
      primary:      '#F57C00',
      primaryDark:  '#E64A00',
      gradientFrom: '#FFF2E6',
      borderColor:  'rgba(245,124,0,0.20)',
      shadow:       'rgba(245,124,0,0.30)',
      shadowLight:  'rgba(245,124,0,0.10)',
      chipBg:       'rgba(245,124,0,0.10)',
      chipText:     '#C65000',
      toastBg:      '#F57C00',
    },
  },
  {
    id: 6,
    name: 'Medicated Soap',
    tagline: 'Daily Dermo Care',
    description:
      'Made with medicinal plant extracts to purify, refresh and maintain healthy glowing skin every day.',
    image: pMedicated,
    badge: null,
    benefits: ['Herbal Extracts', 'Purifies Skin', 'Refreshes Skin', 'Radiant Glow'],
    theme: {
      primary:      '#4AA3DF',
      primaryDark:  '#2478A8',
      gradientFrom: '#EAF8FF',
      borderColor:  'rgba(74,163,223,0.20)',
      shadow:       'rgba(74,163,223,0.28)',
      shadowLight:  'rgba(74,163,223,0.10)',
      chipBg:       'rgba(74,163,223,0.10)',
      chipText:     '#1A6090',
      toastBg:      '#4AA3DF',
    },
  },
];

// ─── Section Component ────────────────────────────────────────────────────────
export default function Products() {
  return (
    <section
      id="products"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FAFAF8 0%, #FFFFFF 60%, #F9F4EC 100%)' }}
    >
      {/* Subtle background dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2D5016 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Top/bottom blurs */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-honey/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="section-tag">
            Our Collection
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-4">
            Handcrafted{' '}
            <span className="text-gradient-forest">Herbal Soaps</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-xl mx-auto text-charcoal/60 dark:text-cream-300/70 text-base leading-relaxed"
          >
            Each bar is lovingly crafted with premium Ayurvedic herbs, cold-pressed oils and natural
            botanicals — a ritual for your skin.
          </motion.p>
        </motion.div>

        {/* ── Product Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              className="flex"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom strip ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-charcoal/45 mb-5">
            Free shipping on orders above ₹499 &nbsp;·&nbsp; COD Available &nbsp;·&nbsp; 100% Natural
          </p>
          <motion.a
            href={`https://wa.me/919876543210?text=${encodeURIComponent('Hello! I want to see the full RAAS RATNA product catalogue. 🌿')}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border-2 border-forest text-forest hover:bg-forest hover:text-white transition-all duration-300"
          >
            View Full Catalogue on WhatsApp →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
