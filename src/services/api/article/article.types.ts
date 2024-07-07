interface ArticleMedia {
  url: string;
  type: string;
  caption: string;
  copyright: string;
}

interface Article {
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
  media: ArticleMedia[];
  eta_id: number;
}

interface ApiResponseBase {
  status: string;
  copyright: string;
  num_results: number;
}

interface ApiArticlesResponse extends ApiResponseBase {
  results: Article[];
}

interface ApiArticleDetailsResponse extends ApiResponseBase {
  result: Article;
}
