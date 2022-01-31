import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../components/about';

describe('<About />', () => {
  const renderAbout = () => render(<About />);

  test('renders the about page', async () => {
    renderAbout();

    expect(
      screen.getByRole('heading', { name: /about anga/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: /weatherstack api/i }).length,
    ).toEqual(2);
    expect(screen.getByRole('link', { name: /react/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /heroicons/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /tailwindcss/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /weather icons by basmilius/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /dennis kigen/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Anga is a beautiful weather app that shows instant, accurate weather information for any location in the world\./i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Designed and built with ❤️ by/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/dennis kigen/i)).toBeInTheDocument();
    expect(screen.getByText(/©2021 - now/i)).toBeInTheDocument();
    expect(screen.getByAltText(/buy me a coffee/i)).toBeInTheDocument();
  });
});
