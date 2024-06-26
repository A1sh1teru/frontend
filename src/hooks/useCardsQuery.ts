import { useQuery } from '@tanstack/react-query';
import { fetchCards } from '@/services/fetch';

const useCardsQuery = () => {
    return useQuery({
        queryFn: () => fetchCards(),
        queryKey: ['cards'],
        staleTime: 1000 * 5,
    });
};

export { useCardsQuery };