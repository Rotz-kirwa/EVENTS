import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '@components/common/Button';
import { ROUTES } from '@constants/config';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigation = [
    { name: t('nav.home'), path: ROUTES.HOME },
    { name: t('nav.services'), path: ROUTES.SERVICES },
    { name: t('nav.portfolio'), path: ROUTES.PORTFOLIO },
    { name: t('nav.about'), path: ROUTES.ABOUT },
    { name: t('nav.blog'), path: ROUTES.BLOG },
    { name: t('nav.contact'), path: ROUTES.CONTACT },
  ];
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sw' : 'en';
    i18n.changeLanguage(newLang);
  };
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
              <span className="text-2xl font-heading font-bold text-navy">E</span>
            </div>
            <span className={`text-xl font-heading font-bold ${isScrolled ? 'text-navy' : 'text-white'}`}>
              Events
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors relative ${
                  isScrolled ? 'text-gray-700 hover:text-gold' : 'text-white hover:text-gold-light'
                } ${isActive(item.path) ? 'text-gold' : ''}`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {i18n.language === 'en' ? 'SW' : 'EN'}
            </button>
            <Button variant="primary" size="sm">
              {t('cta.getQuote')}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="container-custom py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-md font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-gold text-navy'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-2 px-4 pt-2">
                <button
                  onClick={toggleLanguage}
                  className="px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100"
                >
                  {i18n.language === 'en' ? 'Swahili' : 'English'}
                </button>
                <Button variant="primary" size="sm" fullWidth>
                  {t('cta.getQuote')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
