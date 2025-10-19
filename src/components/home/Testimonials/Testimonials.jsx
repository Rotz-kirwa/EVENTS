import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@components/common/Card';
import PropTypes from 'prop-types';

const Testimonials = ({ testimonials = [] }) => {
  const defaultTestimonials = [
    {
      id: 1,
      name: 'Sarah & John Kamau',
      role: 'Wedding Clients',
      image: 'https://ui-avatars.com/api/?name=Sarah+Kamau&background=D4AF37&color=001F3F&size=200',
      quote: 'Our wedding was absolutely magical! The team handled every detail with such care and professionalism. From the stunning décor to the seamless coordination, everything was perfect.',
      rating: 5,
      event: 'Garden Wedding - 200 Guests',
    },
    {
      id: 2,
      name: 'David Omondi',
      role: 'Corporate Client',
      image: 'https://ui-avatars.com/api/?name=David+Omondi&background=D4AF37&color=001F3F&size=200',
      quote: 'We\'ve worked with many event companies, but this team stands out. Our annual gala was flawless - the AV setup, catering, and logistics were all top-notch. Highly recommended!',
      rating: 5,
      event: 'Corporate Gala - 500 Attendees',
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      role: 'Birthday Celebration',
      image: 'https://ui-avatars.com/api/?name=Grace+Wanjiku&background=D4AF37&color=001F3F&size=200',
      quote: 'My 50th birthday party exceeded all expectations! The themed decoration was stunning, and the entertainment kept everyone engaged. Thank you for making my day so special!',
      rating: 5,
      event: 'Milestone Birthday - 150 Guests',
    },
    {
      id: 4,
      name: 'Michael Otieno',
      role: 'Wedding Client',
      image: 'https://ui-avatars.com/api/?name=Michael+Otieno&background=D4AF37&color=001F3F&size=200',
      quote: 'From our first consultation to the last dance, everything was handled with excellence. The beach setup was breathtaking, and our guests are still talking about it!',
      rating: 5,
      event: 'Beach Wedding - 120 Guests',
    },
  ];
  
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  
  const trustSignals = [
    { label: '500+', description: 'Events Organized' },
    { label: '10+', description: 'Years Experience' },
    { label: '98%', description: 'Client Satisfaction' },
    { label: '50+', description: 'Team Members' },
  ];
  
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the clients who trusted us with their special moments
          </p>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover padding="lg" className="h-full">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gold mt-1">{testimonial.event}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2">
                  {signal.label}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {signal.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-heading font-semibold text-navy mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-500 text-xs">Client Logo</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      event: PropTypes.string,
    })
  ),
};

export default Testimonials;
