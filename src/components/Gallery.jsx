import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants';
import { FiX, FiZoomIn } from 'react-icons/fi';
import gallery1 from '../assets/images/gallery1.png';
import gallery2 from '../assets/images/gallery2.png';
import gallery3 from '../assets/images/gallery3.png';
import gallery4 from '../assets/images/gallery4.png';
import pOrange   from '../assets/images/p_orange.png';
import pNeem     from '../assets/images/p_neem.png';
import pCharcoal from '../assets/images/p_charcoal.png';
import pHaldi    from '../assets/images/p_haldi.png';
import pUbtan    from '../assets/images/p_ubtan.png';
import pMedicated from '../assets/images/p_medicated.png';

// Lifestyle / ambient gallery photos (full bleed, cover)
const ambientImages = [
  { src: gallery1, alt: 'RAAS RATNA Collection', caption: 'Artisan Collection' },
  { src: gallery2, alt: 'Pure Natural Ingredients', caption: 'Pure Ingredients' },
  { src: gallery3, alt: 'Crafted with Love', caption: 'Crafted with Love' },
  { src: gallery4, alt: 'Luxury Born from Nature', caption: 'Luxury Born from Nature' },
];

// Product showcase cards (contained, themed background)
const productShowcase = [
  { src: pNeem,      name: 'Neem Aloevera\nWith Tulsi',          bg: 'linear-gradient(135deg,#EAF7E5,#C8EBC0)', accent: '#4E8B45' },
  { src: pCharcoal,  name: 'Charcoal Aloevera\nWith Honey',      bg: 'linear-gradient(135deg,#EBEBEB,#D0D0D0)', accent: '#2F2F2F' },
  { src: pHaldi,     name: 'Haldi Chandan\nWith Honey',          bg: 'linear-gradient(135deg,#FFF8DC,#FFE87C)', accent: '#D9A300' },
  { src: pUbtan,     name: 'Ubtan\nWith Herbs',                  bg: 'linear-gradient(135deg,#F9F4EC,#E8D5BC)', accent: '#B8865B' },
  { src: pOrange,    name: 'Orange Peel, Moringa\nWith Honey',   bg: 'linear-gradient(135deg,#FFF2E6,#FFD4A8)', accent: '#F57C00' },
  { src: pMedicated, name: 'Medicated\nSoap',                    bg: 'linear-gradient(135deg,#EAF8FF,#B8E4F9)', accent: '#4AA3DF' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white dark:bg-charcoal-dark relative overflow-hidden">
      {/* Bg dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(#2D5016 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="section-tag">Our Gallery</motion.span>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-4">
            Pure Beauty,{' '}
            <span className="text-gradient-forest">Every Frame</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md mx-auto text-charcoal/60 dark:text-cream-300/60 text-base">
            A glimpse into the world of Raas Ratna — where nature meets artistry.
          </motion.p>
        </motion.div>

        {/* ── PART 1: Product Showcase Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6"
        >
          {productShowcase.map((p, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={() => setLightbox({ src: p.src, alt: p.name, caption: p.name })}
              className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
              style={{
                background: p.bg,
                boxShadow: `0 4px 20px ${p.accent}22`,
              }}
            >
              {/* Image container — fixed square, object-contain so full box is visible */}
              <div className="relative w-full aspect-square flex items-center justify-center p-3">
                <motion.img
                  src={p.src}
                  alt={p.name}
                  className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-sm shadow">
                    <FiZoomIn size={16} style={{ color: p.accent }} />
                  </div>
                </div>
              </div>

              {/* Caption bar */}
              <div
                className="px-3 py-2.5 text-center"
                style={{ borderTop: `1.5px solid ${p.accent}22` }}
              >
                <p
                  className="text-[10px] font-bold leading-tight tracking-wide uppercase whitespace-pre-line"
                  style={{ color: p.accent }}
                >
                  {p.name}
                </p>
                <p className="text-[9px] text-charcoal/40 font-medium mt-0.5 tracking-widest uppercase">
                  RAAS RATNA
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── PART 2: Ambient Photo Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {ambientImages.map((img, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(img)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{ aspectRatio: i % 2 === 0 ? '3/4' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  <p className="text-cream-100 text-sm font-semibold">{img.caption}</p>
                  <p className="text-honey text-xs font-medium tracking-wider uppercase mt-0.5">Raas Ratna</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Instagram CTA ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="https://www.instagram.com/raas_ratna?igsh=anZpN3loZXVvY2N6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest dark:text-honey hover:underline transition-colors"
          >
            Follow us on Instagram @raas_ratna →
          </a>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden bg-white shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
              >
                <FiX size={18} />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full object-contain max-h-[70vh]"
                style={{ background: '#f9f9f9' }}
              />
              <div className="px-5 py-4 bg-white">
                <p className="text-sm font-bold text-charcoal text-center whitespace-pre-line">{lightbox.caption}</p>
                <p className="text-xs text-honey text-center tracking-widest uppercase mt-1">RAAS RATNA</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
