import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

const renderWithRouter = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  { route = '/' } = {},
) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

export * from '@testing-library/react';
export { render, userEvent, renderWithRouter, createMemoryHistory, Router };
