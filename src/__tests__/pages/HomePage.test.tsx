import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders main header with correct text', () => {
    render(<HomePage />);

    const mainHeader = screen.getByTestId('main-header');
    expect(mainHeader).toBeInTheDocument();
    expect(mainHeader).toHaveTextContent('Frontend Technology Assessment');
  });

  it('renders paragraph with correct text', () => {
    render(<HomePage />);

    const paragraph = screen.getByText(
      /Build a simple app to hit the NY Times Most Popular Articles API/i
    );
    expect(paragraph).toBeInTheDocument();
  });
});
