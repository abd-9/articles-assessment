interface IArticleMedia {
  type: string;
  caption: string;
  copyright: string;
  subtype?: string;
  'media-metadata'?: {
    url: string;
    format: string;
    height: number;
    width: number;
  }[];
}

interface IArticle {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: IArticleMedia[];
  eta_id: number;
}

interface IApiResponseBase {
  status: string;
  copyright: string;
  num_results: number;
}

interface IApiArticlesResponse extends IApiResponseBase {
  results: IArticle[];
}

interface IApiArticleDetailsResponse extends IApiResponseBase {
  result: IArticle;
}
