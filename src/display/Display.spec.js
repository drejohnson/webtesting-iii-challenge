import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Display from './Display.js';

describe('Display component', () => {
  it('should have "red-led" class when locked', () => {
    const { getByText } = render(<Display locked={true} />);
    const lockedDisplay = getByText(/locked/i);
    expect(lockedDisplay).toHaveTextContent(/locked/i);
    expect(lockedDisplay).toHaveClass('red-led');
  });

  it('should have "green-led" class when unlocked', () => {
    const { getByText } = render(<Display locked={false} />);
    const lockedDisplay = getByText(/unlocked/i);
    expect(lockedDisplay).toHaveTextContent(/unlocked/i);
    expect(lockedDisplay).toHaveClass('green-led');
  });

  it('should have "red-led" class when closed', () => {
    const { getByText } = render(<Display closed={true} />);

    const closedDisplay = getByText(/closed/i);

    expect(closedDisplay).toHaveClass('red-led');

    expect(closedDisplay).toHaveTextContent(/closed/i);
  });

  it('should have green-led class when open', () => {
    const { getByText } = render(<Display closed={false} />);
    const closedDisplay = getByText(/open/i);
    expect(closedDisplay).toHaveTextContent(/open/i);
    expect(closedDisplay).toHaveClass('green-led');
  });
});
