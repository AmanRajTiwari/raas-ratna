import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { staggerContainer, fadeUp } from '../animations/variants';

const faqs = [
  {
    question: 'Are Raas Ratna soaps suitable for sensitive skin?',
    answer:
      'Yes! All our soaps are formulated with gentle, natural ingredients that are pH-balanced and dermatologist-approved for sensitive skin. We avoid all common skin irritants like SLS, parabens, and synthetic fragrances. However, if you have specific allergies, please review the ingredients list before use.',
  },
  {
    question: 'How long does one soap bar last?',
    answer:
      'With regular use (twice daily), a Raas Ratna soap bar typically lasts 3–4 weeks. We recommend using a soap dish with drainage to prevent the soap from sitting in water, which extends its lifespan significantly.',
  },
  {
    question: 'Can I use herbal soap on my face?',
    answer:
      'Absolutely! All our soaps are formulated to be safe for both face and body. Our Orange Moringa soap is especially popular for facial use due to its brightening properties, while the Neem Tulsi soap is excellent for acne-prone facial skin.',
  },
  {
    question: 'Do you offer Cash on Delivery (COD)?',
    answer:
      'Yes, we offer Cash on Delivery across India. We also accept UPI, credit/debit cards, net banking, and popular wallets. Free shipping is available on orders above ₹499.',
  },
  {
    question: 'How soon will my order be delivered?',
    answer:
      'Orders are typically processed within 24–48 hours. Delivery takes 3–7 business days depending on your location. We provide tracking details once your order is shipped.',
  },
  {
    question: 'Are your products cruelty-free and vegan?',
    answer:
      'All Raas Ratna products are 100% cruelty-free — we never test on animals. Most of our soaps are vegan; the only exception is that some contain honey, which is sourced ethically from natural beehives. Specific ingredients are listed on each product page.',
  },
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 7-day easy return policy if you receive a damaged or incorrect product. Due to the handmade and perishable nature of our soaps, we cannot accept returns for opened products. Please reach out to us via WhatsApp or email for assistance.',
  },
  {
    question: 'Can Raas Ratna soaps be used by children?',
    answer:
      'Our soaps are generally safe for children above 3 years. We recommend the Neem Aloe Vera soap for children due to its gentle, antibacterial properties. For babies or toddlers under 3, we suggest consulting a pediatrician before use.',
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="border border-forest/15 dark:border-white/10 rounded-2xl overflow-hidden hover:border-honey/40 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
        aria-expanded={isOpen}
        id={`faq-button-${index}`}
      >
        <span className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-honey/60 font-mono w-5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-medium text-charcoal dark:text-cream-200 group-hover:text-forest dark:group-hover:text-honey transition-colors text-sm md:text-base">
            {faq.question}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-300 ${
            isOpen
              ? 'bg-forest border-forest text-cream-100'
              : 'border-forest/30 text-forest dark:border-white/20 dark:text-cream-300'
          }`}
        >
          <FiPlus size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm leading-relaxed text-charcoal/65 dark:text-cream-300/65 border-t border-forest/10 dark:border-white/5 pt-4">
              <div className="pl-8">{faq.answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-cream-50 dark:bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-forest/5 rounded-full -translate-y-1/4 translate-x-1/4 blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} className="section-tag">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-4">
            Frequently Asked{' '}
            <span className="text-gradient-forest">Questions</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-charcoal/60 dark:text-cream-300/60 text-base">
            Everything you need to know about Raas Ratna soaps.
          </motion.p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-3xl bg-forest/8 dark:bg-forest/15 border border-forest/15"
        >
          <p className="font-display text-xl font-semibold text-forest dark:text-cream-200 mb-2">
            Still have questions?
          </p>
          <p className="text-sm text-charcoal/60 dark:text-cream-300/60 mb-5">
            We&apos;re here to help. Reach us on WhatsApp for instant answers.
          </p>
          <a
            href="https://wa.me/919243691417"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-2.5 text-sm inline-flex"
          >
            <span>💬 Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
