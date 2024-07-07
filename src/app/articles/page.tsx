'use client';

import ArticleCard from '@/app/articles/components/ArticleCard';
import Accent from '@/components/Accent';
import ContentPlaceholder from '@/components/ContentPlaceholder';
import Button from '@/components/buttons/Button';
import StyledInput from '@/components/form/StyledInput';
import clsx from 'clsx';
import React from 'react';

export default function ComponentPage() {
  const [search, setSearch] = React.useState<string>('');
  const [articles, setArticles] = React.useState<IArticle[]>([
    sampleArticleData,
  ]);
  const isLoaded = false; // change it  later on
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <main>
      <section className={clsx(isLoaded && 'fade-in-start')}>
        <div className='layout py-12'>
          <h1 className='text-3xl md:text-5xl' data-fade='0'>
            <Accent>Blog </Accent>
          </h1>
          <p className='mt-2 text-gray-600 dark:text-gray-300' data-fade='1'>
            Thoughts, mental models, and tutorials about front-end development.
          </p>
          <StyledInput
            data-fade='2'
            className='mt-4'
            placeholder='Search...'
            onChange={handleSearch}
            value={search}
            type='text'
          />

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
        </div>
      </section>
    </main>
  );
}

const sampleArticleData: IArticle = {
  uri: 'nyt://article/2a1f8adb-b8ec-5340-8089-996e1454d3ba',
  url: 'https://www.nytimes.com/2024/07/01/well/eat/watermelon-health-benefits-recipes.html',
  id: 100000009513387,
  asset_id: 100000009513387,
  source: 'New York Times',
  published_date: '2024-07-01',
  updated: '2024-07-02 09:48:09',
  section: 'Well',
  subsection: 'Eat',
  nytdsection: 'well',
  adx_keywords:
    'Watermelons;Diet and Nutrition;Recipes;Heart;Summer (Season);Water',
  column: null,
  byline: 'By Caroline Hopkins',
  type: 'Article',
  title: 'How Healthy Is Watermelon?',
  abstract:
    'It’s hydrating, to start. Here’s what else experts had to say about this warm-weather treat — along with some refreshing recipes.',
  des_facet: [
    'Watermelons',
    'Diet and Nutrition',
    'Recipes',
    'Heart',
    'Summer (Season)',
    'Water',
  ],
  org_facet: [],
  per_facet: [],
  geo_facet: [],
  media: [
    {
      type: 'image',
      subtype: 'photo',
      caption: '',
      copyright:
        'Christopher Simpson for The New York Times. Food Stylist: Simon Andrews. Prop Stylist: Paige Hicks.',
      'media-metadata': [
        {
          url: 'https://static01.nyt.com/images/2024/06/17/multimedia/HOW-HEALTHY-WATERMELON2-hzwv/HOW-HEALTHY-WATERMELON2-hzwv-thumbStandard.jpg',
          format: 'Standard Thumbnail',
          height: 75,
          width: 75,
        },
        {
          url: 'https://static01.nyt.com/images/2024/06/17/multimedia/HOW-HEALTHY-WATERMELON2-hzwv/HOW-HEALTHY-WATERMELON2-hzwv-mediumThreeByTwo210-v3.jpg',
          format: 'mediumThreeByTwo210',
          height: 140,
          width: 210,
        },
        {
          url: 'https://static01.nyt.com/images/2024/06/17/multimedia/HOW-HEALTHY-WATERMELON2-hzwv/HOW-HEALTHY-WATERMELON2-hzwv-mediumThreeByTwo440-v3.jpg',
          format: 'mediumThreeByTwo440',
          height: 293,
          width: 440,
        },
      ],
    },
  ],
  eta_id: 0,
};
