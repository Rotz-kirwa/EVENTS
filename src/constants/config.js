export const APP_CONFIG = {
  businessName: 'Your Business Name',
  tagline: 'Creating Unforgettable Experiences, From Vision to Reality',
  contact: {
    email: 'info@yourbusiness.co.ke',
    phone: '+254 XXX XXX XXX',
    whatsapp: '+254XXXXXXXXX',
    address: 'Nairobi, Kenya',
  },
  social: {
    facebook: 'https://facebook.com/yourbusiness',
    instagram: 'https://instagram.com/yourbusiness',
    linkedin: 'https://linkedin.com/company/yourbusiness',
    twitter: 'https://twitter.com/yourbusiness',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: 10000,
  },
  features: {
    enableBooking: true,
    enableClientPortal: true,
    enable3DVisualizer: true,
    enableEventPlanner: true,
    enableLiveChat: true,
  },
};

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  ABOUT: '/about',
  BLOG: '/blog',
  BLOG_POST: '/blog/:slug',
  CONTACT: '/contact',
  EVENT_PLANNER: '/event-planner',
  VENUE_VISUALIZER: '/venue-visualizer',
  CLIENT_PORTAL: '/portal',
  CLIENT_LOGIN: '/portal/login',
  CLIENT_REGISTER: '/portal/register',
  CLIENT_DASHBOARD: '/portal/dashboard',
};

export const LANGUAGES = {
  EN: 'en',
  SW: 'sw',
};

export const DEFAULT_LANGUAGE = LANGUAGES.EN;
