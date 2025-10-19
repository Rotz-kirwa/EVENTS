import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '@components/common/Button';
import PropTypes from 'prop-types';

const HeroSection = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const { t } = useTranslation();
  
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };
  
  // Default slides if none provided
  const defaultSlides = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1519167758481-83f29da8c6d?w=1920&q=80',
      alt: 'Elegant wedding setup',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80',
      alt: 'Corporate event',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80',
      alt: 'Birthday celebration',
    },
  ];
  
  const displaySlides = slides.length > 0 ? slides : defaultSlides;
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {displaySlides[currentSlide].type === 'image' ? (
            <img
              src={displaySlides[currentSlide].src}
              alt={displaySlides[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={displaySlides[currentSlide].src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/50 to-transparent" />
        </motion.div>
      </AnimatePresence>
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              {t('hero.headline')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-cream mb-8 leading-relaxed"
            >
              {t('hero.subheading')}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg">
                {t('cta.getQuote')}
              </Button>
              <Button variant="outline" size="lg">
                {t('cta.exploreServices')}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      {displaySlides.length > 1 && (
        <>
          {/* Arrow Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dot Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
            {displaySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-gold w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-white"
        >
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

HeroSection.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
};

export default HeroSection;
