import React from 'react';
import { render } from '@testing-library/react-native';
import { Navigation } from '../Navigation';

describe('Navigation Component', () => {
  it('renders the Authentication screen', () => {
    const { getByText } = render(<Navigation />);

    // Assert that the "Authentication" screen title is present
    expect(getByText('Authenticating...')).toBeTruthy();
  });
});
