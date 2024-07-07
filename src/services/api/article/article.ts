'use client';
import { AxiosError, AxiosResponse } from 'axios';
import { GeneralApiProblem, getGeneralApiProblem } from '../apiProblem';
import type { ApiConfig } from '../api.types';
import { DEFAULT_API_CONFIG, Api } from '../api';
import { ARTICLE_URLS } from '@/services/api/article/urls';
import { isLocal } from '@/constant/env';

export class ArticleApi extends Api {
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    super(config);
  }

  async getArticles(): Promise<
    | {
        kind: 'ok';
        result: IArticle[];
        num_results?: number;
      }
    | GeneralApiProblem
  > {
    try {
      const response = await this.axiosInstance.get<IApiArticlesResponse>(
        ARTICLE_URLS.articleList,
        { params: {} }
      );

      const articles: IArticle[] = response.data.results ?? [];
      return {
        kind: 'ok',
        result: articles,
        num_results: response.data.num_results,
      };
    } catch (e) {
      const error = e as AxiosError;
      const problem = getGeneralApiProblem(error);

      if (problem) return problem;

      if (isLocal && e instanceof Error) {
        console.error(`Bad data: ${e.cause}\n${e.message}`, e.stack);
      }
      return { kind: 'bad-data' };
    }
  }

  async getArticle(
    id: number
  ): Promise<{ kind: 'ok'; article?: IArticle } | GeneralApiProblem> {
    try {
      const response: AxiosResponse<IApiArticleDetailsResponse> =
        await this.axiosInstance.get(ARTICLE_URLS.article, { params: { id } });

      const article: IArticle = response.data.result;
      return { kind: 'ok', article };
    } catch (e) {
      const error = e as AxiosError;
      const problem = getGeneralApiProblem(error);
      if (problem) return problem;

      if (isLocal && e instanceof Error) {
        console.error(`Bad data: ${e.message}\n${e?.cause}`, e.stack);
      }
      return { kind: 'bad-data' };
    }
  }
}

export const articleApi = new ArticleApi();
