import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { weather } from '../weather';
import App from '../components/app';

jest.mock('lodash', () => {
  const module = jest.requireActual('lodash');
  module.debounce = jest.fn((fn) => fn);
  return module;
});

describe('<App />', () => {
  beforeEach(() => jest.spyOn(window, 'fetch'));
  afterEach(() => jest.restoreAllMocks());

  test('clicking navbar links navigates through the app', async () => {
    renderApp();

    const aboutLink = screen.getByText(/about/i);
    const leftClick = { button: 0 };
    userEvent.click(aboutLink, leftClick);

    expect(
      screen.getByRole('heading', { name: /about anga/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Anga is a beautiful weather app that shows instant, accurate weather information for any location in the world./i,
      ),
    ).toBeInTheDocument();

    const homeLink = screen.getByRole('heading', { name: /^anga$/i });
    userEvent.click(homeLink, leftClick);
    expect(screen.queryByText(/about anga/i)).not.toBeInTheDocument();
  });

  test('fetches and renders the current weather and next day forecast', async () => {
    (window.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(weather),
      }),
    );

    renderApp();

    await screen.findByRole('heading', { name: /^anga$/i });
    expect(
      screen.getByRole('heading', { name: /nizhny novgorod/i }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(/partly-cloudy-night/i)).toBeInTheDocument();
    expect(screen.getByText(/novgorod, russia/i)).toBeInTheDocument();
    expect(screen.getByText(/sun, 9:16 pm/i)).toBeInTheDocument();
    expect(screen.getByText(/partly cloudy/i)).toBeInTheDocument();
    expect(screen.getByText(/2°C/i)).toBeInTheDocument();
    expect(screen.getByText(/feels like -1°C/i)).toBeInTheDocument();
    expect(screen.getByText(/7 km\/h w/i)).toBeInTheDocument();
    expect(screen.getByText(/0.1\s*mm/i)).toBeInTheDocument();
    expect(screen.getByText(/69\s*%/)).toBeInTheDocument();
    expect(screen.getByText(/monday/i)).toBeInTheDocument();
    expect(screen.getByText(/1°C/i)).toBeInTheDocument();
    expect(screen.getByText(/-3°/)).toBeInTheDocument();
    expect(
      screen.getByText(/Designed and built with ❤️ by/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /Dennis Kigen/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/©2021 - now/i)).toBeInTheDocument();
  });

  test('searches for and shows the current weather and next day forecast for a location', async () => {
    (window.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(weather),
      }),
    );

    renderApp();
    await screen.findByRole('heading', { name: /^anga$/i });

    expect(
      screen.queryByTitle(
        /Search for a location by name, coordinates of IP address/i,
      ),
    ).not.toBeInTheDocument();

    const searchInput = screen.getByRole('search');
    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'Berlin');

    (window.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      }),
    );

    screen.queryByTitle(/search for location/i);
  });
});

function renderApp() {
  render(<App />);
}
