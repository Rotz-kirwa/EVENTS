import api from './api';

export const bookingService = {
  // Check availability for a specific date and services
  async checkAvailability(date, services = []) {
    try {
      return await api.post('/bookings/check-availability', {
        date,
        services,
      });
    } catch (error) {
      console.error('Error checking availability:', error);
      throw error;
    }
  },
  
  // Create a new booking request
  async createBooking(bookingData) {
    try {
      return await api.post('/bookings', bookingData);
    } catch (error) {
      console.error('Error creating booking:', error);
      throw error;
    }
  },
  
  // Get booking by ID
  async getBookingById(id) {
    try {
      return await api.get(`/bookings/${id}`);
    } catch (error) {
      console.error(`Error fetching booking ${id}:`, error);
      throw error;
    }
  },
  
  // Update booking
  async updateBooking(id, updates) {
    try {
      return await api.patch(`/bookings/${id}`, updates);
    } catch (error) {
      console.error(`Error updating booking ${id}:`, error);
      throw error;
    }
  },
  
  // Cancel booking
  async cancelBooking(id, reason) {
    try {
      return await api.post(`/bookings/${id}/cancel`, { reason });
    } catch (error) {
      console.error(`Error cancelling booking ${id}:`, error);
      throw error;
    }
  },
  
  // Get user's bookings
  async getUserBookings() {
    try {
      return await api.get('/bookings/my-bookings');
    } catch (error) {
      console.error('Error fetching user bookings:', error);
      throw error;
    }
  },
};

export default bookingService;
