import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '@services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Check if user is logged in on mount
  useEffect(() => {
    checkAuth();
  }, []);
  
  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (token) {
        const response = await api.get('/auth/me');
        setUser(response.user);
      }
    } catch (err) {
      console.error('Auth check failed:', err);
      localStorage.removeItem('authToken');
    } finally {
      setLoading(false);
    }
  };
  
  const login = async (email, password) => {
    try {
      setError(null);
      const response = await api.post('/auth/login', { email, password });
      
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      
      return { success: true };
    } catch (err) {
      setError(err.message || 'Login failed');
      return { success: false, error: err };
    }
  };
  
  const register = async (userData) => {
    try {
      setError(null);
      const response = await api.post('/auth/register', userData);
      
      localStorage.setItem('authToken', response.token);
      setUser(response.user);
      
      return { success: true };
    } catch (err) {
      setError(err.message || 'Registration failed');
      return { success: false, error: err };
    }
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    setError(null);
  };
  
  const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
  };
  
  const value = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUser,
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
