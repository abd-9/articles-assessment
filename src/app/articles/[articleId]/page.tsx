'use client';

import clsx from 'clsx';
import React from 'react';

import ContentPlaceholder from '@/components/ContentPlaceholder';

import ArticleDetails from '@/app/articles/components/ArticleDetails';
import useArticles from '@/app/articles/hooks/article';

export default function ArticleContainer({
  params,
}: {
  params: { articleId: string };
}) {
  const { getSelectArticleById } = useArticles();
  const selectedArticle = getSelectArticleById(params.articleId);

  return (
    <main>
      <section className={clsx(true && 'fade-in-start')}>
        {selectedArticle ? (
          <ArticleDetails article={selectedArticle} />
        ) : (
          <ContentPlaceholder msg='Not found!'></ContentPlaceholder>
        )}
      </section>
    </main>
  );
}
