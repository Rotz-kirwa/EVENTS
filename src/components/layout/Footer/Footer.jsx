import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { APP_CONFIG, ROUTES } from '@constants/config';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: t('nav.home'), path: ROUTES.HOME },
    { name: t('nav.services'), path: ROUTES.SERVICES },
    { name: t('nav.portfolio'), path: ROUTES.PORTFOLIO },
    { name: t('nav.about'), path: ROUTES.ABOUT },
  ];
  
  const services = [
    { name: t('services.eventPlanning'), path: ROUTES.SERVICES },
    { name: t('services.catering'), path: ROUTES.SERVICES },
    { name: t('services.decoration'), path: ROUTES.SERVICES },
    { name: t('services.photography'), path: ROUTES.SERVICES },
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: APP_CONFIG.social.facebook },
    { name: 'Instagram', icon: 'instagram', url: APP_CONFIG.social.instagram },
    { name: 'LinkedIn', icon: 'linkedin', url: APP_CONFIG.social.linkedin },
  ];
  
  return (
    <footer className="bg-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-xl font-heading font-bold text-navy">E</span>
              </div>
              <span className="text-xl font-heading font-bold">{APP_CONFIG.businessName}</span>
            </div>
            <p className="text-gray-300 mb-4">
              {APP_CONFIG.tagline}
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>{APP_CONFIG.contact.address}</p>
              <p>{APP_CONFIG.contact.phone}</p>
              <p>{APP_CONFIG.contact.email}</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">{t('footer.stayConnected')}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t('footer.newsletterText')}
            </p>
            <form className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-gold text-navy px-4 py-2 rounded-r-md font-semibold hover:bg-gold-dark transition-colors"
                >
                  {t('footer.subscribe')}
                </button>
              </div>
            </form>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    )}
                    {social.icon === 'instagram' && (
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    )}
                    {social.icon === 'linkedin' && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} {APP_CONFIG.businessName}. {t('footer.allRightsReserved')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gold transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-gold transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
