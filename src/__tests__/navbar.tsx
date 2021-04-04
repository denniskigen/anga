import { render, screen } from '../app-test-utils';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components/navbar';

describe('<Navbar />', () => {
  const renderWithRouter = (ui: any, { route = '/' } = {}) => {
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
});
