import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const PageWrapper = ({ children, showHeader = true, showFooter = true }) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      
      {showFooter && <Footer />}
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gold text-navy rounded-full shadow-lg hover:bg-gold-dark transition-colors z-40 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
};

export default PageWrapper;
