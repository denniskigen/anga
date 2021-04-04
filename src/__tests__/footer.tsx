import { render, screen } from '../app-test-utils';
import { Footer } from '../components/footer';

describe('<Footer />', () => {
  const renderFooter = () => render(<Footer />);

  test('renders the app footer', async () => {
    renderFooter();

    expect(
      screen.getByText(/Designed and built with ❤️ by/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /Dennis Kigen/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/©2021 - now/i)).toBeInTheDocument();
  });
});
