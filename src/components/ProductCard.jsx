import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiCheck } from 'react-icons/fi';
import { GiLeafSwirl } from 'react-icons/gi';
import { cardHover, fadeUp } from '../animations/variants';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const { name, subtitle, image, benefits, badgeText, theme } = product;

  const handleAddToCart = () => {
    setAdded(true);
    toast.success(`${name} added to cart!`, {
      duration: 2500,
      style: {
        background: '#2D5016',
        color: '#FAF7F0',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 500,
      },
      iconTheme: { primary: '#D4A017', secondary: '#FAF7F0' },
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className={`group relative bg-white dark:bg-charcoal-light rounded-4xl overflow-hidden border ${theme.border} transition-all duration-500 flex flex-col`}
      style={{ boxShadow: `0 4px 20px ${theme.shadow}` }}
    >
      {/* Natural Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-charcoal/80 backdrop-blur-sm border border-honey/30 shadow-sm">
        <GiLeafSwirl className="text-forest" size={12} />
        <span className="text-[10px] font-bold tracking-wider uppercase text-forest">{badgeText || '100% Natural'}</span>
      </div>

      {/* Image Container */}
      <div className={`relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br ${theme.imageBg}`}>
        {/* Decorative blobs */}
        <div className={`absolute -top-6 -right-6 w-32 h-32 rounded-full ${theme.blob} opacity-40 blur-2xl`} />
        <div className={`absolute -bottom-6 -left-6 w-24 h-24 rounded-full ${theme.blob} opacity-25 blur-2xl`} />

        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Name */}
        <div className="mb-4">
          <h3 className="font-display text-xl font-bold text-charcoal dark:text-cream-200 leading-tight mb-1">
            {name}
          </h3>
          <p className="text-xs font-medium text-charcoal/50 dark:text-cream-300/60 tracking-wider uppercase">
            {subtitle}
          </p>
        </div>

        {/* Divider */}
        <div className={`w-10 h-0.5 rounded-full ${theme.divider} mb-4`} />

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-6 flex-1">
          {benefits.map((b, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full ${theme.tag}`}
            >
              <FiCheck size={9} />
              {b}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3 mt-auto">
          <div>
            <p className="text-[10px] text-charcoal/40 dark:text-cream-300/40 font-medium uppercase tracking-wider">Price</p>
            <p className={`text-xl font-bold font-display ${theme.price}`}>₹249</p>
          </div>
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${theme.btn}`}
          >
            {added ? (
              <>
                <FiCheck size={16} />
                Added!
              </>
            ) : (
              <>
                <FiShoppingBag size={16} />
                Add to Cart
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
