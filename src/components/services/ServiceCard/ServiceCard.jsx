import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div className="perspective-1000 h-full">
      <motion.div
        className="relative h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Card padding="lg" className="h-full flex flex-col">
            <h4 className="text-xl font-heading font-semibold text-navy mb-3">
              {service.name}
            </h4>
            <p className="text-gray-600 mb-4 flex-1">
              {service.description}
            </p>
            {service.pricing && (
              <div className="text-gold font-semibold mb-4">
                {service.pricing}
              </div>
            )}
            <button
              onClick={() => setIsFlipped(true)}
              className="text-gold hover:text-gold-dark font-medium flex items-center gap-2 transition-colors"
            >
              View Details
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Card>
        </div>
        
        {/* Back Side */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <Card padding="lg" className="h-full flex flex-col bg-navy text-white">
            <h4 className="text-xl font-heading font-semibold mb-4">
              What's Included
            </h4>
            <ul className="space-y-2 mb-4 flex-1">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => {/* Add to quote logic */}}
              >
                Add to Quote
              </Button>
              <button
                onClick={() => setIsFlipped(false)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    pricing: PropTypes.string,
  }).isRequired,
};

export default ServiceCard;
