import axios, { AxiosInstance } from 'axios';

import { siteConfig } from '@/constant/config';

import type { ApiConfig } from './api.types';

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: siteConfig.url!,
  timeout: 10000,
  apiKey: siteConfig.appKey!,
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
}

// Singleton instance of the API for convenience
export const api = new Api();
