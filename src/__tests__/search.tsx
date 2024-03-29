import React from 'react';
import { render, screen } from '@testing-library/react';
import { Search } from '../components/search';

const testProps = {
  error: new Error(''),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleSearchTermChange: () => {},
  isSearching: false,
};

describe('<Search />', () => {
  const renderSearch = () => render(<Search {...testProps} />);

  test('renders the app search', async () => {
    renderSearch();

    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        /search for a location by name, coordinates or ip address/i,
      ),
    ).toBeInTheDocument();
  });
});
