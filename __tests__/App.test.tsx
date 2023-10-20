import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App Component', () => {
  it('renders the application', () => {
    const { getByText } = render(<App />);
    expect(getByText('Authenticating...')).toBeTruthy();
  });
});
