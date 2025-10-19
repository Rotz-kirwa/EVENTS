const ContactPage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', color: '#001F3F', textAlign: 'center', marginBottom: '3rem' }}>Contact Us</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Contact Form */}
          <div>
            <h2 style={{ fontSize: '2rem', color: '#001F3F', marginBottom: '2rem' }}>Get In Touch</h2>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input 
                type="text" 
                placeholder="Your Name" 
                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem', fontSize: '1rem' }}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem', fontSize: '1rem' }}
              />
              <input 
                type="tel" 
                placeholder="Your Phone" 
                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem', fontSize: '1rem' }}
              />
              <select style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem', fontSize: '1rem' }}>
                <option>Select Number of Guests</option>
                <option>50 and below</option>
                <option>51 - 100</option>
                <option>101 - 200</option>
                <option>201 - 300</option>
                <option>301 - 500</option>
                <option>501 - 1000</option>
                <option>1000+</option>
              </select>
              <select style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem', fontSize: '1rem' }}>
                <option>Select Event Type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Funerals</option>
                <option>Graduations</option>
                <option>Anniversary</option>
                <option>Baby Shower</option>
                <option>Bridal Shower</option>
                <option>Engagement Party</option>
                <option>Retirement Party</option>
                <option>Product Launch</option>
                <option>Conference</option>
                <option>Gala Dinner</option>
                <option>Fundraising Event</option>
                <option>Other</option>
              </select>
              <textarea 
                placeholder="Tell us about your event..." 
                rows="5"
                style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '0.5rem', fontSize: '1rem', resize: 'vertical' }}
              ></textarea>
              <button 
                type="submit"
                style={{ 
                  backgroundColor: '#D4AF37', 
                  color: '#001F3F', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '0.5rem',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 style={{ fontSize: '2rem', color: '#001F3F', marginBottom: '2rem' }}>Contact Information</h2>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>Office Address</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                123 Event Plaza<br />
                Nairobi, Kenya<br />
                P.O. Box 12345-00100
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>Phone & Email</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Phone: +254 XXX XXX XXX<br />
                WhatsApp: +254 XXX XXX XXX<br />
                Email: info@events.co.ke
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>Business Hours</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: By Appointment Only
              </p>
            </div>

            <div>
              <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>Follow Us</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: '#001F3F', textDecoration: 'none' }}>Facebook</a>
                <a href="#" style={{ color: '#001F3F', textDecoration: 'none' }}>Instagram</a>
                <a href="#" style={{ color: '#001F3F', textDecoration: 'none' }}>LinkedIn</a>
                <a href="#" style={{ color: '#001F3F', textDecoration: 'none' }}>Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;