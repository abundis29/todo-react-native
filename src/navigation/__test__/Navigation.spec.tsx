import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Navigation } from '../Navigation';

describe('Navigation Component', () => {
  it('renders the Authentication screen', async () => {
    const { getByText } = render(<Navigation />);

    // Wait for the "Authenticating..." text to appear
    await waitFor(() => getByText('Authentication failed. Please try again.'));

    // Assert that the "Authentication" screen title is present
    expect(getByText('Authentication failed. Please try again.')).toBeTruthy();
  });
});
