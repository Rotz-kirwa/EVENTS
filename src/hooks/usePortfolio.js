import { useQuery } from '@tanstack/react-query';
import portfolioService from '@services/portfolioService';

export const usePortfolio = (filters = {}) => {
  return useQuery({
    queryKey: ['portfolio', filters],
    queryFn: () => portfolioService.getAll(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const usePortfolioItem = (id) => {
  return useQuery({
    queryKey: ['portfolio', id],
    queryFn: () => portfolioService.getById(id),
    enabled: !!id,
  });
};

export const useFeaturedPortfolio = (limit = 5) => {
  return useQuery({
    queryKey: ['portfolio', 'featured', limit],
    queryFn: () => portfolioService.getFeatured(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
