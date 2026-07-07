import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { pageTransition } from '../animations/variants';

export default function Home() {
  return (
    <motion.main
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </motion.main>
  );
}
