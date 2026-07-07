import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants';
import gallery1 from '../assets/images/gallery1.png';
import gallery2 from '../assets/images/gallery2.png';
import gallery3 from '../assets/images/gallery3.png';
import gallery4 from '../assets/images/gallery4.png';
import soapOrange from '../assets/images/soap_orange.png';
import soapNeem from '../assets/images/soap_neem.png';
import soapCharcoal from '../assets/images/soap_charcoal.png';
import soapHaldi from '../assets/images/soap_haldi.png';

const galleryImages = [
  { src: gallery1, alt: 'Handcrafted Soap Packaging', caption: 'Artisan Packaging', tall: true },
  { src: soapOrange, alt: 'Orange Moringa Soap', caption: 'Orange Moringa Soap', tall: false },
  { src: gallery2, alt: 'Luxury Soap Macro', caption: 'Luxury Ingredients', tall: false },
  { src: soapHaldi, alt: 'Haldi Cinnamon Soap', caption: 'Haldi Glow Soap', tall: true },
  { src: gallery3, alt: 'Soap Making Process', caption: 'Artisan Craft', tall: false },
  { src: soapNeem, alt: 'Neem Aloe Soap', caption: 'Neem Purifying Soap', tall: false },
  { src: soapCharcoal, alt: 'Charcoal Detox Soap', caption: 'Charcoal Detox', tall: true },
  { src: gallery4, alt: 'Soap with Natural Ingredients', caption: 'Natural Ingredients', tall: false },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-white dark:bg-charcoal-dark relative overflow-hidden">
      {/* Bg decoration */}
      <div className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: 'radial-gradient(#2D5016 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="section-tag">
            Our Gallery
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-4">
            Pure Beauty,{' '}
            <span className="text-gradient-forest">Every Frame</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md mx-auto text-charcoal/60 dark:text-cream-300/60 text-base">
            A glimpse into the world of Raas Ratna — where nature meets artistry.
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="masonry-grid"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              className="masonry-item group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ aspectRatio: img.tall ? '3/4' : '4/3' }}
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                  <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                    <p className="text-cream-100 text-sm font-semibold">{img.caption}</p>
                    <p className="text-honey text-xs font-medium tracking-wider uppercase mt-0.5">Raas Ratna</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-forest dark:text-honey hover:underline transition-colors"
          >
            Follow us on Instagram @raasratna →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
