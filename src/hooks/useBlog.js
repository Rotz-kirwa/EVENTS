import { useQuery } from '@tanstack/react-query';
import cmsService from '@services/cmsService';

export const useBlogPosts = (filters = {}) => {
  return useQuery({
    queryKey: ['blog', 'posts', filters],
    queryFn: () => cmsService.getBlogPosts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBlogPost = (slug) => {
  return useQuery({
    queryKey: ['blog', 'post', slug],
    queryFn: () => cmsService.getBlogPost(slug),
    enabled: !!slug,
  });
};
