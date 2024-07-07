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

  const getSelectArticleById = (id: string): IArticle | null => {
    if (data.kind == 'ok')
      return data.result.find((_) => _.id.toString() == id) || null;
    return null;
  };

  return {
    isLoading,
    isError,
    getSelectArticleById,
    list: data.kind == 'ok' ? data?.result : [],
  };
}
