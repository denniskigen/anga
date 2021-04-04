import React from 'react';
import { render, screen } from '../app-test-utils';
import { Forecast } from '../components/forecast';
import { weather } from '../weather';

const { forecast } = weather;

describe('<Forecast />', () => {
  const renderForecast = () =>
    render(<Forecast forecast={Object.values(forecast)} />);

  test('renders the Forecast', async () => {
    renderForecast();

    expect(screen.getByText(/monday/i)).toBeInTheDocument();
    expect(screen.getByText(/1°/i)).toBeInTheDocument();
    expect(screen.getByText(/\//i)).toBeInTheDocument();
    expect(screen.getByText(/-3°/i)).toBeInTheDocument();
  });
});
