import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare, FiMapPin } from 'react-icons/fi';
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '../animations/variants';
import toast from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.', {
        style: { background: '#E64A19', color: '#FAF7F0', borderRadius: '12px' },
      });
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast.success('Message sent! We\'ll get back to you shortly. 🌿', {
      duration: 4000,
      style: { background: '#2D5016', color: '#FAF7F0', borderRadius: '12px' },
      iconTheme: { primary: '#D4A017', secondary: '#FAF7F0' },
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
    formRef.current?.reset();
  };

  const inputClass =
    'w-full bg-white dark:bg-charcoal border border-forest/15 dark:border-white/10 rounded-xl px-4 py-3.5 text-sm text-charcoal dark:text-cream-200 placeholder-charcoal/35 dark:placeholder-cream-300/30 focus:outline-none focus:border-forest dark:focus:border-honey focus:ring-2 focus:ring-forest/15 dark:focus:ring-honey/15 transition-all duration-200';

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-charcoal-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-honey/8 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl" />

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
            Get In Touch
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-heading text-center mb-4">
            We&apos;d Love to{' '}
            <span className="text-gradient-gold">Hear From You</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-md mx-auto text-charcoal/60 dark:text-cream-300/60 text-base">
            Have a question, bulk order inquiry, or just want to say hello? Drop us a message!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-cream-50 dark:bg-charcoal rounded-3xl p-8 border border-forest/10 dark:border-white/8 shadow-premium"
          >
            <h3 className="font-display text-2xl font-bold text-forest dark:text-cream-200 mb-6">
              Send us a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 dark:text-honey/40" size={16} />
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                  required
                />
              </div>

              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 dark:text-honey/40" size={16} />
                <input
                  type="tel"
                  name="phone"
                  id="contact-phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-forest/40 dark:text-honey/40" size={16} />
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClass} pl-11`}
                  required
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-forest/40 dark:text-honey/40" size={16} />
                <textarea
                  name="message"
                  id="contact-message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} pl-11 resize-none`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02, y: -2 } : {}}
                whileTap={!loading ? { scale: 0.97 } : {}}
                className="btn-primary w-full py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-cream-100/30 border-t-cream-100 rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Info + Map */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            {[
              {
                icon: <FiPhone size={20} />,
                title: 'Call / WhatsApp',
                value: '+91 92436 91417',
                href: 'tel:+919243691417',
                bg: 'bg-forest/10',
                color: 'text-forest dark:text-honey',
              },
              {
                icon: <FiMail size={20} />,
                title: 'Email Us',
                value: 'sukolenterprises@gmail.com',
                href: 'mailto:sukolenterprises@gmail.com',
                bg: 'bg-honey/15',
                color: 'text-honey-dark dark:text-honey',
              },
              {
                icon: <FiMapPin size={20} />,
                title: 'Our Location',
                value: 'C-2, Sant Jalaram Bapu Nagar, Mandla Road, Tilhari, Jabalpur, MP, 482020',
                href: 'https://maps.google.com/?q=C-2%2C+Sant+Jalaram+Bapu+Nagar%2C+Mandla+Road%2C+Tilhari%2C+Jabalpur%2C+Madhya+Pradesh+482020',
                bg: 'bg-orange-peel/10',
                color: 'text-orange-peel',
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-cream-50 dark:bg-charcoal border border-forest/10 dark:border-white/8 group transition-all duration-300 hover:shadow-glass"
              >
                <div className={`w-12 h-12 rounded-xl ${info.bg} ${info.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40 dark:text-cream-300/40 mb-0.5">
                    {info.title}
                  </p>
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`text-sm font-semibold ${info.color} hover:underline`}>
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-charcoal dark:text-cream-200">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Google Map Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-forest/15 dark:border-white/10 shadow-glass h-64">
              <iframe
                title="Raas Ratna Location"
                src="https://maps.google.com/maps?q=C-2%2C%20Sant%20Jalaram%20Bapu%20Nagar%2C%20Mandla%20Road%2C%20Tilhari%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482020&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
