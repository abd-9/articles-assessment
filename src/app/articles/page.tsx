'use client';

import React, { useState } from 'react';
import useArticles from '@/app/articles/hooks/article';
import StyledInput from '@/components/form/StyledInput';
import ContentPlaceholder from '@/components/ContentPlaceholder';
import clsx from 'clsx';
import Accent from '@/components/Accent';
import ArticleList from '@/app/articles/components/ArticleList';

const ArticlesContainer: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const { isError, isLoading, list: articles } = useArticles();

  console.log('articlesarticles', articles);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (isError) {
    return (
      <main>
        <section className={clsx(isLoading && 'fade-in-start')}>
          <ContentPlaceholder />
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className={clsx(isLoading && 'fade-in-start')}>
        <div className='layout py-12'>
          <h1 className='text-3xl md:text-5xl' data-fade='0'>
            <Accent>Blog </Accent>
          </h1>
          <p className='mt-2 text-gray-600 dark:text-gray-300' data-fade='1'>
            The New York Times Developer Network
          </p>
          <StyledInput
            data-fade='2'
            className='mt-4'
            placeholder='Search...'
            onChange={handleSearch}
            value={search}
            type='text'
          />
          <ArticleList articles={articles} isLoading={isLoading} />
        </div>
      </section>
    </main>
  );
};

export default ArticlesContainer;
