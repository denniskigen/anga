import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Navbar } from '../components/navbar';

describe('<Navbar />', () => {
  test('renders the navbar', async () => {
    renderNavbar();

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
    renderNavbar();

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

function renderNavbar() {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
}
