import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { GeneralApiProblem, getGeneralApiProblem } from './apiProblem';
import type { ApiConfig, ApiFeedResponse } from './api.types';
// import type { EpisodeSnapshotIn } from '../../models/Episode';
import { siteConfig } from '@/constant/config';

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: siteConfig.url!!,
  timeout: 10000,
  apiKey: '',
};

export class Api {
  axiosInstance: AxiosInstance;
  config: ApiConfig;

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config;
    this.axiosInstance = axios.create({
      baseURL: this.config.url,
      params: {
        'api-key': this.config.apiKey,
      },
      timeout: this.config.timeout,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  // async getEpisodes(): Promise<
  //   { kind: 'ok'; episodes: EpisodeSnapshotIn[] } | GeneralApiProblem
  // > {
  //   try {
  //     const response: AxiosResponse<ApiFeedResponse> =
  //       await this.axiosInstance.get(
  //         `api.json?rss_url=https%3A%2F%2Ffeeds.simplecast.com%2FhEI_f9Dx`
  //       );

  //     // the typical ways to die when calling an api
  //     if (response.status !== 200) {
  //       const problem = getGeneralApiProblem(response);
  //       if (problem) return problem;
  //     }

  //     // transform the data into the format we are expecting
  //     const rawData = response.data;

  //     // This is where we transform the data into the shape we expect for our MST model.
  //     const episodes: EpisodeSnapshotIn[] =
  //       rawData?.items.map((raw) => ({
  //         ...raw,
  //       })) ?? [];

  //     return { kind: 'ok', episodes };
  //   } catch (e) {
  //     if (isLocal && e instanceof Error) {
  //       console.error(`Bad data: ${e.message}\n${e.response?.data}`, e.stack);
  //     }
  //     return { kind: 'bad-data' };
  //   }
  // }
}

// Singleton instance of the API for convenience
export const api = new Api();
