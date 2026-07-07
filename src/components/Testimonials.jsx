import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { GiLeafSwirl } from 'react-icons/gi';
import { staggerContainer, fadeUp, scaleIn } from '../animations/variants';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    avatar: 'PS',
    rating: 5,
    product: 'Orange Peel + Moringa Soap',
    review:
      'My skin has literally transformed! After using the Orange Moringa soap for just 3 weeks, my tan has significantly reduced and my face has a natural glow. No more expensive salon visits for de-tan treatments!',
    color: 'from-orange-peel/20 to-amber-50',
    border: 'border-orange-peel/25',
    avatarBg: 'bg-orange-peel',
  },
  {
    id: 2,
    name: 'Ananya Verma',
    location: 'Bangalore, Karnataka',
    avatar: 'AV',
    rating: 5,
    product: 'Neem + Aloe Vera + Tulsi Soap',
    review:
      'I have been struggling with acne for years. Tried everything. Raas Ratna\'s Neem Tulsi soap is the first product that actually worked! My breakouts reduced within 2 weeks. Absolutely love it!',
    color: 'from-forest/10 to-green-50',
    border: 'border-forest/20',
    avatarBg: 'bg-forest',
  },
  {
    id: 3,
    name: 'Deepa Nair',
    location: 'Kochi, Kerala',
    avatar: 'DN',
    rating: 5,
    product: 'Haldi + Cinnamon + Honey Soap',
    review:
      'The Haldi soap smells divine and leaves my skin incredibly soft. I\'ve noticed a visible improvement in skin tone and texture. The packaging is also beautiful — makes for a wonderful gift!',
    color: 'from-honey/20 to-yellow-50',
    border: 'border-honey/30',
    avatarBg: 'bg-honey',
  },
  {
    id: 4,
    name: 'Kavita Reddy',
    location: 'Hyderabad, Telangana',
    avatar: 'KR',
    rating: 5,
    product: 'Charcoal + Aloe Vera + Honey Soap',
    review:
      'I ordered the charcoal soap and I am obsessed! My pores look smaller and my skin feels deeply cleansed but not stripped. Finally found a soap that does what it promises. Highly recommend!',
    color: 'from-charcoal/10 to-slate-50',
    border: 'border-charcoal/15',
    avatarBg: 'bg-charcoal',
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <FiStar key={i} className="text-honey fill-current" size={14} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 bg-cream-100 dark:bg-charcoal relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-honey/8 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest/8 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

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
            Real Stories
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-4">
            What Our{' '}
            <span className="text-gradient-gold">Customers Say</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2">
            <StarRating />
            <span className="text-sm font-semibold text-charcoal/60 dark:text-cream-300/60">
              4.9/5 from 2,000+ reviews
            </span>
          </motion.div>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={scaleIn}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative bg-gradient-to-br ${t.color} dark:bg-opacity-10 rounded-4xl p-7 border ${t.border} group transition-shadow duration-300 hover:shadow-premium cursor-default`}
            >
              {/* Quote mark */}
              <div className="absolute top-5 right-6 font-display text-8xl leading-none text-honey/20 font-bold select-none">
                &ldquo;
              </div>

              {/* Stars + Product */}
              <div className="flex items-center justify-between mb-5">
                <StarRating count={t.rating} />
                <span className="text-[10px] font-semibold tracking-wider uppercase text-charcoal/40 dark:text-cream-300/40 bg-white/60 dark:bg-white/10 px-3 py-1 rounded-full">
                  {t.product}
                </span>
              </div>

              {/* Review text */}
              <p className="text-sm md:text-base leading-relaxed text-charcoal/75 dark:text-cream-300/80 mb-6 italic relative z-10">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-charcoal dark:text-cream-200 text-sm">{t.name}</p>
                  <p className="text-xs text-charcoal/50 dark:text-cream-300/50">{t.location}</p>
                </div>
                <div className="ml-auto">
                  <GiLeafSwirl className="text-forest/30 dark:text-honey/30" size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust signal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-charcoal/50 dark:text-cream-300/50">
            Join thousands of happy customers who switched to natural skincare 🌿
          </p>
        </motion.div>
      </div>
    </section>
  );
}
