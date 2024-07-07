import { useQuery } from '@tanstack/react-query';
import { articleApi } from '@/services/api';

export default function useArticles() {
  const {
    data,
    isFetching: isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['articles'],
    queryFn: () => articleApi.getArticles(),
    select: (data) => data, // for data formating
    initialData: { result: [], kind: 'ok' },
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isError,
    list: data.kind == 'ok' ? data?.result : [],
  };
}
