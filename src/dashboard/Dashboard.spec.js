import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './Dashboard.js';

describe('Dashboard component', () => {
  const { getByText, getByTestId } = render(<Dashboard />);

  it('displays the default state: Lock Gate, Unlocked, Open, Close Gate', () => {
    expect(getByText(/^lock gate$/i));
    expect(getByText(/^unlocked$/i));
    expect(getByText(/^open$/i));
    expect(getByText(/^close gate$/i));
  });

  it('renders display', () => {
    const { getByTestId } = render(<Dashboard />);
    const display = getByTestId('display');
    expect(display).toHaveClass('display panel');
  });

  it('renders controls', () => {
    const { getByTestId } = render(<Dashboard />);
    const controls = getByTestId('controls');
    expect(controls).toHaveClass('controls panel');
  });
});
