import React from 'react';
import { render, screen, userEvent } from '../app-test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/navbar';

describe('<Navbar />', () => {
  const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return render(ui, { wrapper: BrowserRouter });
  };

  test('renders the navbar', async () => {
    renderWithRouter(<Navbar />);

    expect(
      screen.getByRole('button', { name: /open main menu/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /anga/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /anga on github/i }),
    ).toBeInTheDocument();
  });

  test('clicking the button toggles displaying the main menu', async () => {
    renderWithRouter(<Navbar />);

    const toggleButton = screen.getByRole('button', {
      name: /open main menu/i,
    });

    userEvent.click(toggleButton);

    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).toBeInTheDocument();

    userEvent.click(toggleButton);

    expect(
      screen.queryByRole('button', { name: /close main menu/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /open main menu/i }),
    ).toBeInTheDocument();
  });
});
