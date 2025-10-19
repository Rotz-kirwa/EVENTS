const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#001F3F', color: 'white', padding: '3rem 2rem 1rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {/* Company Info */}
          <div>
            <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem' }}>Premium Events</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              Creating unforgettable experiences from vision to reality. Your trusted partner for all event planning needs in Kenya.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: '#D4AF37', textDecoration: 'none' }}>Facebook</a>
              <a href="#" style={{ color: '#D4AF37', textDecoration: 'none' }}>Instagram</a>
              <a href="#" style={{ color: '#D4AF37', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: '#D4AF37', textDecoration: 'none' }}>Twitter</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
              <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
              <a href="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a>
              <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
              <a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
              <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>Our Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'white' }}>Wedding Planning</span>
              <span style={{ color: 'white' }}>Corporate Events</span>
              <span style={{ color: 'white' }}>Birthday Parties</span>
              <span style={{ color: 'white' }}>Catering Services</span>
              <span style={{ color: 'white' }}>Event Decoration</span>
              <span style={{ color: 'white' }}>Photography</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ color: '#D4AF37', fontSize: '1.3rem', marginBottom: '1rem' }}>Contact Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'white' }}>📍 Nairobi, Kenya</span>
              <span style={{ color: 'white' }}>📞 +254 712 345 678</span>
              <span style={{ color: 'white' }}>✉️ info@events.co.ke</span>
              <span style={{ color: 'white' }}>🕒 Mon-Fri: 9AM-6PM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid #333', 
          paddingTop: '1rem', 
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p>&copy; 2024 Premium Events. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;