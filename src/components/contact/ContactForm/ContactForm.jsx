import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Input from '@components/common/Input';
import Button from '@components/common/Button';
import PropTypes from 'prop-types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Please select an event date'),
  guestCount: z.string().min(1, 'Please enter estimated guest count'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
      
      if (onSuccess) {
        onSuccess(data);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const eventTypes = [
    'Wedding',
    'Corporate Event',
    'Birthday Party',
    'Anniversary',
    'Conference',
    'Product Launch',
    'Other',
  ];
  
  const budgetRanges = [
    'Under KES 50,000',
    'KES 50,000 - 100,000',
    'KES 100,000 - 200,000',
    'KES 200,000 - 500,000',
    'Above KES 500,000',
  ];
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name *"
          {...register('name')}
          error={errors.name?.message}
          fullWidth
        />
        <Input
          label="Email Address *"
          type="email"
          {...register('email')}
          error={errors.email?.message}
          fullWidth
        />
      </div>
      
      {/* Phone and Event Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Phone Number *"
          type="tel"
          {...register('phone')}
          error={errors.phone?.message}
          fullWidth
        />
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Event Type *
          </label>
          <select
            {...register('eventType')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
          )}
        </div>
      </div>
      
      {/* Event Date and Guest Count */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Event Date *"
          type="date"
          {...register('eventDate')}
          error={errors.eventDate?.message}
          fullWidth
        />
        <Input
          label="Estimated Guest Count *"
          type="number"
          {...register('guestCount')}
          error={errors.guestCount?.message}
          fullWidth
        />
      </div>
      
      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Budget Range *
        </label>
        <select
          {...register('budget')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
        >
          <option value="">Select budget range</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
        )}
      </div>
      
      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional Details *
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"
          placeholder="Tell us more about your event vision, special requirements, or any questions you have..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>
      
      {/* Submit Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">
            Oops! Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}
      
      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      <p className="text-sm text-gray-500 text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
};

ContactForm.propTypes = {
  onSuccess: PropTypes.func,
};

export default ContactForm;
