import HomePage from '@/app/page';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
export function mockFetch(data: unknown) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

// describe('Homepage', () => {
//   it('renders the Components', async () => {
//     await act(async () => {
//       window.fetch = mockFetch({});
//       render(<HomePage />);
//     });

//     const heading = screen.getByTestId('main-header');
//     expect(heading).toBeInTheDocument();
//   });
// });
