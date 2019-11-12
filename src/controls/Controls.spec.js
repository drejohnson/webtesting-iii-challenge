import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Controls from './Controls.js';

describe('Controls component', () => {
  const mock = jest.fn();

  it('is open/unlock', () => {
    const { getByText } = render(
      <Controls locked={false} closed={false} toggleClosed={mock} />,
    );

    const lockButton = getByText(/^lock gate$/i);
    expect(lockButton).toHaveAttribute('disabled');
    expect(lockButton.disabled).toBe(true);

    const closeButton = getByText(/^close gate$/i);
    expect(closeButton.disabled).toBe(false);
    fireEvent.click(closeButton);
  });

  it('is closed/unlock', () => {
    const { getByText } = render(
      <Controls locked={false} closed={true} toggleClosed={mock} />,
    );

    const lockButton = getByText(/^lock gate$/i);
    expect(lockButton.disabled).toBe(false);

    const openButton = getByText(/^open gate$/i);
    expect(openButton.disabled).toBe(false);
    fireEvent.click(openButton);
  });

  it('is closed/locked', () => {
    const { getByText } = render(
      <Controls locked={true} closed={true} toggleLocked={mock} />,
    );

    const unlockButton = getByText(/^unlock gate$/i);
    expect(unlockButton.disabled).toBe(false);

    const openButton = getByText(/^open gate$/i);
    expect(openButton.disabled).toBe(true);
    fireEvent.click(unlockButton);
  });
});
