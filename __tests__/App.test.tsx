import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Hello, Secure TODO App!');
  expect(textElement).toBeTruthy();
});
