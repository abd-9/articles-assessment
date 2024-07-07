import { render, screen } from '@testing-library/react';
import React from 'react';

import ArticleList from '@/app/articles/components/ArticleList';

const mockArticles = [
  {
    id: 1,
    published_date: '2024-07-01',
    abstract: 'Sample abstract 1',
    title: 'Sample Article 1',
    media: [
      {
        'media-metadata': [
          { url: 'thumbnail1.jpg' },
          { url: 'thumbnail2.jpg' },
          { url: 'thumbnail3.jpg' },
        ],
      },
    ],
  },
  {
    id: 2,
    published_date: '2024-07-02',
    abstract: 'Sample abstract 2',
    title: 'Sample Article 2',
    media: [
      {
        'media-metadata': [
          { url: 'thumbnail4.jpg' },
          { url: 'thumbnail5.jpg' },
          { url: 'thumbnail6.jpg' },
        ],
      },
    ],
  },
];

describe('ArticleList Component', () => {
  it('renders loading state correctly', () => {
    render(<ArticleList articles={[]} isLoading={true} />);

    const loadingPlaceholder = screen.getByText(/loading.../i);
    expect(loadingPlaceholder).toBeInTheDocument();
  });

  it('renders articles correctly', () => {
    render(
      <ArticleList articles={mockArticles as IArticle[]} isLoading={false} />
    );

    const articleCards = screen.getAllByTestId('article-card');
    expect(articleCards).toHaveLength(mockArticles.length);
  });
});
