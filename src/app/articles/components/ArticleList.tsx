'use clinet';
import React from 'react';

import ContentPlaceholder from '@/components/ContentPlaceholder';

import ArticleCard from '@/app/articles/components/ArticleCard';

interface ArticleListProps {
  articles: IArticle[];
  isLoading: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, isLoading }) => {
  return (
    <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-fade='5'>
      {isLoading ? (
        <ContentPlaceholder msg='loading...' />
      ) : articles.length > 0 ? (
        articles.map((post, index) => (
          <ArticleCard
            id={post.id}
            key={index}
            postDate={post.published_date}
            description={post.abstract}
            onClick={() => {}}
            routeUrl={`/articles/${post.id}`}
            mediaAlt={post.title}
            thumbnailUrl={post.media?.[0]?.['media-metadata']?.[2]?.url || ''}
            title={post.title}
          />
        ))
      ) : (
        <ContentPlaceholder msg='Loadin...' />
      )}
    </ul>
  );
};

export default ArticleList;
