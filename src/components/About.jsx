import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn } from '../animations/variants';
import { GiLeafSwirl, GiHoneycomb, GiHerbsBundle } from 'react-icons/gi';
import { FaHandHoldingHeart, FaLeaf, FaDove } from 'react-icons/fa';
import { MdOutlineEco, MdHealthAndSafety } from 'react-icons/md';

const features = [
  {
    icon: <FaHandHoldingHeart size={28} />,
    title: '100% Handmade',
    description: 'Each bar is carefully hand-poured and crafted with traditional Ayurvedic techniques passed down through generations.',
    color: 'from-orange-peel/20 to-orange-peel/5',
    iconColor: 'text-orange-peel',
    border: 'border-orange-peel/20',
  },
  {
    icon: <GiHerbsBundle size={28} />,
    title: 'Natural Ingredients',
    description: 'Sourced directly from nature — neem, turmeric, moringa, aloe vera, and pure honey — nothing artificial.',
    color: 'from-forest/15 to-forest/5',
    iconColor: 'text-forest',
    border: 'border-forest/20',
  },
  {
    icon: <MdHealthAndSafety size={28} />,
    title: 'Chemical Free',
    description: 'Zero SLS, parabens, artificial fragrances or synthetic dyes. Pure ingredients, pure results.',
    color: 'from-honey/20 to-honey/5',
    iconColor: 'text-honey-dark',
    border: 'border-honey/25',
  },
  {
    icon: <GiLeafSwirl size={28} />,
    title: 'Skin Friendly',
    description: 'pH-balanced and dermatologically safe formulas suitable for all skin types — even sensitive skin.',
    color: 'from-forest-100/60 to-forest-50/30',
    iconColor: 'text-forest-400',
    border: 'border-forest-100',
  },
  {
    icon: <MdOutlineEco size={28} />,
    title: 'Eco Friendly',
    description: 'Sustainably sourced, minimal packaging, and biodegradable — because we care for the planet as much as your skin.',
    color: 'from-forest/20 to-forest/5',
    iconColor: 'text-forest-400',
    border: 'border-forest-200',
  },
  {
    icon: <FaDove size={28} />,
    title: 'Cruelty Free',
    description: 'Never tested on animals. Our commitment to kindness extends to all living beings.',
    color: 'from-orange-peel/10 to-honey/10',
    iconColor: 'text-honey-dark',
    border: 'border-honey/20',
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-24 md:py-32 bg-cream-50 dark:bg-charcoal relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-honey/8 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span variants={fadeUp} className="section-tag">
            Our Promise
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-4">
            Why Choose{' '}
            <span className="text-gradient-gold">Raas Ratna?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl mx-auto text-charcoal/60 dark:text-cream-300/70 text-base leading-relaxed">
            We believe skincare should be honest, simple, and rooted in nature. Every bar we craft tells a story of ancient wisdom and modern care.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative bg-gradient-to-br ${feature.color} rounded-3xl p-7 border ${feature.border} group cursor-default transition-shadow duration-300 hover:shadow-premium dark:bg-opacity-20`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/60 dark:bg-white/10 ${feature.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-forest dark:text-cream-200 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/65 dark:text-cream-300/70">
                {feature.description}
              </p>

              {/* Decorative corner dot */}
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-honey/50 group-hover:bg-honey transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-forest/8 dark:bg-forest/20 border border-forest/15">
            <GiHoneycomb className="text-honey" size={18} />
            <span className="text-sm font-medium text-forest dark:text-cream-200">
              Trusted by <strong>10,000+</strong> happy customers across India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
