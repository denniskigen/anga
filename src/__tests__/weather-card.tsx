import { render, screen } from '../app-test-utils';
import { WeatherCard } from '../components/weather-card';
import { weather } from '../weather';

const { current, location } = weather;

describe('<WeatherCard />', () => {
  const renderWeatherCard = () =>
    render(<WeatherCard location={location} weather={current} />);

  test('renders the WeatherCard', async () => {
    renderWeatherCard();

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
  });
});
