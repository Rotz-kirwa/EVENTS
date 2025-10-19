import api from './api';

export const cmsService = {
  // Get page content
  async getPageContent(page) {
    try {
      return await api.get(`/cms/pages/${page}`);
    } catch (error) {
      console.error(`Error fetching page content for ${page}:`, error);
      throw error;
    }
  },
  
  // Get blog posts
  async getBlogPosts(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      if (filters.category && filters.category !== 'All') {
        params.append('category', filters.category);
      }
      if (filters.search) {
        params.append('search', filters.search);
      }
      if (filters.limit) {
        params.append('limit', filters.limit);
      }
      if (filters.offset) {
        params.append('offset', filters.offset);
      }
      
      const queryString = params.toString();
      const url = `/cms/blog${queryString ? `?${queryString}` : ''}`;
      
      return await api.get(url);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  },
  
  // Get single blog post by slug
  async getBlogPost(slug) {
    try {
      return await api.get(`/cms/blog/${slug}`);
    } catch (error) {
      console.error(`Error fetching blog post ${slug}:`, error);
      throw error;
    }
  },
  
  // Get testimonials
  async getTestimonials(limit = 10) {
    try {
      return await api.get(`/cms/testimonials?limit=${limit}`);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  },
  
  // Get services
  async getServices() {
    try {
      return await api.get('/cms/services');
    } catch (error) {
      console.error('Error fetching services:', error);
      throw error;
    }
  },
  
  // Subscribe to newsletter
  async subscribeNewsletter(email) {
    try {
      return await api.post('/cms/newsletter/subscribe', { email });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }
  },
};

export default cmsService;
