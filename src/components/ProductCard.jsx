import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiShoppingBag } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { GiLeafSwirl } from 'react-icons/gi';
import { cardHover } from '../animations/variants';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { name, tagline, description, image, benefits, badge, theme } = product;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hello! I'm interested in ordering *${name}* from RAAS RATNA. Please share details. 🌿`
    );
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  const handleOrder = () => {
    toast.success(`Redirecting to order ${name}...`, {
      duration: 2500,
      style: {
        background: theme.toastBg,
        color: '#FAF7F0',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: 500,
      },
      iconTheme: { primary: '#D4A017', secondary: '#FAF7F0' },
    });
  };

  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl overflow-hidden border transition-all duration-500 h-full"
      style={{
        background: `linear-gradient(160deg, ${theme.gradientFrom} 0%, #ffffff 100%)`,
        borderColor: theme.borderColor,
        boxShadow: hovered
          ? `0 24px 60px ${theme.shadow}`
          : `0 4px 24px ${theme.shadowLight}`,
      }}
    >
      {/* Badge */}
      {badge && (
        <div
          className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-white shadow-md"
          style={{ background: theme.primary }}
        >
          <GiLeafSwirl size={11} />
          {badge}
        </div>
      )}

      {/* Image Area */}
      <div
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientFrom}88)`,
          height: '240px',
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-3xl opacity-30"
          style={{ background: theme.primary }}
        />
        <div
          className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full blur-3xl opacity-20"
          style={{ background: theme.primary }}
        />

        {/* Product Image */}
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain relative z-10 py-4 px-6"
          animate={{ scale: hovered ? 1.08 : 1, y: hovered ? -6 : 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          loading="lazy"
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12"
          style={{
            background: `linear-gradient(to top, ${theme.gradientFrom}, transparent)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Name + Tagline */}
        <div className="mb-4">
          <h3 className="font-display text-xl font-bold text-charcoal dark:text-charcoal leading-tight mb-1">
            {name}
          </h3>
          <p
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: theme.primary }}
          >
            {tagline}
          </p>
        </div>

        {/* Divider */}
        <div
          className="w-10 h-0.5 rounded-full mb-4"
          style={{ background: theme.primary }}
        />

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 mb-4">
          {benefits.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1 rounded-full"
              style={{
                background: theme.chipBg,
                color: theme.chipText,
              }}
            >
              <FiCheck size={9} strokeWidth={3} />
              {b}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-charcoal/60 mb-6 flex-1">
          {description}
        </p>

        {/* Price Row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wider text-charcoal/40">
              Price
            </p>
            <p
              className="text-2xl font-bold font-display"
              style={{ color: theme.primary }}
            >
              ₹249
            </p>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: theme.chipBg }}
          >
            <GiLeafSwirl size={18} style={{ color: theme.primary }} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2.5">
          {/* Order Now */}
          <motion.button
            onClick={handleOrder}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-300 shadow-md"
            style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
              boxShadow: hovered ? `0 8px 24px ${theme.shadow}` : 'none',
            }}
          >
            <FiShoppingBag size={15} />
            Order Now
          </motion.button>

          {/* WhatsApp */}
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold border-2 transition-all duration-300"
            style={{
              borderColor: '#25D366',
              color: '#25D366',
              background: hovered ? 'rgba(37,211,102,0.06)' : 'transparent',
            }}
          >
            <FaWhatsapp size={16} />
            Order on WhatsApp
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
