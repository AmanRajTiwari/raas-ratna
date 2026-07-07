import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '../animations/variants';
import ProductCard from './ProductCard';
import soapOrange from '../assets/images/soap_orange.png';
import soapNeem from '../assets/images/soap_neem.png';
import soapCharcoal from '../assets/images/soap_charcoal.png';
import soapHaldi from '../assets/images/soap_haldi.png';

const products = [
  {
    id: 1,
    name: 'Orange Peel + Moringa + Honey',
    subtitle: 'Brightening & Vitamin C Soap',
    image: soapOrange,
    badgeText: '100% Natural',
    benefits: ['Brightens Skin', 'Tan Removal', 'Vitamin C', 'Deep Nourishment'],
    theme: {
      imageBg: 'from-orange-100 to-amber-50',
      border: 'border-orange-peel/20',
      shadow: 'rgba(255,112,67,0.12)',
      blob: 'bg-orange-peel',
      divider: 'bg-orange-peel',
      tag: 'bg-orange-peel/10 text-orange-dark',
      price: 'text-orange-dark',
      btn: 'bg-orange-peel text-white hover:bg-orange-dark shadow-orange',
    },
  },
  {
    id: 2,
    name: 'Neem + Aloe Vera + Tulsi',
    subtitle: 'Acne Control & Antibacterial Soap',
    image: soapNeem,
    badgeText: 'Antibacterial',
    benefits: ['Acne Control', 'Antibacterial', 'Cooling Effect', 'Oil Control'],
    theme: {
      imageBg: 'from-green-100 to-emerald-50',
      border: 'border-forest/20',
      shadow: 'rgba(45,80,22,0.12)',
      blob: 'bg-forest',
      divider: 'bg-forest',
      tag: 'bg-forest/10 text-forest-dark',
      price: 'text-forest-dark',
      btn: 'bg-forest text-cream-100 hover:bg-forest-dark shadow-forest',
    },
  },
  {
    id: 3,
    name: 'Charcoal + Aloe Vera + Honey',
    subtitle: 'Deep Cleanse & Detox Soap',
    image: soapCharcoal,
    badgeText: 'Detox',
    benefits: ['Deep Cleansing', 'Detox', 'Removes Dirt', 'Pore Care'],
    theme: {
      imageBg: 'from-gray-200 to-slate-100',
      border: 'border-charcoal/20',
      shadow: 'rgba(44,44,44,0.15)',
      blob: 'bg-charcoal',
      divider: 'bg-charcoal',
      tag: 'bg-charcoal/10 text-charcoal-dark dark:bg-white/10 dark:text-cream-300',
      price: 'text-charcoal dark:text-cream-200',
      btn: 'bg-charcoal text-cream-100 hover:bg-charcoal-dark shadow-glass',
    },
  },
  {
    id: 4,
    name: 'Haldi + Cinnamon + Honey',
    subtitle: 'Glow & Anti-Aging Soap',
    image: soapHaldi,
    badgeText: 'Anti-Aging',
    benefits: ['Natural Glow', 'Anti Aging', 'Smooth Skin', 'Healthy Complexion'],
    theme: {
      imageBg: 'from-yellow-100 to-amber-50',
      border: 'border-honey/25',
      shadow: 'rgba(212,160,23,0.15)',
      blob: 'bg-honey',
      divider: 'bg-honey',
      tag: 'bg-honey/15 text-honey-dark',
      price: 'text-honey-dark',
      btn: 'bg-honey text-charcoal-dark hover:bg-honey-dark shadow-honey font-bold',
    },
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white dark:bg-charcoal-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cream-50 to-transparent dark:from-charcoal dark:to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent dark:from-charcoal dark:to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-honey/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
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
          <motion.p variants={fadeUp} className="max-w-lg mx-auto text-charcoal/60 dark:text-cream-300/70 text-base leading-relaxed">
            Each soap is lovingly crafted with premium Ayurvedic herbs, cold-pressed oils and natural botanicals — a ritual for your skin.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-charcoal/50 dark:text-cream-300/50 mb-4">
            Free shipping on orders above ₹499 · COD Available
          </p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary px-10 py-3.5"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
