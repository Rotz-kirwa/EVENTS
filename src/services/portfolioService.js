import api from './api';

export const portfolioService = {
  // Get all portfolio items
  async getAll(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      if (filters.category && filters.category !== 'all') {
        params.append('category', filters.category);
      }
      if (filters.limit) {
        params.append('limit', filters.limit);
      }
      if (filters.offset) {
        params.append('offset', filters.offset);
      }
      
      const queryString = params.toString();
      const url = `/portfolio${queryString ? `?${queryString}` : ''}`;
      
      return await api.get(url);
    } catch (error) {
      console.error('Error fetching portfolio items:', error);
      throw error;
    }
  },
  
  // Get single portfolio item by ID
  async getById(id) {
    try {
      return await api.get(`/portfolio/${id}`);
    } catch (error) {
      console.error(`Error fetching portfolio item ${id}:`, error);
      throw error;
    }
  },
  
  // Get portfolio items by category
  async getByCategory(category) {
    try {
      return await api.get(`/portfolio?category=${category}`);
    } catch (error) {
      console.error(`Error fetching portfolio by category ${category}:`, error);
      throw error;
    }
  },
  
  // Get featured portfolio items
  async getFeatured(limit = 5) {
    try {
      return await api.get(`/portfolio/featured?limit=${limit}`);
    } catch (error) {
      console.error('Error fetching featured portfolio items:', error);
      throw error;
    }
  },
};

export default portfolioService;
