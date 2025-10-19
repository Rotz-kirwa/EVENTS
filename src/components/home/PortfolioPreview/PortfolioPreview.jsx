import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@components/common/Button';
import { ROUTES } from '@constants/config';
import PropTypes from 'prop-types';

const PortfolioPreview = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  
  const defaultItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519167758481-83f29da8c6d6?w=800&q=80',
      title: 'Elegant Garden Wedding',
      category: 'Wedding',
      description: '200 guests, outdoor ceremony with luxury tent reception',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      title: 'Corporate Annual Gala',
      category: 'Corporate',
      description: '500 attendees, full AV setup with stage and entertainment',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
      title: 'Milestone Birthday Celebration',
      category: 'Birthday',
      description: '150 guests, themed decoration with live band',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      title: 'Luxury Beach Wedding',
      category: 'Wedding',
      description: '120 guests, beachfront setup with sunset ceremony',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80',
      title: 'Product Launch Event',
      category: 'Corporate',
      description: '300 attendees, modern setup with interactive displays',
    },
  ];
  
  const displayItems = items.length > 0 ? items : defaultItems;
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % displayItems.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our stunning collection of memorable events we've brought to life
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={displayItems[currentIndex].image}
                  alt={displayItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-4 py-1 bg-gold text-navy text-sm font-semibold rounded-full mb-4">
                      {displayItems[currentIndex].category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-3">
                      {displayItems[currentIndex].title}
                    </h3>
                    <p className="text-lg text-gray-300 max-w-2xl">
                      {displayItems[currentIndex].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all z-10"
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="mt-8 flex justify-center gap-4 overflow-x-auto pb-4">
            {displayItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-gold scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {displayItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to={ROUTES.PORTFOLIO}>
            <Button variant="primary" size="lg">
              View Full Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

PortfolioPreview.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default PortfolioPreview;
