import Home from '../src/screens/Home';
import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

const mockNavigation: any = {
  navigate: jest.fn(),
};

test('renders Home component', () => {
  const {getByText} = render(
    <NavigationContainer>
      <Home navigation={mockNavigation} />
    </NavigationContainer>,
  );
  expect(getByText('Last Matches')).toBeTruthy();
});
