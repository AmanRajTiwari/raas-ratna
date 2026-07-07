import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, fadeLeft, fadeRight, scaleIn } from '../animations/variants';
import { MdOutlineEco, MdHealthAndSafety, MdWaterDrop } from 'react-icons/md';
import { GiOilDrum, GiHerbsBundle, GiLeafSwirl } from 'react-icons/gi';
import { FaUserCheck } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiShield size={32} />,
    title: 'No Harmful Chemicals',
    description: 'Free from SLS, parabens, artificial colors, synthetic fragrances and any petrochemicals. Every ingredient is clean and conscious.',
    color: 'text-orange-peel',
    bg: 'bg-orange-peel/10',
    glow: 'group-hover:shadow-orange',
    num: '01',
  },
  {
    icon: <GiOilDrum size={32} />,
    title: 'Rich Natural Oils',
    description: 'Cold-pressed coconut, castor, and olive oils deeply moisturize and nourish, leaving skin supple, smooth and radiant.',
    color: 'text-honey-dark',
    bg: 'bg-honey/15',
    glow: 'group-hover:shadow-honey',
    num: '02',
  },
  {
    icon: <MdHealthAndSafety size={32} />,
    title: 'Safe for Daily Use',
    description: 'Gentle enough for everyday use on face and body. No irritation, no dryness — just clean, healthy, glowing skin.',
    color: 'text-forest',
    bg: 'bg-forest/10',
    glow: 'group-hover:shadow-forest',
    num: '03',
  },
  {
    icon: <FaUserCheck size={32} />,
    title: 'Suitable for Every Skin Type',
    description: 'Whether oily, dry, combination or sensitive — our Ayurvedic formulations work harmoniously with every skin type.',
    color: 'text-forest-400',
    bg: 'bg-forest-100/50',
    glow: 'group-hover:shadow-forest',
    num: '04',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1E5A0D 0%, #2D5016 40%, #143D08 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-honey/40 to-transparent" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-honey/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-60 h-60 bg-orange-peel/10 rounded-full blur-3xl" />

      {/* Leaf pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #D4A017 1px, transparent 1px), radial-gradient(circle at 75% 75%, #D4A017 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span variants={fadeUp} className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-honey mb-3">
            The Herbal Advantage
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-cream-100 leading-tight mb-4">
            Why Choose{' '}
            <span className="text-gradient-gold">Herbal Soap?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl mx-auto text-cream-300/70 text-base leading-relaxed">
            Nature has been perfecting skincare for thousands of years. Raas Ratna brings that wisdom to every shower.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? fadeLeft : fadeRight}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative glass-dark rounded-3xl p-8 border border-white/10 transition-all duration-400 ${benefit.glow} cursor-default`}
            >
              {/* Number */}
              <div className="absolute top-6 right-6 font-display text-5xl font-bold text-white/5">
                {benefit.num}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${benefit.bg} ${benefit.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* Text */}
              <h3 className="font-display text-xl font-bold text-cream-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream-300/65">
                {benefit.description}
              </p>

              {/* Bottom accent */}
              <div className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full ${benefit.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '100%', label: 'Natural Ingredients' },
            { value: '0', label: 'Harmful Chemicals' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '4+', label: 'Years of Trust' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="text-center py-6 px-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-honey mb-1">{stat.value}</p>
              <p className="text-xs text-cream-300/60 font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
