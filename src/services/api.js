import axios from 'axios';
import { APP_CONFIG } from '@constants/config';

class APIService {
  constructor() {
    this.client = axios.create({
      baseURL: APP_CONFIG.api.baseUrl,
      timeout: APP_CONFIG.api.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    this.setupInterceptors();
  }
  
  setupInterceptors() {
    // Request interceptor
    this.client.interceptors.request.use(
      (config) => {
        // Add auth token if available
        const token = localStorage.getItem('authToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    
    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        return Promise.reject(this.handleError(error));
      }
    );
  }
  
  handleError(error) {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;
      
      switch (status) {
        case 400:
          return {
            type: 'validation',
            message: data.message || 'Invalid request',
            errors: data.errors || {},
          };
        case 401:
          localStorage.removeItem('authToken');
          return {
            type: 'auth',
            message: 'Please log in to continue',
          };
        case 403:
          return {
            type: 'forbidden',
            message: 'You do not have permission to perform this action',
          };
        case 404:
          return {
            type: 'notFound',
            message: 'Resource not found',
          };
        case 500:
          return {
            type: 'server',
            message: 'Server error. Please try again later.',
          };
        default:
          return {
            type: 'unknown',
            message: data.message || 'An error occurred',
          };
      }
    } else if (error.request) {
      // Request made but no response
      return {
        type: 'network',
        message: 'Network error. Please check your connection.',
      };
    } else {
      // Something else happened
      return {
        type: 'client',
        message: error.message || 'An error occurred',
      };
    }
  }
  
  // Generic HTTP methods
  async get(url, config = {}) {
    const response = await this.client.get(url, config);
    return response.data;
  }
  
  async post(url, data, config = {}) {
    const response = await this.client.post(url, data, config);
    return response.data;
  }
  
  async put(url, data, config = {}) {
    const response = await this.client.put(url, data, config);
    return response.data;
  }
  
  async patch(url, data, config = {}) {
    const response = await this.client.patch(url, data, config);
    return response.data;
  }
  
  async delete(url, config = {}) {
    const response = await this.client.delete(url, config);
    return response.data;
  }
}

export default new APIService();
