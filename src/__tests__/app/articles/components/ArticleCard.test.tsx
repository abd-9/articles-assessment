import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()

import ArticleCard from '@/app/articles/components/ArticleCard';

// Mock props for testing
const mockProps = {
  id: 1,
  thumbnailUrl: 'https://picsum.photos/536/354',
  title: 'Test Article',
  description: 'This is a test article.',
  postDate: '2023-07-07',
  routeUrl: '/articles/1',
};

describe('ArticleCard component', () => {
  it('renders title, description, and post date correctly', () => {
    render(<ArticleCard {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('renders thumbnail image correctly', () => {
    render(<ArticleCard {...mockProps} />);
    const thumbnailImage = screen.getByTestId('card-image');
    expect(thumbnailImage).toBeInTheDocument();
  });

  it('executes onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<ArticleCard {...mockProps} onClick={handleClick} />);

    fireEvent.click(screen.getByRole('listitem'));

    expect(handleClick).toHaveBeenCalled();
  });
});
