import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '@components/common/Modal';
import Button from '@components/common/Button';
import PropTypes from 'prop-types';

const PortfolioModal = ({ item, isOpen, onClose, onNext, onPrevious }) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onNext, onPrevious]);
  
  if (!item) return null;
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      showCloseButton={true}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={onPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Details Section */}
        <div className="flex flex-col">
          {/* Category Badge */}
          <span className="inline-block w-fit px-4 py-1 bg-gold text-navy text-sm font-semibold rounded-full mb-4">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
          
          {/* Title */}
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">
            {item.title}
          </h2>
          
          {/* Event Details */}
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
            <div>
              <div className="text-sm text-gray-500 mb-1">Date</div>
              <div className="font-semibold text-navy">
                {new Date(item.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Location</div>
              <div className="font-semibold text-navy">{item.location}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Guests</div>
              <div className="font-semibold text-navy">{item.guestCount} people</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-1">Category</div>
              <div className="font-semibold text-navy capitalize">{item.category}</div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-navy mb-2">About This Event</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
          
          {/* Services Provided */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-navy mb-3">Services Provided</h3>
            <div className="flex flex-wrap gap-2">
              {item.services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          {/* Testimonial */}
          {item.testimonial && (
            <div className="bg-cream p-4 rounded-lg mb-6">
              <div className="flex gap-1 mb-2">
                {[...Array(item.testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-2">"{item.testimonial.quote}"</p>
              <p className="text-sm font-semibold text-navy">- {item.testimonial.clientName}</p>
            </div>
          )}
          
          {/* CTA */}
          <div className="mt-auto">
            <Button variant="primary" size="lg" fullWidth>
              Plan a Similar Event
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

PortfolioModal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    guestCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(PropTypes.string).isRequired,
    testimonial: PropTypes.shape({
      clientName: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default PortfolioModal;
