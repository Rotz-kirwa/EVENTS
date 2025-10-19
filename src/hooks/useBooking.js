import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import bookingService from '@services/bookingService';

export const useCheckAvailability = () => {
  return useMutation({
    mutationFn: ({ date, services }) => bookingService.checkAvailability(date, services),
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (bookingData) => bookingService.createBooking(bookingData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
};

export const useUserBookings = () => {
  return useQuery({
    queryKey: ['bookings', 'user'],
    queryFn: () => bookingService.getUserBookings(),
  });
};

export const useBooking = (id) => {
  return useQuery({
    queryKey: ['bookings', id],
    queryFn: () => bookingService.getBookingById(id),
    enabled: !!id,
  });
};
