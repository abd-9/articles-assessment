'use client';

import ArticleCard from '@/app/articles/components/ArticleCard';
import Accent from '@/components/Accent';
import ContentPlaceholder from '@/components/ContentPlaceholder';
import Button from '@/components/buttons/Button';
import StyledInput from '@/components/form/StyledInput';
import useArticles from '@/app/articles/hooks/article';
import clsx from 'clsx';
import React from 'react';

export default function ComponentPage() {
  const [search, setSearch] = React.useState<string>('');

  const { isError, isLoading, list: articles } = useArticles();
  console.log('articlesarticles', articles);
  const isLoaded = false; // change it  later on
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  if (isError) {
    return (
      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <ContentPlaceholder />
        </section>
      </main>
    );
  }
  return (
    <main>
      <section className={clsx(isLoaded && 'fade-in-start')}>
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
          {isLoading ? (
            <div> </div>
          ) : (
            <ul
              className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
              data-fade='5'
            >
              {articles.length > 0 ? (
                articles.map((post, index) => (
                  <ArticleCard
                    id={post.id}
                    key={index}
                    postDate={post.published_date}
                    description={post.abstract}
                    onClick={() => {}}
                    routeUrl=''
                    mediaAlt={post.title}
                    thumbnailUrl={
                      post.media?.at(0)?.['media-metadata']?.at(2)?.url || ''
                    }
                    title={post.title}
                  />
                ))
              ) : (
                <ContentPlaceholder />
              )}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
