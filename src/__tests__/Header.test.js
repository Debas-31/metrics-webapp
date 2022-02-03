import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('test for Header', () => {
  test('test to return particular string', () => {
    render(
      <Header />,
      {
        wrapper: MemoryRouter,
      },
    );
    expect(screen.getByText('COVID19 statistics')).toBeInTheDocument();
  });
});
