import { motion } from 'framer-motion';
import Card from '@components/common/Card';
import Button from '@components/common/Button';
import { pricingPackages } from '@/data/servicesData';

const PricingTable = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Package Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a package that fits your needs, or let us create a custom solution for you
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gold text-navy px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card
                padding="lg"
                className={`h-full flex flex-col ${
                  pkg.recommended ? 'ring-2 ring-gold scale-105' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-heading font-bold text-navy mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-gold mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {pkg.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={pkg.recommended ? 'primary' : 'outline'}
                  size="lg"
                  fullWidth
                >
                  {pkg.id === 'platinum' ? 'Request Custom Quote' : 'Get Started'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            All packages can be customized to fit your specific needs and budget
          </p>
          <Button variant="ghost" size="lg">
            Compare All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;
